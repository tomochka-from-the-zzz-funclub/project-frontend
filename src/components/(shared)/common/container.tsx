export default function Container({children}: { children: React.ReactNode }) {
    return <div className={"w-full pl-24 pr-24 max-w-full"}>
            {children}
    </div>;
}