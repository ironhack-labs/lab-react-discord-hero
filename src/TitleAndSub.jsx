
function TitleAndSub() {
    const h1Style = {
        textTransform: 'uppercase',
        fontSize: '80px',
        lineHeight: '65px',
        transform: "scaleX(1.05)",
        marginBottom: '10px'
    }
    const pStyle = {
        fontWeight: '900',
        lineHeight: '30px',
        width: '500px',
    }
    const button = {
        padding: '12px 30px',
        borderRadius: '20px',
        fontFamily: "'Roboto',sans-serif",
        fontSize: '15px',
        border: '0px',
        marginBottom: '10px'
    }

    return (
        <div style={{display: 'flex',flexDirection:'column', alignItems: 'flex-start',gap: '10px', width:'50%'}}>
            <h1 style={h1Style}>Imagine a <br /> Place...</h1>
            <p style={pStyle}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <button style={{...button,backgroundColor: 'white', color: 'black'}}>Download for Mac</button>
            <button style={{...button,backgroundColor: '#262525', color: 'white'}}>Open Discord in your browser</button>
        </div>
    )
}

export default TitleAndSub
