import './App.css';
import GithubState from './context/GithubState';
import Home from './Home';

const App = () => {
  
  return (
    <GithubState>
      <div className="App">
        <h1>Hello world</h1>
        <Home></Home>
      </div>
    </GithubState>
  );
}

export default App;
