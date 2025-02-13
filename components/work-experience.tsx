import { IconArrowRight } from "@tabler/icons-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export const WorkExperience = () => {
  const experiences = [
    {
      period: "2007-2013",
      role: "SOFTWARE ENG LEAD",
      company: "Sierra Lobo",
      description:
        "Lead team of developers and network engineers through years of complex aerospace engineering projects",
      link: "https://sierralobo.com/",
    },
    {
      period: "2014-2017",
      role: "FULL STACK DEV",
      company: "SwizzMagik",
      description:
        "Founded a software engineering organization with a focus on website development and integration solutions",
      link: "https://swizzmagik.com/",
    },
    {
      period: "2016-2021",
      role: "SOLUTIONS ARCHITECT",
      company: "Excelsior Creative",
      description:
        "Co-founded a creative web development agency to build custom web solutions for small to mid-size businesses",
      link: "https://excelsiorcreative.com/",
    },
    {
      period: "2018-2021",
      role: "SOFTWARE ENG LEAD",
      company: "OCERS",
      description:
        "Managed team of developers with a focus on my business intelligence, analytics, and reporting solutions",
      link: "https://ocers.org/",
    },
    {
      period: "2022-2025",
      role: "SR SOFTWARE ENG",
      company: "Synctera",
      description:
        "Built and maintained fintech infrastructure enabling companies to quickly launch banking products and services",
      link: "https://synctera.com/",
    },
  ];

  return (
    <div className="relative z-10 py-20">
      <div>
        <Heading as="h2">Work Experience</Heading>
        <Subheading className="text-center">
          Over 15 years of experience in software development and technical
          leadership
        </Subheading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            {...experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({
  period,
  role,
  company,
  description,
  index,
  link,
}: {
  period: string;
  role: string;
  company: string;
  description: string;
  index: number;
  link: string;
}) => {
  return (
    <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="text-sm text-neutral-400 mb-2">{period}</div>
      <h3 className="text-lg font-bold mb-1">{role}</h3>
      <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {company}
      </div>
      <p className="text-sm text-neutral-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm text-foreground hover:text-foreground/80 transition-colors"
      >
        Learn More <IconArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};
