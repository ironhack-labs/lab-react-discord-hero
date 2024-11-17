import './paragraph.css'

function Paragraph({className = '', text}) {
    return (
        <p className="paragraph">{text}</p>
    );
}

export default Paragraph;