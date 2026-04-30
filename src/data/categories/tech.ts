import type { Word } from '@/types'

export const techWords: Word[] = [
  {
    id: 'tech_001', phrase: 'deploy', meaning: 'desplegar / lanzar código a producción',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "We'll ______ the new feature to production on Friday.", blank: 'deploy', context: 'Release planning' },
      { text: "The app was ________ to AWS using a CI/CD pipeline.", blank: 'deployed', context: 'DevOps' }
    ],
    hints: ['Release software or make it live in a production environment', 'd_____', 'Release / launch / push to production / ship']
  },
  {
    id: 'tech_002', phrase: 'debug', meaning: 'depurar / encontrar y corregir errores en código',
    level: 'B1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "I spent three hours ________ that one function.", blank: 'debugging', context: 'Development work' },
      { text: "Use the browser console to ______ JavaScript errors.", blank: 'debug', context: 'Frontend dev' }
    ],
    hints: ['Find and fix errors or bugs in a program', 'd_____', 'Fix bugs / troubleshoot / find and fix errors / trace issues']
  },
  {
    id: 'tech_003', phrase: 'refactor', meaning: 'refactorizar / mejorar el código sin cambiar su funcionamiento',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "We need to ________ this module to make it more readable.", blank: 'refactor', context: 'Code quality' },
      { text: "The team spent a sprint __________ legacy code.", blank: 'refactoring', context: 'Technical debt' }
    ],
    hints: ['Restructure existing code to improve it without changing its behavior', 'r________', 'Restructure / clean up / improve code structure / rewrite for clarity']
  },
  {
    id: 'tech_004', phrase: 'pull request', meaning: 'pull request / solicitud para integrar cambios de código',
    level: 'B2', category: 'Tech', source: 'GitHub docs',
    sentences: [
      { text: "Open a ____ _______ when your feature branch is ready to merge.", blank: 'pull request', context: 'Git workflow' },
      { text: "Please review my ____ _______ before the end of day.", blank: 'pull request', context: 'Code review' }
    ],
    hints: ['A request to merge code changes into a main branch, usually reviewed by peers', 'p___ r_______', 'Merge request / code contribution request / PR']
  },
  {
    id: 'tech_005', phrase: 'API', meaning: 'API / interfaz que permite que dos sistemas se comuniquen',
    level: 'B1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The app fetches data from a third-party ___.", blank: 'API', context: 'App architecture' },
      { text: "Build a RESTful ___ for the mobile frontend to consume.", blank: 'API', context: 'Backend development' }
    ],
    hints: ['Application Programming Interface — a set of rules for software to communicate', 'A__', 'Interface / endpoint layer / communication protocol for software']
  },
  {
    id: 'tech_006', phrase: 'latency', meaning: 'latencia / tiempo de retraso entre una acción y su respuesta',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "High _______ makes the app feel sluggish and unresponsive.", blank: 'latency', context: 'Performance' },
      { text: "CDNs reduce _______ by serving files from nearby servers.", blank: 'latency', context: 'Web performance' }
    ],
    hints: ['The delay between a request being sent and the response being received', 'l_______', 'Delay / response time / lag / time to respond']
  },
  {
    id: 'tech_007', phrase: 'iterate', meaning: 'iterar / repetir un proceso mejorando con cada ciclo',
    level: 'B2', category: 'Tech', source: 'Agile methodology',
    sentences: [
      { text: "We'll _______ quickly based on user feedback.", blank: 'iterate', context: 'Agile development' },
      { text: "Good design teams _______ through many prototypes.", blank: 'iterate', context: 'Product design' }
    ],
    hints: ['Repeat a process with improvements each time', 'i______', 'Repeat with improvements / cycle through / develop incrementally']
  },
  {
    id: 'tech_008', phrase: 'bandwidth', meaning: 'ancho de banda / capacidad de transferencia de datos',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Video streaming requires a lot of _________.", blank: 'bandwidth', context: 'Network performance' },
      { text: "Low _________ causes buffering and dropped calls.", blank: 'bandwidth', context: 'Internet quality' }
    ],
    hints: ['The maximum rate of data transfer across a network connection', 'b_________', 'Data transfer capacity / network speed / throughput']
  },
  {
    id: 'tech_009', phrase: 'cache', meaning: 'caché / almacenamiento temporal para acceso rápido',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Clear the browser _____ to see the latest version.", blank: 'cache', context: 'Troubleshooting' },
      { text: "The _____ layer stores frequently accessed data to reduce load.", blank: 'cache', context: 'System design' }
    ],
    hints: ['Temporary storage that allows data to be retrieved faster', 'c_____', 'Temporary storage / fast-access layer / stored copy / buffer']
  },
  {
    id: 'tech_010', phrase: 'containerize', meaning: 'containerizar / empaquetar una app en un contenedor (Docker)',
    level: 'C1', category: 'Tech', source: 'Docker docs',
    sentences: [
      { text: "____________ the application makes it easier to deploy anywhere.", blank: 'Containerizing', context: 'DevOps' },
      { text: "We decided to ____________ all our microservices using Docker.", blank: 'containerize', context: 'Cloud infrastructure' }
    ],
    hints: ['Package an application and its dependencies into a portable container', 'c___________', 'Package in Docker / wrap in a container / isolate with dependencies']
  },
  {
    id: 'tech_011', phrase: 'microservices', meaning: 'microservicios / arquitectura donde cada función es un servicio independiente',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The company migrated from a monolith to ______________ architecture.", blank: 'microservices', context: 'System design' },
      { text: "______________ allow teams to deploy independently without coordination.", blank: 'Microservices', context: 'DevOps' }
    ],
    hints: ['An architecture where an app is split into small, independently deployable services', 'm____________', 'Small independent services / service-oriented architecture / modular services']
  },
  {
    id: 'tech_012', phrase: 'version control', meaning: 'control de versiones / sistema para rastrear cambios en el código',
    level: 'B1', category: 'Tech', source: 'Git docs',
    sentences: [
      { text: "Git is the most popular _______ _______ system today.", blank: 'version control', context: 'Git fundamentals' },
      { text: "Always use _______ _______ — even for solo projects.", blank: 'version control', context: 'Best practice' }
    ],
    hints: ['A system that records changes to files over time, enabling rollback', 'v______ c_______', 'Track changes / Git / history of code changes / revision management']
  },
  {
    id: 'tech_013', phrase: 'open source', meaning: 'código abierto / software con código accesible públicamente',
    level: 'B1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "React is an ____ ______ JavaScript library maintained by Meta.", blank: 'open source', context: 'Frontend' },
      { text: "Contributing to ____ ______ projects is great for your portfolio.", blank: 'open source', context: 'Career advice' }
    ],
    hints: ['Software whose source code is publicly available for anyone to use or modify', 'o___ s_____', 'Publicly available code / free to use and modify / community-developed']
  },
  {
    id: 'tech_014', phrase: 'scalability', meaning: 'escalabilidad / capacidad del sistema para crecer con la demanda',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "__________ is a key concern when designing the system architecture.", blank: 'Scalability', context: 'System design' },
      { text: "Cloud platforms offer excellent __________ for growing applications.", blank: 'scalability', context: 'Cloud computing' }
    ],
    hints: ['The ability of a system to handle growing amounts of work gracefully', 's__________', 'Ability to grow / handle increased load / elastic capacity']
  },
  {
    id: 'tech_015', phrase: 'authentication', meaning: 'autenticación / proceso de verificar la identidad de un usuario',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Two-factor ______________ makes your account much more secure.", blank: 'authentication', context: 'Security' },
      { text: "Implement JWT ______________ for the REST API.", blank: 'authentication', context: 'Backend dev' }
    ],
    hints: ['The process of verifying the identity of a user or system', 'a______________', 'Login verification / identity check / user validation / access control']
  },
  {
    id: 'tech_016', phrase: 'endpoint', meaning: 'endpoint / URL específica donde una API recibe solicitudes',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The `/users` ________ returns a list of all registered users.", blank: 'endpoint', context: 'API design' },
      { text: "Test each API ________ before deploying to production.", blank: 'endpoint', context: 'API testing' }
    ],
    hints: ['A specific URL in an API where requests are sent to perform an action', 'e________', 'API route / URL for data access / service access point']
  },
  {
    id: 'tech_017', phrase: 'machine learning', meaning: 'aprendizaje automático / IA que aprende de datos',
    level: 'B2', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "_______ ________ algorithms can detect fraud in real time.", blank: 'Machine learning', context: 'AI application' },
      { text: "The recommendation engine uses _______ ________ to personalize results.", blank: 'machine learning', context: 'Product feature' }
    ],
    hints: ['A type of AI that learns patterns from data without being explicitly programmed', 'm_______ l_______', 'AI training on data / automated pattern recognition / supervised/unsupervised learning']
  },
  {
    id: 'tech_018', phrase: 'neural network', meaning: 'red neuronal / modelo de IA inspirado en el cerebro humano',
    level: 'C1', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "Deep ______ ________ power most modern image recognition systems.", blank: 'neural networks', context: 'AI systems' },
      { text: "A ______ ________ learns to identify patterns across millions of examples.", blank: 'neural network', context: 'ML basics' }
    ],
    hints: ['A computing system loosely modeled on the human brain, used in AI', 'n_____ n_______', 'AI brain model / deep learning architecture / layers of artificial neurons']
  },
  {
    id: 'tech_019', phrase: 'prompt engineering', meaning: 'ingeniería de prompts / diseñar instrucciones para obtener mejores respuestas de una IA',
    level: 'B2', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "______ __________ is a key skill for working with large language models.", blank: 'Prompt engineering', context: 'AI skills' },
      { text: "Good ______ __________ can dramatically improve LLM outputs.", blank: 'prompt engineering', context: 'AI workflow' }
    ],
    hints: ['Crafting inputs to an AI model to get better and more precise outputs', 'p_____ e__________', 'Designing AI inputs / crafting instructions for LLMs / query optimization for AI']
  },
  {
    id: 'tech_020', phrase: 'large language model', meaning: 'modelo de lenguaje grande / IA entrenada en texto masivo (LLM)',
    level: 'B2', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "ChatGPT is powered by a _____ ________ _____.", blank: 'large language model', context: 'AI product' },
      { text: "A _____ ________ _____ can write, summarize, and translate text.", blank: 'large language model', context: 'AI capabilities' }
    ],
    hints: ['A powerful AI model trained on massive amounts of text data (LLM)', 'l____ l________ m_____', 'LLM / text AI / GPT-style model / AI trained on large corpus']
  },
  {
    id: 'tech_021', phrase: 'data pipeline', meaning: 'pipeline de datos / sistema para mover y transformar datos',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The ____ ________ ingests raw data and outputs clean reports.", blank: 'data pipeline', context: 'Data engineering' },
      { text: "A robust ____ ________ is essential for a data-driven company.", blank: 'data pipeline', context: 'Analytics' }
    ],
    hints: ['A series of processes that moves and transforms data from one system to another', 'd___ p________', 'Data flow system / ETL pipeline / data processing chain']
  },
  {
    id: 'tech_022', phrase: 'technical debt', meaning: 'deuda técnica / código de baja calidad que crea problemas futuros',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Moving fast created a lot of _________ ____ we\'ll need to pay down.", blank: 'technical debt', context: 'Engineering culture' },
      { text: "Ignoring _________ ____ will slow the team down in the long run.", blank: 'technical debt', context: 'Engineering advice' }
    ],
    hints: ['The future cost of shortcuts or poor decisions made in code', 't________ d___', 'Code debt / accumulated bad code / shortcuts that create future problems']
  },
  {
    id: 'tech_023', phrase: 'agile', meaning: 'ágil / metodología de desarrollo iterativo y flexible',
    level: 'B2', category: 'Tech', source: 'Agile Manifesto',
    sentences: [
      { text: "The team adopted ______ methodologies to ship faster.", blank: 'agile', context: 'Team process' },
      { text: "______ encourages responding to change over following a rigid plan.", blank: 'Agile', context: 'Project management' }
    ],
    hints: ['A flexible development approach using short cycles and continuous improvement', 'a_____', 'Iterative / flexible / sprint-based / incremental development method']
  },
  {
    id: 'tech_024', phrase: 'sprint', meaning: 'sprint / ciclo corto de trabajo en metodología ágil',
    level: 'B2', category: 'Tech', source: 'Scrum guide',
    sentences: [
      { text: "We work in two-week _______ to keep the team focused.", blank: 'sprints', context: 'Scrum' },
      { text: "The bug was fixed during the last ______.", blank: 'sprint', context: 'Development cycle' }
    ],
    hints: ['A fixed-length work cycle in agile development, usually 1-4 weeks', 's______', 'Work cycle / development iteration / time-boxed work period / Scrum cycle']
  },
  {
    id: 'tech_025', phrase: 'rollback', meaning: 'rollback / revertir a una versión anterior después de un problema',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "We had to ________ the deployment after users reported errors.", blank: 'roll back', context: 'Incident response' },
      { text: "Having a ________ plan is essential for any production release.", blank: 'rollback', context: 'Release management' }
    ],
    hints: ['Revert to a previous working version after a failed change', 'r________', 'Revert / undo deployment / go back to previous version / undo release']
  },
  {
    id: 'tech_026', phrase: 'encryption', meaning: 'cifrado / proceso de codificar datos para que solo el destinatario los lea',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "All passwords are stored using one-way __________.", blank: 'encryption', context: 'Security' },
      { text: "End-to-end __________ ensures only sender and receiver can read messages.", blank: 'encryption', context: 'Messaging security' }
    ],
    hints: ['Encoding data so it can only be read by authorized parties', 'e_________', 'Encoding / data protection / scrambling data / ciphering']
  },
  {
    id: 'tech_027', phrase: 'rate limiting', meaning: 'limitación de tasa / controlar cuántas solicitudes puede hacer un cliente',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The API uses ____ ________ to prevent abuse.", blank: 'rate limiting', context: 'API security' },
      { text: "Without ____ ________, a single user could overload the server.", blank: 'rate limiting', context: 'System protection' }
    ],
    hints: ['Restricting how many requests a user can make in a given time period', 'r___ l_______', 'Request throttling / limiting API calls / traffic control']
  },
  {
    id: 'tech_028', phrase: 'proof of work', meaning: 'prueba de trabajo / mecanismo de consenso en blockchain',
    level: 'C1', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "Bitcoin uses _____ __ _____ to validate transactions.", blank: 'proof of work', context: 'Blockchain' },
      { text: "_____ __ _____ requires significant computational resources.", blank: 'Proof of work', context: 'Crypto mining' }
    ],
    hints: ['A blockchain consensus mechanism requiring computational effort to validate', 'p____ o_ w___', 'Mining consensus / Bitcoin validation mechanism / computational challenge']
  },
  {
    id: 'tech_029', phrase: 'infrastructure as code', meaning: 'infraestructura como código / gestionar servidores con archivos de configuración',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "______________ __ ____ allows you to version control your cloud setup.", blank: 'Infrastructure as code', context: 'DevOps' },
      { text: "Terraform is a popular ______________ __ ____ tool.", blank: 'infrastructure as code', context: 'Cloud tools' }
    ],
    hints: ['Managing IT infrastructure using code and configuration files (IaC)', 'i______________ a_ c___', 'IaC / managing servers with code / versioned infrastructure / Terraform/Ansible']
  },
  {
    id: 'tech_030', phrase: 'product roadmap', meaning: 'hoja de ruta del producto / plan visual de lo que se construirá',
    level: 'B2', category: 'Tech', source: 'Product management',
    sentences: [
      { text: "The _______ _______ shows what features we plan to build each quarter.", blank: 'product roadmap', context: 'Product planning' },
      { text: "Share the _______ _______ with stakeholders before the kickoff.", blank: 'product roadmap', context: 'Stakeholder communication' }
    ],
    hints: ['A visual plan that outlines the direction and features of a product over time', 'p_______ r_______', 'Feature plan / development timeline / product strategy visualization']
  },
  {
    id: 'tech_031', phrase: 'user story', meaning: 'historia de usuario / descripción de una función desde la perspectiva del usuario',
    level: 'B2', category: 'Tech', source: 'Agile methodology',
    sentences: [
      { text: "Write a ____ _____ for every new feature before you build it.", blank: 'user story', context: 'Agile practice' },
      { text: "A ____ _____ follows the format: As a [user], I want [feature].", blank: 'user story', context: 'Story format' }
    ],
    hints: ['A short description of a feature from the end user\'s point of view', 'u____ s_____', 'Feature request from user perspective / informal requirement / use case narrative']
  },
  {
    id: 'tech_032', phrase: 'uptime', meaning: 'tiempo de actividad / el porcentaje del tiempo que un sistema está en funcionamiento',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Our SLA guarantees 99.9% ______ per month.", blank: 'uptime', context: 'Service level agreement' },
      { text: "High ______ is critical for financial applications.", blank: 'uptime', context: 'Reliability' }
    ],
    hints: ['The time a system or service is fully operational and available', 'u_____', 'Availability / operational time / system uptime / percentage running']
  },
  {
    id: 'tech_033', phrase: 'server-side rendering', meaning: 'renderizado del lado del servidor / el HTML se genera en el servidor',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Next.js supports both ______-____ _________ and static generation.", blank: 'server-side rendering', context: 'Frontend frameworks' },
      { text: "______-____ _________ improves SEO by delivering full HTML to browsers.", blank: 'Server-side rendering', context: 'SEO' }
    ],
    hints: ['A technique where the server generates full HTML before sending it to the browser (SSR)', 's_____-s___ r_________', 'SSR / server-generated HTML / rendering on the server']
  },
  {
    id: 'tech_034', phrase: 'continuous integration', meaning: 'integración continua / práctica de integrar código frecuentemente',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "__________ __________ means every commit triggers automated tests.", blank: 'Continuous integration', context: 'CI/CD' },
      { text: "GitHub Actions can automate __________ __________.", blank: 'continuous integration', context: 'DevOps tools' }
    ],
    hints: ['Automatically testing and building code each time changes are merged (CI)', 'c__________ i__________', 'CI / automated testing on merge / frequent code integration']
  },
  {
    id: 'tech_035', phrase: 'regression test', meaning: 'prueba de regresión / test para verificar que cambios no rompieron nada',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Run a full _________ ____ suite before every deployment.", blank: 'regression test', context: 'Testing practice' },
      { text: "_________ _______ caught the breaking change before it went live.", blank: 'Regression testing', context: 'QA' }
    ],
    hints: ['Tests that verify new code changes haven\'t broken existing functionality', 'r_________ t___', 'Stability test / checking for broken features / verify nothing regressed']
  },
  {
    id: 'tech_036', phrase: 'dark mode', meaning: 'modo oscuro / interfaz con fondo oscuro y texto claro',
    level: 'B1', category: 'Tech', source: 'UX terminology',
    sentences: [
      { text: "The app supports ____ ____ to reduce eye strain at night.", blank: 'dark mode', context: 'UX feature' },
      { text: "Users can toggle between light and ____ ____ in settings.", blank: 'dark mode', context: 'App settings' }
    ],
    hints: ['An interface color scheme using dark backgrounds and light text', 'd___ m___', 'Dark theme / night mode / dark interface / low-light UI']
  },
  {
    id: 'tech_037', phrase: 'responsive design', meaning: 'diseño responsivo / interfaz que se adapta a distintos tamaños de pantalla',
    level: 'B1', category: 'Tech', source: 'UX terminology',
    sentences: [
      { text: "__________ ______ ensures the site looks good on any device.", blank: 'Responsive design', context: 'Web design' },
      { text: "Use CSS media queries to implement __________ ______.", blank: 'responsive design', context: 'Frontend' }
    ],
    hints: ['Design that adapts to different screen sizes and devices', 'r__________ d______', 'Mobile-friendly design / adaptive layout / fluid grid design']
  },
  {
    id: 'tech_038', phrase: 'accessibility', meaning: 'accesibilidad / diseñar para que todos puedan usar una app, incluyendo personas con discapacidades',
    level: 'B2', category: 'Tech', source: 'W3C WCAG',
    sentences: [
      { text: "____________ is a legal requirement for government websites.", blank: 'Accessibility', context: 'Web standards' },
      { text: "Add alt text to all images to improve ____________.", blank: 'accessibility', context: 'Inclusive design' }
    ],
    hints: ['The practice of making digital products usable by people with disabilities', 'a___________', 'Inclusive design / a11y / usability for all / ADA/WCAG compliance']
  },
  {
    id: 'tech_039', phrase: 'progressive web app', meaning: 'aplicación web progresiva / web que funciona como app nativa',
    level: 'B2', category: 'Tech', source: 'Google web.dev',
    sentences: [
      { text: "A ___________ ___ ___ can be installed from the browser like a native app.", blank: 'progressive web app', context: 'PWA features' },
      { text: "___________ ___ _____ work offline using service workers.", blank: 'Progressive web apps', context: 'Offline capability' }
    ],
    hints: ['A web app that offers native-app experiences like offline use and installation', 'p__________ w__ a__', 'PWA / installable web app / offline-capable website']
  },
  {
    id: 'tech_040', phrase: 'cloud-native', meaning: 'nativo en la nube / diseñado específicamente para entornos cloud',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The company migrated to a _____-______ architecture.", blank: 'cloud-native', context: 'Cloud migration' },
      { text: "_____-______ applications are built to scale elastically.", blank: 'Cloud-native', context: 'Modern infrastructure' }
    ],
    hints: ['Designed from the ground up to run in cloud environments', 'c____-n_____', 'Built for the cloud / cloud-first / designed for elastic scaling']
  },
  {
    id: 'tech_041', phrase: 'zero-day vulnerability', meaning: 'vulnerabilidad zero-day / fallo de seguridad desconocido sin parche',
    level: 'C1', category: 'Tech', source: 'Cybersecurity terminology',
    sentences: [
      { text: "The attackers exploited a ____-___ ___________ in the browser.", blank: 'zero-day vulnerability', context: 'Cybersecurity' },
      { text: "A ____-___ ___________ is unknown to the vendor and unpatched.", blank: 'zero-day vulnerability', context: 'Security research' }
    ],
    hints: ['A software flaw that is known to attackers but unknown to the vendor', 'z___-d__ v___________', 'Unpatched exploit / undisclosed flaw / unknown security hole']
  },
  {
    id: 'tech_042', phrase: 'load balancer', meaning: 'balanceador de carga / distribuye el tráfico entre múltiples servidores',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The ____ _______ distributes traffic evenly across three servers.", blank: 'load balancer', context: 'Infrastructure' },
      { text: "Adding a ____ _______ improved the system\'s availability.", blank: 'load balancer', context: 'System design' }
    ],
    hints: ['A system that distributes incoming traffic across multiple servers', 'l___ b_______', 'Traffic distributor / server traffic spreader / high availability component']
  },
  {
    id: 'tech_043', phrase: 'A/B testing', meaning: 'prueba A/B / comparar dos versiones de algo para ver cuál funciona mejor',
    level: 'B2', category: 'Tech', source: 'Growth hacking',
    sentences: [
      { text: "Use _/_ _______ to decide which headline drives more clicks.", blank: 'A/B testing', context: 'Marketing optimization' },
      { text: "_/_ _______ showed that the red button outperformed the blue one.", blank: 'A/B testing', context: 'UX research' }
    ],
    hints: ['Comparing two versions to determine which one performs better', 'A/_ t______', 'Split test / compare variants / controlled experiment / test two versions']
  },
  {
    id: 'tech_044', phrase: 'onboarding flow', meaning: 'flujo de incorporación / pasos que guían a un usuario nuevo',
    level: 'B2', category: 'Tech', source: 'UX terminology',
    sentences: [
      { text: "A great __________ ____ reduces time-to-value for new users.", blank: 'onboarding flow', context: 'UX design' },
      { text: "We redesigned the __________ ____ to reduce drop-off.", blank: 'onboarding flow', context: 'Product improvement' }
    ],
    hints: ['The sequence of screens and steps that guide a new user through a product', 'o_________ f___', 'New user experience / welcome flow / user orientation process']
  },
  {
    id: 'tech_045', phrase: 'feature flag', meaning: 'bandera de característica / interruptor para habilitar o deshabilitar una función',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Use a _______ ____ to roll out the new feature to 10% of users first.", blank: 'feature flag', context: 'Gradual rollout' },
      { text: "_______ _____ let you deploy code without exposing it to all users.", blank: 'Feature flags', context: 'Release management' }
    ],
    hints: ['A configuration toggle to enable or disable a feature in production', 'f_______ f___', 'Feature toggle / on/off switch for features / conditional code activation']
  },
  {
    id: 'tech_046', phrase: 'observe and instrument', meaning: 'observar e instrumentar / monitorear un sistema con herramientas',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "To _______ and __________ the service, we added logging and metrics.", blank: 'observe and instrument', context: 'Observability' },
      { text: "You need to _______ and __________ your app before you can optimize it.", blank: 'observe and instrument', context: 'Performance tuning' }
    ],
    hints: ['Add monitoring tools to a system so you can track its behavior', 'o______ a__ i__________', 'Monitor with tools / add observability / add logging and metrics']
  },
  {
    id: 'tech_047', phrase: 'deprecate', meaning: 'deprecar / declarar que algo es obsoleto y será eliminado',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The library will _________ that function in the next major version.", blank: 'deprecate', context: 'Library update' },
      { text: "The old API endpoint has been __________ — use the new one.", blank: 'deprecated', context: 'API versioning' }
    ],
    hints: ['Mark something as obsolete and scheduled for removal in a future version', 'd________', 'Mark as outdated / phase out / signal for removal / make obsolete']
  },
  {
    id: 'tech_048', phrase: 'tech stack', meaning: 'stack tecnológico / conjunto de tecnologías usadas en un proyecto',
    level: 'B1', category: 'Tech', source: 'Developer community',
    sentences: [
      { text: "Our ____ _____ is React, Node.js, and PostgreSQL.", blank: 'tech stack', context: 'Project description' },
      { text: "Choosing the right ____ _____ is a critical early decision.", blank: 'tech stack', context: 'Architecture decision' }
    ],
    hints: ['The combination of technologies used to build and run a software product', 't___ s_____', 'Technology combination / dev tools set / frontend + backend + database']
  },
  {
    id: 'tech_049', phrase: 'edge computing', meaning: 'computación en el borde / procesar datos cerca del origen para reducir latencia',
    level: 'C1', category: 'Tech', source: 'MIT Tech Review',
    sentences: [
      { text: "____ ________ brings processing closer to the data source.", blank: 'Edge computing', context: 'IoT' },
      { text: "____ ________ reduces latency by avoiding round trips to central servers.", blank: 'Edge computing', context: 'Network optimization' }
    ],
    hints: ['Processing data near where it is generated rather than in a central cloud', 'e___ c________', 'Local processing / distributed computing / near-source data processing']
  },
  {
    id: 'tech_050', phrase: 'headless CMS', meaning: 'CMS sin cabeza / sistema de gestión de contenido sin capa de presentación',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "A _______ ___ separates content from presentation.", blank: 'headless CMS', context: 'Content architecture' },
      { text: "With a _______ ___, you can deliver content to any device via API.", blank: 'headless CMS', context: 'Multi-channel delivery' }
    ],
    hints: ['A content management system with no built-in frontend layer', 'h_______ C__', 'Content-only CMS / API-first CMS / backend-only content system']
  },
  {
    id: 'tech_051', phrase: 'async/await', meaning: 'async/await / sintaxis para manejar operaciones asíncronas en JavaScript',
    level: 'B2', category: 'Tech', source: 'MDN Web Docs',
    sentences: [
      { text: "Use _____ / _____ to avoid deeply nested promise chains.", blank: 'async/await', context: 'JavaScript' },
      { text: "Mark the function as _____ to use the _____ keyword inside it.", blank: 'async', context: 'JavaScript syntax' }
    ],
    hints: ['Keywords in JavaScript for handling asynchronous operations cleanly', 'a___/a____', 'Asynchronous syntax / promise handling / non-blocking code pattern']
  },
  {
    id: 'tech_052', phrase: 'state management', meaning: 'gestión del estado / controlar el estado de la aplicación de forma centralizada',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Redux and Zustand are popular _____ __________ libraries.", blank: 'state management', context: 'Frontend architecture' },
      { text: "As apps grow, _____ __________ becomes more complex.", blank: 'state management', context: 'Scaling frontend' }
    ],
    hints: ['The practice of centralizing and controlling application data across components', 's_____ m__________', 'App data control / Redux/Zustand pattern / centralized data flow']
  },
  {
    id: 'tech_053', phrase: 'runtime error', meaning: 'error de ejecución / error que ocurre cuando el programa está corriendo',
    level: 'B1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "The application crashed due to a _______ _____ on line 42.", blank: 'runtime error', context: 'Debugging' },
      { text: "A null reference caused a _______ _____ in production.", blank: 'runtime error', context: 'Production incident' }
    ],
    hints: ['An error that occurs while a program is running, not during compilation', 'r_______ e_____', 'Execution error / crash at runtime / error during program execution']
  },
  {
    id: 'tech_054', phrase: 'bandwidth throttling', meaning: 'limitación del ancho de banda / reducir la velocidad de transferencia artificialmente',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Use browser DevTools to simulate _________ _________ for testing.", blank: 'bandwidth throttling', context: 'Testing' },
      { text: "The ISP uses _________ _________ during peak hours.", blank: 'bandwidth throttling', context: 'Network management' }
    ],
    hints: ['Intentionally limiting the speed of data transfer', 'b_________ t__________', 'Intentional speed limiting / network slowdown / connection throttling']
  },
  {
    id: 'tech_055', phrase: 'hot reload', meaning: 'recarga en caliente / ver cambios en tiempo real sin reiniciar la app',
    level: 'B1', category: 'Tech', source: 'Vite docs',
    sentences: [
      { text: "Vite offers ___ ______ so you see changes instantly in the browser.", blank: 'hot reload', context: 'Frontend dev' },
      { text: "___ ______ saves time during development by avoiding full page refreshes.", blank: 'Hot reload', context: 'Dev experience' }
    ],
    hints: ['A feature that applies code changes instantly without restarting the app', 'h__ r_____', 'Live update / instant reload / HMR / see changes without refresh']
  },
  {
    id: 'tech_056', phrase: 'unit test', meaning: 'prueba unitaria / test que verifica una única función o módulo',
    level: 'B1', category: 'Tech', source: 'Testing terminology',
    sentences: [
      { text: "Write a ____ ____ for every function you create.", blank: 'unit test', context: 'TDD practice' },
      { text: "____ _____ isolate and test one small piece of logic at a time.", blank: 'Unit tests', context: 'Testing strategy' }
    ],
    hints: ['A test for a single, isolated piece of code or function', 'u___ t___', 'Isolated test / single-function test / small scope test']
  },
  {
    id: 'tech_057', phrase: 'pair programming', meaning: 'programación en parejas / dos desarrolladores trabajando en un mismo código',
    level: 'B2', category: 'Tech', source: 'Agile practices',
    sentences: [
      { text: "____ ___________ helps catch bugs earlier and spread knowledge.", blank: 'Pair programming', context: 'Agile practice' },
      { text: "We used ____ ___________ to onboard the new developer.", blank: 'pair programming', context: 'Knowledge sharing' }
    ],
    hints: ['Two developers working together on the same code at the same workstation', 'p___ p__________', 'Collaborative coding / two-person coding / knowledge-sharing technique']
  },
  {
    id: 'tech_058', phrase: 'code review', meaning: 'revisión de código / proceso de examinar el código de otros para mejorarlo',
    level: 'B1', category: 'Tech', source: 'Developer practices',
    sentences: [
      { text: "All pull requests require a ____ ______ before merging.", blank: 'code review', context: 'Git workflow' },
      { text: "____ _______ improves quality and spreads best practices.", blank: 'Code review', context: 'Team quality' }
    ],
    hints: ['Examining someone else\'s code for bugs, readability, and best practices', 'c___ r______', 'Peer review of code / inspecting someone\'s code / PR review']
  },
  {
    id: 'tech_059', phrase: 'brownfield project', meaning: 'proyecto brownfield / sistema existente que debe actualizarse o modificarse',
    level: 'C1', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "Working on a __________ _______ means dealing with legacy code.", blank: 'brownfield project', context: 'Project type' },
      { text: "Unlike greenfield work, a __________ _______ has constraints from past decisions.", blank: 'brownfield project', context: 'Development context' }
    ],
    hints: ['A project that involves working with or upgrading an existing system', 'b_________ p_______', 'Legacy system work / existing codebase / modifying existing software']
  },
  {
    id: 'tech_060', phrase: 'greenfield project', meaning: 'proyecto greenfield / desarrollo de un sistema nuevo desde cero',
    level: 'B2', category: 'Tech', source: 'Developer docs',
    sentences: [
      { text: "A __________ _______ gives you freedom to choose your own stack.", blank: 'greenfield project', context: 'Project kickoff' },
      { text: "We\'re excited to start a __________ _______ with no legacy constraints.", blank: 'greenfield project', context: 'New project' }
    ],
    hints: ['A completely new project built from scratch with no prior code', 'g_________ p_______', 'New project from scratch / no legacy / clean slate development']
  }
]
