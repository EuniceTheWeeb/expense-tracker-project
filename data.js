
const JSON_BIN_BASE_URL="https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66ff8f6bad19ca34f8b27552";   

async function loadList() {
  const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`);
  return response.data.record
}

async function saveList(entryList) {
  const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}`, entryList)
  console.log(response.data)
}


let entryList = []

function addExpense (entryList, dateEntry, expenseEntry, displayEntry, shopNameEntry, catEntry) {
  let newEntry = {
    // math.random only for testing, not the proper way to assign id to object
    "id": Math.floor((Math.random()* 10000) + 1),
    "date": dateEntry,
    "expense": expenseEntry,
    "amt": displayEntry,
    "shop_name": shopNameEntry,
    "category": catEntry,
  }
  entryList.push(newEntry)
  totalDisplay.innerHTML = ""
}

// when "edit" clicked, get id, tell js find the entry with that id, change entry, replace old with new under same id
function updateEntry(entryList, id, newDate, newEntryName, newAmt, newShopName, newCat) {
  console.log("editing object id:", id)
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
