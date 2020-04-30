/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import clojure.lang.RT;
import clojure.lang.Symbol;
import clojure.lang.Var;
import clojure.lang.Keyword;
import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Project;
import edu.stanford.smi.protege.model.Slot;
import edu.stanford.smi.protege.model.SystemFrames;
import edu.stanford.smi.protege.model.WidgetDescriptor;
import edu.stanford.smi.protege.util.CollectionUtilities;
import edu.stanford.smi.protege.util.ModalDialog;
import edu.stanford.smi.protege.widget.AbstractTabWidget;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.swing.BoxLayout;
import javax.swing.DefaultComboBoxModel;
import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSplitPane;
import javax.swing.JTabbedPane;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;

/**
 *
 * @author ru
 */
public class ClojureTab extends AbstractTabWidget  {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected static String prefix = "ClojureTab: ";

    int command_history = 40;
    JComboBox<Object> funcbox;
    JButton startrepl;
    JButton stoprepl;
    JButton loadsel;
    JButton refresh;
    JButton evalbut;
    JLabel status;
    JScrollPane progs;
    JSplitPane split;
    JList<Object> ptitles;
    Object[] plist;
    private static Dimension windowSize = new Dimension(1024, 768);
    private static JTextArea repl;
    private static Project project;
    private static KnowledgeBase kb;

    private static PipedLineWriter comPlw;
    private static PipedLineReader comPlr;
    private static PipedLineWriter resPlw;
    private static PipedLineReader resPlr;

    private static boolean replrun = false;
    private static boolean init = false;
    private static Symbol S_CLOJURE_MAIN;

    private static Var V_REQUIRE;
    private static Var V_READ_STRING;
    private static Var V_EVAL;
    private static Var V_MAIN;
    private static Var V_REPL;
    private static Var V_LOAD;

    private static Keyword K_READ;
    private static Keyword K_PRINT;
    private static Keyword K_PROMPT;
    private static Keyword K_NEED_PROMPT;
    private static Keyword K_CAUGHT;

    private static String s_ruread = "(defn ru-read[rp re] (let [r (read-string (clojuretab.ClojureTab/readCommand))] (if (= r '(exit)) re r)))";
    private static String s_ruprint = "(defn ru-print[x] (clojuretab.ClojureTab/printResult (print-str x)))";
    private static String s_ruprompt = "(defn ru-prompt[])";
    private static String s_runeedprompt = "(defn ru-need-prompt[] false)";
    private static String s_rucaught = "(defn ru-caught[e] (ru-print (clojure.main/repl-exception e)))";

    private static Object ruread;
    private static Object ruprint;
    private static Object ruprompt;
    private static Object runeedprompt;
    private static Object rucaught;

    private static String EXIT_COMMAND = "(exit)";

    @Override
    public void setup(WidgetDescriptor descr, Project prj) {
        super.setup(descr, prj);
        project = prj;
        kb = prj.getKnowledgeBase();
    }

    public void initialize() {
        setLabel("Clojure");
        replrun = false;
        split = new JSplitPane();
//      split.setDividerLocation(0.2);
        split.setLeftComponent(createProgramList());

        setRightProgramComponent();
        JTabbedPane tabbed = new JTabbedPane();
        tabbed.addTab("Program", split);
        tabbed.addTab("REPL", createReplPanel());
        JPanel bpanel = new JPanel();
        addComponents(bpanel);
        add(tabbed, BorderLayout.CENTER);
        add(bpanel, BorderLayout.SOUTH);
        try {
            initClojure();
            setStatus("Clojure initialized");
        } catch (Exception ex) {
            Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
            setStatus("Clojure initialization exception!");
        }
    }

