import {checkoutData } from "./data.js";

const contenedor = document.querySelector("#precios");

const rangos = checkoutData.room;

let html = "";

  html += `
  <div class="formulario_principal">
    <div class="main_izquierdo">
        <div class="formulario1">
            <div class="header_formulario">
                <p>${rangos.roomLabel}</p>
                <span>${rangos.summary}</span>
            </div>
        </div>
    </div>
</div>
    `;


contenedor.innerHTML = html;

const contenedor2 = document.querySelector("#precios2");

const rangos2 = checkoutData.summaryCard;

let html2 = `<div class="main_derecha">`;

  html2 += `
      <div class="info_derecha">
          <div>
            <img src="${rangos2.img}">
           </div>
        <div class="texto_derecha">
           <div class="titulo_derecha">
               <h3>${rangos2.hotelName}</h3>
                    <div class="estrella_carta">
                        <img src="${rangos2.img_stars}">
                        <span>${rangos2.rating} ${rangos2.reviewsCount}</span>
                    </div>
                </div>
                <div class="fechas_derecha">
                    <div class="texto_rojo">
                       <p>${rangos2.policy}</p>
                    </div>
                    <div class="fecha_derecha2">
                        <p>${rangos2.checkIn}</p>
                        <p>${rangos2.checkOut}</p>
                        <p class="noche">${rangos2.stayNights}</p>
                    </div>
                </div>
            </div>
        </div>
    `;


contenedor2.innerHTML = html2;


const contenedor3 = document.querySelector("#precios3");
const contenedor4 = document.querySelector("#precios4");

const rangos3 = checkoutData.priceDetails.items;

const rangos4 = checkoutData.priceDetails;

let html3 = ``;
for (let i = 0; i < rangos3.length; i++) {
  html3 += `
    <div class="habitaciones">
       <p class="habitacion">${rangos3[i].description}</p>
       <p class="habitacion">${rangos3[i].amount}</p>
    </div>
    `;
}

let html4 = ``;
html4 += `
<div class="precio2_info">
        <div class="total_info">
           <p class="dinero">${rangos4.total}</p>
        </div>
    </div> 
`;
contenedor3.innerHTML = html3;
contenedor4.innerHTML = html4;


const contenedor5 = document.querySelector("#precios5");

const rangos5 = checkoutData.policyItems;

let html5 = `<div class="lista_form3"><ol>`; 

for (let i = 0; i < rangos5.length; i++) {
  html5 += `<li>${rangos5[i]}</li>`;
}

html5 += `</ol></div>`; 

contenedor5.innerHTML = html5;


