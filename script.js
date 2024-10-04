
window.addEventListener("DOMContentLoaded", async function(){
  entryList = await loadList()
  console.log(entryList)
  renderList()

  const addBtn = document.querySelector("#addExpense")
  addBtn.addEventListener("click", function(){
    let dateEntry = document.querySelector("#date").value
    let expenseEntry = document.querySelector("#expenseName").value

    let displayEntry = parseFloat(document.querySelector("#amount").value)

    let shopNameEntry = document.querySelector("#shopName").value
    let catEntry = document.querySelector("#category").value

    console.log (dateEntry, expenseEntry, displayEntry, shopNameEntry, catEntry)
    addExpense (entryList, dateEntry, expenseEntry, displayEntry, shopNameEntry, catEntry)
    saveList (entryList) // turn addBtn into saveBtn as well
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
    // </li>`
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
        
        // console.log("Editing entry id: ", entry.id);

        updateEntry(entryList, entry.id, newDate, newEntryName, newAmt, newShopName, newCat);
        // console.log("Updated Entry List:", entryList);
        saveList (entryList)
        renderList(); 
    });
    
    // del btn
    let delBtn = liElement.querySelector(".delete")
    delBtn.addEventListener("click", function(){
        let reallyDelete = confirm("Are you sure you want to delete?")
        if (reallyDelete) {
          deleteEntry(entryList, entry.id)
          saveList (entryList)
          renderList()
        }
    })
    expenseList.appendChild(liElement)
  }
}

// display total at the bottom
let calculateTotal = document.querySelector("#calculateTotal")
let totalDisplay = document.querySelector("#sumOfExpenses")
calculateTotal.addEventListener("click", function(){
  let total = 0
  for (let entry of entryList) {
    total += parseFloat(entry.amt)
  }
  totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`
})
