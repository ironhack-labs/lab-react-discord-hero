import "./ButtonDark.css";

type ButtonDarkProps = {
  text: string;
};

const ButtonDark = ({ text }: ButtonDarkProps) => {
  return <div className="button-dark">{text}</div>;
};

export default ButtonDark;
