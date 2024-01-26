import './App.css';
import Search from './Components/Search/searchbar'
import YouTubePlayer from './Components/main/controls';

function App() {
  return (
    <div className="App">
      <YouTubePlayer/>
      {/* <Search link={"Hello"} /> */}
      {/* <iframe width={400} src="https://www.youtube.com/embed/tCz8VoCF0uE?wmode=transparent"></iframe> */}
    </div>
  );
}

export default App;
