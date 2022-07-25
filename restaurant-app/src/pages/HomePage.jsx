import React from "react";
import imageVeracruz from "../assets/veracruz.jpg";

import imageCaurosel1 from "../assets/comida/Arroz-a-la-tumbada.jpg";
import imageCaurosel2 from "../assets/comida/Chilpachole-de-jaiba.jpg";
import imageCaurosel3 from "../assets/comida/pescadoVeracruzana.jpg";
import imageCaurosel4 from "../assets/comida/zacahuil1.jpg";



const HomePage = () => {
  return (
    <>
      <div className="container">
        <main>
          <div id="containerTitulo" className="container text-center mt-1">
            <h1>
              BIENVENIDOS AL RESTAURANTE PEDACITO DE VERACRUZ
            </h1>
          </div>
          <div className="col-12 mt-2  mx-auto">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div id="estado" className="container ">
                  <img
                    id="veracruz"
                    className=""
                    src={imageVeracruz}
                    alt="Imagen del estado de Veracruz, México"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div id="containerJumbotron" className="container">
                  <div id="jumbotron" className="p-3 text-white rounded ">
                    <h1 className="display-6 text-center">
                      PEDACITO DE VERACRUZ
                    </h1>
                    <p className="">
                      En este restaurante te esperan algunos de los platillos
                      mas delicioso de la región de Veracruz, desde la zona norte del estado,
                      como lo es panuco bajando hasta la zona sur del mismo Minatitlan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div id="containerCarousel" className="col-lg-8 col-md-12 col-sm-12">
                <div className="container text-center">
                  <h3>PLATILLOS FAVORITOS</h3>
                </div>
                <div id="carousel"
                  className="carousel slide w-75 mx-auto"
                  data-bs-interval={3000}
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="d-none d-sm-block">
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carousel"
                          data-bs-slide-to={0}
                          className="active"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel"
                          data-bs-slide-to={2}
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carousel"
                          data-bs-slide-to={3}
                          aria-label="Slide 4"
                        ></button>
                      </div>
                    </div>

                    <div className="carousel-item active  ">
                      <img
                        src={imageCaurosel1}
                        alt=""
                        className="d-block w-100 img-flui"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>ARROZ A LA TUMBADA</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imageCaurosel2}
                        alt=""
                        className="d-block w-100 img-fluid "
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>CHILPACHOLE DE JAIBA</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imageCaurosel3}
                        alt=""
                        className="d-block w-100 img-fluid"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>PESCADO A LA VERACRUZANA</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={imageCaurosel4}
                        alt=""
                        className="d-block w-100 img-fluid"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>ZACAHUIL</h5>
                      </div>
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                  <div id="containerAcercade" className="container text-center">
                    <h2>ACERCA DE NOSOTROS</h2>
                  </div>
                  <section id="acercade"  >
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">
                          El PEDACITO DE VERACRUZ
                        </h4>
                        <h6>Fundado en 2022</h6>
                        <p className="card-text">                    
                        Somos un restaurante creado con fines de compartir la gastronomía
                        del estado de veracruz.</p>
                        <p>
                          El objetivo nuestros platillos es que con ellos
                          nuestos comensales puedan realizar un viaje por la región veracruzana através
                          de su palados.
                        </p>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
            <div className="row mx-auto mt-2">
              <div id="reservacion" className="container text-center">
                <h2>ZONA DE RESERVACIONES</h2>
              </div>
              <div  className="col-lg-4 col-md-12 col-sm-12">
                <section id="acede">
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">
                            Rerservacion
                          </h3>
                          <h6>Con el siguiente formulario podras realizar tu reservación</h6>
                          <p className="card-text">                    
                              Xalapa Centro 

                              Ciudad de Xalapa, VER 91100

                              Phone number
                              +52 (2282) 123-4567
                              Email
                              contacto@pedacitoVer.com.mx
                          </p>
                        </div>
                      </div>
                </section>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <form action>
                <div className="form-group">
                    <div className="input-group mt-3 mb-3">
                      <span htmlFor="apellidos" className="input-group-text" id>Nombre</span>
                      <input id="apellidos" type="text" className="form-control" placeholder="Nombre" />
                    </div> 
                  </div>
                  <div className="form-group">
                    <div className="input-group mt-3 mb-3">
                      <span htmlFor="apellidos" className="input-group-text" id>Apellidos</span>
                      <input id="apellidos" type="text" className="form-control" placeholder="Apellidos" />
                    </div> 
                  </div>
                  <div className="form-group">
                    <div className="input-group mt-3 mb-3">
                      <span htmlFor="acompanantes" className="input-group-text" id>Cantidad de personas</span>
                      <input id="apellidos" type="text" className="form-control" placeholder="Acompañantes" />
                    </div> 
                  </div>
                  <button type="submit" className="mx-auto col-8 btn btn-success">
                    Reservar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
