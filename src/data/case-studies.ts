export type CaseStudyLang = "en" | "es" | "zh";

export type CaseStudy = {
  kicker: string;
  title: string;
  summary: string;
  problem: string;
  architecture: string;
  role: string;
  result: string;
  tags: readonly string[];
  repoUrl?: string;
  featured?: boolean;
};

export const caseStudyUI = {
  en: {
    problem: "Problem",
    architecture: "Architecture",
    role: "My responsibility",
    result: "Result",
    public: "Public GitHub",
    operational: "Operational case",
    viewRepo: "View repository",
    githubNote: "Public code is linked only where a repository is actually available. Operational and client-facing work is presented as an architecture case study without inventing source-code links.",
    githubCta: "View public GitHub"
  },
  es: {
    problem: "Problema",
    architecture: "Arquitectura",
    role: "Mi responsabilidad",
    result: "Resultado",
    public: "GitHub público",
    operational: "Caso operativo",
    viewRepo: "Ver repositorio",
    githubNote: "El código público se enlaza solo cuando existe realmente un repositorio disponible. El trabajo operativo y con clientes se presenta como caso de arquitectura, sin inventar enlaces de código fuente.",
    githubCta: "Ver GitHub público"
  },
  zh: {
    problem: "问题",
    architecture: "架构",
    role: "我的职责",
    result: "结果",
    public: "公开 GitHub",
    operational: "实际项目案例",
    viewRepo: "查看代码仓库",
    githubNote: "只有确实存在公开代码仓库时才提供链接。运维和客户项目以架构案例形式展示，不虚构源码链接。",
    githubCta: "查看公开 GitHub"
  }
} as const;

