import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import {db} from '../firebase/firebase';
import React, {useState} from 'react'


const ReservationPage = () => {

/* Se implementa el hook useState para recibir la información e enviarla a la tabla */
  const [reservation, setRerservaciones] = useState([]);
  /* Funcion con metodos de firebase - fireStore para obtener las reservaciones
  de mi colección (tabla) reservaciones */
  const obtenerRerservaciones = async () =>{
    const resp = await getDocs (collection (db, "reservaciones"));
    const reservaciones = resp.docs.map((reservacion) => ({
      id: reservacion.id,
      ...reservacion.data(),
    }));
    /* console.log(reservaciones); */

    setRerservaciones(reservaciones);

  };
  obtenerRerservaciones();

  /* Se crea una función para eliminar las reservaciones */

  const eliminarReservacion = async(id)=>{
    const reservaciones = doc (db,"reservaciones", id);
    await deleteDoc(reservaciones);

    await obtenerRerservaciones();
  }

  return (
    <>
<div className="container">
  <div className="main">
    <div id="containerTitulo" className="container text-center mt-1">
      <h1>
        NUESTRAS RESERVACIONES
      </h1>
    </div>
    <div className="container mt-4">
      <div className="col-lg-8 col-md-12 col-sm-12 mx-auto ">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className='bg-secondary text-white'>
              <tr>
                <th scope="col">CLIENTE</th>
                <th scope="col">FECHA Y HORA </th>
                <th scope="col">TOTAL DE PERSONAS</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {reservation.map((objRerserva)=>{
                return(
                  <tr key={objRerserva.id}>
                    {/* <td>{objRerserva.id}</td> */}
                    <td>{objRerserva.nombre +' '+objRerserva.apellido}</td>
                    <td>{objRerserva.date+' '+objRerserva.hora}</td>
                    <td>{objRerserva.acompanantes}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => eliminarReservacion(objRerserva.id)}
                      >
                        ELIMINAR
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ReservationPage