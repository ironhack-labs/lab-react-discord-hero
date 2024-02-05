import React from 'react';

const MyButton = (props) => {
    
  
  const handleClick = () => {
    alert('Button clicked!');
  };
  const buttonStyle = {
    backgroundColor: props.color
    

  };
  
  return (
    <button onClick={handleClick} style={buttonStyle} className='my-button'>
    {props.inside}
  </button>
  );
};

export default MyButton;
