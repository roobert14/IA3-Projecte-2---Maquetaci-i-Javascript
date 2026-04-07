import { productDetailData } from "./data.js";

const contenedor = document.querySelector("#precios");

const hotel = productDetailData.hotel;
const hotel2 = productDetailData.topFacilities;

let listaHTML = "";


for (let i = 0; i < 3; i++) {
  listaHTML += `
    <li class="${hotel2[i].id}">
      ${hotel2[i].label}
    </li>
  `;
}

let listaHTML2 = "";


for (let i = 3; i < 6; i++) {
  listaHTML2 += `
    <li class="${hotel2[i].id}">
      ${hotel2[i].label}
    </li>
  `;
}

let html = `
  <div class="contenido_izquierda">
    <h2>${hotel.name}</h2>

    <div class="estrella_carta">
      <img src="${hotel.img}">
      <span>${hotel.rating} (${hotel.reviewsCount})</span>
    </div>

    <div class="blue_localizacion">
      <p>${hotel.address}</p>
    </div>

    <div class="carta_blanca">
      <div class="texto_carta">
        <h3>${hotel.subtitulo}</h3>
        <p>${hotel.overviewText}</p>
      </div>

      <div class="linea">
        <hr>
      </div>

      <div class="lista">
        <div class="titulo_carta">
          <h3>${hotel.titulo_top}</h3>
        </div>

        <div class="lista_carta">
          <div class="listas_carta">
            <ul>
              ${listaHTML}
            </ul>
          </div>
          <div class="listas_carta">
            <ul>
            ${listaHTML2}
            </ul>
          </div>  
        </div>
      </div>
    </div>
  </div>
`;

contenedor.innerHTML = html;


const contenedor2 = document.querySelector("#precios2");

const rangos = productDetailData.exploreArea;

let html2 = "";
for (let i = 0; i < rangos.length; i++) {
  html2 += `
  <div class="texto_derecha">
    <div class="lista_precio">
        <div class="parrafo_derecha">
            <div class="hotel_derecha2"><span>${rangos[i].name}</span></div> 
            <div><span>${rangos[i].distance}</span></div>
    </div>
    `;
}

contenedor2.innerHTML = html2;

const contenedor3 = document.querySelector("#precios3");

const hotel3 = productDetailData.promoCard;


let html3 = "";
  html3 += `
        <div class="galeria_global">
            <div class="galeria">
              <div class="texto_foto">
                  <img src="${hotel3.img}">
                  <p>${hotel3.title}</p>
                </div>
              </div>    
        </div>
    `;


contenedor3.innerHTML = html3;


