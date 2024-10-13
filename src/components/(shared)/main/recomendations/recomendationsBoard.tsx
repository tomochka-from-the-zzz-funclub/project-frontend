import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import HorizontalCard from "@/components/(shared)/common/horizontalCard";

const RecomendationsBoard = () => {
    const recommendations = [
        { imageUrl: "/you.png", href: "#" },
        { imageUrl: "/euphoria.png", href: "#" },
        { imageUrl: "/dune.png", href: "#" },
    ];

    return (
        <div className="bg-[url('/background.png')] bg-cover bg-red-800 bg-center rounded-xl p-5 sm:p-8 mt-12 sm:mt-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                <span className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-0">Сгенерировано на основе ваших интересов</span>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button className="rounded-3xl text-base sm:text-xl bg-[#222222] hover:bg-gray-900 shadow-2xl text-white ml-0 sm:ml-6">
                            Как это работает?
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">SIRIUS</h4>
                            <p className="text-sm">Уникальное решение для вашего комфорта</p>
                            <div className="flex items-center pt-2">
                                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                <span className="text-xs text-muted-foreground">
                  На основе ваших интересов и опыта пользователей с помощью искуственного интеллекта мы подбиарем лучшие варианты для вас
                </span>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map((rec, index) => (
                    <HorizontalCard
                        key={index}
                        imageUrl={rec.imageUrl}
                        className="w-full h-auto"
                        href={rec.href}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecomendationsBoard;