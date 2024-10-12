import VerticalCard from "@/components/(shared)/common/verticalCard";

const NewFilmsBoard = () => {
    return (
        <div className={"pt-5"}>
            <h1 className={'text-5xl'}>Фильмы-новинки {">"}</h1>

            <div className={'flex justify-between pt-5'}>
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/irishman.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/missionincompletable.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/legend.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/openheimer.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/sabor.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-8"}
                    imageUrl={"/skyfall.png"}
                />
            </div>
        </div>
    )
}

export default NewFilmsBoard