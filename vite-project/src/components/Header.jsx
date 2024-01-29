export default function Header({ title, subtitle }) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
    </div>
  );
}
