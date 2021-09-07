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
    // IDs Botao
    var strBtn = "#btn-copo";
    let btnids = [];
    for(var btn = 1; btn <= qtncopos; btn ++){
        strBtn += btn;
        btnids.push(strBtn);
        strBtn = "#btn-copo";
    }    
    console.log(btnids);
    var getIDs = document.querySelectorAll(btnids);
    for(let c = 0; c < getIDs.length; c++){
        getIDs[c].addEventListener("click", function(e){
            var w = this.value;
            var teste = "copo" + w;
            document.getElementById(teste).src="imagens/copo-vazio.png";
            console.log(w);
        })
    }
    
}
/*

function mudarCopo(){
        var x = indexof(this.innerHTML);
        console.log(x);
    }
 

function img01(){
    document.getElementById("copo1").src="imagens/copo-vazio.png";
}
*/
//document.querySelectorAll("#copo1, #copo2, #copo3, #copo4").src="imagens/copo-cheio.png";