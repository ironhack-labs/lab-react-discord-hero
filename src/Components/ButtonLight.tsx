import "./ButtonLight.css";

type ButtonLightProps = {
  text: string;
};

const ButtonLight = ({ text }: ButtonLightProps) => {
  return <div className="button-light">{text} </div>;
};

export default ButtonLight;
