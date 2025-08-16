// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import { FaYoutube, FaWpforms, FaExternalLinkAlt } from "react-icons/fa";

// ------------ Sample Data ------------
const slides = [
  { id: 1, src: "/slides/slide1.png", alt: "YUVA Math & Reasoning" },
  { id: 2, src: "/slides/slide2.jpeg", alt: "YUVA SSC Batch" },
  { id: 3, src: "/slides/slide3.jpeg", alt: "YUVA Railways Batch" },
  { id: 4, src: "/slides/slide4.jpeg", alt: "YUVA CGVYAPAM" },
  { id: 5, src: "/slides/slide5.jpeg", alt: "YUVA CGPSC" },
  { id: 6, src: "/slides/slide6.jpeg", alt: "YUVAs Achievers" },
  { id: 7, src: "/slides/slide7.jpeg", alt: "YUVA classes" },
  { id: 8, src: "/slides/slide8.jpeg", alt: "WHY YUVA" },
];

const notifications = [
  { id: 1, text: "100 Day Challenge — enroll now", tag: "New", link: "https://forms.gle/example" },
  { id: 2, text: "YUVA volunteer form", tag: "Alert", link: "https://forms.gle/example2" },
  { id: 3, text: "YUVA mentor form", tag: "Alert", link: "https://forms.gle/example3" },
  { id: 4, text: "YUVA support and mentorship form", tag: "Alert" },
];

const events = [
  { id: 1, title: "Sunday Special Class", date: "Aug 25, 2025", link: "https://youtube.com/watch?v=abc123" },
  { id: 2, title: "Notification template 2", date: "To be declared" },
  { id: 3, title: "Notification template 3", date: "To be declared" },
];

const exams = [
  { id: 1, name: "CGPSC", date: "2025-09-15" },
  { id: 2, name: "Teaching Exam", date: "2025-10-01" },
  { id: 3, name: "Patwari", date: "2025-11-20" },
];

// ------------ Helper for Link Detection ------------
function getLinkIcon(link) {
  if (!link) return null;
  if (link.includes("youtube.com")) return <FaYoutube className="text-red-500" />;
  if (link.includes("forms.gle")) return <FaWpforms className="text-green-500" />;
  return <FaExternalLinkAlt className="text-blue-500" />;
}

// ------------ Countdown util ------------
function calculateTimeLeft(targetDate) {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) {
    return { days: 0, hrs: 0, mins: 0, secs: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

// ------------ Main Page ------------
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-800">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500 drop-shadow">
          YUVA : Non Profit Organization
        </h1>
      </header>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Founder */}
          <aside className="md:col-span-3 bg-white rounded-lg shadow-md p-6 flex flex-col">
            <FounderCard />
          </aside>

          {/* Slideshow */}
          <div className="md:col-span-6 flex flex-col items-center">
            <HeroCarousel slides={slides} />
            <CountdownSection exams={exams} />
          </div>

          {/* Notifications + Events */}
          <aside className="md:col-span-3 flex flex-col gap-6">
            <Notifications items={notifications} />
            <EventsList items={events} />
          </aside>
        </div>
      </section>
    </main>
  );
}

// ------------ Components ------------
function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={`absolute transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            } max-h-full object-contain`}
          />
        ))}
      </div>
    </div>
  );
}

function FounderCard() {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <img
        src="/images/founder.jpg"
        alt="Founder - M. Rajiv"
        loading="lazy"
        className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-amber-200 shadow"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">श्री एम्. राजीव</h3>
      <p className="mt-2 text-sm text-gray-600">
        संस्थापक — नेतृत्व में अनुभवशील, नि:शुल्क शिक्षा के परम समर्थक और युवा सशक्तिकरण के प्रेरक।
      </p>
      <p className="mt-4 text-sm text-gray-700">
        YUVA की स्थापना 12 जनवरी 2001 को की गई — हमारा मिशन युवाओं को प्रतियोगी परीक्षाओं और सामाजिक जिम्मेदारी के माध्यम से सशक्त बनाना है।
      </p>
      <p className="mt-2 text-xs italic text-gray-500">
        "युवा — Youth Unity for Voluntary Action"
      </p>
    </div>
  );
}

function Notifications({ items }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Notifications</h4>
        <span className="text-sm text-gray-500">Latest</span>
      </div>
      <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
        {items.map((n) => (
          <li key={n.id}>
            <a
              href={n.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:bg-amber-50 p-2 rounded transition"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded bg-amber-100 text-amber-700 font-semibold text-sm">
                {getLinkIcon(n.link) || n.tag?.[0] || "!"}
              </span>
              <div>
                <p className="text-sm text-gray-700">{n.text}</p>
                <div className="mt-1 text-xs text-gray-500">• {n.tag}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EventsList({ items }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex-1">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h4>
      <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
        {items.map((e) => (
          <li key={e.id}>
            <a
              href={e.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-amber-50 rounded-md p-3 transition"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{e.title}</p>
                <p className="text-xs text-gray-500">{e.date}</p>
              </div>
              {getLinkIcon(e.link)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CountdownSection({ exams }) {
  const [timeLefts, setTimeLefts] = useState(
    exams.map((exam) => ({ id: exam.id, ...calculateTimeLeft(exam.date) }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLefts(exams.map((exam) => ({ id: exam.id, ...calculateTimeLeft(exam.date) })));
    }, 1000);
    return () => clearInterval(interval);
  }, [exams]);

  return (
    <div className="mt-6 w-full bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg shadow">
      <h4 className="text-lg font-semibold text-gray-800 mb-3">Upcoming Government Exams</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {exams.map((exam) => {
          const tl = timeLefts.find((t) => t.id === exam.id) || {};
          return (
            <div
              key={exam.id}
              className="bg-white rounded-lg p-3 text-center shadow hover:shadow-md transition"
            >
              <p className="font-medium text-amber-700">{exam.name}</p>
              <p className="text-sm text-gray-600">
                {tl.days}d {tl.hrs}h {tl.mins}m {tl.secs}s
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
