import kotlinx.browser.*
import org.w3c.*

//Variáveis globais que inicializam o baralho, as mãos do jogador e do dealer e a flag do status do jogo
var baralho = Baralho()
var jogador = Jogador("joao")
var dealer = Jogador("dealer")
var jogoAcabou:Boolean = false

/*Função que aparece no botão de jogar e reiniciar o jogo. A função puxa as cartas do baralho, distribui nas mãos do jogador e do dealer e muda o HTML da div do jogo
mostrando a pontuação e as cartas distribuídas, deixando a pontuação e a segunda carta do dealer escondidas. */
@JsName("darCartas")
fun darCartas(){

    jogador.maoDoJogador.puxarCarta(2,baralho.cartas)
    dealer.maoDoJogador.puxarCarta(2,baralho.cartas)

    val carta1:String = jogador.maoDoJogador.cartasNaMao.get(0).toString()
    val carta2:String = jogador.maoDoJogador.cartasNaMao.get(1).toString()
    val cartaDoDealer1:String = dealer.maoDoJogador.cartasNaMao.get(0).toString()
    val pontuacao:Int = jogador.maoDoJogador.somarOTotal(jogador.maoDoJogador.cartasNaMao.size - 1)
    val pontuacaoComAs:Int = jogador.maoDoJogador.somarOTotalcomAs(jogador.maoDoJogador.cartasNaMao.size-1)

    val divDoJogo = document.getElementById("jogo")

    if(divDoJogo==null){
        println("nulo")
        return;
    }

    divDoJogo.innerHTML = """
    <link rel="stylesheet" type="text/css" href="estilos.css" media="screen"/>
    <div id = "maoJogador"></div>
    <div id = "maoDealer"></div>
    <div id = "pontuacaoDealer">Pontuação: ???</div>
    <button id = "pedir" onclick = "VinteUm.pedirCartas()">Adiciona</button>
    <button id = "manter" onclick = "VinteUm.manterMao()">Manter</button>     
    """
    val divMaoDoJogador = document.getElementById("maoJogador")
    val divMaoDoDealer = document.getElementById("maoDealer")

    if(divMaoDoJogador == null || divMaoDoDealer == null){
        println("null")
        return;
    }

    divMaoDoJogador.innerHTML = """
    <div id = "carta"><p id = "texto-carta">$carta1</p></div>
    <div id = "carta"><p id = "texto-carta">$carta2</p></div>
    """

    divMaoDoDealer.innerHTML = """
    <div id = "cartaDealer"><p id = "texto-carta">$cartaDoDealer1</p></div>
    <div id = "cartaDealer2"></div>
    """

    //Aqui tem a verificação para que tipo de pontuação o jogo vai mostrar
    if(jogador.maoDoJogador.asNaMao){
        divDoJogo.innerHTML += """
        <div id = "pontuacao">Pontuação: $pontuacao/$pontuacaoComAs</div>
        """
    }
    else{
        divDoJogo.innerHTML += """
        <div id = "pontuacao">Pontuação: $pontuacao</div>
        """
    }
}

/* Função que puxa cartas do baralho e coloca na mão do jogador e na tela, ela também faz verificações para encerrar o jogo caso o jogador consiga 21 ou passe do limite */
@JsName("pedirCartas")
fun pedirCartas(){
    
    //Puxa 1 carta
    jogador.maoDoJogador.puxarCarta(1,baralho.cartas)
    val carta:String = jogador.maoDoJogador.cartasNaMao.last().toString()
    val pontuacao:Int = jogador.maoDoJogador.somarOTotal(jogador.maoDoJogador.cartasNaMao.size-1)
    val pontuacaoComAs:Int = jogador.maoDoJogador.somarOTotalcomAs(jogador.maoDoJogador.cartasNaMao.size-1)


    val divMaoDoJogador = document.getElementById("maoJogador")

    if(divMaoDoJogador==null){
        println("null")
        return;
    }
    divMaoDoJogador.innerHTML += """
    <div id = "carta"><p id = "texto-carta">$carta</p></div>
    """
    //Verifica se o jogador puxou um ás, se puxou muda a pontuação para um formato que aparece as duas pontuações
    if(jogador.maoDoJogador.asNaMao){
        document.getElementById("pontuacao")?.innerHTML = "Pontuação: $pontuacao/$pontuacaoComAs";
    }
    else{
        document.getElementById("pontuacao")?.innerHTML = "Pontuação: $pontuacao";
    }

    //Verifica, pelas pontuações do jogador, se ele venceu o jogo ou "estourou" a mão
    verificinator()
    
    //Se o jogo acabou, reinicia as variáveis e coloca um botão que pode começar o jogo
    if(jogoAcabou){
        reset()
        document.getElementById("jogo")?.innerHTML += """<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar</button>"""
    }

}

