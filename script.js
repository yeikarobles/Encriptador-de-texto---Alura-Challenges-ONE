//variables
const selected = document.getElementById("functionSelector");
const textIn = document.getElementById("textIn");
const resultedText = document.getElementById("textOut");
const pError = document.getElementById("error");

//buttons
const submitBtn = document.getElementById("submitBtn");
const btnPasteTextIn = document.getElementById("pasteTextIn");
const btnClearTextIn = document.getElementById("clearTextIn");
const btnCopyTextOut = document.getElementById("copyTextOut");
const btnClearTextOut = document.getElementById("clearTextOut");

let state = null;

selected.addEventListener("change", () => {
  if (selected.value === null) return;
  state = selected.value;
  submitBtn.innerText = selected.value;
});

submitBtn.addEventListener("click", () => {
  const error = validate(textIn.value);

  if (error.status) {
    pError.innerText = error.message;
    return;
  }

  pError.innerText = "";

  if (state == "encrypt") {
    resultedText.value = encrypt(textIn.value);
    console.log("encriptando");
    return;
  }

  if (state == "decrypt") {
    resultedText.value = decrypt(textIn.value);
    console.log("desencriptando");
    return;
  }
});

btnCopyTextOut.addEventListener("click", () => {
  copy();
  //mensaje copiado
  console.log("copiado con exito");
});

btnPasteTextIn.addEventListener("click", () => {
  paste();
  console.log("pegado con exito");
});

btnClearTextIn.addEventListener("click", (event) => {
  clear(event);
  console.log("eliminado con exito");
});

btnClearTextOut.addEventListener("click", (event) => {
  clear(event);
  console.log("funcion eliminar 2");
});

function encrypt(text) {
  return text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
}

function decrypt(text) {
  return text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

function paste() {
  const textToPaste = navigator.clipboard.readText();
  textToPaste.then((clipText) => (textIn.value += clipText));
}

function copy() {
  navigator.clipboard.writeText(resultedText.value);
  console.log("copiado con exito");
}

function clear(event) {
  let e = event.target.parentNode.firstChild;
  console.log(e.nextSibling);
  e.nextSibling.value = "";
}

function validate(text) {
  //validate
  if (!state) {
    return {
      status: true,
      message: "select a function",
    };
  }

  if (/^[a-z\s]+$/g.test(text)) {
    return { status: false, message: "" };
  }

  return {
    status: true,
    message: "no special characters, uppercase or numbers",
  };
}
