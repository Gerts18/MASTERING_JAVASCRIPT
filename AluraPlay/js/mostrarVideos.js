import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector('[data-lista]');

function crearCard(titulo, descripcion, url, imagen){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
    `
    <iframe width="100%" height="72%" src=${url}
        title=${titulo} frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src=${imagen} alt="logo canal alura">
        <h3>${descripcion}</h3>
        <p>236 mil visualizaciones</p>
    </div>
    `

    return video;
}

async function listarVideos(){
    const listaApi = await conexionApi.listarVideos();

    listaApi.forEach((video) => {
        lista.appendChild(crearCard(video.title, video.descripcion, video.url, video.imagen))
    });
};