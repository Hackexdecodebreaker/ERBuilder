import { Link } from "components/documentation";

const QAS = [
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
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          Erudite Resume Builder saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary,
          a resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets Erudite Resume Builder apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          There are other free resume builders (for example,
          <Link href="https://rxresu.me/">Reactive Resume</Link> and
          <Link href="https://flowcv.com/">FlowCV</Link>), but Erudite Resume
          Builder focuses on a small set of features that produce consistent and
          ATS-friendly resumes.
        </p>
        <p>
          <span className="font-semibold">
            1. Erudite Resume Builder is designed specifically for the U.S. job market and
            best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, Erudite Resume Builder intentionally only
          offers options that are aligned with U.S. best practices. For example,
          it excludes the option to add a profile picture to avoid bias and
          discrimination. It offers core sections (profile, work experience,
          education, and skills) and a single-column design that works well for
          most Applicant Tracking Systems.
        </p>
        <p>
          <span className="font-semibold">2. Privacy-focused</span>
          <br />
          Erudite Resume Builder doesn’t require sign up to use the app, and all
          inputted data is stored in the user’s browser so only the user has
          access to their data.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
