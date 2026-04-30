import type { Word } from '@/types'

export const businessWords: Word[] = [
  {
    id: 'biz_001', phrase: 'circle back', meaning: 'volver sobre el tema / retomar un asunto más tarde',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's ______ _____ on this after the break.", blank: 'circle back', context: 'Meeting management' },
      { text: "I'll ______ _____ with you once I have the numbers.", blank: 'circle back', context: 'Follow-up' }
    ],
    hints: ['Return to a topic later in a conversation or after gathering more information', 'c_____ b___', 'Return to / revisit / follow up on later']
  },
  {
    id: 'biz_002', phrase: 'move the needle', meaning: 'generar un impacto real / hacer avanzar los indicadores',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We need campaigns that actually ____ ___ ______ — not just vanity metrics.", blank: 'move the needle', context: 'Marketing strategy' },
      { text: 'Which initiatives are most likely to ____ ___ ______?', blank: 'move the needle', context: 'Strategic planning' }
    ],
    hints: ['Make a meaningful difference to key metrics or progress', 'm___ t__ n_____', 'Make a real impact / shift the metrics / drive measurable change']
  },
  {
    id: 'biz_003', phrase: 'bring to the table', meaning: 'aportar / contribuir con algo a un equipo o negociación',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: 'What skills do you _____ __ ___ _____?', blank: 'bring to the table', context: 'Job interview' },
      { text: 'Each team member _______ something different __ ___ _____.', blank: 'brings / to the table', context: 'Team strengths' }
    ],
    hints: ['Offer or contribute something valuable to a discussion or collaboration', 'b____ t_ t__ t_____', 'Contribute / offer / provide / add value']
  },
  {
    id: 'biz_004', phrase: 'take the lead', meaning: 'tomar la delantera / asumir el liderazgo',
    level: 'B1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Who's going to ____ ___ ____ on this initiative?", blank: 'take the lead', context: 'Project ownership' },
      { text: "She offered to ____ ___ ____ on the client presentation.", blank: 'take the lead', context: 'Volunteering' }
    ],
    hints: ['Be the person responsible for guiding something', 't___ t__ l___', 'Lead / spearhead / head up / take charge of']
  },
  {
    id: 'biz_005', phrase: 'bottom line', meaning: 'utilidad neta / beneficio final; también: lo más importante',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'This decision will directly impact our ______ ____.', blank: 'bottom line', context: 'Financial impact' },
      { text: 'The ______ ____ is: we need to cut costs.', blank: 'bottom line', context: 'Key message' }
    ],
    hints: ['The net profit of a company; also: the most important fact', 'b______ l___', 'Net profit / the key point / the final result / what matters most']
  },
  {
    id: 'biz_006', phrase: 'touch base', meaning: 'ponerse en contacto brevemente / hacer un chequeo rápido',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's _____ _____ next week to check progress.", blank: 'touch base', context: 'Follow-up meeting' },
      { text: "I just wanted to _____ _____ and see how you're doing.", blank: 'touch base', context: 'Check-in' }
    ],
    hints: ['Make brief contact with someone to check in or exchange information', 't_____ b___', 'Check in / make contact / sync up / catch up briefly']
  },
  {
    id: 'biz_007', phrase: 'drill down into', meaning: 'profundizar en los detalles / analizar en profundidad',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: 'We need to _____ _____ ____ the data to find the root cause.', blank: 'drill down into', context: 'Data analysis' },
      { text: "Let's _____ _____ ____ the specific numbers.", blank: 'drill down into', context: 'Financial review' }
    ],
    hints: ['Examine something in greater and deeper detail', 'd____ d___ i___', 'Go deeper into / analyze in detail / investigate closely']
  },
  {
    id: 'biz_008', phrase: 'get buy-in', meaning: 'conseguir apoyo / lograr que otros apoyen una idea',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We need to ___ ___-__ from senior management first.", blank: 'get buy-in', context: 'Corporate change' },
      { text: "It's hard to ___ ___-__ when people don't see the benefit.", blank: 'get buy-in', context: 'Stakeholder alignment' }
    ],
    hints: ['Gain agreement and support from key people or stakeholders', 'g__ b__-i_', 'Get support / secure agreement / win approval / gain alignment']
  },
  {
    id: 'biz_009', phrase: 'synergy', meaning: 'sinergia / cuando la colaboración produce más que la suma de las partes',
    level: 'C1', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'The merger was designed to create _______ between the two companies.', blank: 'synergy', context: 'M&A strategy' },
      { text: "There's a natural _______ between the marketing and product teams.", blank: 'synergy', context: 'Team collaboration' }
    ],
    hints: ['The combined effect that is greater than the sum of individual parts', 's_____', 'Combined benefit / collaborative advantage / 1+1=3 effect']
  },
  {
    id: 'biz_010', phrase: 'pipeline', meaning: 'pipeline / cartera de negocios en proceso / tubería de ventas',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We have several large contracts in the _________.", blank: 'pipeline', context: 'Sales update' },
      { text: "What's in your sales _________ for Q4?", blank: 'pipeline', context: 'Sales forecast' }
    ],
    hints: ['A series of potential deals or processes in progress', 'p________', 'Pending deals / sales funnel / work in progress']
  },
  {
    id: 'biz_011', phrase: 'low-hanging fruit', meaning: 'fruta al alcance / objetivos fáciles de lograr rápidamente',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's start with the ___ ________ _____ — the easy wins.", blank: 'low-hanging fruit', context: 'Prioritization' },
      { text: 'Are there any ___ ________ _____ we\'re overlooking?', blank: 'low-hanging fruit', context: 'Strategy' }
    ],
    hints: ['Easy goals or tasks that can be achieved quickly with little effort', 'l__-h______ f_____', 'Easy wins / quick wins / simple gains / accessible opportunities']
  },
  {
    id: 'biz_012', phrase: 'bandwidth', meaning: 'capacidad disponible / tiempo o recursos que tiene una persona',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "I don't have the _________ to take on another project right now.", blank: 'bandwidth', context: 'Workload capacity' },
      { text: "Do we have enough _________ to deliver this on time?", blank: 'bandwidth', context: 'Team capacity' }
    ],
    hints: ['The capacity or availability of a person to take on work (metaphorical)', 'b_________', 'Capacity / time / resources / availability']
  },
  {
    id: 'biz_013', phrase: 'stakeholder', meaning: 'parte interesada / persona con interés en un proyecto o empresa',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'We need to inform all ____________ about the change.', blank: 'stakeholders', context: 'Communication plan' },
      { text: '_______ management is key to project success.', blank: 'Stakeholder', context: 'Project management' }
    ],
    hints: ['Any person or group who has an interest in a project or business', 's__________', 'Interested party / involved party / party with a stake in the outcome']
  },
  {
    id: 'biz_014', phrase: 'deliverable', meaning: 'entregable / resultado concreto esperado de un proyecto',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "What are the key ____________ for this phase?", blank: 'deliverables', context: 'Project planning' },
      { text: "The ____________ must be approved by the client.", blank: 'deliverable', context: 'Client management' }
    ],
    hints: ['A specific output or product that must be produced as part of a project', 'd__________', 'Output / end product / expected result / project output']
  },
  {
    id: 'biz_015', phrase: 'capacity building', meaning: 'desarrollo de capacidades / fortalecer habilidades o estructura',
    level: 'C1', category: 'Business', source: 'British Council',
    sentences: [
      { text: 'The NGO focused on ________ ________ in rural communities.', blank: 'capacity building', context: 'Development work' },
      { text: 'Training programs are an investment in ________ ________.', blank: 'capacity building', context: 'HR strategy' }
    ],
    hints: ['The process of developing and strengthening skills, resources, and institutions', 'c_______ b_______', 'Skills development / strengthening capabilities / institutional development']
  },
  {
    id: 'biz_016', phrase: 'overhead costs', meaning: 'gastos generales / costos fijos de operación',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'Remote work can significantly reduce ________ _____.', blank: 'overhead costs', context: 'Cost reduction' },
      { text: 'Rent and utilities are part of our ________ _____.', blank: 'overhead costs', context: 'Accounting' }
    ],
    hints: ['Ongoing fixed expenses not directly tied to producing a product', 'o_______ c____', 'Fixed costs / operating expenses / indirect costs']
  },
  {
    id: 'biz_017', phrase: 'sign a contract', meaning: 'firmar un contrato',
    level: 'A2', category: 'Business', source: 'Cambridge Dictionary',
    sentences: [
      { text: "We're ready to ____ ___ ________ as soon as legal approves.", blank: 'sign the contract', context: 'Deal closing' },
      { text: 'Both parties need to ____ _ ________ for the deal to be official.', blank: 'sign a contract', context: 'Legal formality' }
    ],
    hints: ['Formally agree to terms by adding your signature to a legal document', 's___ a c________', 'Sign an agreement / execute a contract / formalize the deal']
  },
  {
    id: 'biz_018', phrase: 'go over budget', meaning: 'pasarse del presupuesto',
    level: 'B1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: 'The construction project ___ ____ ______ by 30%.', blank: 'went over budget', context: 'Project overrun' },
      { text: "We can't afford to __ ____ ______ again.", blank: 'go over budget', context: 'Financial discipline' }
    ],
    hints: ['Spend more money than was planned or allocated', 'g_ o___ b_____', 'Exceed the budget / overspend / spend more than allowed']
  },
  {
    id: 'biz_019', phrase: 'send a follow-up', meaning: 'enviar un mensaje de seguimiento',
    level: 'B1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "After the meeting, always ____ _ ________-__.", blank: 'send a follow-up', context: 'Professional communication' },
      { text: "I'll ____ _ ________-__ email to confirm the details.", blank: 'send a follow-up', context: 'Email etiquette' }
    ],
    hints: ['Send a message after an initial interaction to check progress or confirm', 's___ a f_____-u_', 'Follow up / send a check-in message / confirm via email']
  },
  {
    id: 'biz_020', phrase: 'set a deadline', meaning: 'fijar una fecha límite',
    level: 'B1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We need to ___ _ ________ for the final deliverable.", blank: 'set a deadline', context: 'Project management' },
      { text: "She ___ _ ________ of Friday for the first draft.", blank: 'set a deadline', context: 'Writing task' }
    ],
    hints: ['Establish a specific date by which something must be completed', 's__ a d________', 'Fix a due date / establish a cutoff / decide on a time limit']
  },
  {
    id: 'biz_021', phrase: 'cash flow', meaning: 'flujo de caja / movimiento de dinero en y fuera de una empresa',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: "The company had good profits but poor ____ ____.", blank: 'cash flow', context: 'Finance' },
      { text: 'Positive ____ ____ is critical for small businesses.', blank: 'cash flow', context: 'Business advice' }
    ],
    hints: ['The movement of money into and out of a business', 'c___ f___', 'Money movement / liquidity / in-and-out of funds']
  },
  {
    id: 'biz_022', phrase: 'break even', meaning: 'llegar al punto de equilibrio / no ganar ni perder',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'The new store should _____ _____ within 18 months.', blank: 'break even', context: 'Business projection' },
      { text: "We're not making a profit yet — we're just ________ _____.", blank: 'breaking even', context: 'Finance' }
    ],
    hints: ['Reach the point where revenue equals costs — no profit, no loss', 'b____ e___', 'Cover costs / reach equilibrium / neither profit nor loss']
  },
  {
    id: 'biz_023', phrase: 'onboard', meaning: 'incorporar / integrar a alguien nuevo a un equipo o sistema',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "It takes about two weeks to fully _______ a new employee.", blank: 'onboard', context: 'HR process' },
      { text: "We need a better process to _______ new clients.", blank: 'onboard', context: 'Customer success' }
    ],
    hints: ['Integrate and train someone new in an organization or system', 'o______', 'Integrate / welcome and train / bring on board']
  },
  {
    id: 'biz_024', phrase: 'return on investment', meaning: 'retorno de inversión / ROI',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: "What's the expected ______ __ __________ for this campaign?", blank: 'return on investment', context: 'Marketing' },
      { text: 'We need to justify the cost — show me the ______ __ __________.', blank: 'return on investment', context: 'Finance' }
    ],
    hints: ['The profit made compared to the cost of an investment (ROI)', 'r______ o_ i__________', 'ROI / profit from investment / value gained per dollar spent']
  },
  {
    id: 'biz_025', phrase: 'conflict of interest', meaning: 'conflicto de intereses',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: "There's a clear ________ __ ________ if he reviews his own team's work.", blank: 'conflict of interest', context: 'Ethics' },
      { text: 'Judges must disclose any ________ __ ________ before a case.', blank: 'conflict of interest', context: 'Legal context' }
    ],
    hints: ['A situation where personal interests might influence professional decisions', 'c________ o_ i________', 'Competing interests / ethical issue / bias situation']
  },
  {
    id: 'biz_026', phrase: 'market share', meaning: 'cuota de mercado / porcentaje del mercado que controla una empresa',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: "Our goal is to increase our ______ _____ by 5% this year.", blank: 'market share', context: 'Business goal' },
      { text: 'They lost significant ______ _____ to a new competitor.', blank: 'market share', context: 'Competitive analysis' }
    ],
    hints: ['The percentage of a market that a company controls', 'm_____ s_____', 'Percentage of market / competitive position / portion of sales']
  },
  {
    id: 'biz_027', phrase: 'leverage', meaning: 'apalancar / usar algo estratégicamente para obtener ventaja',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We should ________ our existing partnerships to grow faster.", blank: 'leverage', context: 'Growth strategy' },
      { text: 'The company used its brand recognition to ________ new markets.', blank: 'leverage', context: 'Market expansion' }
    ],
    hints: ['Use something to maximum advantage in a strategic way', 'l________', 'Exploit strategically / capitalize on / use to your advantage / maximize']
  },
  {
    id: 'biz_028', phrase: 'benchmark', meaning: 'punto de referencia / estándar de comparación',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: 'Use industry leaders as a _________ for your own performance.', blank: 'benchmark', context: 'Performance comparison' },
      { text: "We need to _________ our results against competitors.", blank: 'benchmark', context: 'Competitive analysis' }
    ],
    hints: ['A standard or reference point used to measure performance', 'b_________', 'Reference point / performance standard / yardstick / comparison point']
  },
  {
    id: 'biz_029', phrase: 'go-to-market strategy', meaning: 'estrategia de salida al mercado / plan de lanzamiento',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "What's our ___-___-______ ________ for the new product?", blank: 'go-to-market strategy', context: 'Product launch' },
      { text: 'A strong ___-___-______ ________ is essential before launch.', blank: 'go-to-market strategy', context: 'Launch planning' }
    ],
    hints: ['The plan for how a product will reach its target customers', 'g_-t_-m_____ s_______', 'Launch plan / market entry plan / product release strategy']
  },
  {
    id: 'biz_030', phrase: 'due diligence', meaning: 'debida diligencia / investigación exhaustiva antes de un acuerdo',
    level: 'C1', category: 'Business', source: 'The Economist',
    sentences: [
      { text: "We need to complete ___ _________ before signing the acquisition.", blank: 'due diligence', context: 'M&A' },
      { text: "Investors always do their ___ _________ before committing funds.", blank: 'due diligence', context: 'Investment' }
    ],
    hints: ['A thorough investigation done before a business deal', 'd__ d________', 'Thorough investigation / proper research / background check / careful verification']
  },
  {
    id: 'biz_031', phrase: 'run the numbers', meaning: 'hacer los cálculos / analizar los datos financieros',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Let me ___ ___ _______ and see if it makes financial sense.", blank: 'run the numbers', context: 'Financial decision' },
      { text: "Before we commit, we need to ___ ___ _______.", blank: 'run the numbers', context: 'Analysis' }
    ],
    hints: ['Do the math to see if a plan or project makes financial sense', 'r__ t__ n______', 'Do the math / calculate / analyze the finances / crunch numbers']
  },
  {
    id: 'biz_032', phrase: 'under NDA', meaning: 'bajo acuerdo de confidencialidad',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "I can't share details — it's _____ _____.", blank: 'under NDA', context: 'Confidentiality' },
      { text: "All team members are _____ _____ regarding this project.", blank: 'under NDA', context: 'Sensitive project' }
    ],
    hints: ['Bound by a Non-Disclosure Agreement not to share information', 'u____ N__', 'Under confidentiality / bound by non-disclosure / can\'t share by agreement']
  },
  {
    id: 'biz_033', phrase: 'fast track', meaning: 'acelerar / procesar con prioridad',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We'll need to ____ _____ the approval to meet the deadline.", blank: 'fast track', context: 'Urgent approval' },
      { text: "She was put on the ____ _____ for promotion.", blank: 'fast track', context: 'Career acceleration' }
    ],
    hints: ['Process or promote something faster than normal', 'f___ t_____', 'Expedite / accelerate / prioritize / speed up the process']
  },
  {
    id: 'biz_034', phrase: 'above the fold', meaning: 'sobre el doblez / contenido visible sin hacer scroll',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: 'Make sure the call-to-action is _____ ___ ____.', blank: 'above the fold', context: 'Web design' },
      { text: 'Key information should always appear _____ ___ ____.', blank: 'above the fold', context: 'Content strategy' }
    ],
    hints: ['Content visible on a webpage without scrolling', 'a____ t__ f___', 'Visible without scrolling / top of page / prime real estate']
  },
  {
    id: 'biz_035', phrase: 'raise capital', meaning: 'levantar capital / obtener financiamiento para un negocio',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'The startup is looking to _____ _______ to fund expansion.', blank: 'raise capital', context: 'Startup funding' },
      { text: 'We plan to _____ _______ through a Series A round.', blank: 'raise capital', context: 'Venture capital' }
    ],
    hints: ['Obtain money for business use from investors or lenders', 'r____ c______', 'Secure funding / attract investment / get financial backing']
  },
  {
    id: 'biz_036', phrase: 'proof of concept', meaning: 'prueba de concepto / demostrar que una idea funciona',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We built a _____ __ _______ to test the idea before investing more.", blank: 'proof of concept', context: 'Product development' },
      { text: "The _____ __ _______ showed the technology actually works.", blank: 'proof of concept', context: 'Innovation' }
    ],
    hints: ['A demonstration that a concept or idea can work in practice', 'p____ o_ c_______', 'Prototype / feasibility test / pilot / concept validation']
  },
  {
    id: 'biz_037', phrase: 'key performance indicator', meaning: 'indicador clave de desempeño / KPI',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "What are the ___ ___________ __________ for this quarter?", blank: 'key performance indicators', context: 'Goal setting' },
      { text: 'Each department tracks its own ___ ___________ __________.', blank: 'key performance indicators', context: 'Performance management' }
    ],
    hints: ['A measurable value that shows how well an objective is being achieved (KPI)', 'k__ p___________ i_________', 'KPIs / metrics / success measures / performance benchmarks']
  },
  {
    id: 'biz_038', phrase: 'talent acquisition', meaning: 'adquisición de talento / proceso de reclutamiento estratégico',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Our ______ ___________ team is growing rapidly.", blank: 'talent acquisition', context: 'HR expansion' },
      { text: '______ ___________ is more than just hiring — it\'s strategic workforce planning.', blank: 'Talent acquisition', context: 'HR strategy' }
    ],
    hints: ['The strategic process of finding and hiring skilled employees', 't_____ a__________', 'Recruitment strategy / strategic hiring / finding and attracting talent']
  },
  {
    id: 'biz_039', phrase: 'scale a business', meaning: 'escalar un negocio / hacer crecer de forma sostenible',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "The challenge is ________ _ ________ without losing quality.", blank: 'scaling a business', context: 'Startup growth' },
      { text: "Technology is key to ________ __ ________ efficiently.", blank: 'scaling a business', context: 'Growth strategy' }
    ],
    hints: ['Grow a business in a sustainable and repeatable way', 's____ a b_______', 'Grow / expand / increase size and revenue / build for growth']
  },
  {
    id: 'biz_040', phrase: 'churn rate', meaning: 'tasa de abandono / porcentaje de clientes que cancelan',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Reducing _____ ____ is critical for SaaS businesses.", blank: 'churn rate', context: 'SaaS metrics' },
      { text: "A high _____ ____ means customers aren\'t staying long.", blank: 'churn rate', context: 'Customer retention' }
    ],
    hints: ['The rate at which customers stop using a product or service', 'c____ r___', 'Cancellation rate / customer loss rate / attrition rate']
  },
  {
    id: 'biz_041', phrase: 'take stock of', meaning: 'hacer balance de / evaluar la situación',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Let's ____ _____ __ where we are before making a decision.", blank: 'take stock of', context: 'Review moment' },
      { text: "It's time to ____ _____ __ our progress this year.", blank: 'take stock of', context: 'Annual review' }
    ],
    hints: ['Carefully assess or evaluate a situation', 't___ s____ o_', 'Evaluate / assess / review / take inventory of the situation']
  },
  {
    id: 'biz_042', phrase: 'pitch a proposal', meaning: 'presentar / proponer formalmente una idea o proyecto',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "We'll _____ _ ________ to the board next week.", blank: 'pitch a proposal', context: 'Board meeting' },
      { text: "She _______ _ ________ to three investors and got two interested.", blank: 'pitched a proposal', context: 'Investment meeting' }
    ],
    hints: ['Present an idea or plan formally to persuade others', 'p____ a p________', 'Present a proposal / make a pitch / propose to decision-makers']
  },
  {
    id: 'biz_043', phrase: 'in the red', meaning: 'en números rojos / con pérdidas',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'The company has been __ ___ ___ for the past two quarters.', blank: 'in the red', context: 'Financial loss' },
      { text: 'Are we __ ___ ___ or __ ___ _____?', blank: 'in the red', context: 'Finance question' }
    ],
    hints: ['Losing money / operating at a loss', 'i_ t__ r__', 'At a loss / unprofitable / losing money / negative balance']
  },
  {
    id: 'biz_044', phrase: 'in the black', meaning: 'en números negros / con beneficios',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'After three years, the company is finally __ ___ _____.', blank: 'in the black', context: 'Profitability milestone' },
      { text: 'We need to get back __ ___ _____ by Q3.', blank: 'in the black', context: 'Financial recovery' }
    ],
    hints: ['Profitable / making more money than spending', 'i_ t__ b_____', 'Profitable / making money / positive balance / in profit']
  },
  {
    id: 'biz_045', phrase: 'across the board', meaning: 'en general / para todos / sin excepciones',
    level: 'B2', category: 'Business', source: 'The Economist',
    sentences: [
      { text: 'Salaries were increased ______ ___ _____ by 5%.', blank: 'across the board', context: 'Pay rise' },
      { text: 'We need ______ ___ _____ improvements, not just in one area.', blank: 'across the board', context: 'Organizational change' }
    ],
    hints: ['Applying to everyone or everything equally, with no exceptions', 'a_____ t__ b_____', 'For everyone / universally / without exception / at all levels']
  },
  {
    id: 'biz_046', phrase: 'ball park figure', meaning: 'cifra aproximada / estimación general',
    level: 'B1', category: 'Business', source: 'Cambridge Dictionary',
    sentences: [
      { text: "Can you give me a ____ ____ ______ for the project cost?", blank: 'ball park figure', context: 'Budget estimate' },
      { text: "I'm not sure of the exact cost — a ____ ____ ______ would be around $50K.", blank: 'ball park figure', context: 'Rough estimate' }
    ],
    hints: ['A rough or approximate estimate of a number or amount', 'b___ p___ f_____', 'Rough estimate / approximate number / in the region of']
  },
  {
    id: 'biz_047', phrase: 'pain point', meaning: 'punto de dolor / problema específico que tiene un cliente',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "What are your customers' main ____ ______?", blank: 'pain points', context: 'Customer research' },
      { text: 'Understanding user ____ ______ is key to product design.', blank: 'pain points', context: 'UX design' }
    ],
    hints: ['A specific problem or challenge faced by a customer or user', 'p___ p_____', 'Problem / frustration / challenge / difficulty users face']
  },
  {
    id: 'biz_048', phrase: 'core competency', meaning: 'competencia central / fortaleza principal de una organización',
    level: 'C1', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "Innovation is our organization's ____ _________.", blank: 'core competency', context: 'Organizational identity' },
      { text: "Don't outsource your ____ ____________ — they define you.", blank: 'core competencies', context: 'Strategic advice' }
    ],
    hints: ['A unique capability that gives an organization a competitive advantage', 'c___ c_________', 'Unique strength / key capability / defining competitive advantage']
  },
  {
    id: 'biz_049', phrase: 'scope creep', meaning: 'expansión del alcance / cuando un proyecto crece más allá de lo planeado',
    level: 'B2', category: 'Business', source: 'Harvard Business Review',
    sentences: [
      { text: "_____ _____ is the biggest threat to our project timeline.", blank: 'Scope creep', context: 'Project risk' },
      { text: "We need to control _____ _____ or we'll never finish.", blank: 'scope creep', context: 'Project management' }
    ],
    hints: ['When a project gradually grows beyond its original agreed boundaries', 's____ c____', 'Uncontrolled project growth / expanding scope / feature bloat']
  },
  {
    id: 'biz_050', phrase: 'heads up', meaning: 'aviso anticipado / advertencia previa',
    level: 'B1', category: 'Business', source: 'BBC Learning English',
    sentences: [
      { text: "Just a _____ __ — the meeting starts at 9, not 10.", blank: 'heads up', context: 'Schedule change' },
      { text: "Thanks for the _____ __ about the system update.", blank: 'heads up', context: 'Advance warning' }
    ],
    hints: ['A warning or advance notice about something', 'h_____ u_', 'Warning / advance notice / early alert / FYI']
  }
]
