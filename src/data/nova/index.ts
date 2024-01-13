import shuffle from "../../utils/shuffle";

import factoring from "./factoring";
import dignosticTest from "./diagnosticTest";

export default shuffle([...factoring, ...dignosticTest]);
