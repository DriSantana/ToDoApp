let tasks = [];

function update() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  tasks.map((item) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}

function addTask() {
  const userInput = document.querySelector("#inputS").value;

  tasks.push(userInput);
  update();
}

function deleteTask() {
    const del = document.querySelector("#inputS").value;

    tasks.shift(del);
    update();
  


    
}



