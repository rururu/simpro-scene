/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Facet;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Slot;
import edu.stanford.smi.protege.model.ValueType;
import edu.stanford.smi.protege.ui.ProjectManager;
import edu.stanford.smi.protege.util.CollectionUtilities;
import edu.stanford.smi.protege.util.ComponentFactory;
import edu.stanford.smi.protege.widget.AbstractSlotWidget;
import java.awt.event.ActionEvent;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.AbstractAction;
import javax.swing.JButton;

/**
 *
 * @author ru
 */
public class ClojureActionButton extends AbstractSlotWidget {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JButton button;
    private String  function;
    private String namespace = "clo.buttons";

    public void initialize() {

        AbstractAction buttonAction = new AbstractAction("Clojure Action", null) {
          /**
			 * 
			 */
			private static final long serialVersionUID = 1L;

		public void actionPerformed(ActionEvent event) {
              Instance instance = getInstance();
              Map<Object, Object> map = valueMap(instance);
                try {
                    ClojureTab.invoke(namespace, function, map, instance);
                } catch (Exception ex) {
                    Logger.getLogger(ClojureActionButton.class.getName()).log(Level.SEVERE, null, ex);
                }
          }
        };

        button = ComponentFactory.createButton(buttonAction);
        add(button);

        setPreferredColumns(2);
        setPreferredRows(1);
        setEditable(false);

        try {
            if (!ClojureTab.isInit()) {
                ClojureTab.initClojure();
            }
            if (!ClojureTab.isReplrun()) {
                ClojureTab.startRepl();
            }
        } catch (Exception ex) {
            Logger.getLogger(ClojureActionButton.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static boolean isSuitable(Cls cls, Slot slot, Facet facet) {
        return cls.getTemplateSlotValueType(slot) == ValueType.STRING;
    }

    @Override
    public void setValues(@SuppressWarnings("rawtypes") Collection c) {
        @SuppressWarnings("unchecked")
		String str = (String) CollectionUtilities.getFirstItem(c);
        if(str!=null){
            String[] s = str.split("/");
            if(s.length>2){
                namespace = s[1];
                button.setText(s[0]);
                function = s[2];
            } else if (s.length == 2) {
                namespace = s[0];
                button.setText(s[1]);
                function = s[1];
            } else {
                button.setText(str);
            }
            loadProgram("protege.core");
            loadProgram(namespace);
        }
    }

    private Map<Object, Object> valueMap(Instance instance){
        Map<Object, Object> map = new HashMap<Object, Object>();
        Collection<Slot> templateSlots = instance.getDirectType().getTemplateSlots();
        for (Slot slot : templateSlots) {
            Object value = (slot.getAllowsMultipleValues() ? instance.getOwnSlotValues(slot)
                                                            : instance.getOwnSlotValue(slot));
            map.put(slot.getName(), value);
        }
        map.put("clsWidget", getClsWidget());
        return map;
    }

    protected static void loadProgram(String namespace){
        KnowledgeBase kb = ProjectManager.getProjectManager().getCurrentProject().getKnowledgeBase();
        Cls pclass = kb.getCls(Ontology.PROGRAM);
        if(pclass==null){
            System.out.println(ClojureTab.prefix+"class \""+Ontology.PROGRAM+"\" not found!");
            return;
        }
        Collection<Instance> progs = kb.getInstances(pclass);
        for (Instance progi : progs) {
            Instance nsi = (Instance) progi.getOwnSlotValue(kb.getSlot(Ontology.NAMESPACE_S));
            if(nsi!=null){
                String ns = (String) nsi.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                if(ns!=null && ns.equals(namespace)){
                    ClojureTab.loadProgram(progi);
                    return;
                }
            }
        }
        System.out.println(ClojureTab.prefix+"program for namespace \""+namespace+"\" not found!");
    }
}
