/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Slot;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author ru
 */
public class ProgramGenerator {

    public static String FILE_SEPARATOR = System.getProperty("file.separator");
    public static String SOURCE_FOLDER = "src"+FILE_SEPARATOR+"clojure";

    KnowledgeBase kb;

    String name;
    String folder;
    Instance namespace;
    Collection<Instance> vars;
    Collection<Instance> funcs;
    Collection<Instance> protos;
    Collection<Instance> types;
    Collection<Instance> recs;
    Collection<Instance> extypes;
    Collection<Instance> exprotos;

    @SuppressWarnings("unchecked")
	public ProgramGenerator(Instance prog) {
        kb = prog.getKnowledgeBase();
        namespace = (Instance) prog.getOwnSlotValue(kb.getSlot(Ontology.NAMESPACE_S));
        setFolderAndName((String) namespace.getOwnSlotValue(kb.getSlot(Ontology.TITLE)));
        vars = prog.getOwnSlotValues(kb.getSlot(Ontology.VARS));
        funcs = prog.getOwnSlotValues(kb.getSlot(Ontology.FUNCTIONS));
        protos = prog.getOwnSlotValues(kb.getSlot(Ontology.PROTOCOLS));
        types = prog.getOwnSlotValues(kb.getSlot(Ontology.TYPES));
        recs = prog.getOwnSlotValues(kb.getSlot(Ontology.RECORDS));
        extypes = prog.getOwnSlotValues(kb.getSlot(Ontology.EXTEND_TYPES));
        exprotos = prog.getOwnSlotValues(kb.getSlot(Ontology.EXTEND_PROTOCOLS));
    }

    private void setFolderAndName(String ns){
        String[] s = ns.split("\\.");
        name = s[s.length-1];
        folder = "";
        for (int i = 0; i < s.length-1; i++) {
            folder += s[i]+FILE_SEPARATOR;
        }
    }

    public String generateFile(){
        FileWriter fr = null;
        try {
            File sorfold = new File(SOURCE_FOLDER+FILE_SEPARATOR+folder);
            if(!sorfold.exists())
                sorfold.mkdirs();
            fr = new FileWriter(SOURCE_FOLDER+FILE_SEPARATOR+folder+FILE_SEPARATOR+name+".clj");
            generateProgram(fr);
            fr.close();
            return folder+name;
        } catch (IOException ex) {
            Logger.getLogger(ProgramGenerator.class.getName()).log(Level.SEVERE, null, ex);
            try {
                fr.close();
                return null;
            } catch (IOException ex2) {
                Logger.getLogger(ProgramGenerator.class.getName()).log(Level.SEVERE, null, ex2);
                return null;
            }
        }
    }

    public void generateProgram(Writer wr) throws IOException{
        genNamespace(wr);
        genVars(wr);
        genFuncs(wr);
        genProtos(wr);
        genTypesRecs(wr, types, "deftype");
        genTypesRecs(wr, recs, "defrecord");
        genExtendes(wr, exprotos, "extend-protocol");
        genExtendes(wr, extypes, "extend-type");
    }

    public String getName() {
        return name;
    }

    private void genNamespace(Writer wr) throws IOException{
        String nsc = (String) namespace.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
        String src = (String) namespace.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
        wr.write("(ns "+nsc+"\n"+(src==null ? "" : src)+")\n\n");
    }

    private void genVars(Writer wr) throws IOException{
        for (Instance instance : vars) {
            String nam = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
            String src = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
            wr.write("(def "+nam+" "+(src==null ? "" : src)+")\n");
        }
    }

    @SuppressWarnings("unchecked")
	private void genTypesRecs(Writer wr, Collection<Instance> whom, String what) throws IOException{
        for (Instance instance : whom) {
            String nam = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
            Collection<Instance> fls = instance.getOwnSlotValues(kb.getSlot(Ontology.FIELDS));
            Collection<Instance> ims = instance.getOwnSlotValues(kb.getSlot(Ontology.IMPLEMENTATIONS));
            wr.write("("+what+" "+nam+" [");
            for (Instance inst : fls) {
                Slot slot = (Slot) inst;
                wr.write(slot.getName()+" ");
            }
            wr.write("]\n");
            for (Instance inst : ims) {
                String pro = (String) inst.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                wr.write("\t"+pro+"\n");
                Collection<Instance> fns = inst.getOwnSlotValues(kb.getSlot(Ontology.FUNCTIONS));
                for (Instance ins : fns) {
                    String sig = (String) ins.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                    String src = (String) ins.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
                    wr.write("\t("+sig+" "+src+")\n");
                }
            }
            wr.write(")\n\n");
        }
    }

    @SuppressWarnings("unchecked")
	private void genExtendes(Writer wr, Collection<Instance> whom, String what) throws IOException{
        for (Instance instance : whom) {
            String nam = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
            Collection<Instance> ims = instance.getOwnSlotValues(kb.getSlot(Ontology.IMPLEMENTATIONS));
            wr.write("("+what+" "+nam+"\n");
            for (Instance inst : ims) {
                String pro = (String) inst.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                wr.write("\t"+pro+"\n");
                Collection<Instance> fns = inst.getOwnSlotValues(kb.getSlot(Ontology.FUNCTIONS));
                for (Instance ins : fns) {
                    String sig = (String) ins.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                    String src = (String) ins.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
                    wr.write("\t("+sig+" "+src+")\n");
                }
            }
            wr.write(")\n\n");
        }
    }

    @SuppressWarnings("unchecked")
	private void genProtos(Writer wr) throws IOException{
        for (Instance instance : protos) {
            String nam = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
            Collection<Instance> fns = instance.getOwnSlotValues(kb.getSlot(Ontology.FUNCTIONS));
            wr.write("(defprotocol "+nam+"\n");
            String previous_func = "";
            String signature = null;
            for (Instance inst : fns) {
                String title = (String) inst.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
                String[] tit = title.split("\\[");
                String func = tit[0].trim();
                String[] arg = tit[1].split("\\]");
                if(signature == null) {
                    signature = "\t("+title;
                } else if (previous_func.equals(func)) {
                    signature += " ["+arg[0]+"]";
                } else {
                    wr.write(signature+")\n");
                    signature = "\t("+title;
                }
                previous_func = func;
            }
            wr.write(signature+")\n)\n");
        }
    }

    private void genFuncs(Writer wr) throws IOException{
        for (Instance instance : funcs) {
            String func = instance.hasDirectType(kb.getCls(Ontology.MACRO)) ? "(defmacro " : "(defn ";
            String tit = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.TITLE));
            String src = (String) instance.getOwnSlotValue(kb.getSlot(Ontology.SOURCE));
            Instance doc = (Instance) instance.getOwnSlotValue(kb.getSlot(Ontology.DOC_SLOT));
            String sign = "";
            String fnam = tit;
            int sign_start = tit.indexOf("[");
            if (sign_start > 0) {
            	fnam = tit.substring(0, sign_start);
            	sign = tit.substring(sign_start);
            }
            String doc_str = "\n";
            if(doc!=null) {
            	doc_str = "\n\""+doc.getOwnSlotValue(kb.getSlot(Ontology.SOURCE))+"\"\n";
            }
            wr.write(func+fnam+sign+doc_str+(src==null ? "" : "  "+src)+")\n\n");
        }
    }
}
