
import './index.scss';
import App from './pages/app/App';
import Contato from './pages/contato/index.jsx';
import Eventos from './pages/eventos/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './router.jsx';
import Usuario from './pages/usuario/index.jsx';
import Login from './pages/login/index.jsx';

export default function Router (){
    return (
     
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>;
            <Route path='usuario' element={<Usuario/>}/>
            <Route path='contato' element={<Contato/>}/>
            <Route path='eventos' element={<Eventos/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   

    )
}


