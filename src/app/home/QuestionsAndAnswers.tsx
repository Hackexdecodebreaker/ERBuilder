import React from "react";
import { Link } from "components/documentation";

type QA = {
  question: string;
  answer: React.ReactNode;
};

const QAS: QA[] = [
  {
    question:
      "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be tedious.
          A resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <div>
      {QAS.map((qa, idx) => (
        <div key={idx}>
          <h3>{qa.question}</h3>
          <div>{qa.answer}</div>
        </div>
      ))}
    </div>
  );
};
