import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Query from "./Query";
import KudosBoardlist from "./KudosBoardList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Query />
      <KudosBoardlist />
    </div>
  );
}

export default App;
