import React from 'react';

interface HeaderProps {
  handleToggleDarkMode: (toggleCallback: (previousDarkMode: boolean) => boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode
          )
        }
        className='save'
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
