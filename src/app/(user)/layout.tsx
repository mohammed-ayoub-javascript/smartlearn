import AppLayout from "@/modules/app/app-layout";
import React from "react";

export default async function AppLayoutUser({children} : {children :React.ReactNode}){
    return(
        <div className=" h-full w-full">
            <AppLayout>
                {children}
            </AppLayout>
        </div>
    )
}