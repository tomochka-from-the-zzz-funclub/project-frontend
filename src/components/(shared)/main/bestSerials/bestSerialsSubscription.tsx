import React from 'react';
import VerticalCard from "@/components/(shared)/common/verticalCard";

const BestSerialsSubscription = () => {
    const serials = [
        { href: "#", imageUrl: "/fnatic.png" },
        { href: "#", imageUrl: "/lastnight.png" },
        { href: "#", imageUrl: "/queengambit.png" },
        { href: "#", imageUrl: "/lucifer.png" },
        { href: "#", imageUrl: "/beef.png" },
        { href: "#", imageUrl: "/xoxogossip.png" },
    ];

    return (
        <div className="pt-5 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5">Лучшие сериалы в подписке {">"}</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {serials.map((serial, index) => (
                    <VerticalCard
                        key={index}
                        href={serial.href}
                        imageUrl={serial.imageUrl}
                        widthClass="w-full"
                    />
                ))}
            </div>
        </div>
    )
}

export default BestSerialsSubscription;