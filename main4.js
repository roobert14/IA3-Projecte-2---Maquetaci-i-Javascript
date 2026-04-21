import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";

let client = createClient(supabaseUrl, supabaseAnonKey);


// 🔹 ROOM
async function carregarRoom() {

  let { data, error } = await client
    .from("checkout_room")
    .select("*")
    .limit(1);

  if (error) {
    console.error("ROOM ERROR:", error);
    return;
  }

  if (!data || data.length === 0) return;

  const room = data[0];
  const contenedor = document.querySelector("#precios");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="formulario_principal">
      <div class="main_izquierdo">
        <div class="formulario1">

          <div class="header_formulario">
            <p>${room.roomlabel || ""}</p>
            <span>${room.summary || ""}</span>
          </div>

        </div>
      </div>
    </div>
  `;
}


// 🔹 SUMMARY CARD
async function carregarSummary() {

  let { data, error } = await client
    .from("checkout_summary")
    .select("*")
    .limit(1);

  if (error) {
    console.error("SUMMARY ERROR:", error);
    return;
  }

  if (!data || data.length === 0) return;

  const s = data[0];
  const contenedor2 = document.querySelector("#precios2");
  if (!contenedor2) return;

  contenedor2.innerHTML = `
    <div class="main_derecha">
      <div class="info_derecha">

        <div>
          <img src="${s.img || ""}">
        </div>

        <div class="texto_derecha">

          <div class="titulo_derecha">
            <h3>${s.hotelname || ""}</h3>

            <div class="estrella_carta">
              <img src="${s.img_stars || ""}">
              <span>${s.rating || ""} ${s.reviewscount || ""}</span>
            </div>
          </div>

          <div class="fechas_derecha">
            <div class="texto_rojo">
              <p>${s.policy || ""}</p>
            </div>

            <div class="fecha_derecha2">
              <p>${s.checkin || ""}</p>
              <p>${s.checkout || ""}</p>
              <p class="noche">${s.staynights || ""}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}


// 🔹 PRICE ITEMS
async function carregarPrices() {

  let { data, error } = await client
    .from("checkout_price_items")
    .select("*");

  if (error) {
    console.error("PRICES ERROR:", error);
    return;
  }

  const contenedor3 = document.querySelector("#precios3");
  if (!contenedor3) return;

  let html = "";

  for (let i = 0; i < (data || []).length; i++) {
    html += `
      <div class="habitaciones">
        <p class="habitacion">${data[i].description || ""}</p>
        <p class="habitacion">${data[i].amount || ""}</p>
      </div>
    `;
  }

  contenedor3.innerHTML = html;
}


// 🔹 TOTAL
async function carregarTotal() {

  let { data, error } = await client
    .from("checkout_price_details")
    .select("*")
    .limit(1);

  if (error) {
    console.error("TOTAL ERROR:", error);
    return;
  }

  if (!data || data.length === 0) return;

  const contenedor4 = document.querySelector("#precios4");
  if (!contenedor4) return;

  contenedor4.innerHTML = `
    <div class="precio2_info">
      <div class="total_info">
        <p class="dinero">${data[0].total || ""}</p>
      </div>
    </div>
  `;
}


// 🔹 POLICY
async function carregarPolicy() {

  let { data, error } = await client
    .from("checkout_policy_items")
    .select("*");

  if (error) {
    console.error("POLICY ERROR:", error);
    return;
  }

  const contenedor5 = document.querySelector("#precios5");
  if (!contenedor5) return;

  let html = `
    <div class="lista_form3">
      <ol>
  `;

  for (let i = 0; i < (data || []).length; i++) {
    html += `<li>${data[i].text || ""}</li>`;
  }

  html += `
      </ol>
    </div>
  `;

  contenedor5.innerHTML = html;
}


// 🔥 INIT
document.addEventListener("DOMContentLoaded", () => {
  carregarRoom();
  carregarSummary();
  carregarPrices();
  carregarTotal();
  carregarPolicy();
});




