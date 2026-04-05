export const hoteles = [
  {
    id: "galeria",
    nombre: "Melbourne",
    imagen: "/Imagenes/australia.png",
    propiedades: 2246,
  },
  {
    id: "galeria",
    nombre: "Japan",
    imagen: "../Imagenes/japan.png",
    propiedades: 1278,
  },
  {
    id: "galeria",
    nombre: "New Zealand",
    imagen: "../Imagenes/newzealand.png",
    propiedades: 480,
  },
  {
    id: "galeria",
    nombre: "Grecia",
    imagen: "../Imagenes/greece.png",
    propiedades: 320,
  },
  
];

export const ofertes = [
  {
    id: "galeria2",
    titol: "Sydney's 10 Most Fashionable 5 Star Hotels",
    descripcio:
      "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    imagen: "../Imagenes/sydney.png",
  },
  {
    id: "galeria2",
    titol: "Top cities for Vegan Travellers",
    descripcio:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imagen: "../Imagenes/vegan.png",
  },
  {
    id: "galeria2",
    titol: "World's top destinations during and post covid timeline",
    descripcio:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    imagen: "../Imagenes/mountain.png",
  },
];

export const hotelsPopulars = [
  {
    id: "galeria3",
    nombre: "Lakeside Motel Warefront",
    imagen: "../Imagenes/hotel1.png",
    propiedades: 2246,
  },
  {
    id: "galeria3",
    nombre: "Rocce Graham resort",
    imagen: "../Imagenes/hotel2.png",
    propiedades: 1278,
  },
  {
    id: "galeria3",
    nombre: "Fireside Dinners",
    imagen: "../Imagenes/hotel3.png",
    propiedades: 480,
  },
  {
    id: "galeria3",
    nombre: "Oculous Inn Stay",
    imagen: "../Imagenes/hotel4.png",
    propiedades: 320,
  },
  
];


//Pagina Search
export const searchResultsData = {
  filters: {
    budgetRanges: [
      { min: 0, max: 200, count: 200 },
      { min: 250, max: 500, count: 19 },
      { min: 500, max: 1000, count: 12 },
      { min: 1000, max: 2000, count: 12 },
      { min: 2000, max: 8000, count: 230 },
    ],
    popularFilters: [
      { id: "free-cancellation", label: "Free cancellation", count: 200 },
      { id: "spa", label: "Spa", count: 100 },
      { id: "beachfront", label: "Beach front", count: 100 },
      { id: "hot-tub", label: "Hot tub/Jacuzzi", count: 15 },
      { id: "no-credit-card", label: "Book without credit card", count: 12 },
      { id: "no-prepayment", label: "No prepayment", count: 12 },
    ],
    activities: [
      { id: "fishing", label: "Fishing", count: 200 },
      { id: "hiking", label: "Hiking", count: 100 },
      { id: "beach", label: "Beach", count: 15 },
      { id: "cycling", label: "Cycling", count: 12 },
      { id: "sauna", label: "Sauna", count: 12 },
      { id: "night-lights", label: "Night lights", count: 12 },
    ],
  },
  results: [
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      imagen_hotel: "../Imagenes/cartel1.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      description:"Live a little and relax with champagne\n Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      boton:"See availability",
      badge: "Book now and receive 15% off",
      pricePerNight: "5% off",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "julia-dens-resort",
      imagen_hotel: "../Imagenes/cartel2.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      name: "Julia Dens Resort",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:"Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$240",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinero2.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "achmin-septer-hotel",
      name: "Achmin Septer Hotel",
      imagen_hotel: "../Imagenes/carta3.svg",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$300",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel3.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "regindford-hotel",
      name: "Regindford Hotel",
      imagen_hotel: "../Imagenes/carta4.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$120",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel2.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "shangri-open-house",
      name: "Shangri Open House",
      imagen_hotel: "../Imagenes/carta5.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$145",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel6.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "ocean-waves-resort",
      name: "Ocean Waves Resort",
      imagen_hotel: "../Imagenes/carta6.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$310",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel4.svg",
      impuestos: "Includes taxes and fees",
    },
    {
      hotelId: "main-city-frontier",
      name: "Main City frontier",
      imagen_hotel: "../Imagenes/carta7.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability",
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$190",
      oldPrice: "$200",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel7.svg",
      impuestos: "Includes taxes and fees",

    },
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      imagen_hotel: "../Imagenes/carta8.png",
      imagen_estrellas: "../Imagenes/estrellafour.svg",
      rating: 4.5,
      reviewsCount: 1200,
      boton:"See availability", 
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$300",
      oldPrice: "$200",
      habitacion: "1 room 2 days",
      dinero_hotel: "../Imagenes/dinerohotel5.svg",
      impuestos: "Includes taxes and fees",
    },
  ],
};
