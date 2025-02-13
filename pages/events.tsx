import { Container } from "@/components/Container";
import Talks from "@/components/Talks";
import { talks } from "@/constants/events";

export default function EventsPage() {
  return (
    <Container title={`Events | Brandon Johnson`}>
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          Speaking about
          <span className="text-cyan-500"> AI and Developer Tools</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          I share insights about AI-powered development, software architecture,
          and building better developer tools. From conference talks to
          technical workshops, I enjoy discussing the future of software
          development and how AI is transforming the way we code.
        </p>
        <div className="mt-20 max-w-3xl mx-auto">
          {talks.map((talk, idx) => (
            <Talks
              key={`talk-${idx}`}
              title={talk.title}
              description={talk.description}
              company={talk.company}
              image={talk.image}
              url={talk.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
