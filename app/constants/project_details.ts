export const skills_images = [
  { url: "/javascript.svg", title: "JavaScript" },
  { url: "/react.svg", title: "React" },
  { url: "/next.svg", title: "Next" },
  { url: "/tailwind.svg", title: "Tailwind" },
  { url: "/firebase.svg", title: "Firebase" },
  { url: "/typescript.svg", title: "TypeScript" },
  { url: "/express.svg", title: "Express" },
  { url: "/node.svg", title: "Node" },
  { url: "/aws.svg", title: "Aws" },
  { url: "/mysql.svg", title: "MySql" },
  { url: "/mongo.svg", title: "Mongo" },
  { url: "/java.svg", title: "Java" },
  { url: "/c.svg", title: "C" },
  { url: "/csharp.svg", title: "C#" },
  { url: "/python.svg", title: "Python" },
];

export type SampleProject = {
  title: string;
  description: string;
  skills: string[];
  img_url: string;
  url: string;
  index: number;
};

export type ProjectType = {
  title: string;
  description: string;
  skills: string[];
  img_url: string;
  url: string;
  index: number;
  github_url: string;
  overview: string;
  features: string;
  challenges: string;
  results: string;
};

export const samples: SampleProject[] = [
  {
    title: "Linkfolio",
    description:
      "Platform for users seeking design inspiration for their personal web portfolios.",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Firebase",
      "Puppeteer",
      "AWS - Lambda",
    ],
    img_url: "linkfolio.png",
    url: "linkfolio",
    index: 0,
  },
  {
    title: "Clinkz",
    description:
      "Subscription-based service that allows users to enter Amazon product URLs to have them actively scraped for better prices, recieving notifications when prices are low.",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Zustand",
      "Shadcnui",
      "NextAuth",
    ],
    img_url: "clinkz.png",
    url: "clinkz",
    index: 1,
  },
];

export const projects: ProjectType[] = [
  {
    title: "Linkfolio",
    description:
      "Platform for users seeking design inspiration for ttheir personal web portfolios",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Firebase",
      "Puppeteer",
      "AWS - Lambda",
    ],
    img_url: "/linkfolio.png",
    url: "https://linkfolio-nu.vercel.app/",
    index: 0,
    github_url: "https://github.com/jonathan-trevino/linkfolio",
    overview:
      "Resources for building a personal web portfolio are scarce. Often times google searches will recommend you the same few portfolios that are notable in their respective fields. Linkfolio is here to bring real-world portfolios to users.",
    features:
      "Linkfolio utilizes Firebase for its authentication, database for data, and storage for storing the images of users portfolio website. Users can upload their portfolio by entering their portfolio url where Linkfolio will then utilize Puppeteer to take screenshots conditionally based on the height of their portfolio.Infinite scrolling exists for exploring posts to feed users data incrementally for optimization.",
    challenges:
      "The project had no notable challenges. Before developing any of Linkfolios pages or functionality, I had already designed and mapped out needed functionality. This allowed me to have a solid foundation for how my website would look, and how it would ultimately flow for users.",
    results:
      "What I was left with at the end of development was a production ready platform for users to utilize. As of right now I am pushing this platform via Linkedin, and various other social media platforms; targeting specific users who meet the need-case for the application to grow its community.",
  },
  {
    title: "Clinkz",
    description:
      "Subscription-based service that allows users to enter Amazon product URLs to have them actively scraped for better prices, receiving notifications when price is low.",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Zustand",
      "Shadcnui",
      "NextAuth",
    ],
    img_url: "/clinkz.png",
    url: "https://clinkz.vercel.app/",
    index: 0,
    github_url: "https://github.com/jonathan-trevino/clinkz",
    overview:
      "Typically when researching into purchasing products, I often try my best to buy when the items price is at a discount. Unfortunately at the time there was no method of tracking its price without manually checking amazon product pages. This is where Clinkz was conceptualized, allowing users to enter amazon product URLs to have Clinkz track and notify products for them.",
    features:
      "Clinkz utilizes Firebase for its data storage, and users authorization. The bread winning feature of Clinkz is its hand free data retrieval from dynamic amazon product links. This allows the user to simply enter an amazon product link, and in turn store important data like its current price, description, ratings, and reviews. Users can choose which list to add the new amazon product to help maintain the products they are looking to buy. Clinkz very importantly also, on a repeated schedule, re-scrapes all amazon products listed in the Firestore database to grab the products new current price and update users via E-mail notification. Clinkz also has subscriptions tiers allowing for users to pay monthly for scraping even more products.",
    challenges:
      "Choosing which proxy provider for web scraping proved to be difficult as I was unfamiliar at the time with proxies. Eventually choosing one, it was not until I pushed Clinkz to production that it failed to work; with no clear answer of the problem I switched proxy providers and have had no problem since.",
    results:
      "Clinkz is a functional amazon product price tracker that efficiently implements subscription tiers for its users.",
  },
];
