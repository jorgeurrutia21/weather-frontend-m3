const lugares = [
    {
        id: 1,
        nombre: "Santiago",
        imagen: "assets/img/santiago5.jpg",
        estadoActual: "Lluvioso",
        tempActual: 15,
        humedad: "60%",
        uv: "Bajo",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 20, estado: "Soleado" },
            { dia: "Martes", min: 12, max: 17, estado: "Nublado" },
            { dia: "Miércoles", min: 9, max: 18, estado: "Soleado" },
            { dia: "Jueves", min: 11, max: 17, estado: "Nublado" },
            { dia: "Viernes", min: 13, max: 16, estado: "Nublado" },
            { dia: "Sábado", min: 10, max: 17, estado: "Nublado" },
            { dia: "Domingo", min: 10, max: 17, estado: "Lluvioso" },
        ],
    },
    {
        id: 2,
        nombre: "Valparaiso",
        imagen: "assets/img/valparaiso4.jpg",
        estadoActual: "Soleado",
        tempActual: 22,
        humedad: "76%",
        uv: "Medio",
        pronosticoSemanal: [
            { dia: "Lunes", min: 11, max: 15, estado: "Nublado" },
            { dia: "Martes", min: 11, max: 16, estado: "Nublado" },
            { dia: "Miércoles", min: 11, max: 16, estado: "Nublado" },
            { dia: "Jueves", min: 12, max: 17, estado: "Soleado" },
            { dia: "Viernes", min: 12, max: 18, estado: "Soleado" },
            { dia: "Sábado", min: 11, max: 17, estado: "Soleado" },
            { dia: "Domingo", min: 10, max: 17, estado: "Nublado" },
        ],
    },
    {
        id: 3,
        nombre: "Concepcion",
        imagen: "assets/img/concepcion2.jpg",
        estadoActual: "Nublado",
        tempActual: 18,
        humedad: "60%",
        uv: "Medio",
        pronosticoSemanal: [
            { dia: "Lunes", min: 6, max: 15, estado: "Soleado" },
            { dia: "Martes", min: 6, max: 16, estado: "Nublado" },
            { dia: "Miércoles", min: 7, max: 15, estado: "Lluvioso" },
            { dia: "Jueves", min: 7, max: 16, estado: "Soleado" },
            { dia: "Viernes", min: 6, max: 15, estado: "Nublado" },
            { dia: "Sábado", min: 6, max: 16, estado: "Nublado" },
            { dia: "Domingo", min: 11, max: 18, estado: "Lluvioso" },
        ],
    },
    {
        id: 4,
        nombre: "La Serena",
        imagen: "assets/img/laserena2.jpg",
        estadoActual: "Soleado",
        tempActual: 20,
        humedad: "70%",
        uv: "Alto",
        pronosticoSemanal: [
            { dia: "Lunes", min: 12, max: 20, estado: "Soleado" },
            { dia: "Martes", min: 13, max: 19, estado: "Soleado" },
            { dia: "Miércoles", min: 9, max: 18, estado: "Nublado" },
            { dia: "Jueves", min: 12, max: 20, estado: "Soleado" },
            { dia: "Viernes", min: 11, max: 17, estado: "Nublado" },
            { dia: "Sábado", min: 11, max: 19, estado: "Nublado" },
            { dia: "Domingo", min: 12, max: 19, estado: "Soleado" },
        ],
    },
    {
        id: 5,
        nombre: "Antofagasta",
        imagen: "assets/img/antofagasta2.jpg",
        estadoActual: "Soleado",
        tempActual: 22,
        humedad: "80%",
        uv: "Alto",
        pronosticoSemanal: [
            { dia: "Lunes", min: 13, max: 20, estado: "Soleado" },
            { dia: "Martes", min: 13, max: 22, estado: "Soleado" },
            { dia: "Miércoles", min: 12, max: 19, estado: "Nublado" },
            { dia: "Jueves", min: 12, max: 23, estado: "Soleado" },
            { dia: "Viernes", min: 14, max: 21, estado: "Soleado" },
            { dia: "Sábado", min: 13, max: 22, estado: "Soleado" },
            { dia: "Domingo", min: 12, max: 20, estado: "Nublado" },
        ],
    },
    {
        id: 6,
        nombre: "Temuco",
        imagen: "assets/img/temuco3.jpg",
        estadoActual: "Nublado",
        tempActual: 16,
        humedad: "60%",
        uv: "Bajo",
        pronosticoSemanal: [
            { dia: "Lunes", min: 7, max: 14, estado: "Soleado" },
            { dia: "Martes", min: 8, max: 15, estado: "Soleado" },
            { dia: "Miércoles", min: 6, max: 15, estado: "Soleado" },
            { dia: "Jueves", min: 7, max: 14, estado: "Lluvioso" },
            { dia: "Viernes", min: 5, max: 13, estado: "Lluvioso" },
            { dia: "Sábado", min: 6, max: 14, estado: "Lluvioso" },
            { dia: "Domingo", min: 10, max: 16, estado: "Lluvioso" },
        ],
    },
    {
        id: 7,
        nombre: "Puerto Montt",
        imagen: "assets/img/puertomontt2.jpg",
        estadoActual: "Nublado",
        tempActual: 12,
        humedad: "65%",
        uv: "Bajo",
        pronosticoSemanal: [
            { dia: "Lunes", min: 4, max: 12, estado: "Soleado" },
            { dia: "Martes", min: 8, max: 14, estado: "Nublado" },
            { dia: "Miércoles", min: 8, max: 12, estado: "Lluvioso" },
            { dia: "Jueves", min: 8, max: 12, estado: "Lluvioso" },
            { dia: "Viernes", min: 6, max: 11, estado: "Lluvioso" },
            { dia: "Sábado", min: 6, max: 9, estado: "Lluvioso" },
            { dia: "Domingo", min: 7, max: 16, estado: "Lluvioso" },
        ],
    },
    {
        id: 8,
        nombre: "Punta Arenas",
        imagen: "assets/img/puntaarenas2.jpg",
        estadoActual: "Nublado",
        tempActual: 7,
        humedad: "50%",
        uv: "Bajo",
        pronosticoSemanal: [
            { dia: "Lunes", min: 7, max: 9, estado: "Nublado" },
            { dia: "Martes", min: 7, max: 9, estado: "Nublado" },
            { dia: "Miércoles", min: 5, max: 7, estado: "Lluvioso" },
            { dia: "Jueves", min: 3, max: 7, estado: "Lluvioso" },
            { dia: "Viernes", min: 3, max: 6, estado: "Lluvioso" },
            { dia: "Sábado", min: 3, max: 9, estado: "Nublado" },
            { dia: "Domingo", min: 5, max: 10, estado: "Lluvioso" },
        ],
    },
    {
        id: 9,
        nombre: "Iquique",
        imagen: "assets/img/iquique4.jpg",
        estadoActual: "Soleado",
        tempActual: 21,
        humedad: "70%",
        uv: "Alto",
        pronosticoSemanal: [
            { dia: "Lunes", min: 14, max: 21, estado: "Soleado" },
            { dia: "Martes", min: 14, max: 22, estado: "Soleado" },
            { dia: "Miércoles", min: 16, max: 22, estado: "Soleado" },
            { dia: "Jueves", min: 15, max: 23, estado: "Soleado" },
            { dia: "Viernes", min: 14, max: 24, estado: "Nublado" },
            { dia: "Sábado", min: 13, max: 21, estado: "Nublado" },
            { dia: "Domingo", min: 12, max: 19, estado: "Soleado" },
        ],
    },
    {
        id: 10,
        nombre: "Rancagua",
        imagen: "assets/img/rancagua.jpg",
        estadoActual: "Nublado",
        tempActual: 18,
        humedad: "60%",
        uv: "Medio",
        pronosticoSemanal: [
            { dia: "Lunes", min: 13, max: 19, estado: "Soleado" },
            { dia: "Martes", min: 12, max: 19, estado: "Nublado" },
            { dia: "Miércoles", min: 12, max: 18, estado: "Soleado" },
            { dia: "Jueves", min: 10, max: 18, estado: "Soleado" },
            { dia: "Viernes", min: 10, max: 19, estado: "Nublado" },
            { dia: "Sábado", min: 10, max: 18, estado: "Nublado" },
            { dia: "Domingo", min: 14, max: 17, estado: "Lluvioso" },
        ],
    },
];

