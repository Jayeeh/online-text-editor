// Select the input element where the text is written
let el = document.querySelector("#words");

// Function to set the text color based on user input
function setColor() {
  let input = document.querySelectorAll("input")[0];
  el.style.color = input.value;
}

// Function to toggle underline style
function toggleUnderline() {
  el.classList.toggle("underline");
}

// Function to toggle italic style
function toggleItalic() {
  el.classList.toggle("italic");
}

// Function to toggle bold style
function toggleBold() {
  el.classList.toggle("bold");
}

// Function to toggle monospace font
function toggleMonospace() {
  el.classList.toggle("mono");
}

// Function to remove all text formatting and reset color to black
function removeFormat() {
  el.classList.remove("underline", "italic", "bold", "mono");
  el.style.color = "black";
}


