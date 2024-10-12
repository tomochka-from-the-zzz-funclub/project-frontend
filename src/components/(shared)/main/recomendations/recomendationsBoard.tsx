import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Button} from "@/components/ui/button";
import {CalendarDays} from "lucide-react";
import HorizontalCard from "@/components/(shared)/common/horizontalCard";

const RecomendationsBoard = () => {
    return (
        <div
            className={'bg-[url("/background.png")] bg-cover bg-red-800 bg-center  align-baseline rounded-xl pt-5 pl-8 pr-8 pb-5 mt-24'}
        >
            <div>
                <span className={"text-4xl text-white"}>Сгенерировано на основе ваших интересов</span>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button
                            className={"rounded-3xl ml-6 text-xl bg-[#222222] hover:bg-gray-900 shadow-2xl text-white"}
                            style={{
                                boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
                            }
                            }>Как это
                            работает?</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">SIRIUS</h4>
                                <p className="text-sm">
                                    Уникальное решение для вашего комфорта
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                    <span className="text-xs text-muted-foreground">
                На основе ваших интересов и опыта пользователей с помощью искуственного интеллекта мы подбиарем лучшие варианты для вас
              </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <div className={"flex justify-between pt-14"}>
                    <HorizontalCard
                        imageUrl={"/you.png"}
                        className={"w-[40rem] h-[30rem]"}
                        href={"#"}
                    />
                    <HorizontalCard
                        imageUrl={"/euphoria.png"}
                        className={"w-[40rem]"}
                        href={"#"}
                    />
                    <HorizontalCard
                        imageUrl={"/dune.png"}
                        className={"w-[40rem]"}
                        href={"#"}
                    />
                </div>
            </div>
        </div>
    );
}
export default RecomendationsBoard