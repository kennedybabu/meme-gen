import Meme from "./components/Meme";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="max-w-[550px] mx-auto bg-[#e5e5e5] mt-6">
        <Nav />
        <Meme />
    </div>
  );
}

export default App;
