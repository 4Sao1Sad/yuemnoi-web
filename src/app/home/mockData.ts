export interface BorrowingPost {
	id: string;
	description: string;
	activeStatus: boolean;
	owner_id: number;
	owner_name: string;
}

export interface LendingPost {
	id: string;
	item_name: string;
	image_url: string;
	description: string;
	price: number;
	active_status: boolean;
	owner_id: number;
	owner_name: string;
}

// Mock data for borrowing posts
export const borrowingPosts: BorrowingPost[] = [
	{
		id: "1",
		description: "จะขอยืม กระทะมาทำหมูกระทะหน่อยคับ มีมั้ยคับ รีบมากเลยคับ",
		activeStatus: true,
		owner_id: 1,
		owner_name: "Khim Kawaii",
	},
	{
		id: "2",
		description: "Looking for a bicycle",
		activeStatus: true,
		owner_id: 2,
		owner_name: "AI TheAdventure",
	},
	{
		id: "3",
		description: "Camera needed for a trip",
		activeStatus: true,
		owner_id: 3,
		owner_name: "Bruce BliliBlili",
	},
];

// Mock data for lending posts
export const lendingPosts: LendingPost[] = [
	{
		id: "1",
		item_name: "Bicycle",
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
		item_name: "Camera",
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
		item_name: "Tent",
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
		item_name: "Bicycle",
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
		item_name: "Camera",
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
		item_name: "Tent",
		description: "4-person tent.",
		price: 20.0,
		activeStatus: true,
		imageUrl:
			"https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd",
		ownerID: 3,
		ownerName: "SA SJai",
	},
];
