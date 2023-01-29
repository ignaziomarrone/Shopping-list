var buttonenter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var dele = document.createElement("button");
	dele.innerHTML = "Delete";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(dele);
	dele.style.marginLeft="10px";
	dele.addEventListener("click", function () {
		dele.parentElement.remove();
	})
	
	input.value = "";
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListAfterClick() {

}

buttonenter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);