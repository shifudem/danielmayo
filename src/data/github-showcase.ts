export type ShowcaseLang = "en" | "es" | "zh";

export type ShowcaseLink = {
  label: string;
  url: string;
  note: string;
};

export type ShowcaseRepo = {
  title: string;
  repo: string;
  summary: string;
  status: string;
  stack: readonly string[];
  codeTitle: string;
  codeLanguage: string;
  code: string;
  repoUrl: string;
  liveUrl?: string;
  links: readonly ShowcaseLink[];
};

export const githubShowcaseUI = {
  en: {
    nav: "GitHub",
    eyebrow: "Featured GitHub",
    title: "Real repositories. Real links. Inspectable code.",
    body: "A compact technical showcase for recruiters and engineering teams: the stack used in each public project, direct links to source files, and small code excerpts taken from the repositories themselves.",
    stack: "Stack",
    code: "Demonstrable code",
    modules: "Inspect modules",
    source: "Open repository",
    live: "Open live project",
    note: "I prefer a small number of meaningful public repositories over a long list of empty or artificial demos. Private client and infrastructure work remains documented in the Case Studies section."
  },
  es: {
    nav: "GitHub",
    eyebrow: "GitHub destacado",
    title: "Repositorios reales. Enlaces reales. Código inspeccionable.",
    body: "Un showcase técnico compacto para recruiters y equipos de ingeniería: stack utilizado por proyecto, enlaces directos a archivos fuente y pequeños fragmentos de código tomados de los propios repositorios.",
    stack: "Stack",
    code: "Código demostrable",
    modules: "Inspeccionar módulos",
    source: "Abrir repositorio",
    live: "Abrir proyecto en vivo",
    note: "Prefiero pocos repositorios públicos con contenido real antes que una lista extensa de demos vacías o artificiales. El trabajo privado de clientes e infraestructura permanece documentado en Case Studies."
  },
  zh: {
    nav: "GitHub",
    eyebrow: "精选 GitHub",
    title: "真实仓库、真实链接、可检查代码。",
    body: "面向招聘人员和工程团队的紧凑技术展示：每个公开项目的技术栈、真实源码链接，以及直接来自仓库的小段代码示例。",
    stack: "技术栈",
    code: "可展示代码",
    modules: "检查模块",
    source: "打开代码仓库",
    live: "打开在线项目",
    note: "相比大量空白或人为构造的 Demo，我更倾向展示少量但具有真实内容的公开仓库。私有客户和基础设施工作继续在 Case Studies 中说明。"
  }
} as const;

const portfolioCode = `- name: Install dependencies
  run: npm ci
- name: Build
  run: npm run build
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./dist
- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v4`;

const romaCode = `app = FastAPI(
    lifespan=lifespan,
    docs_url=None,
    redoc_url=None,
)

app.include_router(crm_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin],
    allow_methods=["GET", "POST"],
)`;

