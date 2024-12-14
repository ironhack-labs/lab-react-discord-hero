import People from '../../assets/discord-background.png'
import './background.css'

function Background(){
    return(
        <div className='background'>
             <img src={People} alt='background_image' className='background' />
        </div>
       
    )
}

export default Background;