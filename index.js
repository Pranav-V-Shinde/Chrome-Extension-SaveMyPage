let myLeads = [];

const inputEl = document.querySelector("#input-el");

const inputBtn = document.querySelector("#input-btn");

const ulEl = document.querySelector("#ul-el");

const delBtn = document.querySelector("#del-btn");
const tabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(arrLeads) {
  let listItems = "";

  for (let i = 0; i < arrLeads.length; i++) {
    listItems += `<li>
                      <a href="${arrLeads[i]}" target="_blank"> ${arrLeads[i]}</a>
                  </li> `; //Template string
  }
  ulEl.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  // console.log(localStorage.getItem("myLeads"));

  // localStorage.clear();

  console.log(localStorage.getItem("myLeads"));
  render(myLeads);
});

/*
for (let i = 0; i < myLeads.length; i++) {
  // ulEl.textContent += myLeads[i] + " "; Wrong way
  //Solution 1
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; //.innerHTML method is used to create tags html around the data

  
  //solution 2
  //1.Create li elemet 2.setContent to that li element 3.Append li element to ul
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
  
}
*/

//DOM Manipulation comes with cost
