import kotlinx.browser.*
import org.w3c.dom.*


val baralhin = Baralho()
val p1 = Jogador("joao")
val dealer = Jogador("dealer")
var jogoAcabou:Boolean = false

@JsName("darCartas")
fun darCartas(){
    
    p1.maoDoJogador.puxarCarta(2,baralhin.cartas)
    dealer.maoDoJogador.puxarCarta(2,baralhin.cartas)

    val carta1:String = p1.maoDoJogador.cartasNaMao.get(0).toString()
    val carta2:String = p1.maoDoJogador.cartasNaMao.get(1).toString()
    val cartaDoDealer1:String = dealer.maoDoJogador.cartasNaMao.get(0).toString()
    val pont:Int = p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size - 1)
    val pontA:Int = p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1)

    val jorje = document.getElementById("jogo")

    if(jorje==null){
        println("ihhh passou vergoinha em")
        return;
    }

    jorje.innerHTML = """
    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>
    <div id = "maoJogador"></div>
    <div id = "maoDealer"></div>
    <div id = "pontuacaoDealer">Pontuação: ???</div>
    <button id = "pedir" onclick = "VinteUm.pedirCartas()">Adiciona</button>
    <button id = "manter" onclick = "VinteUm.manterMao()">Manter</button>     
    """
    val jorje2 = document.getElementById("maoJogador")
    val jorje3 = document.getElementById("maoDealer")

    if(jorje2 == null || jorje3 == null){
        println("ihhh passou vergoinha em")
        return;
    }
    
    jorje2.innerHTML = """
    <div id = "carta"><p id = "texto-carta">$carta1</p></div>
    <div id = "carta"><p id = "texto-carta">$carta2</p></div>
    """

    jorje3.innerHTML = """
    <div id = "cartaDealer"><p id = "texto-carta">$cartaDoDealer1</p></div>
    <div id = "cartaDealer2"></div>
    """
 
    if(p1.maoDoJogador.asNaMao){
        jorje.innerHTML += """
        <div id = "pontuacao">Pontuação: $pont/$pontA</div>
        """
    }
    else{
        jorje.innerHTML += """
        <div id = "pontuacao">Pontuação: $pont</div>
        """
    }
}

@JsName("pedirCartas")
fun pedirCartas(){

    if(baralhin.cartas.isEmpty()){
        println("baralho vazio")
        return;
    }
    
    p1.maoDoJogador.puxarCarta(1,baralhin.cartas)
    val carta:String = p1.maoDoJogador.cartasNaMao.last().toString()
    val pont:Int = p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1)
    val pontA:Int = p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1)
    
    
    val vonNeumann = document.getElementById("maoJogador")

    if(vonNeumann==null){
        println("ihhh passou vergoinha em")
        return;
    }
    vonNeumann.innerHTML += """
    <div id = "carta"><p id = "texto-carta">$carta</p></div>
    """
    if(p1.maoDoJogador.asNaMao){
        document.getElementById("pontuacao")?.innerHTML = "Pontuação: $pont/$pontA";
    }
    else{
        document.getElementById("pontuacao")?.innerHTML = "Pontuação: $pont";
    }
    verificinator()
    if(jogoAcabou){
        document.getElementById("jogo")?.innerHTML += """<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega</p></button>"""
    }

}

@JsName("pedirCartasDealer")
fun pedirCartasDealer(){

    if(baralhin.cartas.isEmpty()){
        println("baralho vazio")
        return;
    }

    dealer.maoDoJogador.puxarCarta(1,baralhin.cartas)
    val carta:String = dealer.maoDoJogador.cartasNaMao.last().toString()
    val vonNeumann = document.getElementById("maoDealer")
    if(vonNeumann==null){
        println("ihhh passou vergoinha em")
        return;
    }
    vonNeumann.innerHTML += """
    <div id = "cartaDealer"><p id = "texto-carta">$carta</p></div>
    """

}

