
const PopularFilmsBoard = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center pt-8 sm:pt-16 px-4 sm:px-0">
            <img src="/film1.png" className="w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:pr-2 md:pr-5 rounded-3xl" alt="Popular film 1" />
            <img src="/film2.png" className="w-full sm:w-1/2 h-auto sm:pl-2 md:pl-5 rounded-3xl" alt="Popular film 2" />
        </div>
    )
}

export default PopularFilmsBoard;