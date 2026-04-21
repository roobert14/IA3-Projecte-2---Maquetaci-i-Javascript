import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";

let client = createClient(supabaseUrl, supabaseAnonKey);



async function carregarHotel() {

  let { data: hotelData } = await client
    .from("hotel_detail_cards")
    .select("*")
    .limit(1);

  // 🔥 FACILITIES (lista)
  let { data: facilities } = await client
    .from("hotel_top_facilities")
    .select("*");

  if (!hotelData || !facilities) return;

  let hotel = hotelData[0];

  // 🔹 LISTA 1
  let listaHTML = "";
  for (let i = 0; i < 3; i++) {
    listaHTML += `
  <li class="${facilities[i].facility_id}">
    ${facilities[i].label}
  </li>
`;

  }

  // 🔹 LISTA 2
  let listaHTML2 = "";
  for (let i = 3; i < 6; i++) {
    listaHTML2 += `
  <li class="${facilities[i].facility_id}">
    ${facilities[i].label}
  </li>
`;

  }

  const contenedor = document.querySelector("#precios");

  let html = `
    <div class="contenido_izquierda">
      <h2>${hotel.hotel_name || ""}</h2>

      <div class="estrella_carta">
        <img src="${hotel.hotel_img || ""}">
        <span>${hotel.rating || ""} (${hotel.reviews_count || ""})</span>
      </div>

      <div class="blue_localizacion">
        <p>${hotel.address || ""}</p>
      </div>

      <div class="carta_blanca">
        <div class="texto_carta">
          <h3>${hotel.subtitulo || ""}</h3>
          <p>${hotel.overview_text || ""}</p>
        </div>

        <div class="linea">
          <hr>
        </div>

        <div class="lista">
          <div class="titulo_carta">
            <h3>${hotel.top_title || ""}</h3>
          </div>

          <div class="lista_carta">
            <div class="listas_carta">
              <ul>${listaHTML}</ul>
            </div>

            <div class="listas_carta">
              <ul>${listaHTML2}</ul>
            </div>  
          </div>
        </div>
      </div>
    </div>
  `;

  contenedor.innerHTML = html;
}




async function carregarZona() {

  let { data } = await client.from("hotel_explore_areas").select("*");

  const contenedor2 = document.querySelector("#precios2");

  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="texto_derecha">
        <div class="lista_precio">
          <div class="parrafo_derecha">
            <div class="hotel_derecha2">
              <span>${data[i].name || ""}</span>
            </div> 
            <div>
              <span>${data[i].distance || ""}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  contenedor2.innerHTML = html;
}



async function carregarPromo() {

  let { data } = await client.from("hotel_promo_cards").select("*").limit(1);

  let promo = data[0];

  const contenedor3 = document.querySelector("#precios3");

  let html = `
    <div class="galeria_global">
      <div class="galeria">
        <div class="texto_foto">
          <img src="${promo.img || ""}">
          <p>${promo.title || ""}</p>
        </div>
      </div>    
    </div>
  `;

  contenedor3.innerHTML = html;
}


async function carregarRooms() {

  let { data } = await client.from("hotel_rooms").select("*");

  const contenedor4 = document.querySelector("#precios4");

  let html = `<div class="galeria_global">`;

  for (let i = 0; i < data.length; i++) {

    html += `
      <div class="carta_galeria1">
        <img src="${data[i].img_hab || ""}">

        <div class="info_galeria1"> 
          <h3>${data[i].name || ""}</h3>

          <ul>
            <li class="bolso_gris">${data[i].price || ""} ${data[i].currency || ""}</li>
            <li class="piscina_gris">Sleeps ${data[i].sleeps || ""}</li>
            <li class="like_gris">${data[i].beds || ""}</li>
            <li class="boton">${data[i].boton || ""}</li>
          </ul>
        </div>
      </div>
    `;
  }

  html += `</div>`;

  contenedor4.innerHTML = html;
}



document.addEventListener("DOMContentLoaded", () => {
  carregarHotel();
  carregarZona();
  carregarPromo();
  carregarRooms();
});




