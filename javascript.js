function img01(){
    document.getElementById("copo1").src="imagens/copo-vazio.png";
}
function calcular(){
    var litros = document.getElementById("litros").value;
    console.log(litros);
    if(litros == 1){
        //document.querySelectorAll("#copo1, #copo2, #copo3, #copo4").src="imagens/copo-cheio.png";
        //document.querySelectorAll("copo1", "copo2", "copo3", "copo4").src="imagens/copo-cheio.png";
        var x = document.querySelectorAll("#copo1, #copo2, #copo3, #copo4");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].src="imagens/copo-cheio.png";
          
        } 
   
    }
}