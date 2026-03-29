const fs = require('fs');
let content = fs.readFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', 'utf8');
let evalContent = content.replace('const cbseData =', 'global.cbseData =');
eval(evalContent);

const ch7Add = [
    {
        "question": "The Mauryan empire was so large that different parts were ruled differently. The area around Pataliputra was under:",
        "options": ["The direct control of the emperor", "The Dhamma Mahamatta", "Buddhist monks", "Seleucus Nicator"],
        "answer": 0,
        "explanation": "The area around Pataliputra was under the direct control of the emperor. This meant that officials were appointed to collect taxes from farmers, herders, crafts persons and traders."
    },
    {
        "question": "Who were appointed to collect taxes from farmers, herders, crafts persons and traders?",
        "options": ["Officials", "Spies", "Monks", "Enemy kings"],
        "answer": 0,
        "explanation": "Officials were appointed to collect taxes from those who lived in villages and towns in the area under direct control."
    },
    {
        "question": "Which people in the Mauryan administration were given salaries and also expected to spy on the officials?",
        "options": ["The royal princes", "Spies", "Scribes", "Farmers"],
        "answer": 1,
        "explanation": "Many of these officials were given salaries. Messengers went to and fro, and spies kept a watch on the officials."
    },
    {
        "question": "Provincial capitals like Taxila or Ujjain were generally ruled by:",
        "options": ["Elected mayors", "Royal princes sent as governors", "Religious leaders", "Nomadic tribes"],
        "answer": 1,
        "explanation": "There were other areas or provinces. Each of these was ruled from a provincial capital such as Taxila or Ujjain. Although there was some amount of control from Pataliputra, and royal princes were often sent as governors, local customs and rules were probably followed."
    },
    {
        "question": "Which region was important for blankets according to the Arthashastra?",
        "options": ["The north-west", "South India", "Magadha", "Bengal"],
        "answer": 0,
        "explanation": "For example, the Arthashastra tells us that the north-west was important for blankets, and south India for its gold and precious stones."
    },
    {
        "question": "South India was important to the Mauryans primarily for its:",
        "options": ["Blankets", "Gold and precious stones", "Iron weapons", "Chariots"],
        "answer": 1,
        "explanation": "South India was important for its gold and precious stones."
    },
    {
        "question": "People living in the forested regions of the Mauryan empire were expected to provide:",
        "options": ["Only gold coins", "Elephants, timber, honey and wax as tribute", "Wheat and barley", "Silk and spices"],
        "answer": 1,
        "explanation": "There were also the forested regions. People living in these areas were more or less independent, but may have been expected to provide elephants, timber, honey and wax to Mauryan officials."
    },
    {
        "question": "How did Megasthenes describe the emperor's appearances in public?",
        "options": ["He walked alone in simple clothes", "They were celebrated with grand royal processions and he was carried in a golden palanquin", "He never appeared in public", "He only appeared at night"],
        "answer": 1,
        "explanation": "Megasthenes wrote: 'The occasions on which the emperor appears in public are celebrated with grand royal processions. He is carried in a golden palanquin.'"
    },
    {
        "question": "Before fighting the Kalinga war, what did Ashoka realize about wars?",
        "options": ["Nothing, he realized it after the war", "He knew wars were fun", "Wars always bring great wealth", "Wars are the only way to rule"],
        "answer": 0,
        "explanation": "Ashoka felt horror and realized the consequences only after he fought the Kalinga war and saw the bloodshed."
    },
    {
        "question": "Ashoka felt that he should teach his subjects about:",
        "options": ["How to build better weapons", "Dhamma so that they can live in peace and harmony", "How to conquer other lands", "The Greek language"],
        "answer": 1,
        "explanation": "He felt that just as a father tries to teach his children, he had a duty to instruct his subjects about Dhamma."
    },
    {
        "question": "Which of the following was a problem Ashoka wanted to solve using Dhamma?",
        "options": ["Animal sacrifices and ill-treatment of slaves/servants", "Lack of gold in the treasury", "Poor agricultural yield", "Too many schools"],
        "answer": 0,
        "explanation": "People in the empire followed different religions, animals were sacrificed, slaves and servants were ill treated, and there were quarrels in families. Ashoka felt it was his duty to solve these problems."
    },
    {
        "question": "To spread Dhamma, Ashoka sent messengers to countries like:",
        "options": ["Egypt", "America", "Australia", "Japan"],
        "answer": 0,
        "explanation": "Ashoka also sent messengers to spread ideas about dhamma to other lands, such as Syria, Egypt, Greece and Sri Lanka."
    },
    {
        "question": "What did Ashoka do for the welfare of his people and animals?",
        "options": ["He built iron factories", "He dug wells, built roads, and arranged for medical treatment", "He forced everyone to join the army", "He built giant pyramids"],
        "answer": 1,
        "explanation": "Besides teaching Dhamma, Ashoka built roads, dug wells, and built rest houses. Besides, he arranged for medical treatment for both human beings and animals."
    },
    {
        "question": "Ashoka's messages to his subjects asked them to:",
        "options": ["Respect their elders and treat all creatures with compassion", "Worship him as a god", "Attack neighboring kingdoms", "Stop paying taxes"],
        "answer": 0,
        "explanation": "His messages asked people to be gentle with slaves and servants, respect one's elders, and treat all creatures with compassion."
    },
    {
        "question": "The Rampurva bull, which was originally part of an Ashokan pillar, is now placed in:",
        "options": ["The British Museum", "Rashtrapati Bhavan", "The Louvre", "The Indian Museum, Kolkata"],
        "answer": 1,
        "explanation": "The Rampurva bull, a finely polished stone sculpture, was part of a Mauryan pillar found in Rampurva, Bihar, and has now been placed in Rashtrapati Bhavan."
    },
    {
        "question": "The lions that we see on our notes and coins have a long history. They were carved in stone and placed on top of a massive stone pillar at:",
        "options": ["Sanchi", "Sarnath", "Mathura", "Bodh Gaya"],
        "answer": 1,
        "explanation": "The lions we see on notes and coins were carved in stone, and placed on top of a massive stone pillar at Sarnath."
    },
    {
        "question": "Brahmi is the mother of several modern Indian scripts. Most modern Indian scripts have developed from:",
        "options": ["The Brahmi script", "Arabic", "Latin", "Chinese"],
        "answer": 0,
        "explanation": "Most modern Indian scripts have developed from the Brahmi script over hundreds of years."
    }
];

