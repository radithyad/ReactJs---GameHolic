import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro'
import NavigationBar from './Components/NavigationBar';
import TrendingGame from './Components/TrendingGame';
import BestGame from './Components/BestGame';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>

      <div className='trending'>
        <TrendingGame/>
      </div>

      <div className='best'>
        <BestGame/>
      </div>
    </div>

  );
}

export default App;
