import './App.css';
import Header from './components/Header';
import CreateRobot from './components/CreateRobot';
import EnemyRobot from './components/EnemyRobot';
import Footer from './components/Footer';

function App() {

  let enemyPower = Math.floor((Math.random() * 100) + 1);

  return (
    <div className="App">
      <Header />
      <div className="robots">
      <CreateRobot enemyPower={enemyPower}/>
      <EnemyRobot enemyPower={enemyPower}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
