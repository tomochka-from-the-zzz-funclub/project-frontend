import {CardContent, CardFooter} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const loginSchema = z.object({
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type LoginFormProps = {
    isVisible: boolean;
}

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm({isVisible}: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();

    const onSubmit = (data: LoginFormData) => {
        console.log(data)
        router.push("/")
    }

    const inputClass = "w-full bg-white text-gray-900 rounded-lg mb-2";

    return (
        <div className={!isVisible ? "hidden" : undefined}>
            {/* @ts-ignore */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CardContent className="mb-4">
                    <div>
                        <Input
                            placeholder="Email"
                            className={inputClass}
                            required
                            {...register("email")}
                        />
                        {/*@ts-ignore*/}
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div>
                        <Input
                            placeholder="Пароль"
                            type="password"
                            className={inputClass}
                            required
                            {...register("password")}
                        />
                        {/*@ts-ignore*/}
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <CardFooter className="mt-4 flex-col">
                        <Button type="submit"
                                className="w-full transition-all duration-150 text-white bg-[#9C2328] hover:bg-[#5D1518] rounded-lg">
                            Войти
                        </Button>
                        <div className="flex w-full justify-between mt-4 text-sm">
                            <a href="#" className={"text-gray-400"}>
                                Еще нет аккаунта? <span
                                className="transition-all duration-150 hover:text-gray-200 underline"
                            >Создать</span>
                            </a>
                            <a href="#" className={"text-gray-400"}>Забыли пароль?</a>
                        </div>
                    </CardFooter>
                </CardContent>
            </form>
        </div>
    )

}