function obtenerLugarPorId(id) {
    return lugares.find((l) => l.id === id) || null; //busca por id
}

function calcularEstadisticas(pronostico) {
    let min = Infinity;
    let max = -Infinity;
    let suma = 0;

    let conteo = {
        Soleado: 0,
        Nublado: 0,
        Lluvioso: 0,
        Ventoso: 0,
    };

    for (let i = 0; i < pronostico.length; i++) {
        const dia = pronostico[i];

        if (dia.min < min) min = dia.min;
        if (dia.max > max) max = dia.max;

        suma += dia.min + dia.max;

        if (conteo[dia.estado] !== undefined) {
            conteo[dia.estado]++;
        }
    }

    const promedio = (suma / (pronostico.length * 2)).toFixed(1);

    let resumen = "";
    let mayor = 0;
    let tipoMayor = "";

    for (let tipo in conteo) {
        if (conteo[tipo] > mayor) {
            mayor = conteo[tipo];
            tipoMayor = tipo;
        }
    }

    if (tipoMayor === "Soleado") resumen = "Semana mayormente soleada";
    else if (tipoMayor === "Lluvioso") resumen = "Semana mayormente lluviosa";
    else if (tipoMayor === "Nublado") resumen = "Semana mayormente nublada";
    else resumen = "Semana variable";

    return { min, max, promedio, conteo, resumen };
}

function crearElemento(tag, texto, clase) {
    const el = document.createElement(tag);

    if (texto) el.textContent = texto;
    if (clase) el.className = clase;

    return el;
}

const container = document.querySelector("#city-container");
const detalleContainer = document.querySelector("#detalle-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");
const header = document.querySelector("header");
const buscador = document.getElementById("buscador");
const form = document.querySelector("form"); //esto se encarga que al apretar enter no se racargue la pagina

