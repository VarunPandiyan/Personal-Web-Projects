//Expense Tracker App

const income = document.getElementById("income");
const expense = document.getElementById("expense");
const balance = document.getElementById("balance");
const name = document.getElementById("name");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete");
const transcationList = document.getElementById("transcationList");

let incomeAmount = 0;
let expenseAmount = 0;
let balanceAmount = 0;
let typeValue = 0;
let incomeValue = 0;
let expenseValue = 0;
let balanceValue = 0;
let span;
let dBtn;
let listName;
let listAmount;
let listType;
let li;
let storeList;
let storeListString;

let displayListItems;
let parsedArray = [];
let listItem;



function addList()
{
    console.log(type);
    typeValue = type.value;
   if(typeValue === "Income")
    {
        incomeValue = amount.value;
        incomeAmount += parseFloat(incomeValue);
        income.textContent = incomeAmount;

    }
    else if(typeValue === "Expense")
    {
        expenseValue = amount.value;
        expenseAmount += parseFloat(expenseValue)
        expense.textContent = expenseAmount;

    }
    else
    {
        console.log("give correct type");
    }

    
    balanceValue = incomeValue-expenseValue;
    balanceAmount += parseFloat(balanceValue);
    balance.textContent = balanceAmount;
    incomeValue = 0;
    expenseValue = 0;

    

    listName = name.value;
    listAmount = amount.value;
    listType = type.value;

    listItem = {
        name: listName,
        amount: listAmount,
        type: listType
    }
    li = document.createElement("li");
    span = document.createElement("span");
    span.id = "list";
    dBtn = document.createElement("button");
    dBtn.id = "delete";

    dBtn.textContent = 'Delete';
    dBtn.setAttribute("onclick","deleteList()");
    
    

    localStorageList();
    displayList();

    name.value = "";
    amount.value = "";
    type.value = "default";

    
}

function localStorageList()
{
    let store = [];

    store.push(listItem);

    localStorage.setItem("localList",JSON.stringify(store));
}

function displayList()
{
    

    
    
    displayListItems = localStorage.getItem("localList");
    
    li.appendChild(span);
    li.appendChild(dBtn);

    transcationList.appendChild(li);

  
  parsedArray = JSON.parse(displayListItems);

  parsedArray.forEach(item => span.textContent = `${item.name} ${item.amount} ${item.type}`);

  
}

function deleteList()
{
    // li = button.parentNode;

    // transcationList.removeChild(li);
    console.log(element);
    parsedArray.forEach(element => localStorage.removeItem(element));
}

window.addEventListener("load",displayList)
