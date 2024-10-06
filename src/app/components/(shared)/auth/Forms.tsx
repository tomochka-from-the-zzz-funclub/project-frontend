'use client'

import React, {useEffect, useState} from "react";
import LoginForm from "@/app/components/(shared)/auth/forms/LoginForm";
import RegisterForm from "@/app/components/(shared)/auth/forms/RegisterForm";

interface FormsProps {
    isRegistering: boolean,
}

export default function Forms({isRegistering}: FormsProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isRegistering) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isRegistering]);

    return <>
        {isRegistering ? <RegisterForm isVisible={isVisible}/> : <LoginForm isVisible={isVisible}/>}
    </>
}
