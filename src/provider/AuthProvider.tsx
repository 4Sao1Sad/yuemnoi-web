"use client"
import { AxiosInstance } from '@yuemnoi/app/client/client';
import { redirect } from 'next/dist/server/api-utils';
import { createContext, use, useContext, useEffect, useMemo, useState } from 'react';
interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
}

export const AuthContext = createContext<IUser>({} as IUser);
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser>({} as IUser);
    useEffect(() => {
        AxiosInstance.get('/users/me').then((res) => {
            const { name, email, surname, id } = res.data;
            setUser({ name, email, surname, id });

        }).catch((err) => {
            console.log(err)
            window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL||'';
        })
    }, []);

    return <AuthContext.Provider value={user} > {children}</AuthContext.Provider >;
}