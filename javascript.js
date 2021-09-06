function calcular(){
    var litros = document.getElementById("litros").value;
    console.log(litros);
    var qtncopos = litros / 0.250;
    let copoids = [];
    var str = "#copo";
    for(var qtn = 1; qtn <= qtncopos; qtn++){
        str  += qtn;
        copoids.push(str);
        str = "#copo";
    }

    console.log(copoids);

    var y = document.getElementsByClassName("copo-vazio");
    for (var n = 0; n < y.length; n++) {
        y[n].src='imagens/copo-vazio.png';
    }
    var x = document.querySelectorAll(copoids);
    for (var i = 0; i < x.length; i++) {
        x[i].src='imagens/copo-cheio.png';
    }
}
function img01(){
    document.getElementById("copo1").src="imagens/copo-vazio.png";
}
//document.querySelectorAll("#copo1, #copo2, #copo3, #copo4").src="imagens/copo-cheio.png";