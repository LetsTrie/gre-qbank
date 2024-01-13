import classNames from "classnames";
import { defaults } from "../../constants";
import { ILatexCodes } from "../../models";
import { LatexBlock } from "../LatexBlock";

export interface IComparisonBlock {
  header: string;
  latexFontSize?: string;
  latexCode: ILatexCodes;
  className?: string;
}

export const ComparisonBlock = ({
  header,
  latexFontSize = defaults.latexFontSize,
  latexCode,
  className,
}: IComparisonBlock) => {
  return (
    <div className={classNames("w-1/2 text-center", className)}>
      <p className="pb-5 font-bold">{header}</p>
      <LatexBlock fontSize={latexFontSize} codes={latexCode} />
    </div>
  );
};
