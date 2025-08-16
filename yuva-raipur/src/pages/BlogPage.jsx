import React, { useState, useEffect } from "react";

const BlogPage = () => {
  // Dummy data
  const currentAffairs = [
    {
      title: "Budget 2025 Announced",
      description:
        "The government announced Budget 2025 with major reforms in education, health, and infrastructure...",
      youtube: "https://www.youtube.com/watch?v=example1",
      urgent: true,
    },
    {
      title: "NASA’s New Moon Mission",
      description:
        "NASA has launched its latest moon mission aiming to explore uncharted regions of the lunar surface...",
      youtube: "https://www.youtube.com/watch?v=example2",
      urgent: false,
    },
    {
      title: "State Elections 2025 Results",
      description:
        "The 2025 state elections results have been declared with significant shifts in the ruling parties...",
      youtube: "https://www.youtube.com/watch?v=example3",
      urgent: true,
    },
    {
      title: "Global Climate Summit 2025",
      description:
        "World leaders gathered to discuss climate change, renewable energy initiatives, and global cooperation...",
      youtube: "https://www.youtube.com/watch?v=example4",
      urgent: false,
    },
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
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "Which river flows through Paris?",
      options: ["Seine", "Thames", "Danube"],
      answer: "Seine",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", contact: "" });
  const [activeAffair, setActiveAffair] = useState(null);

  const [timeLeft, setTimeLeft] = useState(100 * 24 * 60 * 60); // 100 days

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

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Current Affairs */}
      <div className="col-span-3 flex flex-col gap-3">
        <h2 className="text-xl font-bold mb-2">Current Affairs</h2>
        <div className="flex-1 overflow-y-auto space-y-3">
          {currentAffairs.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-white shadow hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1"
              onClick={() => setActiveAffair(item)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.title}</span>
                {item.urgent && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded">
                    Breaking
                  </span>
                )}
              </div>
              <a
                href={item.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm mt-1 inline-block hover:underline"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>

        {/* Floating Current Affair Card */}
        {activeAffair && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-gradient-to-b from-white to-orange-100 rounded-xl shadow-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto relative animate-fadeIn">
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
                onClick={() => setActiveAffair(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{activeAffair.title}</h3>
              <p className="text-gray-800 mb-4">{activeAffair.description}</p>
              <a
                href={activeAffair.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline font-semibold"
              >
                Watch Full Video
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Main Article */}
      <div className="col-span-6 bg-white rounded-lg shadow p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Trending News</h2>
        <p className="text-gray-700 leading-relaxed">
          From the Hearts of YUVA Volunteers

We, the volunteers of YUVA, have always believed that youth potential is like a seed — it needs the right soil, care, and direction to grow. Over the years, we have taught, mentored, and learned alongside thousands of young minds. Today, we see YUVA evolving into something larger — a space where every dimension of youth growth finds a home.

In our coaching classrooms, we watch aspirants sharpen their knowledge, their discipline, and their focus — preparing for exams that open doors to service and leadership. But we know that success goes beyond marks and ranks.

Through skill development programs, we see youth learning how to communicate, adapt, innovate, and work with modern tools. The hybrid model lets us reach those far away, ensuring that location never limits learning.

And in our experience exchange platforms, magic happens — a civil servant shares lessons from the field, an entrepreneur talks about their first failed venture, an artist explains how creativity can solve real problems. These moments inspire as much as any textbook.

For us, the three pillars are not separate — they are connected like roots, trunk, and branches of the same tree. Knowledge gives strength, skills give direction, and experience gives wisdom. Together, they make the YUVA ecosystem strong enough to nurture every dream.

We are not just building careers here; we are shaping lives. And as volunteers, we are proud to be the hands that help this tree grow.

— YUVA Volunteers
        </p>

        {/* Countdown */}
        <div className="mt-6 text-center bg-gray-100 p-4 rounded-lg shadow-inner animate-pulse">
          <h3 className="text-lg font-semibold mb-2">100 Days Challenge Countdown</h3>
          <p className="text-xl font-bold">{formatTime(timeLeft)}</p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="col-span-3 bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">GK Quiz</h2>

        {/* Quiz Questions */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {quizQuestions.map((q, qIndex) => (
            <div key={qIndex} className="border-b pb-3">
              <p className="font-medium">{q.question}</p>
              <div className="mt-2 flex flex-col gap-2">
                {q.options.map((opt, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionSelect(qIndex, opt)}
                    className={`px-3 py-1 rounded transition ${
                      selectedAnswers[qIndex] === opt
                        ? "bg-orange-200 border border-orange-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showResult && (
                <p
                  className={`mt-1 text-sm font-semibold ${
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

        {/* User Info */}
        <div className="flex flex-col gap-3 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userInfo.name}
            onChange={handleUserInfoChange}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={userInfo.contact}
            onChange={handleUserInfoChange}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-2">
          <button
            onClick={handleSubmitQuiz}
            className="bg-orange-400 text-white px-6 py-2 rounded shadow hover:bg-orange-500 transition"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
