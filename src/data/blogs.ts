export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable ML Pipelines with Ray and Kubernetes",
    excerpt:
      "A deep dive into architecting production-grade machine learning pipelines that handle millions of predictions per second using distributed computing.",
    category: "AI Engineering",
    date: "2026-03-15",
    readTime: "12 min read",
    slug: "scalable-ml-pipelines",
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Prompt Engineering: Beyond Basic Templates",
    excerpt:
      "Exploring advanced prompt engineering techniques including chain-of-thought, few-shot learning, and meta-prompting for complex reasoning tasks.",
    category: "AI",
    date: "2026-02-28",
    readTime: "8 min read",
    slug: "prompt-engineering-advanced",
    featured: true,
  },
  {
    id: "3",
    title: "Next.js 16 Server Components: A Performance Deep Dive",
    excerpt:
      "Benchmarking and optimizing React Server Components in Next.js 16 — from streaming SSR to incremental static regeneration patterns.",
    category: "Web Dev",
    date: "2026-02-10",
    readTime: "10 min read",
    slug: "nextjs-16-server-components",
    featured: true,
  },
  {
    id: "4",
    title: "Designing for the Terminal: CLI UX Principles",
    excerpt:
      "How to create command-line tools that are intuitive, beautiful, and productive. Lessons from building developer tools used by thousands.",
    category: "Design",
    date: "2026-01-20",
    readTime: "6 min read",
    slug: "terminal-ux-design",
    featured: false,
  },
  {
    id: "5",
    title: "Fine-Tuning LLMs on Custom Datasets: A Practical Guide",
    excerpt:
      "Step-by-step guide to fine-tuning large language models on domain-specific data using LoRA, QLoRA, and full fine-tuning approaches.",
    category: "AI Engineering",
    date: "2026-01-05",
    readTime: "15 min read",
    slug: "fine-tuning-llms",
    featured: false,
  },
  {
    id: "6",
    title: "WebGPU: The Future of Graphics on the Web",
    excerpt:
      "Exploring the WebGPU API and how it unlocks GPU-accelerated computing directly in the browser for graphics, ML inference, and simulations.",
    category: "Graphics",
    date: "2025-12-18",
    readTime: "9 min read",
    slug: "webgpu-future",
    featured: false,
  },
];
