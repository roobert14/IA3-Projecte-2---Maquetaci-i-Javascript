import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";

let client = createClient(supabaseUrl, supabaseAnonKey);

// 🔹 HOTELES
async function carregarNoticies() {
  let { data, error } = await client.from("hoteles").select("*");

  if (error) {
    console.error("Error hoteles:", error);
    return;
  }

  const contenedor = document.querySelector("#hoteles");
  contenedor.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    contenedor.innerHTML += `
      <div class="australia">
        <img src="${data[i].imagen}" alt="Imagen">
        <h3>${data[i].nombre}</h3>
        <p>${data[i].propiedades} propiedades</p>
      </div>`;
  }
}

// 🔹 OFERTES
async function carregarOfertes() {
  let { data, error } = await client.from("ofertes").select("*");

  if (error) {
    console.error("Error ofertes:", error);
    return;
  }

  const contenedor = document.querySelector("#ofertes");
  contenedor.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    contenedor.innerHTML += `
      <div class="sydney">
        <div class="galeria2">
          <img src="${data[i].imagen}" alt="Imagen">
        </div>
        <div class="texto_imagenes2">
          <h3>${data[i].titol}</h3>
          <p>${data[i].descripcio}</p>
        </div>
      </div>`;
  }
}

// 🔹 HOTELS POPULARS (AHORA TAMBIÉN SUPABASE)
async function carregarHotelsPopulars() {
  let { data, error } = await client.from("hotels_populars").select("*");

  if (error) {
    console.error("Error populars:", error);
    return;
  }

  const contenedor = document.querySelector("#hotelsPopulars");
  contenedor.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    contenedor.innerHTML += `
      <div class="australia">
        <img src="${data[i].imagen}" alt="Imagen">
        <h3>${data[i].nombre}</h3>
        <p>${data[i].propiedades} propiedades</p>
      </div>`;
  }
}

// 🔥 CARGAR TODO
document.addEventListener("DOMContentLoaded", () => {
  carregarNoticies();
  carregarOfertes();
  carregarHotelsPopulars();
});








