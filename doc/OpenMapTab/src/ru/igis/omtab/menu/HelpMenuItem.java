package ru.igis.omtab.menu;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Properties;

import javax.swing.JMenuItem;

import ru.igis.omtab.Ontology;
import ru.igis.omtab.OpenMapTab;

import com.bbn.openmap.InformationDelegator;
import com.bbn.openmap.LightMapHandlerChild;
import com.bbn.openmap.PropertyConsumer;
import com.bbn.openmap.util.PropUtils;

import edu.stanford.smi.protege.model.KnowledgeBase;
import edu.stanford.smi.protege.model.Project;

public abstract class HelpMenuItem extends JMenuItem implements ActionListener, LightMapHandlerChild, PropertyConsumer {
	
	private static final long serialVersionUID = 1L;
	
	protected InformationDelegator informationDelegator = null;
    protected String propertyPrefix = null;

	protected String source = "";
	protected static KnowledgeBase kb = OpenMapTab.getKb();
	protected static Project prj = kb.getProject();

	public HelpMenuItem() {
		setMnemonic('u');
		addActionListener(this);
		setEnabled(false); // enabled when InformationDelegator found.
	}

	@Override
    /**
     * Standard OpenMap Component method
     * @param prefix - propery prefix
     * @param props - OpenMap properties object
     */    
    public void setProperties (String prefix, Properties props) {
    	setPropertyPrefix(prefix);
        String realPrefix = PropUtils.getScopedPropertyPrefix(prefix);
        setText(props.getProperty(realPrefix + Ontology.S_TEXT));
        source = props.getProperty(realPrefix + Ontology.S_SOURCE);
    }

    public void setInformationDelegator(InformationDelegator in_informationDelegator) {
		informationDelegator = in_informationDelegator;
		setEnabled(informationDelegator != null);
	}

	protected InformationDelegator getInformationDelegator() {
		return informationDelegator;
	}

	public abstract void actionPerformed(ActionEvent ae);

	public void findAndInit(Object someObj) {
		if (someObj instanceof InformationDelegator) {
			setInformationDelegator((InformationDelegator) someObj);
		}
	}

	public void findAndUndo(Object someObj) {
		if (someObj instanceof InformationDelegator && getInformationDelegator() == (InformationDelegator) someObj) {
			setInformationDelegator(null);
		}
	}

	@Override
	public Properties getProperties(Properties props) {
        if (props == null) {
            props = new Properties();
        }
		return null;
	}

	@Override
	public Properties getPropertyInfo(Properties list) {
        if (list == null) {
            list = new Properties();
        }
        return list;
	}

	@Override
	public String getPropertyPrefix() {
		return propertyPrefix;
	}

	@Override
	public void setPropertyPrefix(String prefix) {
		propertyPrefix = prefix;		
	}

	@Override
	public void setProperties(Properties props) {
		setProperties(getPropertyPrefix(), props);
	}

}
