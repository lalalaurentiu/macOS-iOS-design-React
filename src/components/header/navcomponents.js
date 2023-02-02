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
          },
        ],
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
          },
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
    subSection: [
      {
        id: nanoid(),
        name: "New Finder Window",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "N",
          },
        ],
      },
      {
        id: nanoid(),
        name: "New Folder",
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
            name: "N",
          },
        ],
      },
      {
        id: nanoid(),
        name: "New Folder with Selection",
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
            name: "N",
          },
        ],
      },
      {
        id: nanoid(),
        name: "New Smart Folder",
      },
      {
        id: nanoid(),
        name: "New Tab",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "T",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Open",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "O",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Open With",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/arrowright.svg",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Close Window",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "W",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Get Info",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "I",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Rename",
      },
      {
        id: nanoid(),
        name: "Compress",
      },
      {
        id: nanoid(),
        name: "Duplicate",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "D",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Make Alias",
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
            name: "A",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Quick Look",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "Y",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Print",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "P",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Share",
        break: true,
      },
      {
        id: nanoid(),
        name: "Show Original",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "R",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Add to Sidebar",
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
            name: "Y",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Move to Bin",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/mac-delete-command.svg",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Eject",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "E",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        elements: () => {
          const colors = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "gray",
          ];
          const colorElements = colors.map((colorElement) => {
            return (
              <div
                key={nanoid()}
                className="color-element"
                style={{ backgroundColor: colorElement }}
              ></div>
            );
          });
          return (
            <div key={nanoid()} style={{ justifyContent: "flex-start" }}>
              {colorElements}
            </div>
          );
        },
      },
      {
        id: nanoid(),
        name: "Tags...",
        break: true,
      },
      {
        id: nanoid(),
        name: "Find",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "F",
          },
        ],
      }
    ],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Edit",
    },
    subSection: [
      {
        id: nanoid(),
        name: "Undo Rename",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "Z",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Rdo",
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
            name: "Z",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Cut",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "X",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Copy",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "C",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Paste",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "V",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Select All",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "A",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Show Clipboard",
        break: true,
      },
      {
        id: nanoid(),
        name: "Start Dictation...",
      },
      {
        id: nanoid(),
        name: "Emoji & Symbols",
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
            name: "Space",
          },
        ],
      },
    ],
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
