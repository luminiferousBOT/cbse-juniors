const fs = require('fs');
let content = fs.readFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', 'utf8');
let evalContent = content.replace('const cbseData =', 'global.cbseData =');
eval(evalContent);

if (!global.cbseData["7"]) {
    global.cbseData["7"] = {};
}
global.cbseData["7"]["history"] = {
    "title": "Our Pasts - II",
    "chapters": [
        { "id": "ch1", "title": "1. Tracing Changes Through A Thousand Years" },
        { "id": "ch2", "title": "2. New Kings And Kingdoms" },
        { "id": "ch3", "title": "3. The Delhi Sultans" },
        { "id": "ch4", "title": "4. The Mughal Empire" },
        { "id": "ch5", "title": "5. Rulers And Buildings" },
        { "id": "ch6", "title": "6. Towns, Traders And Craftspersons" },
        { "id": "ch7", "title": "7. Tribes, Nomads And Settled Communities" },
        { "id": "ch8", "title": "8. Devotional Paths To The Divine" },
        { "id": "ch9", "title": "9. The Making Of Regional Cultures" },
        { "id": "ch10", "title": "10. Eighteenth-Century Political Formations" }
    ],
    "mcqs": {
        "ch1": [], "ch2": [], "ch3": [], "ch4": [], "ch5": [],
        "ch6": [], "ch7": [], "ch8": [], "ch9": [], "ch10": []
    }
};

let finalContent = 'const cbseData = ' + JSON.stringify(global.cbseData, null, 4) + ';\n';
fs.writeFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', finalContent);
console.log('Class 7 History structure initialized.');
