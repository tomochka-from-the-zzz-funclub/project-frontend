export default function Container({children}: { children: React.ReactNode }) {
    return <div className={"w-full ml-10 mr-10  mt-2 max-w-full"}>
            {children}
    </div>;
}