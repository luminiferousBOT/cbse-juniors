const fs = require('fs');
let content = fs.readFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', 'utf8');
let evalContent = content.replace('const cbseData =', 'global.cbseData =');
eval(evalContent);

const ch10Add = [
    {
        "question": "Harishena, besides being a poet, held the position of a:",
        "options": ["Maha-danda-nayaka or chief judicial officer", "King", "Trader", "Grama-bhojaka"],
        "answer": 0,
        "explanation": "Besides being a poet, Harishena was a maha-danda-nayaka, or chief judicial officer, like his father."
    },
    {
        "question": "The rulers of Dakshinapatha, who surrendered to Samudragupta after being defeated and were then allowed to rule again, were:",
        "options": ["In twelve number", "Nine", "Only two", "Fifty"],
        "answer": 0,
        "explanation": "There were twelve rulers of Dakshinapatha. They surrendered to Samudragupta after being defeated and he then allowed them to rule again."
    },
    {
        "question": "Which ruler is depicted on coins playing the veena?",
        "options": ["Samudragupta", "Ashoka", "Harsha", "Pulakeshin II"],
        "answer": 0,
        "explanation": "Some of Samudragupta's other qualities are shown on coins such as this one, where he is shown playing the veena."
    },
    {
        "question": "Chandragupta II's court in Ujjain was full of learned people, including the famous poet:",
        "options": ["Kalidasa", "Harishena", "Banabhatta", "Ravikirti"],
        "answer": 0,
        "explanation": "His (Chandragupta II's) court in Ujjain was full of learned people, including Kalidasa the poet, and Aryabhata the astronomer."
    },
    {
        "question": "Harshavardhana ruled nearly:",
        "options": ["1400 years ago", "2500 years ago", "3500 years ago", "500 years ago"],
        "answer": 0,
        "explanation": "Harshavardhana, who ruled nearly 1400 years ago, was one such ruler."
    },
    {
        "question": "Xuan Zang, who spent a lot of time at Harsha's court, left a detailed account of what he saw. He was a pilgrim from:",
        "options": ["China", "Greece", "Rome", "Persia"],
        "answer": 0,
        "explanation": "Xuan Zang... spent a lot of time at Harsha's court and left a detailed account of what he saw."
    },
    {
        "question": "Harsha became the king of Thanesar after the death of:",
        "options": ["His father and elder brother", "Chandragupta II", "Samudragupta", "His son"],
        "answer": 0,
        "explanation": "Harsha was not the eldest son of his father, but became king of Thanesar after both his father and elder brother died."
    },
    {
        "question": "The Pallava kingdom spread from the region around their capital, Kanchipuram, to the:",
        "options": ["Kaveri delta", "Narmada river", "Indus valley", "Himalayas"],
        "answer": 0,
        "explanation": "The kingdom of the Pallavas spread from the region around their capital, Kanchipuram, to the Kaveri delta."
    },
    {
        "question": "The Pallavas and Chalukyas frequently raided one another's lands, especially attacking the:",
        "options": ["Capital cities", "Small villages", "Monasteries", "Seas"],
        "answer": 0,
        "explanation": "The Pallavas and Chalukyas frequently raided one another's lands, especially attacking the capital cities, which were prosperous towns."
    },
    {
        "question": "Ravikirti, who composed a prashasti for Pulakeshin II, was his:",
        "options": ["Court poet", "General", "Brother", "Enemy"],
        "answer": 0,
        "explanation": "The best-known Chalukya ruler was Pulakeshin II. We know about him from a prashasti, composed by his court poet Ravikirti."
    },
    {
        "question": "How did Pulakeshin II get his kingdom?",
        "options": ["According to Ravikirti, he got the kingdom from his uncle", "He fought a dragon", "He inherited it directly from his father", "He bought it"],
        "answer": 0,
        "explanation": "According to him (Ravikirti), he got the kingdom from his uncle."
    },
    {
        "question": "In the administration of these kingdoms, important administrative posts were:",
        "options": ["Often hereditary", "Assigned through democratic voting", "Given only to women", "Bought with gold"],
        "answer": 0,
        "explanation": "Some important administrative posts were now hereditary. This means that sons succeeded fathers to these posts."
    },
    {
        "question": "What was the 'sandhi-vigrahika'?",
        "options": ["A minister of war and peace", "A chief judicial officer", "A village headman", "A type of coin"],
        "answer": 0,
        "explanation": "Besides, one person could hold many offices. For instance, Harishena, besides being a maha-danda-nayaka, was also a kumar-amatya, meaning an important minister, and a sandhi-vigrahika, meaning a minister of war and peace."
    },
    {
        "question": "An assembly of brahmana landowners, functioning through sub-committees (like for irrigation, roads, temples) was known as:",
        "options": ["Sabha", "Ur", "Nagaram", "Shreni"],
        "answer": 0,
        "explanation": "The inscriptions of the Pallavas mention a number of local assemblies. These included the sabha, which was an assembly of brahmana landowners."
    },
    {
        "question": "The 'ur' was a village assembly found in areas where the landowners were:",
        "options": ["Not brahmanas", "Brahmanas", "Kings", "Buddhist monks"],
        "answer": 0,
        "explanation": "And the ur was a village assembly found in areas where the landowners were not brahmanas."
    },
    {
        "question": "The 'nagaram' was an organization of:",
        "options": ["Merchants", "Powerful landlords", "Scribes", "Kings"],
        "answer": 0,
        "explanation": "And the nagaram was an organisation of merchants."
    },
    {
        "question": "Kalidasa is known for his plays depicting life in the king's court. In his plays, while the king and most brahmanas speak Sanskrit, men and women other than them speak:",
        "options": ["Prakrit", "Tamil", "English", "Pali"],
        "answer": 0,
        "explanation": "An interesting feature about these plays is that the king and most brahmanas are shown as speaking Sanskrit, while women and men other than the king and brahmanas use Prakrit."
    }
];

