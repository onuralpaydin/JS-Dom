//getElementById
const element = document.getElementById("getElementByIdParagraph");
console.log(element);
element.style.backgroundColor = "red";
// case sensitive if it doesn't match with an element it returns null
//getElementById can only be used to select a single element because IDs must be unique.
element.innerHTML = "Lorem ipsum innerHtml.";
element.innerText = "Lorem ipsum innerText.";
element.textContent = "Lorem ipsum textcontent.";
// All methods shown are correct ways to change the text content of an element.

//getElementsByName
// The name attribute can be used on the following elements:
{
  /* <button>	name
<fieldset>	name
<form>	name
<iframe>	name
<input>	name
<map>	name
<meta>	name
<object>	name
<output>	name
<param>	name
<select>	name
<textarea>	name */
}
let elements = document.getElementsByName("language");
//returns nodeList
console.log(elements);

//GetElementsByName demo example codes
let btn = document.getElementById("btnRate");
//output value will change
let output = document.getElementById("output");
//if click event occurs this funct. will check every rates in nodeList.According to rate.check property Output value will change.
btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  //nodeList which include inputs that have name attribute rate.
  console.log(rates);
  rates.forEach((rate) => {
    //every input. Not NodeList.
    console.log(rate);
    //true false value.If radiobutton checked it will return true
    console.log(rate.checked);
    if (rate.checked) {
      output.innerText = `You selected: ${rate.value}`;
    }
  });
});
let btnCount = document.getElementById("btnCount");
btnCount.addEventListener("click", () => {
    //it returns html collection which includes all h2 elements
  let headings = document.getElementsByTagName("h2");
  console.log(headings);
// also we can convert it to an array by using spread operator
const convertedHtmlCollection=[...headings]
console.log(convertedHtmlCollection);

  alert(`H2 tag count: ${headings.length}`);
});
