// File responsible of giving dynamism to the main page

// document.querySelector('#sonido_tecla_pom') //Bringing a html element by its id

function playSonidoPom(){ //Using a function to execute my functionality 
    document.querySelector('#sonido_tecla_pom').play(); //using a functionality
}

//Bringing a html element by its class name
document.querySelector('.tecla_pom').onclick = playSonidoPom; //Using a function in an atributte
//Putting () makes the functions execute inmediatly, and that is a bad practice, cause the user needs to interact with the page before we can execute something, that's why we delete ()

/* function playSonidoClap(){
    document.querySelector('#sonido_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = playSonidoClap; */

/* ----------------------------------- */

const listaTeclas = document.querySelectorAll('.tecla') //Brings a list with all HTML elements with that selector
//Here we are using a variable to reference or asign data and use it later 

listaTeclas[0].onclick = playSonidoPom; //Accesing to an element in my list and assigning a function to that element 


function playSonido(idElementoAudio){ 
    document.querySelector(idElementoAudio).play(); //Creating a function to encapsulate a repetitive functionallity
}


for(let contador = 0; contador < listaTeclas.length; contador++){

    const tecla = listaTeclas[contador];  //Using a dynamic variable 

    const instrumento = tecla.classList[1]; //Getting classes associated to each element

    const idAudio = `#sonido_${instrumento}` //Using a dynamic variable 

    tecla.onclick = function () {
        playSonido(idAudio); //Using an anonymous function to avoid executing the function when we are assigning the functionallity to the element
    };

    tecla.onkeydown = (event) => { //Accessing to properties of my attribute and using an event

        const keyPush = event.code; //accesing to key code from the key push by the user

        if(keyPush === 'Space' || keyPush === 'Enter'){
            tecla.classList.add('activa'); //Adding a class to my attribute 
        }
        
    };
    
    tecla.onkeyup = () => {
        tecla.classList.remove('activa'); //Removing a class
    };
}

listaTeclas.forEach((tecla, i) => {
    const instrumento = tecla.classList[i];

    const idAudio = `#sonido_${instrumento}` //Using a dynamic variable 

    tecla.onclick = () => {
        playSonido(idAudio); 
    };

})