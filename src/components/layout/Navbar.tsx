import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navigation';
import type { User } from '../../types/user.types';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

interface NavbarProps {
  user?: User;
  className?: string;
  transparent?: boolean;
}

const Navbar = ({ user, transparent = false, className = '' }: NavbarProps) => {
  const links = NAV_LINKS;
  return (
    <nav
      className={`flex w-full px-10 py-4 transition-colors duration-300 flex-row justify-between items-center gap-4 sticky top-0 z-50 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      } ${className}`}
    >
      {/* LEFT — Logo */}
      <Logo transparent={true} />
      {/* MIDDLE — Nav links */}
      <div className='absolute left-1/2 -translate-x-1/2 flex items-center gap-16'>
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`text-sm font-normal transition-colors duration-200 ${
              transparent
                ? 'text-white hover:text-white/70'
                : 'text-navy hover:text-primary'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* RIGHT — Auth */}
      <div className='flex items-center gap-3'>
        {user && user.authenticated ? (
          // Authenticated state
          <div className='flex items-center gap-2 cursor-pointer'>
            <Avatar
              src={user.avatar}
              alt={user.name}
              initials={user.name.slice(0, 2).toUpperCase()}
              size='sm'
            />
            <span
              className={`text-sm font-medium ${
                transparent ? 'text-white' : 'text-navy'
              }`}
            >
              {user.name}
            </span>
            <span className={transparent ? 'text-white' : 'text-navy'}>▾</span>
          </div>
        ) : (
          // Unauthenticated state
          <>
            <Button
              variant='outline'
              size='sm'
              className={` w-24 ${
                transparent
                  ? 'border-white/50 text-white hover:bg-white hover:text-gray-text '
                  : ''
              }`}
            >
              Login
            </Button>
            <Button
              variant='outline'
              size='sm'
              className={` w-24 ${
                transparent
                  ? 'border-white/50 text-white hover:bg-white hover:text-gray-text'
                  : ''
              }`}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
