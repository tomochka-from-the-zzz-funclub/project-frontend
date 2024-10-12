import {CardContent, CardFooter} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const registerSchema = z.object({
    name: z.string().min(1, "Имя обязательно"),
    surname: z.string().min(1, "Фамилия обязательна"),
    birthDate: z.string().min(1, "Дата рождения обязательна"),
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type LoginFormProps = {
    isVisible: boolean;
};

export default function RegisterForm({isVisible}: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const router = useRouter()

    const onSubmit = (data: any) => {
        return router.replace("/")
    };

    const inputClass = "w-full bg-white text-gray-900 rounded-lg";

    // @ts-ignore
    return (
        <div className={cn("opacity-", isVisible ? "100" : "0")}>
            <CardContent className="mb-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Input
                            placeholder="Имя"
                            className={inputClass}
                            {...register("name")}
                        />
                        {/*@ts-ignore*/}
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div>
                        <Input
                            placeholder="Фамилия"
                            className={inputClass}
                            {...register("surname")}
                        />
                        {/*@ts-ignore*/}

                        {errors.surname && <span>{errors.surname.message}</span>}
                    </div>
                    <div>
                        <Input
                            placeholder="Дата рождения"
                            type="date"
                            className={inputClass}
                            {...register("birthDate")}
                        />
                        {/*@ts-ignore*/}

                        {errors.birthDate && <span>{errors.birthDate.message}</span>}
                    </div>
                    <div>
                        <Input
                            placeholder="Email"
                            type="email"
                            className={inputClass}
                            {...register("email")}
                        />
                        {/*@ts-ignore*/}

                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <Input
                            placeholder="Пароль"
                            type="password"
                            className={inputClass}
                            {...register("password")}
                        />
                        {/*@ts-ignore*/}

                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                </form>
                <CardFooter className="mt-4 flex-col">
                    <Button type="submit"
                            className="w-full transition-all duration-150 text-white bg-[#9C2328] hover:bg-[#5D1518] rounded-lg">
                        Зарегистрироваться
                    </Button>
                    <div className="flex w-full justify-between mt-4 text-sm">
                        <a href="#" className={"text-gray-400"}>
                            Уже есть аккаунт? <span
                            className="transition-all duration-150 hover:text-gray-200 underline">Войти</span>
                        </a>
                    </div>
                </CardFooter>
            </CardContent>
        </div>
    );
}