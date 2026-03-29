const fs = require('fs');
let content = fs.readFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', 'utf8');
let evalContent = content.replace('const cbseData =', 'global.cbseData =');
eval(evalContent);

const ch1Add = [
    {
        "question": "The movement of people across the subcontinent over the centuries led to:",
        "options": ["Enrichment of cultural traditions", "Destruction of wealth", "Loss of languages", "Isolation"],
        "answer": 0,
        "explanation": "These movements of people enriched our cultural traditions. People have shared new ways of carving stone, composing music, and even cooking food over several hundreds of years."
    },
    {
        "question": "Why did people travel from one part of the subcontinent to another in ancient times?",
        "options": ["To discover new lands and escape disasters", "To build new planets", "Only to fight wars", "Only to find gold"],
        "answer": 0,
        "explanation": "Men and women moved in search of livelihood, to escape from natural disasters like floods or droughts, or to conquer others' lands or as merchants and religious teachers."
    },
    {
        "question": "Sulaiman and Kirthar hills are located in which direction of the Indian subcontinent?",
        "options": ["North-East", "South", "North-West", "East"],
        "answer": 2,
        "explanation": "The Sulaiman and Kirthar hills are located to the North-West of the Indian subcontinent, where some of the first crops were grown."
    },
    {
        "question": "Which river's tributaries include the Son river?",
        "options": ["Ganga", "Indus", "Brahmaputra", "Godavari"],
        "answer": 0,
        "explanation": "The Son river is a tributary of the river Ganga."
    },
    {
        "question": "In ancient times, the area to the south of the Ganga was known as:",
        "options": ["Magadha", "Kalinga", "Kosala", "Vajji"],
        "answer": 0,
        "explanation": "In ancient times, the area along the Ganga and its tributary rivers to the south of the Ganga was known as Magadha. Its rulers were very powerful."
    },
    {
        "question": "The word 'Bharat' was used for a group of people who lived in the northwest, and who are mentioned in the:",
        "options": ["Rigveda", "Samaveda", "Upanishads", "Aranyakas"],
        "answer": 0,
        "explanation": "The name Bharata was used for a group of people who lived in the northwest, and who are mentioned in the Rigveda, the earliest composition in Sanskrit."
    },
    {
        "question": "What are tributaries?",
        "options": ["Smaller rivers that flow into a larger river", "Artificial lakes", "Oceans", "Rivers that dry up in summer"],
        "answer": 0,
        "explanation": "Tributaries are smaller rivers that flow into a larger river."
    },
    {
        "question": "Where are the Garo hills located?",
        "options": ["To the north-east", "To the north-west", "To the south", "Central India"],
        "answer": 0,
        "explanation": "The Garo hills are located to the north-east of the Indian subcontinent. It was one of the regions where agriculture developed."
    },
    {
        "question": "About 4700 years ago, some of the earliest cities flourished on the banks of which river?",
        "options": ["Ganga", "Indus", "Narmada", "Kaveri"],
        "answer": 1,
        "explanation": "About 4700 years ago, some of the earliest cities flourished on the banks of the river Indus and its tributaries."
    },
    {
        "question": "The name 'Bharata' used in the Rigveda composition was later used for:",
        "options": ["The country", "A river", "A crop", "An ocean"],
        "answer": 0,
        "explanation": "The name Bharata, originally referring to a group of people in the northwest mentioned in the Rigveda, was later used for the country."
    },
    {
        "question": "Manuscripts are generally fragile because:",
        "options": ["They were written on leaves and tree bark", "They were made of glass", "They were carved on stone", "They were lost at sea"],
        "answer": 0,
        "explanation": "Over the years, many manuscripts were destroyed or eaten by insects because they were written on fragile palm leaves or birch bark."
    },
    {
        "question": "The years BCE are counted:",
        "options": ["Forward", "Backwards", "Randomly", "From the birth of Jesus"],
        "answer": 1,
        "explanation": "All dates before the birth of Christ are counted backwards and usually have the letters BC (Before Christ) or BCE (Before Common Era) added on."
    },
    {
        "question": "The year 2000 means 2000 years after the birth of:",
        "options": ["Gautama Buddha", "Jesus Christ", "Mahavira", "Ashoka"],
        "answer": 1,
        "explanation": "Years are generally counted from the date generally assigned to the birth of Jesus Christ, the founder of Christianity. So, 2000 means 2000 years after the birth of Christ."
    },
    {
        "question": "Which language was the Rigveda originally composed in?",
        "options": ["Prakrit", "Tamil", "Sanskrit", "Brahmi"],
        "answer": 2,
        "explanation": "The Rigveda is the earliest composition in Sanskrit, dated to about 3500 years ago."
    },
    {
        "question": "One way to find out about the past is to search for and read:",
        "options": ["Newspapers", "Manuscripts and Inscriptions", "Printed books", "Internet articles"],
        "answer": 1,
        "explanation": "Before modern times, to find out about the past, historians rely on searching and reading ancient manuscripts, inscriptions, and archaeological evidence."
    }
];

