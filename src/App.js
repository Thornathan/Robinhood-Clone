import Header from "./components/Header/Header";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Stats from "./components/Stats/Stats";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
