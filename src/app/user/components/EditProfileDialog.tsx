"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@yuemnoi/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@yuemnoi/components/ui/form"
import { Button } from "@yuemnoi/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@yuemnoi/components/ui/input"
import { useState } from "react"


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    surname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})



export default function EditProfileDialog(input: typeof formSchema._input) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: input.name,
            surname: input.surname,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    const [dialogOpen, setDialogOpen] = useState(false)
    return <Dialog open={dialogOpen}>
        <DialogTrigger >
            <FontAwesomeIcon onClick={() => setDialogOpen(true)} icon={faEdit} className="text-primary" />
        </DialogTrigger>
        <DialogContent className="rounded-lg space-y-4" >
            <DialogHeader>
                <DialogTitle className="text-2xl">Edit Profile</DialogTitle>
                <DialogDescription className="hidden">Edit your profile information</DialogDescription>
            </DialogHeader>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className="text-lg">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" className="text-md py-5" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className="text-lg">Surname</FormLabel>
                                <FormControl>
                                    <Input placeholder="surname" className="text-lg py-5" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex  h-fit flex-row w-full space-x-4 my-6">
                        <Button type="submit" size={"lg"} className="rounded-xl py-6  text-xl" variant={"outline"} onClick={() => setDialogOpen(false)}>close</Button>
                        <Button type="submit" size={"lg"} className="rounded-xl py-6 text-white text-xl flex-1 flex ">Confirm</Button>
                    </div>
                </form>

            </Form>
        </DialogContent>
    </Dialog>

} 