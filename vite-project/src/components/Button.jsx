export default function Button({ text, id, onClick }) {
  return (
    <div>
      <button id={id} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
