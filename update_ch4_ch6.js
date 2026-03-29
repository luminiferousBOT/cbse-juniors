const fs = require('fs');
let content = fs.readFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', 'utf8');
let evalContent = content.replace('const cbseData =', 'global.cbseData =');
eval(evalContent);

const ch4Add = [
    {
        "question": "The Rigveda was composed about:",
        "options": ["3500 years ago", "4700 years ago", "2000 years ago", "12000 years ago"],
        "answer": 0,
        "explanation": "The oldest Veda is the Rigveda, composed about 3500 years ago."
    },
    {
        "question": "The hymns of the Rigveda were called:",
        "options": ["Sukta", "Mantra", "Shloka", "Katha"],
        "answer": 0,
        "explanation": "The Rigveda includes more than a thousand hymns, called sukta or 'well-said'."
    },
    {
        "question": "Which two rivers are mentioned as being worshipped as goddesses in the Rigveda?",
        "options": ["Beas and Sutlej", "Ganga and Yamuna", "Narmada and Tapti", "Godavari and Krishna"],
        "answer": 0,
        "explanation": "Many rivers, especially the Indus and its tributaries, and the Sarasvati, are named in the hymns. The Beas and Sutlej were worshipped as goddesses."
    },
    {
        "question": "How were the hymns of the Rigveda passed down initially?",
        "options": ["They were recited and heard rather than read", "They were printed in books", "They were carved on stone pillars", "They were sent as letters"],
        "answer": 0,
        "explanation": "The Rigveda was recited and heard rather than read. It was written down several centuries after it was first composed."
    },
    {
        "question": "Battles were fought in the Rigvedic period for:",
        "options": ["Cattle, land, water, and people", "Only to capture kings", "Stealing gold", "Religious conversion"],
        "answer": 0,
        "explanation": "Battles were fought to capture cattle, for land (to grow crops or pasture), for water, and to capture people."
    },
    {
        "question": "The wealth obtained in Rigvedic battles was:",
        "options": ["Kept by the leaders, given to priests, and distributed among people", "Thrown into the river", "Buried with the dead", "Given entirely to the poor"],
        "answer": 0,
        "explanation": "Some of the wealth that was obtained was kept by the leaders, some was given to the priests, and the rest was distributed amongst the people."
    },
    {
        "question": "The two groups described in terms of their work in the Rigveda were:",
        "options": ["The priests (brahmanas) and the rajas", "Farmers and herders", "Merchants and craftspersons", "Slaves and masters"],
        "answer": 0,
        "explanation": "There are two groups who are described in terms of their work: the priests, sometimes called brahmanas, who performed various rituals, and the rajas."
    },
    {
        "question": "The practice of erecting megaliths to mark burial sites began about:",
        "options": ["3000 years ago", "4700 years ago", "1000 years ago", "12000 years ago"],
        "answer": 0,
        "explanation": "The practice of erecting megaliths to mark burial sites began about 3000 years ago."
    },
    {
        "question": "Megaliths were prevalent in which regions?",
        "options": ["Deccan", "South India", "North-East and Kashmir", "All of the above"],
        "answer": 3,
        "explanation": "This practice was prevalent throughout the Deccan, south India, in the north-east and Kashmir."
    },
    {
        "question": "Sometimes, archaeologists find a circle of stone boulders or a single large stone standing on the ground. These indicate:",
        "options": ["Burials beneath", "A playground", "A king's palace", "A marketplace"],
        "answer": 0,
        "explanation": "These are the only indications that there are burials beneath. They acted as signposts to find the burial site."
    },
    {
        "question": "Along with the dead, what distinctive pots were usually buried in megalithic graves?",
        "options": ["Black and Red Ware", "Painted Grey Ware", "Northern Black Polished Ware", "Arretine Ware"],
        "answer": 0,
        "explanation": "The dead were generally buried with distinctive pots, which are called Black and Red Ware. Tools and weapons of iron and skeletons of horses have also been found."
    },
    {
        "question": "In Brahmagiri, one skeleton was buried with 33 gold beads, 2 stone beads, 4 copper bangles, and a conch shell. Other skeletons had only a few pots. This suggests:",
        "options": ["There was some difference in status amongst the people who were buried", "Some graves were robbed", "They lived in different centuries", "The gold beads were accidentally dropped"],
        "answer": 0,
        "explanation": "Archaeologists think that objects found with a skeleton probably belonged to the dead person. Variations in items suggest there was some difference in status amongst the people who were buried. Some were rich, others poor, some chiefs, others followers."
    },
    {
        "question": "What tells us that some megaliths contained more than one skeleton?",
        "options": ["Portholes that allowed people belonging to the same family to be buried in the same place later", "Written records inside the graves", "Eye-witness accounts in Vedas", "Paintings on the stones"],
        "answer": 0,
        "explanation": "Sometimes, megaliths contain more than one skeleton. This indicates that people spanning the same family may have been buried in the same place though not at the same time. The bodies were brought into the grave through portholes."
    },
    {
        "question": "At Inamgaon, seeds of wheat, barley, lentils, millets, and sesame have been found. This indicates that the people:",
        "options": ["Were agriculturists", "Only ate meat", "Imported all their food", "Knew nothing about farming"],
        "answer": 0,
        "explanation": "Archaeologists have found seeds of wheat, barley, lentils, millets, peas and sesame at Inamgaon, showing they were practicing agriculture."
    },
    {
        "question": "The word 'jana' refers to:",
        "options": ["The people or community as a whole", "The king alone", "A special weapon", "A type of offering"],
        "answer": 0,
        "explanation": "Two words were used to describe the people or the community as a whole. One was the word 'jana', which we still use in Hindi and other languages."
    },
    {
        "question": "Charaka, an ancient physician, wrote a book on medicine known as:",
        "options": ["Charaka Samhita", "Sushruta Samhita", "Ayurveda Pradeep", "Rigveda Bhashya"],
        "answer": 0,
        "explanation": "About 2000 years ago, there was a famous physician named Charaka who wrote a book on medicine known as the Charaka Samhita."
    },
    {
        "question": "According to Charaka, the human body has how many bones?",
        "options": ["360", "206", "500", "108"],
        "answer": 0,
        "explanation": "He states that the human body has 360 bones. This is a much larger number than the 200-odd bones recognized in modern anatomy, possibly because he included teeth, joints and cartilage."
    }
];

