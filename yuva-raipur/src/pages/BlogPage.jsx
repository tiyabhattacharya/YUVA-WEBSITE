import React, { useState, useEffect } from "react";

const BlogPage = () => {
  // Dummy data
  const currentAffairs = [
    { title: "Budget 2025 Announced", urgent: true },
    { title: "NASA’s New Moon Mission", urgent: false },
    { title: "State Elections 2025 Results", urgent: true },
    { title: "Global Climate Summit 2025", urgent: false },
  ];

  const quizQuestions = [
    {
      question: "Who is the current President of India?",
      options: ["Droupadi Murmu", "Ram Nath Kovind", "Pratibha Patil"],
      answer: "Droupadi Murmu",
    },
    {
      question: "What is the capital of Chhattisgarh?",
      options: ["Raipur", "Bilaspur", "Durg"],
      answer: "Raipur",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const [timeLeft, setTimeLeft] = useState(100 * 24 * 60 * 60); // 100 days in seconds

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const handleOptionSelect = (qIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: option });
  };

  const handleSubmitQuiz = () => {
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Current Affairs */}
      <div className="col-span-3 bg-white rounded-lg shadow p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Current Affairs</h2>
        <div className="flex-1 overflow-y-auto space-y-3">
          {currentAffairs.map((item, index) => (
            <div key={index} className="p-2 border-b">
              <span className="font-medium">{item.title}</span>
              {item.urgent && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded">
                  Breaking
                </span>
              )}
            </div>
          ))}
        </div>
        <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          📲 Download App
        </button>
      </div>

      {/* Main Article */}
      <div className="col-span-6 bg-white rounded-lg shadow p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Trending News</h2>
        <p className="text-gray-700">
          From the Hearts of YUVA Volunteers

We, the volunteers of YUVA, have always believed that youth potential is like a seed — it needs the right soil, care, and direction to grow. Over the years, we have taught, mentored, and learned alongside thousands of young minds. Today, we see YUVA evolving into something larger — a space where every dimension of youth growth finds a home.

In our coaching classrooms, we watch aspirants sharpen their knowledge, their discipline, and their focus — preparing for exams that open doors to service and leadership. But we know that success goes beyond marks and ranks.

Through skill development programs, we see youth learning how to communicate, adapt, innovate, and work with modern tools. The hybrid model lets us reach those far away, ensuring that location never limits learning.

And in our experience exchange platforms, magic happens — a civil servant shares lessons from the field, an entrepreneur talks about their first failed venture, an artist explains how creativity can solve real problems. These moments inspire as much as any textbook.

For us, the three pillars are not separate — they are connected like roots, trunk, and branches of the same tree. Knowledge gives strength, skills give direction, and experience gives wisdom. Together, they make the YUVA ecosystem strong enough to nurture every dream.

We are not just building careers here; we are shaping lives. And as volunteers, we are proud to be the hands that help this tree grow.

— YUVA Volunteers
        </p>
        <button className="text-blue-600 mt-2 hover:underline">
          {/* Read More */}
        </button>

        {/* Countdown */}
        <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg shadow-inner animate-pulse">
          <h3 className="text-lg font-semibold mb-2">
            100 Days Challenge Countdown
          </h3>
          <p className="text-xl font-bold">{formatTime(timeLeft)}</p>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-4 sticky bottom-0 bg-white py-2">
          <a
            href="#"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Telegram
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* GK Quiz */}
      <div className="col-span-3 bg-white rounded-lg shadow p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">GK Quiz</h2>
        <div className="flex-1 overflow-y-auto space-y-4">
          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} className="border-b pb-2">
              <p className="font-medium">{q.question}</p>
              <div className="mt-2 space-y-1">
                {q.options.map((opt, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionSelect(qIndex, opt)}
                    className={`block w-full text-left px-3 py-1 rounded ${
                      selectedAnswers[qIndex] === opt
                        ? "bg-blue-100 border border-blue-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showResult && (
                <p
                  className={`mt-1 text-sm ${
                    selectedAnswers[qIndex] === q.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAnswers[qIndex] === q.answer
                    ? "✅ Correct"
                    : `❌ Incorrect (Answer: ${q.answer})`}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmitQuiz}
          className="mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
