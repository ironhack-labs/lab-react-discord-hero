import "./Headline.css";

const Headline = ({ content1, content2 }) => {
  return (
    <h1>
      {content1}
      <br /> {content2} 
    </h1>
  );
};

export default Headline;
