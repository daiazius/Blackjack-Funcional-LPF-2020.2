import kotlinx.browser.*
import org.w3c.dom.*

@JsName("darCartas")
fun darCartas(){

    val jorje = document.getElementById("jogo")

    if(jorje==null){
        println("ihhh passou vergoinha em")
        return;
    }
    
   // val carta = Carta(2,1)
    
    val alanturing = Baralho()
    val sim = Mao()
    sim.puxarCarta(1,alanturing.cartas)
    val carta = sim.cartasNaMao.removeFirst()
    val a:String = carta.toString()

    jorje.innerHTML = """
    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>
    <button id = "pedro" onclick = "VinteUm.pedirCartas()">adiciona</button>    
    """
}

@JsName("pedirCartas")
fun pedirCartas(){
    val vonNeumann = document.getElementById("jogo")
    if(vonNeumann==null){
        println("ihhh passou vergoinha em")
        return;
    }
    vonNeumann.innerHTML += """
    <div id = "bora"><p style = "text-align: center"></p></div>
    """
    
}

class Carta(naipe :Int, numero :Int) {
    val numero:Int = numero
    val naipe:Int = naipe

    
    override fun toString(): String{
        var coisa:String = ""
        when(naipe){
            1 -> coisa += "$numero de paus"
            2 -> coisa += "$numero de ouros"
            3 -> coisa += "$numero de copas"
            4 -> coisa += "$numero de espadas" 
        }
        return coisa
    }

}

class Baralho(){
    val cartas = mutableListOf<Carta>()
    init{
        
        andaNaipe(1,13)
        //cartas.add(4,1) //isso aq resolve a falta da última carta
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
    

class Mao(){
    val cartasNaMao = mutableListOf<Carta>()

    fun puxarCarta(qntdCartas:Int, cartas:MutableList<Carta>){
        if(qntdCartas == 0){
            return;
        }
        else{
            //fazer com que a carta va para a mao do jogador ou do dealer
            cartasNaMao.add(cartas.removeFirst())
            puxarCarta(qntdCartas-1,cartas)
        }

    }

}
