import pic from "../assets/pic.png"


export default function Content() {
    return(
        <>
            <div style={{width:"40%"}}>
                <h1 style={{fontSize : "60px"}}>imagine a place</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            </div>
            <img src={pic} alt="" style={{position:"absolute", bottom: 0, right: 0 }}/>
        </>
    )
}

