// declaracion de jugadores

//clase
function Jugador(nombre) 
{
    this.nombre = nombre;
    this.puntos = 100;
    this.sp=100;
    //**************************************************************** */
    this.curar= function(jugadorObjetivo)
    {
        if(this.sp>=40) {
            this.sp-=40;
            jugadorObjetivo.puntos+=20;
        }
        else
        {
            console.info(this.nombre + " no tiene sp");
        }
    }
    //**************************************************************** */
    this.estado = function(jugadorObjetivo)
    {
        console.info(this);
        console.info(jugadorObjetivo);
    }
    //**************************************************************** */
    this.tirarflecha = function(jugadorObjetivo)
    {
        if(jugadorObjetivo.puntos>40)
        {
            jugadorObjetivo =-40;
            this.estado(jugadorObjetivo);
        }
        else
        {
            jugadorObjetivo.puntos=0;
            console.error(jugadorObjetivo.nombre + " murio!!!");
        }
    }
    /*---------------------------------------------------------------- */
};

var jugador1 = new Jugador("gandalf");
var jugador2 = new Jugador("legolas");

console.log(jugador1);
console.log(jugador2);
//******************************************* */
jugador1.curar(jugador2);
//******************************************* */
// console.info(jugador1);
// console.info(jugador2);