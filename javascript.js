function calcular(){
   
    var litros = document.getElementById("litros").value;
    var qtncopos = litros / 0.250;
    var copoids = [];
    var str = "#copo";
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

    var contador = 10;
    function teste(){
        
        var estadoCopo = "";
        var v = this.value;
        var copoID = "copo" + v;  
        var z = document.getElementById(copoID).src;
        var ultima = z.substring(z.lastIndexOf("-")+1);
        console.log("Ultima " + ultima);

        
        if (ultima === "cheio.png" ){
            estadoCopo =  "";
            estadoCopo = "imagens/copo-vazio.png";
            
        }
        if (ultima === "vazio.png" ){
            estadoCopo =  "";
            estadoCopo = "imagens/copo-cheio.png";
           
        }
         
        document.getElementById(copoID).src=estadoCopo ;
        console.log("contador" + contador)
        
    }
    var getIDs = document.querySelectorAll(btnids);
    for(var c = 0; c < getIDs.length; c++){
        getIDs[c].addEventListener("click", teste)
        
    }   
    

    
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