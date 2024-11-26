export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Alice Johnson",
    _id: "1a2b3c4d",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Bob Smith",
    _id: "5e6f7g8h",
    groupChat: true,
    members: ["2", "3"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Charlie Brown",
    _id: "9i10j11k",
    groupChat: false,
    members: ["1", "4"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Daisy Miller",
    _id: "12l13m14n",
    groupChat: true,
    members: ["2", "5", "6"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ethan Hunt",
    _id: "15o16p17q",
    groupChat: false,
    members: ["3", "7"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Alice Johnson",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Bob Smith",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Alice Johnson",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Bob Smith",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachments: [
      // {
      //   public_id: "asdsad",
      //   url: "https://www.w3schools.com/howto/img_avatar.png",
      // },
    ],
    content: "L*uda ka Message hai",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "user_id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "xyz123",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    // content: "Hello! This is another sample message.",
    _id: "abc12345",
    sender: {
      // _id: "user_2",
      _id: "123",
      name: "Rahul",
    },
    chat: "chatId",
    createdAt: "2024-02-12T11:00:00.000Z",
  },
  {
    attachments: [],
    content: "No attachments here, just text!",
    _id: "xyz789",
    sender: {
      _id: "user_3",
      name: "Priya",
    },
    chat: "chatId",
    createdAt: "2024-02-12T11:15:45.000Z",
  },
];
