import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LatexBlock } from "../LatexBlock";
import { McqOption } from "../McqOption";
import { MCQSelectOneQuestionData } from "../../models";
import calcFontSize from "../../utils/calcFontSize";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import IndexHeader from "../IndexHeader/IndexHeader";

interface MCQSelectOnePropType {
  index: number;
  data: MCQSelectOneQuestionData;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #717171",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  pt: 2,
  pr: 2,
};

export const MCQSelectOne = ({ index, data }: MCQSelectOnePropType) => {
  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => setOpenModal(false);
  const [findSolution, setFindSolution] = useState(false);

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
            <RadioGroup>
              {data.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={
                    <McqOption className="ml-2">
                      <LatexBlock
                        codes={option.latexCode}
                        fontSize={calcFontSize(option.fontSize || 130)}
                      />
                    </McqOption>
                  }
                  checked={
                    data.solution
                      ? findSolution && data.answer === option.value
                      : data.answer === option.value
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      {data.solution && !findSolution && (
        <div className="pt-3 text-center">
          <Button variant="contained" onClick={() => setFindSolution(true)}>
            Check Solution
          </Button>
        </div>
      )}

      {data.solution && findSolution && (
        <div className="pt-3 text-center">
          <Button variant="contained" onClick={() => setOpenModal(true)}>
            Tutorial
          </Button>
        </div>
      )}

      <Modal
        open={openModal}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <div className="text-end">
              <IconButton aria-label="close" onClick={onCloseModal}>
                <IoClose size={35} />
              </IconButton>
            </div>
            <div
              style={{ fontWeight: "bold", color: "#400f03" }}
              className="pb-5"
            >
              <LatexBlock
                codes={data.question.latexCode}
                fontSize={calcFontSize(125)}
                className="pr-6"
              />
              <div style={{ color: "#13a200", fontSize: 22 }}>
                <span>Correct Answer: </span> <span>{data.answer}</span>
              </div>
            </div>

            <div style={{ color: "#4a4a4a" }}>
              {data.solution && (
                <LatexBlock
                  codes={data.solution.latexCode}
                  fontSize={calcFontSize(92)}
                  className="pr-6"
                />
              )}
            </div>
          </Box>
        </>
      </Modal>
    </div>
  );
};
