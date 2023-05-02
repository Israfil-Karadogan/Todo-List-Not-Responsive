// let inputText_1 = document.querySelector("#text-1");
// let inputText_2 = document.querySelector("#text-2");
// let checkBoxInPUT = document.querySelector(".check_input");
// let addButton = document.querySelector(".add_button");
// let form = document.querySelector(".form");


// addButton.addEventListener("click", todoui);

// function todoui() {
//   let li = document.createElement("li");
//   let text_value = inputText_1.value;
//   list.appendChild(li);
//   li.innerHTML = text_value;
//   list.innerHTML = text_value;
//   console.log('asdasd');

// }



//buradan itibaren
let list = document.querySelector(".list");
const addBtn = document.querySelector(".add_button");
const contentInput = document.querySelector(".text_input");
const content = document.querySelector(".list-wrapper");
const clearButton = document.querySelector("#clear-button");
const check = document.querySelector(".check_input");

let data = [];

let renderlist = () => {
 
  const ul = document.createElement("ul");

  data.map((item) => {
    data = [];
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove btn";
    removeBtn.className = "remove-btn";

    const li = document.createElement("li");
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    listItem.prepend(removeBtn);
    listItem.prepend(item);
    li.append(listItem);
    ul.append(li);
    contentInput.value = "";
    list.append(ul);
  });
 

  const removeBtn = document.querySelectorAll(".remove-btn");

  removeBtn.forEach((item, index)=> {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.remove()
    })
  })
};

const checkboxControl = () => {
  if (check.checked) {
    console.log(contentInput.value);
    data.push(contentInput.value);
    
  } else {
    confirm("lütfen kutuyu işaretleyiniz");
    data = [];
  }
  renderlist();
};

addBtn.addEventListener("click", () => {
  checkboxControl();
  
});

clearButton.addEventListener("click", () => {
  data = [];
  renderlist();
});




//buraya kadar



// remove.addEventListener("click", () => {
//   data = [];
//   renderlist();
// });

const products = [
    {
        id: 1,
        title: "product 1",
        description: "20 kelimeden fazlaysa ... eklenecek",
        price: "1000",
        discountedPrice: "0",
        imageSet: ""
    }
]
