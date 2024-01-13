import { Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MCQSelectManyQuestionData } from "../../models";
import { LatexBlock } from "../LatexBlock";
import { McqOption } from "../McqOption";
import calcFontSize from "../../utils/calcFontSize";
import IndexHeader from "../IndexHeader/IndexHeader";

interface MCQSelectManyPropType {
  index: number;
  data: MCQSelectManyQuestionData;
}

export const MCQSelectMany = ({ index, data }: MCQSelectManyPropType) => {
  return (
    <div className="p-5 pt-0 pb-10 border rounded-xl light-shadow min-h-96 bg-white">
      <IndexHeader index={index} type={data.type} />
      <div className="md:pl-5 pt-5">
        <LatexBlock
          codes={data.question.latexCode}
          fontSize={calcFontSize(data.question.fontSize || 110)}
          className="pr-6"
        />

        <div className="pt-4 pl-1">
          <FormControl>
            {data.options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Checkbox />}
                label={
                  <McqOption className="ml-2">
                    <LatexBlock
                      codes={option.latexCode}
                      fontSize={calcFontSize(option.fontSize || 130)}
                    />
                  </McqOption>
                }
                checked={
                  !!data.answers.find((answer) => answer === option.value)
                }
              />
            ))}
          </FormControl>
        </div>
      </div>
    </div>
  );
};
