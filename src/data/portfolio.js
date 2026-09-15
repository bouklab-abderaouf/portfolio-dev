export const profile = {
  name: "Abderaouf Bouklab",
  email: "mailto:bouklab.abdelraouf@gmail.com",
  github: "https://github.com/bouklab-abderaouf",
  linkedin: "https://www.linkedin.com/in/abderaouf-bouklab/",
};

export const projects = {
  jewelry: {
    id: "jewelry",
    number: "01",
    title: "A little imagination. A tangible result.",
    shortTitle: "AI jewelry generation",
    client: "Cleed.IA",
    category: "GENERATIVE AI / CLIENT WORK",
    description:
      "A creation tool that turns material, color, and style preferences into AI-generated jewelry concepts.",
    role: "Model integration, asynchronous calls & interface-to-model data flow.",
    stack: ["Stable Diffusion", "Bubble", "API integration"],
    steps: [
      { title: "Preferences", text: "Material, color, style" },
      { title: "Generation request", text: "Interface → model API" },
      { title: "Stable Diffusion", text: "Asynchronous generation" },
      { title: "Design concepts", text: "Results → interface" },
    ],
    study: [
      [
        "The problem",
        "Let users explore jewelry ideas by choosing preferences, then see generated visual concepts in the same experience.",
      ],
      [
        "My contribution",
        "At Cleed.IA, I integrated the Stable Diffusion API and handled asynchronous calls and data exchange between the interface and the model.",
      ],
      [
        "How it works",
        "The interface collects material, color, and style choices. Those preferences become a generation request; the returned images are presented to the user.",
      ],
      [
        "A technical decision",
        "Treat generation as an asynchronous operation. The interface and model work on different timescales, so their data exchange needs explicit handling.",
      ],
      [
        "Available evidence",
        "The original 22-second product recording is preserved in this portfolio. It shows the preference inputs and the resulting jewelry concepts.",
      ],
      [
        "Limits & engineering takeaway",
        "These are visual concepts, not manufacturing-ready designs. No quality benchmark or generation-time measurement is published here. The engineering focus is connecting a useful interaction to an asynchronous model.",
      ],
    ],
  },
  search: {
    id: "search",
    number: "02",
    title: "Less searching. More understanding.",
    shortTitle: "Internal AI search",
    client: "Poppinlive",
    category: "APPLIED AI / PRODUCTION WORK",
    description:
      "Connecting business data to natural-language questions in the team’s back office.",
    role: "Internal search integration with Azure AI Search and Azure OpenAI.",
    stack: ["Azure AI Search", "Azure OpenAI", "Business data"],
    steps: [
      { title: "Operational data", text: "Business information" },
      { title: "Azure AI Search", text: "Search layer" },
      { title: "Azure OpenAI", text: "Natural-language interaction" },
      { title: "Back office", text: "The team’s workspace" },
    ],
    study: [
      [
        "The problem",
        "Make internal business information accessible through everyday questions in the Poppinlive back office.",
      ],
      [
        "My contribution",
        "I worked on internal search that sends business data to Azure AI Search and lets the team ask questions in natural language through Azure OpenAI.",
      ],
      [
        "How it works",
        "Business data feeds the search service. Azure OpenAI provides the natural-language interaction in the internal experience. The portfolio diagram is a simplified architecture illustration.",
      ],
      [
        "A technical decision",
        "Connect the language-model experience to a search layer over business data, giving the interaction a source of relevant operational information.",
      ],
      [
        "Available evidence",
        "This production contribution is described in my résumé. The application-wide usage and loading-time figures shown elsewhere belong to Poppinlive’s product, not to the search feature.",
      ],
      [
        "Limits & engineering takeaway",
        "Internal screens, retrieval settings, and evaluation results are not published here. This case study describes the integration without claiming measured answer accuracy.",
      ],
    ],
  },
  automation: {
    id: "automation",
    number: "03",
    title: "A workflow that carries its own weight.",
    shortTitle: "Production AI pipelines",
    client: "Production systems",
    category: "AUTOMATION / SYSTEMS ENGINEERING",
    description:
      "Three pipelines connecting research, generation, and business tools—with operational details built in.",
    role: "Workflow orchestration, API integration, and operational controls.",
    stack: ["n8n", "Gemini", "API orchestration"],
    steps: [
      { title: "Research", text: "Topic intake + Perplexity" },
      { title: "Generate", text: "Article + SEO metadata" },
      { title: "Create a draft", text: "WordPress + image branch" },
      { title: "Review", text: "Human editorial gate" },
    ],
    dossier: "/production-ai-architecture.pdf",
    study: [
      [
        "The problem",
        "Repeated content and outreach tasks require coordinated work across research, generation, delivery, and business records.",
      ],
      [
        "My contribution",
        "The architecture dossier documents three n8n pipelines: SEO content drafts, Instagram lead acquisition with CRM write-back, and personalized avatar video generation.",
      ],
      [
        "How it works",
        "The SEO pipeline takes a topic from Google Sheets, gathers research through Perplexity, generates content and metadata, and creates a WordPress draft. A parallel image branch supplies the featured image.",
      ],
      [
        "A technical decision",
        "Stop the publishing path at a draft for editorial review. Across the systems, use structured outputs, retries, controlled batches, and execution-level cost tracking. Prompt constraints guide generation; they do not guarantee factual accuracy.",
      ],
      [
        "Reported results",
        "The dossier reports a 4-minute average topic-to-draft time and $0.14 generation cost per article for the SEO pipeline. These are project-reported figures; generation cost is not a measure of total operating cost.",
      ],
      [
        "Limits & engineering takeaway",
        "This portfolio presents documented architecture rather than a live execution. Independent benchmarks and raw run logs are not published here. API failures, cost boundaries, and write-back into business systems are central parts of the design.",
      ],
    ],
  },
};

export const experiments = [
  {
    id: "workout",
    name: "AI Workout App",
    status: "In development",
    description:
      "A mobile fitness app using Gemini to suggest workouts adapted to the user.",
    stack: ["React Native", "Expo", "Zustand", "Gemini"],
    note: "Exploring personalized experiences on mobile. Demo and evaluation results to follow.",
  },
];
export const experience = [
  {
    company: "Poppinlive",
    role: "Full-stack & mobile engineer",
    date: "2023—2026",
  },
  {
    company: "Cleed.IA",
    role: "Freelance full-stack developer",
    date: "2023—2024",
  },
  {
    company: "Netdevices",
    role: "No-code developer · Internship",
    date: "2023",
  },
];
