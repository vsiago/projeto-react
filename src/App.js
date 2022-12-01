import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';



function App() {


  return (
    <div className="App">
      <Pessoa 
      nome={'Iago'}
      idade={29}
      profissao={'Programador'}
      foto={'https://via.placeholder.com/150'} />

      <Frase nome={'Iago'} />

      <List />
    </div>
  );
}

export default App;
