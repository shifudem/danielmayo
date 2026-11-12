export type RecruiterLang = "en" | "es" | "zh";

export const recruiterConversion = {
  en: {
    nav: "CV / Recruiters",
    heroCta: "CV / Recruiter pack",
    eyebrow: "Recruiter shortcut",
    title: "Why hire Daniel?",
    body: "A senior infrastructure profile with enough breadth to connect operations, automation, scientific computing and modern AI platforms - without pretending that every technology has the same depth of experience.",
    reasons: [
      ["01", "Senior infrastructure depth", "15+ years across Linux, systems administration, virtualization, networking, troubleshooting and production operations."],
      ["02", "Automation mindset", "Python and Bash are used to turn recurring operational work into reproducible workflows instead of one-off manual procedures."],
      ["03", "Science + engineering edge", "Chemistry, Physical Chemistry, Mechatronics and HPC experience create unusual depth for scientific, industrial and data-intensive environments."],
      ["04", "Modernization without a career reset", "Cloud, DevOps, MLOps, RAG and AI infrastructure are positioned as an evolution of a strong operations foundation."],
      ["05", "Cross-functional communication", "Able to work across infrastructure, software, research and operations teams and explain technical trade-offs clearly."],
      ["06", "International readiness", "Spanish native, advanced English and Portuguese, plus Mandarin Chinese HSK4 / intermediate level."],
    ],
    profilesEyebrow: "Choose the right profile",
    profilesTitle: "Two CV paths for different hiring contexts.",
    profilesBody: "Recruiters can download the version that best matches the role. Both profiles come from the same career, but each emphasizes the experience most relevant to the position.",
    downloadEn: "Download CV - EN",
    downloadEs: "Download CV - ES",
    profiles: [
      {
        key: "it",
        badge: "Infrastructure / DevOps",
        title: "IT Infrastructure & Automation Profile",
        body: "Best fit for infrastructure, Linux, platform, DevOps, automation, HPC operations, Cloud and MLOps/AIOps opportunities.",
        roles: ["Senior Infrastructure Engineer", "Linux Engineer", "DevOps / Platform", "HPC Engineer", "Automation", "Cloud / MLOps"],
        cvEn: "cv/Daniel_Mayo_IT_Infrastructure_EN.pdf",
        cvEs: "cv/Daniel_Mayo_IT_Infrastructure_ES.pdf"
      },
      {
        key: "science",
        badge: "Scientific / HPC / Data",
        title: "Scientific Computing & Data Profile",
        body: "Best fit where scientific computing, HPC, Chemistry, Data/AI infrastructure, mining technology, laboratories or industrial analytics intersect.",
        roles: ["Scientific Computing", "HPC", "Data/AI Infrastructure", "Computational Chemistry", "Mining Tech", "Scientific Software"],
        cvEn: "cv/Daniel_Mayo_Scientific_HPC_Data_EN.pdf",
        cvEs: "cv/Daniel_Mayo_Scientific_HPC_Data_ES.pdf"
      }
    ],
    ctaEyebrow: "Recruiter CTA",
    ctaTitle: "Hiring for a role that matches this profile?",
    ctaBody: "Send the role, stack and location/remote conditions. I can quickly tell you which parts of my background are directly relevant and where the learning curve would be.",
    email: "Discuss an opportunity",
    linkedin: "View LinkedIn",
    response: "Open to remote, international and Argentina-based opportunities.",
    mailSubject: "Professional opportunity - Daniel Ernesto Mayo",
    mailBody: "Hi Daniel, I am contacting you regarding a professional opportunity. Role:  Company:  Location / remote:  Key stack:"
  },

  es: {
    nav: "CV / Recruiters",
    heroCta: "CV / Recruiter pack",
    eyebrow: "Acceso rápido para recruiters",
    title: "¿Por qué contratar a Daniel?",
    body: "Un perfil senior de infraestructura con amplitud suficiente para conectar operaciones, automatización, cómputo científico y plataformas modernas de IA, sin presentar todas las tecnologías como si tuvieran el mismo nivel de profundidad.",
    reasons: [
      ["01", "Profundidad senior en infraestructura", "Más de 15 años en Linux, administración de sistemas, virtualización, redes, troubleshooting y operaciones productivas."],
      ["02", "Mentalidad de automatización", "Python y Bash se utilizan para convertir trabajo operativo recurrente en flujos reproducibles en lugar de procedimientos manuales aislados."],
      ["03", "Diferencial científico e ingenieril", "Química, Fisicoquímica, Mecatrónica y experiencia HPC aportan profundidad poco común en entornos científicos, industriales y de datos."],
      ["04", "Modernización sin reiniciar la carrera", "Cloud, DevOps, MLOps, RAG e infraestructura de IA se presentan como evolución de una base sólida de operaciones."],
      ["05", "Comunicación transversal", "Capacidad para trabajar entre infraestructura, software, investigación y operaciones y explicar con claridad decisiones y compromisos técnicos."],
      ["06", "Preparación internacional", "Español nativo, inglés y portugués avanzados, más chino mandarín HSK4 / nivel intermedio."],
    ],
    profilesEyebrow: "Elegí el perfil adecuado",
    profilesTitle: "Dos versiones de CV para contextos de contratación diferentes.",
    profilesBody: "El recruiter puede descargar la versión que mejor coincida con la vacante. Ambos CV parten de la misma trayectoria, pero priorizan la experiencia más relevante para cada rol.",
    downloadEn: "Descargar CV - EN",
    downloadEs: "Descargar CV - ES",
    profiles: [
      {
        key: "it",
        badge: "Infraestructura / DevOps",
        title: "Perfil IT - Infraestructura y Automatización",
        body: "Orientado a infraestructura, Linux, Platform/DevOps, automatización, operación HPC, Cloud y oportunidades MLOps/AIOps.",
        roles: ["Senior Infrastructure Engineer", "Linux Engineer", "DevOps / Platform", "HPC Engineer", "Automatización", "Cloud / MLOps"],
        cvEn: "cv/Daniel_Mayo_IT_Infrastructure_EN.pdf",
        cvEs: "cv/Daniel_Mayo_IT_Infrastructure_ES.pdf"
      },
      {
        key: "science",
        badge: "Científico / HPC / Datos",
        title: "Perfil Científico - HPC, Datos e IA",
        body: "Orientado a posiciones donde convergen cómputo científico, HPC, Química, infraestructura Data/AI, minería, laboratorios o analítica industrial.",
        roles: ["Scientific Computing", "HPC", "Infraestructura Data/AI", "Química Computacional", "Mining Tech", "Software Científico"],
        cvEn: "cv/Daniel_Mayo_Scientific_HPC_Data_EN.pdf",
        cvEs: "cv/Daniel_Mayo_Scientific_HPC_Data_ES.pdf"
      }
    ],
    ctaEyebrow: "CTA para recruiters",
    ctaTitle: "¿Estás buscando un perfil para una posición compatible?",
    ctaBody: "Enviame el rol, stack y condiciones de ubicación/remoto. Puedo indicarte rápidamente qué partes de mi experiencia son directamente relevantes y dónde existiría una curva de aprendizaje.",
    email: "Conversar sobre una oportunidad",
    linkedin: "Ver LinkedIn",
    response: "Disponible para oportunidades remotas, internacionales y en Argentina.",
    mailSubject: "Oportunidad profesional - Daniel Ernesto Mayo",
    mailBody: "Hola Daniel, te contacto por una oportunidad profesional. Rol:  Empresa:  Ubicación / remoto:  Stack principal:"
  },

  zh: {
    nav: "CV / 招聘",
    heroCta: "CV / 招聘资料",
    eyebrow: "招聘者快速入口",
    title: "为什么选择 Daniel？",
    body: "资深基础设施经验与跨领域能力相结合，能够连接运维、自动化、科学计算和现代 AI 平台；同时清楚区分核心资深能力与正在深化的技术方向。",
    reasons: [
      ["01", "资深基础设施经验", "拥有15年以上 Linux、系统管理、虚拟化、网络、故障排查和生产环境运维经验。"],
      ["02", "自动化思维", "使用 Python 与 Bash 将重复性运维工作转化为可重复、可维护的流程。"],
      ["03", "科学与工程背景", "化学、物理化学、机电一体化和 HPC 经验，为科研、工业和数据密集型环境提供独特优势。"],
      ["04", "基于经验的现代化升级", "Cloud、DevOps、MLOps、RAG 与 AI 基础设施被定位为资深运维能力的自然延伸。"],
      ["05", "跨团队沟通", "能够在基础设施、软件、科研和运营团队之间协作，并清晰说明技术取舍。"],
      ["06", "国际化沟通能力", "西班牙语母语，英语和葡萄牙语高级水平，中文普通话 HSK4 / 中级。"],
    ],
    profilesEyebrow: "选择匹配岗位的版本",
    profilesTitle: "针对不同招聘场景的两套 CV。",
    profilesBody: "招聘者可以根据岗位下载最匹配的版本。两个 CV 来自同一职业经历，但强调不同岗位最相关的能力。",
    downloadEn: "下载英文 CV",
    downloadEs: "下载西班牙文 CV",
    profiles: [
      {
        key: "it",
        badge: "基础设施 / DevOps",
        title: "IT 基础设施与自动化档案",
        body: "适合基础设施、Linux、Platform/DevOps、自动化、HPC 运维、Cloud 与 MLOps/AIOps 岗位。",
        roles: ["Senior Infrastructure", "Linux", "DevOps / Platform", "HPC", "Automation", "Cloud / MLOps"],
        cvEn: "cv/Daniel_Mayo_IT_Infrastructure_EN.pdf",
        cvEs: "cv/Daniel_Mayo_IT_Infrastructure_ES.pdf"
      },
      {
        key: "science",
        badge: "科研 / HPC / 数据",
        title: "科学计算、HPC 与数据档案",
        body: "适合科学计算、HPC、化学、Data/AI 基础设施、矿业技术、实验室数字化或工业分析等交叉岗位。",
        roles: ["Scientific Computing", "HPC", "Data/AI Infrastructure", "Computational Chemistry", "Mining Tech", "Scientific Software"],
        cvEn: "cv/Daniel_Mayo_Scientific_HPC_Data_EN.pdf",
        cvEs: "cv/Daniel_Mayo_Scientific_HPC_Data_ES.pdf"
      }
    ],
    ctaEyebrow: "招聘者 CTA",
    ctaTitle: "正在招聘与此背景匹配的职位？",
    ctaBody: "请发送职位、技术栈以及地点/远程条件。我可以快速说明哪些经验与岗位直接相关，以及哪些方面需要学习和适应。",
    email: "讨论职业机会",
    linkedin: "查看 LinkedIn",
    response: "开放远程、国际以及阿根廷本地机会。",
    mailSubject: "Professional opportunity - Daniel Ernesto Mayo",
    mailBody: "Hi Daniel, I am contacting you regarding a professional opportunity. Role:  Company:  Location / remote:  Key stack:"
  }
} as const;
