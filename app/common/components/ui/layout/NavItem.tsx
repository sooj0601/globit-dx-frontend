import {NavLink, useLocation} from 'react-router';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type SubmenuItem = {
  label: string;
  to: string;
};

type NavItemProps = {
  label: string;
  to?: string;
  subMenu?: SubmenuItem[];
  className?: string;
};

export default function NavItem({
                                  label,
                                  to,
                                  subMenu,
                                  className,
                                }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const hasSubMenu = subMenu && subMenu.length > 0;

  const isActive = to && (currentPath === to || currentPath.startsWith(to));

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      {hasSubMenu ? (
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="flex items-center h-12 px-2 lg:px-4 py-2 gap-2 font-medium text-lg hover:text-blue-500"
          onClick={() => isMobile && setIsOpen((prev) => !prev)}
        >
          {label}
          <ChevronDown
            size={16}
            className={`text-slate-800 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      ) : (
        <NavLink
          to={to || '#'}
          className={({ isActive }) =>
            `flex items-center text-lg h-12 px-2 lg:px-4 py-2 ${className} ${
              isActive ? 'font-bold text-blue-600' : 'font-medium'
            }`
          }
        >
          {label}
        </NavLink>
      )}

      {hasSubMenu && isOpen && (
        <div className="relative lg:absolute lg:top-full lg:left-0 py-2 lg:py-2 lg:px-4 bg-white lg:shadow-md rounded-2xl w-40 z-10 transition-all duration-200">
          {subMenu.map(({ label, to }) => (
            <a
              key={to}
              href={to}
              className="block px-4 py-2 hover:bg-blue-50 hover:font-bold hover:text-blue-500 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
