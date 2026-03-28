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

const weaponRegistry: weapons[] = [
  {
    id: 0,
    title: "prayer against lust",
    category: "lust",
    blurb: "This is a blurb about the spirit of lust.",
    emergencyPrayer: "I stand against you, spirit of lust, under the authority of Jesus Christ. I rebuke you for tempting me. I renounce our identity and refuse to drink your stolen water. I will not eat of your bread, for the bread that sustains me is through the blood and body of Jesus Christ. Your bonds are broken, my debt is paid. Be gone from me before I get my Father involved."
    lie: [{lie: "This is the most love you'll ever get.", truth: "There is no greater love than to lay down one's life for one's friends."}]
  },
  {
    
  }
    
  ]
