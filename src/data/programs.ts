import dataEngImg from "@/assets/program-data-engineering.jpg";
import analyticsImg from "@/assets/program-analytics.jpg";
import mlImg from "@/assets/program-ml.jpg";
import mlopsImg from "@/assets/program-mlops.jpg";
import genaiImg from "@/assets/program-genai.jpg";
import agenticImg from "@/assets/program-agentic.jpg";

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  topics: string[];
  idealFor: string[];
  duration: string;
  level: string;
  image: string;
  salary: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "data-engineering",
    title: "Data Engineering",
    tagline: "Design pipelines that power AI at scale.",
    summary:
      "Master batch & streaming data systems, cloud warehouses, and production-grade pipelines used by leading enterprises.",
    topics: ["Batch Processing", "Streaming Pipelines", "Python", "SQL", "Spark", "AWS", "Azure", "GCP", "Snowflake", "BigQuery", "Enterprise Capstone"],
    idealFor: ["Data Engineers", "Backend Developers"],
    duration: "24 weeks",
    level: "Intermediate → Advanced",
    image: dataEngImg,
    salary: "₹14–28 LPA",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    tagline: "Turn raw data into board-ready decisions.",
    summary:
      "Learn analytics, visualization, and storytelling frameworks used across finance, product, and operations teams.",
    topics: ["Excel", "SQL", "Power BI", "Tableau", "KPI Dashboards", "Business Analytics", "Storytelling", "Finance Analytics"],
    idealFor: ["Business Analysts", "MIS Teams"],
    duration: "16 weeks",
    level: "Beginner → Intermediate",
    image: analyticsImg,
    salary: "₹8–18 LPA",
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Ship production ML that businesses trust.",
    summary:
      "Go beyond notebooks — from Python foundations to industry ML systems built on TensorFlow and modern MLOps.",
    topics: ["Python", "Pandas", "NumPy", "Scikit Learn", "TensorFlow", "Machine Learning", "Deep Learning", "Industry Projects"],
    idealFor: ["AI Engineers", "Developers"],
    duration: "28 weeks",
    level: "Intermediate → Advanced",
    image: mlImg,
    salary: "₹16–32 LPA",
  },
  {
    slug: "mlops",
    title: "AI & MLOps",
    tagline: "Operate ML systems the enterprise way.",
    summary:
      "Docker, Kubernetes, MLflow, CI/CD, monitoring — everything required to run reliable, observable AI in production.",
    topics: ["Docker", "Kubernetes", "MLflow", "CI/CD", "Model Deployment", "Monitoring", "Retraining", "Cloud AI"],
    idealFor: ["ML Engineers", "DevOps Engineers"],
    duration: "20 weeks",
    level: "Advanced",
    image: mlopsImg,
    salary: "₹18–36 LPA",
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    tagline: "Build with LLMs, RAG and modern AI stacks.",
    summary:
      "Design production-grade GenAI systems — from prompt engineering to retrieval and enterprise assistants.",
    topics: ["LLMs", "Transformers", "Prompt Engineering", "RAG", "OpenAI", "Open Source Models", "AI Chatbots", "AI Assistants"],
    idealFor: ["AI Teams", "Product Managers"],
    duration: "18 weeks",
    level: "Intermediate",
    image: genaiImg,
    salary: "₹18–40 LPA",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    tagline: "Autonomous systems for the modern enterprise.",
    summary:
      "Architect AI agents with planning, memory and tool-use — the foundation of the next wave of enterprise automation.",
    topics: ["AI Agents", "Memory", "Planning", "LangChain", "Multi-Agent Systems", "Enterprise Automation"],
    idealFor: ["R&D Teams", "Advanced AI Engineers"],
    duration: "14 weeks",
    level: "Advanced",
    image: agenticImg,
    salary: "₹22–48 LPA",
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((p) => p.slug === slug);
