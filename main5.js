import { myTripsData } from "./data.js";

const contenedor = document.querySelector("#precios");

const rangos = myTripsData.trips;

let html1 = "";

for (let i = 0; i < rangos.length; i++) {
  html1 += `
     
        <div class="carta1">
             <div class="imagen_carta">
                <img src="${rangos[i].img_hotel}">
              </div>
        <div class="informacion_carta">
              <h1>${rangos[i].hotelName}</h1>
                <div class="estrella_carta"> 
                    <img src="${rangos[i].img_stars}">
                    <span>${rangos[i].rating} ${rangos[i].reviewsCount}</span>
                </div>
                <div class="fechas_derecha">
                    <div class="texto_rojo">
                        <p>${rangos[i].policy}</p>
                    </div>
                    <div class="fecha_derecha2">
                          <p>${rangos[i].checkIn}</p>
                          <p>${rangos[i].checkOut}</p>
                          <p class="noche">${rangos[i].stayNights}</p> 
                    </div>
                </div>
        </div>

        <div class="precio_carta">
           <div class="bt2_carta">
              <p class="p1_carta">${rangos[i].rooms}</p>
               <img src="${rangos[i].oldPrice}">
               <p class="p2_carta">${rangos[i].taxes}</p>
               <button class="bt3_carta">${rangos[i].boton}</button>
                 </div>
            </div>
    </div>

              
  `;
}

contenedor.innerHTML = html1;

const contenedor2 = document.querySelector("#precios2");
const rangos2 = myTripsData.suggestedDestinations;

let html2 = `<div class="galeria1">`;

for (let i = 0; i < rangos2.length; i++) {
  html2 += `
    <div class="australia">
        <img src="${rangos2[i].imatgeUrl}" alt="Imagen1" >
        <div class="texto_imagenes">
            <h2>${rangos2[i].nom}</h2>
            <p>${rangos2[i].propietatsCount}</p>
        </div>   
    </div>`;
}

contenedor2.innerHTML = html2;

