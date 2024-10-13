import VerticalCard from "@/components/(shared)/common/verticalCard";

const films = [
    {
        link: "#",
        imageUrl: "/beef.png"
    },
    {
        link: "#",
        imageUrl: "/dune.png"
    },
    {
        link: "#",
        imageUrl: "/queengambit.png"
    },
    {
        link: "#",
        imageUrl: "/euphoria.png"
    },
    {
        link: "#",
        imageUrl: "/xoxogossip.png"
    },
    {
        link: "#",
        imageUrl: "/euphoria.png"
    },
    {
        link: "#",
        imageUrl: "/fnatic.png"
    },
    {
        link: "#",
        imageUrl: "/irishman.png"
    },
    {
        link: "#",
        imageUrl: "/lastnight.png"
    },
    {
        link: "#",
        imageUrl: "/lucifer.png"
    },
]

const FavouritesFilms = () => {
    return (
        <div className="pt-6 md:pt-12 lg:pt-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {films.map((film, idx) => (
                    <VerticalCard
                        href={film.link}
                        key={idx}
                        imageUrl={film.imageUrl}
                        heightClass="h-[calc(50vw-1rem)] md:h-[calc(25vw-1rem)]"
                        widthClass="w-full"
                        className="rounded-lg overflow-hidden"
                    />
                ))}
            </div>
        </div>

    )
}

export default FavouritesFilms;