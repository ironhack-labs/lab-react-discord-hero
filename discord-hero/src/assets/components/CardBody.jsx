import CustomButton from "./CustomButton";

function CardBody({ body }){
  
  const { title, subtitle, button1, button2 } = body;
  
  return (
    <div>
      <div className="card-body">
        <h1 className="text-white">{title}</h1>
        <h3 className="text-white">{subtitle}</h3>
      </div>
        <div className="card-button d-flex flex-column p-3 gap-2">
          <CustomButton button={button1} />
          <CustomButton button={button2}/>
        </div>
    </div>
  );
}

export default CardBody;