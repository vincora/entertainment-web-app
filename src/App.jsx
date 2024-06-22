import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/search/Searchbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <Searchbar />
        <div className="">page content</div>
      </div>
    </div>
  );
}

export default App;
