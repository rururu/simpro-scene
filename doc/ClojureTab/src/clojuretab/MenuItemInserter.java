/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import edu.stanford.smi.protege.model.Project;
import edu.stanford.smi.protege.plugin.AbstractProjectPlugin;
import edu.stanford.smi.protege.ui.ProjectMenuBar;
import edu.stanford.smi.protege.ui.ProjectToolBar;
import edu.stanford.smi.protege.ui.ProjectView;
import java.awt.event.ActionEvent;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.AbstractAction;
import javax.swing.JMenu;
import javax.swing.JMenuItem;

/**
 *
 * @author ru
 */
public class MenuItemInserter extends AbstractProjectPlugin {
    
    String namespace = "menu.item";

    public void afterCreate(Project prjct) {
        // do nothing
    }

    public void afterLoad(Project prjct) {
        // do nothing
    }

    public void afterSave(Project prjct) {
        // do nothing
    }

    public void afterShow(ProjectView pv, ProjectToolBar ptb, ProjectMenuBar pmb) {
        JMenu tMenu = pmb.getMenu(1);
        AbstractAction cwAction = new AbstractAction("Clojure Work") {
          /**
			 * 
			 */
			private static final long serialVersionUID = 1L;

		public void actionPerformed(ActionEvent event) {
              String function = "clojure-work";
                try {
                    if (!ClojureTab.isInit()) {
                        ClojureTab.initClojure();
                    }
                    if (!ClojureTab.isReplrun()) {
                        ClojureTab.startRepl();
                    }
                    ClojureActionButton.loadProgram("protege.core");
                    ClojureActionButton.loadProgram(namespace);
                    ClojureTab.invoke(namespace, function);
                } catch (Exception ex) {
                    Logger.getLogger(ClojureActionButton.class.getName()).log(Level.SEVERE, null, ex);
                }
          }
        };

        tMenu.add(new JMenuItem(cwAction));

    }

    public void beforeSave(Project prjct) {
        // do nothing
    }

    public void beforeHide(ProjectView pv, ProjectToolBar ptb, ProjectMenuBar pmb) {
        // do nothing
    }

    public void beforeClose(Project prjct) {
        // do nothing
    }

    public String getName() {
        return "Menu Item Inserter";
    }

    public void dispose() {
        // do nothing
    }

}
