import dibujos from '../assets/discord-background.png'
function Image() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'flex-end',
      }}
    >
      <img src={dibujos} alt="" />
    </div>
  )
}
export default Image
