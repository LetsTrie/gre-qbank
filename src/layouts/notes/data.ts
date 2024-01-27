import { ILatexCodes } from "../../models";
import { formatLatexCode } from "../../utils/formatLatexCode";

interface Notes {
  latexCodes: ILatexCodes;
}

interface NoteSection {
  headerText: string;
  notes: Notes[];
}

const thickSpace = `\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;`;

export const noteSections: NoteSection[] = [
  {
    headerText: "Arithmetic",
    notes: [
      {
        latexCodes: formatLatexCode(
          `The integer zero is neither positive nor negative, but it is even.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `$33\\frac{1}{3}\\%=\\frac{1}{3}=0.333...\\newline$`,
          `$66\\frac{2}{3}\\%=\\frac{2}{3}=0.666...\\newline$`,
          `$25\\%=\\frac{1}{4}=0.25 ${thickSpace}$`,
          `$50\\%=\\frac{1}{2}=0.50 ${thickSpace}$`,
          `$60\\%=\\frac{3}{5}=0.60\\newline$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Common measurements: \n 1 foot = 12 inches \n 1 yard = 3 feet \n 1 quart = 2 pints \n 1 gallon = 4 quarts \n 1 pound = 16 ounces`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Important approximations:\n`,
          `$\\sqrt{2} \\approx 1.4 ${thickSpace}$`,
          `$\\sqrt{3} \\approx 1.7 ${thickSpace}$`,
          `$\\pi \\approx 3.14 \\newline$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Squares:\n`,
          `$24^2 = 576${thickSpace}$`,
          `$25^2 = 625${thickSpace}$`,
          `$26^2 = 676\\newline$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `$\\frac{6}{62}$`,
          "is less than",
          `$\\frac{6}{60}.$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `$\\frac{12}{99}$`,
          "is greater than",
          `$\\frac{12}{100}.$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Important Pythagorean Triples:\n`,
          `$(10, 24, 26)${thickSpace}$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `"The remainder is r when p is divided by q" means p = qz + r; the integer z is called the quotient. For instance, "The remainder is 1 when 7 is divided by 3" means 7 = 3⋅ 2 + 1.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The average of three consecutive integers is always equal to the middle value,",
          "and is always equal to the average of the smallest and largest terms."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Mean of N consecutive integers =",
          "$a + \\frac{N-1}{2}.$",
          "(This is derived from",
          "$\\frac{\\frac{N}{2} \\{2a+(N-1)d\\}}{N}).$",
          "In a list of 10 consecutive integers, the mean will be the average of the 5th and 6th numbers."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The number of integers from A to B (inclusive): B - A + 1\n",
          "The number of integers from A to B (exclusive): B - A - 1\n"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Number of Primes from 1 to 100:\n",
          "1 to 9 (4 Primes): 2, 3, 5, 7\n",
          "10 to 19 (4 Primes): 11, 13, 17, 19\n",
          "20 to 29 (2 Primes): 23, 29\n",
          "30 to 39 (2 Primes): 31, 37\n",
          "40 to 49 (3 Primes): 41, 43, 47\n",
          "50 to 59 (2 Primes): 53, 59\n",
          "60 to 69 (2 Primes): 61, 67\n",
          "70 to 79 (3 Primes): 71, 73, 79\n",
          "80 to 89 (2 Primes): 83, 89\n",
          "90 to 99 (1 Prime): 97\n"
        ),
      },
    ],
  },
  {
    headerText: "Prime Numbers",
    notes: [
      {
        latexCodes: formatLatexCode(
          `Memorize all primes below 60: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59…`
        ),
      },
    ],
  },
  {
    headerText: "Factorization",
    notes: [
      {
        latexCodes: formatLatexCode(
          `To find how many factors 720 has, first find its prime factorization:`,
          `$2^4 * 3^2 * 5$`,
          `. All of its factors will be of the form`,
          `$2^a * 3^b * 5^c$`,
          `. Now there are five choices for a (a= 0, 1, 2, 3, or 4), three choices for b (b = 0, 1,`,
          `or 2), and two choices for c (c= 0 or 1). The total number of factors is therefore`,
          `5 x 3 x 2 = 30. 720 has 30 factors.`
        ),
      },
    ],
  },
  {
    headerText: "Divisibility",
    notes: [
      { latexCodes: formatLatexCode("3 - sum of digits divisible by 3") },
      {
        latexCodes: formatLatexCode(
          "4 - the last two digits of number are divisible by 4"
        ),
      },
      {
        latexCodes: formatLatexCode("5 - the last digit is either a 5 or zero"),
      },
      {
        latexCodes: formatLatexCode(
          "6 - even number and sum of digits is divisible by 3"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "8 - if the last three digits are divisible by 8"
        ),
      },
      { latexCodes: formatLatexCode("9 - sum of digits is divisible by 9") },
    ],
  },
  {
    headerText: "Ratios",
    notes: [
      {
        latexCodes: formatLatexCode(
          `Ratios are given by x:y, x to y, or x/y. If a question says "for every x there is/are a y," you`,
          `are most likely dealing with a ratio question.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `if there is a 2:5 ratio of boys to girls at a school, the ratio of boys to total students is`,
          `2:(5 + 2) = 2:7. 2/7 of the students are boys.`
        ),
      },
    ],
  },
  {
    headerText: "Percentages",
    notes: [
      {
        latexCodes: formatLatexCode(
          `If the price of something goes from $40 to $52, the percent change is`,
          `$\\frac{(52-40)}{40}=\\frac{12}{40}=\\frac{3}{10}=\\frac{3}{100}=30%.$`,
          `The price increases by 30%.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `If something increases by 20%, then decreases by 5%, it is not the same as if it increased by 15%. `,
          `For example: 100 -> 120 -> 114, whereas if 100 increased by 15% it would be 115.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `If a price falls by 15%, you can multiply the original value by (1 - 0.15 = 0.85) to find the new`,
          `value. 250% of the original price is the same as 150% more than the original price, and to find`,
          `either you'd multiply the original price by 2.5.`
        ),
      },
    ],
  },
  {
    headerText: "Powers and Roots",
    notes: [
      {
        latexCodes: formatLatexCode(
          `0 raised to any nonzero power is 0. Any nonzero number to the power of 0 is 1:`,
          `$7^0=1$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Fractions as exponents:`,
          `$x^{(\\frac{1}{2})}=\\sqrt{x};$`,
          `$x^{(\\frac{2}{3})}=\\sqrt[3]{x^2};$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Negative exponents:`,
          `$x^{(-1)}=\\frac{1}{x};$`,
          `$x^{(-2)}=\\frac{1}{x^2};$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Odd/even exponents:`,
          `$x^3=8\\rightarrow x=2,$`,
          `but`,
          `$x^4=16\\rightarrow x=2$`,
          `and`,
          `$x=-2$`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `To raise 10 to any power, just put that many 0s after the 1:`,
          `$10^5=100000$`,
          `, a 1 with 5 zeros.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `$\\sqrt{49}=7$`,
          `, because`,
          `$7^2=49.$`,
          `Note that even though`,
          `$(-7)^2=49$`,
          `as well, -7 is NOT considered a solution of`,
          `$\\sqrt{49};$`,
          `only the positive number counts in this case. In this case, -7 is known as an extraneous root. However, if you were given the question`,
          `$x^2=49,$`,
          "the answer would be",
          "$x=7$",
          "and",
          "$x=-7.$"
        ),
      },
    ],
  },
  {
    headerText: "Algebra",
    notes: [
      {
        latexCodes: formatLatexCode(
          `A system of two equations with two unknowns can have 0, 1, or infinitely many solutions.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `To solve a system of three equations with three variables, use substitution to reduce the problem`,
          `to two equations with two variables, and solve from there.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `If a < b and c < d, then a + c < b + d. However, this does not hold for subtracting,`,
          `multiplying, or dividing.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `Multiplying or dividing both sides of an inequality by a negative number reverses the inequality. That is, if x > y and c < 0, then cx < cy.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `If |x| < 3, then -3 < x < 3; if |x| > 3, then x > 3 or x < -3.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          `1 Trillion = `,
          `$10^3$`,
          `Billion`,
          `$${thickSpace}$`,
          `1 Billion = `,
          `$10^3$`,
          `Million`
        ),
      },
      {
        latexCodes: formatLatexCode(`$2^0+2^1+2^2+...+2^n = 2^{n+1} - 1$`),
      },
      {
        latexCodes: formatLatexCode(
          `If given a quadratic inequality (i.e.,`,
          `$ax^2+bx+c<0$`,
          `first solve for when the expression is equal to 0, then use a number line to check which values of x fulfill the inequality.`
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Quadratic Formula:",
          "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$",
          "are the solutions of the equation",
          "$ax^2 + bx + c = 0.$"
        ),
      },
    ],
  },
  {
    headerText: "Geometry",
    notes: [
      {
        latexCodes: formatLatexCode(
          "There are four major types of angle measures:\n",
          "An acute angle has measure less than 90˚.\n",
          "A right angle has measure 90˚.\n",
          "An obtuse angle has measure greater than 90˚.\n",
          "A straight angle has measure 180°."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Two angles are supplementary if their angle sum is 180˚."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Two angles are complementary if their angle sum is 90˚."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "When two straight lines meet at a point, they form four angles. The angles opposite each other are called vertical angles, and they are congruent (equal). In the figure to the right, a = b, and c = d.",
          "#./images/image-3.png#"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "When parallel lines are cut by a transversal, three important angle relationships exist:",
          "#./images/image-4.png#"
        ),
      },
    ],
  },
  {
    headerText: "Geometry: Triangle",
    notes: [
      {
        latexCodes: formatLatexCode(
          "An isosceles right triangle (45-45-90) has sides in a ratio of x : x : x√2"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "A 30-60-90 triangle has sides in a ratio of x:x√3:2x, with the 1x side opposite the 30 degree angle."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "An equilateral triangle has three equal sides. Each angle is equal to 60 degrees"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "A right triangle has a right angle (a 90 degree angle); the side opposite the right angle is called the hypotenuse, and is always the longest side."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The length of the longest side can never be greater than the sum of the two other sides."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The length of the shortest side can never be less than the positive difference of the other two sides."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "A triangle with two equal sides is called isosceles. The angles opposite the equal sides are called the base angles."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "In an equilateral triangle, all three sides are equal and each angle is 60°."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The altitude to the base of an isosceles or equilateral triangle bisects the base and bisects the vertex angle.",
          "#./images/image-5.png#"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "In a triangle, the longer side is opposite the larger angle."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Two triangles are similar (same shape and usually different size) if their corresponding angles are equal. If two triangles are similar, their corresponding sides are proportional:",
          "#./images/image-6.png#"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "If two angles of a triangle are congruent to two angles of another triangle, the triangles are similar. In the figure, the large and small triangles are similar because both contain a right angle and they share ∠A.",
          "#./images/image-7.png#"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Two triangles are congruent (identical) if they have the same size and shape."
        ),
      },
    ],
  },
  {
    headerText: "Geometry: Circle",
    notes: [
      {
        latexCodes: formatLatexCode(
          "If two inscribed angles hold the same chord, the two inscribed angles are equal."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "An inscribed angle holding the diameter is a right angle (90 degrees)."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "Inscribed angles holding chords/arcs of equal length are equal."
        ),
      },
    ],
  },
  {
    headerText: "Geometry: Quadrilaterals",
    notes: [
      {
        latexCodes: formatLatexCode(
          "Opposite sides of a parallelogram are both parallel and congruent. The diagonals of a parallelogram bisect each other."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "A parallelogram with four right angles is a rectangle."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The diagonals of a Square or Rhombus bisect one another, forming four 90 degree angles."
        ),
      },
      {
        latexCodes: formatLatexCode(
          "A quadrilateral with only one pair of parallel sides is a trapezoid. The parallel sides are called bases, and the non-parallel sides are called legs:"
        ),
      },
    ],
  },
  {
    headerText: "3D Shapes: Rectangular Solids",
    notes: [
      {
        latexCodes: formatLatexCode("Volume =", "$height * width * depth$"),
      },
      {
        latexCodes: formatLatexCode(
          "Surface Area =",
          "$(2 * height * width) + (2 * depth * width) + (2 * height * depth)$"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "For cube, Volume =",
          "$s^3$",
          "and Surface Area =",
          "$6s^2$"
        ),
      },
      {
        latexCodes: formatLatexCode(
          "The volume of a cube and the surface area of a cube are equal when s = 6."
        ),
      },
    ],
  },
  {
    headerText: "3D Shapes: Cylinder",
    notes: [
      {
        latexCodes: formatLatexCode("Volume = ", "$\\pi r^2h$"),
      },
      {
        latexCodes: formatLatexCode("Surface Area =", "$2\\pi r^2 + 2\\pi rh$"),
      },
    ],
  },
  {
    headerText: "Coordinate Geometry: Line",
    notes: [
      {
        latexCodes: formatLatexCode(
          "The slopes of two lines which are perpendicular to each other are in the ratio of x : -1/x, where x is the slope of one of the lines"
        ),
      },
    ],
  },
  {
    headerText: "Coordinate Geometry: Quadratics",
    notes: [
      {
        latexCodes: formatLatexCode(
          "The graph of",
          "$y=ax^2+bx+c$",
          "is a symmetrical shape called a parabola, which open upwards if a > 0 and down if a < 0."
        ),
      },
    ],
  },
  {
    headerText: "TODO List",
    notes: [
      {
        latexCodes: formatLatexCode(
          "Manhattab 5Lb. Book of GRE Practice Problems\n",
          "- Chapter 07: Arithmetic: 12, 16, 18, 19, 20, 21, 24, 34, 37.\n",
          "- Chapter 08: Algebra: 5, 11, 21, 25, 26, 37, 41, 44, 49, 52.\n",
          "- Chapter 09: Inequalities and Absolute Values: 9, 18, 19, 21, 22, 23, 25, 26, 27, 28, 30... (Continue from 31-55.)\n",
          "- Chapter 10: Functions, Formulas, and Sequences: 4, 11, 12... (Continue from 13.)\n",
          "- Chapter 20: Ratios: 1, 2, 3, 14, 17, 21, 23... (Continue from 24.)\n",
          "- Chapter 21: Averages, Weighted Averages, Median, and Mode: 2, 5, 8... (Continue from 12.)\n",
          "- Chapter 23: Probability, Combinatorics, and Overlapping Sets: 1, 3, 12, 18, 19, 20, 21, 22... (Continue from 23.)\n",
          "- Chapter 28: Coordinate Geometry: 1, 7, 8, 10, 15, 16, 17, 23, 24, 28, 29, 30.\n",
          "- Chapter 33: (Math Practice Section 1: Easy Difficult): 4, 6, 7, 20.\n",
          "- Chapter 33: (Math Practice Section 2: Medium Difficult): 3, 5, 7, 12, 13, 14, 16, 18, 20.\n"
        ),
      },
    ],
  },
];
