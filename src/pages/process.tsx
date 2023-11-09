import Header from "~/components/Header";

export default function Process() {
  return (
    <>
      <Header title="the process"/>
      <div className="grid grid-cols-1 gap-4 px-16 py-12">
        <h1 className="text-lg font-bold">What did I make? What is this?</h1>
        <p>
          This is a website collated with some beginner CTF challenges I made! Challenges were made to be super easy for anyone
          to dip their toes into - and is a slow introduction. It mimicks what I would've liked to have been my first CTF experience.
        </p>
        <h1 className="text-lg font-bold">Why did I make this?</h1>
        <p>
          Pushed by the Something Awesome component of COMP6441, I really wanted to actually delve into what a CTF challenge or competition is.
          I had personally never touched CTFs before, other than previously being a part of SecSoc UNSW (who do run wonderful CTFs - 
          <a href="https://www.facebook.com/unswsecsoc/" className="text-[#1722b9]"> please check them out!</a>).
        </p>
        <p>
          I was also motivated by a personal desire to challenge myself and try something new. I didn't just want to crack CTF challenges myself
          but also try to make some of my own. These challenges that I have developed are very introductory, and are challenges that I would
          have loved to have tried in a more competitive environment.
        </p>
        <p>
          In making this, I hope to inspire some of you who do see this page, to extend beyond this and try more difficult challenges!
          While I might update this website with harder ones after this Something Awesome project timeframe has ended, here is a list
          of amazing CTFs that were both an inspiration and a chance for you to further practise your skills:
        </p>
        <ul className="list-disc py-3">
          <li>SecSoc UNSW&apos;s Newbie CTF 2021 (<a href="https://github.com/unswsecsoc/21t2-secsoc-x-csesoc-newbie-ctf" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s Beginner Quest (<a href="https://capturetheflag.withgoogle.com/beginners-quest" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s CTF (Quals) (<a href="https://capturetheflag.withgoogle.com/challenges" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s HACKCELER8 (<a href="https://capturetheflag.withgoogle.com/hackceler8" className="text-[#1722b9]">LINK</a>)</li>
          <li>OverTheWire&apos;s Bandit Games (<a href="https://overthewire.org/wargames/bandit/" className="text-[#1722b9]">LINK</a>)</li>
        </ul>
        <h1 className="text-lg font-bold">How did I get here?</h1>
        <p>
          Here's a rough timeline what it took to end up with this finished product:
        </p>
        <ol className="list-decimal py-3">
          <li>Research into CTFs and their history</li>
          <li>Research what CTFs exist / have existed</li>
          <li>Attempt some CTF challenges, including the ones from the above list</li>
          <li>Create this web app</li>
          <li>Create some CTF challenges based off what I have learnt and upload them</li>
        </ol>
      </div>
    </>
  );
}