const ch2Add = [
    {
        "question": "Early humans were mainly:",
        "options": ["Farmers", "Hunter-gatherers", "Traders", "Kings"],
        "answer": 1,
        "explanation": "We describe early humans who lived in the subcontinent as early as two million years ago as hunter-gatherers. The name comes from the way in which they got their food."
    },
    {
        "question": "Stone tools were probably used for:",
        "options": ["Cutting meat and bone", "Digging soil", "Chopping wood", "All of the above"],
        "answer": 3,
        "explanation": "Some of these stone tools were used to cut meat and bone, scrape bark and hides, chop fruit and roots. Others were attached to handles to make spears, or to chop wood."
    },
    {
        "question": "The period that covers 99% of human history is:",
        "options": ["Paleolithic", "Mesolithic", "Neolithic", "Chalcolithic"],
        "answer": 0,
        "explanation": "The Palaeolithic period stretches from 2 million years ago to about 12,000 years ago. This long stretch of time covers 99% of human history."
    },
    {
        "question": "Ostriches were found in India during which period?",
        "options": ["Paleolithic period", "Mesolithic period", "Neolithic period", "Modern period"],
        "answer": 0,
        "explanation": "Ostriches were found in India during the Palaeolithic period."
    },
    {
        "question": "Large quantities of ostrich egg shells were found at which Paleolithic site in Maharashtra?",
        "options": ["Patne", "Hunsgi", "Bhimbetka", "Inamgaon"],
        "answer": 0,
        "explanation": "Large quantities of ostrich egg shells were found at Patne in Maharashtra. Designs were engraved on some pieces, while beads were also made out of them."
    },
    {
        "question": "At Hunsgi, most tools were made of:",
        "options": ["Limestone", "Bronze", "Iron", "Copper"],
        "answer": 0,
        "explanation": "A number of early Palaeolithic sites were found at Hunsgi. Most tools there were made from limestone, which was locally available."
    },
    {
        "question": "In what type of places did early humans choose to live?",
        "options": ["Near sources of water and where good quality stone was available", "Deserts", "High mountain peaks", "Deep oceans"],
        "answer": 0,
        "explanation": "People tried to find places where good quality stone was easily available to make tools, often near rivers and lakes."
    },
    {
        "question": "The rock shelters of Bhimbetka are located in which present-day state?",
        "options": ["Madhya Pradesh", "Karnataka", "Andhra Pradesh", "Gujarat"],
        "answer": 0,
        "explanation": "Bhimbetka (in present-day Madhya Pradesh) is an old site with caves and rock shelters. People chose these natural caves because they provided shelter from the rain, heat and wind."
    },
    {
        "question": "The first animal to be tamed by early humans was the wild ancestor of the:",
        "options": ["Cat", "Dog", "Horse", "Cow"],
        "answer": 1,
        "explanation": "The first animal to be tamed was the wild ancestor of the dog. Later, people encouraged relatively gentle animals like sheep, goat, cattle and also pig to come near their camps."
    },
    {
        "question": "Domestication of plants and animals was a gradual process that took place about:",
        "options": ["12,000 years ago", "2,000 years ago", "100,000 years ago", "500 years ago"],
        "answer": 0,
        "explanation": "Domestication was a gradual process that took place in many parts of the world. It began about 12,000 years ago."
    },
    {
        "question": "Mortars and pestles are used for grinding grain. Some of these tools belonged to precisely which period?",
        "options": ["Neolithic", "Paleolithic", "Iron Age", "Bronze Age"],
        "answer": 0,
        "explanation": "Many Neolithic sites have yielded polished stone tools. Mortars and pestles were used for grinding grain and other plant produce."
    },
    {
        "question": "Earthen pots in the Neolithic period were sometimes decorated and used for:",
        "options": ["Storing things and cooking food", "Fighting", "Building houses", "Playing music"],
        "answer": 0,
        "explanation": "Many kinds of earthen pots have been found. These were sometimes decorated, and were used for storing things. People also began using pots for cooking food."
    },
    {
        "question": "Burzahom, where pit-houses were discovered, is in present-day:",
        "options": ["Kashmir", "Assam", "Rajasthan", "Kerala"],
        "answer": 0,
        "explanation": "Archaeologists have found traces of huts or houses at some sites. For instance, in Burzahom (in present-day Kashmir) people built pit-houses."
    },
    {
        "question": "The term 'factory sites' refers to places where:",
        "options": ["Blocks of stone were found and tools were made", "Early humans worshipped", "Kings held court", "Animals were domesticated"],
        "answer": 0,
        "explanation": "Places where stone was found and where people made tools are known as factory sites. Sometimes, people lived here for longer spells, becoming habitation-cum-factory sites."
    },
    {
        "question": "Paintings on the walls of caves mainly depict:",
        "options": ["Wild animals", "Modern cities", "Cars and airplanes", "Ships"],
        "answer": 0,
        "explanation": "Many caves where early people lived have paintings on their walls, focusing heavily on wild animals drawn with great accuracy and skill (e.g., in Madhya Pradesh and southern UP)."
    },
    {
        "question": "Neolithic tools included:",
        "options": ["Polished stone tools with fine cutting edges", "Heavy iron swords", "Bronze shields", "Plastic equipment"],
        "answer": 0,
        "explanation": "Tools of the Neolithic age were polished to give a fine cutting edge, making them distinct from the earlier Palaeolithic tools."
    },
    {
        "question": "Jadeite, a stone that may have been brought from China, was found at:",
        "options": ["Daojali Hading", "Mehrgarh", "Hallur", "Kurnool"],
        "answer": 0,
        "explanation": "At Daojali Hading, near the Brahmaputra Valley, archaeologists found finds like jadeite, a stone that may have been brought from China."
    }
];

