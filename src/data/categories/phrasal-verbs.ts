import type { Word } from '@/types'

export const phrasalVerbsWords: Word[] = [
  {
    id: 'pv_001', phrase: 'bring about', meaning: 'causar / provocar / hacer que algo ocurra',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The new policy _______ _____ significant changes.', blank: 'brought about', context: 'Policy effect' },
      { text: 'What _______ _____ this transformation?', blank: 'brought about', context: 'Cause analysis' }
    ],
    hints: ['Make something happen, often a change or result', 'b_____ a_____', 'Cause / lead to / produce / result in']
  },
  {
    id: 'pv_002', phrase: 'call off', meaning: 'cancelar / suspender un evento planeado',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "They _______ ___ the wedding at the last minute.", blank: 'called off', context: 'Cancelled event' },
      { text: 'The match was _______ ___ due to heavy rain.', blank: 'called off', context: 'Sports cancellation' }
    ],
    hints: ['Cancel a planned event or arrangement', 'c___ o__', 'Cancel / scrap / cancel / abandon']
  },
  {
    id: 'pv_003', phrase: 'carry out', meaning: 'llevar a cabo / ejecutar / realizar algo',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The team _______ ___ extensive research on the topic.', blank: 'carried out', context: 'Research' },
      { text: "We need to ______ ___ the plan as discussed.", blank: 'carry out', context: 'Execution' }
    ],
    hints: ['Do or perform a task or plan', 'c_____ o__', 'Execute / perform / implement / conduct']
  },
  {
    id: 'pv_004', phrase: 'come up with', meaning: 'ocurrírsele / proponer / generar una idea',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'She ____ __ ____ a brilliant solution to the problem.', blank: 'came up with', context: 'Problem solving' },
      { text: 'Can you ____ __ ____ a better idea?', blank: 'come up with', context: 'Brainstorming' }
    ],
    hints: ['Think of or produce a new idea, solution, or plan', 'c___ u_ w___', 'Think of / devise / generate / produce (an idea)']
  },
  {
    id: 'pv_005', phrase: 'deal with', meaning: 'lidiar con / manejar / ocuparse de',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'How do you usually ____ ____ stress?', blank: 'deal with', context: 'Coping strategy' },
      { text: "I'll ____ ____ the invoices tomorrow.", blank: 'deal with', context: 'Task management' }
    ],
    hints: ['Handle a situation or take action to resolve an issue', 'd___ w___', 'Handle / manage / cope with / address']
  },
  {
    id: 'pv_006', phrase: 'end up', meaning: 'terminar / acabar de cierta manera',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'We took a wrong turn and ___ __ on the wrong side of town.', blank: 'ended up', context: 'Navigation mistake' },
      { text: 'If you keep skipping class, you\'ll ___ __ failing.', blank: 'end up', context: 'Consequence' }
    ],
    hints: ['Reach a final situation, often unplanned', 'e__ u_', 'Finish / arrive at / result in / wind up']
  },
  {
    id: 'pv_007', phrase: 'fall apart', meaning: 'desmoronarse / caerse a pedazos / fracasar',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'The deal started to ____ _____ at the last minute.', blank: 'fall apart', context: 'Failed negotiation' },
      { text: 'My old laptop is _______ _____ — I need a new one.', blank: 'falling apart', context: 'Deterioration' }
    ],
    hints: ['Break into pieces physically, or disintegrate as a plan or relationship', 'f___ a_____', 'Disintegrate / break down / collapse / come apart']
  },
  {
    id: 'pv_008', phrase: 'give up', meaning: 'rendirse / abandonar algo / dejar un hábito',
    level: 'A2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Don't ____ __ — you're almost there!", blank: 'give up', context: 'Encouragement' },
      { text: 'She ____ __ smoking after 10 years.', blank: 'gave up', context: 'Quitting a habit' }
    ],
    hints: ['Stop trying, or quit a habit or activity', 'g___ u_', 'Surrender / quit / stop trying / abandon']
  },
  {
    id: 'pv_009', phrase: 'hold up', meaning: 'retener / demorar; también resistir (aguantar)',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Sorry I'm late — I was _____ __ in traffic.", blank: 'held up', context: 'Delay' },
      { text: 'How is the old bridge _______ __ after the flood?', blank: 'holding up', context: 'Structural status' }
    ],
    hints: ['Delay something or someone; also: remain strong under pressure', 'h___ u_', 'Delay / endure / withstand / stop']
  },
  {
    id: 'pv_010', phrase: 'keep on', meaning: 'seguir haciendo algo / continuar sin parar',
    level: 'A2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: "____ __ practicing and you\'ll improve.", blank: 'Keep on', context: 'Encouragement' },
      { text: 'He ____ __ calling even after she asked him to stop.', blank: 'kept on', context: 'Persistence' }
    ],
    hints: ['Continue doing something', 'k___ o_', 'Continue / persist / carry on / keep going']
  },
  {
    id: 'pv_011', phrase: 'let down', meaning: 'decepcionar / fallarle a alguien',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'I felt really ___ _____ when she cancelled last minute.', blank: 'let down', context: 'Disappointment' },
      { text: "Don't ___ __ _____ — I'm counting on you.", blank: 'let me down', context: 'Expressing trust' }
    ],
    hints: ['Disappoint someone or fail to meet their expectations', 'l__ d___', 'Disappoint / fail / betray expectations / not follow through']
  },
  {
    id: 'pv_012', phrase: 'make up for', meaning: 'compensar / resarcir algo que estuvo mal',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'I\'ll ____ __ ___ the missed class by studying extra.', blank: 'make up for', context: 'Academic recovery' },
      { text: 'How can I ____ __ ___ being so rude?', blank: 'make up for', context: 'Apology' }
    ],
    hints: ['Do something to offset or compensate for something negative', 'm___ u_ f__', 'Compensate for / offset / atone for / make amends for']
  },
  {
    id: 'pv_013', phrase: 'narrow down', meaning: 'reducir las opciones / afinar la búsqueda',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'We need to ______ _____ the candidates to three.', blank: 'narrow down', context: 'Recruitment' },
      { text: "I've ________ _____ my choices to two apartments.", blank: 'narrowed down', context: 'Decision making' }
    ],
    hints: ['Reduce a large number of options to a smaller set', 'n______ d___', 'Reduce / filter / limit / shortlist']
  },
  {
    id: 'pv_014', phrase: 'open up', meaning: 'abrirse / hablar de sentimientos; también abrir un negocio',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "She finally ______ __ about her problems in therapy.", blank: 'opened up', context: 'Emotional expression' },
      { text: 'They plan to ______ __ three new stores next year.', blank: 'open up', context: 'Business expansion' }
    ],
    hints: ['Start talking about feelings; or start a business / become available', 'o___ u_', 'Share feelings / reveal yourself / start operating / expand']
  },
  {
    id: 'pv_015', phrase: 'pass on', meaning: 'transmitir / pasar información o saludos; también declinar',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Could you ____ __ this message to the team?", blank: 'pass on', context: 'Relaying information' },
      { text: "I'll ___ __ the dessert, thanks — I'm full.", blank: 'pass on', context: 'Declining politely' }
    ],
    hints: ['Relay information to someone else; or decide not to have something', 'p___ o_', 'Relay / transmit / forward / decline / skip']
  },
  {
    id: 'pv_016', phrase: 'point out', meaning: 'señalar / hacer notar / indicar',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'She _______ ___ several errors in the report.', blank: 'pointed out', context: 'Feedback' },
      { text: 'I just want to _____ ___ that this approach has risks.', blank: 'point out', context: 'Warning' }
    ],
    hints: ['Draw attention to a fact, error, or detail', 'p____ o__', 'Indicate / highlight / note / draw attention to']
  },
  {
    id: 'pv_017', phrase: 'rule out', meaning: 'descartar / eliminar una posibilidad',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "The doctor _______ ___ cancer after the tests.", blank: 'ruled out', context: 'Medical diagnosis' },
      { text: 'We can\'t ______ ___ the possibility of a merger.', blank: 'rule out', context: 'Business strategy' }
    ],
    hints: ['Eliminate or dismiss a possibility or option', 'r___ o__', 'Exclude / eliminate / dismiss / discard as an option']
  },
  {
    id: 'pv_018', phrase: 'set up', meaning: 'instalar / organizar / crear / establecer',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Can you help me ___ __ the new printer?', blank: 'set up', context: 'Tech setup' },
      { text: 'They ___ __ a charity to help homeless people.', blank: 'set up', context: 'Organization founding' }
    ],
    hints: ['Prepare, install, or establish something', 's__ u_', 'Install / establish / create / configure / organize']
  },
  {
    id: 'pv_019', phrase: 'take on', meaning: 'asumir (una responsabilidad) / contratar / aceptar un desafío',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: "I don't think I should ____ __ any more projects right now.", blank: 'take on', context: 'Workload' },
      { text: 'The company plans to ____ __ 50 new employees.', blank: 'take on', context: 'Hiring' }
    ],
    hints: ['Accept or begin to deal with a responsibility, task, or challenge', 't___ o_', 'Accept / undertake / hire / assume responsibility for']
  },
  {
    id: 'pv_020', phrase: 'turn down', meaning: 'rechazar / negarse a aceptar; también bajar el volumen',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'She _______ _____ the job offer to stay closer to family.', blank: 'turned down', context: 'Career decision' },
      { text: 'Could you ______ _____ the music? I\'m trying to concentrate.', blank: 'turn down', context: 'Noise request' }
    ],
    hints: ['Reject an offer; or decrease volume/heat', 't___ d___', 'Reject / refuse / decline / reduce (volume/heat)']
  },
  {
    id: 'pv_021', phrase: 'use up', meaning: 'agotar / consumir todo de algo',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We've ____ __ all the paper in the printer.", blank: 'used up', context: 'Office supplies' },
      { text: "Don't ____ __ your energy on tasks that don't matter.", blank: 'use up', context: 'Productivity' }
    ],
    hints: ['Consume the entire supply of something', 'u__ u_', 'Exhaust / consume entirely / deplete / finish off']
  },
  {
    id: 'pv_022', phrase: 'wear off', meaning: 'desvanecerse / perder efecto gradualmente',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'The excitement of the new job _____ ___ after a few months.', blank: 'wore off', context: 'Waning enthusiasm' },
      { text: 'Wait for the anesthetic to _____ ___ before eating.', blank: 'wear off', context: 'Medical' }
    ],
    hints: ['Gradually lose effect or intensity', 'w___ o__', 'Fade / diminish / lose effect / disappear gradually']
  },
  {
    id: 'pv_023', phrase: 'zoom in on', meaning: 'acercar el zoom / enfocarse en un detalle',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Let me ____ __ __ that part of the image.', blank: 'zoom in on', context: 'Presentation' },
      { text: "The camera _______ __ __ the speaker's face.", blank: 'zoomed in on', context: 'Video production' }
    ],
    hints: ['Make a part of an image larger; focus attention on a specific detail', 'z___ i_ o_', 'Magnify / focus closely on / enlarge a section of']
  },
  {
    id: 'pv_024', phrase: 'account for', meaning: 'explicar / justificar / representar una proporción',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'Can you _______ ___ the missing funds?', blank: 'account for', context: 'Financial explanation' },
      { text: 'Mobile users _______ ___ 60% of our traffic.', blank: 'account for', context: 'Data analysis' }
    ],
    hints: ['Explain why something happened; or constitute a proportion of a total', 'a______ f__', 'Explain / justify / make up / constitute / represent']
  },
  {
    id: 'pv_025', phrase: 'break down', meaning: 'averiarse; también desglosar información; también derrumbarse emocionalmente',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'The car ______ _____ on the highway.', blank: 'broke down', context: 'Mechanical failure' },
      { text: 'Could you ______ _____ the costs for me?', blank: 'break down', context: 'Financial explanation' }
    ],
    hints: ['Stop working (machine); analyze in detail; or lose emotional control', 'b____ d___', 'Break / stop working / analyze in detail / collapse emotionally']
  },
  {
    id: 'pv_026', phrase: 'call for', meaning: 'requerir / demandar / justificar',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'This situation _____ ___ immediate action.', blank: 'calls for', context: 'Urgency' },
      { text: "The plan _____ ___ a significant investment.", blank: 'calls for', context: 'Requirements' }
    ],
    hints: ['Require or demand a particular action or thing', 'c___ f__', 'Require / demand / necessitate / justify']
  },
  {
    id: 'pv_027', phrase: 'catch on', meaning: 'volverse popular / entender algo / pillar',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The trend _______ __ quickly on social media.', blank: 'caught on', context: 'Viral content' },
      { text: "It took me a while to ______ __ to how the system works.", blank: 'catch on', context: 'Learning' }
    ],
    hints: ['Become popular; or gradually understand how something works', 'c_____ o_', 'Become popular / understand / figure out / grasp']
  },
  {
    id: 'pv_028', phrase: 'come across as', meaning: 'dar la impresión de ser / parecer',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'You might ____ ______ __ arrogant if you say that.', blank: 'come across as', context: 'Communication advice' },
      { text: 'She ____ ______ __ very confident in the interview.', blank: 'came across as', context: 'Interview feedback' }
    ],
    hints: ['Make a particular impression on others', 'c___ a_____ a_', 'Seem / appear / give the impression of being']
  },
  {
    id: 'pv_029', phrase: 'draw on', meaning: 'recurrir a / aprovechar una experiencia o recurso',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'She was able to _____ __ her years of experience to solve the crisis.', blank: 'draw on', context: 'Using experience' },
      { text: 'The author _____ ___ real events to write the novel.', blank: 'drew on', context: 'Creative work' }
    ],
    hints: ['Use your experience, skills, or resources as a source', 'd___ o_', 'Use / rely on / take from / exploit (a resource)']
  },
  {
    id: 'pv_030', phrase: 'face up to', meaning: 'afrontar / hacer frente a algo difícil',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'You need to _____ __ __ the fact that you made a mistake.', blank: 'face up to', context: 'Accountability' },
      { text: "He couldn't _____ __ __ his responsibilities.", blank: 'face up to', context: 'Avoiding duty' }
    ],
    hints: ['Accept and deal with a difficult truth or situation', 'f___ u_ t_', 'Confront / accept / deal with / come to terms with']
  },
  {
    id: 'pv_031', phrase: 'gear up', meaning: 'prepararse / equiparse para algo',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'The company is _______ __ for the busy holiday season.', blank: 'gearing up', context: 'Business preparation' },
      { text: 'Athletes start to _____ __ months before the Olympics.', blank: 'gear up', context: 'Training' }
    ],
    hints: ['Prepare or get ready for something, especially something demanding', 'g___ u_', 'Prepare / get ready / equip yourself / mobilize']
  },
  {
    id: 'pv_032', phrase: 'hand in', meaning: 'entregar / presentar formalmente',
    level: 'A2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'You need to ____ __ the assignment by Friday.', blank: 'hand in', context: 'Academic deadline' },
      { text: 'She ____ __ her resignation last week.', blank: 'handed in', context: 'Resignation' }
    ],
    hints: ['Give something formally to a person in authority', 'h___ i_', 'Submit / deliver / turn in']
  },
  {
    id: 'pv_033', phrase: 'iron out', meaning: 'resolver pequeños problemas / allanar dificultades',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We still need to ____ ___ a few details before we sign.", blank: 'iron out', context: 'Negotiation' },
      { text: "The team _______ ___ most of the bugs before launch.", blank: 'ironed out', context: 'Software' }
    ],
    hints: ['Resolve minor problems or difficulties to make something work smoothly', 'i___ o__', 'Resolve / fix / smooth out / deal with (small problems)']
  },
  {
    id: 'pv_034', phrase: 'jot down', meaning: 'anotar rápidamente / apuntar',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'Let me ___ _____ your phone number.', blank: 'jot down', context: 'Taking a note' },
      { text: 'I ___ _____ a few ideas during the meeting.', blank: 'jotted down', context: 'Note-taking' }
    ],
    hints: ['Write something quickly and briefly', 'j__ d___', 'Write quickly / note down / scribble / record briefly']
  },
  {
    id: 'pv_035', phrase: 'lay off', meaning: 'despedir por reducción / dejar de hacer algo',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'The company had to ___ ___ 200 workers.', blank: 'lay off', context: 'Job cuts' },
      { text: '___ ___ the caffeine — you\'re too wired.', blank: 'Lay off', context: 'Advice to stop something' }
    ],
    hints: ['Dismiss workers due to budget cuts; or stop doing something', 'l__ o__', 'Dismiss / make redundant / stop / ease off on']
  },
  {
    id: 'pv_036', phrase: 'live up to', meaning: 'estar a la altura de / cumplir expectativas',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'The movie didn\'t ____ __ __ the hype.', blank: 'live up to', context: 'Expectations' },
      { text: "She works hard to ____ __ __ her parents' expectations.", blank: 'live up to', context: 'Family pressure' }
    ],
    hints: ['Meet the standard or level that is expected', 'l___ u_ t_', 'Meet expectations / fulfill / measure up to / match']
  },
  {
    id: 'pv_037', phrase: 'mix up', meaning: 'confundir / mezclar / desordenar',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'I always ___ __ their names — they look so alike.', blank: 'mix up', context: 'Confusion between people' },
      { text: 'Someone ___ __ the files and now I can\'t find anything.', blank: 'mixed up', context: 'Disorder' }
    ],
    hints: ['Confuse two or more things, or cause disorder', 'm__ u_', 'Confuse / mix together / muddle / disorder']
  },
  {
    id: 'pv_038', phrase: 'note down', meaning: 'anotar / tomar nota',
    level: 'A2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: '____ _____ your username and password somewhere safe.', blank: 'Note down', context: 'Security advice' },
      { text: 'I _______ _____ the main points from the lecture.', blank: 'noted down', context: 'Study habit' }
    ],
    hints: ['Write down information so you remember it', 'n___ d___', 'Write down / record / take note of']
  },
  {
    id: 'pv_039', phrase: 'opt out of', meaning: 'optar por no participar / desmatricularse',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'You can ___ ___ __ receiving marketing emails.', blank: 'opt out of', context: 'Email preferences' },
      { text: 'She decided to ___ ___ __ the optional seminar.', blank: 'opt out of', context: 'Class registration' }
    ],
    hints: ['Choose not to participate in something', 'o__ o__ o_', 'Choose not to / withdraw from / not participate in']
  },
  {
    id: 'pv_040', phrase: 'pay back', meaning: 'devolver dinero prestado / vengarse',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: "I'll ___ you _____ as soon as I get paid.", blank: 'pay / back', context: 'Repaying a loan' },
      { text: 'He swore he\'d ___ ___ _____ for what they did.', blank: 'pay them back', context: 'Revenge (informal)' }
    ],
    hints: ['Return money that was borrowed; or get revenge', 'p__ b___', 'Repay / reimburse / get even / return']
  },
  {
    id: 'pv_041', phrase: 'pick up on', meaning: 'darse cuenta de algo sutil / captar una señal',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'She _______ __ __ the tension in the room immediately.', blank: 'picked up on', context: 'Social awareness' },
      { text: 'Did you ___ __ __ any problems in the data?', blank: 'pick up on', context: 'Data analysis' }
    ],
    hints: ['Notice something that is not immediately obvious', 'p___ u_ o_', 'Notice / detect / sense / catch / identify']
  },
  {
    id: 'pv_042', phrase: 'plug in', meaning: 'enchufar / conectar a la corriente eléctrica',
    level: 'A2', category: 'Phrasal Verbs', source: 'British Council',
    sentences: [
      { text: 'Make sure your laptop is _______ __ before the call.', blank: 'plugged in', context: 'Power management' },
      { text: "_____ __ the keyboard and reboot.", blank: 'Plug in', context: 'Tech support' }
    ],
    hints: ['Connect a device to an electrical socket', 'p___ i_', 'Connect / plug into power / connect to electricity']
  },
  {
    id: 'pv_043', phrase: 'press on', meaning: 'continuar con determinación / seguir adelante a pesar de todo',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Despite the setbacks, they _______ __ with the project.", blank: 'pressed on', context: 'Perseverance' },
      { text: "We must ______ __ — there's no time to waste.", blank: 'press on', context: 'Urgency' }
    ],
    hints: ['Continue moving forward or working despite difficulties', 'p____ o_', 'Continue / persevere / push forward / keep going despite challenges']
  },
  {
    id: 'pv_044', phrase: 'put forward', meaning: 'proponer / presentar una idea o candidatura',
    level: 'B2', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'She ___ _______ a proposal to restructure the team.', blank: 'put forward', context: 'Business proposal' },
      { text: 'His name was ___ _______ as a candidate.', blank: 'put forward', context: 'Nomination' }
    ],
    hints: ['Suggest or propose an idea, plan, or person for consideration', 'p__ f_______', 'Propose / suggest / nominate / present for consideration']
  },
  {
    id: 'pv_045', phrase: 'run through', meaning: 'repasar / revisar rápidamente',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Let me ___ _______ the main points quickly.", blank: 'run through', context: 'Meeting summary' },
      { text: "Can we ___ _______ the presentation one more time?", blank: 'run through', context: 'Rehearsal' }
    ],
    hints: ['Go through quickly to check or rehearse', 'r__ t______', 'Review quickly / rehearse / go over / skim through']
  },
  {
    id: 'pv_046', phrase: 'scale up', meaning: 'escalar / aumentar la capacidad o tamaño',
    level: 'B2', category: 'Phrasal Verbs', source: 'Harvard Business Review',
    sentences: [
      { text: 'The startup is ready to _____ __ its operations.', blank: 'scale up', context: 'Business growth' },
      { text: "We need to _____ __ production to meet demand.", blank: 'scale up', context: 'Manufacturing' }
    ],
    hints: ['Increase the size, capacity, or scope of an operation', 's____ u_', 'Expand / grow / increase capacity / enlarge operations']
  },
  {
    id: 'pv_047', phrase: 'sign off on', meaning: 'aprobar / dar el visto bueno a algo',
    level: 'B2', category: 'Phrasal Verbs', source: 'Harvard Business Review',
    sentences: [
      { text: 'The CEO needs to ____ ___ __ the budget before we proceed.', blank: 'sign off on', context: 'Approval process' },
      { text: 'Has legal _______ ___ __ the contract?', blank: 'signed off on', context: 'Legal clearance' }
    ],
    hints: ['Give official approval or authorization to something', 's___ o__ o_', 'Approve / authorize / give the go-ahead / greenlight']
  },
  {
    id: 'pv_048', phrase: 'stand out', meaning: 'destacarse / sobresalir entre los demás',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'Her résumé really ______ ___ from the rest.', blank: 'stood out', context: 'Job application' },
      { text: "What makes your product ______ ___ from the competition?", blank: 'stand out', context: 'Marketing' }
    ],
    hints: ['Be clearly better or more noticeable than others', 's____ o__', 'Distinguish yourself / be remarkable / be prominent / excel']
  },
  {
    id: 'pv_049', phrase: 'talk through', meaning: 'discutir en detalle / repasar juntos paso a paso',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Let me ___ ___ you _______ the process.", blank: 'talk / through', context: 'Explaining a process' },
      { text: "Can we ___ _______ the options before deciding?", blank: 'talk through', context: 'Decision making' }
    ],
    hints: ['Discuss something in detail, step by step', 't___ t______', 'Explain in detail / go through together / discuss step by step']
  },
  {
    id: 'pv_050', phrase: 'wrap up', meaning: 'concluir / terminar; también abrigarse',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: "Let's ___ ___ the meeting — we're running out of time.", blank: 'wrap up', context: 'Ending a meeting' },
      { text: "Make sure you ___ __ warmly — it's cold outside.", blank: 'wrap up', context: 'Cold weather' }
    ],
    hints: ['Finish or conclude something; also: dress warmly', 'w___ u_', 'Conclude / finish / end / also: bundle up warmly']
  },
  {
    id: 'pv_051', phrase: 'zoom out', meaning: 'alejar el zoom / ver el panorama general',
    level: 'B1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Let's ____ ___ and look at the bigger picture.", blank: 'zoom out', context: 'Strategic thinking' },
      { text: '_____ ___ on the map to see the whole city.', blank: 'Zoom out', context: 'Navigation' }
    ],
    hints: ['Decrease the magnification to see more; or consider the wider context', 'z___ o__', 'Take a wider view / see the big picture / reduce magnification']
  },
  {
    id: 'pv_052', phrase: 'bounce back', meaning: 'recuperarse rápidamente de un revés',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: 'After the loss, the team _______ _____ stronger than ever.', blank: 'bounced back', context: 'Resilience' },
      { text: 'The market is expected to ______ _____ next quarter.', blank: 'bounce back', context: 'Finance' }
    ],
    hints: ['Recover quickly from a setback or failure', 'b_____ b___', 'Recover / rebound / come back / rally / spring back']
  },
  {
    id: 'pv_053', phrase: 'check out', meaning: 'ver / examinar / también hacer el checkout en hotel',
    level: 'A2', category: 'Phrasal Verbs', source: 'British Council',
    sentences: [
      { text: '_____ ___ this new app — it\'s amazing.', blank: 'Check out', context: 'Recommendation' },
      { text: "We need to _____ ___ of the hotel by 11 AM.", blank: 'check out', context: 'Hotel departure' }
    ],
    hints: ['Look at or examine something; or leave a hotel officially', 'c____ o__', 'Look at / examine / investigate / leave a hotel']
  },
  {
    id: 'pv_054', phrase: 'dig into', meaning: 'profundizar en / investigar a fondo',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "Let's ___ ____ the data and see what\'s really happening.", blank: 'dig into', context: 'Data analysis' },
      { text: 'The journalist _______ ____ the corruption scandal.', blank: 'dug into', context: 'Investigative journalism' }
    ],
    hints: ['Investigate or examine something deeply', 'd__ i___', 'Investigate deeply / examine closely / delve into']
  },
  {
    id: 'pv_055', phrase: 'ease into', meaning: 'adaptarse gradualmente / entrar suavemente en algo',
    level: 'B2', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Let's ____ ____ the new routine gradually.", blank: 'ease into', context: 'Gradual change' },
      { text: "She ______ ____ the conversation carefully.", blank: 'eased into', context: 'Sensitive discussion' }
    ],
    hints: ['Enter or start something new gradually and gently', 'e___ i___', 'Transition gradually / start gently / move slowly into']
  },
  {
    id: 'pv_056', phrase: 'follow up on', meaning: 'dar seguimiento a algo / verificar el progreso',
    level: 'B1', category: 'Phrasal Verbs', source: 'Harvard Business Review',
    sentences: [
      { text: "I'll ______ __ __ your request tomorrow.", blank: 'follow up on', context: 'Customer service' },
      { text: "Did you ______ __ __ the invoice?", blank: 'follow up on', context: 'Accounts' }
    ],
    hints: ['Check on the progress or result of something done earlier', 'f_____ u_ o_', 'Check on / follow through on / track the status of']
  },
  {
    id: 'pv_057', phrase: 'hold out for', meaning: 'aguantar / esperar hasta conseguir lo que se quiere',
    level: 'C1', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: "She's _______ ___ ___ a better salary offer.", blank: 'holding out for', context: 'Negotiation' },
      { text: "I'll ___ ___ ___ the right opportunity rather than settle.", blank: 'hold out for', context: 'Career patience' }
    ],
    hints: ['Refuse to accept less than what you want and wait for it', 'h___ o__ f__', 'Wait for something better / refuse to settle / be patient until you get what you want']
  },
  {
    id: 'pv_058', phrase: 'jump at', meaning: 'aprovechar entusiastamente / no dudar en aceptar',
    level: 'B1', category: 'Phrasal Verbs', source: 'Cambridge Dictionary',
    sentences: [
      { text: "She _______ __ the opportunity to work abroad.", blank: 'jumped at', context: 'Career opportunity' },
      { text: "I'd ______ __ a chance like that.", blank: 'jump at', context: 'Expressing enthusiasm' }
    ],
    hints: ['Eagerly accept or seize an opportunity', 'j___ a_', 'Seize eagerly / grab / accept without hesitation']
  },
  {
    id: 'pv_059', phrase: 'knock off', meaning: 'terminar el trabajo; también descontar un precio',
    level: 'B1', category: 'Phrasal Verbs', source: 'BBC Learning English',
    sentences: [
      { text: 'What time do you usually _____ ___?', blank: 'knock off', context: 'Work schedule' },
      { text: 'Can you _____ ___ $20 from the price?', blank: 'knock off', context: 'Bargaining' }
    ],
    hints: ['Stop working for the day; or reduce a price', 'k_____ o__', 'Finish work / clock off / reduce the price / discount']
  },
  {
    id: 'pv_060', phrase: 'lash out at', meaning: 'atacar verbal o físicamente / arremeter contra alguien',
    level: 'B2', category: 'Phrasal Verbs', source: 'Oxford Learner\'s Dictionary',
    sentences: [
      { text: 'He _______ ___ __ his coworkers when he got the bad news.', blank: 'lashed out at', context: 'Emotional outburst' },
      { text: 'Don\'t _____ ___ __ people when you\'re stressed.', blank: 'lash out at', context: 'Emotional control' }
    ],
    hints: ['Suddenly attack someone verbally or physically in anger', 'l___ o__ a_', 'Attack verbally / snap at / lose control at / strike out at']
  }
]
