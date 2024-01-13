import { QuestionBankType } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

const makeId = (id: string) => {
  return `gregmat.factorial-${id}`;
};

const questionBank: QuestionBankType = [
  {
    id: makeId("1"),
    difficulty: "Hard",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$\\frac{27!}{27^x}$",
        "is an integer, what is the maximum possible integer value of",
        "$x?$"
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
        latexCode: formatLatexCode("$4$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$8$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$16$"),
      },
    ],
    answer: "C",
  },
  {
    id: makeId("2"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$z = 6!$",
        ", what is the sum of the two lowest composite numbers (non-primes) that are not factors of",
        "$z?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$22$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$25$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$35$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$36$"),
      },
    ],
    answer: "C",
  },
  {
    id: makeId("3"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$x = 12!$",
        ", which of the following is not a factor of",
        "$x?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$32$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$39$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$44$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$68$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$81$"),
      },
    ],
    answers: ["B", "D"],
  },
  {
    id: makeId("4"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "Which of the following numbers are powers of",
        "$2?$"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$3!$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$4!-7$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$5!+8$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$6!-200$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$7!-944$"),
      },
    ],
    answers: ["C", "E"],
  },
  {
    id: makeId("5"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "The sum of all interior angles of an n-sided polygon is equal to m!, where m is an integer. If n ≤ 10, what is the value of n?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$6$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$7$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$8$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$9$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$10$"),
      },
    ],
    answer: "A",
  },
  {
    id: makeId("6"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode("$\\frac{12!11! - 13!9!}{12!9!}$"),
      fontSize: 140,
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$85$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$97$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$100$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$127$"),
      },
    ],
    answer: "B",
  },
  {
    id: makeId("7"),
    difficulty: "Hard",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "If",
        "$n! + (n + 1)! = n!(n + x)^y$",
        ", when",
        "$n=2$",
        ", what could",
        "$x + y$",
        "equal?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$-2$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$-1$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$0$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$1$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$2$"),
      },
      {
        value: "F",
        latexCode: formatLatexCode("$3$"),
      },
    ],
    answers: ["A", "E", "F"],
  },
  {
    id: makeId("8"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One or More Answer Choices.",
    question: {
      latexCode: formatLatexCode(
        "The smallest integer such that its factorial is divisible by",
        "$125$",
        "is:"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$5$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$10$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$15$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$25$"),
      },
      {
        value: "E",
        latexCode: formatLatexCode("$125$"),
      },
    ],
    answers: ["C"],
  },
  {
    id: makeId("9"),
    difficulty: "Medium",
    source: "GregMat",
    category: ["Factorials"],
    isPremium: true,
    type: "Multiple-choice Questions — Select One Answer Choice.",
    question: {
      latexCode: formatLatexCode(
        "What is the smallest positive integer n such that n! is divisible by 45?"
      ),
    },
    options: [
      {
        value: "A",
        latexCode: formatLatexCode("$6$"),
      },
      {
        value: "B",
        latexCode: formatLatexCode("$8$"),
      },
      {
        value: "C",
        latexCode: formatLatexCode("$10$"),
      },
      {
        value: "D",
        latexCode: formatLatexCode("$12$"),
      },
    ],
    answer: "A",
  },
];

export default questionBank;
