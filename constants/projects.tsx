import { stack } from "./stack";

export const projects = [
  {
    title: "Cursor IDE",
    description:
      "Leading development of Cursor's AI-powered code editor. Building features for code generation, refactoring, and real-time collaboration using LLMs.",
    image: "/images/projects/cursor.png",
    stack: [stack.typescript, stack.react, stack.electron, stack.python],
    link: "https://cursor.sh",
    featured: true,
  },
  {
    title: "Einstein Analytics",
    description:
      "Led development of key features for Salesforce's Einstein Analytics platform, focusing on data visualization and analytics tools.",
    image: "/images/projects/einstein.png",
    stack: [stack.typescript, stack.react, stack.d3, stack.graphql],
    link: "https://www.salesforce.com/products/einstein-analytics/overview/",
    featured: true,
  },
  {
    title: "Supply Chain Management Tools",
    description:
      "Built internal tools at Apple for supply chain management and optimization, improving operational efficiency.",
    image: "/images/projects/supply-chain.png",
    stack: [stack.react, stack.nodejs, stack.postgresql, stack.aws],
    link: null,
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern portfolio site built with Next.js 13, React, and TailwindCSS. Features dark mode, responsive design, and dynamic content management.",
    image: "/images/projects/portfolio.png",
    stack: [stack.nextjs, stack.react, stack.typescript, stack.tailwindcss],
    link: "https://brandonjohnson.dev",
    featured: false,
  },
];
