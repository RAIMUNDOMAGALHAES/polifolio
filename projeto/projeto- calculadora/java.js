const caixaResultado = document.getElementById("resultado");
function insert(num) {

    caixaResultado.innerHTML+= num
}
    function clean(){
        caixaResultado.innerHTML= "";
        
    }

    function back() {
       let resultadofinal = caixaResultado.innerHTML

      caixaResultado.innerHTML = resultadofinal.substring(0,resultadofinal.length-1)
    }
function calcular() {
let resultado = caixaResultado.innerHTML
caixaResultado.innerHTML = eval(resultado);



}


vuvu