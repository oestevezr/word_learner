import type { Word } from '@/types'

export const collocationWords: Word[] = [
  {
    id: 'col_001', phrase: 'make progress', meaning: 'hacer progreso / avanzar hacia una meta',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "We're slowly _______ _________ on the project.", blank: 'making progress', context: 'Work update' },
      { text: "Have you _____ _________ with your English studies?", blank: 'made progress', context: 'Study check-in' }
    ],
    hints: ['Move forward or advance toward a goal', 'm___ p_______', 'Advance / move forward / develop / improve']
  },
  {
    id: 'col_002', phrase: 'raise awareness', meaning: 'crear conciencia / hacer que la gente sepa de un problema',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The campaign was designed to _____ _________ about mental health.", blank: 'raise awareness', context: 'Public campaign' },
      { text: "Schools play a key role in _______ _________ about climate change.", blank: 'raising awareness', context: 'Education' }
    ],
    hints: ['Help people become informed and conscious of an issue', 'r____ a________', 'Inform the public / educate people / draw attention to an issue']
  },
  {
    id: 'col_003', phrase: 'reach a conclusion', meaning: 'llegar a una conclusión',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "After much debate, the committee _______ _ __________ unanimously.", blank: 'reached a conclusion', context: 'Meeting outcome' },
      { text: "It is difficult to _____ _ __________ with such limited data.", blank: 'reach a conclusion', context: 'Research challenge' }
    ],
    hints: ['Arrive at a final decision or judgment after thought or discussion', 'r____ a c__________', 'Arrive at a decision / come to a conclusion / determine an outcome']
  },
  {
    id: 'col_004', phrase: 'take responsibility', meaning: 'asumir responsabilidad / reconocer y aceptar obligaciones',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "A good leader _____ ____________ for their team\'s mistakes.", blank: 'takes responsibility', context: 'Leadership' },
      { text: "It takes courage to _____ ____________ when things go wrong.", blank: 'take responsibility', context: 'Accountability' }
    ],
    hints: ['Accept that you are in charge of something and must deal with the consequences', 't___ r______________', 'Accept accountability / be responsible / own your role / be answerable for']
  },
  {
    id: 'col_005', phrase: 'meet a deadline', meaning: 'cumplir un plazo / entregar algo a tiempo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "We need to ____ ___ ________ or we lose the contract.", blank: 'meet the deadline', context: 'Work pressure' },
      { text: "She always _____ _________ no matter how difficult the task.", blank: 'meets deadlines', context: 'Employee review' }
    ],
    hints: ['Complete something by the required date', 'm___ a d________', 'Deliver on time / finish by the due date / submit within the timeframe']
  },
  {
    id: 'col_006', phrase: 'gain experience', meaning: 'ganar experiencia / adquirir conocimiento práctico',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Internships allow students to _____ __________ in real-world settings.", blank: 'gain experience', context: 'Career development' },
      { text: "I _______ a lot of __________ during my time abroad.", blank: 'gained experience', context: 'Personal growth' }
    ],
    hints: ['Develop practical knowledge or skill through doing something', 'g___ e__________', 'Acquire practical skills / build expertise / learn through doing']
  },
  {
    id: 'col_007', phrase: 'set a goal', meaning: 'establecer una meta / definir un objetivo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "___ ___ ____ before starting a new project.", blank: 'Set a goal', context: 'Productivity advice' },
      { text: "She _____ _ ____ to run a marathon before she turned 30.", blank: 'set a goal', context: 'Personal challenge' }
    ],
    hints: ['Decide on an aim or objective to work toward', 's__ a g___', 'Define an objective / establish an aim / create a target']
  },
  {
    id: 'col_008', phrase: 'draw attention to', meaning: 'llamar la atención hacia / señalar algo para que sea notado',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The report _____ _________ __ several serious issues.", blank: 'drew attention to', context: 'Formal report' },
      { text: "I want to _____ _________ __ the gap between policy and practice.", blank: 'draw attention to', context: 'Advocacy' }
    ],
    hints: ['Make people focus on or notice something', 'd___ a________ t_', 'Point out / highlight / bring to notice / make people aware of']
  },
  {
    id: 'col_009', phrase: 'hold a meeting', meaning: 'celebrar una reunión / organizar y llevar a cabo una junta',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "We need to ____ _ _______ to discuss the new strategy.", blank: 'hold a meeting', context: 'Team management' },
      { text: "The board ____ _ _______ to review the quarterly results.", blank: 'held a meeting', context: 'Corporate governance' }
    ],
    hints: ['Organize and conduct a formal discussion', 'h___ a m_______', 'Run a meeting / convene / conduct a session / call people together']
  },
  {
    id: 'col_010', phrase: 'pose a challenge', meaning: 'plantear un desafío / representar una dificultad',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Climate change _____ _ _________ for all nations.", blank: 'poses a challenge', context: 'Global issues' },
      { text: "The new regulations ____ _ _________ for small businesses.", blank: 'pose a challenge', context: 'Business context' }
    ],
    hints: ['Present or represent a difficulty or problem', 'p___ a c_________', 'Create a challenge / present difficulty / represent an obstacle']
  },
  {
    id: 'col_011', phrase: 'heavy rain', meaning: 'lluvia intensa / lluvia muy fuerte',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The event was cancelled due to _____ ____.", blank: 'heavy rain', context: 'Weather cancellation' },
      { text: "The roads flooded after hours of _____ ____.", blank: 'heavy rain', context: 'Weather impact' }
    ],
    hints: ['Very strong or intense rainfall', 'h_____ r___', 'Intense rain / downpour / pouring rain']
  },
  {
    id: 'col_012', phrase: 'strong evidence', meaning: 'evidencia sólida / prueba convincente',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "There is ______ ________ that exercise improves mental health.", blank: 'strong evidence', context: 'Research finding' },
      { text: "The prosecution needs ______ ________ to secure a conviction.", blank: 'strong evidence', context: 'Legal context' }
    ],
    hints: ['Convincing and reliable proof or data', 's_____ e________', 'Convincing proof / solid data / compelling evidence / conclusive findings']
  },
  {
    id: 'col_013', phrase: 'deliver a speech', meaning: 'pronunciar un discurso / dar un discurso formalmente',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "She ________ _ ______ that moved the entire audience.", blank: 'delivered a speech', context: 'Public speaking' },
      { text: "He was asked to _______ _ ______ at the graduation ceremony.", blank: 'deliver a speech', context: 'Ceremony' }
    ],
    hints: ['Give a formal talk or address to an audience', 'd______ a s_____', 'Give a speech / make a formal address / speak publicly']
  },
  {
    id: 'col_014', phrase: 'make a decision', meaning: 'tomar una decisión',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Don't rush — take your time to ____ _ ________.", blank: 'make a decision', context: 'Advice' },
      { text: "The board _____ _ _________ to delay the launch.", blank: 'made a decision', context: 'Corporate action' }
    ],
    hints: ['Choose a course of action after thinking', 'm___ a d________', 'Decide / choose / reach a choice / determine what to do']
  },
  {
    id: 'col_015', phrase: 'take action', meaning: 'tomar acción / hacer algo para resolver un problema',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "We can\'t wait any longer — we need to ____ ______.", blank: 'take action', context: 'Urgency' },
      { text: "The government must ____ ______ to address rising homelessness.", blank: 'take action', context: 'Policy call' }
    ],
    hints: ['Do something to address a problem or situation', 't___ a_____', 'Act / do something / intervene / respond actively']
  },
  {
    id: 'col_016', phrase: 'conduct research', meaning: 'realizar investigación / llevar a cabo un estudio',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The university ________ ________ into the effects of sleep deprivation.", blank: 'conducted research', context: 'Academic work' },
      { text: "We need to _______ ________ before launching the product.", blank: 'conduct research', context: 'Market research' }
    ],
    hints: ['Carry out a systematic investigation', 'c_______ r________', 'Carry out research / run a study / investigate systematically']
  },
  {
    id: 'col_017', phrase: 'reach an agreement', meaning: 'llegar a un acuerdo / lograr consenso',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "After hours of negotiation, they finally _______ __ _________.", blank: 'reached an agreement', context: 'Negotiation outcome' },
      { text: "It\'s vital to _____ __ _________ before the deadline.", blank: 'reach an agreement', context: 'Business deal' }
    ],
    hints: ['Arrive at a shared understanding or deal', 'r____ a_ a_________', 'Come to an agreement / settle / reach a deal / find common ground']
  },
  {
    id: 'col_018', phrase: 'make an effort', meaning: 'hacer un esfuerzo / intentar con dedicación',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "You need to ____ __ ______ to understand the other person\'s perspective.", blank: 'make an effort', context: 'Communication advice' },
      { text: "She always _____ __ ______ to arrive on time.", blank: 'makes an effort', context: 'Punctuality' }
    ],
    hints: ['Try hard; put in work or energy toward something', 'm___ a_ e_____', 'Try hard / exert yourself / put in effort / work at something']
  },
  {
    id: 'col_019', phrase: 'solve a problem', meaning: 'resolver un problema',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Engineers are good at _______ ________.", blank: 'solving problems', context: 'Skill description' },
      { text: "The team worked together to _____ _ ________.", blank: 'solve a problem', context: 'Teamwork' }
    ],
    hints: ['Find a way to deal with a difficulty', 's____ a p_______', 'Fix / resolve / find a solution to / deal with a problem']
  },
  {
    id: 'col_020', phrase: 'express concern', meaning: 'expresar preocupación / manifestar inquietud',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Several employees _________ _______ about the workload.", blank: 'expressed concern', context: 'Workplace feedback' },
      { text: "The WHO _________ _______ over the spread of the virus.", blank: 'expressed concern', context: 'Health crisis' }
    ],
    hints: ['Say that you are worried about something', 'e______ c_______', 'Voice worry / convey anxiety / state a concern / raise an alarm']
  },
  {
    id: 'col_021', phrase: 'take notes', meaning: 'tomar apuntes / anotar información importante',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Please ____ _____ during the lecture.", blank: 'take notes', context: 'Study advice' },
      { text: "She was _______ _____ throughout the meeting.", blank: 'taking notes', context: 'Professional context' }
    ],
    hints: ['Write down key information while listening or reading', 't___ n____', 'Write down information / record key points / jot things down']
  },
  {
    id: 'col_022', phrase: 'provide support', meaning: 'proporcionar apoyo / dar asistencia o ayuda',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The charity ________ _______ to homeless families.", blank: 'provides support', context: 'Social welfare' },
      { text: "The manager was always willing to _______ _______ to new staff.", blank: 'provide support', context: 'Management' }
    ],
    hints: ['Give help, assistance, or backing to someone', 'p______ s______', 'Offer help / give assistance / back up / support someone']
  },
  {
    id: 'col_023', phrase: 'face challenges', meaning: 'enfrentar desafíos / lidiar con dificultades',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Startups often ____ many __________ in their first year.", blank: 'face challenges', context: 'Entrepreneurship' },
      { text: "We're _______ significant __________ due to supply chain issues.", blank: 'facing challenges', context: 'Business difficulty' }
    ],
    hints: ['Deal with difficulties or obstacles', 'f___ c__________', 'Encounter difficulties / deal with obstacles / cope with hard situations']
  },
  {
    id: 'col_024', phrase: 'pay attention', meaning: 'prestar atención / concentrarse y escuchar',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Please ___ _________ — this is important.", blank: 'pay attention', context: 'Class instruction' },
      { text: "He wasn\'t ______ _________ during the presentation.", blank: 'paying attention', context: 'Meeting feedback' }
    ],
    hints: ['Concentrate on and listen to what is being said', 'p__ a________', 'Listen carefully / focus on / concentrate / stay engaged']
  },
  {
    id: 'col_025', phrase: 'win an award', meaning: 'ganar un premio / recibir un reconocimiento',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The film ___ __ _____ at Cannes.", blank: 'won an award', context: 'Film festival' },
      { text: "She was the first person in the company to ___ __ _____.", blank: 'win an award', context: 'Company achievement' }
    ],
    hints: ['Receive a prize or recognition for achievement', 'w__ a_ a_____', 'Win a prize / receive recognition / get an award']
  },
  {
    id: 'col_026', phrase: 'launch a campaign', meaning: 'lanzar una campaña / iniciar una acción organizada',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The NGO will ______ _ ________ next month.", blank: 'launch a campaign', context: 'Nonprofit' },
      { text: "The company ________ _ ________ to promote the new product.", blank: 'launched a campaign', context: 'Marketing' }
    ],
    hints: ['Start or initiate an organized effort to achieve a goal', 'l_____ a c________', 'Start a campaign / initiate a drive / kick off an effort']
  },
  {
    id: 'col_027', phrase: 'draw a conclusion', meaning: 'sacar una conclusión / derivar un resultado del análisis',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "It\'s too early to _____ _ __________ from this data.", blank: 'draw a conclusion', context: 'Data caution' },
      { text: "What __________ can we _____ from this study?", blank: 'conclusions', context: 'Research summary' }
    ],
    hints: ['Form an opinion or judgment based on evidence', 'd___ a c__________', 'Conclude / form a judgment / infer from evidence']
  },
  {
    id: 'col_028', phrase: 'build confidence', meaning: 'construir confianza / desarrollar seguridad en uno mismo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Public speaking exercises help _____ __________.", blank: 'build confidence', context: 'Communication training' },
      { text: "Success in small tasks helps _____ __________ over time.", blank: 'build confidence', context: 'Psychology' }
    ],
    hints: ['Develop a stronger sense of self-assurance through experience', 'b_____ c__________', 'Develop confidence / increase self-belief / boost self-esteem / gain assurance']
  },
  {
    id: 'col_029', phrase: 'meet expectations', meaning: 'cumplir expectativas / alcanzar el nivel que se espera',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The product failed to ____ __________.", blank: 'meet expectations', context: 'Product review' },
      { text: "She consistently _____ __________ in her performance reviews.", blank: 'meets expectations', context: 'Work evaluation' }
    ],
    hints: ['Achieve what was hoped for or required', 'm___ e___________', 'Live up to expectations / satisfy requirements / fulfill what was expected']
  },
  {
    id: 'col_030', phrase: 'break a record', meaning: 'romper un récord / superar la marca anterior',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "She _____ _ ______ at the national championships.", blank: 'broke a record', context: 'Sports achievement' },
      { text: "This summer _____ _______ for the highest temperatures ever.", blank: 'broke records', context: 'Weather news' }
    ],
    hints: ['Exceed a previously recorded best', 'b____ a r______', 'Set a new record / surpass the best / beat the previous mark']
  },
  {
    id: 'col_031', phrase: 'deeply concerned', meaning: 'profundamente preocupado',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Scientists are ______ _________ about rising ocean temperatures.", blank: 'deeply concerned', context: 'Environmental issue' },
      { text: "Parents are ______ _________ about screen time and children.", blank: 'deeply concerned', context: 'Parenting' }
    ],
    hints: ['Very worried or troubled about something', 'd_____ c________', 'Very worried / extremely concerned / seriously troubled']
  },
  {
    id: 'col_032', phrase: 'highly recommended', meaning: 'muy recomendado / apoyado con entusiasmo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The restaurant is ______ ____________ by food critics.", blank: 'highly recommended', context: 'Food review' },
      { text: "The book is ______ ____________ for students of linguistics.", blank: 'highly recommended', context: 'Academic resource' }
    ],
    hints: ['Strongly suggested or endorsed', 'h_____ r___________', 'Strongly recommended / widely praised / enthusiastically endorsed']
  },
  {
    id: 'col_033', phrase: 'largely ignored', meaning: 'en gran parte ignorado / sin recibir atención suficiente',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The warning signs were _______ _______ for months.", blank: 'largely ignored', context: 'Oversight' },
      { text: "The report was _______ _______ by policymakers.", blank: 'largely ignored', context: 'Policy failure' }
    ],
    hints: ['Mostly or mainly overlooked or disregarded', 'l_______ i______', 'Mostly overlooked / widely disregarded / broadly ignored']
  },
  {
    id: 'col_034', phrase: 'broadly speaking', meaning: 'en términos generales / hablando de manera amplia',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "_______ _______, the approach was successful.", blank: 'Broadly speaking', context: 'Summary' },
      { text: "_______ _______, the two methods produce similar results.", blank: 'Broadly speaking', context: 'Comparison' }
    ],
    hints: ['In general terms; without going into details', 'b_______ s_______', 'Generally / in general terms / on the whole / without being too specific']
  },
  {
    id: 'col_035', phrase: 'take a break', meaning: 'tomarse un descanso / parar de trabajar por un momento',
    level: 'A2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "You should ____ _ _____ — you\'ve been working for five hours.", blank: 'take a break', context: 'Wellbeing advice' },
      { text: "They _____ _ _____ to get some coffee before continuing.", blank: 'took a break', context: 'Work schedule' }
    ],
    hints: ['Stop what you\'re doing temporarily to rest', 't___ a b_____', 'Rest / pause / stop temporarily / have some downtime']
  },
  {
    id: 'col_036', phrase: 'achieve a goal', meaning: 'lograr una meta / tener éxito en alcanzar un objetivo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Hard work helps you _______ _ ____.", blank: 'achieve a goal', context: 'Motivation' },
      { text: "After two years of training, she ________ her ____.", blank: 'achieved her goal', context: 'Personal achievement' }
    ],
    hints: ['Successfully reach an objective you set out to accomplish', 'a______ a g___', 'Reach a goal / accomplish an aim / fulfill an objective / succeed in a target']
  },
  {
    id: 'col_037', phrase: 'overcome obstacles', meaning: 'superar obstáculos / pasar por encima de dificultades',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Entrepreneurs need resilience to ________ _________.", blank: 'overcome obstacles', context: 'Entrepreneurship' },
      { text: "She ________ many _________ on her path to success.", blank: 'overcame obstacles', context: 'Inspiring story' }
    ],
    hints: ['Successfully deal with or get past difficulties', 'o________ o_________', 'Conquer difficulties / get past challenges / surmount problems']
  },
  {
    id: 'col_038', phrase: 'make a difference', meaning: 'marcar la diferencia / tener un impacto positivo',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Volunteering really can ____ _ __________.", blank: 'make a difference', context: 'Social impact' },
      { text: "Small changes in diet can ____ _ ________ to your health.", blank: 'make a difference', context: 'Health advice' }
    ],
    hints: ['Have a positive effect or impact on something', 'm___ a d__________', 'Have an impact / create change / matter / produce a positive effect']
  },
  {
    id: 'col_039', phrase: 'play a role', meaning: 'desempeñar un papel / contribuir de cierta manera',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Education _____ _ _____ in reducing inequality.", blank: 'plays a role', context: 'Societal impact' },
      { text: "Diet and exercise _____ _ _____ in preventing disease.", blank: 'play a role', context: 'Health advice' }
    ],
    hints: ['Contribute to or be involved in something in a specific way', 'p___ a r___', 'Contribute to / be a factor in / have a function in / be involved in']
  },
  {
    id: 'col_040', phrase: 'follow guidelines', meaning: 'seguir directrices / adherirse a las recomendaciones',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Doctors ______ __________ from health authorities.", blank: 'follow guidelines', context: 'Medical practice' },
      { text: "All team members must ______ the __________ in the handbook.", blank: 'follow the guidelines', context: 'Onboarding' }
    ],
    hints: ['Adhere to recommended instructions or rules', 'f_____ g__________', 'Adhere to / comply with / respect the guidelines / follow the rules']
  },
  {
    id: 'col_041', phrase: 'raise a question', meaning: 'plantear una pregunta / formular una duda para discusión',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The results _____ several _________ about the methodology.", blank: 'raise questions', context: 'Research review' },
      { text: "I'd like to _____ _ ________ about the budget.", blank: 'raise a question', context: 'Meeting' }
    ],
    hints: ['Bring up or present a question for consideration', 'r____ a q_______', 'Ask / bring up a question / present a query / pose a question']
  },
  {
    id: 'col_042', phrase: 'fulfill a promise', meaning: 'cumplir una promesa / hacer lo que se prometió',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The president must _______ __ ________ made during the campaign.", blank: 'fulfill the promises', context: 'Politics' },
      { text: "He _________ every _______ he made.", blank: 'fulfilled every promise', context: 'Trust and reliability' }
    ],
    hints: ['Do what you said you would do', 'f______ a p_______', 'Keep a promise / honor your word / do what you committed to']
  },
  {
    id: 'col_043', phrase: 'strike a balance', meaning: 'encontrar el equilibrio / lograr un balance entre dos cosas',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "It\'s hard to ______ _ _______ between work and family life.", blank: 'strike a balance', context: 'Work-life balance' },
      { text: "Good writing _______ _ _______ between clarity and depth.", blank: 'strikes a balance', context: 'Writing advice' }
    ],
    hints: ['Find or achieve an equilibrium between two competing things', 's_____ a b______', 'Balance two things / achieve equilibrium / find middle ground']
  },
  {
    id: 'col_044', phrase: 'bear in mind', meaning: 'tener en cuenta / recordar algo importante al tomar decisiones',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "_____ __ ____ that the deadline is Friday.", blank: 'Bear in mind', context: 'Reminder' },
      { text: "When planning, _____ __ ____ that costs may increase.", blank: 'bear in mind', context: 'Planning advice' }
    ],
    hints: ['Remember and consider an important fact', 'b___ i_ m___', 'Keep in mind / remember / take into account / not forget']
  },
  {
    id: 'col_045', phrase: 'put forward a proposal', meaning: 'presentar una propuesta / formalmente sugerir un plan',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The committee ___ _______ _ ________ for restructuring.", blank: 'put forward a proposal', context: 'Committee work' },
      { text: "Several members offered to ___ _______ _________ before the vote.", blank: 'put forward proposals', context: 'Governance' }
    ],
    hints: ['Formally present an idea or plan for others to consider', 'p__ f______ a p________', 'Propose / suggest / present for consideration / table a motion']
  },
  {
    id: 'col_046', phrase: 'improve skills', meaning: 'mejorar habilidades / desarrollar capacidades',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Online courses are a great way to _______ ______.", blank: 'improve skills', context: 'Learning' },
      { text: "She constantly works to _______ her ______.", blank: 'improve her skills', context: 'Personal development' }
    ],
    hints: ['Develop and enhance your abilities through practice or learning', 'i______ s_____', 'Develop skills / enhance abilities / get better at / hone capabilities']
  },
  {
    id: 'col_047', phrase: 'reach a compromise', meaning: 'llegar a un compromiso / acordar una posición intermedia',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "After long discussions, both parties _______ _ _________.", blank: 'reached a compromise', context: 'Negotiation' },
      { text: "Learning to _____ _ _________ is key to good teamwork.", blank: 'reach a compromise', context: 'Collaboration' }
    ],
    hints: ['Find a middle ground that both sides can accept', 'r____ a c__________', 'Find middle ground / make concessions / come to a mutual agreement']
  },
  {
    id: 'col_048', phrase: 'bear the cost', meaning: 'asumir el costo / ser responsable del gasto',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Who will ___ ___ ____ of the repairs?", blank: 'bear the cost', context: 'Financial responsibility' },
      { text: "Consumers ultimately ___ ___ ____ of corporate inefficiency.", blank: 'bear the cost', context: 'Economics' }
    ],
    hints: ['Accept financial responsibility for something', 'b___ t__ c___', 'Pay for / cover the cost / be responsible for the expense']
  },
  {
    id: 'col_049', phrase: 'widespread concern', meaning: 'preocupación generalizada / inquietud compartida por muchos',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "There is __________ _______ over privacy in the digital age.", blank: 'widespread concern', context: 'Social issue' },
      { text: "The report caused __________ _______ among health authorities.", blank: 'widespread concern', context: 'Health' }
    ],
    hints: ['A worry or fear that is shared by many people in many places', 'w_________ c_______', 'General concern / broadly shared worry / public anxiety']
  },
  {
    id: 'col_050', phrase: 'in stark contrast', meaning: 'en marcado contraste / diferencia muy notable',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "__ _____ ________, the second experiment showed no effect at all.", blank: 'In stark contrast', context: 'Research comparison' },
      { text: "Her calm reaction stood __ _____ _______ to the chaos around her.", blank: 'in stark contrast', context: 'Narrative' }
    ],
    hints: ['Very noticeably different from something else', 'i_ s____ c_______', 'In complete contrast / noticeably different / poles apart / opposite to']
  },
  {
    id: 'col_051', phrase: 'place emphasis on', meaning: 'poner énfasis en / destacar la importancia de',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The new curriculum ______ ________ __ critical thinking.", blank: 'places emphasis on', context: 'Education reform' },
      { text: "The coach ______ special ________ __ teamwork.", blank: 'placed emphasis on', context: 'Sports' }
    ],
    hints: ['Give special importance or attention to something', 'p_____ e_______ o_', 'Stress / prioritize / highlight / give weight to']
  },
  {
    id: 'col_052', phrase: 'bring about change', meaning: 'generar cambio / provocar una transformación',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Grassroots movements can _____ _____ ______ in society.", blank: 'bring about change', context: 'Social movement' },
      { text: "What strategies can _____ _____ real ______?", blank: 'bring about change', context: 'Advocacy' }
    ],
    hints: ['Cause or create change, especially a significant one', 'b____ a____ c_____', 'Cause change / create transformation / generate a shift / make change happen']
  },
  {
    id: 'col_053', phrase: 'make an impression', meaning: 'causar una impresión / tener efecto notable en alguien',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The candidate really _____ __ __________ in the interview.", blank: 'made an impression', context: 'Job interview' },
      { text: "First meetings are your chance to ____ _ good _________.", blank: 'make a good impression', context: 'Social advice' }
    ],
    hints: ['Create a strong or notable effect on how someone sees you', 'm___ a_ i__________', 'Stand out / leave a mark / make an impact on someone\'s perception']
  },
  {
    id: 'col_054', phrase: 'face the consequences', meaning: 'enfrentar las consecuencias / aceptar los resultados de las propias acciones',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "If you skip the deadline, you\'ll have to ____ ___ ___________.", blank: 'face the consequences', context: 'Warning' },
      { text: "Everyone must eventually ____ ___ ___________ of their choices.", blank: 'face the consequences', context: 'Responsibility' }
    ],
    hints: ['Accept and deal with the results of your actions', 'f___ t__ c___________', 'Deal with results / accept the outcome / take responsibility for what followed']
  },
  {
    id: 'col_055', phrase: 'come to terms with', meaning: 'aceptar / reconciliarse con una realidad difícil',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "It took her years to ____ __ _____ ____ the loss.", blank: 'come to terms with', context: 'Grief' },
      { text: "He struggled to ____ __ _____ ____ the fact he\'d failed.", blank: 'come to terms with', context: 'Failure and growth' }
    ],
    hints: ['Accept a difficult situation and move forward', 'c___ t_ t____ w___', 'Accept / make peace with / reconcile yourself to / process and accept']
  },
  {
    id: 'col_056', phrase: 'give rise to', meaning: 'dar lugar a / ser la causa de algo',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "The new law ____ _____ __ a series of protests.", blank: 'gave rise to', context: 'Social response' },
      { text: "Urbanization can ____ _____ __ various social problems.", blank: 'give rise to', context: 'Sociology' }
    ],
    hints: ['Cause something to happen or develop', 'g___ r___ t_', 'Lead to / cause / result in / bring about / produce']
  },
  {
    id: 'col_057', phrase: 'a growing number of', meaning: 'un número creciente de / cada vez más',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "_ _______ ______ __ companies are offering remote work.", blank: 'A growing number of', context: 'Business trend' },
      { text: "_ _______ ______ __ people are choosing plant-based diets.", blank: 'A growing number of', context: 'Social trend' }
    ],
    hints: ['An increasing quantity of people or things', 'a g_______ n_____ o_', 'More and more / an increasing number of / ever more']
  },
  {
    id: 'col_058', phrase: 'in the long run', meaning: 'a largo plazo / considerando el tiempo futuro',
    level: 'B1', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Investing in education pays off __ ___ ____ ___.", blank: 'in the long run', context: 'Investment advice' },
      { text: "__ ___ ____ ___, making small daily habits matters.", blank: 'In the long run', context: 'Lifestyle' }
    ],
    hints: ['Over a long period of time; considering future outcomes', 'i_ t__ l___ r__', 'Over time / in the future / eventually / looking ahead']
  },
  {
    id: 'col_059', phrase: 'take into consideration', meaning: 'tomar en consideración / tener en cuenta',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "Please ____ ____ _____________ the user\'s feedback when redesigning.", blank: 'take into consideration', context: 'UX design' },
      { text: "The judge must ____ _____ _____________ all relevant evidence.", blank: 'take into consideration', context: 'Legal process' }
    ],
    hints: ['Include something as a factor in your decision or plan', 't___ i___ c_____________', 'Factor in / account for / consider / include in your thinking']
  },
  {
    id: 'col_060', phrase: 'on the one hand ... on the other hand', meaning: 'por un lado ... por otro lado / presentar dos perspectivas',
    level: 'B2', category: 'Collocations', source: 'Oxford Collocations Dictionary',
    sentences: [
      { text: "__ ___ ___ _____, remote work increases flexibility.", blank: 'On the one hand', context: 'Balanced argument' },
      { text: "__ ___ _____ _____, it can lead to isolation.", blank: 'On the other hand', context: 'Counter-argument' }
    ],
    hints: ['Used to present two contrasting sides of an argument', 'o_ t__ o__ h___ / o__ o_ t__ o____ h___', 'Contrasting perspectives / two sides of an argument / balanced view']
  }
]
