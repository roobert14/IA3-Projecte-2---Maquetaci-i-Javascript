import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";

let client = createClient(supabaseUrl, supabaseAnonKey);


// 🔹 BUDGET RANGES
async function carregarBudget() {

  let { data, error } = await client.from("filter_budget_ranges").select("*");
  if (error) return;

  const contenedor = document.querySelector("#precios");
  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="lista_precio">
        <div class="lado_num">
          <div class="izquierda">
            <input type="checkbox" />
            <span>$${data[i].min} - $${data[i].max}</span>
          </div>
          <p>${data[i].count}</p>
        </div>
      </div>
    `;
  }

  contenedor.innerHTML = html;
}


// 🔹 POPULAR FILTERS
async function carregarPopular() {

  let { data, error } = await client.from("filter_populars").select("*");
  if (error) return;

  const contenedor2 = document.querySelector("#precios2");
  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="lista_precio">
        <div class="lado_num">
          <div class="izquierda">
            <input type="checkbox" />
            <span>${data[i].label}</span>
          </div>
          <p>${data[i].count}</p>
        </div>
      </div>
    `;
  }

  contenedor2.innerHTML = html;
}


// 🔹 ACTIVIDADES
async function carregarActivitats() {

  let { data, error } = await client.from("filter_activities").select("*");
  if (error) return;

  const contenedor3 = document.querySelector("#precios3");
  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += `
      <div class="lista_precio">
        <div class="lado_num">
          <div class="izquierda">
            <input type="checkbox" />
            <span>${data[i].label}</span>
          </div>
          <p>${data[i].count}</p>
        </div>
      </div>
    `;
  }

  contenedor3.innerHTML = html;
}


// 🔹 RESULTADOS (HOTELES)
async function carregarResultats() {

  let { data, error } = await client.from("hotel_listings").select("*");
  if (error) return;

  const contenedor4 = document.querySelector("#precios4");
  let html = "";

  for (let i = 0; i < data.length; i++) {

    let h = data[i];

    html += `
      <div class="carta1">

        <div class="imagen_carta">
          <img src="${h.imagen_hotel || ''}">
        </div>

        <div class="informacion_carta">
          <h1>${h.name || ""}</h1>

          <div class="estrella_carta">
            <img src="${h.imagen_estrellas || ''}">
            <span>${h.rating || ""} (${h.reviews_count || ""})</span>
          </div>

          <p class="p1">${h.description || ""}</p>

          <button>${h.boton || ""}</button>
        </div>

        <div class="precio_carta">
          <p class="p1_carta">${h.habitacion || ""}</p>

          <img class="img1" src="${h.dinero_hotel || ''}">

          <p class="p2_carta">${h.impuestos || ""}</p>
        </div>

      </div>
    `;
  }

  contenedor4.innerHTML = html;
}


// 🔥 CARGAR TODO
document.addEventListener("DOMContentLoaded", () => {
  carregarBudget();
  carregarPopular();
  carregarActivitats();
  carregarResultats();
});





