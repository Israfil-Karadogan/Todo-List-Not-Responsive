
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

