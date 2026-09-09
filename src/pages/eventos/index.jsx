import './index.scss';
import { Link } from 'react-router-dom';

export default function Evento(){
    function Alerta(e) {
        let Infos = e.target.value
        alert("Alteração feito pelo usuário! " + Infos);
    }
    function Passar() {
        alert("O usuário passou por aqui")
    }

    return(
        <div className="eventos">
            <h1 onMouseMove={Passar}>Página Eventos</h1>

            <div className="eventBox">
                <h2>Eventos</h2>
                <input onChange={Alerta} type="text" />
                <option  value="">

                </option>
            </div>

            <Link to = '/'>
                <button>Home</button>
            </Link>
        </div>
    );
}
