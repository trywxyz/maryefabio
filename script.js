$(document).ready(function() {
    // Animação de Fade In
    $("#fadeInButton").click(function() {
        $("#inicio").fadeIn();
    });
});

function exibirMensagem() {
    alert("Abrir Whatsapp? Clique em OK")
    var url = "https://api.whatsapp.com/send?phone=5547996307137&text=Olá,%20teria%20interesse%20em%20combinar%20eventos!";
    window.open(url, '_blank');
    
    
}