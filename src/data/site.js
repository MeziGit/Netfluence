// Real content shared across pages. Nothing here is invented: projects are live client
// sites (screenshots taken from them), quotes are the clients' own words.

import victoriaFish from "../assets/images/home/victoria-fish.webp";
import northtouch from "../assets/images/home/northtouch.webp";
import chateauHudson from "../assets/images/home/chateau-hudson.webp";
import montrealTowing from "../assets/images/home/montreal-towing.webp";
import socialRebrand from "../assets/images/home/social-rebrand.webp";
import ryanPhoto from "../assets/images/home/ryan.webp";
import kuiPhoto from "../assets/images/home/kui.webp";

export { contact, services } from "./meta";

export const projects = [
  {
    name: "Victoria Fish",
    kind: "Website",
    stack: ["React", "Tailwind", "Node.js"],
    description:
      "A Montréal fish market open for over 50 years, known for its smoked salmon.",
    href: "https://victoriafish.ca/",
    domain: "victoriafish.ca",
    image: victoriaFish,
  },
  {
    name: "Northtouch Canada",
    kind: "Website",
    stack: ["React", "Tailwind", "Node.js"],
    description:
      "A bilingual site for a manufacturer’s agent in assembly, test and programming equipment.",
    href: "https://northtouch.com",
    domain: "northtouch.com",
    image: northtouch,
  },
  {
    name: "Le Château Hudson",
    kind: "Website",
    stack: ["Bootstrap", "JavaScript"],
    description: "Store directory, events and gallery for a shopping centre.",
    href: "https://lechateauhudson.com/",
    domain: "lechateauhudson.com",
    image: chateauHudson,
  },
  {
    name: "Montreal Towing",
    kind: "Website",
    stack: ["WordPress", "Elementor"],
    description:
      "Services and booking for a towing company with Montréal and Cornwall divisions.",
    href: "https://montrealtowing.net",
    domain: "montrealtowing.net",
    image: montrealTowing,
  },
  {
    name: "Social Rebrand Collective",
    kind: "Website",
    stack: ["React", "Tailwind", "Node.js"],
    description: "A site for a Montréal digital marketing agency.",
    href: "https://socialrebrand.ca",
    domain: "socialrebrand.ca",
    image: socialRebrand,
  },
];
export const testimonials = [
  {
    quote:
      "Netfluence completely transformed our online presence. Our new website has significantly increased our visibility and customer engagement. Their design perfectly captures the essence of our local fish market and has helped drive substantial growth in our online orders.",
    name: "Demetri Papageorgiou",
    role: "Manager",
    company: "Victoria Fish",
    image: victoriaFish,
  },
  {
    quote:
      "Working with Netfluence was a seamless experience from start to finish. They understood our vision immediately and created a website that perfectly represents our brand’s values and aesthetic. The results have exceeded our expectations in both design and functionality.",
    name: "Ahmad Sidawi",
    role: "Founder",
    company: "Social Rebrand Collective",
    image: socialRebrand,
  },
  {
    quote:
      "The website Netfluence developed for us has been a game-changer for our business. Their team’s technical expertise and creative approach resulted in a platform that’s not only visually stunning but also highly functional. The attention to detail and user experience design has impressed both our team and our clients.",
    name: "Benoit Giroux",
    role: "CEO",
    company: "Northtouch",
    image: northtouch,
  },
];

export const team = [
  {
    key: "ryan",
    name: "Ryan Meziane",
    role: "Co-founder, full-stack developer",
    bio: "Computer Science graduate from John Abbott College with 5+ years of programming experience. Currently pursuing a Bachelor’s degree while working on client projects.",
    photo: ryanPhoto,
  },
  {
    key: "kui",
    name: "Kui Hua Wang",
    role: "Co-founder, full-stack developer",
    bio: "Computer Science graduate from John Abbott College. Currently working towards a Bachelor’s degree while building client projects.",
    photo: kuiPhoto,
  },
];

export const steps = [
  {
    title: "Discovery",
    description:
      "We learn how your business works, who your customers are, and what the project needs to do for them.",
  },
  {
    title: "Design",
    description:
      "We design the screens around your content and the people using them, and go through them with you before we build.",
  },
  {
    title: "Development",
    description:
      "We build with current, well-supported tools so it runs fast and stays easy to maintain.",
  },
  {
    title: "Launch and support",
    description:
      "We test on real phones and browsers, launch, and stay on afterwards to keep it running.",
  },
];
