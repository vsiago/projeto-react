import './App.css';
import Pessoa from './components/Pessoa';



function App() {


  return (
    <div className="App">

      <Pessoa 
      nome={'Iago'}
      idade={29}
      profissao={'Programador'}
      foto={'https://via.placeholder.com/150'} />
    </div>
  );
}

export default App;
