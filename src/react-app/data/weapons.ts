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
