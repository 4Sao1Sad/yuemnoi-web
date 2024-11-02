"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Button } from "@yuemnoi/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@yuemnoi/components/ui/dialog"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@yuemnoi/components/ui/form";
import { cn } from "@yuemnoi/lib/utils/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface BorrowingPostCardProps {
    id: string;
    name: string;
    surName: string;
    description: string;
    createdAt: Date;
}
interface LendingItem {
    id: string;
    name: string;
    imageUrl: string;
    status: boolean
    ownerName: string
}
interface LendingItemsDialogProps {
    lendingItems: LendingItem[];
    borrowPostCard: BorrowingPostCardProps
}
const FormSchema = z.object({
    itemId: z.string(),
})
export default function LendingItemsDialog({ lendingItems: LendingItems, borrowPostCard }: LendingItemsDialogProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    const [dialogOpen, setDialogOpen] = useState(false)
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return (
        <Dialog open={dialogOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setDialogOpen(true)} key={borrowPostCard.id} className="h-fit flex flex-col items-start  px-4 py-3 shadow-lg rounded-lg bg-white text-black hover:bg-gray-50">
                    <div className="flex flex-row justify-between w-full items-center">
                        <h2 className="text-lg font-medium line-clamp-1 break-all ">{`${borrowPostCard.name} ${borrowPostCard.surName}`}</h2>
                        <div className="flex flex-row justify-between space-x-1  items-center">
                            <span className="text-md font-normal text-gray">{formatTimeAgo(borrowPostCard.createdAt)}</span>
                        </div>
                    </div>
                    <div className="text-xl font-normal">
                        {borrowPostCard.description}
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="rounded-lg" >
                <DialogHeader>
                    <DialogTitle className="text-h3 my-4">Select Your Lending Items</DialogTitle>
                    <DialogDescription className="hidden">Edit your profile information</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-1 flex-col space-y-4 ">
                        <FormField
                            control={form.control}
                            name="itemId"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col max-h-[512px] overflow-y-scroll">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-4"
                                        >
                                            {
                                                LendingItems.map((item) => (
                                                    <FormItem className="flex items-center justify-center  " key={item.id}>
                                                        <FormControl >
                                                            <RadioGroupItem value={item.id} className="bg-white flex flex-1 h-fit flex-row justify-start aria-checked:bg-secondary-hover  aria-checked:border-primary  aria-checked:border-4 space-x-5 px-4 py-4 rounded-xl shadow-md " >
                                                                <img src={item.imageUrl} alt={item.name} className="h-20 w-20" />
                                                                <div className="flex justify-center items-start flex-1 flex-col space-y-2">
                                                                    <h2 className="text-xl font-semibold line-clamp-1 break-all text-black">{`${item.name} `}</h2>
                                                                    <div className="flex flex-row text-sm space-x-2">
                                                                        <h2 className=" font-medium line-clamp-1 break-all text-gray">{`by ${item.ownerName}`}</h2>
                                                                        <h2 className={cn("  line-clamp-1 break-all font-bold ",
                                                                            item.status ? "text-primary" : "text-red-500"
                                                                        )}>{item.status ? "Avaliable for borrowing" : "Unavaliable"}</h2>
                                                                    </div>

                                                                </div>
                                                            </RadioGroupItem>
                                                        </FormControl>
                                                    </FormItem>
                                                ))

                                            }
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex  h-fit flex-row w-full space-x-4">
                            <Button type="submit" size={"lg"} className="rounded-xl py-6  text-xl" variant={"outline"} onClick={() => setDialogOpen(false)}>close</Button>
                            <Button type="submit" size={"lg"} className="rounded-xl py-6 text-white text-xl flex-1 flex ">Confirm</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export function formatTimeAgo(date: Date | string): string {

    // Initialize a default date as the current date
    let _date: Date = new Date();

    // Check if the input is a string and convert it to a Date object
    if (typeof date === "string") {
        _date = new Date(date)
    } else {
        _date = date
    }

    // Calculate the time difference in seconds
    const seconds: number = Math.floor((new Date().getTime() - _date.getTime()) / 1000);

    // Define intervals for different time units in seconds
    const intervals: Record<string, number> = {
        year: 31536000,
        month: 2628000,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    // Iterate through the intervals and determine the appropriate unit
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval: number = Math.floor(seconds / secondsInUnit);
        if (interval > 1) {
            return `${interval} ${unit}s ago`;
        }
        if (interval === 1) {
            return `${interval} ${unit} ago`;
        }
    }

    // If no larger unit is found, return "just now"
    return "just now";
}
