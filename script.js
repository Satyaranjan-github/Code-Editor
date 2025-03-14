let htmlInput = document.querySelector(".html-editor textarea");
let cssInput = document.querySelector(".css-editor textarea");
let jsInput = document.querySelector(".js-editor textarea");
let outputContainer = document.querySelector(".output-container");
let htmlCopy = document.querySelector(".html-copy");
let cssCopy = document.querySelector(".css-copy");
let jsCopy = document.querySelector(".js-copy");
let copy = document.querySelectorAll(".copy");

let save = document.querySelector("#save");
let output = document.querySelector("#output");
let full = document.querySelector("#full");

document.addEventListener("keydown", (e) => {
  if (e.key === "f") {
    outputContainer.classList.toggle("output-full");
  }
  full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full");
  });
});
save.addEventListener("click", () => {
  output.contentDocument.body.innerHTML = htmlInput.value;
  output.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`;
  output.contentWindow.eval(jsInput.value);
});

copy.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("html-copy")) {
      navigator.clipboard.writeText(htmlInput.value);
      showToast("Copied Successfully");
    } else if (e.classList.contains("css-copy")) {
      navigator.clipboard.writeText(cssInput.value);
      showToast("Copied Successfully");
    } else if (e.classList.contains("js-copy")) {
      navigator.clipboard.writeText(jsInput.value);
      showToast("Copied Successfully");
    }
  });
});

// Function to show the toast
function showToast(message) {
  const toast = document.getElementById("customToast");
  const toastBody = toast.querySelector(".toast-body");
  toastBody.textContent = message;

  // Add 'show' class to make toast visible
  toast.classList.add("show");

  // Automatically hide the toast after 3 seconds
  setTimeout(() => {
    closeToast();
  }, 3000);
}

// Function to close the toast
function closeToast() {
  const toast = document.getElementById("customToast");
  toast.classList.remove("show");
}
