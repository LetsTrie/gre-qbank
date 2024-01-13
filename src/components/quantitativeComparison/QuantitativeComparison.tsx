import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LatexBlock } from "../LatexBlock";
import { ComparisonBlock } from "./ComparisonBlock";
import { ComparisonOption } from "./ComparisonOption";
import { QuantitativeComparisonQuestionData } from "../../models";
import IndexHeader from "../IndexHeader/IndexHeader";

interface QuantitativeComparisonQuestionPropType {
  index: number;
  data: QuantitativeComparisonQuestionData;
}

const answerOptions: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];

export const QuantitativeComparisonQuestion = ({
  index,
  data,
}: QuantitativeComparisonQuestionPropType) => {
  const fontSize = data.description?.fontSize || 110;
  return (
    <div className="p-5 pt-0 pb-10 border rounded-xl light-shadow min-h-96 bg-white">
      <IndexHeader index={index} type={data.type} />
      {data.description && (
        <LatexBlock
          className="text-center pb-5 pt-3"
          fontSize={`${fontSize}%`}
          codes={data.description.latexCode}
        />
      )}
      <div className="comparison-blocks flex flex-col justify-center items-center md:flex-row">
        <ComparisonBlock
          header="Column A"
          latexCode={data.columnA.latexCode}
          latexFontSize={`${data.columnA.fontSize}%`}
          className="pb-6 md:pb-0"
        />
        <ComparisonBlock
          header="Column B"
          latexCode={data.columnB.latexCode}
          latexFontSize={`${data.columnB.fontSize}%`}
        />
      </div>

      <div className="pl-10 pt-8">
        <FormControl>
          <RadioGroup>
            {answerOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={<ComparisonOption value={option} />}
                checked={data.answer === option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
