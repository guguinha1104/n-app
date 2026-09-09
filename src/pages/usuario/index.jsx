import { Link } from 'react-router-dom';
import './index.scss';

export default function Usuario() {


        function passar(e){
            let infos = e.target.value
        alert("Mouse passado com sucesso!" )
        }
        function digitar(e){
            let infos = e.target.value
        alert("Você alterou o input" )
        }
        function entrar(e){
            let infos = e.target.value
        alert("Você irá entrar em alguns instantes" )
        }






    return (
        <div className='tudo'>


            <section className='mae'>
                <div className='lo'><h1>LOGIN</h1></div>

                <div className='icon'> <img src="./assets/image/usu.png" alt="nd" /></div>

                <div className='email'>
                    <div className='campo' > <label htmlFor="campo-senha">Senha de Usuário:</label></div>
                    <input type="password" id="campo-email" name="email" onChange={digitar}/>
                </div>

                <div className='senha'>
                  <div className='campo2'> <label htmlFor='campo-email'>Endereço E-mail:</label></div> 
                    <input type='email' id="campo-senha" name="senha" onChange={digitar}></input>
                </div>



                <div className='rato' onMouseMove={passar}>
                    <h2>Passe o Mouse aqui</h2>
                </div>


            <button className='ent' onMouseDown={entrar}>
                <Link to= '/login'>
                    Entrar
                </Link>
            </button>
            


            </section>




        </div>
    )
}