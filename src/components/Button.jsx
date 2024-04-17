import "./Button.css";
const Button = ({ content, className }) => {
  return <div><button className={className}>{content}</button></div>;
};
export default Button;
