import React from 'react';
import VerticalCard from "@/components/(shared)/common/verticalCard";

const NewFilmsBoard = () => {
    const films = [
        { href: "#", imageUrl: "/irishman.png" },
        { href: "#", imageUrl: "/missionincompletable.png" },
        { href: "#", imageUrl: "/legend.png" },
        { href: "#", imageUrl: "/openheimer.png" },
        { href: "#", imageUrl: "/sabor.png" },
        { href: "#", imageUrl: "/skyfall.png" },
    ];

    return (
        <div className="pt-5 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5">Фильмы-новинки {">"}</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {films.map((film, index) => (
                    <VerticalCard
                        key={index}
                        href={film.href}
                        imageUrl={film.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewFilmsBoard;