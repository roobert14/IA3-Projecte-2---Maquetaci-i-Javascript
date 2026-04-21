

//Pagina Product
export const productDetailData = {
  hotel: {
    id: "lakeside-motel-warefront",
    name: "Lakeside Motel Warefront",
    img: "../Imagenes/estrellafour.svg",
    rating: 4.5,
    reviewsCount: "1200(reviews)",
    subtitulo: "Overview",
    address: "Lorem ipsum road, Tantri-2322, Melbourne, Australia",
    overviewText:
      "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.\n\nEach room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property.\n\nCouples in particular like the location – they rated it 9.2 for a two-person trip.",
    titulo_top:"Top facilities",
  },
  topFacilities: [
    { id: "wifi", label: "Free wifi" },
    { id: "viento", label: "Air Conditioning" },
    { id: "coche", label: "Parking available" },
    { id: "bolso", label: "Business Services" },
    { id: "piscina", label: "Swimming pool" },
    { id: "like", label: "Top rated in area" },
  ],
  exploreArea: [
    { name: "Hotel Pennsylvania", distance: "2 min drive" },
    { name: "Hotel Penselvenyia", distance: "10 min drive" },
    { name: "Hotel Penselvenyia", distance: "15 min drive" },
    { name: "Hotel Penselvenyia", distance: "18 min drive" },
    { name: "Hotel Penselvenyia", distance: "32 min drive" },
  ],
  availability: {
    checkin: "Mar 18, 2022",
    checkout: "March 20, 2022",
    guests: "2 adult, 1 room",
  },
  promoCard: {
    title: "20% off\nUse Promotional\nCoupon Code:\nOrlando",
    img: "../Imagenes/logowhite.svg",
    img_persona: "../Imagenes/persona.png",
  },
  rooms: [
    {
      id: "standard-twin-multiple-beds",
      name: "Standard twin ben, Multiple beds",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
      img_hab: "../Imagenes/habitacion.png", 
      boton: "Reserve suite",
    },
    {
      id: "standard-twin-queen-bed",
      name: "Standard twin ben, 1 Queen bed",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
      img_hab: "../Imagenes/habitacion2.png",
      boton: "Reserve suite",
    },
  ],
};

export const checkoutData = {
  room: {
    roomLabel: "Room 1",
    summary: "2 adults, 1 double bed and 1 twin bed, Non-smoking",
  },
  summaryCard: {
    hotelId: "lakeside-motel-warefront",
    hotelName: "Lakeside Motel Warefront",
    rating: 4.5,
    reviewsCount: "(1200Reviews)",
    policy: "Non refundable",
    checkIn: "Sunday, March 18, 2022",
    checkOut: "Tuesday, March 20, 2022",
    stayNights: "2 nigh stay",
    img: "../Imagenes/casa_form3.png",
    img_stars: "../Imagenes/estrellafour.svg",
  },
  priceDetails: {
    items: [
      { description: "1 room X 2 nights", amount: "$120.32" },
      { description: "Tax and service fees", amount: "$8.32" },
    ],
    total: "$130",
  },
  policyItems: [
    "This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.",
    "Stay extensions will require a new reservation.",
    "Front desk staff will greet guests on arrival",
    "No refunds will be issued for late check-in or early check-out.",
  ],
};

export const myTripsData = {
  
};
