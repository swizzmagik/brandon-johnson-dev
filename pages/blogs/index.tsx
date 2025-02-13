import AllBlogs from "@/components/AllBlogs";
import { Container } from "@/components/Container";
import { getAllBlogs } from "@/lib/getAllBlogs";

export default function BlogsPage({ blogs }: any) {
  return (
    <Container title={`Blogs | Brandon Johnson`}>
      <div className="max-w-5xl mx-auto px-8 mt-10 md:mt-20 relative ">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Insights on
            <span className="text-cyan-500">
              {" "}
              AI, Development, and Architecture
            </span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I write about AI/ML technologies, development tools, software
            architecture, and engineering best practices. Here you'll find
            in-depth technical articles, tutorials, and insights from my
            experience building AI-powered developer tools.
          </p>
        </div>
        <div className="mt-20">
          <AllBlogs blogs={blogs} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: (await getAllBlogs()).map(({ component, ...meta }) => meta),
    },
  };
}
