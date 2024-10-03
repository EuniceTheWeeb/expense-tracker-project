
function addExpense (entryList, dateEntry, expenseEntry, amtEntry, shopNameEntry, catEntry) {
  let newEntry = {
    // math.random only for testing
    "id": Math.floor((Math.random()* 10000) + 9999),
    "date": dateEntry,
    "expense": expenseEntry,
    "amt": amtEntry,
    "shop_name": shopNameEntry,
    "category": catEntry,
  }
  entryList.push(newEntry)
  totalDisplay.innerHTML = ""
}


// when "edit" clicked, get id, tell js which entry with that id, change entry, replace old with new under same id
function updateEntry(entryList, id, newDate, newEntryName, newAmt, newShopName, newCat) {
  console.log("entry id:", id)
  let modifiedEntry = {
    "id": id,
    "date": newDate,
    "expense": newEntryName,
    "amt": newAmt,
    "shop_name": newShopName,
    "category": newCat,
}

  const indexToReplace = entryList.findIndex(function(e){
    return e.id == id;
  })
// check if id exists, else findIndex will return -1
  if (indexToReplace > -1) {
    entryList[indexToReplace] = modifiedEntry;
  }
  totalDisplay.innerHTML = ""
}


function deleteEntry(entryList, entryIdToDel) {
// find index of entry to del
  let indexToDelete = entryList.findIndex(function(entry){
    return entry.id == entryIdToDel;
  })

  // delete from the array
  entryList.splice(indexToDelete, 1);
  totalDisplay.innerHTML = ""
}
