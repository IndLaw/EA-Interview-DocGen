function generate() {

  let folders = [LN1_FOLDER, LN2_FOLDER, LN5_FOLDER, LN7_FOLDER, LN9_FOLDER, LN12_FOLDER, LN13_FOLDER, LN14_FOLDER];
  let tabs = [LN1_TAB, LN2_TAB, LN5_TAB, LN7_TAB, LN9_TAB, LN12_TAB, LN13_TAB, LN14_TAB];

  for (let j = 0; j < tabs.length; j++) {

    let sheetData = tabs[j].getDataRange().getValues();

    for (let i = 2; i < sheetData.length; i++) {

      let readyForGen = sheetData[i][22];
      let sheetLink = sheetData[i][23];

      if (readyForGen == false) { // skip if not ready
        console.log("Not ready; skipping");
        continue;
      }

      if (sheetLink != "") { // skip link in field
        console.log("Link already added; skipping");
        continue;
      }

      let name = sheetData[i][0] + " " + sheetData[i][1];
      let phone = sheetData[i][8];
      let email = sheetData[i][7];
      let resume = sheetData[i][9];
      let taskLink = sheetData[i][14];
      let taskNotes = sheetData[i][15];

      if (name == "") { // end if no names left
        console.log("No names left; ending");
        break;
      }

      console.log(name, phone, email, resume, taskLink, taskNotes, readyForGen, sheetLink);

      let newDoc = INTERVIEW_TEMPLATE.makeCopy("Interview Notes - " + tabs[j].getSheetName() + " - " + name, folders[j]);
      let body = DocumentApp.openById(newDoc.getId()).getBody();

      body.replaceText("{CANDIDATE_NAME}", name);
      body.replaceText("{CANDIDATE_PHONE}", phone);
      body.replaceText("{CANDIDATE_EMAIL}", email);
      body.replaceText("{CANDIDATE_RESUME}", resume);
      body.replaceText("{CANDIDATE_TASK_LINK}", taskLink);
      body.replaceText("{PERFORMANCE_TASK_NOTES}", taskNotes);

      tabs[j].getRange(i + 1, 24).setValue(newDoc.getUrl());
    }
  }
}
