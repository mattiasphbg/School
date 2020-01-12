

 function regTodoList()  {
  const todos = JSON.parse(this.responseText).data;

  for (let i = 0; i < todos.length; i++) {
   const titleEl = document.createElement("li");
   titleEl.textContent = todos[i].title;

   document.querySelector("ul").appendChild(titleEl);
  }
 }




 function regSubmitedText()  {
   let todoRequest = new XMLHttpRequest();
   
   todoRequest.addEventListener("load", regTodoList);
   todoRequest.open("GET", "/todos");
   todoRequest.send();
 }
 
 function onSubmit(e) {
  e.preventDefault();
  let todoRequest = new XMLHttpRequest();
  const title = document.querySelector("#title").value;
  todoRequest.open("POST","/todos");
  todoRequest.setRequestHeader("Content-Type", "application/json");
  todoRequest.send(JSON.stringify({ title: title }));
 }
 
 // todoRequest.send(JSON.stringify({ title: "Hej!"}));
 // console.log(inputEl.value);
 // console.log(this.inputEl);
 document.querySelector("form").addEventListener("submit", onSubmit);

 regSubmitedText();