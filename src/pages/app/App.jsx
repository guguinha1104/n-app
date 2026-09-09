
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <h1> app no ar </h1>
  <img src='https://www.google.com/imgres?q=caminhao&imgurl=https%3A%2F%2Fdecklog.com.br%2Fwp-content%2Fuploads%2F2024%2F07%2FToco-ou-semi-pesado.jpg&imgrefurl=https%3A%2F%2Fdecklog.com.br%2Ftipos-de-caminhao-dimensoes-e-uso%2F&docid=Npwg3NcfapCqzM&tbnid=YJU3eLBnZ3uB8M&vet=12ahUKEwiwnazKpcGWAxWss5UCHeewIncQnPAOegQIRBAA..i&w=650&h=450&hcb=2&ved=2ahUKEwiwnazKpcGWAxWss5UCHeewIncQnPAOegQIRBAA' alt='nada'/>
  <Link to = 'contato' > <p>pg.2</p></Link>


  <Link to = 'usuario' ><p>Cadastro</p></Link>
    </div>
  );
}

export default App;
