/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Facet;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.model.Slot;
import edu.stanford.smi.protege.model.Project;
import edu.stanford.smi.protege.model.ValueType;
import edu.stanford.smi.protege.ui.ProjectManager;
import edu.stanford.smi.protege.util.CollectionUtilities;
import edu.stanford.smi.protege.util.ComponentFactory;
import edu.stanford.smi.protege.util.LabeledComponent;
import edu.stanford.smi.protege.widget.AbstractSlotWidget;
import edu.stanford.smi.protege.widget.ClsWidget;
import java.util.Collection;
import java.util.Iterator;
import javax.swing.JComponent;
import javax.swing.JTabbedPane;

/**
 *
 * @author Ru
 */
public class TabbedSlot extends AbstractSlotWidget {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected LabeledComponent _labeledComponent;
    protected Project _project;

    public TabbedSlot() {
        setPreferredColumns(4);
        setPreferredRows(6);
    }

    public void initialize() {
       _project = ProjectManager.getProjectManager().getCurrentProject();
    }

    public static boolean isSuitable(Cls cls, Slot slot, Facet facet) {
        return cls.getTemplateSlotValueType(slot) == ValueType.INSTANCE;
    }

    @Override
    public void setValues(@SuppressWarnings("rawtypes") Collection values) {
        if(_labeledComponent != null)
            remove(_labeledComponent);
        _labeledComponent = createMainComponent(values);
        add(_labeledComponent);
        super.setValues(values);
    }
    @SuppressWarnings("unchecked")
	protected LabeledComponent createMainComponent(Collection<?> values){
        Instance instance = (Instance) CollectionUtilities.getFirstItem(values);
        Cls cls = instance.getDirectType();
        Slot sslot = getFirstStringsSlot(cls);
        Slot islot = getFirstInstancesSlot(cls);
        if(sslot == null || islot == null)
            return null;
        JTabbedPane tpane = ComponentFactory.createTabbedPane(true);
        int size = values.size();
        if(size > 64){
            System.out.println("ERROR: Too many instances "+size+" for TabbedSlot!");
            return null;
        }
        Collection<Instance> ivals = (Collection<Instance>) instance.getOwnSlotValues(islot);
        Collection<String> svals = (Collection<String>) instance.getOwnSlotValues(sslot);
        Iterator<?> siter = svals.iterator();
        for (Instance inst : ivals) {
            ClsWidget rcw = _project.createRuntimeClsWidget(inst);
            String title = (String) siter.next();
            tpane.addTab(title, ComponentFactory.createScrollPane((JComponent)rcw));
        }
        return new LabeledComponent(getLabel(), tpane, true);
    }

    protected Slot getFirstStringsSlot(Cls cls){
        Collection<Slot> tslots = cls.getTemplateSlots();
        for (Slot slot1 : tslots) {
            if(slot1.getAllowsMultipleValues()){
                if(slot1.getValueType() == ValueType.STRING)
                    return slot1;
            }
        }
        return null;
    }

    protected Slot getFirstInstancesSlot(Cls cls){
        Collection<Slot> tslots = cls.getTemplateSlots();
        for (Slot slot1 : tslots) {
            if(slot1.getAllowsMultipleValues()){
                if(slot1.getValueType() == ValueType.INSTANCE)
                    return slot1;
            }
        }
        return null;
    }
}
