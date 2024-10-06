'use client'

import {Button} from "@/components/ui/button";
import {CardFooter} from "@/components/ui/card";

interface RegisterProps {
    isRegistering: boolean,
    setIsRegistering: Function,
}

export default function Banner({isRegistering, setIsRegistering}: RegisterProps) {
    const linkClass = " text-gray-400";

    if (isRegistering) return <CardFooter className="mt-4 flex-col">
        <Button type="submit"
                className="w-full transition-all duration-150 text-white bg-[#9C2328] hover:bg-[#5D1518] rounded-lg">
            Зарегистрироваться
        </Button>
        <div className="flex w-full justify-between mt-4 text-sm">
            <a href="#" className={linkClass}>
                Уже есть аккаунт? <span
                className="transition-all duration-150 hover:text-gray-200 underline"
                onClick={() => setIsRegistering(!isRegistering)}>Войти</span>
            </a>
        </div>
    </CardFooter>

    return <CardFooter className="mt-4 flex-col">
        <Button type="submit"
                className="w-full transition-all duration-150 text-white bg-[#9C2328] hover:bg-[#5D1518] rounded-lg">
            Войти
        </Button>
        <div className="flex w-full justify-between mt-4 text-sm">
            <a href="#" className={linkClass}>
                Еще нет аккаунта? <span
                className="transition-all duration-150 hover:text-gray-200 underline"
                onClick={() => setIsRegistering(!isRegistering)}>Создать</span>
            </a>
            <a href="#" className={linkClass}>Забыли пароль?</a>
        </div>
    </CardFooter>
}
