import React from "react";
import Battery from "../battery";
import Wifi from "../wifi";
import DateTime from "../DateTime";
import { nanoid } from "nanoid";
import NaviconGo from "./navicon-GO";

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
      },
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
    subSection: [
      {
        id: nanoid(),
        name: "as Icons",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "1",
          },
        ],
      },
      {
        id: nanoid(),
        name: "as List",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "2",
          },
        ],
      },
      {
        id: nanoid(),
        name: "as Columns",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "3",
          },
        ],
      },
      {
        id: nanoid(),
        name: "as Gallery",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "4",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Use Stacks",
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
            name: "0",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Sort by",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/arrowright.svg",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Clean Up",
      },
      {
        id: nanoid(),
        name: "Clean Up By",
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
        name: "Hide Sidebar",
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
            name: "S",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Hide Preview",
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
            name: "P",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Hide Toolbar",
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
            name: "T",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Show All Tabs",
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
            name: "\\",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Hide Tab Bar",
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
            name: "T",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Hide Path Bar",
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
            name: "P",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Hide Status Bar",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "/",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: "Customize Toolbar...",
      },
      {
        id: nanoid(),
        name: "Customize Touch Bar...",
        break: true,
      },
      {
        id: nanoid(),
        name: "Show View Options",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "J",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Show Preview Options",
        break: true,
      },
      {
        id: nanoid(),
        name: "Enter Full Screen",
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
            name: "P",
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: {
      sectionName: "Go",
    },
    subSection: [
      {
        id: nanoid(),
        name: "Back",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "[",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Forward",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "]",
          },
        ],
      },
      {
        id: nanoid(),
        name: "Enclosing Folder",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            img: "/images/Buttons/arrowup.svg",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/clock.svg" name="Recents" />,
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
            name: "F",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/document.svg" name="Documents" />,
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
            name: "O",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/desktop.svg" name="Desktop" />,
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
            name: "D",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/download.svg" name="Downloads" />,
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
            name: "L",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/home.svg" name="Home" />,
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
            name: "H",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/computer.svg" name="Computer" />,
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
            name: "C",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/airdrop.svg" name="AirDrop" />,
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
            name: "R",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/network.svg" name="Network" />,
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
            name: "K",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/icloud.svg" name="iCloud Drive" />,
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
            name: "I",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/appstore.svg" name="Applications" />,
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
            name: "A",
          },
        ],
      },
      {
        id: nanoid(),
        name: <NaviconGo url="/images/navicons/utilities.svg" name="Utilities" />,
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
            name: "U",
          },
        ],
        break: true,
      },
      {
        id: nanoid(),
        name:"Recent Folders",
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
        name:"Go To Folder",
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
            name: "G",
          },
        ],
      },
      {
        id: nanoid(),
        name:"Connect to Server",
        img: [
          {
            id: nanoid(),
            img: "/images/Buttons/mac-command.svg",
          },
          {
            id: nanoid(),
            name: "K",
          },
        ],
      },
    ],
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
