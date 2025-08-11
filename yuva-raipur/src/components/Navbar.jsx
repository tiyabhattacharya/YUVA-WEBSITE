import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">YourLogo</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavItem label="Home" to="/" />

          <DropdownNav
            label="About"
            items={[
              ['About Yuva', '/about/yuva'],
              ['Man Behind YUVA', '/man-behind-yuva'], 
              ['Mission and Vision', '/mission-vision'],
              ['Teaching Faculty', '/about/faculty'],
              ['Executive Body', '/about/executive'],
              ['Our Supporters', '/about/supporters'],
              ['Achievements', '/about/achievements'],
            ]}
          />

          <NavItem label="Courses" to="/courses" />

          <DropdownNav
            label="Admission"
            items={[
              ['Registration Form', '/admission/form'],
              ['Registered Students', '/admission/students'],
            ]}
          />

          <NavItem label="Mentor" to="/mentor" />
          <NavItem label="Achievements" to="/achievements" />
          <NavItem label="Blog" to="/blog" />

          <DropdownNav
            label="Gallery"
            items={[
              ['Photo Gallery', '/gallery/photos'],
              ['Video Gallery', '/gallery/videos'],
              ['Media Gallery', '/gallery/media'],
            ]}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <MobileNavItem label="Home" to="/" setIsOpen={setIsOpen} />

          <MobileDropdown
            label="About"
            items={[
              ['About Yuva', '/about/yuva'],
              ['Man Behind YUVA', '/manbehindyuva'], // ✅ FIXED LINK
              ['Mission and Vision', '/about/mission'],
              ['Teaching Faculty', '/about/faculty'],
              ['Executive Body', '/about/executive'],
              ['Our Supporters', '/about/supporters'],
              ['Achievements', '/about/achievements'],
            ]}
            setIsOpen={setIsOpen}
          />

          <MobileNavItem label="Courses" to="/courses" setIsOpen={setIsOpen} />

          <MobileDropdown
            label="Admission"
            items={[
              ['Registration Form', '/admission/form'],
              ['Registered Students', '/admission/students'],
            ]}
            setIsOpen={setIsOpen}
          />

          <MobileNavItem label="Mentor" to="/mentor" setIsOpen={setIsOpen} />
          <MobileNavItem label="Achievements" to="/achievements" setIsOpen={setIsOpen} />
          <MobileNavItem label="Blog" to="/blog" setIsOpen={setIsOpen} />

          <MobileDropdown
            label="Gallery"
            items={[
              ['Photo Gallery', '/gallery/photos'],
              ['Video Gallery', '/gallery/videos'],
              ['Media Gallery', '/gallery/media'],
            ]}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </nav>
  );
}

function NavItem({ label, to }) {
  return (
    <Link
      to={to}
      className="hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md transition duration-300"
    >
      {label}
    </Link>
  );
}

function DropdownNav({ label, items }) {
  return (
    <div className="relative group">
      <button className="hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md transition duration-300">
        {label}
      </button>
      <div className="absolute top-full left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300 ease-out bg-white text-blue-900 shadow-lg rounded-md py-2 w-52 z-50">
        {items.map(([name, path]) => (
          <Link
            key={name}
            to={path}
            className="block px-4 py-2 hover:bg-blue-100 transition"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({ label, to, setIsOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className="block px-4 py-2 hover:bg-white hover:text-blue-900 rounded-md transition duration-300"
    >
      {label}
    </Link>
  );
}

function MobileDropdown({ label, items, setIsOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 hover:bg-white hover:text-blue-900 rounded-md transition"
      >
        {label}
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-1">
          {items.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-1 text-sm hover:underline"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
