export type ChallengeData = {
  [key: string]: {
    title: string;
    description: string;
    challenge: string;
    hint: string;
    flag: string;
    note: string;
  };
}

const challengeData: ChallengeData = {
  ascii: {
    title: "A Ski Key",
    description: "Oh no! I fell over when skiing, and the message got on my phone got corrupted! What could these bunch of numbers say?",
    challenge: "99 48 78 103 82 65 116 83 111 110 99 111 109 80 76 51 84 49 110 71 121 79 85 114 70 49 82 53 84 67 104 52 76 76 51 110 103 101",
    hint: "bee's knees, bay tree, green pea, and turkey",
    flag: "c0NgRAtSoncomPL3T1nGyOUrF1R5TCh4LL3nge",
    note: "You may have to refresh to try inputting another answer.",
  },
  cipher: {
    title: "Cool Ciphers",
    description: "A polar bear dropped me this cipher - or at least, I think it is. Could you please help me decipher it?",
    challenge: "wejqdorbkrruhvehcu?",
    hint: "that one famous Roman dude",
    flag: "gotanyblubberforme?",
    note: "You may have to refresh to try inputting another answer.",
  },
  square: {
    title: "Birthday Party",
    description: "I have just received a birthday party invite. For some odd reason, it had to be sent secretly - I wonder what could it say? I was given this key though: PARTYINVESCBDFGHJKLMOQUWX",
    challenge: "3224144124132451133224255253121324",
    hint: "I, Polybius, do not want to miss this party!",
    flag: "bethereorbesquare",
    note: "You may have to refresh to try inputting another answer.",
  },
  picture: {
    title: "Email Attachment",
    description: "Uh oh, I have just received an Email with an attachment, but the attachment got corrupted! I have no idea what this says, please help! :(",
    challenge: "",
    hint: "Black is 0 and White is 1.",
    flag: "whataninterestingbackground",
    note: "You may have to refresh to try inputting another answer.",
  },
  regex: {
    title: "I've lost my cool!",
    description: "I have one day to look through this evidence, and I am super stressed. Can you help me find the hidden flag to pin it on a suspect?",
    challenge: "",
    hint: "Perl is a great resource :)",
    flag: "NICEJOBOFFICER",
    note: "You may have to refresh to try inputting another answer.",
  },
};

export default challengeData;