import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

import Navbar from "./Navbar/Navbar";

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props;
  const router = useRouter();

  const title = "Devpro | Portfolio Template";
  const meta = {
    title,
    description: `A portfolio template for developers and designers.`,
    type: "website",
    image: "https://devpro.aceternity.com/banner.png",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="yourwebsite" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourwebsite" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <main className={clsx("min-h-screen antialiased bg-zinc-900", className)}>
        <Navbar />
        {children}
        <Footer />
        <Contact />
      </main>
    </>
  );
};
