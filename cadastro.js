// endpoint (api) de candidatos 
let urlCandidatos = "http://localhost:3000/candidatos";

const formulario = $("#cadastro");
const msg = $("#mensagem");

formulario.on("submit", function(event){
    event.preventDefault();
/* anularia o comportamento padrão de redirecionamento/recarregamento*/
    let dados = {
        nome: $("#nome").val(),
        data: $("#data").val(),
        telefone:$("#telefone").val(),
        email: $("#email").val(),
        vaga: $("#vaga option:selected").text(),

    }

    /* usando ajax via jQuery */
    $.ajax({
        url: urlCandidatos,
        method: "POST" , /* gravar dados no server*/
        data: dados, 
        sucess : function(){
            
            msg.text("Dados enviados com sucesso!");
            msg.css("color", "blue");
            formulario [0].reset();
        },
        error : function(){
            msg.text("deu ruim");
            msg.css("color", "red");
        }
    });
});