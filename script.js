function entrar(){

    var input = document.getElementById("senha");
    var msg = document.getElementById("msg");

        if (input.value === "") {
            msg.textContent = "Digite o código";
        } else {
            $("main").css("display","none") 
            $(".painel").css("display","flex") 
        }
}

function cal(){
    var pres = parseFloat(document.getElementById("pres").value)
    var taxa = parseFloat(document.getElementById("taxa").value)
    var mes = parseInt(document.getElementById("mes").value)
    var res = document.getElementById("res")

    var valor = pres
    
    for(var i = 1; i <= mes; i++){
        var juros = valor * (taxa / 100);
        valor += juros;
    }
    res.textContent = "O valor total a ser pago, incluindo os juros acumulados, é: R$" + valor.toFixed(2);
}

