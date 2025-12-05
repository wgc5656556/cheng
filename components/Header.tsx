import React from 'react';

// This component is now deprecated as the header logic is moved to App.tsx for better state integration
// But keeping it valid to avoid build errors if imported elsewhere, though App.tsx no longer uses it.
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return null;
};

export default Header;
