const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btndesEncriptar(){
    let textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar(){
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    textArea.focus();
}
  
function validateText() {
    var textarea = document.getElementById(textArea);
    var text = textarea.value.trim();

    var regex = /^[a-z]+$/;

    if (regex.test(text)) {
      
      alert("Texto válido");
    } else {
     
      textarea.classList.add("error");
      textarea.addEventListener("animationend", removeErrorClass);
    }
  }

  function removeErrorClass() {
    var textarea = document.getElementById(textArea);
    textarea.classList.remove("error");
    textarea.removeEventListener("animationend", removeErrorClass);
  }

function encriptar(stringEncriptada){
    let codigoFuente = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < codigoFuente.length; i++){
        if(stringEncriptada.includes(codigoFuente[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigoFuente[i][0], codigoFuente[i][1]);
            
        }
    }
    return stringEncriptada;
}
   

function desencriptar(stringDesencriptada){
    let codigoFuente = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < codigoFuente.length; i++){
        if(stringDesencriptada.includes(codigoFuente[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigoFuente[i][1], codigoFuente[i][0]);  

       }
   }   
   return stringDesencriptada;
}
