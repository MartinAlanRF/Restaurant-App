import React from "react";
/*Se importa el enrutador*/
import AppRouter from "./routers/AppRouter";
/* Importo mis estilos css */
import './components/styles/style.css';
/* Menu */
import './components/styles/styleMenuPage.css';
/* Reservaciones */
import './components/styles/styleReservationPage.css';
/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const App = () => {
  return (
    <AppRouter/>
  )
}

export default App;