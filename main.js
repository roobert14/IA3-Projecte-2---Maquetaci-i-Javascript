import { hoteles } from "./data.js";

const hotel = document.querySelector("#hoteles");
for (let i = 0; i < hoteles.length; i++) {
  hotel.innerHTML += `
    <div class="australia">
        <img src="${hoteles[i].imagen}" alt="Imagen1" >
        <h3>${hoteles[i].nombre}</h3>
        <p>${hoteles[i].propiedades} propiedades</p>
    </div>`;
}

import { ofertes } from "./data.js";
const hotel2 = document.querySelector("#ofertes");
for (let i = 0; i < ofertes.length; i++) {
  hotel2.innerHTML += `
    <div class="sydney">
      <div class="galeria2">
        <img src="${ofertes[i].imagen}" alt="Imagen1" >
        </div>
         <div class="texto_imagenes2">
          <h3>${ofertes[i].titol}</h3>
          <p>${ofertes[i].descripcio}</p>
         </div>
    </div>`;
}

import { hotelsPopulars } from "./data.js";

const hotel3 = document.querySelector("#hotelsPopulars");
for (let i = 0; i < hotelsPopulars.length; i++) {
  hotel3.innerHTML += `
    <div class="australia">
      <div class="galeria3">
        <img src="${hotelsPopulars[i].imagen}" alt="Imagen1" >
        </div>
        <h2>${hotelsPopulars[i].nombre}</h2>
        <p>${hotelsPopulars[i].propiedades} propiedades</p>
    </div>`;
}








