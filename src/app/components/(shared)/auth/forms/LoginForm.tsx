import {CardContent, CardFooter} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {isVisible} from "recharts/types/util/TickUtils";

type LoginFormProps = {
    isVisible: boolean;
}

export default function LoginForm({isVisible}: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Общие классы для стилей
    const inputClass = "w-full bg-white text-gray-900 rounded-lg";
    const linkClass = " text-gray-400";

    return (
        // @ts-ignore
        <div className={!isVisible && "hidden"}>
            <CardContent className="mb-4">
                <form className="space-y-4">
                    <div>
                        <Input
                            placeholder="Email"
                            className={inputClass}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <Input
                            placeholder="Пароль"
                            type="password"
                            className={inputClass}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>
                </form>
            </CardContent>

        </div>
    )

}