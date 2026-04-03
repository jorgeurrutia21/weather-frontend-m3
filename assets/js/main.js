const ciudades = [
    {
        id: 1,
        ciudad: "SANTIAGO",
        pais: "Chile",
        temperatura: "28°C",
        clima: "SOLEADO",
        humedad: "35%",
        viento: "12 km/h",
        pronostico: "DÍA DESPEJADO Y CÁLIDO.",
        imagen: "assets/img/santiago.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 2,
        ciudad: "VALPARAISO",
        pais: "Chile",
        temperatura: "26°C",
        clima: "DESPEJADO",
        humedad: "40%",
        viento: "14 km/h",
        pronostico: "CIELO COMPLETAMENTE DESPEJADO.",
        imagen: "assets/img/valparaiso.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 3,
        ciudad: "CONCEPCIÓN",
        pais: "Chile",
        temperatura: "20°C",
        clima: "NUBLADO",
        humedad: "70%",
        viento: "15 km/h",
        pronostico: "CIELO CUBIERTO DURANTE EL DÍA.",
        imagen: "assets/img/concepcion.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 4,
        ciudad: "LA SERENA",
        pais: "Chile",
        temperatura: "24°C",
        clima: "SOLEADO",
        humedad: "50%",
        viento: "10 km/h",
        pronostico: "DIA SOLEADO CON BRISA LIGERA.",
        imagen: "assets/img/laserena.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 5,
        ciudad: "ANTOFAGASTA",
        pais: "Chile",
        temperatura: "26°C",
        clima: "DESPEJADO",
        humedad: "40%",
        viento: "14 km/h",
        pronostico: "CIELO COMPLETAMENTE DESPEJADO.",
        imagen: "assets/img/antofagasta.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 6,
        ciudad: "TEMUCO",
        pais: "Chile",
        temperatura: "17°C",
        clima: "LLUVIOSO",
        humedad: "85%",
        viento: "20 km/h",
        pronostico: "LLUVIAS INTERMITENTES.",
        imagen: "assets/img/temuco.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 7,
        ciudad: "PUERTO MONTT",
        pais: "Chile",
        temperatura: "15°C",
        clima: "LLUVIOSO",
        humedad: "90%",
        viento: "22 km/h",
        pronostico: "LLUVIAS CONSTANTES.",
        imagen: "assets/img/puertomontt.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 8,
        ciudad: "PUNTA ARENAS",
        pais: "Chile",
        temperatura: "10°C",
        clima: "VENTOSO",
        humedad: "65%",
        viento: "35 km/h",
        pronostico: "FRÍO CON FUERTES VIENTOS.",
        imagen: "assets/img/puntaarenas.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 9,
        ciudad: "IQUIQUE",
        pais: "Chile",
        temperatura: "25°C",
        clima: "SOLEADO",
        humedad: "55%",
        viento: "16 km/h",
        pronostico: "CLIMA CALIDO Y ESTABLE.",
        imagen: "assets/img/iquique.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
    {
        id: 10,
        ciudad: "RANCAGUA",
        pais: "Chile",
        temperatura: "27°C",
        clima: "SOLEADO",
        humedad: "38%",
        viento: "11 km/h",
        pronostico: "DÍA CALUROSO CON CIELOS DESPEJADOS.",
        imagen: "assets/img/rancagua.jpg",
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    },
];

const header = document.querySelector("header");
const container = document.querySelector("#city-container");
const detalleContainer = document.querySelector("#detalle-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");

function renderCards() {
    let html = "";

    ciudades.forEach((ciudad) => {
        html += `
        
        <div class="col-12 col-md-6 col-lg-4">
            <article class="card card--ciudad h-100" data-id="${ciudad.id}">
                <img src="${ciudad.imagen}" class="card__img"  />
                <div class="card-body d-flex flex-column">
                    <h5>${ciudad.ciudad}</h5>
                    <p class="text-dark">
                        <small>${ciudad.temperatura} · ${ciudad.clima}</small>
                    </p>
                    <div class="mt-auto">
                        <span >
                            <i class="fa-solid fa-droplet"></i> Humedad ${ciudad.humedad}
                        </span>
                    </div>
                </div>
            </article>
        </div>`;
    });

    container.innerHTML = html;
}

function obtenerIcono(clima) {
    switch (clima.toLowerCase()) {
        case "soleado":
            return "fa-sun";
        case "nublado":
            return "fa-cloud";
        case "lluvioso":
            return "fa-cloud-rain";
        case "ventoso":
            return "fa-wind";
        default:
            return "fa-cloud";
    }
}

function generarPronostico() {
    const climas = ["Soleado", "Nublado", "Lluvioso", "Ventoso"];

    return climas[Math.floor(Math.random() * climas.length)];
}

function renderDetalle(id) {
    const ciudad = ciudades.find((c) => c.id === id);

    if (!ciudad) {
        detalleContainer.innerHTML = "<p>Ciudad no encontrada</p>";
        return;
    }

    detalleContainer.innerHTML = `
   
    <div class="row">
    
        <div class="col-12 col-md-6 col-lg-6">
            <img src="${ciudad.imagen}" class="img-fluid rounded" />
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <h2>${ciudad.ciudad}</h2>

            <p><strong><i class="fa-solid fa-temperature-high fa-1x"></i> TEMPERATURA :</strong> ${ciudad.temperatura}</p>
            <p><strong><i class="fa-solid fa-cloud-sun-rain fa-1x"></i> CLIMA :</strong> ${ciudad.clima}</p>
            <p><strong><i class="fa-solid fa-droplet fa-1x"></i> HUMEDAD :</strong> ${ciudad.humedad}</p>
            <p><strong><i class="fa-solid fa-wind fa-1x"></i> VIENTO :</strong> ${ciudad.viento}</p>
            <p><strong><i class="fa-solid fa-pencil fa-1x"></i> PARA HOY :</strong> ${ciudad.pronostico}</p>

            ${
                ciudad.dias
                    ? `
                    <div class="mt-4">
                        <P><strong><i class="fa-solid fa-pencil fa-1x"></i> PROXIMOS 6 DÍAS </strong></P>
                        <div class="d-flex flex-wrap gap-4">
                            ${ciudad.dias
                                .map((dia) => {
                                    const clima = generarPronostico();
                                    return `
                                        <div class="text-center">
                                            <p class="mb-1">${dia}</p>
                                            <i class="fa-solid ${obtenerIcono(clima)} fa-2x"></i>
                                            <p class="small">${clima}</p>
                                        </div>
                                    `;
                                })
                                .join("")}
                        </div>
                    </div>
                    `
                    : ""
            }
        </div>
    
    </div>
`;
}

function mostrarHome() {
    vistaHome.classList.remove("d-none");
    header.classList.remove("d-none");
    vistaDetalle.classList.add("d-none");
}

function mostrarDetalle(id) {
    renderDetalle(id);
    vistaHome.classList.add("d-none");
    header.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");
}

container.addEventListener("click", (e) => {
    const card = e.target.closest(".card--ciudad");
    if (!card) return;

    const id = Number(card.dataset.id);
    mostrarDetalle(id);
});

btnVolver.addEventListener("click", mostrarHome);

renderCards();
