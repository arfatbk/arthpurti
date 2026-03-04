export const siteConfig = {
  basePath: process.env.ENVIRONMENT === 'local' ? "" : "/",
  name: {
    short: "Arthpurti Patsanstha",
    full: "Arthpurti Patsanstha",
    legal: "Arthpurti Sahakari Patsantha Maryadit Jintur",
  },
  description: "Your trusted partner in financial growth",
  url: "https://arthpurtipatsanstha.com",
  socials: {
    facebook:
      "https://www.facebook.com/profile.php?id=100070867578193&sk=mentions",
    instagram:
      "https://www.instagram.com/arthpurtipatsanstha/",
  },
  email: "arthpurtipatsanstha@gmail.com",
  contact: "+91 8857097979",
} as const;
