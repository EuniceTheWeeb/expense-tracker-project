
let addBtn = document.querySelector("#addExpense")

addBtn.addEventListener("click", function(){
    
    // text input box
    let date = document.querySelector("#date").value
    console.log("Date: ", date)
    let expenseTextBox = document.querySelector("#expenseName")
    let expenseName = expenseTextBox.value
    console.log("Expense: ", expenseName)
    let amt = document.querySelector("#amount").value
    console.log("Amount: ", amt)
    let shopName = document.querySelector("#shopName").value
    console.log("Shop name: ", shopName)

    // dropdown
    let category = document.querySelector("#category").value
    console.log("Category: ", category)
    
    // radio menu
    let selectedRb = document.querySelector(".paymentMethod:checked");
    let payment = selectedRb.value;
    // let allSelectedBoxes = document.querySelectorAll(".paymentMethod")
    // let payment = []
    // for (let c of allSelectedBoxes) {
    //     payment.push(c.value)
    // }
    console.log("Paid by: ", payment)

    // alert("all saved")
})