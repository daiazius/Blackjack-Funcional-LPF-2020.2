import kotlinx.browser.*
import org.w3c.dom.*

fun main(){

}

@JsName("darCartas")
fun darCartas(){
    val jorje = document.getElementById("jogo")
    if(jorje==null){
        println("ihhh passou vergoinha em")
        return;
    }
    jorje.innerHTML += "Voce pegou 21 e ganhou confia"
}