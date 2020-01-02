
/*

  Hur man skickar response med HTTP/AJAX
  
*/

function reqListener()  {
  console.log(this.responseText);
  console.log(this.status);
  const data = JSON.parse(this.responseText);
  renderVrewerirrw(data);
} // RegListener Hämtar du värdet ifrån.

let oReg = new XMLHttpRequest();
oReg.addEventListener("load",reqListener);
oReg.open("GET","https://api.openbrewerydb.org/breweries");
oReg.send();

function renderVrewerirrw(ar)  {
  const tbodyEl = document.querySelector("tbody");
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


 //renderVrewerirrw(oReg);

 console.dir(renderVrewerirrw(oReg));
 