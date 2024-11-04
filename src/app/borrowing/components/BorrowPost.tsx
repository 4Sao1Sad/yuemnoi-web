"use client"
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@yuemnoi/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
interface LendingItemsDialogProps {
    children?: React.ReactNode;
}
const FormSchema = z.object({
    description: z.string(),
})
export default function BorrowPost({ children: ButtonTrigger }: LendingItemsDialogProps) {
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
                    <DialogTitle>Create Borrowing Post</DialogTitle>
                    <DialogDescription className="hidden">Edit your profile information</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-1 flex-col space-y-4 ">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="flex flex-1 flex-col max-h-[512px] overflow-y-scroll ">
                                    <Textarea {...field} placeholder="Write what you're looking for!" className="resize-none focus-visible:ring-0" />
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