import Head from "next/head"
import Link from 'next/link';
import React from "react";
export default function FirstPost() {
  return (
    <>
    <Head>
      <title>Welcome to Pono Points</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex justify-center min-h-screen bg-sussy-forest bg-fixed bg-center bg-cover">
      <div className="flex self-center flex-col gap-20 bg-slate-500 rounded-xl p-20">

        <div className="flex self-center">
          <h1 className="font-mono tracking-tight text-white sm:text-[3.98rem]">
          How dis stuff <span className="text-[hsl(70,80%,50%)]">Work?</span>
          </h1>
        </div>

        <div className="font-mono tracking-tight text-white sm:text-[1.25rem]">
        <br/>
      <h3>Pono points are points that are gained by doing things that benefit the environment. This can include things like helping to protect sensitive environments, picking up trash, following local customs, keeping you and others safe, and respecting people’s privacy.</h3>
      <br/><br/><br/>
      <h3>Also we own all your money lmao</h3>
        </div>

        <main className="self-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-20 font-mono">

          <Link
            className="btn border-none w-auto h-auto flex max-w-xs flex-col gap-4 rounded-xl bg-white/25 p-4 text-white hover:bg-white/15"
            href="/SignUp"
          >
            <h3 className="text-2xl font-bold">Back to sign up →</h3>
          </Link>
        </main>

      </div>
    </main>
  </>
  );
}