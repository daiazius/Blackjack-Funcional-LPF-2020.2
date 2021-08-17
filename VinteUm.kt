import kotlinx.browser.*
import org.w3c.dom.*

fun main(){

}

@JsName("darCartas")
fun darCartas(){
    val jogo = document.getElementById("jogo")
    if(jogo==null){
        println("ihhh passou vergoinha em")
        return;
    }
    jogo.innerHTML += Voce pegou 21 e ganhou confia
}