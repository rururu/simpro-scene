/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author ru
 */
public class ReplServer extends Thread {

    @Override
    public void run(){
        try {
                ClojureTab.repl();
            } catch (Exception ex) {
                Logger.getLogger(ReplServer.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