const ch11Add = [
    {
        "question": "The iron pillar at Mehrauli is remarkable because:",
        "options": ["It has not rusted to this day", "It is made of pure gold inside", "It floats in the air", "It was brought from Egypt"],
        "answer": 0,
        "explanation": "It was made about 1500 years ago... What is amazing is the fact that the pillar has not rusted in all these years."
    },
    {
        "question": "The height of the iron pillar at Mehrauli is:",
        "options": ["7.2 m", "15 m", "2 m", "10.5 m"],
        "answer": 0,
        "explanation": "It is made of iron, 7.2.m high, and weighs over 3 tonnes."
    },
    {
        "question": "In a stupa, the small box placed at the centre or base, often containing bodily remains of the Buddha or his followers, is known as a:",
        "options": ["Relic casket", "Garbhagriha", "Mandapa", "Shikhara"],
        "answer": 0,
        "explanation": "At the heart of a stupa is what is often a small box... containing bodily remains of the Buddha or his followers... This is known as a relic casket."
    },
    {
        "question": "Often, a path was laid around the stupa for devotees to walk around it in a clockwise direction as a mark of devotion. This path is known as:",
        "options": ["Pradakshina patha", "Torana", "Gopuram", "Mandapa"],
        "answer": 0,
        "explanation": "Often, a path, known as the pradakshina patha, was laid around the stupa... Devotees walked around the stupa, in a clockwise direction, as a mark of devotion."
    },
    {
        "question": "The railings and gateways around the stupa were often decorated with:",
        "options": ["Sculptures", "Paintings", "Mirrors", "Gold foil"],
        "answer": 0,
        "explanation": "Both railings and gateways were often decorated with sculpture."
    },
    {
        "question": "Which place is known for its magnificent stupa?",
        "options": ["Sanchi", "Pataliputra", "Ujjain", "Mathura"],
        "answer": 0,
        "explanation": "The Great Stupa at Sanchi, Madhya Pradesh. Stupas like this one were built over several centuries."
    },
    {
        "question": "A temple where an entire structure is carved out of a single huge piece of rock is called a:",
        "options": ["Monolithic temple", "Stupa", "Vihara", "Pagoda"],
        "answer": 0,
        "explanation": "Each of these was carved out of a huge, single piece of stone (that is why they are known as monoliths)."
    },
    {
        "question": "Monolithic temples carved out of a single rock were made at:",
        "options": ["Mahabalipuram", "Sanchi", "Amaravati", "Mehrauli"],
        "answer": 0,
        "explanation": "The monolithic temples at Mahabalipuram."
    },
    {
        "question": "The paintings at Ajanta were made in caves hollowed out of the hills. Most of these were:",
        "options": ["Monasteries for Buddhist monks", "Palaces for kings", "Market places", "Hideouts for spies"],
        "answer": 0,
        "explanation": "Ajanta is a place where several caves were hollowed out of the hills over centuries. Most of these were monasteries for Buddhist monks, and some of them were decorated with paintings."
    },
    {
        "question": "The colours used in the Ajanta paintings, which are still vivid after 1500 years, were made of:",
        "options": ["Plants and minerals", "Synthetic chemicals", "Oil paints", "Crushed pearls"],
        "answer": 0,
        "explanation": "The colours, which are vivid even after 1500 years, were made of plants and minerals."
    },
    {
        "question": "'Epics' are generally:",
        "options": ["Grand, long compositions about heroic men and women", "Short 4-line poems about nature", "Songs for harvesting crops", "Scientific textbooks"],
        "answer": 0,
        "explanation": "Epics are grand, long compositions, about heroic men and women, and include stories about gods."
    },
    {
        "question": "The Silappadikaram tells the story of a merchant named Kovalan, who lived in Puhar and fell in love with a courtesan named:",
        "options": ["Madhavi", "Kannagi", "Sita", "Draupadi"],
        "answer": 0,
        "explanation": "It is the story of a merchant named Kovalan, who lived in Puhar and fell in love with a courtesan named Madhavi, neglecting his wife Kannagi."
    },
    {
        "question": "The Mahabharata is an epic about a war fought between:",
        "options": ["The Kauravas and Pandavas", "The Mauryas and Guptas", "The Cholas and Pandyas", "The Aryans and Harappans"],
        "answer": 0,
        "explanation": "The Mahabharata is about a war fought between the Kauravas and Pandavas, who were cousins."
    },
    {
        "question": "Which famous text, containing the teachings of Lord Krishna to Arjuna, is included in the Mahabharata?",
        "options": ["Bhagavad Gita", "Ramayana", "Rigveda", "Upanishads"],
        "answer": 0,
        "explanation": "The Mahabharata is a story about a war between cousins... It also includes the Bhagavad Gita."
    },
    {
        "question": "The Ramayana is an epic about Rama, a prince of Kosala, whose wife Sita was abducted by the king of Lanka named:",
        "options": ["Ravana", "Duryodhana", "Kansa", "Vali"],
        "answer": 0,
        "explanation": "The Ramayana is about Rama, a prince of Kosala, who was sent into exile. His wife Sita was abducted by the king of Lanka, named Ravana."
    },
    {
        "question": "Stories, poems, and songs composed by ordinary men and women have survived in collections like:",
        "options": ["The Jatakas and the Panchatantra", "The Vedas and Upanishads", "The Puranas", "The Arthashastra"],
        "answer": 0,
        "explanation": "Ordinary people also told stories, composed poems and songs... Some of these are preserved in collections of stories such as the Jatakas and the Panchatantra."
    },
    {
        "question": "Two famous mathematicians and astronomers of ancient India, besides Aryabhata, were:",
        "options": ["Varahamihira and Brahmagupta", "Charaka and Sushruta", "Kalidasa and Banabhatta", "Valmiki and Vyasa"],
        "answer": 0,
        "explanation": "Varahamihira, Brahmagupta and Bhaskaracharya were some other mathematicians and astronomers who made several discoveries."
    }
];

global.cbseData["6"].history.mcqs.ch10.push(...ch10Add);
global.cbseData["6"].history.mcqs.ch11.push(...ch11Add);

let finalContent = 'const cbseData = ' + JSON.stringify(global.cbseData, null, 4) + ';\n';
fs.writeFileSync('c:/Users/dell/Desktop/mcqs/js/data.js', finalContent);
console.log('Done modifying Chapter 10 and 11.');
