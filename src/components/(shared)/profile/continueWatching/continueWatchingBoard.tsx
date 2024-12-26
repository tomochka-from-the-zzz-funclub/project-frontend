import HorizontalCard from "@/components/(shared)/common/horizontalCard";

interface WatchItem {
    id: string
    title: string
    imageUrl: string
    duration: string
    seasonEpisode?: string
}

const watchItems: WatchItem[] = [
    {
        id: '1',
        title: 'Одиннадцать друзей Оушена',
        imageUrl: '/oushen.png',
        duration: '01:12:01',
    },
    {
        id: '2',
        title: 'Игра престолов',
        imageUrl: '/gameofthrones.png',
        duration: '23:34',
        seasonEpisode: '3 сезон, 1 серия',
    },
    {
        id: '3',
        title: 'Триггер',
        imageUrl: '/trigger.png',
        duration: '03:58',
        seasonEpisode: '1 сезон, 2 серия',
    },
]

export default function ContinueWatching() {
    return (
        <div className="py-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Продолжить просмотр</h2>
            <div className="flex justify-between space-x-4 overflow-x-auto pb-4">
                {watchItems.map((item) => (
                    <div key={item.id} className="flex-none">
                        <HorizontalCard
                            imageUrl={item.imageUrl}
                            href={`/watch/${item.id}`}
                            className="relative"
                            widthClass="w-96"
                            heightClass="h-48"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                            <div className="absolute bottom-2 left-2 right-2">
                                <h3 className="text-lg font-semibold truncate">{item.title}</h3>
                                <p className="text-sm text-gray-300">
                                    {item.seasonEpisode && `${item.seasonEpisode} • `}
                                    {item.duration}
                                </p>
                            </div>
                        </HorizontalCard>
                    </div>
                ))}
            </div>
        </div>
    )
}