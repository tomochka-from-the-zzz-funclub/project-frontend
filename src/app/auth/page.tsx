'use client'
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default async function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Логика для обработки авторизации
    };

    // Общие классы для стилей
    const inputClass = "w-full bg-white rounded-lg";
    const linkClass = "hover:underline text-gray-400";
    const containerClass = "flex items-center justify-center min-h-screen bg-white custom-background";

    return (
        <div className={containerClass}>
            <Card className="z-10 p-8 bg-[rgba(27,27,27,0.57)] rounded-lg shadow-lg backdrop-blur-[3px] flex flex-col min-w-[25%]">
                <CardTitle className="mb-6 mt-[3rem] text-3xl text-center text-white">
                    Авторизация
                </CardTitle>
                <CardContent className="mb-4">
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <Input
                                placeholder="Email"
                                className={inputClass}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Пароль"
                                type="password"
                                className={inputClass}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="mt-4 flex-col">
                    <Button type="submit" className="w-full text-white bg-[#9C2328] rounded-lg">
                        Войти
                    </Button>
                    <div className="flex justify-between mt-4 text-sm">
                        <a href="#" className={linkClass}>
                            Еще нет аккаунта? <span className="text-white font-semibold hover:text-gray-200">Создать</span>
                        </a>
                        <a href="#" className={linkClass}>Забыли пароль?</a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}