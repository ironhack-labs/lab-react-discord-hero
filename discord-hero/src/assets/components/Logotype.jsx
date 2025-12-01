function Logotype({ data }) {
  
  const { logoUrl, logoAltName } = data;

    return (
    <div className="logotype d-flex justify-content-center align-items-center">
      <img src={`${logoUrl}`} alt={`${logoAltName}`} />
    </div>
  );
}

export default Logotype;