import React from "react";
import Battery from "../battery";
import Wifi from "../wifi";
import DateTime from "../DateTime";
import { nanoid } from "nanoid";

const navcomponentsLeft = [
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/apple.svg",
    },
    subSection: [
      {
        id: nanoid(),
        name: "About This Mac",
        break: true,
      },
      {
        id: nanoid(),
        name: "System Preferences...",
        img: [
          {
            id: nanoid(),
            name: React.createElement(
              "span",
              { className: "navicon" },
              "5 updates"
            ),
          },
        ],
      },
      {
        id: nanoid(),
        name: "App Store...",
        break: true,
      },
      {
        id: nanoid(),
        name: "Recent Items",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/arrowright.svg",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Force Quit...",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-option-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Sleep",
      },
      {
        id: nanoid(),
        name: "Restart...",
      },
      {
        id: nanoid(),
        name: "Shut Down...",
        break: true,
      },
      {
        id: nanoid(),
        name: "Loock Screen",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-control-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "Q",
          }
        ]
      },
      {
        id: nanoid(),
        name: "Log Out",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-shift-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "Q",
          }
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Finder",
    },
    subSection: [
      {
        id: nanoid(),
        name: "About Finder",
        break: true,
      },
      {
        id: nanoid(),
        name: "Preferences...",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: ",",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Empty Bin",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-shift-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-delete-command.svg",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Services",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/arrowright.svg",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Hide Finder",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "H",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Hide Others",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-option-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "H",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Show All",
      },
    ],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "File",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Edit",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "View",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Go",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Window",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Help",
    },
    subSection: [],
  },
];

const navcomponentsRight = [
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/romania-flag.svg",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/bluetooth.svg",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      func: (key) => <Battery key={key} level={100} />,
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      func: (key) => <Wifi key={key} />,
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/search.svg",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/toogles.svg",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      logoUrl: "/images/siri.webp",
    },
    subSection: [],
  },
  {
    id: nanoid(),
    name: {
      func: (key) => <DateTime key={key} />,
    },
    subSection: [],
  },
];

export { navcomponentsLeft, navcomponentsRight };