@JsName("manterMao")
fun manterMao(){
    verificinator()
    if(!jogoAcabou){
        val cartaDoDealer2:String = dealer.maoDoJogador.cartasNaMao.get(1).toString()
        val pontosJogador:Int


        if(p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1) <= 21){
            pontosJogador = p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1)
        }
        else{
            pontosJogador = p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1)
        }
        document.getElementById("cartaDealer2")?.innerHTML = "<p id = texto-carta>$cartaDoDealer2</p>"
        document.getElementById("cartaDealer2")?.id = "cartaDealer"
    
        verificinatorDealer(pontosJogador)
        if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) != 21 && jogoAcabou == false){
            while(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) < 17 && 
            dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) <= pontosJogador){
            
                pedirCartasDealer()
                verificinatorDealer(pontosJogador)
            }
        }
        if(!jogoAcabou){
            verificinatorDealer(pontosJogador)
        }else{
            document.getElementById("jogo")?.innerHTML += """<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega</p></button>"""
        }

        val pont:Int = dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1)
        val pontA:Int = dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1)

        if(dealer.maoDoJogador.asNaMao){
            document.getElementById("pontuacaoDealer")?.innerHTML = "Pontuação: $pont/$pontA";
        }
        else{
            document.getElementById("pontuacaoDealer")?.innerHTML = "Pontuação: $pont";
        }
    }
    else{
        document.getElementById("jogo")?.innerHTML += """<button onclick="document.location.reload(true)" id="recarregar"><p id = "jogar">Recarrega</p></button>"""
    }
}

fun verificinator(){
    if(p1.maoDoJogador.asNaMao){

        if(p1.maoDoJogador.somarOTotalcomAs(p1.maoDoJogador.cartasNaMao.size-1) == 21){

        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """
        <div id = "fimDeJogo" style = "background: green;">VENCESTES</div>""" 
        jogoAcabou = true;
        }
    }
    if(p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1) > 21){

        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """
        <div id = "fimDeJogo" style = "background: darkred">REBENTASTES</div>"""
        jogoAcabou = true;
        }
    else if(p1.maoDoJogador.somarOTotal(p1.maoDoJogador.cartasNaMao.size-1) == 21){
        
        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """
        <div id = "fimDeJogo" style = "background: green;">VENCESTES</div>""" 
        jogoAcabou = true;
    }

}

fun verificinatorDealer(pontosJogador:Int){

    if(dealer.maoDoJogador.asNaMao){

        if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) == 21){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: blue;">PERDESTES</div>"""
            jogoAcabou = true 
        }
        else if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) > pontosJogador){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: yellow;">PERDESTES</div>""" 
            jogoAcabou = true 
        }
        else if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) == pontosJogador){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: green;">EMPATASTES</div>""" 
            jogoAcabou = true 
        }
    }

        if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) > 21){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """
            <div id = "fimDeJogo">VENCESTES</div>
            """
            jogoAcabou = true 
            }
        else if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) == 21){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: brown;">PERDESTES</div>""" 
            jogoAcabou = true 
        }
        else if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) > pontosJogador){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: pink;">PERDESTES</div>""" 
            jogoAcabou = true 
        }
        else if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) == pontosJogador &&
        dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) >= 17){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: purple;">EMPATASTES</div>""" 
            jogoAcabou = true 
        }
        //SITUAÇAO Q O DEALER JA TEM 17 NO TOTAL E NAO PODE MAIS PUXAR CARTA
        else if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) >= 17 && 
        dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) < pontosJogador){
            
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: green;">VENCESTES</div>""" 
            jogoAcabou = true
        }
}

class Carta(val naipe :Int, val numero :Int) {

    override fun toString(): String{
        var coisa:String = ""
        var coisa2:String

        if(numero==1){
            coisa2="A"
        }else if(numero == 11){
            coisa2="J"
        }else if(numero == 12){
            coisa2="Q"
        }else if(numero == 13){
            coisa2="K"
        }else{
            coisa2=numero.toString()
        }

        when(naipe){
            1 -> coisa = "$coisa2 \n   ♣"
            2 -> coisa = "$coisa2 \n   ♥"
            3 -> coisa = "$coisa2 \n   ♦"
            4 -> coisa = "$coisa2 \n   ♠" 
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