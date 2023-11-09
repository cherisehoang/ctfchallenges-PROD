import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cool CTF Challenges</title>
        <meta name="description" content="A website of CTF challenges made by Cherise." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#030819] to-[#1722b9]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-12 ">
          <h1 className="font-mono text-5xl text-center font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome to the
            <div className="text-center">
              <span className="text-[hsl(240,100%,82%)]">Cool CTF Challenges</span>
            </div>
          </h1> 
          <div className="font-mono grid md:grid-cols-3 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/[slug]" as="/ascii"
            >
              <h3 className="text-xl font-bold">Baby&apos;s First <span className="text-lg italic">Challenge</span> →</h3>
              <div className="text-m">
                New to solving CTF challenges? Dip your toes in an easy one here.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/list"
            >
              <h3 className="text-xl font-bold">Expert Alert →</h3>
              <div className="text-m">
                View the entire list of CCC CTF challenges available!
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/faq"
            >
              <h3 className="text-xl font-bold">Need some CTF help? →</h3>
              <div className="text-m">
                Check out some top tips and FAQ here.
              </div>
            </Link>
            <div className="hidden md:block">
            </div>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/process"
              target="_blank"
            >
              <h3 className="text-xl font-bold">Why did I make this? →</h3>
              <div className="text-m">
                My process, thoughts, and reasoning.
              </div>
            </Link>
          </div>
        </div>
        <div className="pb-8">
          <p className="text-white text-xl font-bold"><span className="text-[hsl(240,100%,82%)]">&#10047; </span>Made by Cherise &#58;&#41;<span className="text-[hsl(240,100%,82%)]"> &#10047;</span></p>
        </div>
      </main>
    </>
  );
}
