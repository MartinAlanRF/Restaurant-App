import { doc, collection, getDocs, deleteDoc } from 'firebase/firestore';
import {db} from '../firebase/firebase';
import React, {useState,useEffect} from 'react'


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
  

  /* Se crea una función para eliminar las reservaciones */

  const eliminarReservacion = async(id)=>{
    const reservaciones = doc (db,"reservaciones", id);
    await deleteDoc(reservaciones);

    await obtenerRerservaciones();
    await alertas();
  }

  useEffect(() => {
    obtenerRerservaciones();
  }, [])


  const alertas = () =>{
/*     const divAlert = document.getElementById('alerta');
    const divAlertHijo = document.createElement('div');
    divAlert.appendChild(divAlertHijo);
    divAlertHijo.className = "alert alert-danger alert-dismissible fade show";
    const textAlert = document.createElement('strong');
    textAlert.appendChild(divAlertHijo);
    textAlert.innerHTML="Reservación eliminada exitosamente";
    const buttonAlert = document.createElement('button');
    buttonAlert.appendChild(divAlertHijo);
    buttonAlert.className = "btn-close";
    buttonAlert.type = "button" */
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <div id="containerTitulo" className="container text-center mt-1">
            <h1>
               RESERVACIONES
            </h1>
          </div>
          <div id="alerta">

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
                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#eliminar">
                              ELIMINAR
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="eliminar" tabIndex={-1} aria-labelledby="eliminar" aria-hidden="true">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title text-center" id="eliminar">ELIMINAR RESERVACIÓN</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                  </div>
                                  <div className="modal-body">
                                    <h6>¿Estas seguro de eliminar la reservación de {objRerserva.nombre +' '+objRerserva.apellido}?</h6>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      data-bs-dismiss="modal"
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => eliminarReservacion(objRerserva.id)}
                                    >
                                      ELIMINAR
                                    </button>
                                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">CANCERLAR</button>
                                  </div>
                                </div>
                              </div>
                            </div>
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