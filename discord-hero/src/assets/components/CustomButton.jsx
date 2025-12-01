function CustomButton({ button }){
  
  const { text, textColor, backgroundColor } = button;
  return (
    <button className={`custom-button button rounded-pill border-0 text-${textColor}`} style={{backgroundColor: backgroundColor}}>{text}</button>
  );
}

export default CustomButton;