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
import { it } from "node:test";
import { useForm } from "react-hook-form";
import { z } from "zod";
interface LendingItem {
    id: string;
    name: string;
    imageUrl: string;
    status: boolean
    ownerName: string
}
interface LendingItemsDialogProps {
    children?: React.ReactNode;
    lendingItems: LendingItem[];
}
const FormSchema = z.object({
    itemId: z.string(),
})
export default function LendingItemsDialog({ lendingItems: LendingItems, children: ButtonTrigger }: LendingItemsDialogProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return (
        <Dialog >
            <DialogTrigger asChild>
                {ButtonTrigger}
            </DialogTrigger>
            <DialogContent className="rounded-lg" >
                <DialogHeader>
                    <DialogTitle>Select Your Lending Items</DialogTitle>
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
                                                            <RadioGroupItem value={item.id} className="bg-white flex flex-1 h-fit flex-row justify-start aria-checked:bg-orange-400 space-x-3 px-4 py-2 rounded-md shadow-md" >
                                                                <img src={item.imageUrl} alt={item.name} className="h-20 w-20" />
                                                                <div className="flex justify-center items-start flex-1 flex-col">
                                                                    <h2 className="text-xl font-semibold line-clamp-1 break-all text-black">{`${item.name} `}</h2>
                                                                    <div className="flex flex-row text-xs space-x-2">
                                                                        <h2 className=" font-medium line-clamp-1 break-all text-gray-500">{`by ${item.ownerName}`}</h2>
                                                                        <h2 className={cn("  line-clamp-1 break-all font-bold ",
                                                                            item.status ? "text-green-500" : "text-red-500"
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
                        <Button type="submit">Confirm</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}