/* Função que puxa uma carta do baralho, coloca na mão do dealer e coloca a nova carta para aparecer na div do jogo */
@JsName("pedirCartasDealer")
fun pedirCartasDealer(){

    dealer.maoDoJogador.puxarCarta(1,baralho.cartas)
    val carta:String = dealer.maoDoJogador.cartasNaMao.last().toString()
    val divMaoDoDealer = document.getElementById("maoDealer")

    if(divMaoDoDealer==null){
        println("nulo")
        return;
    }
    divMaoDoDealer.innerHTML += """
    <div id = "cartaDealer"><p id = "texto-carta">$carta</p></div>
    """
}

/* Função do botão de manter do jogo, a função finaliza o turno do jogador e inicia o turno do dealer, com várias verificações do estado atual do jogo e atualizações na tela */
@JsName("manterMao")
fun manterMao(){

    //Verificação inicial da mão do jogador, se o jogo terminar pula o turno do dealer e já finaliza o jogo.
    verificinator()
    if(!jogoAcabou){

        val cartaDoDealer2:String = dealer.maoDoJogador.cartasNaMao.get(1).toString()
        val pontosJogador:Int

        //Condicional que compara as duas pontuações do jogador e utiliza a maior pontuação válida menor ou igual a 21
        if(jogador.maoDoJogador.somarOTotalcomAs(jogador.maoDoJogador.cartasNaMao.size-1) <= 21){
            pontosJogador = jogador.maoDoJogador.somarOTotalcomAs(jogador.maoDoJogador.cartasNaMao.size-1)
        }
        else{
            pontosJogador = jogador.maoDoJogador.somarOTotal(jogador.maoDoJogador.cartasNaMao.size-1)
        }

        //Modificação dinâmica que revela a carta escondida do dealer
        document.getElementById("cartaDealer2")?.innerHTML = "<p id = texto-carta>$cartaDoDealer2</p>"
        document.getElementById("cartaDealer2")?.id = "cartaDealer"

        //Primeira verificação da pontuação do dealer após a carta escondida ser revelada. Para o turno do dealer se ele já puder vencer com a mão inicial.
        verificinatorDealer(pontosJogador)

        //Condicional que, se o dealer não iniciar com 21 e já vencer o jogo, continua com o jogo. 
        if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) != 21 && !jogoAcabou){

            /* Loop que, enquanto a pontuação do dealer for menor que a pontuação do jogador, faz com que o dealer continue puxando cartas até o seu limite de 17 pontos
            ou até vencer a pontuação do jogador, com um verificador em cada iteração do seu turno. */
            while(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) < 17 &&
                dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) <= pontosJogador){
                    pedirCartasDealer()
                    verificinatorDealer(pontosJogador)
            }
        }

        document.getElementById("jogo")?.innerHTML += """<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar</button>"""

        val pontuacao:Int = dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1)
        val pontuacaoComAs:Int = dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1)

        //Condicional que verifica se o dealer tem um ás, se ele tiver muda a div para incluir a sua pontuação com ás.
        if(dealer.maoDoJogador.asNaMao){
            document.getElementById("pontuacaoDealer")?.innerHTML = "Pontuação: $pontuacao/$pontuacaoComAs";
        }
        else{
            document.getElementById("pontuacaoDealer")?.innerHTML = "Pontuação: $pontuacao";
        }
        reset()
    }
    else{
        reset()
        document.getElementById("jogo")?.innerHTML += """<button onclick="VinteUm.darCartas()" id="recarregar">Reiniciar</button>"""
    }
}

// Função que verifica as condições de vitória do jogador, muda o status do jogo e a página para mostrar se ele venceu ou perdeu.
fun verificinator(){
    if(jogador.maoDoJogador.asNaMao){

        if(jogador.maoDoJogador.somarOTotalcomAs(jogador.maoDoJogador.cartasNaMao.size-1) == 21){
            document.getElementById("pedir")?.remove()
            document.getElementById("manter")?.remove()
            document.getElementById("jogo")?.innerHTML += """
            <div id = "fimDeJogo" style = "background: green;">VENCESTES</div>"""
            jogoAcabou = true
        }
    }
    if(jogador.maoDoJogador.somarOTotal(jogador.maoDoJogador.cartasNaMao.size-1) > 21){

        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """
        <div id = "fimDeJogo" style = "background: darkred">REBENTASTES</div>"""
        jogoAcabou = true
    }
    else if(jogador.maoDoJogador.somarOTotal(jogador.maoDoJogador.cartasNaMao.size-1) == 21){

        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """
        <div id = "fimDeJogo" style = "background: green;">VENCESTES</div>"""
        jogoAcabou = true
    }

}

