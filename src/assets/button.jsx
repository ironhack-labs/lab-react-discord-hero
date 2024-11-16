import  "./button.css";
 
function button({type,text}){
    return <button className ={`Button ${type}`}>{text}</button>

}
export default button;