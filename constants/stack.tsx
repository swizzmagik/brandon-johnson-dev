import {
  TbAtom,
  TbBrandAws,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbChartBar,
  TbDatabase,
} from "react-icons/tb";

export const stack = {
  nextjs: {
    name: "Next.js",
    id: "nextjs",
    icon: <TbBrandNextjs className="h-5 w-5 stroke-1" />,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    id: "tailwindcss",
    icon: <TbBrandTailwind className="h-5 w-5 stroke-1" />,
  },
  typescript: {
    name: "Typescript",
    id: "typescript",
    icon: <TbBrandTypescript className="h-5 w-5 stroke-1" />,
  },
  react: {
    name: "React",
    id: "react",
    icon: <TbBrandReact className="h-5 w-5 stroke-1" />,
  },
  python: {
    name: "Python",
    id: "python",
    icon: <TbBrandPython className="h-5 w-5 stroke-1" />,
  },
  electron: {
    name: "Electron",
    id: "electron",
    icon: <TbAtom className="h-5 w-5 stroke-1" />,
  },
  nodejs: {
    name: "Node.js",
    id: "nodejs",
    icon: <TbBrandNodejs className="h-5 w-5 stroke-1" />,
  },
  aws: {
    name: "AWS",
    id: "aws",
    icon: <TbBrandAws className="h-5 w-5 stroke-1" />,
  },
  graphql: {
    name: "GraphQL",
    id: "graphql",
    icon: <TbBrandGraphql className="h-5 w-5 stroke-1" />,
  },
  postgresql: {
    name: "PostgreSQL",
    id: "postgresql",
    icon: <TbDatabase className="h-5 w-5 stroke-1" />,
  },
  d3: {
    name: "D3.js",
    id: "d3",
    icon: <TbChartBar className="h-5 w-5 stroke-1" />,
  },
};
