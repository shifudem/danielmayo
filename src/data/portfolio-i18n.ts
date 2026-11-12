export type Lang = "en" | "es" | "zh";

export const portfolio = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    meta: {
      title: "Daniel Ernesto Mayo | Senior Infrastructure & Linux Engineer",
      description: "Senior Infrastructure & Linux Engineer with 15+ years in Linux, virtualization, networking, automation, HPC and Python, extending that foundation into DevOps, Cloud, MLOps and AI infrastructure."
    },
    nav: { work: "Selected work", expertise: "Expertise", experience: "Experience", education: "Education", contact: "Contact" },
    hero: {
      availability: "Open to senior and lead-track opportunities",
      eyebrow: "Senior Infrastructure & Linux Engineer",
      title: "I build reliable systems",
      accent: "and automate what slows them down.",
      lead: "15+ years across Linux infrastructure, virtualization, networking, HPC and Python automation. I extend that foundation into modern DevOps, Cloud, MLOps and AI infrastructure.",
      work: "View selected work", contact: "Contact me", location: "Córdoba, Argentina · Remote / International",
      caption: "Infrastructure · Linux · Automation · HPC", years: "15+ YEARS"
    },
    metrics: [["15+","years in infrastructure"],["Linux + HPC","production & scientific systems"],["Python","automation & data workflows"],["4 languages","ES · EN · PT · ZH"]],
    intro: {
      eyebrow: "What I bring", title: "A senior operator with a multidisciplinary edge.",
      body: "My career combines hands-on infrastructure engineering with scientific computing, automation, data and industrial thinking. I am strongest where systems must be dependable, understandable and easier to operate."
    },
    values: [
      ["01","Operate critical infrastructure","Linux administration, virtualization, networking, hardening, availability and troubleshooting."],
      ["02","Automate operations","Python and Bash automation, repeatable workflows, containerized services and deployment practices."],
      ["03","Run scientific computing","HPC infrastructure, Slurm workload management and JupyterHub environments."],
      ["04","Bridge infrastructure with AI","Data Science and AI training combined with RAG, agentic AI and MLOps concepts."]
    ],
    work: { eyebrow: "Selected work", title: "Representative systems and impact.", body: "Not every project is public source code. These cases summarize the kinds of environments I have built, operated and supported." },
    projects: [
      { kicker:"HPC · LINUX · RESEARCH", title:"Scientific computing infrastructure", body:"Administered Linux infrastructure and research workloads at Universidad Nacional de Córdoba, including HPC clusters, Slurm scheduling and JupyterHub environments.", tags:["Linux","HPC","Slurm","JupyterHub"] },
      { kicker:"INFRASTRUCTURE · AUTOMATION", title:"Production systems and operations", body:"Designed and supported physical and virtual infrastructure, networking and automation for corporate environments, including work associated with INVAP, Banco de Córdoba, Tarjeta Naranja and Grupo Edisur.", tags:["Proxmox","VMware","Python","Networking"] },
      { kicker:"DATA · AI · MLOPS", title:"Modernization through automation and AI", body:"Combine Python, data science and AI training with an infrastructure-first mindset to build reproducible workflows and evolve toward RAG, agentic systems, MLOps and AIOps.", tags:["Python","Data Science","RAG","MLOps"] }
    ],
    expertise: { eyebrow:"Expertise", title:"Depth first. Modernization second.", body:"The senior core is infrastructure, Linux, virtualization, networking, automation and HPC. Cloud-native and AI practices are an extension of that experience, not a career reset." },
    skills: [
      ["Linux & Systems","RHEL, CentOS, Ubuntu, Windows Server, hardening, storage, high availability."],
      ["Virtualization","Proxmox, VMware, XenServer and remote desktop environments."],
      ["Automation","Python, Bash, Git and repeatable operational workflows."],
      ["Containers & Delivery","Docker, Docker Compose, Nginx, service networking and CI/CD."],
      ["HPC","Slurm, JupyterHub, cluster administration and scientific workloads."],
      ["Networking","TCP/IP, routing, DNS, wireless, reverse proxies and Cisco fundamentals."],
      ["Cloud & Platform","AWS, Azure, GCP, Terraform, Kubernetes and GitHub Actions."],
      ["Data & AI","Data Science, Machine Learning, SQL, PostgreSQL, MongoDB, RAG and MLflow."],
      ["Scientific Computing","Physical chemistry, DFT, molecular modeling and computational analysis."]
    ],
    experience: { eyebrow:"Experience", title:"15+ years of hands-on delivery.", body:"A career built around keeping systems running, solving operational problems and progressively adding automation, data and scientific computing." },
    roles: [
      { years:"2008–2024", title:"Independent Infrastructure IT & Automation Consultant", body:"Designed, deployed and supported Linux/Windows infrastructure, virtualization, networking and automation for corporate and SMB environments.", stack:["Linux","Python","Proxmox","VMware","Docker","Networking"] },
      { years:"UNC · until 2016", title:"Linux Server Administrator · HPC Infrastructure", body:"Administered Linux services and scientific-computing infrastructure, including HPC clusters, Slurm workloads and JupyterHub.", stack:["Linux","HPC","Slurm","JupyterHub"] },
      { years:"2024", title:"Lecturer · Python Applied to Chemistry", body:"Designed and delivered Python content for scientific data processing, automation and computational modeling.", stack:["Python","Scientific Data","Teaching","Automation"] }
    ],
    science: { eyebrow:"Scientific & industrial edge", title:"Technology backed by science and engineering.", body:"BSc in Chemistry with a Physical Chemistry orientation, training in computational chemistry, molecular modeling, DFT and quantum dynamics, plus a Mechatronics background. This combination is valuable in HPC, mining, laboratories, industrial digitalization, process analytics and scientific software." },
    education: { eyebrow:"Education", title:"Cross-disciplinary by design." },
    degrees: [["BSc in Chemistry — Physical Chemistry","Universidad Nacional de Córdoba"],["Diploma in Data Science, Artificial Intelligence and Applications","Universidad Nacional de Córdoba"],["Higher Technician in Mechatronics","Universidad Tecnológica Nacional"],["Linux Server Administrator","Universidad Nacional de Córdoba"]],
    contact: { eyebrow:"Open to opportunities", title:"Senior roles where infrastructure meets automation, cloud, HPC or AI.", body:"Infrastructure Engineering · Linux · DevOps · Platform Engineering · Automation · HPC · MLOps · AIOps · Data/AI Infrastructure · Scientific Computing", email:"Email me" },
    footer: "Building reliable infrastructure, automating complexity and connecting systems, data and science."
  },

  es: {
    htmlLang: "es-AR",
    ogLocale: "es_AR",
    meta: {
      title: "Daniel Ernesto Mayo | Ingeniero Senior de Infraestructura y Linux",
      description: "Ingeniero Senior de Infraestructura y Linux con más de 15 años en Linux, virtualización, redes, automatización, HPC y Python, extendiendo esa base hacia DevOps, Cloud, MLOps e infraestructura de IA."
    },
    nav: { work: "Proyectos", expertise: "Especialidades", experience: "Experiencia", education: "Formación", contact: "Contacto" },
    hero: {
      availability: "Disponible para posiciones senior y evolución hacia liderazgo técnico",
      eyebrow: "Ingeniero Senior de Infraestructura y Linux",
      title: "Construyo sistemas confiables",
      accent: "y automatizo lo que los frena.",
      lead: "Más de 15 años en infraestructura Linux, virtualización, redes, HPC y automatización con Python. Extiendo esa base hacia DevOps, Cloud, MLOps e infraestructura de Inteligencia Artificial.",
      work: "Ver proyectos", contact: "Contactarme", location: "Córdoba, Argentina · Remoto / Internacional",
      caption: "Infraestructura · Linux · Automatización · HPC", years: "15+ AÑOS"
    },
    metrics: [["15+","años en infraestructura"],["Linux + HPC","sistemas productivos y científicos"],["Python","automatización y datos"],["4 idiomas","ES · EN · PT · ZH"]],
    intro: {
      eyebrow: "Qué aporto", title: "Experiencia senior con una ventaja multidisciplinaria.",
      body: "Mi trayectoria combina ingeniería de infraestructura práctica con cómputo científico, automatización, datos y pensamiento industrial. Mi mayor fortaleza aparece donde los sistemas deben ser confiables, comprensibles y más simples de operar."
    },
    values: [
      ["01","Operar infraestructura crítica","Administración Linux, virtualización, redes, hardening, disponibilidad y resolución de incidentes."],
      ["02","Automatizar operaciones","Python y Bash, flujos reproducibles, servicios containerizados y prácticas de despliegue."],
      ["03","Operar cómputo científico","Infraestructura HPC, gestión de cargas con Slurm y entornos JupyterHub."],
      ["04","Conectar infraestructura con IA","Formación en Ciencia de Datos e IA combinada con RAG, IA agéntica y conceptos MLOps."]
    ],
    work: { eyebrow:"Trabajo seleccionado", title:"Sistemas e impacto representativos.", body:"No todos los proyectos son código abierto. Estos casos resumen los tipos de entornos que construí, operé y soporté." },
    projects: [
      { kicker:"HPC · LINUX · INVESTIGACIÓN", title:"Infraestructura de cómputo científico", body:"Administré infraestructura Linux y cargas de investigación en la Universidad Nacional de Córdoba, incluyendo clústeres HPC, planificación con Slurm y entornos JupyterHub.", tags:["Linux","HPC","Slurm","JupyterHub"] },
      { kicker:"INFRAESTRUCTURA · AUTOMATIZACIÓN", title:"Sistemas productivos y operaciones", body:"Diseñé y soporté infraestructura física y virtual, redes y automatización para entornos corporativos, incluyendo trabajos asociados a INVAP, Banco de Córdoba, Tarjeta Naranja y Grupo Edisur.", tags:["Proxmox","VMware","Python","Redes"] },
      { kicker:"DATOS · IA · MLOPS", title:"Modernización mediante automatización e IA", body:"Combino Python, Ciencia de Datos y formación en IA con una mirada orientada a infraestructura para construir flujos reproducibles y evolucionar hacia RAG, sistemas agénticos, MLOps y AIOps.", tags:["Python","Data Science","RAG","MLOps"] }
    ],
    expertise: { eyebrow:"Especialidades", title:"Primero profundidad. Después modernización.", body:"El núcleo senior está en infraestructura, Linux, virtualización, redes, automatización y HPC. Cloud-native e IA son una evolución de esa experiencia, no un reinicio profesional." },
    skills: [
      ["Linux y Sistemas","RHEL, CentOS, Ubuntu, Windows Server, hardening, almacenamiento y alta disponibilidad."],
      ["Virtualización","Proxmox, VMware, XenServer y entornos de escritorio remoto."],
      ["Automatización","Python, Bash, Git y flujos operativos reproducibles."],
      ["Contenedores y Delivery","Docker, Docker Compose, Nginx, redes de servicios y CI/CD."],
      ["HPC","Slurm, JupyterHub, administración de clústeres y cargas científicas."],
      ["Redes","TCP/IP, routing, DNS, wireless, proxies reversos y fundamentos Cisco."],
      ["Cloud y Platform","AWS, Azure, GCP, Terraform, Kubernetes y GitHub Actions."],
      ["Datos e IA","Data Science, Machine Learning, SQL, PostgreSQL, MongoDB, RAG y MLflow."],
      ["Cómputo Científico","Fisicoquímica, DFT, modelado molecular y análisis computacional."]
    ],
    experience: { eyebrow:"Experiencia", title:"Más de 15 años de implementación práctica.", body:"Una trayectoria construida manteniendo sistemas operativos, resolviendo problemas reales e incorporando progresivamente automatización, datos y cómputo científico." },
    roles: [
      { years:"2008–2024", title:"Consultor independiente de Infraestructura IT y Automatización", body:"Diseño, despliegue y soporte de infraestructura Linux/Windows, virtualización, redes y automatización para entornos corporativos y PyMEs.", stack:["Linux","Python","Proxmox","VMware","Docker","Redes"] },
      { years:"UNC · hasta 2016", title:"Administrador de Servidores Linux · Infraestructura HPC", body:"Administración de servicios Linux e infraestructura de cómputo científico, incluyendo clústeres HPC, cargas Slurm y JupyterHub.", stack:["Linux","HPC","Slurm","JupyterHub"] },
      { years:"2024", title:"Docente · Python Aplicado a la Química", body:"Diseño y dictado de contenidos de Python para procesamiento científico, automatización y modelado computacional.", stack:["Python","Datos científicos","Docencia","Automatización"] }
    ],
    science: { eyebrow:"Diferencial científico e industrial", title:"Tecnología respaldada por ciencia e ingeniería.", body:"Licenciado en Química con orientación Fisicoquímica, formación en química computacional, modelado molecular, DFT y dinámica cuántica, además de base en Mecatrónica. Esta combinación aporta valor en HPC, minería, laboratorios, digitalización industrial, analítica de procesos y software científico." },
    education: { eyebrow:"Formación", title:"Multidisciplinario por diseño." },
    degrees: [["Licenciatura en Química — Fisicoquímica","Universidad Nacional de Córdoba"],["Diplomatura en Ciencia de Datos, Inteligencia Artificial y Aplicaciones","Universidad Nacional de Córdoba"],["Técnico Superior en Mecatrónica","Universidad Tecnológica Nacional"],["Administrador de Servidores Linux","Universidad Nacional de Córdoba"]],
    contact: { eyebrow:"Abierto a oportunidades", title:"Posiciones senior donde infraestructura se conecte con automatización, cloud, HPC o IA.", body:"Ingeniería de Infraestructura · Linux · DevOps · Platform Engineering · Automatización · HPC · MLOps · AIOps · Infraestructura Data/AI · Cómputo Científico", email:"Escribirme" },
    footer: "Construyendo infraestructura confiable, automatizando complejidad y conectando sistemas, datos y ciencia."
  },

  zh: {
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    meta: {
      title: "Daniel Ernesto Mayo | 高级基础设施与 Linux 工程师",
      description: "高级基础设施与 Linux 工程师，拥有15年以上 Linux、虚拟化、网络、自动化、HPC 和 Python 经验，并将这些能力延伸至 DevOps、云平台、MLOps 与 AI 基础设施。"
    },
    nav: { work: "代表项目", expertise: "专业能力", experience: "工作经历", education: "教育背景", contact: "联系我" },
    hero: {
      availability: "开放高级工程师及技术负责人发展岗位",
      eyebrow: "高级基础设施与 Linux 工程师",
      title: "构建可靠系统",
      accent: "并用自动化消除瓶颈。",
      lead: "拥有15年以上 Linux 基础设施、虚拟化、网络、HPC 和 Python 自动化经验，并将这些经验延伸至现代 DevOps、云平台、MLOps 与 AI 基础设施。",
      work: "查看代表项目", contact: "联系我", location: "阿根廷科尔多瓦 · 远程 / 国际机会",
      caption: "基础设施 · Linux · 自动化 · HPC", years: "15+ 年经验"
    },
    metrics: [["15+","年基础设施经验"],["Linux + HPC","生产与科研系统"],["Python","自动化与数据流程"],["4 种语言","西语 · 英语 · 葡语 · 中文"]],
    intro: {
      eyebrow: "我的优势", title: "资深运维能力与跨学科背景的结合。",
      body: "我的职业经历将基础设施工程、科学计算、自动化、数据分析与工业思维结合在一起。我最擅长让系统更加可靠、清晰、易维护，并降低日常运维复杂度。"
    },
    values: [
      ["01","运营关键基础设施","Linux 管理、虚拟化、网络、安全加固、高可用与故障排查。"],
      ["02","自动化运维","使用 Python 与 Bash 构建可重复流程、容器化服务与部署自动化。"],
      ["03","运行科学计算环境","HPC 基础设施、Slurm 作业调度与 JupyterHub 科研环境。"],
      ["04","连接基础设施与 AI","将数据科学与人工智能训练、RAG、智能体和 MLOps 概念融入面向生产的基础设施实践。"]
    ],
    work: { eyebrow:"代表项目", title:"具有代表性的系统与影响。", body:"并非所有项目都可以公开源码。以下案例概括了我实际建设、运营和支持过的典型环境。" },
    projects: [
      { kicker:"HPC · LINUX · 科研", title:"科学计算基础设施", body:"在科尔多瓦国立大学管理 Linux 科研基础设施与高性能计算工作负载，包括 HPC 集群、Slurm 调度以及 JupyterHub 协作分析环境。", tags:["Linux","HPC","Slurm","JupyterHub"] },
      { kicker:"基础设施 · 自动化", title:"生产系统与运维", body:"为企业环境设计并支持物理与虚拟基础设施、网络和自动化方案，相关工作涉及 INVAP、Banco de Córdoba、Tarjeta Naranja 与 Grupo Edisur。", tags:["Proxmox","VMware","Python","网络"] },
      { kicker:"数据 · AI · MLOPS", title:"通过自动化与 AI 推动现代化", body:"结合 Python、数据科学与 AI 训练，以及以基础设施为核心的生产思维，构建可重复流程，并向 RAG、智能体系统、MLOps 与 AIOps 演进。", tags:["Python","数据科学","RAG","MLOps"] }
    ],
    expertise: { eyebrow:"专业能力", title:"先有深度，再做现代化升级。", body:"我的资深核心能力集中在基础设施、Linux、虚拟化、网络、自动化与 HPC。云原生和 AI 是这些经验的自然延伸，而不是职业重新起步。" },
    skills: [
      ["Linux 与系统","RHEL、CentOS、Ubuntu、Windows Server、安全加固、存储与高可用。"],
      ["虚拟化","Proxmox、VMware、XenServer 与远程桌面环境。"],
      ["自动化","Python、Bash、Git 与可重复运维流程。"],
      ["容器与交付","Docker、Docker Compose、Nginx、服务网络与 CI/CD。"],
      ["HPC","Slurm、JupyterHub、集群管理与科研工作负载。"],
      ["网络","TCP/IP、路由、DNS、无线网络、反向代理与 Cisco 基础。"],
      ["云与平台工程","AWS、Azure、GCP、Terraform、Kubernetes 与 GitHub Actions。"],
      ["数据与 AI","数据科学、机器学习、SQL、PostgreSQL、MongoDB、RAG 与 MLflow。"],
      ["科学计算","物理化学、DFT、分子建模与计算分析。"]
    ],
    experience: { eyebrow:"工作经历", title:"15年以上一线实施与运维经验。", body:"职业经历始终围绕稳定运行系统、解决实际运维问题，并逐步将自动化、数据与科学计算能力融入基础设施。" },
    roles: [
      { years:"2008–2024", title:"独立 IT 基础设施与自动化顾问", body:"为企业与中小型组织设计、部署并支持 Linux/Windows 基础设施、虚拟化、网络和自动化。", stack:["Linux","Python","Proxmox","VMware","Docker","网络"] },
      { years:"UNC · 至 2016", title:"Linux 服务器管理员 · HPC 基础设施", body:"管理 Linux 服务与科学计算基础设施，包括 HPC 集群、Slurm 工作负载以及 JupyterHub。", stack:["Linux","HPC","Slurm","JupyterHub"] },
      { years:"2024", title:"讲师 · Python 在化学中的应用", body:"设计并教授用于科学数据处理、自动化与计算建模的 Python 内容。", stack:["Python","科学数据","教学","自动化"] }
    ],
    science: { eyebrow:"科学与工业优势", title:"以科学与工程背景支撑技术实践。", body:"拥有化学学士学位（物理化学方向），接受过计算化学、分子建模、DFT 与量子动力学训练，并具备机电一体化背景。这种组合适用于 HPC、矿业、实验室数字化、工业数字化、过程分析与科学软件等场景。" },
    education: { eyebrow:"教育背景", title:"跨学科能力来自系统化积累。" },
    degrees: [["化学学士 — 物理化学方向","科尔多瓦国立大学"],["数据科学、人工智能及其应用大学文凭","科尔多瓦国立大学"],["机电一体化高级技术员","国家技术大学（UTN）"],["Linux 服务器管理员","科尔多瓦国立大学"]],
    contact: { eyebrow:"开放机会", title:"寻找基础设施与自动化、云、HPC 或 AI 交汇的高级岗位。", body:"基础设施工程 · Linux · DevOps · 平台工程 · 自动化 · HPC · MLOps · AIOps · 数据/AI 基础设施 · 科学计算", email:"发送邮件" },
    footer: "构建可靠基础设施，自动化复杂流程，并连接系统、数据与科学。"
  }
} as const;
