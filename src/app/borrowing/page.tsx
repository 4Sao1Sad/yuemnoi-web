"use client"
import { Button } from "@yuemnoi/components/ui/button";
import LendingItemsDialog from "./components/LendingItemsDialog";
import BorrowPost from "./components/BorrowPost";

export default function BorrowingPage() {
    const imageUrl = "https://media.istockphoto.com/id/1781688768/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/2024-%E0%B8%9A%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%82-%E0%B8%9B%E0%B8%B5%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-2024-%E0%B8%9A%E0%B8%99%E0%B8%88%E0%B8%AD%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B1%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%81.jpg?s=1024x1024&w=is&k=20&c=9C8UAYoEIJBpQ_WQR8mosFEB2VZrXRIXbYy1ClYI5c4="
    return <div className=" min-h-screen max-w-screen w-screen flex flex-col">

        Borrowing Page
        <BorrowPost>
            <Button>Create</Button>
        </BorrowPost>
        <LendingItemsDialog lendingItems={[{ id: "1", name: "1", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "2", name: "2", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "3", name: "3", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "4", name: "4", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "5", name: "5", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "6", name: "6", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "7", name: "7", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "8", name: "8", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "9", name: "9", imageUrl: imageUrl, ownerName: "Bruce", status: true },
        { id: "10", name: "10", imageUrl: imageUrl, ownerName: "Bruce", status: true }
        ]}
            borrowPostCard={{ id: "1", name: "Bruce", surName: "nun", description: "จะขอยืม กระทะมาทำหมูกระทะหน่อยคับ มีมั้ยคับ รีบมากเลยคับ", createdAt: new Date(2014, 6, 2, 6, 50) }}>


        </LendingItemsDialog>
    </div>
}