/* Função que funciona como a inteligência do dealer. Ela faz todas as verificações e comparações da pontuação do dealer e do jogador e muda o status do jogo e a div
do jogo para refletir os resultados. */
fun verificinatorDealer(pontosJogador:Int){

    if(dealer.maoDoJogador.asNaMao){

        if(dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) > pontosJogador && 
        dealer.maoDoJogador.somarOTotalcomAs(dealer.maoDoJogador.cartasNaMao.size-1) <= 21){

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
    else if(dealer.maoDoJogador.somarOTotal(dealer.maoDoJogador.cartasNaMao.size-1) in 17 until pontosJogador){

        document.getElementById("pedir")?.remove()
        document.getElementById("manter")?.remove()
        document.getElementById("jogo")?.innerHTML += """<div id = "fimDeJogo" style = "background: blue;">VENCESTES</div>"""
        jogoAcabou = true
    }
}

// Função que reinicia as variáveis para os valores inicias.
fun reset(){
    baralho = Baralho()
    jogador.maoDoJogador.limparMao()
    dealer.maoDoJogador.limparMao()
    jogoAcabou = false
}

//Classe de uma carta, com seu correspondente número e naipe, além de um toString() que transforma os números e naipes em seus símbolos usuais.
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
            1 -> coisa = "$coisa2 ♣"
            2 -> coisa = "$coisa2 ♥"
            3 -> coisa = "$coisa2 ♦"
            4 -> coisa = "$coisa2 ♠"
        }
        return coisa
    }

}

//Classe de um baralho, que consiste de uma lista mutável de cartas.
class Baralho(){
    val cartas = mutableListOf<Carta>()
    //Construtor de um baralho. Inicia 1 baralho com cartas com números de 1 a 13(1 a 10 e K,Q e J), e o embaralha com shuffle().
    init{

        andaNaipe(1,13)
        cartas.shuffle()

    }

    /* Função recursiva que recebe um número de naipe e quantidade de cartas a serem criadas de tal naipe com um limite de 4 naipes. Funciona em conjunto com andaNaipe(). 
    O andaNaipe() muda o número do naipe no seu laço e a função andaCarta() recebe esse nNaipe e cria um número nCarta desse nNaipe. */
    fun andaNaipe(nNaipe:Int,nCarta:Int){
        if(nNaipe > 4){
            return;
        }
        else{
            andaCarta(nNaipe,nCarta)
            andaNaipe(nNaipe+1,nCarta)
        }
    }

    /* Função recursiva que cria uma quantidade nCarta de cartas de certo nNaipe. Funciona em conjunto com andaNaipe(). O andaNaipe() muda o número do naipe
    no seu laço e a função andaCarta() recebe esse nNaipe e cria um número nCarta desse nNaipe. */ 
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

//Classe de uma mão, que consiste de uma lista mutável de cartas e um atributo que identifica a existência de um ás na mão.
class Mao(){

    val cartasNaMao = mutableListOf<Carta>()
    var asNaMao = false

    //Função recursiva que recebe uma quantidade de cartas a serem puxadas e um baralho, puxa essa quantidade do baralho e coloca na mão.
    fun puxarCarta(qntdCartas:Int, cartas:MutableList<Carta>){
        if(qntdCartas == 0){
            return;
        }
        else{
            //if que verifica se a próxima carta a ser adicionada é um Ás, se for a flag da classe de asNaMao é true.
            if(cartas[0].numero == 1){
                asNaMao = true
            }
            cartasNaMao.add(cartas.removeFirst())
            puxarCarta(qntdCartas-1,cartas)
        }

    }

    //Função recursiva que recebe um int n que é o tamanho da mão e com esse tamanho percorre a mão somando o número de cada carta.
    fun somarOTotal(n:Int): Int{
        if(n < 0){
            return 0
        }
        else{
            //Para as cartas K, Q e J
            if(cartasNaMao[n].numero > 10){
                return somarOTotal(n-1) + 10
            }
            return somarOTotal(n-1) + cartasNaMao[n].numero
        }

    }
    /* Função recursiva que recebe um int n que é o tamanho da mão e com esse tamanho percorre a mão somando o número de cada carta, porém com um verificador que
    soma 11 ou invés de 1 para os ás. */
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

    // Função que retira todas as cartas de uma mão.
    fun limparMao(){
        asNaMao = false
        cartasNaMao.clear()
    }

}

//Classe de um jogador, que possui nome e mão. Iria usar para um possível ranking, mas não deu e ficou meio inútil.
class Jogador(val nome:String){
    val maoDoJogador = Mao()
    var vezesQueGanhou:Int = 0

}