function createMenu() { // adds menu to menu bar to spreadsheet, does this with a trigger on Open
  var menu = SpreadsheetApp.getUi().createMenu("Profile Generator");
  menu.addItem("Run Generator", "runGenerator");
  menu.addToUi();
}

function runGenerator() {
  var result = SpreadsheetApp.getUi().alert("Profile Generator", "Are you ready to run the Profile Generator?", SpreadsheetApp.getUi().ButtonSet.YES_NO);
  if(result === SpreadsheetApp.getUi().Button.YES){
    SpreadsheetApp.getActive().toast("Running Script...");
    generate();
    SpreadsheetApp.getActive().toast("Profile Generator Complete");
  }
  else{
    SpreadsheetApp.getActive().toast("Canceling Script; No profiles were generated");
  }
}
