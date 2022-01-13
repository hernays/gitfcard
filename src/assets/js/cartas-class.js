const _ = require('underscore');
const Swal = require('sweetalert2');
/* 

- Crear un deck
- entregar cartas aleatorias
- pedir carta
- sacar el valor de la carta 

*/


const pedirCartas0 = document.querySelector('#pedirCarta');
const detenerJuego0 = document.querySelector('#detener');
const nuevoJuegos0 = document.querySelector('#nuevo');

pedirCartas0.classList.add('disabled');
detenerJuego0.classList.add('disabled');

export class JuegoCartas  {

    deck = [];
    letraCartas = ['C','D','H','S'];
    cartasEspeciales = ['Q','K','J','A'];
    
    /* Botones
    [0] nuevo juego
    [1] pedir
    [2] detener
    */ 

    pedirCartas = document.querySelector('#pedirCarta');
    detenerJuego = document.querySelector('#detener');
    nuevo = document.querySelector('#nuevo');
    cartas = document.querySelectorAll('.cartas');

    /* 
    Puntos usuarios
    */
    puntosUsuarios = [0,0];
    puntos = document.querySelectorAll('.puntos');

    constructor(){


    }


    iniciarJuego(){

        this.crearDeck();
        this.nuevo.classList.add("disabled");

        pedirCartas0.classList.remove('disabled');
        detenerJuego0.classList.remove('disabled');

       for(let i = 0; i<this.puntosUsuarios.length; i++){

         this.puntosUsuarios[i] = 0;

         this.cartas[i].innerHTML = '';
         this.puntos[i].innerText = 0;

       }

       console.log(this.puntosUsuarios);
           

    }

    crearDeck(){

        for(let i = 2; i<=10; i++){
            for(let letra of this.letraCartas){
                this.deck.push(i+letra);
            }
        }
            for(let carta of this.cartasEspeciales){
                for(let letras of this.letraCartas){

                    this.deck.push(carta+letras);
                }
            }


       this.deck =  _.shuffle(this.deck);

       
       return this.deck;
    }

    pedirCarta(){

        if(this.deck.length === 0){
            throw 'no hay cartas en el deck';

        }

        const carta = this.deck.pop();

        return carta;
    }


    valorCarta(card){

        const valor = card.substring(0 , card.length-1);

        return (isNaN(valor)) ?
               (valor === 'A') ? 11 : 10
               : (valor * 1);
       }

       calcularPuntos(turno , carta){

        console.log(turno,carta);

          this.puntosUsuarios[turno] = this.valorCarta(carta) + this.puntosUsuarios[turno];
          this.puntos[turno].innerHTML = this.puntosUsuarios[turno];

          console.log(this.puntosUsuarios[turno]);

          return this.puntosUsuarios[turno];

       }

       crearCarta(carta, turno){

        const img = document.createElement('img');
        img.src= `./assets/img/cartas/${carta}.png`;

        this.cartas[turno].append(img);
        

       }

       turnoComputadora(puntosUsuario){

        let puntos = 0;

         do{

            let carta = this.pedirCarta();

            this.crearCarta(carta, this.puntosUsuarios.length -1);


                puntos = this.calcularPuntos(this.puntosUsuarios.length-1, carta);

                puntos = puntos + 0;


            if(puntos >= 21 || puntos > 21){

                break;
            }
           


         }while( (puntos < puntosUsuario) && (puntosUsuario <= 21) );


         if(puntos === puntosUsuario){

            Swal.fire('Empate nadie Gana &#128534;');
            console.log('es un empate');

            this.nuevo.classList.remove("disabled");

            detenerJuego0.classList.add("disabled");
            pedirCartas0.classList.add("disabled");

         }else if((puntos > puntosUsuario) && (puntos <= 21)){

            Swal.fire(`Computadora Gana <span class="emoji">${'&#128516;'}</span>`);
            //'Computadora Gana &#128540;'
   
            this.nuevo.classList.remove("disabled");

           /* const pedirCartas0 = document.querySelector('#pedirCarta');
const detenerJuego0 = document.querySelector('#detener');
const nuevoJuegos0 = document.querySelector('#nuevo');*/

                 detenerJuego0.classList.add("disabled");
                 pedirCartas0.classList.add("disabled");

         }else if( (puntosUsuario > puntos) && (puntosUsuario < 21)){

            Swal.fire(' Ganaste !!!! &#128512;');
           
            this.nuevo.classList.remove("disabled");

            detenerJuego0.classList.add("disabled");
            pedirCartas0.classList.add("disabled");

         }else if( (puntosUsuario < puntos )){

            Swal.fire(' Ganaste !!!! &#128512; ');

            this.nuevo.disabled = false;
            this.nuevo.classList.remove("disabled");

            detenerJuego0.classList.add("disabled");
            pedirCartas0.classList.add("disabled");
         

         }else if(puntosUsuario > puntos){
                      
            Swal.fire('Computadora Gana &#128540;');

            this.nuevo.disabled = false;
            this.nuevo.classList.remove("disabled");

            detenerJuego0.classList.add("disabled");
            pedirCartas0.classList.add("disabled");
         }

    }


    pedir(){

          let carta =  this.pedirCarta();
           this.crearCarta(carta,0);

           setTimeout( () => {

            let puntos = this.calcularPuntos( 0 , carta);
            if(puntos > 21){
             this.pedir.disabled = true;
             this.detener.disabled = true;
             this.turnoComputadora(puntos);
            }else if(puntos == 21){
             this.turnoComputadora(puntos);
             this.pedir.disabled = true;
             this.detener.disabled = true;
            }

           },10)
          

       return puntos;


    }

    detener(){

        this.pedirCartas.disabled = true;
        this.nuevo.disabled = false;
         
        this.turnoComputadora(this.puntosUsuarios[0]);
        
    }

}

// evento 





