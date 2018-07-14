/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package clojuretab;

/**
 *
 * @author ru
 */
public interface Ontology {

    // classes
    public static final String FUNCALL = "CloFuncall";
    public static final String PROGRAM = "CloProgram";
    public static final String VAR = "CloVar";
    public static final String FUNCTION = "CloFunction";
    public static final String MACRO = "CloMacro";
    public static final String NAMESPACE = "CloNamespace";
    public static final String PROTOCOL = "CloProtocol";
    public static final String IMPLEMENTATION = "CloImplementation";
    public static final String TYPE = "CloType";
    public static final String RECORD = "CloRecord";
    public static final String EXTEND_TYPE = "CloExtendType";
    public static final String EXTEND_PROTOCOL = "CloExtendProtocol";
    public static final String DOCUMENTATION = "CloDocumentation";

    // slots
    public static final String TITLE = "title";
    public static final String SOURCE = "source";
    public static final String NAMESPACE_S = "cloNamespace";
    public static final String VARS = "cloVars";
    public static final String FUNCTIONS = "cloFunctions";
    public static final String PROTOCOLS = "cloProtocols";
    public static final String IMPLEMENTATIONS = "cloImplementations";
    public static final String TYPES = "cloTypes";
    public static final String RECORDS = "cloRecords";
    public static final String EXTEND_TYPES = "cloExtendTypes";
    public static final String EXTEND_PROTOCOLS = "cloExtendProtocols";
    public static final String FIELDS = "fields";
    public static final String DOC_SLOT = "documentation";
}
