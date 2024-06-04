export const advancedFilterData = [
  {
    title: "Current Mood",
    slug: "mood",
    allTypes: [
      {
        id: 0,
        title: "Happy",
      },
      {
        id: 2,
        title: "Sad",
      },
      {
        id: 3,
        title: "Angry",
      },
      {
        id: 4,
        title: "Peaceful",
      },
      {
        id: 5,
        title: "Violent",
      },
      {
        id: 6,
        title: "Alone",
      },
    ],
  },
  {
    title: "Platform",
    slug: "platform",
    allTypes: [
      {
        id: 6,
        title: "PC",
      },
      {
        id: 167,
        title: "PS5",
      },
      {
        id: 48,
        title: "PS4",
      },
      {
        id: 9,
        title: "PS3",
      },
      {
        id: 169,
        title: "Xbox X|S",
      },
      {
        id: 49,
        title: "Xbox One",
      },
      {
        id: 12,
        title: "Xbox 360",
      },
      {
        id: 130,
        title: "Nintendo Switch",
      },
    ],
  },
  {
    title: "Release",
    slug: "release",
    allTypes: [
      {
        id: 0,
        condition: "release_date > 2020",
        title: "New",
      },
      {
        id: 1,
        condition: "release_date < 2008",
        title: "Old",
      },
      {
        id: 2,
        condition: "",
        title: "Any",
      },
    ],
  },
  {
    title: "Rating",
    slug: "rating",
    allTypes: [
      {
        id: 65,
        title: ">65",
      },
      {
        id: 75,
        title: ">75",
      },
      {
        id: 85,
        title: ">85",
      },
      {
        id: 95,
        title: ">95",
      },
    ],
  },
  {
    title: "Game Mode",
    slug: "game_mode",
    allTypes: [
      {
        id: 1,
        title: "Single Player",
      },
      {
        id: 2,
        title: "Multiplayer",
      },
    ],
  },
  {
    title: "With Sequels",
    slug: "sequels",
    allTypes: [
      {
        id: 0,
        title: "No",
      },
      {
        id: 1,
        title: "Yes",
      },
    ],
  },
];

export const moods = [
  {
    id: 0,
    title: "Happy",
  },
  {
    id: 2,
    title: "Sad",
  },
  {
    id: 3,
    title: "Angry",
  },
];
export const release = [
  {
    condition: "release_date > 2020",
    title: "New",
  },
  {
    condition: "release_date < 2008",
    title: "Old",
  },
  {
    condition: "",
    title: "Any",
  },
];
export const platforms = [
  {
    id: 6,
    title: "PC",
  },
  {
    id: 167,
    title: "PS5",
  },
  {
    id: 48,
    title: "PS4",
  },
  {
    id: 9,
    title: "PS3",
  },
  {
    id: 169,
    title: "Xbox X|S",
  },
  {
    id: 49,
    title: "Xbox One",
  },
  {
    id: 12,
    title: "Xbox 360",
  },
  {
    id: 130,
    title: "Nintendo Switch",
  },
];

export const ratings = [
  {
    id: 65,
    title: ">65",
  },
  {
    id: 75,
    title: ">75",
  },
  {
    id: 85,
    title: ">85",
  },
  {
    id: 95,
    title: ">95",
  },
];
