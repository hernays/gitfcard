import './css/styles.css';


const caja = document.querySelectorAll('.ocultar');
const  fuegos = document.querySelector('#fuegos');
const card = document.querySelector('#card');
const body = document.querySelector('#body');
const cajah = document.querySelector('#cajah');
const audio = document.querySelector('#audio');




const ocultarCaja = async(event) => {

    const img = event.target;

    if(img.classList.contains('regalo')){
    
    img.classList.replace('regalo','rapida');


 const time = setTimeout( async(evento) => {

     caja[0].style.display = 'none';

     evento = true;

     if(evento){

        setTimeout( () => {

             fuegos.classList.add('fuegos');
             fuegos.src="assets/img/fuegos-artificiales.gif";
             card.classList.add('cardAbrir');
             body.classList.add('flexBody');
             cajah.classList.add('cardAbrir');
             audio.classList.add('cardAbrir');

             audio.play();

         },10)
        
     }
     
 },5000);

    }


}


    caja[0].addEventListener('click', (event) => {

        ocultarCaja(event);
       
    });


