import { Calendar } from 'lucide-react'; // Using lucide-react icons as you have lucide in your project

const DoNotMissStrip = () => {
  const courses = [
    'CGVYAPAM',
    'RAILWAY',
    'CG PSC',
    'BANKING',
    'SSC',
    'PSC Foundation',
    'General Knowledge',
    'Current Affairs',
  ];

  // Repeat the array twice for seamless scrolling effect
  const scrollingText = [...courses, ...courses];

  return (
    <div className="flex items-center bg-amber-600 text-white px-4 py-2 select-none overflow-hidden">
      {/* Fixed Button with calendar icon */}
      <button className="flex items-center bg-amber-800 hover:bg-amber-900 transition-colors duration-300 px-4 py-2 rounded-l-md font-semibold">
        <Calendar className="w-5 h-5 mr-2" />
        Do Not Miss
      </button>

      {/* Scrolling text container */}
      <div className="flex-1 overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: '12s' }} // slower speed
        >
          {scrollingText.map((course, idx) => (
            <span
              key={idx}
              className="mx-8 font-medium"
              aria-label={course}
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoNotMissStrip;
