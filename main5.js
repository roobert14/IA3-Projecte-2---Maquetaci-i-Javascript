import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";

let client = createClient(supabaseUrl, supabaseAnonKey);



async function carregarPrecios() {

  let { data, error } = await client.from("my_trips").select("*");
  if (error) return;

  const contenedor = document.querySelector("#precios");
  let html = "";

  for (let i = 0; i < data.length; i++) {

    let trip = data[i];

    html += `
      <div class="carta1">

        <div class="imagen_carta">
          <img src="${trip.img_hotel || ''}">
        </div>

        <div class="informacion_carta">

          <h1>${trip.hotel_name || ""}</h1>

          <div class="estrella_carta">
            <img src="${trip.img_stars || ''}">
            <span>${trip.rating || ""} ${trip.reviews_count || ""}</span>
          </div>

          <div class="fechas_derecha">
            <div class="texto_rojo">
              <p>${trip.policy || ""}</p>
            </div>

            <div class="fecha_derecha2">
              <p>${trip.check_in || ""}</p>
              <p>${trip.check_out || ""}</p>
              <p class="noche">${trip.stay_nights || ""}</p>
            </div>
          </div>

        </div>

        <div class="precio_carta">

          <div class="bt2_carta">
            <p class="p1_carta">${trip.rooms || ""}</p>

            <img class="img1" src="${trip.old_price || ''}">

            <p class="p2_carta">${trip.taxes || ""}</p>

            <button class="bt3_carta">${trip.boton || ""}</button>
          </div>

        </div>

      </div>
    `;
  }

  contenedor.innerHTML = html;
}



async function carregarDestinos() {

  let { data, error } = await client
    .from("my_trips_suggested_destinations")
    .select("*");

  if (error) return;

  const contenedor2 = document.querySelector("#precios2");

  let html = `<div class="galeria1">`;

  for (let i = 0; i < data.length; i++) {

    let d = data[i];

    html += `
      <div class="australia">

        <img src="${d.imatge_url || ''}">

        <div class="texto_imagenes">
          <h2>${d.nom || ""}</h2>
          <p>${d.propietats_count || ""}</p>
        </div>

      </div>
    `;
  }

  html += `</div>`;

  contenedor2.innerHTML = html;
}


document.addEventListener("DOMContentLoaded", () => {
  carregarPrecios();
  carregarDestinos();
});