const ch5Add = [
    {
        "question": "The Ashvamedha sacrifice was generally performed by:",
        "options": ["A very powerful raja", "Ordinary priests", "Women", "Slaves"],
        "answer": 0,
        "explanation": "The Ashvamedha or horse sacrifice was a very big sacrifice performed by rajas. Only a very powerful raja, who was accepted as superior by other rajas, would perform this."
    },
    {
        "question": "During the sacrifices, the raja was seated on:",
        "options": ["A special seat, such as a throne or tiger skin", "The bare ground", "A large rock", "A chariot"],
        "answer": 0,
        "explanation": "The raja was a central figure in these rituals. He often had a special seat, a throne or a tiger skin."
    },
    {
        "question": "The varna system was based on:",
        "options": ["Birth", "Exam scores", "Wealth", "Military strength"],
        "answer": 0,
        "explanation": "The brahmanas divided people into four groups, called varnas. They later stated that these groups were decided on the basis of birth."
    },
    {
        "question": "What was the name of the special type of pottery found in janapadas?",
        "options": ["Painted Grey Ware", "Black and Red Ware", "Arretine Ware", "Northern Black Polished Ware"],
        "answer": 0,
        "explanation": "Archaeologists have excavated a number of settlements in these janapadas. They found that people made earthen pots. One special type of pottery found at these sites is known as Painted Grey Ware."
    },
    {
        "question": "Which of the following is a characteristic of a Mahajanapada?",
        "options": ["They had a capital city and many were fortified", "They had no kings", "They were located only in South India", "They relied only on hunting"],
        "answer": 0,
        "explanation": "About 2500 years ago, some janapadas became more important than others, and were known as mahajanapadas. Most of these had a capital city, and many were fortified."
    },
    {
        "question": "Why did the rajas of Mahajanapadas build forts?",
        "options": ["To protect people from attacks and to show wealth and power", "To hide their gold", "Because stone was too heavy to move elsewhere", "To imprison the poor"],
        "answer": 0,
        "explanation": "Forts were probably built because people were afraid of attacks from other kings and needed protection. It is also likely that some rulers wanted to show how rich and powerful they were by building really large, tall and impressive walls around their cities."
    },
    {
        "question": "The rajas of the Mahajanapadas maintained regular armies and paid their soldiers using:",
        "options": ["Punch-marked coins", "Paper money", "Animal skins", "Shells"],
        "answer": 0,
        "explanation": "The new rajas now began maintaining armies. Soldiers were paid regular salaries and maintained by the king throughout the year. Some payments were probably made using punch marked coins."
    },
    {
        "question": "The tax collected from craftspersons was usually in the form of:",
        "options": ["Labour", "Gold", "Crops", "Animals"],
        "answer": 0,
        "explanation": "There were taxes on crafts persons as well. These could have been in the form of labour. For example, a weaver or a smith may have had to work for a day every month for the king."
    },
    {
        "question": "Herders were expected to pay taxes in the form of:",
        "options": ["Animals and animal produce", "Gold coins", "Iron tools", "Pottery"],
        "answer": 0,
        "explanation": "Herders were also expected to pay taxes in the form of animals and animal produce."
    },
    {
        "question": "Magadha became the most important mahajanapada in about how many years?",
        "options": ["200 years", "50 years", "1000 years", "500 years"],
        "answer": 0,
        "explanation": "Magadha became the most important mahajanapada in about two hundred years."
    },
    {
        "question": "Which two rivers flowed through Magadha making it fertile and helping in transport?",
        "options": ["Ganga and Son", "Indus and Jhelum", "Krishna and Godavari", "Narmada and Tapti"],
        "answer": 0,
        "explanation": "Many rivers such as the Ganga and Son flowed through Magadha. This was important for transport, water supplies and making the land fertile."
    },
    {
        "question": "In the forests of Magadha, which animals were captured and trained for the army?",
        "options": ["Elephants", "Horses", "Lions", "Camels"],
        "answer": 0,
        "explanation": "There were forests in part of Magadha. Elephants, which lived in the forest, could be captured and trained for the army."
    },
    {
        "question": "Two very powerful rulers of Magadha were:",
        "options": ["Bimbisara and Ajatashatru", "Ashoka and Bindusara", "Chandragupta and Samudragupta", "Kanishka and Huvishka"],
        "answer": 0,
        "explanation": "Magadha had two very powerful rulers, Bimbisara and Ajatasattu (Ajatashatru), who used all possible means to conquer other janapadas."
    },
    {
        "question": "The initial capital of Magadha for several years was:",
        "options": ["Rajagriha", "Pataliputra", "Ujjain", "Taxila"],
        "answer": 0,
        "explanation": "Rajagriha (present-day Rajgir) in Bihar was the capital of Magadha for several years."
    },
    {
        "question": "Later, the capital of Magadha was shifted to:",
        "options": ["Pataliputra", "Mathura", "Ayodhya", "Kashi"],
        "answer": 0,
        "explanation": "Later the capital was shifted to Pataliputra (present-day Patna)."
    },
    {
        "question": "When Alexander the Great reached the banks of the Beas river, his soldiers refused to march further east because:",
        "options": ["They had heard that the Indian rulers had vast armies of foot soldiers, chariots and elephants", "The river was too deep", "They wanted to go back to Egypt", "They ran out of food"],
        "answer": 0,
        "explanation": "When he wanted to march further eastwards, his soldiers refused. They were scared, as they had heard that the rulers of India had vast armies of foot soldiers, chariots and elephants."
    },
    {
        "question": "In the gana or sangha (like Vajji), decisions were taken:",
        "options": ["Through discussion and debate in assemblies", "By a single powerful king", "By the army general", "By reading the stars"],
        "answer": 0,
        "explanation": "In a gana or a sangha there were not one, but many rulers. They met in assemblies, and decided what had to be done and how, through discussion and debate."
    }
];

