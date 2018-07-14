/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

import java.io.IOException;
import java.io.PipedReader;

/**
 *
 * @author ru
 */
public class PipedLineReader extends PipedReader {

    PipedLineReader(PipedLineWriter plw) throws IOException {
        super(plw);
    }

    public String readMultiLine() throws IOException{
        StringBuffer sb = new StringBuffer();
        char[] buf = new char[1];
        while(read(buf, 0, 1)>0 && buf[0] != '\f')
            sb.append(buf[0]);
        return sb.toString();
    }

}
