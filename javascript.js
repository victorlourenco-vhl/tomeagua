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
    var click = 0;
    for(let c = 0; c < getIDs.length; c++){
       
        getIDs[c].addEventListener("click", function(e){ 
            click += 1;
            var v = this.value;
           
            var copoID = "copo" + v;
            document.getElementById(copoID).src="imagens/copo-vazio.png";
            
            var z = document.getElementById(copoID).src;
            var ultima = z.substring(z.lastIndexOf("-")+1);
           
         
            
            console.log("clicks" + click);
            console.log(ultima);
          
            if (click == 2 && ultima == "vazio.png" ){
                click = 1;
                document.getElementById(copoID).src="imagens/copo-cheio.png";
               
            }else if (click == 2 && ultima == "cheio.png" ){
                click = 1;
                document.getElementById(copoID).src="imagens/copo-vazio.png";
                
            }
        })
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