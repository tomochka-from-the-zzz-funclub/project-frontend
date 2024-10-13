import Container from "@/components/(shared)/common/container";
import Header from "@/components/(shared)/common/header";
import PopularFilmsBoard from "@/components/(shared)/main/popularFilms/popularFilmsBoard";
import FilmGenresBoard from "@/components/(shared)/main/filmGenres/filmGenresBoard";
import NewFilmsBoard from "@/components/(shared)/main/newFilms/newFilmsBoard";
import RecommendationsBoard from "@/components/(shared)/main/recomendations/recomendationsBoard";
import BestSerialsSubscription from "@/components/(shared)/main/bestSerials/bestSerialsSubscription";

export default function MainBoard() {
    return <>
        <Container>
            <Header/>
            <PopularFilmsBoard/>
            <FilmGenresBoard/>
            <NewFilmsBoard/>
        </Container>
        <RecommendationsBoard/>
        <Container>
            <BestSerialsSubscription/>
        </Container>
    </>
};