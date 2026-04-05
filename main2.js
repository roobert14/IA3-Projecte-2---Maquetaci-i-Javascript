import { searchResultsData } from "./data.js";

const contenedor = document.querySelector("#precios");

const rangos = searchResultsData.filters.budgetRanges;

let html = "";

for (let i = 0; i < rangos.length; i++) {
  html += `
    <div class="lista_precio">
      <div class="lado_num">
        <div class="izquierda">
          <input type="checkbox" />
          <span>$${rangos[i].min} - $${rangos[i].max}</span>
        </div>
        <p>${rangos[i].count}</p>
      </div>
    </div>`;
}

contenedor.innerHTML = html;


const contenedor2 = document.querySelector("#precios2");

const rangos2 = searchResultsData.filters.popularFilters;

let html2 = "";

for (let i = 0; i < rangos2.length; i++) {
  html2 += `
  <div class="lista_precio">
      <div class="lado_num">
        <div class="izquierda">
          <input type="checkbox" />
          <span>${rangos2[i].label}</span>
        </div>
        <p>${rangos2[i].count}</p>
      </div>
      </div>`;
}

contenedor2.innerHTML = html2;



const contenedor3 = document.querySelector("#precios3");

const rangos3 = searchResultsData.filters.activities;

let html3 = "";

for (let i = 0; i < rangos3.length; i++) {
  html3 += `
  <div class="lista_precio">
      <div class="lado_num">
        <div class="izquierda">
          <input type="checkbox" />
          <span>${rangos3[i].label}</span>
        </div>
        <p>${rangos3[i].count}</p>
      </div>
      </div>`;
}

contenedor3.innerHTML = html3;


const contenedor4 = document.querySelector("#precios4");
const rangos4 = searchResultsData.results;

let html4 = "";

for (let i = 0; i < rangos4.length; i++) {
  html4 += `
  <div class="carta1">
    <div class="imagen_carta">
      <img src="${rangos4[i].imagen_hotel}">
    </div>

    <div class="informacion_carta">
      <h1>${rangos4[i].name}</h1>

      <div class="estrella_carta">
        <img src="${rangos4[i].imagen_estrellas}">
        <span>${rangos4[i].rating} (${rangos4[i].reviewsCount})</span>
      </div>

      <p class="p1">${rangos4[i].description}</p>

      <button>${rangos4[i].boton}</button>
    </div>

    <div class="precio_carta">
      <p class="p1_carta">${rangos4[i].habitacion}</p>

      <img class="img1" src="${rangos4[i].dinero_hotel}">

      <p class="p2_carta">${rangos4[i].impuestos}</p>
    </div>
  </div>
  `;
}

contenedor4.innerHTML = html4;





