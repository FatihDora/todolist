function newElement() {
  let valueElement = document.getElementById("task");
  if (valueElement.value!="") {
    let listElement = document.getElementById("list");
    let newItem = document.createElement("li");
    //   newItem.innerHTML = `<span class="li-span" aria-label="Close">${valueElement.value}</span> <img onclick="deleteTask(this)" src="./images/carpi.png" width="20px" class="img-fluid rounded-top;close" alt="">`;
    newItem.innerHTML = `<span class="li-span" aria-label="Close">${valueElement.value}</span> <button onclick="deleteTask(this)" type="button" class="close" style="right:1%;top: 25%;" aria-label="Close">
    <span aria-hidden="true">&times;</span></button>`;

    //   newItem.addEventListener("click", function () {
    //     deleteTask(this);
    //   });

    listElement.appendChild(newItem);
    valueElement.value = "";
  }
}
// function deleteTask(element) {
//   element.remove();
// }
function deleteTask(element) {
  element.parentElement.remove();
}

let searchBtn = document.getElementById("searchElementBtn");

function searchElementBtn() {
  let searchElement = document.getElementById("search");
  let listElement = document.getElementById("list");
  [...listElement.children].forEach((element) => {
    var spanElement = element.children[0];
    if (spanElement.innerText == searchElement.value) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
