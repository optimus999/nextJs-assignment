export const siteConfig = {
  name: "My Project",
  description: "A modern Next.js application built with the App Router",
  url: "https://my-project.com",
  ogImage: "https://my-project.com/og.jpg",
  links: {
    twitter: "https://twitter.com/myproject",
    github: "https://github.com/myproject",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
} as const; 