import React from "react";
import imageVeracruz from "../assets/veracruz.jpg";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <main>
          <div className="container text-center mt-1">
            <h1 className="">
              BIENVENIDOS AL RESTAURANTE PEDACITO DE VERACRUZ
            </h1>
          </div>
          <div className="col-12 mt-2  mx-auto">
            <div className="row mx-auto">
              <div
                id="carousel"
                className="carousel slide mb-2"
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

                  <div className="carousel-item active ">
                    <img
                      src="https://via.placeholder.com/900x200?text=PRIMERA"
                      alt=""
                      className="d-block w-100"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Primera imagen</h5>
                      <p>Texto para mostrar como practiva del slider</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://via.placeholder.com/900x200?text=SEGUNDA"
                      alt=""
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://via.placeholder.com/900x200?text=TERCERA"
                      alt=""
                      className="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://via.placeholder.com/900x200?text=CUARTA"
                      alt=""
                      className="d-block w-100"
                    />
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
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container">
                  <div id="jumbotron" className="p-3 text-white rounded ">
                    <h1 className="display-6">
                      BIENVENIDOS PEDACITO DE VERACRUZ
                    </h1>
                    <p>
                      En este restaurante te esperan algunos de los platillos
                      mas delicioso de la región de Veracruz, desde la zona norte del estado, 
                      como lo es panuco bajando hasta la zona sur del mismo Minatitlan.
                    </p>
                    <hr className="my-2" />
                    <div id="botonsJumbotron" className="row">
                      <div className="col-6">
                        <a href="/" className="btn btn-success">
                          Menú
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="/" className="btn btn-success">
                          Reservación
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div id="estado" className="container">
                  <img
                    id="veracruz"
                    className="img-fluid"
                    src={imageVeracruz}
                    alt="Imagen del estado de Veracruz, México"
                  />
                </div>
              </div>
            </div>
            <div className="row mx-auto mt-4">
              <div className="col-lg-4 h-25">
                <div id="location">
                  <h5>¿Donde nos ubicamos?</h5>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9574.923064887667!2d-96.93203505723477!3d19.553011423316423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2e2298badf87%3A0x2fee5115e2d809ae!2sBenem%C3%A9rita%20Escuela%20Normal%20Veracruzana%20Enrique%20C.%20Rebsamen!5e0!3m2!1ses-419!2smx!4v1657842123653!5m2!1ses-419!2smx"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Ubicacion"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <section>
                  <h1>El PEDACITO DE VERACRUZ</h1>
                  <h3>Fundado en 2022</h3>
                  <p>
                    Somos un restaurante creado con fines de compartir la gastronomía
                    del estado de veracruz. 
                  </p>
                  <p>
                    El objetivo nuestros platillos es que con ellos
                    nuestos comensales puedan realizar un viaje por la región veracruzana através 
                    de su palados.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
