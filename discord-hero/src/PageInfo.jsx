const titleStyle = {
  fontFamily: "poppins",
  fontStyle: "black",
  fontSize: "40px",
  lineHeight: "0.9em",
};
const textStyle = {
  // fontFamily:"poppins",
  fontSize: "11px",
  lineHeight: "1.3em",
  width: "300px",
};
function PageInfo() {
  return (
    <>
      <h1 style={titleStyle}>
        IMAGINE A<br />
        PLACE...
      </h1>
      <p style={textStyle}>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handfull of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
    </>
  );
}

export default PageInfo;
