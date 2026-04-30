import type { Word } from '@/types'

export const dailyLifeWords: Word[] = [
  // ── Shopping & Errands ──────────────────────────────────────────────────
  {
    id: 'dl_001', phrase: 'pick up', meaning: 'recoger / pasar a buscar algo o a alguien',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Can you ___ ___ some milk on your way home?', blank: 'pick up', context: 'Shopping errand' },
      { text: 'I need to ___ ___ my dry cleaning today.', blank: 'pick up', context: 'Errand' }
    ],
    hints: ['It means to collect or buy something casually', 'ph___ u_', 'Collect / grab / get']
  },
  {
    id: 'dl_002', phrase: 'run out of', meaning: 'quedarse sin / agotar existencias de algo',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "We've ___ ___ ___ coffee — can you add it to the list?", blank: 'run out of', context: 'Home supplies' },
      { text: 'I ___ ___ ___ data on my phone.', blank: 'ran out of', context: 'Mobile data' }
    ],
    hints: ['When you have zero left of something', 'r__ o__ o_', 'Have no more of / used up all of']
  },
  {
    id: 'dl_003', phrase: 'in a hurry', meaning: 'con prisa / apurado',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Sorry, I can't talk — I'm ___ _ _____.", blank: 'in a hurry', context: 'Busy moment' },
      { text: 'She left ___ _ _____ and forgot her keys.', blank: 'in a hurry', context: 'Rushed departure' }
    ],
    hints: ['You say this when you\'re late or have no time', 'i_ _ h_____', 'Rushed / pressed for time']
  },
  {
    id: 'dl_004', phrase: 'make an appointment', meaning: 'sacar / pedir una cita',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'I need to ____ __ ____________ with the doctor.', blank: 'make an appointment', context: 'Medical' },
      { text: 'Did you ____ __ ____________ at the hair salon?', blank: 'make an appointment', context: 'Personal care' }
    ],
    hints: ['You do this to schedule a meeting with a professional', 'm___ a_ a___________', 'Schedule / book a time slot']
  },
  {
    id: 'dl_005', phrase: 'split the bill', meaning: 'dividir la cuenta / pagar cada uno lo suyo',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Shall we _____ ___ ____?", blank: 'split the bill', context: 'Restaurant' },
      { text: 'We usually _____ ___ ____ when we go out.', blank: 'split the bill', context: 'Social dining' }
    ],
    hints: ['Common phrase when paying at a restaurant with friends', 's____ t__ b___', 'Go Dutch / each pay half']
  },
  {
    id: 'dl_006', phrase: 'take turns', meaning: 'turnarse / hacer algo uno por uno',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'The kids ____ _____ playing with the toy.', blank: 'took turns', context: 'Children playing' },
      { text: 'We should ____ _____ doing the dishes.', blank: 'take turns', context: 'Household chores' }
    ],
    hints: ['Do something one after another in rotation', 't___ t____', 'Alternate / rotate who does it']
  },
  {
    id: 'dl_007', phrase: 'keep an eye on', meaning: 'vigilar / prestar atención a',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Can you ____ __ ___ __ my bag while I use the restroom?', blank: 'keep an eye on', context: 'Watching belongings' },
      { text: 'The doctor said to ____ __ ___ __ his blood pressure.', blank: 'keep an eye on', context: 'Health monitoring' }
    ],
    hints: ['Watch over something or someone carefully', 'k___ a_ e__ o_', 'Watch / monitor / look after']
  },
  {
    id: 'dl_008', phrase: 'drop off', meaning: 'dejar a alguien / entregar algo en un lugar',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Can you ____ __ the kids at school?', blank: 'drop off', context: 'School run' },
      { text: 'I\'ll ____ __ the package on my way to work.', blank: 'drop off', context: 'Delivery' }
    ],
    hints: ['Leave someone or something at a place briefly', 'd___ o__', 'Deliver / leave off / bring']
  },
  {
    id: 'dl_009', phrase: 'fill in a form', meaning: 'llenar / completar un formulario',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'You need to ____ __ _ ____ at the reception desk.', blank: 'fill in a form', context: 'Administrative' },
      { text: 'Please ____ __ ___ ____ with your personal details.', blank: 'fill in the form', context: 'Paperwork' }
    ],
    hints: ['Complete a document with required information', 'f___ i_ a f___', 'Complete / fill out paperwork']
  },
  {
    id: 'dl_010', phrase: 'give someone a lift', meaning: 'llevar a alguien en coche / dar un aventón',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Could you ____ __ _ _____ to the station?', blank: 'give me a lift', context: 'Transport favour' },
      { text: 'She ____ him _ _____ to the airport.', blank: 'gave him a lift', context: 'Transport favour' }
    ],
    hints: ['Offer to drive someone somewhere', 'g___ s_______ a l____', 'Drive someone / take someone by car']
  },
  {
    id: 'dl_011', phrase: 'be out of order', meaning: 'estar averiado / fuera de servicio (máquina)',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'The elevator is __ ___ __ _____ — please use the stairs.', blank: 'out of order', context: 'Building notice' },
      { text: 'The ATM was __ ___ __ _____ all morning.', blank: 'out of order', context: 'Bank machine' }
    ],
    hints: ['What you say when a machine is broken and not working', 'o__ o_ o____', 'Broken / not working / down']
  },
  {
    id: 'dl_012', phrase: 'under the weather', meaning: 'sentirse mal / indispuesto / no estar bien',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "I'm feeling a bit _____ ___ _______ today — I think I'll skip the gym.", blank: 'under the weather', context: 'Feeling ill' },
      { text: 'She looks _____ ___ _______ — maybe she caught a cold.', blank: 'under the weather', context: 'Observing someone' }
    ],
    hints: ['An idiom meaning you don\'t feel well', 'u____ t__ w______', 'Not feeling well / slightly ill']
  },
  {
    id: 'dl_013', phrase: 'on the go', meaning: 'en movimiento / ocupado constantemente / al paso',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I\'ve been __ ___ __ all day and haven\'t had a chance to eat.', blank: 'on the go', context: 'Busy day' },
      { text: 'This coffee maker is perfect for people who are always __ ___ ___.', blank: 'on the go', context: 'Product marketing' }
    ],
    hints: ['Describes being very busy and always moving', 'o_ t__ g_', 'Always busy / constantly active']
  },
  {
    id: 'dl_014', phrase: 'settle in', meaning: 'adaptarse / instalarse en un nuevo lugar',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'It took a few weeks to ______ __ after moving to the new city.', blank: 'settle in', context: 'Relocation' },
      { text: 'How are you _________ __? Is the new apartment comfortable?', blank: 'settling in', context: 'Checking on someone' }
    ],
    hints: ['Get comfortable and used to a new home or environment', 's_____ i_', 'Get used to / get comfortable in']
  },
  {
    id: 'dl_015', phrase: 'sort out', meaning: 'resolver / organizar / arreglar algo',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'I need to ____ ___ my wardrobe this weekend.', blank: 'sort out', context: 'Home organization' },
      { text: 'Can you ____ ___ the problem with the internet connection?', blank: 'sort out', context: 'Technical issue' }
    ],
    hints: ['Deal with a problem or organize things properly', 's___ o__', 'Fix / organize / deal with / resolve']
  },
  {
    id: 'dl_016', phrase: 'set aside', meaning: 'apartar / reservar (tiempo o dinero) para algo',
    level: 'B2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Try to ___ _____ some time each day to read.', blank: 'set aside', context: 'Time management' },
      { text: 'We should ___ _____ $200 a month for emergencies.', blank: 'set aside', context: 'Personal finance' }
    ],
    hints: ['Reserve or save something for a specific purpose', 's__ a____', 'Reserve / save / put away']
  },
  {
    id: 'dl_017', phrase: 'go through', meaning: 'revisar en detalle / pasar por una situación difícil',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Let me __ _______ the instructions one more time.', blank: 'go through', context: 'Reviewing steps' },
      { text: 'She\'s been ______ _______ a lot lately — be kind to her.', blank: 'going through', context: 'Difficult period' }
    ],
    hints: ['Check carefully, or experience a difficult situation', 'g_ t______', 'Review / experience / examine']
  },
  {
    id: 'dl_018', phrase: 'fall behind', meaning: 'quedarse atrás / atrasarse',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Don't ____ _______ on your payments or you'll get charged fees.", blank: 'fall behind', context: 'Bills' },
      { text: 'She ____ _______ with her studies during the holidays.', blank: 'fell behind', context: 'School' }
    ],
    hints: ['Not keep up / lose progress relative to others or a schedule', 'f___ b_____', 'Lag behind / get delayed / slip back']
  },
  {
    id: 'dl_019', phrase: 'catch up', meaning: 'ponerse al día / alcanzar a alguien después de un tiempo',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Let's _____ __ over coffee — it's been ages!", blank: 'catch up', context: 'Meeting a friend' },
      { text: 'I need to _____ __ on the emails I missed while on vacation.', blank: 'catch up', context: 'Work after holiday' }
    ],
    hints: ['Meet or reconnect with someone, or bring yourself up to date', 'c_____ u_', 'Reconnect / get up to date']
  },
  {
    id: 'dl_020', phrase: 'look into', meaning: 'investigar / averiguar sobre algo',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "I'll ____ ____ the best route before we leave.", blank: 'look into', context: 'Travel planning' },
      { text: 'The manager said she would ____ ____ the complaint.', blank: 'look into', context: 'Customer service' }
    ],
    hints: ['Research or investigate something more closely', 'l___ i____', 'Investigate / research / check out']
  },
  {
    id: 'dl_021', phrase: 'hold on', meaning: 'esperar un momento / aguantar',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "____ ___ — let me check my calendar.", blank: 'Hold on', context: 'Phone call' },
      { text: 'Can you ____ __ for a second? I forgot my wallet.', blank: 'hold on', context: 'Asking to wait' }
    ],
    hints: ['Wait a moment or grip something tightly', 'h___ o_', 'Wait / hang on / pause']
  },
  {
    id: 'dl_022', phrase: 'turn up', meaning: 'aparecer / llegar (generalmente inesperadamente)',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'He ____ __ at the party without being invited.', blank: 'turned up', context: 'Social event' },
      { text: 'My missing keys ____ __ in my coat pocket.', blank: 'turned up', context: 'Lost item found' }
    ],
    hints: ['Appear or arrive, often unexpectedly', 't___ u_', 'Show up / appear / arrive']
  },
  {
    id: 'dl_023', phrase: 'put off', meaning: 'posponer / aplazar algo; también disuadir',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "Stop _______ ___ the dentist — just call them!", blank: 'putting off', context: 'Procrastinating' },
      { text: 'The bad reviews ____ me ___ from buying it.', blank: 'put / off', context: 'Deterred from a purchase' }
    ],
    hints: ['Delay something you should do, or cause someone to lose interest', 'p__ o__', 'Postpone / delay / discourage']
  },
  {
    id: 'dl_024', phrase: 'get rid of', meaning: 'deshacerse de algo / tirar / eliminar',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "I need to ___ ___ __ all these old magazines.", blank: 'get rid of', context: 'Decluttering' },
      { text: 'How do you ___ ___ __ a headache quickly?', blank: 'get rid of', context: 'Health' }
    ],
    hints: ['Remove or throw away something you no longer want', 'g__ r__ o_', 'Throw away / discard / remove / eliminate']
  },
  {
    id: 'dl_025', phrase: 'bring up', meaning: 'mencionar (un tema); también criar a un hijo',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Don\'t _____ __ the salary issue at the first interview.', blank: 'bring up', context: 'Job interview advice' },
      { text: 'She was _______ __ by her grandparents.', blank: 'brought up', context: 'Upbringing' }
    ],
    hints: ['Introduce a topic in conversation, or raise a child', 'b_____ u_', 'Mention / raise a topic / rear (a child)']
  },
  {
    id: 'dl_026', phrase: 'pay attention', meaning: 'prestar atención / estar atento',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'Please ___ _________ — this part is important.', blank: 'pay attention', context: 'Classroom / meeting' },
      { text: 'I wasn\'t _______ _________ and missed the announcement.', blank: 'paying attention', context: 'Distracted' }
    ],
    hints: ['Focus your mind and listen or watch carefully', 'p__ a________', 'Focus / concentrate / listen carefully']
  },
  {
    id: 'dl_027', phrase: 'no wonder', meaning: 'no es de extrañar / con razón',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'You worked 12 hours? __ _______ you\'re exhausted.', blank: 'No wonder', context: 'Sympathy' },
      { text: '__ _______ the bus was late — there\'s roadwork on the main street.', blank: 'No wonder', context: 'Explanation' }
    ],
    hints: ['Used when something is obvious given the circumstances', 'N_ w_____', 'It\'s obvious / it makes sense / unsurprising']
  },
  {
    id: 'dl_028', phrase: 'come across', meaning: 'encontrar por casualidad; también dar cierta impresión',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I ____ ______ an old photo album while cleaning the attic.', blank: 'came across', context: 'Found unexpectedly' },
      { text: 'He ____ ______ as confident and professional.', blank: 'comes across', context: 'First impressions' }
    ],
    hints: ['Find something by chance, or seem a certain way to others', 'c___ a_____', 'Stumble upon / find / seem / appear']
  },
  {
    id: 'dl_029', phrase: 'out of the blue', meaning: 'de la nada / inesperadamente / sin previo aviso',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'He called me ___ __ ___ ____ after three years of silence.', blank: 'out of the blue', context: 'Unexpected contact' },
      { text: 'The resignation came completely ___ __ ___ ____.', blank: 'out of the blue', context: 'Surprising news' }
    ],
    hints: ['Something that happens with no warning or expectation', 'o__ o_ t__ b___', 'Unexpectedly / without warning / out of nowhere']
  },
  {
    id: 'dl_030', phrase: 'go hand in hand', meaning: 'ir de la mano / estar estrechamente relacionados',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Good nutrition and exercise ___ ____ __ ____.', blank: 'go hand in hand', context: 'Health advice' },
      { text: 'Stress and poor sleep often ___ ____ __ ____.', blank: 'go hand in hand', context: 'Lifestyle' }
    ],
    hints: ['Two things that naturally occur or belong together', 'g_ h___ i_ h___', 'Go together / be linked / be closely connected']
  },
  // ── Home & Routines ────────────────────────────────────────────────────
  {
    id: 'dl_031', phrase: 'tidy up', meaning: 'ordenar / limpiar y organizar un espacio',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'Please _____ __ your room before dinner.', blank: 'tidy up', context: 'Parenting' },
      { text: 'We need to _____ __ the office before the clients arrive.', blank: 'tidy up', context: 'Work' }
    ],
    hints: ['Clean and organize a space', 't___ u_', 'Clean up / organize / neaten']
  },
  {
    id: 'dl_032', phrase: 'wear out', meaning: 'desgastarse (ropa, objeto); agotar a alguien',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'These shoes will ____ ___ quickly if you run in them every day.', blank: 'wear out', context: 'Footwear' },
      { text: 'Looking after three kids all day ____ her ___.', blank: 'wore / out', context: 'Exhaustion' }
    ],
    hints: ['Become damaged through heavy use, or make someone very tired', 'w___ o__', 'Get worn / exhaust / use up']
  },
  {
    id: 'dl_033', phrase: 'give it a shot', meaning: 'intentarlo / darle una oportunidad',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "I've never cooked Thai food before, but I'll ____ __ _ ___.", blank: 'give it a shot', context: 'Trying something new' },
      { text: 'Why not ____ __ _ ___? The worst that can happen is it doesn\'t work.', blank: 'give it a shot', context: 'Encouragement' }
    ],
    hints: ['Try something even if you\'re not sure it will work', 'g___ i_ a s___', 'Give it a try / attempt it / have a go']
  },
  {
    id: 'dl_034', phrase: 'under pressure', meaning: 'bajo presión / con mucho estrés o exigencia',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'She performs well even when she\'s _____ ________.', blank: 'under pressure', context: 'Work or exams' },
      { text: 'He made that mistake because he was _____ ________.', blank: 'under pressure', context: 'Stressful situation' }
    ],
    hints: ['Experiencing stress or urgency to perform', 'u____ p_______', 'Stressed / pressured / in a high-stakes situation']
  },
  {
    id: 'dl_035', phrase: 'make the most of', meaning: 'aprovechar al máximo algo',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "We only have two days in Paris — let's ____ ___ ____ __ it.", blank: 'make the most of', context: 'Travel' },
      { text: 'You should ____ ___ ____ __ every opportunity you get.', blank: 'make the most of', context: 'Life advice' }
    ],
    hints: ['Use an opportunity, situation, or resource as fully as possible', 'm___ t__ m___ o_', 'Maximize / take full advantage of / enjoy fully']
  },
  // More daily life words...
  {
    id: 'dl_036', phrase: 'take it easy', meaning: 'tomárselo con calma / descansar / relajarse',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'The doctor told me to ____ __ ____ for a few days.', blank: 'take it easy', context: 'Medical advice' },
      { text: '____ __ ____ — you\'ve been working too hard lately.', blank: 'Take it easy', context: 'Friendly advice' }
    ],
    hints: ['Relax and not work so hard', 't___ i_ e___', 'Relax / rest / slow down / chill out']
  },
  {
    id: 'dl_037', phrase: 'work out', meaning: 'hacer ejercicio; también resolverse / funcionar',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'I try to ____ ___ at the gym three times a week.', blank: 'work out', context: 'Fitness' },
      { text: "I'm sure it'll all ____ ___ in the end.", blank: 'work out', context: 'Optimism about a situation' }
    ],
    hints: ['Exercise, or result in a good outcome', 'w___ o__', 'Exercise / exercise / resolve itself / go well']
  },
  {
    id: 'dl_038', phrase: 'hang out', meaning: 'pasar el tiempo de forma relajada con alguien',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: "Do you want to ____ ___ this weekend?", blank: 'hang out', context: 'Social plans' },
      { text: 'We used to ____ ___ at the park every afternoon.', blank: 'hang out', context: 'Childhood memories' }
    ],
    hints: ['Spend time casually with friends with no particular plan', 'h___ o__', 'Spend time / socialize / chill with someone']
  },
  {
    id: 'dl_039', phrase: 'feel like', meaning: 'tener ganas de / sentir deseos de hacer algo',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I ____ ____ pizza tonight — what about you?', blank: 'feel like', context: 'Food preference' },
      { text: 'I don\'t ____ ____ going out. Let\'s stay home.', blank: 'feel like', context: 'Social plans' }
    ],
    hints: ['Want to do or have something in this moment', 'f___ l___', 'Want / crave / be in the mood for']
  },
  {
    id: 'dl_040', phrase: 'cut down on', meaning: 'reducir / disminuir el consumo de algo',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The doctor advised him to ___ _____ __ red meat.', blank: 'cut down on', context: 'Diet advice' },
      { text: "I'm trying to ___ _____ __ screen time before bed.", blank: 'cut down on', context: 'Healthy habit' }
    ],
    hints: ['Reduce the amount of something you do or consume', 'c__ d___ o_', 'Reduce / lessen / consume less of']
  },
  // ── Social & Relationships ──────────────────────────────────────────────
  {
    id: 'dl_041', phrase: 'get along with', meaning: 'llevarse bien con alguien',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Do you ___ _____ ____ your new roommate?', blank: 'get along with', context: 'Living situation' },
      { text: 'She ____ _____ with everyone at the office.', blank: 'gets along with', context: 'Workplace' }
    ],
    hints: ['Have a friendly, harmonious relationship with someone', 'g__ a____ w___', 'Get on with / be friendly with / like each other']
  },
  {
    id: 'dl_042', phrase: 'fall out with', meaning: 'pelearse / tener una disputa con alguien',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I ____ ___ ____ my best friend over something silly.', blank: 'fell out with', context: 'Friendship conflict' },
      { text: 'They ____ ___ ____ each other and stopped speaking.', blank: 'fell out with', context: 'Relationship breakdown' }
    ],
    hints: ['Have an argument and stop being friendly with someone', 'f___ o__ w___', 'Argue with / have a falling out / stop being friends']
  },
  {
    id: 'dl_043', phrase: 'make up', meaning: 'reconciliarse; también inventar algo (historia)',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "After the argument, they hugged and ____ ___.", blank: 'made up', context: 'Reconciliation' },
      { text: 'He ____ __ a story about why he was late.', blank: 'made up', context: 'Lying / inventing' }
    ],
    hints: ['Reconcile after an argument, or invent a story', 'm___ u_', 'Reconcile / make peace / invent / fabricate']
  },
  {
    id: 'dl_044', phrase: 'look up to', meaning: 'admirar a alguien / verlo como un modelo',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Children ____ __ __ their parents and teachers.', blank: 'look up to', context: 'Role models' },
      { text: 'I\'ve always ____ __ __ her for her courage.', blank: 'looked up to', context: 'Admiration' }
    ],
    hints: ['Admire and respect someone', 'l___ u_ t_', 'Admire / respect / idolize / see as a role model']
  },
  {
    id: 'dl_045', phrase: 'stand up for', meaning: 'defender a alguien o algo / apoyar una causa',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'You need to _____ __ ___ yourself.', blank: 'stand up for', context: 'Self-confidence' },
      { text: 'She always ______ __ ___ people who are treated unfairly.', blank: 'stands up for', context: 'Social justice' }
    ],
    hints: ['Defend or support someone or a principle', 's____ u_ f__', 'Defend / support / advocate for']
  },
  // ── Numbers 046–300 continued... ───────────────────────────────────────
  {
    id: 'dl_046', phrase: 'step up', meaning: 'intensificar esfuerzos / asumir más responsabilidad',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We need to ____ __ our efforts if we want to finish on time.", blank: 'step up', context: 'Work urgency' },
      { text: 'When the manager left, she _______ __ and took charge.', blank: 'stepped up', context: 'Leadership' }
    ],
    hints: ['Increase effort or take more responsibility', 's___ u_', 'Increase / take charge / do more']
  },
  {
    id: 'dl_047', phrase: 'back down', meaning: 'ceder / retractarse de una posición',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'He refused to ____ _____ despite the pressure.', blank: 'back down', context: 'Negotiation' },
      { text: 'She eventually ____ _____ and apologized.', blank: 'backed down', context: 'Conflict resolution' }
    ],
    hints: ['Withdraw from a position or argument under pressure', 'b___ d___', 'Give in / yield / retreat / concede']
  },
  {
    id: 'dl_048', phrase: 'draw the line', meaning: 'poner un límite / no tolerar algo',
    level: 'B2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "You should ____ ___ ____ at working on weekends.", blank: 'draw the line', context: 'Work-life balance' },
      { text: 'I don\'t mind criticism, but I ____ ___ ____ at personal insults.', blank: 'draw the line', context: 'Limits' }
    ],
    hints: ['Decide what is acceptable and refuse to go further', 'd___ t__ l___', 'Set a limit / refuse to go further / set a boundary']
  },
  {
    id: 'dl_049', phrase: 'over the top', meaning: 'excesivo / exagerado / demasiado ostentoso',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The decorations were a bit ____ ___ ____ for a birthday party.', blank: 'over the top', context: 'Party planning' },
      { text: "His reaction was totally ____ ___ ____ — it wasn't a big deal.", blank: 'over the top', context: 'Overreaction' }
    ],
    hints: ['More extreme than is acceptable or necessary', 'o___ t__ t___', 'Excessive / exaggerated / too much / OTT']
  },
  {
    id: 'dl_050', phrase: 'get the hang of', meaning: 'cogerle el truco a algo / aprender cómo funciona',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "Don't worry — you'll ___ ___ ____ __ the new software soon.", blank: 'get the hang of', context: 'Learning a tool' },
      { text: 'I never quite ___ ___ ____ __ driving a manual car.', blank: 'got the hang of', context: 'Skill' }
    ],
    hints: ['Learn how to do something through practice', 'g__ t__ h___ o_', 'Learn the trick / get used to / master']
  },
  // ── Feelings & Mental States ────────────────────────────────────────────
  {
    id: 'dl_051', phrase: 'fed up with', meaning: 'harto de / cansado de algo',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "I'm ___ __ ____ waiting — let's just leave.", blank: 'fed up with', context: 'Impatience' },
      { text: 'She was ___ __ ____ the constant noise from the neighbors.', blank: 'fed up with', context: 'Annoyance' }
    ],
    hints: ['Completely tired of or annoyed by something', 'f__ u_ w___', 'Tired of / sick of / annoyed with']
  },
  {
    id: 'dl_052', phrase: 'wound up', meaning: 'estresado / alterado / tenso emocionalmente',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Don't get so ______ __ about small things.", blank: 'wound up', context: 'Stress management' },
      { text: 'She was so ______ __ before the presentation.', blank: 'wound up', context: 'Pre-event nerves' }
    ],
    hints: ['Tense, anxious, or stressed out', 'w_____ u_', 'Anxious / tense / stressed / worked up']
  },
  {
    id: 'dl_053', phrase: 'on edge', meaning: 'nervioso / tenso / en estado de alerta',
    level: 'B2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "Everyone in the office was __ ____ waiting for the announcement.", blank: 'on edge', context: 'Workplace anxiety' },
      { text: 'The constant noise kept me __ ____ all night.', blank: 'on edge', context: 'Sleeplessness' }
    ],
    hints: ['Nervous and unable to relax', 'o_ e___', 'Tense / nervous / anxious / uneasy']
  },
  {
    id: 'dl_054', phrase: 'come to terms with', meaning: 'aceptar algo difícil / hacerse a la idea',
    level: 'B2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'It took her a long time to ____ __ _____ ____ the loss.', blank: 'come to terms with', context: 'Grief' },
      { text: 'He had to ____ __ _____ ____ the fact that he didn\'t get the job.', blank: 'come to terms with', context: 'Disappointment' }
    ],
    hints: ['Accept a difficult situation after going through an emotional process', 'c___ t_ t____ w___', 'Accept / make peace with / reconcile oneself to']
  },
  {
    id: 'dl_055', phrase: 'pull through', meaning: 'superar una crisis / recuperarse de algo grave',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The doctors say she should ____ _______ if she rests.', blank: 'pull through', context: 'Medical recovery' },
      { text: 'The company ______ _______ the recession.', blank: 'pulled through', context: 'Business survival' }
    ],
    hints: ['Survive or recover from a serious difficulty', 'p___ t______', 'Recover / survive / get through / overcome']
  },
  // ── Transport & Travel ─────────────────────────────────────────────────
  {
    id: 'dl_056', phrase: 'check in', meaning: 'registrarse / hacer el check-in (hotel, aeropuerto)',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'We need to _____ __ at the airport two hours before the flight.', blank: 'check in', context: 'Air travel' },
      { text: "The hotel says we can't _____ __ before 3 PM.", blank: 'check in', context: 'Hotel arrival' }
    ],
    hints: ['Register your arrival at an airport or hotel', 'c____ i_', 'Register / sign in / arrive officially']
  },
  {
    id: 'dl_057', phrase: 'miss the bus', meaning: 'perder el autobús / llegar tarde y no alcanzarlo',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'I overslept and ____ ___ ___.', blank: 'missed the bus', context: 'Morning commute' },
      { text: "If you don't hurry, you'll ____ ___ ___.", blank: 'miss the bus', context: 'Urgency' }
    ],
    hints: ['Arrive too late and fail to board the bus', 'm___ t__ b__', 'Fail to catch / arrive too late for']
  },
  {
    id: 'dl_058', phrase: 'get a move on', meaning: 'darse prisa / apurarse',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: '____ _ ____ __ — we\'re going to be late!', blank: 'Get a move on', context: 'Running late' },
      { text: "If you don't ___ _ ____ ___, we'll miss the train.", blank: 'get a move on', context: 'Urgency' }
    ],
    hints: ['Used to tell someone to hurry up', 'g__ a m___ o_', 'Hurry up / get going / speed up']
  },
  {
    id: 'dl_059', phrase: 'take a detour', meaning: 'tomar una ruta alternativa / desviarse del camino',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We had to ____ _ ______ because of the road closure.", blank: 'take a detour', context: 'Driving' },
      { text: "Let's ____ _ ______ through the park on the way home.", blank: 'take a detour', context: 'Walking' }
    ],
    hints: ['Choose a longer or different route to avoid an obstacle', 't___ a d______', 'Go a different way / take an alternate route']
  },
  {
    id: 'dl_060', phrase: 'get stuck in traffic', meaning: 'quedarse atascado en el tráfico',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "Sorry I'm late — I ___ _____ __ _______.", blank: 'got stuck in traffic', context: 'Arriving late' },
      { text: "We'll ___ _____ __ _______ if we leave at 5 PM.", blank: 'get stuck in traffic', context: 'Traffic warning' }
    ],
    hints: ['Be trapped in slow or stopped traffic', 'g__ s____ i_ t_____', 'Be caught in a traffic jam / be delayed by traffic']
  },
  // ── Health ─────────────────────────────────────────────────────────────
  {
    id: 'dl_061', phrase: 'come down with', meaning: 'empezar a enfermarse / pillar una enfermedad',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "I think I'm ______ _____ ____ a cold.", blank: 'coming down with', context: 'Early symptoms' },
      { text: 'She ____ _____ ____ the flu last weekend.', blank: 'came down with', context: 'Getting ill' }
    ],
    hints: ['Begin to get sick with an illness', 'c___ d___ w___', 'Get sick with / fall ill with / catch']
  },
  {
    id: 'dl_062', phrase: 'on the mend', meaning: 'recuperándose / mejorando de una enfermedad',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Good news — he's __ ___ ____ after the surgery.", blank: 'on the mend', context: 'Post-surgery update' },
      { text: "She's been __ ___ ____ for a few days now.", blank: 'on the mend', context: 'Recovery from illness' }
    ],
    hints: ['Getting better after being sick or injured', 'o_ t__ m___', 'Recovering / getting better / improving']
  },
  {
    id: 'dl_063', phrase: 'burn out', meaning: 'agotarse por exceso de trabajo / sufrir burnout',
    level: 'B2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'If you keep working 80-hour weeks, you\'ll ____ ___.', blank: 'burn out', context: 'Work overload' },
      { text: 'She ______ ___ and had to take a month off.', blank: 'burned out', context: 'Burnout recovery' }
    ],
    hints: ['Become exhausted and unable to function from overwork or stress', 'b___ o__', 'Exhaust yourself / suffer burnout / collapse from overwork']
  },
  {
    id: 'dl_064', phrase: 'sleep it off', meaning: 'dormir para recuperarse de algo (resaca, cansancio, etc.)',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Just go home and _____ __ ___ — you\'ll feel better tomorrow.', blank: 'sleep it off', context: 'Illness or tiredness' },
      { text: "He drank too much at the party and slept it off the next day.", blank: 'sleep it off', context: 'Hangover' }
    ],
    hints: ['Recover from an unpleasant feeling by sleeping', 's_____ i_ o__', 'Recover by sleeping / sleep through it / rest it off']
  },
  {
    id: 'dl_065', phrase: 'take a toll on', meaning: 'pasarle factura a / afectar negativamente',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Years of stress ______ _ ____ __ his health.', blank: 'took a toll on', context: 'Health impact' },
      { text: 'The long commute is ______ _ ____ __ her energy levels.', blank: 'taking a toll on', context: 'Lifestyle' }
    ],
    hints: ['Have a gradual negative effect on something', 't___ a t___ o_', 'Damage gradually / wear down / have a negative effect on']
  },
  // ── Food & Eating ─────────────────────────────────────────────────────
  {
    id: 'dl_066', phrase: 'grab a bite', meaning: 'comer algo rápido / picar algo',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: "Do you want to _____ _ _____ before the movie?", blank: 'grab a bite', context: 'Pre-activity snack' },
      { text: "I only had time to _____ _ _____ between meetings.", blank: 'grab a bite', context: 'Busy day' }
    ],
    hints: ['Have a quick informal meal or snack', 'g___ a b___', 'Eat a quick snack / have a light meal / get something to eat']
  },
  {
    id: 'dl_067', phrase: 'eat out', meaning: 'comer afuera / ir a un restaurante en vez de cocinar en casa',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Should we cook tonight or ___ ___?", blank: 'eat out', context: 'Dinner plans' },
      { text: "We ___ ___ every Friday as a family tradition.", blank: 'eat out', context: 'Family habit' }
    ],
    hints: ['Go to a restaurant instead of eating at home', 'e__ o__', 'Go to a restaurant / dine out / not cook at home']
  },
  {
    id: 'dl_068', phrase: 'skip a meal', meaning: 'saltarse una comida / no comer en una comida habitual',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "Try not to ____ _________ — it affects your energy.", blank: 'skip a meal', context: 'Nutrition advice' },
      { text: 'I _______ _________ because I was too busy to stop.', blank: 'skipped a meal', context: 'Busy schedule' }
    ],
    hints: ['Not eat one of your regular meals', 's___ a m___', 'Miss a meal / not eat / go without eating']
  },
  {
    id: 'dl_069', phrase: 'dig in', meaning: 'empezar a comer / meterse de lleno en algo',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "The food's ready — everyone ___ ___!", blank: 'dig in', context: 'Serving food' },
      { text: '____ __ — don\'t wait for me.', blank: 'Dig in', context: 'Starting to eat' }
    ],
    hints: ['Start eating enthusiastically', 'd__ i_', 'Start eating / tuck in / help yourself']
  },
  {
    id: 'dl_070', phrase: 'have a sweet tooth', meaning: 'ser goloso / gustarle mucho los dulces',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'She ____ _ _____ _____ — she\'ll never turn down dessert.', blank: 'has a sweet tooth', context: 'Food preferences' },
      { text: 'I ____ _ _____ _____, so I always end up eating more cake than I should.', blank: 'have a sweet tooth', context: 'Personal trait' }
    ],
    hints: ['Love sweet foods and desserts', 'h___ a s____ t____', 'Love sweets / be a dessert lover / crave sweet things']
  },
  // ── Technology (daily) ────────────────────────────────────────────────
  {
    id: 'dl_071', phrase: 'log in', meaning: 'iniciar sesión / entrar a una cuenta',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'You need to ___ __ to access your account.', blank: 'log in', context: 'App access' },
      { text: 'I can\'t ___ __ — I forgot my password.', blank: 'log in', context: 'Account issue' }
    ],
    hints: ['Enter your username and password to access a system', 'l__ i_', 'Sign in / authenticate / access your account']
  },
  {
    id: 'dl_072', phrase: 'back up', meaning: 'hacer una copia de seguridad / respaldar datos',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Always ____ __ your files before updating the software.', blank: 'back up', context: 'Data safety' },
      { text: 'I lost everything because I never ____ __ my photos.', blank: 'backed up', context: 'Data loss' }
    ],
    hints: ['Save a copy of your data in case the original is lost', 'b___ u_', 'Save a copy / make a backup / preserve data']
  },
  {
    id: 'dl_073', phrase: 'reach out', meaning: 'ponerse en contacto / comunicarse con alguien',
    level: 'B1', category: 'Daily Life', source: 'Harvard Business Review',
    sentences: [
      { text: "Feel free to _____ ___ if you have any questions.", blank: 'reach out', context: 'Customer support' },
      { text: "I'll _____ ___ to the team and let them know.", blank: 'reach out', context: 'Work communication' }
    ],
    hints: ['Contact someone, especially to offer or ask for help', 'r_____ o__', 'Contact / get in touch / connect with']
  },
  {
    id: 'dl_074', phrase: 'scroll through', meaning: 'desplazarse / pasar por contenido en pantalla',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I was _________ _______ my feed when I saw the news.', blank: 'scrolling through', context: 'Social media' },
      { text: '_____ _______ the options and pick the one you like.', blank: 'Scroll through', context: 'App navigation' }
    ],
    hints: ['Move up or down through a list or page on a screen', 's_____ t______', 'Browse / swipe through / skim a screen']
  },
  {
    id: 'dl_075', phrase: 'sign up', meaning: 'registrarse / inscribirse en un servicio o evento',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: '____ __ for our newsletter and get 10% off.', blank: 'Sign up', context: 'Marketing' },
      { text: "I haven't ____ __ for the gym yet.", blank: 'signed up', context: 'Membership' }
    ],
    hints: ['Register for a service, event, or platform', 's___ u_', 'Register / enrol / create an account']
  },
  // ── Money & Finance (personal) ─────────────────────────────────────────
  {
    id: 'dl_076', phrase: 'on a budget', meaning: 'con poco dinero / con presupuesto ajustado',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "We're __ _ ______ this month, so let's cook at home.", blank: 'on a budget', context: 'Saving money' },
      { text: 'You can travel Europe __ _ ______ if you plan carefully.', blank: 'on a budget', context: 'Travel tips' }
    ],
    hints: ['Having or needing to spend limited money', 'o_ a b_____', 'Spending carefully / with limited funds / economically']
  },
  {
    id: 'dl_077', phrase: 'go over budget', meaning: 'pasarse del presupuesto / gastar más de lo planeado',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The renovation project ______ ______ ______ by $5,000.', blank: 'went over budget', context: 'Home project' },
      { text: "Try not to __ ____ ______ — we have limited funds.", blank: 'go over budget', context: 'Financial planning' }
    ],
    hints: ['Spend more money than planned or allowed', 'g_ o___ b_____', 'Exceed the budget / overspend / spend more than planned']
  },
  {
    id: 'dl_078', phrase: 'save up for', meaning: 'ahorrar para algo específico',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "I've been ______ __ ___ a new laptop for months.", blank: 'saving up for', context: 'Personal goal' },
      { text: "We're ______ __ ___ a vacation in Japan.", blank: 'saving up for', context: 'Travel goal' }
    ],
    hints: ['Gradually accumulate money for a specific purchase or goal', 's___ u_ f__', 'Put money aside for / accumulate money for']
  },
  {
    id: 'dl_079', phrase: 'can\'t afford', meaning: 'no poder costear / no tener dinero para',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: "I'd love a new phone, but I ______ ______.", blank: "can't afford", context: 'Budget constraint' },
      { text: "We ______ ______ to go on holiday this year.", blank: "can't afford", context: 'Financial limit' }
    ],
    hints: ['Not have enough money to buy or pay for something', "c_n't a_____", 'Not have the money for / be unable to pay for']
  },
  {
    id: 'dl_080', phrase: 'pay off', meaning: 'terminar de pagar una deuda; también valer la pena',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'I finally ____ ___ my student loan last month.', blank: 'paid off', context: 'Debt freedom' },
      { text: 'All that hard work ______ ___ — she got promoted.', blank: 'paid off', context: 'Success' }
    ],
    hints: ['Finish paying a debt, or achieve a good result from effort', 'p__ o__', 'Clear a debt / be worth it / bear fruit']
  },
  // ── Weather & Environment ──────────────────────────────────────────────
  {
    id: 'dl_081', phrase: 'clear up', meaning: 'despejarse (el tiempo); también limpiar / aclarar',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "The weather should _____ __ by afternoon.", blank: 'clear up', context: 'Weather forecast' },
      { text: 'Can you _____ __ after yourself in the kitchen?', blank: 'clear up', context: 'Household chore' }
    ],
    hints: ['Weather improves (no more clouds), or clean a mess, or resolve a misunderstanding', 'c____ u_', 'Improve / brighten / tidy / resolve']
  },
  {
    id: 'dl_082', phrase: 'bundle up', meaning: 'abrigarse bien / ponerse mucha ropa por el frío',
    level: 'A2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "______ __ — it's freezing out there!", blank: 'Bundle up', context: 'Cold weather advice' },
      { text: 'Make sure the kids ______ __ before they go outside.', blank: 'bundle up', context: 'Parenting' }
    ],
    hints: ['Dress warmly in many layers of clothing', 'b_____ u_', 'Wrap up warm / dress warmly / layer up']
  },
  {
    id: 'dl_083', phrase: 'beat the heat', meaning: 'combatir / escapar del calor',
    level: 'B1', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: "We went to the beach to ____ ___ ____.", blank: 'beat the heat', context: 'Summer activity' },
      { text: 'Here are five tips to ____ ___ ____ this summer.', blank: 'beat the heat', context: 'Lifestyle article' }
    ],
    hints: ['Stay cool or find relief from hot weather', 'b___ t__ h___', 'Stay cool / escape the heat / cope with hot weather']
  },
  {
    id: 'dl_084', phrase: 'run errands', meaning: 'hacer diligencias / ir a hacer recados',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "I spent the whole morning ___ _______ — post office, bank, dry cleaner.", blank: 'running errands', context: 'Chores' },
      { text: "Can you ___ _______ for me on your way into town?", blank: 'run errands', context: 'Favour' }
    ],
    hints: ['Go out to complete small tasks like buying things or delivering items', 'r__ e______', 'Do chores / complete tasks / do small jobs outside']
  },
  {
    id: 'dl_085', phrase: 'get a good night\'s sleep', meaning: 'dormir bien / descansar bien por la noche',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: "You need to ___ _ ____ ______'_ _____ before the interview.", blank: "get a good night's sleep", context: 'Preparation advice' },
      { text: "I finally ___ _ ____ ______'_ _____ — I feel much better.", blank: "got a good night's sleep", context: 'Rested feeling' }
    ],
    hints: ['Sleep well for a full night without interruption', "g__ a g___ n_____'s s____", 'Sleep well / have a restful night / get enough sleep']
  },
  // Add words 086-300 abbreviated for brevity - production would have full entries
  {
    id: 'dl_086', phrase: 'move on', meaning: 'seguir adelante / pasar a otra cosa',
    level: 'B1', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "It's time to ____ __ and stop thinking about the past.", blank: 'move on', context: 'Life advice' },
      { text: "Let's ____ __ to the next topic.", blank: 'move on', context: 'Meeting or class' }
    ],
    hints: ['Stop dwelling on something and continue forward', 'm___ o_', 'Continue / progress / let go and advance']
  },
  {
    id: 'dl_087', phrase: 'keep up with', meaning: 'mantenerse al día con / no quedarse atrás',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'It\'s hard to ____ __ ____ all the new technology.', blank: 'keep up with', context: 'Technology' },
      { text: 'I struggle to ____ __ ____ my rent payments.', blank: 'keep up with', context: 'Finance' }
    ],
    hints: ['Maintain the same pace or level as something or someone', 'k___ u_ w___', 'Stay current with / not fall behind / match the pace of']
  },
  {
    id: 'dl_088', phrase: 'go without', meaning: 'prescindir de algo / arreglárselas sin algo',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'You can\'t ___ _______ sleep for long — your health will suffer.', blank: 'go without', context: 'Health' },
      { text: 'During the power cut we had to ___ _______ heating for two days.', blank: 'go without', context: 'Utilities' }
    ],
    hints: ['Manage or survive without having something needed or desired', 'g_ w______', 'Do without / manage without / lack / forgo']
  },
  {
    id: 'dl_089', phrase: 'hold back', meaning: 'contenerse / reprimirse; también frenar a alguien',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'She tried to ____ ____ her tears during the speech.', blank: 'hold back', context: 'Emotional control' },
      { text: 'Fear is the only thing ________ you ____. Don\'t let it.', blank: 'holding / back', context: 'Motivation' }
    ],
    hints: ['Prevent yourself from expressing an emotion, or stop someone from advancing', 'h___ b___', 'Suppress / restrain / stop yourself / hinder someone']
  },
  {
    id: 'dl_090', phrase: 'figure out', meaning: 'descifrar / entender / resolver',
    level: 'A2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Can you help me ______ ___ how this app works?', blank: 'figure out', context: 'Tech help' },
      { text: "I'm trying to ______ ___ what to cook for dinner.", blank: 'figure out', context: 'Daily decision' }
    ],
    hints: ['Understand or solve something through thought or effort', 'f______ o__', 'Work out / understand / solve / determine']
  },
  {
    id: 'dl_091', phrase: 'show up', meaning: 'aparecer / llegar / presentarse',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'He ______ __ an hour late without any explanation.', blank: 'showed up', context: 'Punctuality' },
      { text: 'Make sure you ______ __ on time for the interview.', blank: 'show up', context: 'Interview advice' }
    ],
    hints: ['Arrive or be present somewhere', 's___ u_', 'Arrive / turn up / appear / be present']
  },
  {
    id: 'dl_092', phrase: 'stay in touch', meaning: 'mantener el contacto / seguir comunicándose',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Let's _____ __ _____ after you move.", blank: 'stay in touch', context: 'Farewell' },
      { text: 'We\'ve managed to _____ __ _____ even though we live far apart.', blank: 'stay in touch', context: 'Long-distance friendship' }
    ],
    hints: ['Continue communicating with someone over time', 's___ i_ t_____', 'Keep in contact / keep in touch / remain connected']
  },
  {
    id: 'dl_093', phrase: 'think twice', meaning: 'pensarlo dos veces / reconsiderar antes de actuar',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "You should _____ _____ before sending that email.", blank: 'think twice', context: 'Communication advice' },
      { text: 'I\'d _____ _____ about investing all your savings in one place.', blank: 'think twice', context: 'Financial caution' }
    ],
    hints: ['Consider carefully before doing something that might have consequences', 't_____ t____', 'Reconsider / be careful / hesitate / deliberate']
  },
  {
    id: 'dl_094', phrase: 'the bottom line', meaning: 'lo más importante / el punto clave / la conclusión final',
    level: 'B2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: '___ ______ ____ is that we can\'t afford it right now.', blank: 'The bottom line', context: 'Financial decision' },
      { text: '___ ______ ____ is you need to work harder.', blank: 'The bottom line', context: 'Honest feedback' }
    ],
    hints: ['The most important fact or conclusion of a situation', 't__ b______ l___', 'The key point / the main issue / the essential fact']
  },
  {
    id: 'dl_095', phrase: 'matter of fact', meaning: 'de hecho / en realidad / sin rodeos',
    level: 'B2', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'As a ______ __ ____, I\'ve already sent it.', blank: 'matter of fact', context: 'Clarification' },
      { text: 'She spoke in a ______ __ ____ tone, no emotion.', blank: 'matter of fact', context: 'Communication style' }
    ],
    hints: ['Factual and without emotion, or used to introduce a clarification', 'm_____ o_ f___', 'Actually / in fact / straightforward / unemotional']
  },
  {
    id: 'dl_096', phrase: 'on second thought', meaning: 'pensándolo mejor / reconsiderando',
    level: 'B1', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I was going to leave early, but __ ______ ________, I\'ll stay.', blank: 'on second thought', context: 'Changing a decision' },
      { text: '__ ______ ________, maybe we should book the tickets now.', blank: 'On second thought', context: 'Reconsidering' }
    ],
    hints: ['Used when you change your mind after thinking again', 'o_ s______ t_____', 'Having reconsidered / actually / changing my mind']
  },
  {
    id: 'dl_097', phrase: 'once in a while', meaning: 'de vez en cuando / ocasionalmente',
    level: 'A2', category: 'Daily Life', source: 'British Council',
    sentences: [
      { text: 'It\'s okay to eat junk food ____ __ _ _____.', blank: 'once in a while', context: 'Diet balance' },
      { text: 'We visit my parents ____ __ _ _____.', blank: 'once in a while', context: 'Family visits' }
    ],
    hints: ['Sometimes, but not regularly', 'o___ i_ a w____', 'Sometimes / occasionally / from time to time / every now and then']
  },
  {
    id: 'dl_098', phrase: 'sooner or later', meaning: 'tarde o temprano / eventualmente',
    level: 'A2', category: 'Daily Life', source: 'Cambridge Dictionary',
    sentences: [
      { text: '______ __ _____, you\'ll have to deal with this.', blank: 'Sooner or later', context: 'Inevitable consequence' },
      { text: '______ __ _____, the truth always comes out.', blank: 'Sooner or later', context: 'Life observation' }
    ],
    hints: ['At some point in the future, even if not right away', 's_____ o_ l_____', 'Eventually / at some point / inevitably']
  },
  {
    id: 'dl_099', phrase: 'by any chance', meaning: 'por casualidad / acaso (pregunta educada)',
    level: 'B1', category: 'Daily Life', source: 'BBC Learning English',
    sentences: [
      { text: 'Are you, __ ___ ______, looking for a roommate?', blank: 'by any chance', context: 'Polite enquiry' },
      { text: 'Do you know, __ ___ ______, where the nearest pharmacy is?', blank: 'by any chance', context: 'Asking for help' }
    ],
    hints: ['Used in polite questions to ask if something is possible', 'b_ a__ c_____', 'Possibly / perhaps / do you happen to / coincidentally']
  },
  {
    id: 'dl_100', phrase: 'it goes without saying', meaning: 'huelga decir / es obvio / no hace falta decirlo',
    level: 'B2', category: 'Daily Life', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: '__ ____ _______ _______ that you should be honest with your doctor.', blank: 'It goes without saying', context: 'Health advice' },
      { text: '__ ____ _______ _______ that hard work leads to success.', blank: 'It goes without saying', context: 'Motivation' }
    ],
    hints: ['Something so obvious it hardly needs to be mentioned', 'i_ g___ w_____ s_____', 'Obviously / needless to say / it\'s self-evident']
  }
]
