import { NavLink } from 'react-router';

type MypageNavItemProps = {
  label: string;
  to: string;
  className?: string;
};

export default function MypageNavItem({
  label,
  to,
  className,
}: MypageNavItemProps) {

  return (
    <NavLink
      to={to || '#'}
      end
      className={({ isActive }) =>
        `flex items-center text-lg h-10 ${className} ${
          isActive ? 'font-bold text-blue-500' : 'font-medium'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
