export interface BorrowingPost {
  id: string;
  description: string;
  activeStatus: boolean;
  ownerID: number;
  ownerName: string;
}

export interface LendingPost {
  id: string;
  itemName: string;
  description: string;
  price: number;
  activeStatus: boolean;
  imageUrl: string;
  ownerID: number;
  ownerName: string;
}

// Mock data for borrowing posts
export const borrowingPosts: BorrowingPost[] = [
  {
    id: "1",
    description: "จะขอยืม กระทะมาทำหมูกระทะหน่อยคับ มีมั้ยคับ รีบมากเลยคับ",
    activeStatus: true,
    ownerID: 1,
    ownerName: "Khim Kawaii",
  },
  {
    id: "2",
    description: "Looking for a bicycle",
    activeStatus: true,
    ownerID: 2,
    ownerName: "AI TheAdventure",
  },
  {
    id: "3",
    description: "Camera needed for a trip",
    activeStatus: true,
    ownerID: 3,
    ownerName: "Bruce BliliBlili",
  },
];

// Mock data for lending posts
export const lendingPosts: LendingPost[] = [
  {
    id: "1",
    itemName: "Bicycle",
    description:
      "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.",
    price: 10.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 1,
    ownerName: "Bibbo WithProcreate",
  },
  {
    id: "2",
    itemName: "Camera",
    description: "DSLR camera with lenses.",
    price: 15.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 2,
    ownerName: "Noei NoWhereToFound",
  },
  {
    id: "3",
    itemName: "Tent",
    description: "4-person tent.",
    price: 20.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 3,
    ownerName: "SA SJai",
  },
  {
    id: "4",
    itemName: "Bicycle",
    description:
      "It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor. Sir sex opinions age properly extended. Advice branch vanity or do thirty living. Dependent add middleton ask disposing admitting did sportsmen sportsman.",
    price: 10.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 1,
    ownerName: "Bibbo WithProcreate",
  },
  {
    id: "5",
    itemName: "Camera",
    description: "DSLR camera with lenses.",
    price: 15.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 2,
    ownerName: "Noei NoWhereToFound",
  },
  {
    id: "6",
    itemName: "Tent",
    description: "4-person tent.",
    price: 20.0,
    activeStatus: true,
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
    ownerID: 3,
    ownerName: "SA SJai",
  },
];
