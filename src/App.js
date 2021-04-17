import './App.css';
import GithubState from './context/GithubState';
import Home from './components/Home';

const App = () => {
  
  return (
    <GithubState>
      <div className="App">
        <Home></Home>
      </div>
    </GithubState>
  );
}

export default App;
