function Card(props){
  return (
    <div className="Card d-flex flex-columns p-5 mt-5">
      {props.children}
    </div>
  );
}

export default Card;