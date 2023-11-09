import Header from "~/components/Header";

export default function FAQ() {
  return (
    <>
      <Header title="faq"/>
      <div className="grid grid-cols-1 gap-4 px-16 py-12">
        <h1 className="text-lg font-bold">What is a CTF?</h1>
        <p>
          CTF stands for &apos;Capture The Flag&apos;. It is a challenge in which you are given some material that may be 
          text, script, program, etc. - and you must find the &apos;flag&apos;. The &apos;flag&apos; is usually hidden inside 
          the said material. There are often a variety of ways that you can find the flag.
        </p>
        <h1 className="text-lg font-bold">This is my first time doing a CTF challenge. How can I find the flag?</h1>
        <p>
          Firstly, welcome! Secondly, this is wholly dependent on the challenge or material you receive. If you receive a cipher, for example,
          you might want to first figure out a pattern and/or check which letters are repeated the most. You can then work and decrypt 
          from there! 
        </p>
        <p>
          Harder challenges may see you attempting to reverse engineer a program, or having to write your own programs to filter or sort
          through large scripts. This will require some basic knowledge in programming and/or scripting.
        </p>
        <p>
          Do not worry, the challenges in this website so far do not require you to reverse engineer a program!
        </p>
        <p>
          If you need more specific help, this is a website I found lovely in my own attempts at 
          CTF challenges: <a href="https://ctf101.org/" className="text-[#1722b9]">ctf101</a>
        </p>
        <h1 className="text-lg font-bold">How did CTF competition or challenges even come about?</h1>
        <p>
          It was first introduced at DEFCON in 1996 - if you have not heard of DEFCON before, I recommend you check them out!
          They hold their events in Las Vegas unfortunately :( but maybe you will be able to attend one of their events someday if you
          are in Australia! There are similar conventions here like BSides - I recommend you to join the SecSoc UNSW Discord if you would
          like to keep up and/or participate in these events with a few friends :)
        </p>
        <p>
          There are usually two different formats of CTF competitions - one is called jeopardy, and it involves you solving a mixed bag
          of different challenges with differing amount of points (basically this website). The other is called attack-defence, and it
          involves teams attacking their opponent&apos;s system, while defending theirs.
        </p>
        <p>
          CTF competitions and challenges ended up sticking around because they are incredibly fun, and a nice way to test your
          practical cybersecurity skills.
        </p>
        <h1 className="text-lg font-bold">Do you have any other useful websites to help me?</h1>
        <p>
          Definitely! Here is a collated list (non-exhaustive):
        </p>
        <ul className="list-disc py-3">
          <li>ctf101 - for tips on how to solve different types of challenges (<a href="https://ctf101.org/" className="text-[#1722b9]">LINK</a>)</li>
          <li>CTFTime - for a list of past, current, and future CTF events (<a href="https://ctftime.org/" className="text-[#1722b9]">LINK</a>)</li>
          <li>SecSoc UNSW&apos;s Newbie CTF 2021 - for more beginner challenges (<a href="https://github.com/unswsecsoc/21t2-secsoc-x-csesoc-newbie-ctf" className="text-[#1722b9]">LINK</a>)</li>
          <li>OverTheWire&apos;s Bandit Games - for more beginner challenges (<a href="https://overthewire.org/wargames/bandit/" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s Beginner Quest - for more beginner challenges (<a href="https://capturetheflag.withgoogle.com/beginners-quest" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s CTF (Quals) - for more intermediate/hard challenges (<a href="https://capturetheflag.withgoogle.com/challenges" className="text-[#1722b9]">LINK</a>)</li>
          <li>Google&apos;s HACKCELER8 - for more intermediate/hard challenges (<a href="https://capturetheflag.withgoogle.com/hackceler8" className="text-[#1722b9]">LINK</a>)</li>
          <li>DEF CON - for everything DEF CON related (<a href="https://defcon.org/" className="text-[#1722b9]">LINK</a>)</li>
          <li>BSides - for general BSides website (it is safe I promise) (<a href="http://www.securitybsides.com/w/page/12194156/FrontPage" className="text-[#1722b9]">LINK</a>)</li>
          <li>BSides Canberra - the closest BSides event for those in Sydney (<a href="https://www.bsidesau.com.au/" className="text-[#1722b9]">LINK</a>)</li>
        </ul>
      </div>
    </>
  );
}