export const caseStudies: Record<CaseStudyLang, readonly CaseStudy[]> = {
  en: [
    {
      featured: true,
      kicker: "HPC · LINUX · RESEARCH",
      title: "Scientific computing infrastructure at UNC",
      summary: "Linux and HPC operations for university research environments, combining scheduled compute resources with collaborative analysis tooling.",
      problem: "Research workloads needed shared compute capacity, controlled scheduling and an accessible environment for scientific analysis.",
      architecture: "Linux HPC clusters Mendieta and Serafín → Slurm Workload Manager → JupyterHub → research and scientific-computing workloads.",
      role: "Administered Linux infrastructure, managed compute resources and queues, maintained JupyterHub and supported research users and workloads.",
      result: "A centrally managed scientific-computing environment with scheduled HPC workloads and collaborative notebook access for research teams.",
      tags: ["Linux", "HPC", "Slurm", "JupyterHub", "Scientific Computing"]
    },
    {
      kicker: "INFRASTRUCTURE · CORPORATE",
      title: "Corporate infrastructure and virtualization",
      summary: "Infrastructure engineering and technical support across heterogeneous corporate environments where reliability and operational continuity were essential.",
      problem: "Organizations needed dependable server, virtualization and network environments across mixed physical and virtual infrastructure.",
      architecture: "RHEL / Windows Server → Proxmox / VMware / XenServer → structured networking and remote desktop environments → operational support.",
      role: "Designed, deployed, configured and supported infrastructure for environments associated with INVAP, Banco de Córdoba, Tarjeta Naranja, Grupo Edisur and other organizations.",
      result: "Production infrastructure supported through a single technical profile spanning servers, virtualization, networking, troubleshooting and operational continuity.",
      tags: ["RHEL", "Windows Server", "Proxmox", "VMware", "XenServer", "Networking"]
    },
    {
      kicker: "PYTHON · AUTOMATION · DATA",
      title: "Operational automation with Python",
      summary: "Turning repetitive operational and data tasks into scripts and reproducible workflows instead of manual procedures.",
      problem: "Recurring administration, data-processing and reporting tasks consumed time and were difficult to reproduce consistently.",
      architecture: "Python + Bash → SQL/data processing → scheduled or repeatable workflows → Docker where isolation and portability were useful.",
      role: "Designed automation scripts, operational tooling and data workflows; integrated automation into infrastructure and technical-support activities.",
      result: "More repeatable operations, fewer manual steps and a foundation for evolving workflows toward CI/CD, data pipelines and MLOps practices.",
      tags: ["Python", "Bash", "SQL", "Docker", "Automation"]
    },
    {
      kicker: "AI · RAG · MULTILINGUAL",
      title: "Multilingual RAG assistant for tourism operations",
      summary: "An AI assistant designed to answer from a continuously maintained business knowledge base and support Spanish, English, Portuguese and Mandarin.",
      problem: "Operational and tourism information changed frequently, while customer questions required consistent answers across several languages.",
      architecture: "Gemini model → retrieval over business documents and images → Dockerized assistant service → health endpoint → n8n/WhatsApp fallback flow.",
      role: "Designed the assistant architecture, knowledge-source strategy, multilingual behavior, fallback logic and production troubleshooting.",
      result: "A working assistant service capable of answering from the business catalog, with multilingual instructions verified and an operational health-check path.",
      tags: ["RAG", "Gemini", "Docker", "n8n", "Multilingual AI", "WhatsApp"]
    },
    {
      kicker: "CHINESE · SPEECH · OFFLINE AI",
      title: "HSK subtitle and language-learning workstation",
      summary: "A local Streamlit application for Chinese-language media processing with speech transcription and offline Chinese–Spanish translation.",
      problem: "Chinese study material needed transcription and translation without depending permanently on external APIs or cloud services.",
      architecture: "Streamlit → FFmpeg → faster-whisper small → Argos Translate zh↔en↔es → local model assets and subtitle-processing workflow.",
      role: "Integrated the local application stack, prepared offline translation packages, configured Whisper assets and validated the end-to-end environment.",
      result: "Local Chinese transcription and Chinese↔Spanish translation available without an online translation API, suitable for subtitle and HSK study workflows.",
      tags: ["Streamlit", "Whisper", "Argos Translate", "FFmpeg", "Chinese", "Offline AI"]
    },
    {
      kicker: "DOCKER · NGINX · CLOUDFLARE",
      title: "Private service exposure without public server ports",
      summary: "A containerized service architecture that exposes an application through Cloudflare while keeping the application bound locally.",
      problem: "A production assistant needed internet access without exposing its application port directly on the public server interface.",
      architecture: "Ubuntu / Proxmox → Docker Compose → application on 127.0.0.1:8010 → Nginx → Cloudflare Tunnel → DNS / HTTPS.",
      role: "Configured the container service, reverse-proxy path, tunnel, DNS and health checks; diagnosed initial 503 behavior and validated service reachability.",
      result: "The assistant became reachable through the public hostname while the application service remained locally bound, with tunnel and container health verified.",
      tags: ["Docker", "Nginx", "Cloudflare Tunnel", "DNS", "Linux", "HTTPS"]
    },
    {
      kicker: "ASTRO · GITHUB ACTIONS · PAGES",
      title: "This portfolio as a public deployment project",
      summary: "A trilingual professional portfolio engineered as a static Astro site with automated GitHub Pages delivery.",
      problem: "A conventional CV did not communicate seniority, cross-disciplinary depth or demonstrable delivery practices effectively.",
      architecture: "Astro static site → EN / ES / 中文 routes → GitHub repository → GitHub Actions build → Pages artifact → GitHub Pages.",
      role: "Defined the positioning and content strategy, implemented the site architecture, configured deployment and iterated on production builds.",
      result: "A public, responsive and automatically deployed portfolio that is rebuilt on every push to main and demonstrates the same delivery practices it describes.",
      tags: ["Astro", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo"
    }
  ],

  es: [
    {
      featured: true,
      kicker: "HPC · LINUX · INVESTIGACIÓN",
      title: "Infraestructura de cómputo científico en la UNC",
      summary: "Operación Linux y HPC para entornos universitarios de investigación, combinando recursos de cálculo planificados con herramientas colaborativas de análisis.",
      problem: "Las cargas de investigación necesitaban capacidad de cómputo compartida, planificación controlada y un entorno accesible para análisis científico.",
      architecture: "Clústeres HPC Linux Mendieta y Serafín → Slurm Workload Manager → JupyterHub → cargas de investigación y cómputo científico.",
      role: "Administré infraestructura Linux, recursos y colas de cómputo, mantuve JupyterHub y brindé soporte a usuarios y cargas científicas.",
      result: "Un entorno de cómputo científico administrado centralmente, con cargas HPC planificadas y acceso colaborativo mediante notebooks para equipos de investigación.",
      tags: ["Linux", "HPC", "Slurm", "JupyterHub", "Cómputo científico"]
    },
    {
      kicker: "INFRAESTRUCTURA · CORPORATIVO",
      title: "Infraestructura corporativa y virtualización",
      summary: "Ingeniería y soporte de infraestructura en entornos corporativos heterogéneos donde la confiabilidad y continuidad operativa eran esenciales.",
      problem: "Las organizaciones necesitaban entornos confiables de servidores, virtualización y redes sobre infraestructura física y virtual diversa.",
      architecture: "RHEL / Windows Server → Proxmox / VMware / XenServer → redes estructuradas y escritorios remotos → soporte operativo.",
      role: "Diseñé, desplegué, configuré y soporté infraestructura en entornos asociados a INVAP, Banco de Córdoba, Tarjeta Naranja, Grupo Edisur y otras organizaciones.",
      result: "Infraestructura productiva soportada desde un perfil técnico integral que cubre servidores, virtualización, redes, troubleshooting y continuidad operativa.",
      tags: ["RHEL", "Windows Server", "Proxmox", "VMware", "XenServer", "Redes"]
    },
    {
      kicker: "PYTHON · AUTOMATIZACIÓN · DATOS",
      title: "Automatización operativa con Python",
      summary: "Conversión de tareas repetitivas de operación y datos en scripts y flujos reproducibles en lugar de procedimientos manuales.",
      problem: "Tareas recurrentes de administración, procesamiento de datos y reportes consumían tiempo y resultaban difíciles de reproducir de forma consistente.",
      architecture: "Python + Bash → SQL/procesamiento de datos → flujos programados o repetibles → Docker cuando se requería aislamiento y portabilidad.",
      role: "Diseñé scripts de automatización, herramientas operativas y flujos de datos; integré automatización en tareas de infraestructura y soporte técnico.",
      result: "Operaciones más reproducibles, menos pasos manuales y una base para evolucionar hacia CI/CD, pipelines de datos y prácticas MLOps.",
      tags: ["Python", "Bash", "SQL", "Docker", "Automatización"]
    },
    {
      kicker: "IA · RAG · MULTILINGÜE",
      title: "Asistente RAG multilingüe para operaciones turísticas",
      summary: "Asistente de IA diseñado para responder desde una base de conocimiento empresarial mantenida de forma continua y atender en español, inglés, portugués y mandarín.",
      problem: "La información operativa y turística cambiaba con frecuencia, mientras las consultas requerían respuestas consistentes en varios idiomas.",
      architecture: "Modelo Gemini → recuperación sobre documentos e imágenes del negocio → servicio de asistente en Docker → endpoint de salud → fallback n8n/WhatsApp.",
      role: "Diseñé la arquitectura del asistente, estrategia de fuentes, comportamiento multilingüe, lógica de fallback y troubleshooting en producción.",
      result: "Servicio de asistente funcional capaz de responder desde el catálogo del negocio, con instrucciones multilingües verificadas y ruta de health-check operativa.",
      tags: ["RAG", "Gemini", "Docker", "n8n", "IA multilingüe", "WhatsApp"]
    },
    {
      kicker: "CHINO · VOZ · IA OFFLINE",
      title: "Estación HSK de subtítulos y aprendizaje de idiomas",
      summary: "Aplicación local en Streamlit para procesar material en chino con transcripción de voz y traducción offline chino–español.",
      problem: "El material de estudio de chino necesitaba transcripción y traducción sin depender permanentemente de APIs externas o servicios cloud.",
      architecture: "Streamlit → FFmpeg → faster-whisper small → Argos Translate zh↔en↔es → modelos locales y flujo de subtítulos.",
      role: "Integré el stack local, preparé paquetes de traducción offline, configuré los modelos Whisper y validé el entorno end-to-end.",
      result: "Transcripción local en chino y traducción chino↔español disponibles sin API de traducción online, aptas para flujos de subtítulos y estudio HSK.",
      tags: ["Streamlit", "Whisper", "Argos Translate", "FFmpeg", "Chino", "IA offline"]
    },
    {
      kicker: "DOCKER · NGINX · CLOUDFLARE",
      title: "Exposición privada de servicios sin puertos públicos",
      summary: "Arquitectura containerizada que publica una aplicación mediante Cloudflare manteniendo el servicio de aplicación ligado localmente.",
      problem: "Un asistente de producción necesitaba acceso desde Internet sin exponer directamente el puerto de aplicación en la interfaz pública del servidor.",
      architecture: "Ubuntu / Proxmox → Docker Compose → aplicación en 127.0.0.1:8010 → Nginx → Cloudflare Tunnel → DNS / HTTPS.",
      role: "Configuré servicio containerizado, proxy reverso, túnel, DNS y health checks; diagnostiqué el 503 inicial y validé la conectividad.",
      result: "El asistente quedó accesible mediante hostname público mientras el servicio de aplicación permaneció ligado localmente, con túnel y contenedor verificados como saludables.",
      tags: ["Docker", "Nginx", "Cloudflare Tunnel", "DNS", "Linux", "HTTPS"]
    },
    {
      kicker: "ASTRO · GITHUB ACTIONS · PAGES",
      title: "Este portfolio como proyecto público de despliegue",
      summary: "Portfolio profesional trilingüe implementado como sitio estático Astro con entrega automatizada mediante GitHub Pages.",
      problem: "Un CV convencional no comunicaba con suficiente fuerza el seniority, la profundidad multidisciplinaria ni prácticas reales de entrega.",
      architecture: "Astro estático → rutas EN / ES / 中文 → repositorio GitHub → build con GitHub Actions → artefacto Pages → GitHub Pages.",
      role: "Definí posicionamiento y estrategia de contenido, implementé la arquitectura del sitio, configuré el despliegue e iteré sobre builds productivos.",
      result: "Portfolio público, responsive y desplegado automáticamente, reconstruido con cada push a main y demostrando las mismas prácticas de delivery que describe.",
      tags: ["Astro", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo"
    }
  ],

  zh: [
    {
      featured: true,
      kicker: "HPC · LINUX · 科研",
      title: "UNC 科学计算基础设施",
      summary: "面向大学科研环境的 Linux 与 HPC 运维，将集中式计算资源、作业调度和协作分析工具结合起来。",
      problem: "科研工作负载需要共享计算能力、可控的作业调度，以及便于研究人员使用的科学分析环境。",
      architecture: "Mendieta 与 Serafín Linux HPC 集群 → Slurm Workload Manager → JupyterHub → 科研与科学计算工作负载。",
      role: "负责 Linux 基础设施管理、计算资源与队列管理、JupyterHub 维护，并支持科研用户与计算任务。",
      result: "形成集中管理的科学计算环境，实现 HPC 作业调度，并为研究团队提供协作式 Notebook 访问。",
      tags: ["Linux", "HPC", "Slurm", "JupyterHub", "科学计算"]
    },
    {
      kicker: "基础设施 · 企业环境",
      title: "企业基础设施与虚拟化",
      summary: "在异构企业环境中进行基础设施工程与技术支持，重点保障可靠性和业务连续性。",
      problem: "组织需要在混合物理与虚拟环境中获得稳定的服务器、虚拟化和网络基础设施。",
      architecture: "RHEL / Windows Server → Proxmox / VMware / XenServer → 结构化网络与远程桌面环境 → 运维支持。",
      role: "为与 INVAP、Banco de Córdoba、Tarjeta Naranja、Grupo Edisur 等组织相关的环境进行设计、部署、配置与支持。",
      result: "以一个综合技术角色覆盖服务器、虚拟化、网络、故障排查和运行连续性，为生产环境提供支持。",
      tags: ["RHEL", "Windows Server", "Proxmox", "VMware", "XenServer", "网络"]
    },
    {
      kicker: "PYTHON · 自动化 · 数据",
      title: "使用 Python 进行运维自动化",
      summary: "将重复的运维和数据任务转换为脚本和可重复流程，减少依赖手工操作。",
      problem: "重复的系统管理、数据处理和报告任务耗时，而且难以保持一致和可复现。",
      architecture: "Python + Bash → SQL / 数据处理 → 定时或可重复工作流 → 在需要隔离与可移植性时使用 Docker。",
      role: "设计自动化脚本、运维工具和数据流程，并将自动化集成到基础设施与技术支持工作中。",
      result: "提高操作可重复性、减少手工步骤，并为 CI/CD、数据流水线和 MLOps 实践建立基础。",
      tags: ["Python", "Bash", "SQL", "Docker", "自动化"]
    },
    {
      kicker: "AI · RAG · 多语言",
      title: "面向旅游运营的多语言 RAG 助手",
      summary: "基于持续维护的企业知识库回答问题，并支持西班牙语、英语、葡萄牙语和中文的 AI 助手。",
      problem: "运营和旅游信息经常变化，同时客户咨询需要在多种语言中保持一致和准确。",
      architecture: "Gemini 模型 → 企业文档与图片检索 → Docker 化助手服务 → 健康检查端点 → n8n / WhatsApp 备用流程。",
      role: "设计助手架构、知识源策略、多语言行为、备用逻辑，并负责生产环境故障排查。",
      result: "助手服务能够根据业务目录回答问题，多语言指令已验证，并具备可用的健康检查路径。",
      tags: ["RAG", "Gemini", "Docker", "n8n", "多语言 AI", "WhatsApp"]
    },
    {
      kicker: "中文 · 语音 · 离线 AI",
      title: "HSK 字幕与语言学习工作站",
      summary: "基于 Streamlit 的本地应用，用于处理中文媒体、语音转写以及离线中西翻译。",
      problem: "中文学习材料需要转写和翻译，同时希望避免长期依赖外部 API 或云端服务。",
      architecture: "Streamlit → FFmpeg → faster-whisper small → Argos Translate zh↔en↔es → 本地模型与字幕处理流程。",
      role: "集成本地应用技术栈，准备离线翻译包，配置 Whisper 模型，并验证端到端环境。",
      result: "无需在线翻译 API 即可完成本地中文转写和中西互译，适合字幕处理与 HSK 学习流程。",
      tags: ["Streamlit", "Whisper", "Argos Translate", "FFmpeg", "中文", "离线 AI"]
    },
    {
      kicker: "DOCKER · NGINX · CLOUDFLARE",
      title: "无需公开服务器端口的私有服务发布",
      summary: "通过 Cloudflare 对外提供容器化应用，同时让应用服务仅绑定在本地接口。",
      problem: "生产环境助手需要互联网访问，但不希望直接在服务器公网接口暴露应用端口。",
      architecture: "Ubuntu / Proxmox → Docker Compose → 应用绑定 127.0.0.1:8010 → Nginx → Cloudflare Tunnel → DNS / HTTPS。",
      role: "配置容器服务、反向代理、隧道、DNS 和健康检查；排查初始 503 问题并验证服务连通性。",
      result: "助手可以通过公共域名访问，而应用服务仍保持本地绑定；隧道和容器健康状态均得到验证。",
      tags: ["Docker", "Nginx", "Cloudflare Tunnel", "DNS", "Linux", "HTTPS"]
    },
    {
      kicker: "ASTRO · GITHUB ACTIONS · PAGES",
      title: "本 Portfolio 作为公开部署项目",
      summary: "使用 Astro 构建的三语静态专业 Portfolio，并通过 GitHub Pages 自动部署。",
      problem: "传统简历难以充分体现资深经验、跨学科深度以及真实的软件交付实践。",
      architecture: "Astro 静态站点 → EN / ES / 中文 路由 → GitHub 仓库 → GitHub Actions 构建 → Pages artifact → GitHub Pages。",
      role: "定义职业定位与内容策略，实现站点架构，配置自动部署，并持续迭代生产构建。",
      result: "形成公开、响应式且自动部署的 Portfolio；每次 push 到 main 都会重新构建，并直接展示所描述的交付实践。",
      tags: ["Astro", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo"
    }
  ]
} as const;
