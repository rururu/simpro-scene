/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import java.io.IOException;
import java.io.PipedWriter;

/**
 *
 * @author ru
 */
public class PipedLineWriter extends PipedWriter {

    public void writeMultiLine(String line) throws IOException{
        line += '\f';
        char[] buf = new char[line.length()];
        line.getChars(0, line.length(), buf, 0);
        write(buf, 0, line.length());
    }

}
