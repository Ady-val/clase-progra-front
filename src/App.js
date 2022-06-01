import './App.css';
import Perfil from './components/Perfil';
import Pokemon from './components/Pokemon';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* {data.map(row => <Perfil data={row} /> )} */}
        <Pokemon />
      </header>
    </div>
  );
}

const data = [
  {
    name: 'Kevin',
    music: 'Rock',
    course: 'Inglés',
    age: '16',
    color: 'Blanco'
  },
  {
    name: 'Alexia',
    music: 'Rock',
    course: 'Física',
    age: '17',
    color: 'Negro'
  },
  {
    name: 'Alexis',
    music: 'Rock',
    course: 'Cálculo',
    age: '18',
    color: 'Verde'
  }
]

export default App;
