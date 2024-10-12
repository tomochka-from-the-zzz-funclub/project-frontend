import {Button} from "@/components/ui/button";
import {logos} from "@/components/(shared)/main/popularFilms/logos";

const FilmGenresBoard = () => {
    const buttonClassName = "bg-[#2F2F2F] rounded-xl text-white text-xl w-48 h-16 flex items-center justify-center gap-2 hover:bg-gray-600";

    return (
        <div className="pt-8 flex flex-wrap gap-4 justify-center">
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.film}
                    <span>Фильмы</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.serials}
                    <span>Сериалы</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.comedies}
                    <span>Комедии</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.fights}
                    <span>Боевики</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.melodramas}
                    <span>Мелодрамы</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.dramas}
                    <span>Драмы</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.horrors}
                    <span>Ужасы</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.sport}
                    <span>Спорт</span>
                </div>
            </Button>
            <Button className={buttonClassName}>
                <div className="flex items-center gap-2">
                    {logos.documental}
                    <span>Документалки</span>
                </div>
            </Button>
        </div>
    );
}

export default FilmGenresBoard;