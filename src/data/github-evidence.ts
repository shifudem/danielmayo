export type EvidenceLang = "en" | "es" | "zh";

export type EvidenceLink = {
  label: string;
  url: string;
};

export type RepoEvidence = {
  eyebrow: string;
  title: string;
  repo: string;
  description: string;
  status: string;
  architecture: readonly string[];
  proofTitle: string;
  proof: readonly string[];
  tags: readonly string[];
  repoUrl: string;
  liveUrl?: string;
  links: readonly EvidenceLink[];
};

export const githubEvidenceUI = {
  en: {
    nav: "Evidence",
    eyebrow: "Technical evidence",
    title: "Public repositories that recruiters can inspect.",
    body: "Architecture claims are strongest when they can be traced to source code, configuration and deployment automation. These repositories provide direct, inspectable evidence of how I structure and ship systems.",
    source: "Source repository",
    live: "Live deployment",
    inspect: "Inspect technical evidence",
    architecture: "Architecture",
    note: "Only public, verifiable repositories are linked here. Private systems remain described as architecture case studies without exposing confidential source code."
  },
  es: {
    nav: "Evidencia",
    eyebrow: "Evidencia técnica",
    title: "Repositorios públicos que un recruiter puede inspeccionar.",
    body: "Las afirmaciones de arquitectura son más sólidas cuando pueden rastrearse hasta código, configuración y automatización de despliegue. Estos repositorios ofrecen evidencia directa e inspeccionable de cómo estructuro y publico sistemas.",
    source: "Repositorio fuente",
    live: "Deploy en vivo",
    inspect: "Inspeccionar evidencia técnica",
    architecture: "Arquitectura",
    note: "Aquí se enlazan únicamente repositorios públicos y verificables. Los sistemas privados continúan presentándose como casos de arquitectura sin exponer código confidencial."
  },
  zh: {
    nav: "技术证据",
    eyebrow: "可验证技术证据",
    title: "招聘人员可以直接检查的公开代码仓库。",
    body: "当架构说明能够追溯到源码、配置和自动部署流程时，更具有可信度。以下仓库提供可以直接检查的技术证据，展示我如何组织、构建和发布系统。",
    source: "源码仓库",
    live: "在线部署",
    inspect: "查看技术证据",
    architecture: "架构",
    note: "这里只链接公开且可验证的代码仓库。私有系统继续以架构案例形式展示，不公开机密源码。"
  }
} as const;

