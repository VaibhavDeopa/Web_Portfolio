export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "ai" | "web" | "tools" | "graphics";
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    description:
      "AI-powered image generation platform with real-time style transfer and inpainting capabilities.",
    longDescription:
      "A full-stack application leveraging Stable Diffusion and custom fine-tuned models for creative image generation. Features real-time style transfer, intelligent inpainting, and a collaborative workspace.",
    category: "ai",
    tags: ["Python", "PyTorch", "FastAPI", "React", "WebSocket"],
    image: "/projects/neural-canvas.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/VaibhavDeopa",
    featured: true,
  },
  {
    id: "sentinel-ai",
    title: "Sentinel AI",
    description:
      "Intelligent security monitoring system using computer vision for real-time threat detection.",
    longDescription:
      "An end-to-end security solution using YOLOv8 and custom-trained models for anomaly detection in video feeds. Processes multiple RTSP streams with sub-second latency.",
    category: "ai",
    tags: ["Python", "OpenCV", "YOLOv8", "TensorRT", "Redis"],
    image: "/projects/sentinel-ai.jpg",
    githubUrl: "https://github.com/VaibhavDeopa",
    featured: true,
  },
  {
    id: "quantum-dash",
    title: "Quantum Dashboard",
    description:
      "Real-time analytics dashboard with predictive modeling and interactive data visualizations.",
    longDescription:
      "A high-performance analytics platform built with Next.js and D3.js, featuring real-time data streaming, predictive ML models, and interactive 3D visualizations.",
    category: "web",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "GraphQL"],
    image: "/projects/quantum-dash.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/VaibhavDeopa",
    featured: true,
  },
  {
    id: "code-forge",
    title: "CodeForge CLI",
    description:
      "AI-assisted code generation CLI tool with multi-language support and intelligent scaffolding.",
    longDescription:
      "A developer productivity tool that generates boilerplate code, tests, and documentation using large language models. Supports 15+ programming languages with context-aware suggestions.",
    category: "tools",
    tags: ["TypeScript", "Node.js", "OpenAI", "Commander.js"],
    image: "/projects/code-forge.jpg",
    githubUrl: "https://github.com/VaibhavDeopa",
    featured: false,
  },
  {
    id: "echo-stream",
    title: "EchoStream",
    description:
      "Low-latency audio processing pipeline with real-time speech-to-text and sentiment analysis.",
    longDescription:
      "A streaming audio pipeline that processes live audio feeds, transcribes speech in real-time using Whisper, and performs sentiment analysis with custom NLP models.",
    category: "ai",
    tags: ["Python", "Whisper", "FastAPI", "WebRTC", "HuggingFace"],
    image: "/projects/echo-stream.jpg",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "pixel-forge",
    title: "PixelForge",
    description:
      "GPU-accelerated creative coding framework for generative art and interactive visual experiences.",
    longDescription:
      "A WebGL-powered creative coding framework that enables artists and developers to create stunning generative art, particle systems, and interactive shader-based visuals.",
    category: "graphics",
    tags: ["TypeScript", "WebGL", "GLSL", "Canvas API"],
    image: "/projects/pixel-forge.jpg",
    githubUrl: "https://github.com/VaibhavDeopa",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web Dev" },
  { id: "tools", label: "Dev Tools" },
  { id: "graphics", label: "Graphics" },
] as const;
