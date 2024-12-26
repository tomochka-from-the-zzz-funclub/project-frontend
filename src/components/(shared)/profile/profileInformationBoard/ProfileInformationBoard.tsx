'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Controller, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {Label} from "@/components/ui/label"

const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Use YYYY-MM-DD"),
    email: z.string().email("Invalid email address"),
    paymentMethod: z.string().min(1, "Payment method is required"),
    newCardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits").optional(),
})

type FormData = z.infer<typeof schema>

const ProfileInformationBoard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [paymentMethods, setPaymentMethods] = useState(['**** **** **** 8627'])

    const {control, handleSubmit, watch, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "Иван",
            lastName: "Иванов",
            dateOfBirth: "2000-01-01",
            email: "mashenkaluchaya@chapalda.ru",
            paymentMethod: "**** **** **** 8627",
        }
    })

    const watchPaymentMethod = watch("paymentMethod")

    const onSubmit = (data: FormData) => {
        console.log(data)
        if (data.paymentMethod === 'new' && data.newCardNumber) {
            setPaymentMethods([...paymentMethods, `**** **** **** ${data.newCardNumber.slice(-4)}`])
        }
        setIsOpen(false)
    }

    return (
        <div className="mt-24">
            <div className="flex w-full justify-between">
                <div>
                    <h1 className="text-white text-4xl">Личный кабинет</h1>
                </div>
                <div>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button className="rounded-2xl bg-red-800 text-white hover:bg-red-900">
                                Редактировать данные
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Редактировать профиль</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">Имя</Label>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({field}) => <Input id="firstName" {...field} />}
                                    />
                                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Фамилия</Label>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({field}) => <Input id="lastName" {...field} />}
                                    />
                                    {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dateOfBirth">Дата рождения</Label>
                                    <Controller
                                        name="dateOfBirth"
                                        control={control}
                                        render={({field}) => <Input id="dateOfBirth" type="date" {...field} />}
                                    />
                                    {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({field}) => <Input id="email" type="email" {...field} />}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="paymentMethod">Способ оплаты</Label>
                                    <Controller
                                        name="paymentMethod"
                                        control={control}
                                        render={({field}) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Выберите способ оплаты"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {paymentMethods.map((method) => (
                                                        <SelectItem key={method} value={method}>
                                                            {method}
                                                        </SelectItem>
                                                    ))}
                                                    <SelectItem value="new">Добавить новую карту</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.paymentMethod &&
                                        <p className="text-red-500">{errors.paymentMethod.message}</p>}
                                </div>
                                {watchPaymentMethod === 'new' && (
                                    <div className="space-y-2">
                                        <Label htmlFor="newCardNumber">Номер новой карты</Label>
                                        <Controller
                                            name="newCardNumber"
                                            control={control}
                                            render={({field}) => <Input id="newCardNumber" {...field} />}
                                        />
                                        {errors.newCardNumber &&
                                            <p className="text-red-500">{errors.newCardNumber.message}</p>}
                                    </div>
                                )}
                                <Button type="submit" className="w-full">Сохранить изменения</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="mt-6 p-10 w-full bg-[#2F2F2F] rounded-2xl flex items-center">
                <img src="/cat.png" className={"w-64 h-64"} alt="Профильное изображение"/>

                <div className="ml-12 flex-grow flex items-center">
                    <div className="flex items-center flex-row text-white w-full">
                        <div className="w-1/2 space-y-4">
                            <div>
                                <span className="font-bold text-lg">Имя:</span>
                                <p className="text-sm">{watch('firstName')}</p>
                            </div>
                            <div>
                                <span className="font-bold text-lg">Фамилия:</span>
                                <p className="text-sm">{watch('lastName')}</p>
                            </div>
                            <div>
                                <span className="font-bold text-lg">Дата рождения:</span>
                                <p className="text-sm">{watch('dateOfBirth')}</p>
                            </div>
                        </div>

                        <div className="w-1/2 space-y-4">
                            <div>
                                <span className="font-bold text-lg">E-mail:</span>
                                <p className="text-sm">{watch('email')}</p>
                            </div>
                            <div>
                                <span className="font-bold text-lg">Способ оплаты:</span>
                                <p className="text-sm">{watch('paymentMethod') === 'new' ? 'Новая карта' : watch('paymentMethod')}</p>
                            </div>
                            <div>
                                <span className="font-bold text-lg">Статус подписки:</span>
                                <p className="text-sm">Активна (стандарт)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformationBoard