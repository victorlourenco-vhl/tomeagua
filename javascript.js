class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();

      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
function calcular(){
    var litros = document.getElementById("litros").value;
    if (litros != 0){
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
        var btnClick = [];
        for(var i = 0; i < 21; i++){
            strBtn  += i;
            btnClick.push(strBtn);
            strBtn = "#btn-copo"; 
        }   
        var getBtns = document.querySelectorAll(btnClick);
        for(var i = 0; i < getBtns.length; i++){
            getBtns[i].removeEventListener("click", teste);
        }   
        var getIDs = document.querySelectorAll(btnids);
        for(var c = 0; c < getIDs.length; c++){
            getIDs[c].addEventListener("click", teste);
            
        }   
        console.log(getIDs);
        contador = 0; 
        document.getElementById("img-corpo").src="imagens/corpo/corpo0.png";
    }
    else{
        window.location.reload();
    }
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
        corpoPorcentagem = "imagens/corpo/corpo25.gif";
    }
    
    if (contador >= (qtncopos / 2) ){
        corpoPorcentagem = "imagens/corpo/corpo50.gif";
    }
    
    if (contador >= (qtncopos / 4)*3 ){
        corpoPorcentagem = "imagens/corpo/corpo75.gif";
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

var purecookieTitle="Cookies.",purecookieDesc="Esse site utiliza cookies para te proporcionar uma melhor experiência. Ao continuar navegando, você aceita nossa",purecookieLink='<a href="paginas/politicas-de-privacidade.html">Política de Privacidade.</a>',purecookieButton="Aceito";function pureFadeIn(e,o){var i=document.getElementById(e);i.style.opacity=0,i.style.display=o||"block",function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){var o=document.getElementById(e);o.style.opacity=1,function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()}function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",30),pureFadeOut("cookieConsentContainer")}window.onload=function(){cookieConsent()};