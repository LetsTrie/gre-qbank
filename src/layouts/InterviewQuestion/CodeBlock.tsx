import classNames from "classnames";
import { ICodeBlock } from "./models";

export const CodeBlock = (props: ICodeBlock) => {
  return (
    <pre className={classNames("pb-5", props.className)}>
      <code>{props.code}</code>
    </pre>
  );
};
