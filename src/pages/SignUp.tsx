import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
/*import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: 'my first post',
      body: 'hahha'
    }
  })
  console.log(post);
}

main();*/

const suckmy_nuts = []
const asswordTeeHee = []

export default function FirstPost() {
  const [val, setVal]  = useState()
  const [val1, setVal1]  = useState()
  const clickhandler = () => {
    alert(val)
  }
  const change = event => {
    setVal(event.target.value)
  }

  const change1 = event => {
    setVal1(event.target.value)
  }
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
            Make <span className="text-[hsl(70,80%,50%)]">Account</span>
            </h1>
          </div>

          <div className = "Username">
          <p>Enter Username:</p>
          <input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>

          <div className = "Password">
          <p>Enter Password:</p>
          <input type="password" name="password" onChange={(e) => console.log(e.target.value)} />
          </div>
          

          <div>
            <h3 className="text-2xl font-bold">By having this checkbox clicked, you are agreeing to our <Link href="/HowWork">  <span className="text-[hsl(70,80%,50%)]"> terms of service </span> </Link></h3>
          <input type="checkbox" defaultChecked className="checkbox" />
          </div>
  
  
          <main className="self-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-20 font-mono">  
              <h3 className="text-2xl font-bold">Already have an account? <Link href="/login"> <span className="text-[hsl(70,80%,50%)]"> Login! </span></Link></h3>
          </main>


          <main className="self-center grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-20 font-mono">

          <Link 
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/25 p-4 text-white hover:bg-white/15 btn border-none w-auto h-auto"
            href="/Lobby">
              <h3 className="text-2xl font-bold">Create Account!</h3>
            </Link>
        </main>
  
        </div>
      </main>
    </>
    );
  }

