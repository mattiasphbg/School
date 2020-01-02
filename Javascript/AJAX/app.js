
/*

  Hur man skickar response med HTTP/AJAX
  
*/

let page = 1;
const nextPageBtn = document.querySelector("#nextpage");
const previousPageBtn = document.querySelector("#previuspage");



function reqListener()  {
  console.log(this.responseText);
  console.log(this.status);
  const data = JSON.parse(this.responseText);
  renderVrewerirrw(data);
} // RegListener Hämtar du värdet ifrån.

 function fetchPage(page)  {
   
let oReg = new XMLHttpRequest();
oReg.addEventListener("load",reqListener);
oReg.open("GET","https://api.openbrewerydb.org/breweries?page=" + page);
oReg.send();

 }

 fetchPage(1);
 
 function previousPage()  {
  page--;
  fetchPage(page);
 }
 function nextPage()  {
   page++;
   fetchPage(page);
 }

function renderVrewerirrw(ar)  {
  const tbodyEl = document.querySelector("tbody");
  tbodyEl.innerHTML = "";
  for(let i = 0; i < ar.length; i += 1)  {
  const trEl = document.createElement("tr");
    const tdNameEl = document.createElement("td");
    const trAddressel = document.createElement("td");
tdNameEl.textContent = ar[i].name;
trAddressel.textContent =  ar[i].street; // lägga in värden till objectet.

trEl.appendChild(tdNameEl);
trEl.appendChild(trAddressel);

    tbodyEl.appendChild(trEl);
  }
}

 nextPageBtn.addEventListener("click",nextPage);
 previousPageBtn.addEventListener("click",previousPage);


 //renderVrewerirrw(oReg);

//  console.dir(renderVrewerirrw(oReg));

 
 