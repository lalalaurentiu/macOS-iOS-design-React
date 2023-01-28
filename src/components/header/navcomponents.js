import React from "react";
import Battery from "../battery";
const navcomponentsLeft = [
  {
    id: "nav-apple-logo",
    name: {
      logoUrl: "/images/apple.svg",
    },
  },
  {
    id: "nav-finder",
    name: {
      sectionName: "Finder",
    },
  },
  {
    id: "nav-file",
    name: {
      sectionName: "File",
    },
  },
  {
    id: "nav-edit",
    name: {
      sectionName: "Edit",
    },
  },
  {
    id: "nav-view",
    name: {
      sectionName: "View",
    },
  },
  {
    id: "nav-go",
    name: {
      sectionName: "Go",
    },
  },
  {
    id: "nav-window",
    name: {
      sectionName: "Window",
    },
  },
  {
    id: "nav-help",
    name: {
      sectionName: "Help",
    },
  },
];

const navcomponentsRight = [
  {
    id: "nav-flag",
    name: {
      logoUrl: "/images/romania-flag.svg",
    },
  },
  {
    id: "nav-bluetooth",
    name: {
      logoUrl: "/images/bluetooth.svg",
    },
  },
  {
    id: "nav-battery",
    name: {
      func: (key) => <Battery key={key} level={5} />,
    },
  },
    //  id: "nav-battery",
  // wifi
  {
    id: "nav-clock",
    name: {
      logoUrl: "/images/search.svg",
    },
  },
  {
    id: "nav-toogle",
    name: {
      logoUrl: "/images/toogles.svg",
    },
  },
  {
    id: "nav-siri",
    name: {
      logoUrl: "/images/siri.webp",
    },
  },
//   id: 8,
  // date
//   id: 9,
  // time
];

export { navcomponentsLeft, navcomponentsRight };
