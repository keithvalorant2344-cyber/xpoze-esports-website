export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/achievements", label: "Achievements" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" }
];

export const featuredStats = [
  { value: "2020", label: "Founded" },
  { value: "3", label: "Main Games" },
  { value: "1", label: "Island Goal" }
];

export type NewsItem = {
  category: string;
  title: string;
  copy: string;
  date: string;
};

export const latestNews: NewsItem[] = [
  {
    category: "Tekken 8",
    title: "Xpoze Tekken roster dominates the latest brackets",
    copy: "SKM, ARSHAD, and GREGORY FOX headline podium finishes across Pro Series, Ironfist, and Esports Major events.",
    date: "2026 Results"
  },
  {
    category: "Valorant",
    title: "Xpoze closes GER 2025 as Grand Finals runner-up",
    copy: "The Valorant roster turns a deep tournament run into a defining result for the organization.",
    date: "2025 Season"
  },
  {
    category: "Community",
    title: "CyberRoom partnership strengthens local competition",
    copy: "Xpoze and CyberRoom Mauritius continue building more visibility around Mauritian esports talent.",
    date: "Partner Update"
  },
  {
    category: "Rosters",
    title: "Competitive lineups active across three titles",
    copy: "Valorant, Tekken 8, and Fortnite remain the core competitive pillars of the organization.",
    date: "Roster Watch"
  }
];

export const milestones = [
  {
    year: "2020",
    date: "June 12",
    title: "Xpoze Esports Founded",
    copy: "The organization launches in Mauritius with the goal of building stronger pathways for esports players."
  },
  {
    year: "2021",
    date: "Growth",
    title: "Community Competition Expands",
    copy: "Xpoze builds its competitive identity through local events, scrims, and player development."
  },
  {
    year: "2024",
    date: "Multi-Title",
    title: "Rosters Across Core Games",
    copy: "The organization focuses on Valorant, Tekken 8, and Fortnite as its main esports titles."
  },
  {
    year: "2025",
    date: "GER Finals",
    title: "Valorant Runner-up",
    copy: "Xpoze reaches the Valorant GER 2025 Grand Finals and finishes runner-up."
  }
];

export type Player = {
  handle: string;
  role: string;
  country: string;
  note: string;
  image?: string;
};

export const rosters = [
  {
    game: "Valorant",
    headline: "Structured, Composed, Utility-First.",
    description: "A tactical FPS roster built for pressure and clean executes.",
    longDescription:
      "The Valorant roster is the flagship competitive squad, carrying the GER 2025 Grand Finals runner-up result.",
    accent: "from-xpoze-purple via-xpoze-neon to-xpoze-ember",
    players: [
      {
        handle: "WrongWay",
        role: "Initiator / IGL",
        country: "MU",
        note: "In-game leader guiding tempo, utility, and mid-round calls.",
        image: "/images/players/wrongway.jpg"
      },
      {
        handle: "Mika",
        role: "Initiator / Duelist",
        country: "MU",
        note: "Flexible playmaker switching between setup and entry pressure.",
        image: "/images/players/mika.jpg"
      },
      {
        handle: "Skayan",
        role: "Sentinel",
        country: "MU",
        note: "Defensive anchor focused on site control and late-round stability.",
        image: "/images/players/skayan.jpg"
      },
      {
        handle: "Twin",
        role: "Duelist",
        country: "MU",
        note: "Explosive entry player creating space for the squad.",
        image: "/images/players/twin.jpg"
      },
      {
        handle: "Kagami",
        role: "Controller",
        country: "MU",
        note: "Smoke specialist controlling space and supporting executes.",
        image: "/images/players/kagami.jpg"
      }
    ]
  },
  {
    game: "Tekken 8",
    headline: "One Player, One Read, One Round.",
    description: "A fighting game roster centered on discipline and adaptation.",
    longDescription:
      "The Tekken 8 side represents the individual skill and mental toughness of the Xpoze competitive program.",
    accent: "from-xpoze-cyan via-xpoze-purple to-white",
    players: [
      {
        handle: "SKM",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "ARSHAD",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "AIESTRO",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "ALEX",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "SOL-ARC",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "RAS_DOVIC",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "LILMANIOC",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "RETRO",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "GREGORY FOX",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      },
      {
        handle: "KEPY",
        role: "Tekken 8",
        country: "MU",
        note: "Competitive Tekken player representing Xpoze Esports."
      }
    ]
  },
  {
    game: "Fortnite",
    headline: "Mechanics, Rotations, Late-Game Ice.",
    description: "A battle royale lineup made for high-speed decisions.",
    longDescription:
      "The Fortnite roster focuses on mechanics, communication, and disciplined rotations in stacked endgames.",
    accent: "from-xpoze-ember via-xpoze-purple to-xpoze-cyan",
    players: [
      {
        handle: "SWAMIL",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      },
      {
        handle: "EPIK",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      },
      {
        handle: "AATROX",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      },
      {
        handle: "LOCKED",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      },
      {
        handle: "VREVXNGE",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      },
      {
        handle: "SUBRA",
        role: "Fortnite",
        country: "MU",
        note: "Competitive Fortnite player representing Xpoze Esports."
      }
    ]
  }
];

export type TournamentResult = {
  game: string;
  title: string;
  placement: string;
  copy: string;
  year: string;
  region: string;
};

export const results: TournamentResult[] = [
  {
    game: "Tekken 8",
    title: "Esports Major",
    placement: "SKM 1st Place",
    copy: "SKM won the event, with ARSHAD securing 2nd place for another Xpoze one-two finish.",
    year: "2026",
    region: "Mauritius"
  },
  {
    game: "Tekken 8",
    title: "PepCity Ironfist Tournament",
    placement: "ARSHAD Winner",
    copy: "ARSHAD took 1st place, GREGORY FOX finished 2nd, and SKM completed the podium in 3rd.",
    year: "2026",
    region: "Mauritius"
  },
  {
    game: "Tekken 8",
    title: "Tekken 8 Pro Series by Esports Faction",
    placement: "SKM 1st Place",
    copy: "SKM claimed 1st place and ARSHAD finished 2nd, giving Xpoze Esports the top two spots.",
    year: "2025",
    region: "Mauritius"
  },
  {
    game: "Valorant",
    title: "GER 2025 Grand Finals",
    placement: "Runner-up",
    copy: "A high-profile Valorant result that pushed Xpoze into a stronger regional conversation.",
    year: "2025",
    region: "International"
  },
  {
    game: "Organization",
    title: "Mauritius Tournament Circuit",
    placement: "Multiple Wins",
    copy: "Repeated local victories that established the organization as a serious competitive force.",
    year: "2020-2026",
    region: "Mauritius"
  },
  {
    game: "Multi-Title",
    title: "Active Competitive Program",
    placement: "3 Rosters",
    copy: "Xpoze maintains competitive rosters in Valorant, Tekken 8, and Fortnite.",
    year: "Current",
    region: "Mauritius"
  }
];

export const sponsorSlots = [
  "Equipment",
  "Connectivity",
  "Apparel",
  "Events"
];

export const partners = [
  {
    title: "Community Activations",
    copy: "Event support, watch parties, and local esports moments that grow the scene."
  },
  {
    title: "Player Pathways",
    copy: "Resources and exposure for players aiming to compete beyond Mauritius."
  },
  {
    title: "Content Platform",
    copy: "Partner storytelling through announcements, match recaps, and social campaigns."
  }
];

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Discord", href: "https://discord.gg/xpoze" }
];
