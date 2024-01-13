import { QuestionBankType } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

const makeId = (id: string) => {
  return `500GreMath.flashCards-${id}`;
};

const questionBank: QuestionBankType = [
  {
    id: makeId("1"),
    difficulty: "Easy",
    source: "500GreMathFlashCards",
    category: ["Factoring"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "x is divisible by 42. Which of the following numbers is definitely a factor of",
        "$x^2?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$63$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$33$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$36$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$8$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$42$"),
      },
    ],
    answers: ["A", "C"],
  },
  {
    id: makeId("2"),
    difficulty: "Medium",
    source: "500GreMathFlashCards",
    category: ["Factoring"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If the units digit of an integer is 7, then which one-digit integers is it definitely NOT divisible by?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$2$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$3$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$4$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$5$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$6$"),
      },
      {
        value: "F",
        latexCode: formatLatexCode("$7$"),
      },
      {
        value: "G",
        latexCode: formatLatexCode("$8$"),
      },
    ],
    answers: ["A", "C", "D", "E", "G"],
  },
  {
    id: makeId("3"),
    difficulty: "Easy",
    source: "500GreMathFlashCards",
    category: ["Factoring"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If x is divisible by y, and both x and y are odd, could x and y be odd, even, either, or neither?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("Odd"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("Even"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("Either even or odd"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("Neither even nor odd"),
      },
    ],
    answers: ["A"],
  },
  {
    id: makeId("4"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "Simplify the following expression:",
        "$(4(6(8(9^0))^1)^{-1})^2$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$\\frac{1}{48}$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$\\frac{1}{120}$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$\\frac{1}{144}$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$\\frac{1}{384}$"),
      },
    ],
    answer: "C",
  },
  {
    id: makeId("5"),
    difficulty: "Easy",
    source: "500GreMathFlashCards",
    category: ["Factoring"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If the units digits of an integer is 0, then which nonzero one-digit integers is the integer definitely NOT divisible by, if any?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$1$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$2$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$5$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("None"),
      },
    ],
    answers: ["D"],
  },
  {
    id: makeId("6"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "if",
        "$y^7<y^6$",
        ", describe all of the possible values for y."
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$y>1$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$y<0$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$0<y<1$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$y<1$"),
      },
    ],
    answers: ["B", "C"],
  },
  {
    id: makeId("7"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$a^b < 0,$",
        "which of the following could be true?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$a<0$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$a>0$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$b=0$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("b is even"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("b is odd"),
      },
    ],
    answers: ["A", "E"],
  },
  {
    id: makeId("8"),
    difficulty: "Easy",
    source: "GregMat",
    category: ["Algebra"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If both x and y are even, Could",
        "$\\frac{x}{y}$",
        "be odd, even, either, or neither?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("Odd"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("Even"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("Neither even nor odd"),
      },
    ],
    answers: ["A", "B", "C"],
  },
];

export default questionBank;