const ch3Add = [
    {
        "question": "The Harappan cities developed about how many years ago?",
        "options": ["4700 years ago", "2500 years ago", "12000 years ago", "1500 years ago"],
        "answer": 0,
        "explanation": "These cities developed about 4700 years ago. Very often, old buildings are pulled down to make way for new construction."
    },
    {
        "question": "The houses in the cities of the Indus Valley usually had:",
        "options": ["1 or 2 storeys", "10 storeys", "Underground bunkers only", "Mud huts"],
        "answer": 0,
        "explanation": "Generally, houses were either one or two storeys high, with rooms built around a courtyard. Most houses had a separate bathing area, and some had wells."
    },
    {
        "question": "Mohenjodaro, Harappa, and Lothal had large:",
        "options": ["Store houses", "Churches", "Iron factories", "Chariots"],
        "answer": 0,
        "explanation": "Cities like Mohenjodaro, Harappa, and Lothal possessed large store houses to store grain and other goods securely."
    },
    {
        "question": "Kalibangan and Lothal had:",
        "options": ["Fire altars", "Pyramids", "Giant statues", "Hanging gardens"],
        "answer": 0,
        "explanation": "Other cities, such as Kalibangan and Lothal had fire altars, where sacrifices may have been performed."
    },
    {
        "question": "Which material was extensively used to construct walls in Harappan cities?",
        "options": ["Baked bricks laid in an interlocking pattern", "Pure stone blocks", "Wood only", "Mud without baking"],
        "answer": 0,
        "explanation": "The bricks were so well baked that they have lasted for thousands of years. They were laid in an interlocking pattern, making the walls strong."
    },
    {
        "question": "Many set of Harappan cities had covered:",
        "options": ["Drains", "Bridges", "Railways", "Airports"],
        "answer": 0,
        "explanation": "Many of these cities had covered drains carefully laid out in straight lines. They had gentle slopes so water could flow through."
    },
    {
        "question": "Spindle whorls found in Harappan sites were used to:",
        "options": ["Spin thread", "Measure land", "Dig soil", "Cut meat"],
        "answer": 0,
        "explanation": "Many of the things that were made were probably the work of specialists. Many terracotta and faience spindle whorls have been found. These were used to spin thread."
    },
    {
        "question": "Cotton was probably grown at Mehrgarh from about:",
        "options": ["7000 years ago", "2000 years ago", "500 years ago", "12000 years ago"],
        "answer": 0,
        "explanation": "Cotton was probably grown at Mehrgarh from about 7000 years ago. Actual pieces of cloth were found attached to the lid of a silver vase and some copper objects at Mohenjodaro."
    },
    {
        "question": "The Harappans probably got copper from present-day:",
        "options": ["Rajasthan and Oman", "China", "Europe", "Russia"],
        "answer": 0,
        "explanation": "The Harappans probably got copper from present-day Rajasthan, and even from Oman in West Asia."
    },
    {
        "question": "Tin, which was mixed with copper to produce bronze, may have been brought from present-day:",
        "options": ["Afghanistan and Iran", "Australia", "North America", "South Africa"],
        "answer": 0,
        "explanation": "Tin, mixed with copper to produce bronze, may have been brought from present-day Afghanistan and Iran."
    },
    {
        "question": "Gold could have been acquired by the Harappans from present-day:",
        "options": ["Karnataka", "Kerala", "Bihar", "Punjab"],
        "answer": 0,
        "explanation": "Gold could have come all the way from present-day Karnataka, and precious stones from present-day Gujarat, Iran, and Afghanistan."
    },
    {
        "question": "The script of the Harappans was typically inscribed on:",
        "options": ["Seals", "Vast stone monoliths", "Palm leaves", "Papyrus"],
        "answer": 0,
        "explanation": "Scribes were people who knew how to write, who helped prepare the seals, and perhaps wrote on other materials that have not survived."
    },
    {
        "question": "What did the Harappans use to plough the earth and turn the soil?",
        "options": ["A toy model of a plough has been found, hinting at real plough use", "Tractors", "Iron ploughshares", "Hand hoes only"],
        "answer": 0,
        "explanation": "A new tool, the plough, was used to dig the earth for turning the soil and planting seeds. While real wooden ploughs have not survived, toy models have been found."
    },
    {
        "question": "Dholavira was located in the:",
        "options": ["Rann of Kutch", "Desert of Thar", "Banks of the Ganges", "Deccan plateau"],
        "answer": 0,
        "explanation": "The city of Dholavira was located on Khadir Beyt in the Rann of Kutch, where there was fresh water and fertile soil."
    },
    {
        "question": "The massive stone walls in Dholavira had entrances through:",
        "options": ["Gateways", "Tunnels", "Underground paths", "Rivers"],
        "answer": 0,
        "explanation": "Dholavira was divided into three parts, and each part was surrounded with massive stone walls, with entrances through gateways."
    },
    {
        "question": "To feed the city dwellers, farmers and herders living in the countryside supplied:",
        "options": ["Food", "Gold", "Weapons", "Clothes"],
        "answer": 0,
        "explanation": "While many people lived in the cities, others living in the countryside grew crops and reared animals. These farmers and herders supplied food to crafts persons, scribes, and rulers."
    },
    {
        "question": "What was a primary reason for the decline of the Harappan civilization around 3900 years ago?",
        "options": ["Rivers drying up, deforestation, or floods", "Alien invasion", "Earthquakes swallowing cities", "Mass migration to Europe"],
        "answer": 0,
        "explanation": "Scholars suggest it may have been caused by rivers drying up, deforestation, overgrazing destroying green cover, or floods, leading to the collapse around 3900 years ago."
    }
];

global.cbseData["6"].history.mcqs.ch1.push(...ch1Add);
global.cbseData["6"].history.mcqs.ch2.push(...ch2Add);
global.cbseData["6"].history.mcqs.ch3.push(...ch3Add);

let finalContent = 'const cbseData = ' + JSON.stringify(global.cbseData, null, 4) + ';\n';
fs.writeFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', finalContent);
console.log('Done modifying Chapter 1 to 3.');
