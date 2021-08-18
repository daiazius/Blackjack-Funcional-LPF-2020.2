import kotlinx.browser.*
import org.w3c.dom.*

@JsName("darCartas")
fun darCartas(){
    var jorje = document.getElementById("jogo")
    var teste = document.createElement("div")

    if(jorje==null || teste==null){
        println("ihhh passou vergoinha em")
        return;
    }

    
    jorje = teste
    
   // val testando = Teste()
   // testando.oi()
}

class Carta(naipe :Int, numero :Int) {
    val numero:Int = numero
    val naipe:Int = naipe

}

class Baralho(){
    val cartas = mutableListOf<Carta>()
    init{
        
        andaNaipe(1,13)
        cartas.shuffle()

    }
 
    fun andaNaipe(nNaipe:Int,nCarta:Int){
        if(nNaipe > 4){
            return;
        }
        else{
            andaCarta(nNaipe,nCarta)
            andaNaipe(nNaipe+1,nCarta)
        }
    }

    fun andaCarta(nNaipe:Int,nCarta:Int){
        if(nCarta == 0){
            return;
        }
        else{
            cartas.add(Carta(nNaipe,nCarta))
            andaCarta(nNaipe,nCarta-1)
        }
    }

}
