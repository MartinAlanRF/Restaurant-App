import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

/* Importando mis componentens */
/* NavBar */
import NavBar from '../components/NavBar';
/* Footer */
import Footer from '../components/Footer';
/* Importando mis Paginas */
import HomePage from '../pages/HomePage';
import ReservationPage from '../pages/ReservationPage';

const AppRouter = () => {
  return (
    <Router>
        {/* En esta parte importo el componente NavBar 
        el cual contendra los navlink de react-router-dom
        que permitrian al usuario navergar através de la 
        NavBar*/}
        <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/reservation" element={<ReservationPage/>} />
            {/* El navigate lo implemento para que me rediriga a HomePage en caso
            de que la tura que se le de a mi webApp no este dentro de Router, entonces
            en automatico lo detecta y hace el redireccionamiento */}
            <Route path='#' element={ <Navigate to='/'/> }/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter;
