import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="bg-custom-blue h-screen relative">
        <NavBar />
        <div className="pl-52 pt-24">
          <div className="text-5xl mb-4 text-white">IMAGINE A</div>
          <div className="text-5xl mb-8 text-white">PLACE....</div>
          <div>
            <h1 className="text-white">
              For example, is it a concept that you dont understand, or are you
            </h1>
            <h1 className="text-white">
              receiving an error message that you dont know how to fix? It is
            </h1>
            <h1 className="text-white">
              possible, including any error messages you are receiving. This can
            </h1>
            <h1 className="text-white">
              help you communicate the issue to others and potentially get help
            </h1>
          </div>
          <div className="space-y-4 justify-center items-center pt-20">
            <button className="bg-white text-black py-2 px-6 rounded-full ">
              Download for Mac
            </button>
            <div>
              <button className="bg-black text-white py-2 px-6 rounded-full 0">
                Open Discord in your browser
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            className="w-300 h-300 object-cover pr-10"
            src="/src/assets/react3.png"
            alt="Decoration"
          />
        </div>
      </div>
    </>
  );
}

export default App;
