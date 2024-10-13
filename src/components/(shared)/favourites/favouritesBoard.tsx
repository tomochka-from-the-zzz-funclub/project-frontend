import Container from "@/components/(shared)/common/container";
import Header from "@/components/(shared)/common/header";
import FavouritesText from "@/components/(shared)/favourites/favouritesText/favouritesText";
import FavouritesFilms from "@/components/(shared)/favourites/favouritesFilms/favouritesFilms";


const FavouritesBoard = () => {
    return (
        <Container>
            <Header/>
            <FavouritesText/>
            <FavouritesFilms/>
        </Container>
    )
}

export default FavouritesBoard