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
  
function showErrorAnimation() {
    swal ( "¡ Error ! " , " ¡Asegurate de solo poner letras minusculas sin caracteres especiales o numeros! " , "error" )   ;
    textArea.focus();
    console.log("Error: El texto contiene caracteres no válidos.");
  }
  
function encriptar(stringEncriptada) {

    var textarea = document.querySelector('.text-area');
    var text = textarea.value;
  
    var regex = /^[a-z\s]+$/;
    if (!regex.test(text)) {
      showErrorAnimation();
      return;
    }
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
