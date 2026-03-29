export interface LieTruthPair {
  lie: string;
  truth: string;
}

export interface weapons {
  id: number;
  title: string;
  category:string;
  blurb:string;
  slug: string;
  emergencyPrayer: string;
  lie: LieTruthPair[];
  
}

export const weaponRegistry: weapons[] = [
  {
    id: 0,
    title: "prayer against lust",
    category: "lust",
    blurb: "This is a blurb about the spirit of lust.",
    slug: "lust-1",
    emergencyPrayer: "I stand against you, spirit of lust, under the authority of Jesus Christ. I rebuke you for tempting me. I renounce our identity and refuse to drink your stolen water. I will not eat of your bread, for the bread that sustains me is through the blood and body of Jesus Christ. Your bonds are broken, my debt is paid. Be gone from me before I get my Father involved.",
    lie: [{lie: "This is the most love you'll ever get.", truth: "There is no greater love than to lay down one's life for one's friends."},{lie:"What's the point in fighting it?", truth:"If even your good eye causes you to sin, cut it off!"}]
  },
  {
    id:1,
    title:" Prayer against anxiety",
    category:"anxiety",
    blurb:"This is a blurb about the spirit of anxiety",
    slug:"anxiety-1",
    emergencyPrayer: "Anxieity, I have endured your attacks for too long. I am standing against you in the authority of Jesus Christ. I rebuke your attack and renounce the relationship I built with you by listening to your lies. Your hold on me has been destroyed by the blood of Jesus Christ. Anxiety, depart from me now! Father, please give me your spirit of peace.",
    lie: [{lie:"It's too difficult.", truth: "I can do all things through Christ who strengthens me."},{lie:"There's too much!",truth:"Don't worry about the troubles of tomorrow. there is enough worry for today."}]
  }
    
]
