const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje");
const texCopiar = document.querySelector("copiar")

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(fraseEncriptada){
    let matriz_cod = [["a","asd"],["e","esds"],["i","isdy"],["o","osdk"],["u","usdt"]];
    fraseEncriptada = fraseEncriptada

    for(let i = 0; i < matriz_cod.length; i++){
        if(fraseEncriptada.includes(matriz_cod[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_cod[i][0],matriz_cod[i][1])
        }
    }
    return fraseEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texArea.value)
    mensaje.value = textoDesencriptado
    texArea.value = "";
    
}

function desencriptar(fraseDesencriptada){
    let matriz_cod = [["a","asd"],["e","esds"],["i","isdy"],["o","osdk"],["u","usdt"]];
    fraseDesencriptada = fraseDesencriptada

    for(let i = 0; i < matriz_cod.length; i++){
        if(fraseDesencriptada.includes(matriz_cod[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_cod[i][1],matriz_cod[i][0])
        }
    }
    return fraseDesencriptada
}

function copiar(){
        texCopiar.select(mensaje);
        navigator.clipboard.writeText(texCopiar.value)
        texCopiar.value = "";
        alert("Texto Copiado");
  }