const ch8Add = [
    {
        "question": "In the Tamil region, ordinary ploughmen were known as:",
        "options": ["Vellalar", "Uzhavar", "Kadaisiyar", "Adimai"],
        "answer": 1,
        "explanation": "In the Tamil region, large landowners were known as vellalar, ordinary ploughmen were known as uzhavar."
    },
    {
        "question": "Landless labourers, including slaves, in the Tamil region were known as:",
        "options": ["Kadaisiyar and Adimai", "Grama bhojaka", "Dasa karmakara", "Grihapatis"],
        "answer": 0,
        "explanation": "In the Tamil region, landless labourers, including slaves, were known as kadaisiyar and adimai."
    },
    {
        "question": "In the northern part of the country, what was the term for men and women who did not own land and had to earn a living working on others' fields?",
        "options": ["Dasa karmakara", "Grama bhojaka", "Grihapatis", "Uzhavar"],
        "answer": 0,
        "explanation": "Then there were men and women such as the dasa karmakara, who did not own land, and had to earn a living working on the fields owned by others."
    },
    {
        "question": "The grama bhojaka was powerful and often acted as a:",
        "options": ["Judge and sometimes as a policeman", "Religious priest", "General of the army", "Trader"],
        "answer": 0,
        "explanation": "The king often used the grama bhojaka to collect taxes from the village. He also functioned as a judge, and sometimes as a policeman."
    },
    {
        "question": "Which text mentions that 'shrenis' functioned as banks where rich men and women deposited money?",
        "options": ["The Ramayana", "Inscriptions from Mathura", "The Arthashastra", "Jataka tales"],
        "answer": 1,
        "explanation": "Mathura inscriptions or other sources suggest shrenis also served as banks, where rich men and women deposited money."
    },
    {
        "question": "Which city became a major center for the production of fine sculpture around 2000 years ago, and also had shrines for Buddhists, Jainas, and worshipped Krishna?",
        "options": ["Mathura", "Pataliputra", "Ujjain", "Arikamedu"],
        "answer": 0,
        "explanation": "Mathura was a centre where some extremely fine sculpture was produced. It was also a religious centre – there were Buddhist monasteries, Jaina shrines, and it was an important centre for the worship of Krishna."
    },
    {
        "question": "What is the Jataka tales?",
        "options": ["Stories that were probably composed by ordinary people and then written down and preserved by Buddhist monks", "Stories of the Gupta kings", "Greek myths", "Jain philosophical texts"],
        "answer": 0,
        "explanation": "Jatakas were stories that were probably composed by ordinary people, and then written down and preserved by Buddhist monks."
    },
    {
        "question": "The use of iron began in the subcontinent around:",
        "options": ["3000 years ago", "1000 years ago", "5000 years ago", "150 years ago"],
        "answer": 0,
        "explanation": "The use of iron began in the subcontinent around 3000 years ago."
    },
    {
        "question": "Some of the largest collections of iron tools and weapons were found in:",
        "options": ["Harappan cities", "Megalithic burials", "Buddhist stupas", "Painted Grey Ware sites"],
        "answer": 1,
        "explanation": "Some of the largest collections of iron tools and weapons were found in the megalithic burials."
    },
    {
        "question": "Around 2500 years ago, there was evidence of growing use of iron tools, explicitly:",
        "options": ["Axes for clearing forests, and iron ploughshares", "Swords and shields", "Iron chariots", "Iron pillars"],
        "answer": 0,
        "explanation": "Around 2500 years ago, there is evidence for the growing use of iron tools. These included axes for clearing forests, and the iron ploughshare."
    },
    {
        "question": "Along with agriculture, what else was used to increase production?",
        "options": ["Irrigation works like canals, wells, tanks, and artificial lakes", "Importing food", "Using chemical fertilizers", "Forcing everyone to farm"],
        "answer": 0,
        "explanation": "While new tools and the system of transplantation increased production, irrigation was also used. Irrigation works that were built during this time included canals, wells, tanks, and artificial lakes."
    },
    {
        "question": "Ring wells found in many cities were used as:",
        "options": ["Toilets, drains, and garbage dumps", "Drinking water sources", "Swimming pools", "Storage for grain"],
        "answer": 0,
        "explanation": "In many cities, archaeologists have found rows of pots, or ceramic rings arranged one on top of the other. These are known as ring wells. These seem to have been used as toilets in some cases, and as drains and garbage dumps."
    },
    {
        "question": "What were the accounts of sailors and travellers useful for?",
        "options": ["They tell us about the coastal towns and trade, e.g., the story of Barygaza", "They taught Indians how to build ships", "They contained new religious teachings", "They mapped the stars"],
        "answer": 0,
        "explanation": "Accounts of sailors and travellers, such as the Greek sailor who described Barygaza (Bharuch), provide valuable information about ports, imported and exported goods, and coastal towns."
    },
    {
        "question": "The earliest coins which were in use for about 500 years were:",
        "options": ["Gold coins", "Punch-marked coins", "Paper currency", "Iron tokens"],
        "answer": 1,
        "explanation": "The earliest coins which were in use for about 500 years were punch marked coins."
    },
    {
        "question": "Northern Black Polished Ware (NBPW) gets its name because:",
        "options": ["It was made in the North, is usually black, and has a fine polish", "It was used entirely by Northern kings", "It was brought from Northern Europe", "It is made of black soil"],
        "answer": 0,
        "explanation": "Northern Black Polished Ware gets its name from the fact that it is generally found in the northern part of the subcontinent. It is usually black in colour, and has a fine slip."
    },
    {
        "question": "Manufacture of cloth was important. Famous centres for cloth making included:",
        "options": ["Varanasi in the north, and Madurai in the south", "Mathura and Taxila", "Arikamedu and Ujjain", "Pataliputra and Rajagriha"],
        "answer": 0,
        "explanation": "The manufacture of cloth was important. There were famous centres such as Varanasi in the north, and Madurai in the south."
    },
    {
        "question": "According to the rules for spinning and weaving in the Arthashastra, widows, young women who are differently abled, and nuns:",
        "options": ["Were not allowed to work", "Could be employed to process wool, bark, cotton, hemp and flax", "Were forced to fight in the army", "Only worked in gold mines"],
        "answer": 1,
        "explanation": "Arthashastra describes how spinning and weaving could be done in workshops under the supervision of a special official. Widows, young women who are differently abled, nuns, and others could be employed for this."
    }
];

