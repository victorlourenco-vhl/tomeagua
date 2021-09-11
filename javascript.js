function calcular(){
    var litros = document.getElementById("litros").value;
    var qtncopos = litros / 0.250;
    var copoids = [];
    var str = "#copo";
    if(litros == 0){
        document.getElementById("img-corpo").src="imagens/corpo/corpo0.png";
    }
    for(var qtn = 1; qtn <= qtncopos; qtn++){
        str  += qtn;
        copoids.push(str);
        str = "#copo";
    }
    var y = document.getElementsByClassName("copo-vazio");
    for (var n = 0; n < y.length; n++) {
        y[n].src='imagens/copo-vazio.png';
    }
    var x = document.querySelectorAll(copoids);
    for (var i = 0; i < x.length; i++) {
        x[i].src='imagens/copo-cheio.png';
    }
    // IDs Botao
    var btnids = [];
    var strBtn = "#btn-copo";
    for(var btn = 1; btn <= qtncopos; btn ++){
        strBtn += btn;
        btnids.push(strBtn);
        strBtn = "#btn-copo";
    }    
    var getIDs = document.querySelectorAll(btnids);
    for(var c = 0; c < getIDs.length; c++){
        getIDs[c].addEventListener("click", teste)
        
    }   
    contador = 0;
    document.getElementById("img-corpo").src="imagens/corpo/corpo0.png";
}

function teste(){
    var litros = document.getElementById("litros").value;
    var qtncopos = litros / 0.250;

    
    var estadoCopo = "";
    var corpoPorcentagem = "";
    var v = this.value;
    var copoID = "copo" + v;  
    var z = document.getElementById(copoID).src;
    var ultima = z.substring(z.lastIndexOf("-")+1);
    console.log("Ultima " + ultima);
    
    if (ultima === "cheio.png" ){
        estadoCopo =  "";
        estadoCopo = "imagens/copo-vazio.png";
        contador += 1;
       
    }
    if (ultima === "vazio.png" ){
        estadoCopo =  "";
        estadoCopo = "imagens/copo-cheio.png";
        contador -= 1;
      
    }
    document.getElementById(copoID).src=estadoCopo ;

   if (contador >= 0){
    corpoPorcentagem = "imagens/corpo/corpo0.png";
   }
    if (contador >= (qtncopos / 4) ){
        corpoPorcentagem = "imagens/corpo/corpo25.png";
    }
    
    if (contador >= (qtncopos / 2) ){
        corpoPorcentagem = "imagens/corpo/corpo50.png";
    }
    
    if (contador >= (qtncopos / 4)*3 ){
        corpoPorcentagem = "imagens/corpo/corpo75.png";
    }

    if (contador == qtncopos){
        corpoPorcentagem = "imagens/corpo/corpo100.png";
        document.getElementById("img-corpo").src=corpoPorcentagem;
        if (corpoPorcentagem == "imagens/corpo/corpo100.png"){
            alert("Parabéns!!! Você cumpriu sua meta de beber " + litros + "L. Esperamos te ver novamente por aqui e continue se cuidando.");
        }
         
    }
    
    console.log("contador " + contador + " Qtn: " + qtncopos);
    document.getElementById("img-corpo").src=corpoPorcentagem;
}



/*
http://127.0.0.1:5501/imagens/copo-vazio.png
function mudarCopo(){
        var x = indexof(this.innerHTML);
        console.log(x);
    }
 

function img01(){
    document.getElementById("copo1").src="imagens/copo-vazio.png";
}
*/
//document.querySelectorAll("#copo1, #copo2, #copo3, #copo4").src="imagens/copo-cheio.png";