const ch6Add = [
    {
        "question": "The Buddha belonged to a small gana known as the Sakya gana, and he was a:",
        "options": ["Kshatriya", "Brahmana", "Vaishya", "Shudra"],
        "answer": 0,
        "explanation": "The Buddha belonged to a small gana known as the Sakya gana, and was a kshatriya."
    },
    {
        "question": "After attaining enlightenment, Buddha taught for the first time at:",
        "options": ["Sarnath", "Bodh Gaya", "Lumbini", "Kushinara"],
        "answer": 0,
        "explanation": "He then went to Sarnath, near Varanasi, where he taught for the first time."
    },
    {
        "question": "The Buddha taught that life is full of suffering and unhappiness. This is caused because:",
        "options": ["We have cravings and desires which often cannot be fulfilled", "We don't have enough money", "We eat the wrong foods", "The gods are angry"],
        "answer": 0,
        "explanation": "The Buddha taught that life is full of suffering and unhappiness. This is caused because we have cravings and desires (which often cannot be fulfilled)."
    },
    {
        "question": "The Buddha passed away at:",
        "options": ["Kushinara", "Sarnath", "Pataliputra", "Rajagriha"],
        "answer": 0,
        "explanation": "He spent the rest of his life travelling on foot, going from place to place, teaching people, till he passed away at Kushinara."
    },
    {
        "question": "Gargi, mentioned in the Upanishads, was famous for:",
        "options": ["Her learning and participating in debates", "Being a great warrior", "Being a skilled potter", "Being the queen of Magadha"],
        "answer": 0,
        "explanation": "Most upanishadic thinkers were men, especially brahmanas and rajas. Occasionally, there is mention of women thinkers, such as Gargi, who was famous for her learning, and participated in debates held in royal courts."
    },
    {
        "question": "An exception in Upanishadic thinkers, who was a poor slave but became a famous thinker after being accepted as a student by a brahmana teacher?",
        "options": ["Satyakama Jabala", "Panini", "Charaka", "Sushruta"],
        "answer": 0,
        "explanation": "Satyakama Jabala was named after his mother, the slave woman Jabali. He had a deep desire to learn about reality, was accepted as a student by a brahmana teacher named Gautama, and became one of the best-known thinkers of the time."
    },
    {
        "question": "Who prepared a grammar for Sanskrit by arranging the vowels and consonants in a special order?",
        "options": ["Panini", "Valmiki", "Vyasa", "Kalidasa"],
        "answer": 0,
        "explanation": "This was also the time when other scholars were at work. One of the most famous was Panini, who prepared a grammar for Sanskrit."
    },
    {
        "question": "Vardhamana Mahavira left his home and went to live in a forest at the age of:",
        "options": ["30", "20", "50", "45"],
        "answer": 0,
        "explanation": "At the age of thirty, he left home and went to live in a forest. For twelve years he led a hard and lonely life, at the end of which he attained enlightenment."
    },
    {
        "question": "The followers of Mahavira were known as:",
        "options": ["Jainas", "Buddhists", "Hindus", "Ajivikas"],
        "answer": 0,
        "explanation": "Followers of Mahavira, who were known as Jainas, had to lead very simple lives, begging for food."
    },
    {
        "question": "Which language was used by Jainas so that ordinary people could understand their teachings?",
        "options": ["Prakrit", "Sanskrit", "Latin", "Arabic"],
        "answer": 0,
        "explanation": "ordinary people could understand the teachings of Mahavira and his followers, because they used Prakrit."
    },
    {
        "question": "Jainas were required to be absolutely honest and were especially asked not to:",
        "options": ["Steal", "Speak to outsiders", "Travel", "Cook food"],
        "answer": 0,
        "explanation": "They had to be absolutely honest, and were especially asked not to steal. Also, they had to observe celibacy."
    },
    {
        "question": "For hundreds of years, the teachings of Mahavira and his followers were transmitted:",
        "options": ["Orally", "By writing on stone pillars", "By burying books in the ground", "Through paintings"],
        "answer": 0,
        "explanation": "The teachings of Mahavira and his followers were transmitted orally for several centuries. They were written down in the form in which they are presently available at a place called Valabhi, in Gujarat, about 1500 years ago."
    },
    {
        "question": "Temporary shelters called viharas were built for the monks and nuns to stay during the:",
        "options": ["Rainy season", "Winter season", "Summer", "War times"],
        "answer": 0,
        "explanation": "Both Jaina and Buddhist monks went from place to place throughout the year, teaching people. The only time they stayed in one place was during the rainy season, when it was very difficult to travel. Then, their supporters built temporary shelters for them in gardens, or they lived in natural caves in hilly areas."
    },
    {
        "question": "The earliest viharas were made of:",
        "options": ["Wood, and then of brick", "Plastics", "Iron", "Glass"],
        "answer": 0,
        "explanation": "The earliest viharas were made of wood, and then of brick. Some were even in caves that were dug out in hills, especially in western India."
    },
    {
        "question": "The system of Ashramas (stages of life) was developed by:",
        "options": ["Brahmanas", "Kshatriyas", "Buddhists", "Jainas"],
        "answer": 0,
        "explanation": "Around the time when Jainism and Buddhism were becoming popular, brahmanas developed the system of ashramas."
    },
    {
        "question": "In the Ashrama system, the stage where one had to live as a student and study the Vedas was called:",
        "options": ["Brahmacharya", "Grihastha", "Vanaprastha", "Sannyasa"],
        "answer": 0,
        "explanation": "Brahmin, kshatriya and vaishya men were expected to lead simple lives and study the Vedas during the early years of their life (brahmacharya)."
    },
    {
        "question": "In the Vanaprastha stage, what was a person expected to do?",
        "options": ["Live in the forest and meditate", "Marry and live as a householder", "Give up everything and become a sannyasin", "Lead an army"],
        "answer": 0,
        "explanation": "Then, they had to live in the forest and meditate (vanaprastha)."
    }
];

global.cbseData["6"].history.mcqs.ch4.push(...ch4Add);
global.cbseData["6"].history.mcqs.ch5.push(...ch5Add);
global.cbseData["6"].history.mcqs.ch6.push(...ch6Add);

let finalContent = 'const cbseData = ' + JSON.stringify(global.cbseData, null, 4) + ';\n';
fs.writeFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', finalContent);
console.log('Done modifying Chapter 4 to 6.');
