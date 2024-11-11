const element = document.getElementById("getElementByIdParagraph");
console.log(element);
element.style.backgroundColor="red"
// case sensitive if it doesn't match with an element it returns null
//getElementById can only be used to select a single element because IDs must be unique.
element.innerHTML="Lorem ipsum innerHtml."
element.innerText="Lorem ipsum innerText."
element.textContent="Lorem ipsum textcontent."
// All methods shown are correct ways to change the text content of an element.