import React, { useState, useEffect } from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-10 py-5 border-b'>
      <img
        src='https://cuvette.tech/app/static/media/logo.74bda650.svg'
        alt=''
      />
      {/* profile card */}
      <div className='flex items-center border p-2 gap-3 rounded-md cursor-pointer'>
        <img
          className='w-7 h-7 rounded-full'
          src='https://pbs.twimg.com/profile_images/1506852720648486914/8GDg7Fxh_400x400.jpg'
          alt=''
        />
        <h4>Surya Ashish</h4>
      </div>
    </header>
  );
};

export default Header;
