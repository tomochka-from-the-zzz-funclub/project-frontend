import {CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

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

    const inputClass = "w-full bg-white text-gray-900 rounded-lg";

    return (
        <div className={!isVisible ? "hidden" : undefined}>
            <CardContent className="mb-4">
                {/* @ts-ignore */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Input
                            placeholder="Email"
                            className={inputClass}
                            required
                            {...register("email")}
                        />
                        {/*@ts-ignore*/}
                        {errors.email && <span className="text-white">{errors.email.message}</span>}
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
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                </form>
            </CardContent>

        </div>
    )

}