import {Button} from "@/components/ui/button";
import {logos} from "@/components/(shared)/main/popularFilms/logos";

const FilmGenresBoard = () => {
    const buttonClassName = "bg-[#2F2F2F] rounded-xl text-white text-base sm:text-xl w-full sm:w-48 h-12 sm:h-16 flex items-center justify-center gap-2 hover:bg-gray-600";

    const genres = [
        {name: "Фильмы", logo: logos.film},
        {name: "Сериалы", logo: logos.serials},
        {name: "Комедии", logo: logos.comedies},
        {name: "Боевики", logo: logos.fights},
        {name: "Мелодрамы", logo: logos.melodramas},
        {name: "Драмы", logo: logos.dramas},
        {name: "Ужасы", logo: logos.horrors},
        {name: "Спорт", logo: logos.sport},
        {name: "Документалки", logo: logos.documental},
    ];

    return (
        <div className="pt-8 px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-4">
                {genres.map((genre, index) => (
                    <Button key={index} className={buttonClassName}>
                        <div className="flex items-center gap-2">
                            {genre.logo}
                            <span>{genre.name}</span>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default FilmGenresBoard;