    Component createReplPanel(){
        Cls cls = kb.getCls(Ontology.FUNCALL);
        if (cls != null) {
            Collection<Instance> instances = cls.getInstances();
            Object[] funcalls = new Object[instances.size()];
            int i = 0;
            for (Instance inst : instances) {
                funcalls[i] = inst.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
                i++;
            }
            funcbox = new JComboBox<Object>(funcalls);
        } else {
            funcbox = new JComboBox<Object>();
        }
        funcbox.setPreferredSize(null);
        funcbox.setEditable(true);
        funcbox.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                Object item = funcbox.getSelectedItem();
                String acom = e.getActionCommand();
                if (acom.equals("comboBoxChanged")) {
                    DefaultComboBoxModel<Object> model = (DefaultComboBoxModel<Object>) funcbox.getModel();
                    model.insertElementAt(item, 0);
                    addFuncallToKB(item);
                    int size = model.getSize();
                    if (size > command_history) {
                        removeFuncallFromKB(model.getElementAt(size - 1));
                        model.removeElementAt(size - 1);
                    }
                }
            }
        });
        evalbut = new JButton("evaluate");
        evalbut.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                Object item = funcbox.getSelectedItem();
                doFuncall((String) item);
            }
        });
        JPanel funcpan = new JPanel();
        funcpan.setLayout(new BoxLayout(funcpan, BoxLayout.X_AXIS));
        funcpan.setBorder(new TitledBorder("Funcall"));
        funcpan.add(funcbox);
        funcpan.add(evalbut);
        repl = new JTextArea(10, 40);
        repl.setEditable(false);
        repl.setWrapStyleWord(true);
        repl.setLineWrap(true);
        JScrollPane replPane = new JScrollPane(repl);
        replPane.setBorder(new TitledBorder("REPL"));
        JPanel mpanel = new JPanel(new BorderLayout());
        mpanel.add(funcpan, BorderLayout.NORTH);
        mpanel.add(replPane, BorderLayout.CENTER);
        return mpanel;
    }

    void addComponents(JPanel panel) {
        startrepl = new JButton("Start");
        startrepl.setToolTipText("Start REPL");
        startrepl.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                try {
                    startRepl();
                    setStatus("Repl started..");
                    startrepl.setEnabled(false);
                    stoprepl.setEnabled(true);
                } catch (Exception ex) {
                    Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
                    setStatus("Start Repl Exception!");
                }
            }
        });
        stoprepl = new JButton("Stop");
        stoprepl.setToolTipText("Stop REPL");
        stoprepl.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                try {
                    stopRepl();
                    setStatus("Repl stopped..");
                    startrepl.setEnabled(true);
                    stoprepl.setEnabled(false);
                } catch (Exception ex) {
                    Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
                    setStatus("Stop Repl Exception!");
                }
            }
        });
        loadsel = new JButton("Load");
        loadsel.setToolTipText("Load Selected Programs");
        loadsel.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                setStatus(loadSelectedPrograms());
            }
        });
        refresh = new JButton("Refresh");
        refresh.setToolTipText("Refresh Program List");
        refresh.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                setStatus(refreshPrograms());
            }
        });
        status = new JLabel("Status");
        JPanel pan = new JPanel();
        pan.setBorder(new EtchedBorder());
        pan.add(status);
        panel.setLayout(new BoxLayout(panel, BoxLayout.X_AXIS));
        panel.add(pan);
        panel.add(startrepl);
        panel.add(stoprepl);
        panel.add(loadsel);
        panel.add(refresh);
        stoprepl.setEnabled(false);
    }

    private void addFuncallToKB(Object command) {
        Instance instance = findForSlotValue(Ontology.FUNCALL, Ontology.SOURCE, command);
        if (instance == null) {
            Cls cls = kb.getCls(Ontology.FUNCALL);
            if (cls == null) {
                cls = kb.createCls(Ontology.FUNCALL, CollectionUtilities.createCollection(kb.getCls(":THING")));
            }
            Instance inst = kb.createInstance(null, cls);
            inst.setOwnSlotValue(kb.getSlot(Ontology.SOURCE), command);
        }
    }

    private void removeFuncallFromKB(Object command) {
        Instance instance = findForSlotValue(Ontology.FUNCALL, Ontology.SOURCE, command);
        if (instance != null) {
            kb.deleteInstance(instance);
        }
    }

    void doFuncall(String func) {
        replappend(func + "\n");
        try {
            replappend(funcall(func) + "\n");
        } catch (Exception e) {
            setStatus(e.getMessage());
        }
    }

    public static String funcall(String funcall) throws Exception {
        if(replrun && !funcall.equals(EXIT_COMMAND)){
            comPlw.writeMultiLine(funcall);
            return resPlr.readMultiLine();
        }
        return null;
    }

    public static Instance findForSlotValue(String clsname, String slot, Object value) {
        Collection<Instance> inss;
        if (clsname != null) {
            Cls cls = kb.getCls(clsname);
            inss = cls.getInstances();
        } else {
            inss = kb.getInstances();
        }
        for (Instance inst : inss) {
            Object val = inst.getOwnSlotValue(kb.getSlot(slot));
            if (val!=null && val.equals(value)) {
                return inst;
            }
        }
        return null;
    }

    public static Instance findAnnotated(Collection<Instance> inss, String text) {
        if (inss == null && text == null) {
            return null;
        }
        SystemFrames sf = kb.getSystemFrames();
        Cls acls = sf.getAnnotationCls();
        Slot tslot = sf.getAnnotationTextSlot();
        Slot islot = sf.getAnnotatedInstanceSlot();
        Collection<Instance> ainss = acls.getInstances();
        for (Iterator<Instance> iter = ainss.iterator(); iter.hasNext();) {
            Instance ainst = (Instance) iter.next();
            Object txt = ainst.getOwnSlotValue(tslot);
            Object inst = ainst.getOwnSlotValue(islot);
            if ((inss == null || inss.contains(inst))
                    && (text == null || text.startsWith((String) txt))) {
                return (Instance) inst;
            }
        }
        return null;
    }

    public static boolean showModal(String title, Component comp, String comment) {
        final JPanel panel = new JPanel(new BorderLayout());
        JTextArea jta = new JTextArea(comment);
        jta.setBackground(new Color(1f, 1f, 0.8f));
        Font font = jta.getFont();
        jta.setFont(new Font(font.getFontName(), Font.ITALIC, font.getSize()));
        jta.setLineWrap(true);
        jta.setWrapStyleWord(true);
        panel.add(jta, BorderLayout.NORTH);
        panel.add(comp, BorderLayout.CENTER);
        panel.validate();
        Dimension size = panel.getPreferredSize();
        if (size.width <= windowSize.width && size.height <= windowSize.height) {
            comp = panel;
        } else {
            JScrollPane jsp = new JScrollPane(panel);
            jsp.setPreferredSize(windowSize);
            comp = jsp;
        }

        ModalDialog.CloseCallback callback = new ModalDialog.CloseCallback() {

            public boolean canClose(int result) {
                return true;
            }
        };

        int ret = ModalDialog.showDialog(null, comp, title,
                ModalDialog.MODE_OK_CANCEL, callback);
        return (ret == ModalDialog.OPTION_OK);
    }
    
    public static boolean showModalInstance(Instance inst, String comment) {
    	Component wgt = (Component) project.createRuntimeClsWidget(inst);
    	String ititle = (String) inst.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
    	if(ititle==null)
    		ititle = inst.getName();
    	return showModal(ititle,wgt,comment);
    }

	private static DefaultListModel<Object> advices;
	private static DefaultListModel<Map<?, ?>> pages;
	public static Object[] getAdvices() {
		if(advices!=null)
			return advices.toArray();
		else
			return null;
	}

	private static JList<Object> advicesJList;
    private static JFrame advicesJFrame;

    @SuppressWarnings({ "rawtypes", "unchecked" })
	public static void showESMessage(Object message, Map<String, String> pageMap, String html_color) {
        if (advicesJFrame == null) {
            advicesJFrame = new JFrame("Expert System Messages");
            advicesJFrame.addWindowListener(new java.awt.event.WindowAdapter() {

                public void windowClosing(java.awt.event.WindowEvent evt) {
                    advicesJFrame.dispose();
                    advicesJFrame = null;
                }
            });
            pages = new DefaultListModel<Map<?, ?>>();
            advices = new DefaultListModel<Object>();
            advicesJList = new javax.swing.JList(advices);
            advicesJList.setFont(new java.awt.Font("Monospaced",
                    java.awt.Font.PLAIN, 12));
            advicesJList.setBackground(java.awt.Color.BLACK);
            advicesJList.setForeground(java.awt.Color.GREEN);
            advicesJList.addMouseListener(
                    new MouseAdapter() {

                        public void mouseClicked(MouseEvent e) {
                            int index = advicesJList.locationToIndex(e.getPoint());
                            Map<String, String> map = (Map<String, String>) pages.get(index);
                            String urls = (String) map.get("url");
                            if (urls != null) {
                                String text = "";
                                try {
                                    URL url = new java.net.URL(urls);
                                    BufferedReader br = new BufferedReader(
                                            new InputStreamReader(
                                            new FileInputStream(url.getPath()), "UTF-8"));
                                    while (br.ready()) {
                                        text += br.readLine();
                                    }
                                    br.close();
                                } catch (Exception e1) {
                                    e1.printStackTrace();
                                }
                                Set<String> keys = map.keySet();
                                for (Object key : keys) {
                                    String value = map.get(key);
                                    if (((String) key).startsWith("?") && value != null) {
                                        text = text.replace((String) key, value);
                                    }
                                }
                                JLabel lab = new JLabel(text);
                                JScrollPane jsp = new JScrollPane(lab);
                                JFrame jf = new JFrame("Detailed Message");
                                jf.getContentPane().add(jsp);
                                jf.pack();
                                jf.setVisible(true);
                            }

                        }
                    });
            javax.swing.JScrollPane ajsp = new javax.swing.JScrollPane(
                    advicesJList);
            ajsp.setPreferredSize(new java.awt.Dimension(800, 120));
            JButton clbut = new JButton("Clear");
            clbut.addActionListener(new ActionListener() {

                public void actionPerformed(ActionEvent e) {
                    ((DefaultListModel<Object>) advicesJList.getModel()).clear();
                }
            });
            advicesJFrame.getContentPane().add(ajsp);
            advicesJFrame.pack();
        }
        if(html_color != null)
            message = "<html><body color='"+html_color+"'>"+message+ "</html></body>";
        advices.add(0, message);
        if (pageMap != null) {
            pages.add(0, pageMap);
        } else {
            pages.add(0, new HashMap<String, String>());
        }
        advicesJFrame.setVisible(true);
        advicesJFrame.toFront();
    }

    private void setRightProgramComponent() {
        Component comp = new JLabel("No Programs!");
        int sel = ptitles.getSelectedIndex();
        if (sel >= 0) {
            comp = (Component) project.createRuntimeClsWidget((Instance) plist[sel]);
        } else {
            ((JLabel) comp).setHorizontalAlignment(SwingConstants.CENTER);
            comp.setPreferredSize(new Dimension(200, 660));
        }
        split.setRightComponent(new JScrollPane(comp));
    }

    private void fillProgramList() {
        plist = kb.getCls(Ontology.PROGRAM).getInstances().toArray();
        DefaultListModel<Object> dlm = new DefaultListModel<Object>();
        for (int i = 0; i < plist.length; i++) {
            dlm.add(i, ((Instance) plist[i]).getOwnSlotValue(kb.getSlot(Ontology.TITLE)));
        }
        ptitles = new JList<Object>();
        ptitles.setModel(dlm);
        ptitles.addListSelectionListener(new javax.swing.event.ListSelectionListener() {
            public void valueChanged(javax.swing.event.ListSelectionEvent evt) {
                setRightProgramComponent();
            }
        });
        if(plist.length>0){
            ptitles.setSelectedIndex(0);
        }
    }

    Component createProgramList() {
        fillProgramList();
        progs = new JScrollPane(ptitles);
        progs.setBorder(new TitledBorder("Programs"));
        return progs;
    }

    private String refreshPrograms(){
        fillProgramList();
        progs.setViewportView(ptitles);
        return "Programs updated";
    }

    private String loadSelectedPrograms(){
        int[] sel = ptitles.getSelectedIndices();
        int cnt = 0;
        for (int i = 0; i < sel.length; i++) {
            if(loadProgram((Instance) plist[sel[i]]))
                cnt++;
        }
        return "Loaded "+cnt+" programs from "+sel.length+" selected";
    }

    public static boolean loadProgram(Instance program){
        ProgramGenerator pg = new ProgramGenerator(program);
        String genfile = pg.generateFile();
        if(genfile!=null){
            try {
                V_LOAD.invoke(genfile);
                return true;
            } catch (Exception ex) {
                Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
                return false;
            }
        }
        return false;
    }

    public static void startRepl() throws Exception{
        if(!replrun){
            openPipes();
            ReplServer rs = new ReplServer();
            rs.start();
            replrun = true;
        }
    }

    public static void stopRepl() throws Exception{
        if(replrun){
            comPlw.writeMultiLine(EXIT_COMMAND);
            resPlr.readMultiLine();
            replrun = false;
        }
    }

    private static void openPipes() throws IOException{
        comPlw = new PipedLineWriter();
        comPlr = new PipedLineReader(comPlw);
        resPlw = new PipedLineWriter();
        resPlr = new PipedLineReader(resPlw);
    }

    private static void closePipes() throws IOException{
        comPlr.close();
        resPlr.close();
        resPlw.close();
        comPlw.close();
    }

    public static String readCommand(){
        try {
            String comm = comPlr.readMultiLine();
            return comm;
        } catch (IOException ex) {
            Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }

    protected static void repl() throws IOException, Exception{
        V_REPL.invoke(
                K_READ, ruread,
                K_PRINT, ruprint,
                K_PROMPT, ruprompt,
                K_NEED_PROMPT, runeedprompt,
                K_CAUGHT, rucaught);
        closePipes();
    }

    public static void printResult(String result){
        try {
            resPlw.writeMultiLine(result);
        } catch (IOException ex) {
            Logger.getLogger(ClojureTab.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void setStatus(String stat){
        status.setText(stat);
    }

    public static boolean isReplrun() {
        return replrun;
    }

    public static boolean isInit() {
        return init;
    }

    public static Object eval(String str) throws Exception{
        if(init){
            return V_EVAL.invoke(V_READ_STRING.invoke(str));
        }
        return null;
    }

    public static void loadResourceScript(String name) throws Exception{
        RT.loadResourceScript(name);
    }

    public static void initClojure() {
        String divider = "--------------------LF--------------------";
        System.out.println(divider);
        S_CLOJURE_MAIN = Symbol.intern("clojure.main");
        System.out.println(prefix+S_CLOJURE_MAIN);
        K_READ = Keyword.intern("read");
        K_PRINT = Keyword.intern("print");
        K_PROMPT = Keyword.intern("prompt");
        K_NEED_PROMPT = Keyword.intern("need-prompt");
        K_CAUGHT = Keyword.intern("caught");
        System.out.println(prefix+K_READ+", "+K_PRINT+", "+K_PROMPT+", "+K_NEED_PROMPT+", "+K_CAUGHT);
        V_REQUIRE = RT.var("clojure.core", "require");
        V_READ_STRING = RT.var("clojure.core", "read-string");
        V_EVAL = RT.var("clojure.core", "eval");
        V_LOAD = RT.var("clojure.core", "load");
        System.out.println(prefix+V_REQUIRE+", "+V_READ_STRING+", "+V_EVAL+", "+V_LOAD);
        V_MAIN = RT.var("clojure.main", "main");
        V_REPL = RT.var("clojure.main", "repl");
        System.out.println(prefix+V_MAIN+", "+V_REPL);
        V_REQUIRE.invoke(S_CLOJURE_MAIN);
        System.out.println("ClojureTab: Require clojure.main accomplished");
        ruread = V_EVAL.invoke(V_READ_STRING.invoke(s_ruread));
        ruprint = V_EVAL.invoke(V_READ_STRING.invoke(s_ruprint));
        ruprompt = V_EVAL.invoke(V_READ_STRING.invoke(s_ruprompt));
        runeedprompt = V_EVAL.invoke(V_READ_STRING.invoke(s_runeedprompt));
        rucaught = V_EVAL.invoke(V_READ_STRING.invoke(s_rucaught));
        System.out.println(prefix+ruread+", "+ruprint+", "+ruprompt+", "+runeedprompt+", "+rucaught);
        System.out.println(divider);
        init = true;
    }

    public static void replappend(String txt){
        repl.append(txt);
        repl.setCaretPosition(repl.getText().length() - 1);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        System.out.println("ClojureTab.isReplrun() = "+ClojureTab.isReplrun());
        System.out.println("ClojureTab.initClojure()");
        ClojureTab.initClojure();
        System.out.println("ClojureTab.startRepl()");
        ClojureTab.startRepl();
        System.out.println("ClojureTab.isReplrun() = "+ClojureTab.isReplrun());
        System.out.println("ClojureTab.funcall(\"(+ 2 2)\") = "+ClojureTab.funcall("(+ 2 2)"));
        System.out.println("ClojureTab.funcall(\"(* 7 7)\") = "+ClojureTab.funcall("(* 7 7)"));
        System.out.println("..");
        System.out.println("ClojureTab.stopRepl()");
        ClojureTab.stopRepl();
        System.out.println("ClojureTab.isReplrun() = "+ClojureTab.isReplrun());
    }

    public static Object invoke(String ns, String fname) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke();
    }
    public static Object invoke(String ns, String fname, Object a1) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15, Object a16) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15, Object a16, Object a17) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15, Object a16, Object a17, Object a18) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15, Object a16, Object a17, Object a18, Object a19) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
    }
    public static Object invoke(String ns, String fname, Object a1, Object a2, Object a3, Object a4, Object a5, Object a6, Object a7, Object a8, Object a9, Object a10, Object a11, Object a12, Object a13, Object a14, Object a15, Object a16, Object a17, Object a18, Object a19, Object a20) throws Exception{
        Var func = RT.var(ns, fname);
        return func.invoke(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
    }
}
