let entryList = [
  // {
  //   "id": 1,
  //   "date": "2024-10-01",
  //   "expense": "groceries",
  //   "amt": 22.00,
  //   "shop_name": "NTUC",
  //   "category": "Food",
  // },
  // {
  //   "id": 2,
  //   "date": "2024-09-02",
  //   "expense": "movie night",
  //   "amt": 15.50,
  //   "shop_name": "Golden Village",
  //   "category": "Entertainment",
  // },
  // {
  //   "id": 3,
  //   "date": "2024-09-15",
  //   "expense": "electric bill",
  //   "amt": 37.35,
  //   "shop_name": "electric utility",
  //   "category": "Bills",
  // },
]

window.addEventListener("DOMContentLoaded", async function(){
  entryList = ("data.json")
  let response = await axios.get("data.json")
  console.log(response.data)
  
  renderList()
  let addBtn = document.querySelector("#addExpense")
  addBtn.addEventListener("click", function(){
    let dateEntry = document.querySelector("#date").value
    let expenseEntry = document.querySelector("#expenseName").value

    let displayEntry = parseFloat(document.querySelector("#amount").value)
    let amtEntry = `$${displayEntry.toFixed(2)}`
    console.log(typeof amtEntry)

    let shopNameEntry = document.querySelector("#shopName").value
    let catEntry = document.querySelector("#category").value

    console.log (dateEntry, expenseEntry, displayEntry, shopNameEntry, catEntry)
    addExpense (entryList, dateEntry, expenseEntry, displayEntry, shopNameEntry, catEntry)
    renderList()
  })
})

// update ul#expenseList with entryList array
function renderList() {
  let expenseList = document.querySelector("#expenseList")
  // empty list of <li> so the current objects in array won't duplicate
  expenseList.innerHTML = ""
  for (let entry of entryList) {

    // // method 1
    // let html = `
    // <li>${entry.date}
    //     ${entry.expense}
    //     ${entry.amt}
    //     ${entry.shop_name}
    //     ${entry.category}
    // </li>
    // `
    // console.log(html)
    // expenseList.innerHTML = expenseList.innerHTML + html

    // method 2
    let liElement = document.createElement("li")
    liElement.innerHTML = `<button class="delete">Delete</button>
    ${entry.date} ${entry.expense} $${parseFloat(entry.amt).toFixed(2)} ${entry.shop_name} ${entry.category}
    <button class="edit">Edit</button>`

    // edit btn
    let editBtn = liElement.querySelector(".edit");
    editBtn.addEventListener("click", function(){
        let newDate = prompt("Enter the new date: ", entry.date);
        let newEntryName = prompt("Enter the new expense: ", entry.expense);
        let newAmt = parseFloat(prompt("Enter the new amount: ", entry.amt)); 
        let newShopName = prompt("Enter the new shop name: ", entry.shop_name);
        let newCat = prompt("Enter the new category: ", entry.category);
        
        console.log("Editing entry id: ", entry.id);

        updateEntry(entryList, entry.id, newDate, newEntryName, newAmt, newShopName, newCat);
        console.log("Updated Entry List:", entryList);
        renderList(); 
        console.log("Expense changed.");
    });
    
    // del btn
    let delBtn = liElement.querySelector(".delete")
    delBtn.addEventListener("click", function(){
        let reallyDelete = confirm("Are you sure you want to delete?")
        if (reallyDelete) {
          deleteEntry(entryList, entry.id)
          renderList()
          console.log("Expense deleted.")
        }
    })
    expenseList.appendChild(liElement)
    console.log(liElement)
  }

}

let calculateTotal = document.querySelector("#calculateTotal")
let totalDisplay = document.querySelector("#sumOfExpenses")
calculateTotal.addEventListener("click", function(){
  let total = 0
  for (let entry of entryList) {
    total += parseFloat(entry.amt)
  }
  totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`
})
