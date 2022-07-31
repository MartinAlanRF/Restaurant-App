import React from 'react';

/* Imagenes del carousel */
import imagenMenu1 from "../assets/menu/1.-Arroz-a-la-tumbada.jpg";
import imagenMenu2 from "../assets/menu/2.-Chilpachole-de-jaiba.jpg";
import imagenMenu3 from "../assets/menu/3.-pescadoVeracruzana.jpg";
import imagenMenu4 from "../assets/menu/4.-zacahuil1.jpg";
import imagenMenu5 from "../assets/menu/5.-Vuelve-a-la-vida.jpg";
import imagenMenu6 from "../assets/menu/6.-Ostiones-a-la-diabla.jpg";
import imagenMenu7 from "../assets/menu/7.-Camarones-al-coco.jpg";
import imagenMenu8 from "../assets/menu/8.-Torrejas.jpg";
/* import imagenMenu9 from "../assets/menu/";
import imagenMenu10 from "../assets/menu/";
import imagenMenu11 from "../assets/menu/";
import imagenMenu12 from "../assets/menu/"; */

const MenuPage = () => {
  return (
    <>
        <div className="container mt-4">
            <div id="menu">
            <div className="row">
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img  src={imagenMenu1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">ARROZ A LA TUMBADA</h5>
                            <p className="card-text">
                                Arroz, cebolla, mariscos (pulpo, camarón y jaiba) y un caldo rojo 
                                componen este guiso cuyo nombre viene de la forma en que se “tumba” 
                                la olla del fuego y se sirve de inmediato para que no se seque.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">CHILPACHOLE DE JAIBA</h5>
                            <p className="card-text">
                                Suculento y humeante caldo preparado con chile de chilpaya, jitomate 
                                y pelotitas de masa, coronado con jaiba, pescado, camarón o pulpo 
                                puede ser una combinación de ellos.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu3} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">PESCADO A LA VERACRUZANA</h5>
                            <p className="card-text">
                                Preparado con robalo o huachinango horneado, el secreto está en la salsa 
                                de jitomate, cebolla, ajo y pimientos. Se sirve con arroz y rodajas de aceitunas.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu4} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">ZACAHUIL</h5>
                            <p className="card-text">
                                Se trata de un tamal gigante hecho con masa de maíz martajada, 
                                manteca de cerdo, chiles molidos y carne de puerco.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu5} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">VUELVE A LA VIDA</h5>
                            <p className="card-text">
                            El “Vuelve a la vida” lleva los mismos ingredientes
                            los de cualquier otra parte, como camarones pelados, pulpo 
                            ostiones, jaiba y caracol, pero tiene algo que lo distingue  
                            de los demás y le da su personalidad particular: un caldo.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu6} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">OSTIONES A LA DIABLA</h5>
                            <p className="card-text">
                                Platillo de ostiones bañados en salsa licuada de varios
                                chiles (de árbil, chipotle, guajillo) con ajo, cebolla y
                                agua, se cubren con queso Chihuahua rayado.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu7} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">CAMARONES AL COCO</h5>
                            <p className="card-text">
                                Estos camarones se preparan con ralladura de coco, harina 
                                y una mezcla con cerveza, huevo y harina que permite que 
                                la ralladura de coco se adhiera mejor a los camarones. 
                                Acompañados de arroz y salsa.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto p-0" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                        <img src={imagenMenu8} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">TORREJAS</h5>
                            <p className="card-text">
                                Platillo hecho con pan capeado servido en leche con canela y endulzada. 
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default MenuPage;