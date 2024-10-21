// Learning Network Folders
const LN1_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN2_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN5_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN7_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN9_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN12_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN13_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
const LN14_FOLDER = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxx');

// spreadsheet doc
const TRACKER_SPREADSHEET = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/');

// spreadsheet tabs
const LN1_TAB = TRACKER_SPREADSHEET.getSheetByName('LN1');
const LN2_TAB = TRACKER_SPREADSHEET.getSheetByName('LN2');
const LN5_TAB = TRACKER_SPREADSHEET.getSheetByName('LN5');
const LN7_TAB = TRACKER_SPREADSHEET.getSheetByName('LN7');
const LN9_TAB = TRACKER_SPREADSHEET.getSheetByName('LN9');
const LN12_TAB = TRACKER_SPREADSHEET.getSheetByName('LN12');
const LN13_TAB = TRACKER_SPREADSHEET.getSheetByName('LN13');
const LN14_TAB = TRACKER_SPREADSHEET.getSheetByName('LN14');

// google doc template
const INTERVIEW_TEMPLATE = DriveApp.getFileById('xxxxxxxxxxxxxxxxxxxxxxxxxx');
