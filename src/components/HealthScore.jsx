import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function HealthScore() {
  const questions = [
  {
    question: "Do your gums bleed when brushing?",
    risk: 30,
  },
  {
    question: "Do you smoke or vape?",
    risk: 25,
  },
  {
    question: "Sensitivity to hot or cold?",
    risk: 20,
  },
  {
    question: "Last professional cleaning?",
    risk: 25,
  },
];

const [answers, setAnswers] = useState(
  Array(questions.length).fill(null)
);
  const c = 2 * Math.PI * 70;

const handleAnswer = (index, value) => {
  const updated = [...answers];
  updated[index] = value;
  setAnswers(updated);
};

const score = Math.max(
  0,
  100 -
    questions.reduce((total, q, index) => {
      return answers[index] === "yes"
        ? total + q.risk
        : total;
    }, 0)
);



  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Dental Health Score
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              A 60-second check-up, before you book.
            </h2>

            <p className="mt-4 text-gray-500">
              Answer four quick questions and get a personalized risk profile
              with recommended next steps.
            </p>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4"
              >
                <span className="text-sm">
                  <span className="mr-2 text-gray-400">
                    0{index + 1}
                  </span>
                 {item.question}
                </span>

                <div className="flex gap-2">
  <button
    onClick={() => handleAnswer(index, "yes")}
    className={`rounded-full border px-3 py-1 text-xs font-medium transition
      ${
        answers[index] === "yes"
          ? "bg-red-500 text-white border-red-500"
          : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
      }`}
  >
    Yes
  </button>

  <button
    onClick={() => handleAnswer(index, "no")}
    className={`rounded-full border px-3 py-1 text-xs font-medium transition
      ${
        answers[index] === "no"
          ? "bg-green-500 text-white border-green-500"
          : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
      }`}
  >
    No
  </button>
</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-lg">
          <p className="text-sm font-medium text-gray-500">
            Your dental health score
          </p>

          <div className="relative mx-auto mt-6 h-56 w-56">
            <svg
              viewBox="0 0 160 160"
              className="-rotate-90 h-full w-full"
            >
              {/* Background Circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />

              {/* Progress Circle */}
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={c}
                strokeDashoffset={c * (1 - score / 100)}
                strokeLinecap="round"
              />

              <defs>
                <linearGradient
                  id="gradient"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#4F8DFF" />
                  <stop offset="100%" stopColor="#3CBCC3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Score */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h3 className="text-5xl font-bold">{score}</h3>
                <p className="text-xs text-gray-500">out of 100</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-xs font-semibold text-teal-600">
            <CheckCircle2 size={14} />
           {score >= 80
  ? "Low Risk • Maintain routine cleaning"
  : score >= 50
  ? "Moderate Risk • Book a dental check-up"
  : "High Risk • Visit your dentist as soon as possible"}
          </div>

          {/* Tags */}
          <div className="mt-6 grid grid-cols-3 gap-3">
           {score >= 80 ? (
  <>
    <Tag label="Cleaning" />
    <Tag label="Whitening" />
    <Tag label="Routine Checkup" />
  </>
) : score >= 50 ? (
  <>
    <Tag label="Dental Cleaning" />
    <Tag label="X-Ray" />
    <Tag label="Consultation" />
  </>
) : (
  <>
    <Tag label="Urgent Checkup" />
    <Tag label="Deep Cleaning" />
    <Tag label="Treatment Plan" />
  </>
)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ label }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 text-center text-xs font-medium text-gray-500">
      {label}
    </div>
  );
}