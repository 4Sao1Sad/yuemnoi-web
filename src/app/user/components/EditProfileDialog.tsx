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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@yuemnoi/components/ui/form"
import { Button } from "@yuemnoi/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@yuemnoi/components/ui/input"
import { useEffect, useState } from "react"
import { AxiosInstance } from "@yuemnoi/app/client/client"


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    surname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})



export default function EditProfileDialog({ input, userid }: { input: typeof formSchema._input, userid: number }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: input.name,
            surname: input.surname,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        AxiosInstance.patch(`/users/${userid}`, {
            name: values.name,
            surname: values.surname
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        }   )
        setDialogOpen(false)
    }
    const [dialogOpen, setDialogOpen] = useState(false)
    return <Dialog open={dialogOpen}>
        <DialogTrigger >
            <FontAwesomeIcon onClick={() => setDialogOpen(true)} icon={faEdit} className="text-primary" />
        </DialogTrigger>
        <DialogContent className="rounded-lg mb-2" >
            <DialogHeader>
                <DialogTitle className="text-xl">Edit Profile</DialogTitle>
                <DialogDescription className="hidden">Edit your profile information</DialogDescription>
            </DialogHeader>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className="text-md">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" className="text-sm py-5" {...field} />
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
                                    className="text-md">Surname</FormLabel>
                                <FormControl>
                                    <Input placeholder="surname" className="text-sm py-5" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex  h-fit flex-row w-full space-x-4 mt-2">
                        <Button type="submit" size={"lg"} className="rounded-xl   text-sm" variant={"outline"} onClick={() => setDialogOpen(false)}>Close</Button>
                        <Button type="submit" size={"lg"} className="rounded-xl  text-white text-sm flex-1 flex ">Confirm</Button>
                    </div>
                </form>

            </Form>
        </DialogContent>
    </Dialog>

} 