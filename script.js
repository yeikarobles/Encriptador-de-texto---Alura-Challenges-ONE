//variables
const selected = document.getElementById("functionSelector");
const txt = document.getElementById("textIn");
const resultedText = document.getElementById("textOut");
//buttons
const btnPrincipal = document.getElementById("mainBtn");
const btnPasteTextIn = document.getElementById("pasteTextIn");
const btnclearTextIn = document.getElementById("clearTextIn");
const btncopyTextOut = document.getElementById("copyTextOut");
const btnclearTextOut = document.getElementById("clearTextOut");

let state = null;

selected.addEventListener("change", () => {
  if (selected.value === null) return;
  state = selected.value;
  btnPrincipal.innerText = selected.value;
});

btnPrincipal.addEventListener("click", () => {
  if (state) {
    if (state == "encrypt") {
      resultedText.value = encrypt(txt.value);
      console.log("encriptando");
      return;
    }
    if (state == "decrypt") {
      resultedText.value = decrypt(txt.value);
      console.log("desencriptando");
      return;
    }
  }

  console.log("nada");
});

btncopyTextOut.addEventListener("click", () => {
  copy();
  //mensaje copiado
  console.log("copiado con exito");
});

btnPasteTextIn.addEventListener("click", () => {
  paste();
  console.log("pegado con exito");
});

btnclearTextIn.addEventListener("click", () => {
  console.log("eliminado con exito");
});

btnclearTextOut.addEventListener("click", () => {
  console.log("eliminado con exito2");
});

function encrypt(texto) {
  return texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
}

function decrypt(texto) {
  return texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

function copy() {
  navigator.clipboard.writeText(resultedText.value);
  console.log("copiado con exito");
}

function paste() {
  const textToPaste = navigator.clipboard.readText();
  textToPaste.then((clipText) => (txt.value += clipText));
}

function clear() {}
