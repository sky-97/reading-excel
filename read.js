var XLSX = require('xlsx')
var workbook = XLSX.readFile('Master.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData[0]["Symbol"]);
// for (const tests in xlData[0]["Symbol"]) {
//     console.log(tests);
  
//   }