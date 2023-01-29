import React from "react";
import Battery from "../battery";
import Wifi from "../wifi";
import DateTime from "../DateTime";

const navcomponentsLeft = [
  {
    id: "nav-apple-logo",
    name: {
      logoUrl: "/images/apple.svg",
    },
    subSection: [
      {
        id: "0",
        name: "About This Mac",
        break: true,
      },
      {
        id: "1",
        name: "System Preferences...",
        img: [
          {
            id: "0",
            name: React.createElement(
              "span",
              { className: "navicon" },
              "5 updates"
            ),
          },
        ],
      },
      {
        id: "2",
        name: "App Store...",
        break: true,
      },
      {
        id: "3",
        name: "Recent Items",
        img: [
          {
            id: "0",
            img: "/images/Buttons/arrowright.svg",
          },
        ],
        break: true,
      },
      {
        id: "4",
        name: "Force Quit...",
        img: [
          {
            id: "0",
            img: "/images/Buttons/mac-option-command.svg",
          },
          {
            id: "1",
            img: "/images/Buttons/mac-command.svg",
          },
        ],
        break: true,
      },
      {
        id: "5",
        name: "Sleep",
      },
      {
        id: "6",
        name: "Restart...",
      },
      {
        id: "7",
        name: "Shut Down...",
        break: true,
      },
      {
        id: "8",
        name: "Loock Screen",
        img: [
          {
            id: "0",
            img: "/images/Buttons/mac-control-command.svg",
          },
          {
            id: "1",
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: "2",
            name: "Q",
          }
        ]
      },
      {
        id: "9",
        name: "Log Out",
        img: [
          {
            id: "0",
            img: "/images/Buttons/mac-shift-command.svg",
          },
          {
            id: "1",
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: "2",
            name: "Q",
          }
        ],
      },
    ],
  },
  {
    id: "nav-finder",
    name: {
      sectionName: "Finder",
    },
    subSection: [],
  },
  {
    id: "nav-file",
    name: {
      sectionName: "File",
    },
    subSection: [],
  },
  {
    id: "nav-edit",
    name: {
      sectionName: "Edit",
    },
    subSection: [],
  },
  {
    id: "nav-view",
    name: {
      sectionName: "View",
    },
    subSection: [],
  },
  {
    id: "nav-go",
    name: {
      sectionName: "Go",
    },
    subSection: [],
  },
  {
    id: "nav-window",
    name: {
      sectionName: "Window",
    },
    subSection: [],
  },
  {
    id: "nav-help",
    name: {
      sectionName: "Help",
    },
    subSection: [],
  },
];

const navcomponentsRight = [
  {
    id: "nav-flag",
    name: {
      logoUrl: "/images/romania-flag.svg",
    },
    subSection: [],
  },
  {
    id: "nav-bluetooth",
    name: {
      logoUrl: "/images/bluetooth.svg",
    },
    subSection: [],
  },
  {
    id: "nav-battery",
    name: {
      func: (key) => <Battery key={key} level={100} />,
    },
    subSection: [],
  },
  {
    id: "nav-wifi",
    name: {
      func: (key) => <Wifi key={key} />,
    },
    subSection: [],
  },
  {
    id: "nav-search",
    name: {
      logoUrl: "/images/search.svg",
    },
    subSection: [],
  },
  {
    id: "nav-toogle",
    name: {
      logoUrl: "/images/toogles.svg",
    },
    subSection: [],
  },
  {
    id: "nav-siri",
    name: {
      logoUrl: "/images/siri.webp",
    },
    subSection: [],
  },
  {
    id: "nav-clock",
    name: {
      func: (key) => <DateTime key={key} />,
    },
    subSection: [],
  },
];

export { navcomponentsLeft, navcomponentsRight };
