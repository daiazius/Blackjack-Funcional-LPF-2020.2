import kotlinx.browser.*
import org.w3c.dom.*


val baralhin = Baralho()
val p1 = Jogador("joao")


@JsName("darCartas")
fun darCartas(){

    p1.maoDoJogador.puxarCarta(2,baralhin.cartas)

    val a:String = p1.maoDoJogador.cartasNaMao.get(0).toString()
    val b:String = p1.maoDoJogador.cartasNaMao.get(1).toString()

    val jorje = document.getElementById("jogo")

    if(jorje==null){
        println("ihhh passou vergoinha em")
        return;
    }

    jorje.innerHTML = """
    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>
    <div id = "carta"><p id = "texto-carta">$a</p></div>
    <div id = "carta"><p id = "texto-carta">$b</p></div>
    <button id = "pedir" onclick = "VinteUm.pedirCartas()">Adiciona</button>
    <button id = "manter" style = "font-size: 14px">Manter</button>     
    """
}

@JsName("pedirCartas")
fun pedirCartas(){

    if(baralhin.cartas.isEmpty()){
        println("baralho vazio")
        return;
    }

    p1.maoDoJogador.puxarCarta(1,baralhin.cartas)
    val a:String = p1.maoDoJogador.cartasNaMao.last().toString()
    
    val vonNeumann = document.getElementById("jogo")
    if(vonNeumann==null){
        println("ihhh passou vergoinha em")
        return;
    }
    vonNeumann.innerHTML += """
    <div id = "carta"><p id = "texto-carta">$a</p></div>
    """

    verificinator()

}

fun verificinator(){
    if(p1.maoDoJogador.asNaMao){
        if(p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1) > 21){
            println("rebentastes ou nao")
        }
        else if(p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1) == 21){
        println("vencestes")
        }
    }
    if(p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1) > 21){
            println("rebentastes")
        }
    else if(p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1) == 21){
        println("vencestes")
    }

}



class Carta(val naipe :Int, val numero :Int) {

    override fun toString(): String{
        var coisa:String = ""
        var coisa2:String

        if(numero == 11){
            coisa2="J"
        }else if(numero == 12){
            coisa2="Q"
        }else if(numero == 13){
            coisa2="K"
        }else{
            coisa2=numero.toString()
        }

        when(naipe){
            1 -> coisa += "$coisa2 \n   ♣"
            2 -> coisa += "$coisa2 \n   ♥"
            3 -> coisa += "$coisa2 \n   ♦"
            4 -> coisa += "$coisa2 \n   ♠" 
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
    var asNaMao = false

    fun puxarCarta(qntdCartas:Int, cartas:MutableList<Carta>){
        if(qntdCartas == 0){
            return;
        }
        else{
            //if que verifica se a próxima carta a ser adicionada é um Ás, se for a flag global de asNaMao é true
            if(cartas[0].numero == 1){
                asNaMao = true
            }
            cartasNaMao.add(cartas.removeFirst())
            puxarCarta(qntdCartas-1,cartas)
        }

    }
    
    fun somarOTotal(n:Int): Int{
        if(n < 0){
            return 0
        }
        else{
            if(cartasNaMao[n].numero > 10){
                return somarOTotal(n-1) + 10
            }
          return somarOTotal(n-1) + cartasNaMao[n].numero
        }
    
    }
    
    fun somarOTotalcomAs(n:Int): Int{
        if(n < 0){
            return 0
        }
        else{
            if(cartasNaMao[n].numero > 10){
                return somarOTotalcomAs(n-1) + 10
            }
            if(cartasNaMao[n].numero == 1){
                return somarOTotalcomAs(n-1) + 11
            }
            return somarOTotalcomAs(n-1) + cartasNaMao[n].numero
        }

    }

}

class Jogador(val nome:String){
    val maoDoJogador = Mao()
    val pontuacao:Int = 0
    
}
