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