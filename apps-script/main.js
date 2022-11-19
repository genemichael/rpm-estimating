// const ss = SpreadsheetApp.openById("10TcZDDmOAn_0Ao-6HLFMJ64MNHqZUgk8Y9AI6T4wlGM");
// const lists = ss.getSheetByName("Automated Emails");
// const pmList = lists.getRange(26, 1, lists.getRange("A26").getDataRegion().getLastRow(), 1).getValues();
// const repList = lists.getRange(3, 1, lists.getRange("A3").getDataRegion().getLastRow(), 1).getValues();

function doGet() {
    return HtmlService
    .createTemplateFromFile("index")
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}

function newEstimateNumber() {
    let ss = SpreadsheetApp.openById("10TcZDDmOAn_0Ao-6HLFMJ64MNHqZUgk8Y9AI6T4wlGM");
    let startingRange = ss.getSheetByName("Part 1").getRange("J3");
    let startingnumber = startingRange.getValue();
    let newNumber = startingnumber+1;
    startingRange.setValue(newNumber);
    return newNumber;
    
    }

// function doGet() {
//     let t = HtmlService.createTemplateFromFile('index');
//     t.pmList = pmList;
//     t.repList = repList;
//     let r = t.evaluate().addMetaTag("viewport", "width=device-width, initial-scale=1.0");
//     return r;
    
// }