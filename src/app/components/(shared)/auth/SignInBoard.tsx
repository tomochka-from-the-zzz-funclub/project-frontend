'use client'

import {Card, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import Forms from "@/app/components/(shared)/auth/Forms";
import Banner from "@/app/components/(shared)/auth/banner";

export default function SignInBoard() {
    const [isRegistering, setIsRegistering] = useState(false);


    const containerClass = "flex items-center justify-center min-h-screen bg-white custom-background";

    return (
        <div className={containerClass}>
            <Card
                className="z-10 p-8 bg-[rgba(27,27,27,0.57)] rounded-lg shadow-lg backdrop-blur-[3px] flex flex-col min-w-[25%]">
                <CardTitle className="mb-6 mt-[3rem] text-3xl text-center text-white">
                    {isRegistering ? "Регистрация" : "Авторизация"}
                </CardTitle>
                <Forms isRegistering={isRegistering}/>
                <Banner isRegistering={isRegistering} setIsRegistering={setIsRegistering}/>
            </Card>
        </div>
    )
}