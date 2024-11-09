// src/components/App.jsx
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Title from './Title.jsx';
import Paragraph from './Paragraph';
import Button from './Button';
import './App.css';

const App = () => {
  return (
    <div className="hero">
      <Logo />
      <Menu />
      <div className="hero-content">
        <Title text="Imagine a Place..." />
        <Paragraph text="...where you can belong to a school club, a gaming group, or a worldwide art community." />
        <Button text="Get Started" />
      </div>
    </div>
  );
};

export default App;
