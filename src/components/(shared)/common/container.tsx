import {Card, CardContent} from "@/components/ui/card";

export default function Container({children}: { children: React.ReactNode }) {
    return <Card className={"w-full m-5 "}>
        <CardContent>
            {children}
        </CardContent>
    </Card>;
}