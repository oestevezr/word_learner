import type { Word } from '@/types'

export const idiomsWords: Word[] = [
  {
    id: 'id_001', phrase: 'by all means', meaning: 'por supuesto / claro que sí / adelante',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: '"Can I borrow your pen?" — "___ ___ _____."', blank: 'By all means', context: 'Granting permission enthusiastically' },
      { text: 'If you want to add your ideas, ___ ___ _____.', blank: 'by all means', context: 'Invitation to contribute' }
    ],
    hints: ['A phrase used to give enthusiastic permission', 'b_ a__ m_____', 'Of course / certainly / please do / go ahead']
  },
  {
    id: 'id_002', phrase: 'bite the bullet', meaning: 'aguantar el dolor / hacer algo inevitable con valentía',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I hate the dentist, but I just have to ____ ___ ______ and go.', blank: 'bite the bullet', context: 'Facing something unpleasant' },
      { text: 'She ____ ___ ______ and apologized, even though it was hard.', blank: 'bit the bullet', context: 'Doing something difficult' }
    ],
    hints: ['Do something painful or unpleasant you\'ve been avoiding', 'b___ t__ b_____', 'Endure / face it / do it despite discomfort']
  },
  {
    id: 'id_003', phrase: 'the ball is in your court', meaning: 'la decisión es tuya / te toca a ti actuar',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "I've made my offer — ___ ____ __ __ ____ _____ now.", blank: 'the ball is in your court', context: 'Negotiation' },
      { text: 'I\'ve done everything I can. ___ ____ __ __ ____ _____.', blank: 'The ball is in your court', context: 'Waiting for action' }
    ],
    hints: ['It\'s now someone else\'s responsibility to take action', 't__ b___ i_ i_ y___ c____', 'It\'s your turn / your move / the decision is yours']
  },
  {
    id: 'id_004', phrase: 'a blessing in disguise', meaning: 'una bendición disfrazada / algo que parece malo pero resulta bueno',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Losing that job was _ ________ __ ________ — I found a much better one.', blank: 'a blessing in disguise', context: 'Positive outcome from bad event' },
      { text: 'The delay turned out to be _ ________ __ ________.', blank: 'a blessing in disguise', context: 'Unexpected benefit' }
    ],
    hints: ['Something that seems bad at first but turns out to be good', 'a b_______ i_ d_______', 'Unexpectedly good / silver lining / fortunate misfortune']
  },
  {
    id: 'id_005', phrase: 'hit the nail on the head', meaning: 'dar en el clavo / describir algo exactamente',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "You ___ ___ ____ __ ___ ____. That's exactly the problem.", blank: 'hit the nail on the head', context: 'Agreeing with an observation' },
      { text: 'Her analysis ___ ___ ____ __ ___ ____.', blank: 'hit the nail on the head', context: 'Accurate assessment' }
    ],
    hints: ['Describe or identify something precisely and correctly', 'h__ t__ n___ o_ t__ h___', 'Exactly right / spot on / perfectly accurate']
  },
  {
    id: 'id_006', phrase: 'spill the beans', meaning: 'revelar un secreto / irse de la lengua',
    level: 'B1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'Who _______ ___ _____? I told you to keep it secret!', blank: 'spilled the beans', context: 'Leaked secret' },
      { text: 'Don\'t _____ ___ _____ until after the surprise party.', blank: 'spill the beans', context: 'Keeping a surprise' }
    ],
    hints: ['Accidentally or deliberately reveal a secret', 's____ t__ b____', 'Reveal a secret / let the cat out of the bag / tell all']
  },
  {
    id: 'id_007', phrase: 'let the cat out of the bag', meaning: 'revelar un secreto sin querer',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'She ___ ___ ___ ___ __ ___ ___ about the surprise.', blank: 'let the cat out of the bag', context: 'Spoiled surprise' },
      { text: 'Be careful not to ___ ___ ___ ___ __ ___ ___.', blank: 'let the cat out of the bag', context: 'Warning' }
    ],
    hints: ['Accidentally reveal a secret or surprise', 'l__ t__ c__ o__ o_ t__ b__', 'Give away a secret / spill the beans / reveal accidentally']
  },
  {
    id: 'id_008', phrase: 'beat around the bush', meaning: 'andar con rodeos / no ir al grano',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Stop _______ ______ ___ ____ and tell me what you really think.", blank: 'beating around the bush', context: 'Direct communication' },
      { text: "Don't ____ ______ ___ ____ — just ask for a raise.", blank: 'beat around the bush', context: 'Workplace advice' }
    ],
    hints: ['Avoid talking about the main point directly', 'b___ a_____ t__ b___', 'Avoid the point / be indirect / not get to the point']
  },
  {
    id: 'id_009', phrase: 'under the radar', meaning: 'bajo el radar / sin llamar la atención / desapercibido',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'The project stayed _____ ___ _____ until it was complete.', blank: 'under the radar', context: 'Low-profile work' },
      { text: 'He managed to operate _____ ___ _____ for years.', blank: 'under the radar', context: 'Avoiding attention' }
    ],
    hints: ['Not noticed or attracting attention', 'u____ t__ r____', 'Undetected / unnoticed / out of the spotlight']
  },
  {
    id: 'id_010', phrase: 'off the top of my head', meaning: 'así de memoria / sin pensarlo mucho / en este momento',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: '___ ___ ___ __ __ ____, I\'d say around 200 people attended.', blank: 'Off the top of my head', context: 'Rough estimate' },
      { text: 'I can\'t remember the exact figure ___ ___ ___ __ __ ____.', blank: 'off the top of my head', context: 'Uncertainty about details' }
    ],
    hints: ['From memory, without checking or thinking carefully', 'o__ t__ t__ o_ m_ h___', 'From memory / roughly / without double-checking / approximately']
  },
  {
    id: 'id_011', phrase: 'on the fence', meaning: 'indeciso / sin tomar partido / entre dos opciones',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "I'm still __ ___ _____ about whether to accept the offer.", blank: 'on the fence', context: 'Difficult decision' },
      { text: 'You can\'t stay __ ___ _____ forever — you have to choose.', blank: 'on the fence', context: 'Urging a decision' }
    ],
    hints: ['Undecided between two options or sides', 'o_ t__ f____', 'Undecided / neutral / sitting on the fence / unsure']
  },
  {
    id: 'id_012', phrase: 'a piece of cake', meaning: 'pan comido / algo muy fácil',
    level: 'B1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'The exam was _ _____ __ ____. I finished in 20 minutes.', blank: 'a piece of cake', context: 'Easy test' },
      { text: "Don't worry — fixing that is _ _____ __ ____ for me.", blank: 'a piece of cake', context: 'Assuring someone' }
    ],
    hints: ['Very easy to do', 'a p____ o_ c___', 'Very easy / no problem / a breeze / simple']
  },
  {
    id: 'id_013', phrase: 'break a leg', meaning: '¡Mucha suerte! (expresión teatral)',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: '"I have my driving test tomorrow." — "_____ _ ___!"', blank: 'Break a leg', context: 'Wishing luck' },
      { text: "You're going on stage in five minutes — _____ _ ___!", blank: 'break a leg', context: 'Pre-performance wish' }
    ],
    hints: ['A theatrical expression meaning \'good luck\'', 'b____ a l__', 'Good luck / all the best / knock \'em dead']
  },
  {
    id: 'id_014', phrase: 'cost an arm and a leg', meaning: 'costar un ojo de la cara / ser muy caro',
    level: 'B1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "That handbag ____ __ ___ ___ _ ___.", blank: 'cost an arm and a leg', context: 'Expensive purchase' },
      { text: 'Eating out in London _____ __ ___ ___ _ ___.', blank: 'costs an arm and a leg', context: 'Expensive city' }
    ],
    hints: ['Be very expensive', 'c___ a_ a__ a__ a l__', 'Be very expensive / cost a fortune / be pricey']
  },
  {
    id: 'id_015', phrase: 'hang in there', meaning: 'aguanta / persevera / no te rindas',
    level: 'B1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: '____ __ _____ — things will get better soon.', blank: 'Hang in there', context: 'Encouragement' },
      { text: 'I know it\'s tough, but just ____ __ _____.', blank: 'hang in there', context: 'Motivating someone' }
    ],
    hints: ['Stay strong and keep going through a difficult time', 'h___ i_ t_____', 'Hold on / persevere / stay strong / keep going']
  },
  {
    id: 'id_016', phrase: 'hit the ground running', meaning: 'empezar con mucha energía / arrancar a todo vapor',
    level: 'B2', category: 'Idioms', source: 'Harvard Business Review',
    sentences: [
      { text: 'We need someone who can ___ ___ ______ _______ from day one.', blank: 'hit the ground running', context: 'Job requirement' },
      { text: 'She ___ ___ ______ _______ in her new role.', blank: 'hit the ground running', context: 'New job' }
    ],
    hints: ['Start something with high energy and speed, without a slow warm-up', 'h__ t__ g_____ r______', 'Start fast / begin immediately at full speed / dive straight in']
  },
  {
    id: 'id_017', phrase: 'burn bridges', meaning: 'quemar los puentes / destruir relaciones permanentemente',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Don't ____ _______ when you resign — you might need them later.", blank: 'burn bridges', context: 'Career advice' },
      { text: 'He ____ _______ with all his former colleagues.', blank: 'burned bridges', context: 'Relationship damage' }
    ],
    hints: ['Permanently damage a relationship so you can never go back', 'b___ b_______', 'Destroy relationships / cut ties permanently / close doors']
  },
  {
    id: 'id_018', phrase: 'the tip of the iceberg', meaning: 'la punta del iceberg / solo una pequeña parte del problema',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "This one complaint is just ___ ___ __ ___ _______.", blank: 'the tip of the iceberg', context: 'Bigger underlying problem' },
      { text: 'The losses we\'ve seen so far are only ___ ___ __ ___ _______.', blank: 'the tip of the iceberg', context: 'Financial warning' }
    ],
    hints: ['A small visible part of a much larger hidden problem', 't__ t__ o_ t__ i_____', 'Just the surface / a small visible part of a bigger issue']
  },
  {
    id: 'id_019', phrase: 'bite off more than you can chew', meaning: 'abarcar más de lo que puedes / comprometerse a demasiado',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I took on three projects at once and ____ ___ ____ ____ _ _____ _____.', blank: 'bit off more than I could chew', context: 'Overcommitting' },
      { text: "Don't ____ ___ ____ ____ ___ ___ ____.", blank: 'bite off more than you can chew', context: 'Warning about capacity' }
    ],
    hints: ['Take on more than you can handle', 'b___ o__ m___ t___ y__ c__ c___', 'Overcommit / take on too much / overextend yourself']
  },
  {
    id: 'id_020', phrase: 'back to square one', meaning: 'volver al punto de partida / empezar desde cero de nuevo',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The prototype failed, so it\'s ____ __ ______ ___ for the team.', blank: 'back to square one', context: 'Project failure' },
      { text: 'Our main investor pulled out — we\'re ____ __ ______ ___.', blank: 'back to square one', context: 'Business setback' }
    ],
    hints: ['Having to start again from the beginning after a setback', 'b___ t_ s_____ o__', 'Start over / begin again / return to the beginning']
  },
  {
    id: 'id_021', phrase: 'get cold feet', meaning: 'acobardarse / perder el valor en el último momento',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'She ___ ____ ____ before the wedding and called it off.', blank: 'got cold feet', context: 'Pre-wedding nerves' },
      { text: 'Don\'t ___ ____ _____ now — you\'ve worked too hard for this.', blank: 'get cold feet', context: 'Encouragement' }
    ],
    hints: ['Suddenly become nervous or afraid to do something', 'g__ c___ f____', 'Lose nerve / get scared / hesitate at the last moment']
  },
  {
    id: 'id_022', phrase: 'miss the point', meaning: 'perder el punto / no entender lo esencial',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I think you\'re _______ ___ _____ — the issue isn\'t the money.', blank: 'missing the point', context: 'Misunderstanding' },
      { text: 'His response completely ______ ___ _____.', blank: 'missed the point', context: 'Wrong answer' }
    ],
    hints: ['Fail to understand the main or most important thing', 'm___ t__ p____', 'Misunderstand / not get it / overlook the key issue']
  },
  {
    id: 'id_023', phrase: 'in the long run', meaning: 'a largo plazo / con el tiempo',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'It\'s more expensive now, but it\'ll save money __ ___ ____ ___.', blank: 'in the long run', context: 'Investment decision' },
      { text: 'Regular exercise pays off __ ___ ____ ___.', blank: 'in the long run', context: 'Health advice' }
    ],
    hints: ['Over a long period of time, looking at the bigger picture', 'i_ t__ l___ r__', 'Over time / eventually / in the end / long-term']
  },
  {
    id: 'id_024', phrase: 'on the same page', meaning: 'estar de acuerdo / tener la misma comprensión del tema',
    level: 'B1', category: 'Idioms', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's make sure we're __ ___ ____ ____ before the meeting.", blank: 'on the same page', context: 'Team alignment' },
      { text: 'I want to make sure everyone is __ ___ ____ ____ about the plan.', blank: 'on the same page', context: 'Communication' }
    ],
    hints: ['In agreement and having the same understanding', 'o_ t__ s___ p___', 'Aligned / in agreement / having the same understanding']
  },
  {
    id: 'id_025', phrase: 'pull someone\'s leg', meaning: 'tomarle el pelo a alguien / bromear',
    level: 'B1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'Are you _______ __ ____? That can\'t be true!', blank: 'pulling my leg', context: 'Disbelief' },
      { text: 'Don\'t worry — I was just ________ __ ____.', blank: 'pulling your leg', context: 'Joking' }
    ],
    hints: ['Joke with someone / tease them in a friendly way', 'p___ s_____\'s l__', 'Tease / joke / be kidding / wind someone up']
  },
  {
    id: 'id_026', phrase: 'cut to the chase', meaning: 'ir directo al grano / dejar de rodeos',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Let's ___ __ ___ _____ — what\'s the budget?", blank: 'cut to the chase', context: 'Business conversation' },
      { text: '__ ___ ___ _____: we need to reduce costs.', blank: 'cut to the chase', context: 'Direct communication' }
    ],
    hints: ['Get directly to the most important point without wasting time', 'c__ t_ t__ c_____', 'Get to the point / stop beating around the bush / be direct']
  },
  {
    id: 'id_027', phrase: 'take it with a grain of salt', meaning: 'tomárselo con reservas / no creerlo completamente',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "You should ____ that review ____ _ _____ __ ____.", blank: 'take / with a grain of salt', context: 'Skepticism' },
      { text: '_____ __ ____ _ _____ __ ____ — he tends to exaggerate.', blank: 'Take it with a grain of salt', context: 'Doubting a source' }
    ],
    hints: ['Be skeptical and not believe something entirely', 't___ i_ w___ a g___ o_ s___', 'Be skeptical / don\'t believe entirely / take with caution']
  },
  {
    id: 'id_028', phrase: 'the elephant in the room', meaning: 'el elefante en la habitación / el tema que nadie quiere mencionar',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "Let's address ___ ________ __ ___ _____ — the company is losing money.", blank: 'the elephant in the room', context: 'Avoiding a topic' },
      { text: 'His debt is ___ ________ __ ___ _____ that nobody talks about.', blank: 'the elephant in the room', context: 'Unspoken issue' }
    ],
    hints: ['An obvious serious problem that everyone is avoiding talking about', 't__ e_______ i_ t__ r___', 'Obvious problem no one mentions / awkward topic being avoided']
  },
  {
    id: 'id_029', phrase: 'throw in the towel', meaning: 'tirar la toalla / rendirse',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Don't _____ __ ___ _____ yet — you still have a chance.", blank: 'throw in the towel', context: 'Encouragement' },
      { text: 'After three failed attempts, he ______ __ ___ _____.', blank: 'threw in the towel', context: 'Giving up' }
    ],
    hints: ['Admit defeat and stop trying', 't____ i_ t__ t_____', 'Give up / surrender / quit / admit defeat']
  },
  {
    id: 'id_030', phrase: 'go the extra mile', meaning: 'hacer un esfuerzo extra / dar más de lo necesario',
    level: 'B1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'She always _____ ___ _____ ____ to make clients happy.', blank: 'goes the extra mile', context: 'Customer service' },
      { text: 'If you want to stand out, you need to __ ___ _____ ____.', blank: 'go the extra mile', context: 'Career advice' }
    ],
    hints: ['Make more effort than is required or expected', 'g_ t__ e____ m___', 'Do more than expected / put in extra effort / go above and beyond']
  },
  {
    id: 'id_031', phrase: 'see eye to eye', meaning: 'estar de acuerdo / ver las cosas de la misma manera',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We don't always ___ ___ __ ___, but we respect each other.", blank: 'see eye to eye', context: 'Relationship' },
      { text: 'The two managers rarely ___ ___ __ ___ on strategy.', blank: 'see eye to eye', context: 'Team disagreement' }
    ],
    hints: ['Agree with someone / share the same opinion', 's__ e__ t_ e__', 'Agree / be on the same wavelength / think alike']
  },
  {
    id: 'id_032', phrase: 'in over your head', meaning: 'metido en algo demasiado difícil / sobrepasado',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "I think I'm __ ____ __ ____ with this project.", blank: 'in over my head', context: 'Overcommitted' },
      { text: 'He quickly realized he was __ ____ __ _____.', blank: 'in over his head', context: 'Difficult situation' }
    ],
    hints: ['Involved in something more difficult than you can handle', 'i_ o___ y___ h___', 'Overwhelmed / out of your depth / unable to cope']
  },
  {
    id: 'id_033', phrase: 'speak volumes', meaning: 'decir mucho / ser muy revelador',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Her silence ______ _______.', blank: 'spoke volumes', context: 'Implicit communication' },
      { text: 'The low turnout ______ _______ about public interest.', blank: 'spoke volumes', context: 'Revealing result' }
    ],
    hints: ['Communicate a lot without words, or be very revealing', 's____ v______', 'Be very telling / reveal a lot / say a great deal']
  },
  {
    id: 'id_034', phrase: 'feel under the gun', meaning: 'sentirse presionado por el tiempo / con urgencia extrema',
    level: 'C1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "I've been _______ _____ ___ ___ all week with this deadline.", blank: 'feeling under the gun', context: 'Deadline pressure' },
      { text: 'She ____ _____ ___ ___ to deliver results fast.', blank: 'felt under the gun', context: 'Performance pressure' }
    ],
    hints: ['Feel extreme pressure or urgency to act quickly', 'f___ u____ t__ g__', 'Under extreme pressure / on a tight deadline / in a pinch']
  },
  {
    id: 'id_035', phrase: 'no strings attached', meaning: 'sin condiciones / sin compromisos',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "It's a free trial with __ _______ _______.", blank: 'no strings attached', context: 'Marketing offer' },
      { text: 'He offered to help with __ _______ _______.', blank: 'no strings attached', context: 'Generous gesture' }
    ],
    hints: ['Without conditions, obligations, or expectations in return', 'n_ s_______ a_______', 'No conditions / without obligation / unconditional']
  },
  {
    id: 'id_036', phrase: 'a long shot', meaning: 'un tiro largo / algo con pocas probabilidades de éxito',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Applying to Harvard is _ ____ _____, but why not try?", blank: 'a long shot', context: 'Ambitious goal' },
      { text: 'Winning the lottery is _ ____ _____. ', blank: 'a long shot', context: 'Unlikely outcome' }
    ],
    hints: ['Something unlikely to succeed', 'a l___ s___', 'Unlikely / low chance / not probable / a slim chance']
  },
  {
    id: 'id_037', phrase: 'take a rain check', meaning: 'posponer para otra ocasión / dejar para otro momento',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "I'd love to come, but can I ____ _ ____ _____?", blank: 'take a rain check', context: 'Declining with intention to reschedule' },
      { text: "I'll have to ____ _ ____ _____ on dinner tonight.", blank: 'take a rain check', context: 'Postponing plans' }
    ],
    hints: ['Politely decline now but express willingness to do it another time', 't___ a r___ c_____', 'Postpone / do it another time / decline but keep the option open']
  },
  {
    id: 'id_038', phrase: 'on thin ice', meaning: 'en terreno peligroso / en una situación arriesgada',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "After the third warning, he knew he was __ ____ ___.", blank: 'on thin ice', context: 'Job risk' },
      { text: "You're __ ____ ___ with those comments — be careful.", blank: 'on thin ice', context: 'Social risk' }
    ],
    hints: ['In a risky or precarious situation where you might face consequences', 'o_ t___ i__', 'In a risky position / treading carefully / at risk']
  },
  {
    id: 'id_039', phrase: 'read between the lines', meaning: 'leer entre líneas / entender lo que no se dice explícitamente',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'If you ____ _______ ___ _____, it\'s clear she\'s not happy.', blank: 'read between the lines', context: 'Subtext' },
      { text: 'You have to ____ _______ ___ _____ to understand the email.', blank: 'read between the lines', context: 'Communication analysis' }
    ],
    hints: ['Understand the hidden or implied meaning of something said or written', 'r___ b______ t__ l____', 'Read the subtext / understand the implicit message / infer the real meaning']
  },
  {
    id: 'id_040', phrase: 'all in all', meaning: 'en general / considerando todo / en conjunto',
    level: 'B1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: '___ __ ___, it was a great trip despite the weather.', blank: 'All in all', context: 'Travel summary' },
      { text: '___ __ ___, I think the meeting went well.', blank: 'All in all', context: 'Meeting debrief' }
    ],
    hints: ['Considering everything together; in general', 'a__ i_ a__', 'Overall / on the whole / taking everything into account']
  },
  {
    id: 'id_041', phrase: 'give the benefit of the doubt', meaning: 'dar el beneficio de la duda / asumir lo mejor',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "He's new — we should ____ ___ ___ _______ __ ___ _____ this time.", blank: 'give him the benefit of the doubt', context: 'Charitable judgment' },
      { text: "I'll ____ ___ ___ _______ __ ___ _____ since it\'s the first offense.", blank: 'give you the benefit of the doubt', context: 'Forgiving a mistake' }
    ],
    hints: ['Assume someone is innocent or had good intentions when uncertain', 'g___ t__ b______ o_ t__ d_____', 'Trust despite uncertainty / assume the best / not blame without proof']
  },
  {
    id: 'id_042', phrase: 'cut corners', meaning: 'hacer algo de forma chapucera para ahorrar tiempo o dinero',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "They ___ _______ on the construction — that's why it failed.", blank: 'cut corners', context: 'Quality issue' },
      { text: 'Never ___ _______ when it comes to safety.', blank: 'cut corners', context: 'Safety advice' }
    ],
    hints: ['Do something quickly and cheaply by not following all the required steps', 'c__ c_______', 'Do a poor job / skip steps / reduce quality to save time/money']
  },
  {
    id: 'id_043', phrase: 'get the ball rolling', meaning: 'poner las cosas en marcha / iniciar algo',
    level: 'B1', category: 'Idioms', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's ___ ___ ____ _______ with the brainstorming session.", blank: 'get the ball rolling', context: 'Starting a process' },
      { text: 'Someone needs to ___ ___ ____ _______ on this project.', blank: 'get the ball rolling', context: 'Initiating action' }
    ],
    hints: ['Start or initiate an activity or process', 'g__ t__ b___ r______', 'Start / initiate / kick off / begin the process']
  },
  {
    id: 'id_044', phrase: 'at the drop of a hat', meaning: 'al instante / sin dudarlo / de inmediato',
    level: 'C1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'He would quit his job __ ___ ____ __ _ ___ if he got the right offer.', blank: 'at the drop of a hat', context: 'Readiness' },
      { text: 'She was always ready to help __ ___ ____ __ _ ___.', blank: 'at the drop of a hat', context: 'Generous person' }
    ],
    hints: ['Immediately and without hesitation', 'a_ t__ d___ o_ a h__', 'Immediately / without hesitation / instantly / right away']
  },
  {
    id: 'id_045', phrase: 'leave no stone unturned', meaning: 'no dejar nada sin intentar / agotar todas las posibilidades',
    level: 'C1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "We'll _____ __ _____ ________ to find a solution.", blank: 'leave no stone unturned', context: 'Thorough effort' },
      { text: "The detective _____ __ _____ ________ in his investigation.", blank: 'left no stone unturned', context: 'Investigation' }
    ],
    hints: ['Try every possible option or avenue', 'l____ n_ s____ u_______', 'Try everything / be exhaustive / leave no option unexplored']
  },
  {
    id: 'id_046', phrase: 'lay your cards on the table', meaning: 'poner las cartas sobre la mesa / ser completamente transparente',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Let me ___ __ _____ __ ___ _____ — I need this contract.", blank: 'lay my cards on the table', context: 'Negotiation' },
      { text: "It's time to ___ ____ _____ __ ___ _____ and be honest.", blank: 'lay your cards on the table', context: 'Honest conversation' }
    ],
    hints: ['Be completely honest and transparent about your position', 'l__ y___ c____ o_ t__ t_____', 'Be transparent / show your hand / be completely honest']
  },
  {
    id: 'id_047', phrase: 'wear your heart on your sleeve', meaning: 'llevar el corazón en la mano / mostrar abiertamente sus emociones',
    level: 'C1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "She's the kind of person who _____ ___ _____ __ ___ ______ — you always know how she feels.", blank: 'wears her heart on her sleeve', context: 'Emotional openness' },
      { text: "Don't ____ ____ _____ __ ____ ______ in a negotiation.", blank: 'wear your heart on your sleeve', context: 'Strategy advice' }
    ],
    hints: ['Openly and visibly show your emotions to others', 'w___ y___ h____ o_ y___ s_____', 'Be emotionally open / show your feelings openly / be transparent with emotions']
  },
  {
    id: 'id_048', phrase: 'in a nutshell', meaning: 'en pocas palabras / en resumen',
    level: 'B1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: '__ _ ________, the plan is to expand into three new markets.', blank: 'In a nutshell', context: 'Summary' },
      { text: 'Can you explain __ _ ________ what went wrong?', blank: 'in a nutshell', context: 'Request for summary' }
    ],
    hints: ['In a few words / summarized briefly', 'i_ a n_______', 'In summary / briefly / to put it simply / in short']
  },
  {
    id: 'id_049', phrase: 'once in a blue moon', meaning: 'muy raramente / casi nunca',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'He only calls _____ __ _ ____ ____ — maybe twice a year.', blank: 'once in a blue moon', context: 'Rare contact' },
      { text: 'Things like this happen _____ __ _ ____ ____.', blank: 'once in a blue moon', context: 'Rare event' }
    ],
    hints: ['Very rarely / almost never', 'o___ i_ a b___ m___', 'Rarely / very seldom / almost never / hardly ever']
  },
  {
    id: 'id_050', phrase: 'the last straw', meaning: 'el colmo / la gota que derramó el vaso',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'Being passed over for promotion was ___ ____ _____ — she resigned.', blank: 'the last straw', context: 'Decision point' },
      { text: "That comment was ___ ____ _____ that ended the friendship.", blank: 'the last straw', context: 'Breaking point' }
    ],
    hints: ['The final problem in a series that makes you lose patience', 't__ l___ s_____', 'The final trigger / breaking point / the thing that ends your patience']
  },
  // Continue with more idioms...
  {
    id: 'id_051', phrase: 'let sleeping dogs lie', meaning: 'no remover el pasado / no despertar problemas que están dormidos',
    level: 'C1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "I wouldn't bring up the old argument — ___ _______ ____ ___.", blank: 'let sleeping dogs lie', context: 'Conflict avoidance' },
      { text: "Sometimes it's better to ___ _______ ____ ___ than to reopen old wounds.", blank: 'let sleeping dogs lie', context: 'Wisdom' }
    ],
    hints: ['Avoid bringing up a past problem that has settled', 'l__ s_______ d___ l__', 'Leave the past alone / don\'t stir up old problems']
  },
  {
    id: 'id_052', phrase: 'kill two birds with one stone', meaning: 'matar dos pájaros de un tiro / resolver dos cosas a la vez',
    level: 'B1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "I can pick up the groceries on the way to the gym — ____ ___ _____ _____ ___ ___.", blank: 'kill two birds with one stone', context: 'Efficiency' },
      { text: "If we combine the meetings, we'll ____ ___ _____ _____ ___ ___.", blank: 'kill two birds with one stone', context: 'Scheduling' }
    ],
    hints: ['Achieve two things with a single action', 'k___ t__ b____ w___ o__ s____', 'Accomplish two goals at once / be efficient / achieve two things simultaneously']
  },
  {
    id: 'id_053', phrase: 'not my cup of tea', meaning: 'no es lo mío / no me gusta / no es para mí',
    level: 'B1', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "Horror films are ___ __ ___ __ ___ — I can't watch them.", blank: 'not my cup of tea', context: 'Personal preference' },
      { text: 'Camping is ___ ___ ___ __ ___ — I prefer hotels.', blank: 'not really my cup of tea', context: 'Lifestyle preference' }
    ],
    hints: ['Something you don\'t enjoy or that doesn\'t suit you', 'n__ m_ c__ o_ t__', 'Not my thing / not for me / I don\'t enjoy it']
  },
  {
    id: 'id_054', phrase: 'a catch-22', meaning: 'un círculo vicioso / una situación sin salida / un dilema irresoluble',
    level: 'C1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "You need experience to get a job, but you need a job to get experience — it's _ ______-__.", blank: 'a catch-22', context: 'Job search dilemma' },
      { text: "It's _ ______-__ situation with no easy answer.", blank: 'a catch-22', context: 'Dilemma' }
    ],
    hints: ['A frustrating situation where you\'re trapped by contradictory conditions', 'a c_____-2_', 'A paradox / impossible dilemma / no-win situation / circular trap']
  },
  {
    id: 'id_055', phrase: 'get your act together', meaning: 'organizarse / ponerse las pilas / comportarse mejor',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: "You need to ___ ____ ___ ________ if you want to pass.", blank: 'get your act together', context: 'Academic advice' },
      { text: "The company needs to ___ ___ ___ ________ or they'll lose clients.", blank: 'get their act together', context: 'Business criticism' }
    ],
    hints: ['Organize yourself and start behaving or performing properly', 'g__ y___ a__ t_______', 'Get organized / shape up / get serious / pull yourself together']
  },
  {
    id: 'id_056', phrase: 'the whole nine yards', meaning: 'todo / la totalidad / sin dejar nada fuera',
    level: 'B2', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'They threw a party with catering, live music, fireworks — ___ _____ ____ _____.', blank: 'the whole nine yards', context: 'Lavish event' },
      { text: "She went through ___ _____ ____ _____ — interviews, background check, tests.", blank: 'the whole nine yards', context: 'Thorough process' }
    ],
    hints: ['Everything; the complete amount or extent of something', 't__ w____ n___ y____', 'Everything / the full thing / all of it / the complete deal']
  },
  {
    id: 'id_057', phrase: 'add fuel to the fire', meaning: 'echar leña al fuego / empeorar una situación ya tensa',
    level: 'B2', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'His comment only ___ ____ __ ___ _____ and made things worse.', blank: 'added fuel to the fire', context: 'Escalating conflict' },
      { text: "Don't ___ ____ __ ___ _____ — just let it go.", blank: 'add fuel to the fire', context: 'Conflict advice' }
    ],
    hints: ['Make a difficult or angry situation even worse', 'a__ f___ t_ t__ f___', 'Worsen a situation / escalate conflict / inflame tensions']
  },
  {
    id: 'id_058', phrase: 'keep a low profile', meaning: 'mantenerse en perfil bajo / evitar llamar la atención',
    level: 'B2', category: 'Idioms', source: 'BBC Learning English',
    sentences: [
      { text: 'After the scandal, he decided to ____ _ ___ _______.', blank: 'keep a low profile', context: 'Post-scandal behavior' },
      { text: "Try to ____ _ ___ _______ during the investigation.", blank: 'keep a low profile', context: 'Advice' }
    ],
    hints: ['Avoid attention and stay out of the public eye', 'k___ a l__ p_______', 'Stay out of the spotlight / avoid attention / be discreet']
  },
  {
    id: 'id_059', phrase: 'bite the hand that feeds you', meaning: 'morder la mano que te da de comer / ser ingrato con quien te ayuda',
    level: 'C1', category: 'Idioms', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Criticizing your biggest client is _______ ___ ____ ____ _____ ___.", blank: 'biting the hand that feeds you', context: 'Business relationship' },
      { text: "Don't ____ ___ ____ ____ _____ ___ — they pay your salary.", blank: 'bite the hand that feeds you', context: 'Employee warning' }
    ],
    hints: ['Harm or upset the person or organization that provides you with support', 'b___ t__ h___ t___ f____ y__', 'Be ungrateful to benefactors / harm those who help you']
  },
  {
    id: 'id_060', phrase: 'in the same boat', meaning: 'estar en la misma situación / compartir el mismo problema',
    level: 'B1', category: 'Idioms', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Don't worry — we're all __ ___ ____ _____ with this deadline.", blank: 'in the same boat', context: 'Shared difficulty' },
      { text: "I'm struggling too — we're __ ___ ____ _____ here.", blank: 'in the same boat', context: 'Solidarity' }
    ],
    hints: ['In the same difficult situation as someone else', 'i_ t__ s___ b___', 'In the same situation / facing the same problem / equally affected']
  }
]
