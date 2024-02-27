import React from "react";

// TODO:
// 1. Improve the import functionality
// 2. Do central indexing

import { questionBank } from "../../data";
import { QuantitativeComparisonQuestion } from "../../components/quantitativeComparison/QuantitativeComparison";
import { MCQSelectOne } from "../../components/MCQSelectOne/MCQSelectOne";
import { MCQSelectMany } from "../../components/MCQSelectMany/MCQSelectMany";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="p-5 bg-gray-50">
      <h1 className="hero-header text-center">GRE MATH</h1>
      <div className="pb-5 text-end">
        <Box component="div" sx={{ display: "inline" }}>
          <Link to="/notes">
            <Button size="large" variant="contained">
              Notes
            </Button>
          </Link>
        </Box>
        {/* <Box ml={1} component="div" sx={{ display: "inline" }}>
          <Link to="/vocabulary">
            <Button size="large" variant="contained">
              Vocabulary
            </Button>
          </Link>
        </Box> */}
        <Box ml={1} component="div" sx={{ display: "inline" }}>
          <Link to="/interview-questions">
            <Button size="large" variant="contained">
              Interview Questions
            </Button>
          </Link>
        </Box>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        {questionBank.map((question, index) => (
          <React.Fragment key={index}>
            {question.type === "Quantitative Comparison Question" && (
              <QuantitativeComparisonQuestion
                index={index + 1}
                data={question}
              />
            )}

            {question.type ===
              "Multiple-choice Questions — Select One Answer Choice." && (
              <MCQSelectOne index={index + 1} data={question} />
            )}

            {question.type ===
              "Multiple-choice Questions — Select One or More Answer Choices." && (
              <MCQSelectMany index={index + 1} data={question} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
