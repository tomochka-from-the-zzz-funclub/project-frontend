import VerticalCard from "@/components/(shared)/common/verticalCard";

const BestSerialsSubscription = () => {
    return (
        <div className={"pt-5"}>
            <h1 className={'text-5xl'}>Лучшие сериалы в подписке {">"}</h1>

            <div className="flex justify-between mt-5 mb-5">
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72 lg:w-72'}
                    imageUrl={"/fnatic.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72'}

                    imageUrl={"/lastnight.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72'}

                    imageUrl={"/queengambit.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72'}

                    imageUrl={"/lucifer.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72'}

                    imageUrl={"/beef.png"}
                />
                <VerticalCard
                    href={"#"}
                    className={"pr-4"}
                    widthClass={'w-72'}

                    imageUrl={"/xoxogossip.png"}
                />
            </div>
        </div>
    )
}

export default BestSerialsSubscription;