const ch9Add = [
    {
        "question": "During the time of the muvendars, each of the three chiefs had two centres of power:",
        "options": ["One inland and one on the coast", "Both in the mountains", "Both on the coast", "One in India and one in Sri Lanka"],
        "answer": 0,
        "explanation": "Each of the three chiefs had two centres of power: one inland, and one on the coast."
    },
    {
        "question": "Important cities of the muvendars included:",
        "options": ["Puhar (Kaveripattinam) and Madurai", "Ujjain and Taxila", "Pataliputra and Rajagriha", "Mathura and Arikamedu"],
        "answer": 0,
        "explanation": "Of these six cities, two were very important: Puhar or Kaveripattinam, the port of the Cholas, and Madurai, the capital of the Pandyas."
    },
    {
        "question": "Instead of collecting regular taxes, the muvendars:",
        "options": ["Printed paper money", "Demanded and received gifts from the people", "Conquered North India", "Stealed from merchants"],
        "answer": 1,
        "explanation": "The chiefs did not collect regular taxes. Instead, they demanded and received gifts from the people. They also went on military expeditions, and collected tribute."
    },
    {
        "question": "The Satavahanas became powerful in western India around:",
        "options": ["2100 years ago", "500 years ago", "3000 years ago", "1000 years ago"],
        "answer": 0,
        "explanation": "Around 200 years later (after the muvendars), a dynasty known as the Satavahanas became powerful in western India."
    },
    {
        "question": "Gautamiputra Shri Satakarni's achievements are known from an inscription composed on behalf of his mother, named:",
        "options": ["Gautami Balashri", "Kumara Devi", "Prabhavati Gupta", "Yashoda"],
        "answer": 0,
        "explanation": "We know about Gautamiputra Shri Satakarni from an inscription composed on behalf of his mother, Gautami Balashri."
    },
    {
        "question": "The rulers of the Satavahanas were known as lords of the:",
        "options": ["Dakshinapatha", "Aryavarta", "Silk Route", "Arabian Sea"],
        "answer": 0,
        "explanation": "He and other Satavahana rulers were known as lords of the dakshinapatha, literally the route leading to the south, which was also used as a name for the entire southern region."
    },
    {
        "question": "Techniques of making silk were first invented in:",
        "options": ["China", "India", "Rome", "Greece"],
        "answer": 0,
        "explanation": "Techniques of making silk were first invented in China around 7000 years ago."
    },
    {
        "question": "The path followed by people carrying silk to distant lands came to be known as the:",
        "options": ["Spice Route", "Silk Route", "Grand Trunk Road", "Royal Road"],
        "answer": 1,
        "explanation": "Some people from China who went to distant lands on foot, horseback, and on camels, carried silk with them. The paths they followed came to be known as the Silk Route."
    },
    {
        "question": "Kings tried to control large portions of the Silk Route because:",
        "options": ["They could collect taxes, tributes, and gifts from traders", "They wanted to travel the route themselves", "They wanted to destroy the silk", "They loved silk clothes"],
        "answer": 0,
        "explanation": "Some kings tried to control large portions of the route. This was because they could benefit from taxes, tributes and gifts that were brought by traders travelling along the route."
    },
    {
        "question": "The most famous ruler of the Kushanas was:",
        "options": ["Kanishka", "Kadphises", "Ashoka", "Harsha"],
        "answer": 0,
        "explanation": "The most famous Kushana ruler was Kanishka, who ruled around 1900 years ago."
    },
    {
        "question": "The poet who wrote the Buddhacharita, a biography of the Buddha, and lived in Kanishka's court was:",
        "options": ["Ashvaghosha", "Banabhatta", "Harishena", "Kalidasa"],
        "answer": 0,
        "explanation": "Ashvaghosha, a poet who composed a biography of the Buddha, the Buddhacharita, lived in his (Kanishka's) court."
    },
    {
        "question": "A new form of Buddhism developed during the Kushana period, known as:",
        "options": ["Mahayana Buddhism", "Hinayana Buddhism", "Theravada Buddhism", "Zen Buddhism"],
        "answer": 0,
        "explanation": "A new form of Buddhism, known as Mahayana Buddhism, now developed."
    },
    {
        "question": "Two distinct features of Mahayana Buddhism were:",
        "options": ["Making statues of the Buddha, and the belief in Bodhisattvas", "Extreme penance, and animal sacrifices", "Worship of nature, and no temples", "Focus purely on meditation without idols"],
        "answer": 0,
        "explanation": "This had two distinct features. Earlier, the Buddha's presence was shown in sculpture by using certain signs... Now, statues of the Buddha were made. The second change was a belief in Bodhisattvas."
    },
    {
        "question": "Bodhisattvas were:",
        "options": ["Persons who had attained enlightenment but chose to remain in the world to help others", "Foreign invaders", "Rich merchants", "Fierce warriors"],
        "answer": 0,
        "explanation": "These were supposed to be persons who had attained enlightenment. Once they attained enlightenment, they could live in complete isolation and meditate in peace. However, they remained in the world to teach and help other people."
    },
    {
        "question": "The worship of Bodhisattvas became very popular and spread to:",
        "options": ["Central Asia, China, and later to Korea and Japan", "Europe and America", "Africa", "Australia"],
        "answer": 0,
        "explanation": "The worship of Bodhisattvas became very popular, and spread throughout Central Asia, China, and later to Korea and Japan."
    },
    {
        "question": "The older form of Buddhism, known as Theravada Buddhism, was more popular in areas like:",
        "options": ["Sri Lanka, Myanmar, Thailand, and other parts of Southeast Asia", "Tibet and China", "Central Asia", "Rome and Greece"],
        "answer": 0,
        "explanation": "The older form of Buddhism, known as Theravada Buddhism was more popular in these areas (Sri Lanka, Myanmar, Thailand, and other parts of Southeast Asia including Indonesia)."
    },
    {
        "question": "Xuan Zang took back statues of the Buddha and manuscripts over land, but a ship he was on sank. He managed to:",
        "options": ["Save some manuscripts safely, but lost 50 of them", "Learn swimming quickly", "Lose all of his cargo", "Fly back to China"],
        "answer": 0,
        "explanation": "Xuan Zang took back statues of the Buddha and more than 600 manuscripts on the backs of 20 horses. Over 50 manuscripts were lost when the boat on which he was crossing the Indus capsized."
    }
];

global.cbseData["6"].history.mcqs.ch7.push(...ch7Add);
global.cbseData["6"].history.mcqs.ch8.push(...ch8Add);
global.cbseData["6"].history.mcqs.ch9.push(...ch9Add);

let finalContent = 'const cbseData = ' + JSON.stringify(global.cbseData, null, 4) + ';\n';
fs.writeFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', finalContent);
console.log('Done modifying Chapter 7 to 9.');
