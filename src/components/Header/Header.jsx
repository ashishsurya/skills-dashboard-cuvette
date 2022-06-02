import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img
        src='https://cuvette.tech/app/static/media/logo.74bda650.svg'
        alt=''
      />
      <div className={styles.profile__wrapper}>
        <img
          src='https://pbs.twimg.com/profile_images/1506852720648486914/8GDg7Fxh_400x400.jpg'
          alt=''
        />
        <h4>Surya Ashish</h4>
      </div>
    </header>
  );
};

export default Header;