form.addEventListener("submit", (e) => {
    e.preventDefault(); // aqui sigue la parte de form
});

//la seccion card del home
function renderCards(lista = lugares) {
    container.textContent = "";

    lista.forEach((lugar) => {
        const col = crearElemento("div", null, "col-12 col-md-6 col-lg-4");

        const card = crearElemento("article", null, "card card--ciudad h-100");
        card.dataset.id = lugar.id;

        const img = document.createElement("img");
        img.src = lugar.imagen;
        img.classList.add("card__img");

        const fila = crearElemento("div", null, "card__info");

        const izquierda = document.createElement("div");
        const derecha = document.createElement("div");

        izquierda.appendChild(crearElemento("h3", lugar.nombre));
        izquierda.appendChild(
            crearElemento("p", `${lugar.tempActual}°C - ${lugar.estadoActual}`),
        );

        derecha.appendChild(crearElemento("p", `Humedad: ${lugar.humedad}`));
        derecha.appendChild(crearElemento("p", `UV: ${lugar.uv}`));

        fila.appendChild(izquierda);
        fila.appendChild(derecha);

        card.appendChild(img);
        card.appendChild(fila);

        col.appendChild(card);
        container.appendChild(col);
    });
}

// la seccion detalle
function renderDetalle(id) {
    const lugar = obtenerLugarPorId(id);

    if (!lugar) return;
    const stats = calcularEstadisticas(lugar.pronosticoSemanal);

    detalleContainer.textContent = "";

    const titulo = document.createElement("h2");
    titulo.textContent = lugar.nombre;
    titulo.classList.add("my-4"); // aqui hago espacio arriba y abago del titulo

    const estadistica = document.createElement("div");

    const tituloPronostico = document.createElement("h4");
    tituloPronostico.textContent = "Estadistica de la Semana";
    tituloPronostico.classList.add("mb-4");

    const img = document.createElement("img");
    img.src = lugar.imagen;
    img.classList.add("detalle__img", "img-fluid");

    const pMin = document.createElement("p");
    pMin.textContent = "Mínima: " + stats.min + "°C";

    const pMax = document.createElement("p");
    pMax.textContent = "Máxima: " + stats.max + "°C";

    const pProm = document.createElement("p");
    pProm.textContent = "Promedio: " + stats.promedio + "°C";

    const pResumen = document.createElement("p");
    pResumen.textContent = stats.resumen;

    estadistica.appendChild(tituloPronostico);
    estadistica.appendChild(pMin);
    estadistica.appendChild(pMax);
    estadistica.appendChild(pProm);
    estadistica.appendChild(pResumen);

    const pronosticoDiv = document.createElement("div"); //este es la seccion del pronostico semanal
    pronosticoDiv.className = "detalle__semana";

    lugar.pronosticoSemanal.forEach((dia) => {
        const p = crearElemento(
            "p",
            `${dia.dia}: ${dia.min}° / ${dia.max}° - ${dia.estado}`,
        );

        pronosticoDiv.appendChild(p);
    });

    const contenedorPronostico = document.createElement("div");
    contenedorPronostico.className =
        "d-flex gap-4 align-items-start justify-content-between";

    const colHoy = document.createElement("div");
    colHoy.className = "flex-fill";

    colHoy.appendChild(estadistica);

    const colSemana = document.createElement("div");
    colSemana.className = "flex-fill";

    const tituloSemana = document.createElement("h4");
    tituloSemana.textContent = "Proximos 7 Días";
    tituloSemana.classList.add("mb-3");

    colSemana.appendChild(tituloSemana);
    colSemana.appendChild(pronosticoDiv);

    contenedorPronostico.appendChild(colHoy);
    contenedorPronostico.appendChild(colSemana);

    const row = document.createElement("div"); // aqui es el contenedor de la imagen y el texto de detalle
    row.className = "row";

    const colImg = document.createElement("div");
    colImg.className = "col-12 col-md-6 d-flex";

    const colTexto = document.createElement("div");
    colTexto.className =
        "col-12 col-md-6 ps-4 d-flex flex-column justify-content-center";

    colImg.appendChild(img);

    colTexto.appendChild(titulo);
    colTexto.appendChild(contenedorPronostico);

    row.appendChild(colImg);
    row.appendChild(colTexto);

    detalleContainer.appendChild(row);
}

function mostrarHome() {
    vistaHome.classList.remove("d-none");
    vistaDetalle.classList.add("d-none");
    header.classList.remove("d-none");
}

function mostrarDetalle(id) {
    renderDetalle(id);
    vistaHome.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");
    header.classList.add("d-none");
}

container.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = Number(card.dataset.id);
    mostrarDetalle(id);
});

btnVolver.addEventListener("click", mostrarHome);

buscador.addEventListener("input", () => {
    const textoInput = buscador.value.toLowerCase().trim(); //buscador de ciudades
    const lugaresFiltrados = lugares.filter((c) =>
        c.nombre.toLowerCase().includes(textoInput),
    );

    renderCards(lugaresFiltrados);
});

renderCards();
