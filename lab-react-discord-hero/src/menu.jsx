import menu from "./assets/menu-icon.png"


const sytle = {
    displa: "flex",
    float: "right", 
    marginTop: 0
}


function Menu () {

    return (
        <div>
            <img style={sytle} src={menu} alt="menu-icon" />
        </div>
    )
}

export default Menu