export const githubEvidence: Record<EvidenceLang, readonly RepoEvidence[]> = {
  en: [
    {
      eyebrow: "ASTRO · CI/CD · GITHUB PAGES",
      title: "Senior professional portfolio platform",
      repo: "shifudem/danielmayo",
      description: "The portfolio itself is an inspectable delivery project: Astro static generation, EN / ES / 中文 routes, recruiter conversion, case studies and automated GitHub Pages deployment.",
      status: "PUBLIC · ACTIVE",
      architecture: ["Astro 5", "EN / ES / 中文", "npm build", "GitHub Actions", "Pages artifact", "GitHub Pages"],
      proofTitle: "What can be verified",
      proof: [
        "Astro is declared as the application dependency in package.json.",
        "astro.config.mjs configures a static build for the /danielmayo/ GitHub Pages base path.",
        "The deployment workflow runs npm ci, builds dist/, uploads the Pages artifact and deploys it automatically."
      ],
      tags: ["Astro", "TypeScript", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        { label: "package.json", url: "https://github.com/shifudem/danielmayo/blob/main/package.json" },
        { label: "astro.config.mjs", url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs" },
        { label: "deploy.yml", url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml" }
      ]
    },
    {
      eyebrow: "JEKYLL · TOURISM WEB · STATIC DELIVERY",
      title: "Agencia ROMA tourism web platform",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      description: "A public tourism platform built on Jekyll with custom pages for experiences, services, calendar interaction, regional media and commercial calls to action.",
      status: "PUBLIC · ACTIVE",
      architecture: ["Jekyll 3.10", "Liquid / HTML", "Calendar + media UI", "Static generation", "Git repository", "Public web"],
      proofTitle: "What can be verified",
      proof: [
        "Gemfile pins Jekyll 3.10 and includes feed, pagination and sitemap plugins.",
        "_config.yml defines the Spanish-Argentina site configuration, navigation, collections and social metadata.",
        "index.html contains the custom calendar, regional hero/gallery, service sections and commercial interaction layer."
      ],
      tags: ["Jekyll", "Liquid", "HTML", "CSS", "JavaScript", "GitHub"],
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        { label: "Gemfile", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/Gemfile" },
        { label: "_config.yml", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/_config.yml" },
        { label: "index.html", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html" }
      ]
    }
  ],

  es: [
    {
      eyebrow: "ASTRO · CI/CD · GITHUB PAGES",
      title: "Plataforma de portfolio profesional senior",
      repo: "shifudem/danielmayo",
      description: "El propio portfolio funciona como proyecto verificable de delivery: generación estática con Astro, rutas EN / ES / 中文, conversión para recruiters, case studies y despliegue automatizado en GitHub Pages.",
      status: "PÚBLICO · ACTIVO",
      architecture: ["Astro 5", "EN / ES / 中文", "npm build", "GitHub Actions", "Artefacto Pages", "GitHub Pages"],
      proofTitle: "Qué se puede verificar",
      proof: [
        "Astro está declarado como dependencia de la aplicación en package.json.",
        "astro.config.mjs configura build estático y el base path /danielmayo/ para GitHub Pages.",
        "El workflow de deploy ejecuta npm ci, genera dist/, sube el artefacto Pages y lo despliega automáticamente."
      ],
      tags: ["Astro", "TypeScript", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        { label: "package.json", url: "https://github.com/shifudem/danielmayo/blob/main/package.json" },
        { label: "astro.config.mjs", url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs" },
        { label: "deploy.yml", url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml" }
      ]
    },
    {
      eyebrow: "JEKYLL · WEB TURÍSTICA · STATIC DELIVERY",
      title: "Plataforma web de Agencia ROMA",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      description: "Plataforma turística pública construida sobre Jekyll, con páginas personalizadas para experiencias, servicios, calendario interactivo, contenido regional y llamados a la acción comerciales.",
      status: "PÚBLICO · ACTIVO",
      architecture: ["Jekyll 3.10", "Liquid / HTML", "Calendario + media UI", "Generación estática", "Repositorio Git", "Web pública"],
      proofTitle: "Qué se puede verificar",
      proof: [
        "Gemfile fija Jekyll 3.10 e incluye plugins de feed, paginación y sitemap.",
        "_config.yml define configuración es-AR, navegación, colecciones y metadatos sociales.",
        "index.html contiene calendario personalizado, hero/galería regional, servicios y capa de interacción comercial."
      ],
      tags: ["Jekyll", "Liquid", "HTML", "CSS", "JavaScript", "GitHub"],
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        { label: "Gemfile", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/Gemfile" },
        { label: "_config.yml", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/_config.yml" },
        { label: "index.html", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html" }
      ]
    }
  ],

  zh: [
    {
      eyebrow: "ASTRO · CI/CD · GITHUB PAGES",
      title: "资深专业 Portfolio 平台",
      repo: "shifudem/danielmayo",
      description: "这个 Portfolio 本身就是可验证的交付项目：Astro 静态生成、EN / ES / 中文 路由、招聘转化模块、案例研究以及 GitHub Pages 自动部署。",
      status: "公开 · 活跃",
      architecture: ["Astro 5", "EN / ES / 中文", "npm build", "GitHub Actions", "Pages Artifact", "GitHub Pages"],
      proofTitle: "可验证内容",
      proof: [
        "package.json 中明确声明 Astro 为项目依赖。",
        "astro.config.mjs 配置静态构建以及 GitHub Pages 的 /danielmayo/ 基础路径。",
        "部署 workflow 执行 npm ci、构建 dist/、上传 Pages artifact 并自动完成部署。"
      ],
      tags: ["Astro", "TypeScript", "GitHub Actions", "GitHub Pages", "CI/CD", "i18n"],
      repoUrl: "https://github.com/shifudem/danielmayo",
      liveUrl: "https://shifudem.github.io/danielmayo/",
      links: [
        { label: "package.json", url: "https://github.com/shifudem/danielmayo/blob/main/package.json" },
        { label: "astro.config.mjs", url: "https://github.com/shifudem/danielmayo/blob/main/astro.config.mjs" },
        { label: "deploy.yml", url: "https://github.com/shifudem/danielmayo/blob/main/.github/workflows/deploy.yml" }
      ]
    },
    {
      eyebrow: "JEKYLL · 旅游网站 · STATIC DELIVERY",
      title: "Agencia ROMA 旅游 Web 平台",
      repo: "AR-Wonderlust/ar-wonderlust.github.io",
      description: "基于 Jekyll 构建的公开旅游平台，包含体验项目、服务、交互式日历、区域媒体展示以及商业转化入口。",
      status: "公开 · 活跃",
      architecture: ["Jekyll 3.10", "Liquid / HTML", "日历 + 媒体 UI", "静态生成", "Git 仓库", "公开网站"],
      proofTitle: "可验证内容",
      proof: [
        "Gemfile 固定使用 Jekyll 3.10，并包含 feed、pagination 和 sitemap 插件。",
        "_config.yml 定义 es-AR 站点配置、导航、collections 与社交元数据。",
        "index.html 包含自定义日历、区域 Hero/画廊、服务模块与商业交互层。"
      ],
      tags: ["Jekyll", "Liquid", "HTML", "CSS", "JavaScript", "GitHub"],
      repoUrl: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io",
      liveUrl: "https://ar-wonderlust.github.io/",
      links: [
        { label: "Gemfile", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/Gemfile" },
        { label: "_config.yml", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/_config.yml" },
        { label: "index.html", url: "https://github.com/AR-Wonderlust/ar-wonderlust.github.io/blob/main/index.html" }
      ]
    }
  ]
} as const;