export const githubShowcase: Record<ShowcaseLang, readonly ShowcaseRepo[]> = {
  en: [
    {
      title: "Daniel Mayo — Professional Portfolio",
      repo: "shifudem/danielmayo",
      summary: "Astro-based trilingual portfolio with structured case studies, recruiter conversion, technical evidence and automatic deployment through GitHub Actions.",
      status: "PUBLIC · ACTIVE",
      stack: ["Astro 5", "TypeScript", "CSS", "GitHub Actions", "GitHub Pages", "i18n"],
      codeTitle: ".github/workflows/deploy.yml",
      codeLanguage: "yaml",
      code: portfolioCode,
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        {
          label: "PortfolioPage.astro",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/components/PortfolioPage.astro",
          note: "Shared EN / ES / 中文 rendering and page composition."
        },
        {
          label: "case-studies.ts",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/data/case-studies.ts",
          note: "Structured problem → architecture → responsibility → result content model."
        },
        {
          label: "deploy.yml",
          url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml",
          note: "Automated build, Pages artifact upload and deployment."
        },
        {
          label: "astro.config.mjs",
          url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs",
          note: "Static output and GitHub Pages base-path configuration."
        }
      ]
    },
    {
      title: "Agencia ROMA — Web + AI Assistant Platform",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      summary: "Public tourism platform combining a Jekyll web frontend with a Python/FastAPI assistant backend, Google Drive catalog retrieval, Docker deployment and publication-safety checks.",
      status: "PUBLIC · ACTIVE",
      stack: ["Python", "FastAPI", "Pydantic", "httpx", "Google Drive API", "Docker Compose", "Jekyll 3.10", "Liquid"],
      codeTitle: "server/app.py",
      codeLanguage: "python",
      code: romaCode,
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        {
          label: "server/app.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/app.py",
          note: "FastAPI application, CORS controls, Google Drive catalog retrieval and multilingual assistant logic."
        },
        {
          label: "server/compose.yaml",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/compose.yaml",
          note: "Local-only port binding, read-only container, dropped capabilities, limits and health check."
        },
        {
          label: "server/gallery.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/gallery.py",
          note: "Async Drive-backed media gallery with type, size, range and concurrency controls."
        },
        {
          label: "check_public_files.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/scripts/check_public_files.py",
          note: "Credential-pattern and forbidden-file guard for public content."
        },
        {
          label: "index.html",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html",
          note: "Custom tourism UI, regional gallery, calendar and commercial interaction layer."
        }
      ]
    }
  ],

  es: [
    {
      title: "Daniel Mayo — Portfolio Profesional",
      repo: "shifudem/danielmayo",
      summary: "Portfolio trilingüe basado en Astro con case studies estructurados, conversión para recruiters, evidencia técnica y despliegue automático mediante GitHub Actions.",
      status: "PÚBLICO · ACTIVO",
      stack: ["Astro 5", "TypeScript", "CSS", "GitHub Actions", "GitHub Pages", "i18n"],
      codeTitle: ".github/workflows/deploy.yml",
      codeLanguage: "yaml",
      code: portfolioCode,
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        {
          label: "PortfolioPage.astro",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/components/PortfolioPage.astro",
          note: "Render compartido EN / ES / 中文 y composición principal."
        },
        {
          label: "case-studies.ts",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/data/case-studies.ts",
          note: "Modelo estructurado problema → arquitectura → responsabilidad → resultado."
        },
        {
          label: "deploy.yml",
          url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml",
          note: "Build automatizado, publicación del artefacto Pages y deploy."
        },
        {
          label: "astro.config.mjs",
          url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs",
          note: "Configuración de salida estática y base path de GitHub Pages."
        }
      ]
    },
    {
      title: "Agencia ROMA — Plataforma Web + Asistente IA",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      summary: "Plataforma turística pública que combina frontend Jekyll con backend Python/FastAPI, lectura de catálogo desde Google Drive, despliegue Docker y controles de seguridad para publicación.",
      status: "PÚBLICO · ACTIVO",
      stack: ["Python", "FastAPI", "Pydantic", "httpx", "Google Drive API", "Docker Compose", "Jekyll 3.10", "Liquid"],
      codeTitle: "server/app.py",
      codeLanguage: "python",
      code: romaCode,
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        {
          label: "server/app.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/app.py",
          note: "Aplicación FastAPI, controles CORS, lectura de catálogo en Drive y lógica multilingüe."
        },
        {
          label: "server/compose.yaml",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/compose.yaml",
          note: "Puerto ligado localmente, contenedor read-only, capabilities eliminadas, límites y health check."
        },
        {
          label: "server/gallery.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/gallery.py",
          note: "Galería asíncrona sobre Drive con controles de tipo, tamaño, rangos y concurrencia."
        },
        {
          label: "check_public_files.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/scripts/check_public_files.py",
          note: "Guard de patrones de credenciales y archivos prohibidos antes de publicar."
        },
        {
          label: "index.html",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html",
          note: "UI turística personalizada, galería regional, calendario y capa comercial."
        }
      ]
    }
  ],

  zh: [
    {
      title: "Daniel Mayo — 专业 Portfolio",
      repo: "shifudem/danielmayo",
      summary: "基于 Astro 的三语 Portfolio，包含结构化 Case Studies、招聘转化模块、技术证据以及 GitHub Actions 自动部署。",
      status: "公开 · 活跃",
      stack: ["Astro 5", "TypeScript", "CSS", "GitHub Actions", "GitHub Pages", "i18n"],
      codeTitle: ".github/workflows/deploy.yml",
      codeLanguage: "yaml",
      code: portfolioCode,
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        {
          label: "PortfolioPage.astro",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/components/PortfolioPage.astro",
          note: "共享 EN / ES / 中文 渲染与页面组合。"
        },
        {
          label: "case-studies.ts",
          url: "https://github.com/shifudem/danielmayo/blob/main/src/data/case-studies.ts",
          note: "结构化的问题 → 架构 → 职责 → 结果内容模型。"
        },
        {
          label: "deploy.yml",
          url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml",
          note: "自动构建、Pages Artifact 上传与部署。"
        },
        {
          label: "astro.config.mjs",
          url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs",
          note: "静态输出和 GitHub Pages 基础路径配置。"
        }
      ]
    },
    {
      title: "Agencia ROMA — Web + AI 助手平台",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      summary: "公开旅游平台，将 Jekyll 前端、Python/FastAPI 后端、Google Drive 目录读取、Docker 部署以及发布安全检查结合在一起。",
      status: "公开 · 活跃",
      stack: ["Python", "FastAPI", "Pydantic", "httpx", "Google Drive API", "Docker Compose", "Jekyll 3.10", "Liquid"],
      codeTitle: "server/app.py",
      codeLanguage: "python",
      code: romaCode,
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        {
          label: "server/app.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/app.py",
          note: "FastAPI 应用、CORS 控制、Google Drive 目录读取和多语言助手逻辑。"
        },
        {
          label: "server/compose.yaml",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/compose.yaml",
          note: "本地端口绑定、只读容器、删除 capabilities、资源限制和健康检查。"
        },
        {
          label: "server/gallery.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/server/gallery.py",
          note: "基于 Drive 的异步媒体画廊，包含类型、大小、Range 和并发控制。"
        },
        {
          label: "check_public_files.py",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/scripts/check_public_files.py",
          note: "在公开发布前检查凭据模式和禁止文件。"
        },
        {
          label: "index.html",
          url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html",
          note: "自定义旅游 UI、区域画廊、日历和商业交互层。"
        }
      ]
    }
  ]
} as const;
