const botonAbrirCamara = document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

const botonTomarFoto = document.querySelector("[data-tomar-foto]");
const mensaje = document.querySelector("[data-mensaje]");
const canvas = document.querySelector("[data-video-canvas]");

const botonEnviarDatos = document.querySelector("[data-enviar]");
let imgUrl = "";

botonAbrirCamara.addEventListener('click', async () => {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false}); //Accesing to the camera
    botonAbrirCamara.style.display="none"; //Hidding my element
    campoCamara.style.display = "block"; //Showing my element 
    video.srcObject = iniciarVideo; //Initializing an attribute 
});

botonTomarFoto.addEventListener("click", () => {
    canvas.getContext("2d").drawImage(video,0,0,canvas.width,canvas.height); 
    imgUrl = canvas.toDataURL("image/jpeg");
    campoCamara.style.display = "none";
    mensaje.style.display = "block";
});

botonEnviarDatos.addEventListener("click", () => {
    const recibirDatos = localStorage.getItem("registro"); //Obtaining saved data
    const convertirDatos = JSON.parse(recibirDatos);

    convertirDatos.img_url = imgUrl;

    localStorage.setItem("registro", JSON.stringify(convertirDatos));

    window.location.href = "./abrir-cuenta-form-3.html";

})