'use client'
import {Input} from "@/components/ui/input";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter()

    return <header className={"flex flex-wrap items-center justify-between space-x-2"}>
        <div className={"space-x-0.5"}>
            <svg width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M33.0304 1.58523C29.8318 2.43384 26.6985 4.94702 24.4464 8.50464C23.6957 9.67963 23.4999 9.84282 23.4999 9.28797C23.4999 8.63519 23.3367 8.56991 21.8679 8.56991H20.236V15.5872V22.6046H21.8353H23.402L23.6304 20.483C24.2832 14.1185 28.0693 7.49284 32.3123 5.30604C35.2172 3.80466 39.4602 4.55535 42.0713 7.03589C43.6706 8.56991 45.4331 11.3116 48.2074 16.5011C53.2664 26.0316 56.5302 29.1649 62.1767 29.9156C66.4524 30.5031 71.1198 27.9899 74.2857 23.3879C75.1343 22.1803 75.5913 21.7233 75.6565 22.0823C75.7544 22.474 76.1461 22.6046 77.3864 22.6046H78.9857V15.5872V8.56991H77.3537H75.7218V9.81018C75.7218 11.8664 74.5142 16.0442 73.0781 18.949C70.5975 24.0407 66.3545 27.2066 62.7316 26.717C58.2275 26.1295 55.7469 23.6164 51.3407 15.3261C48.1095 9.25533 46.3796 6.67687 44.2255 4.71855C42.1692 2.8255 40.3088 1.84634 37.8935 1.3894C35.7067 0.965094 35.1519 0.997732 33.0304 1.58523ZM13.0555 1.38931C12.6965 1.74834 12.4027 2.40111 12.4027 2.85805C12.4027 3.83722 13.5777 4.97957 14.5895 4.97957C15.5687 4.97957 16.6457 3.86985 16.6457 2.85805C16.6457 2.40111 16.352 1.74834 15.993 1.38931C15.6339 1.03029 14.9812 0.736538 14.5242 0.736538C14.0673 0.736538 13.4145 1.03029 13.0555 1.38931ZM1.04444 13.7267C0.391665 12.0295 1.04444 10.0059 2.57846 8.99411C4.53678 7.68856 7.40899 8.17814 8.61662 10.0059C8.91037 10.4629 9.13884 10.8872 9.13884 10.9524C9.13884 11.0177 8.55134 11.3441 7.83329 11.6705C6.59302 12.2253 6.4951 12.2253 5.90761 11.7031C5.09164 10.9524 4.11248 11.1483 3.98192 12.0622C3.88401 12.6496 4.24303 12.976 6.10344 13.9226C9.17148 15.4566 9.95481 16.3705 9.95481 18.3614C9.95481 20.2218 9.17148 21.4947 7.47427 22.3433C5.059 23.5836 2.0236 22.8003 0.652774 20.5809L0 19.5038L1.33819 18.9163L2.64374 18.3288L3.42706 19.1448C4.73261 20.5809 6.6583 20.1566 6.46247 18.492C6.36455 17.676 6.00552 17.3496 3.91665 16.2399C1.89305 15.1628 1.40346 14.7385 1.04444 13.7267ZM85.3176 8.53734C83.9794 9.12484 82.9023 10.7894 82.9023 12.3234C82.9023 14.1186 83.6857 15.0977 86.2968 16.5012C87.3738 17.0887 88.3856 17.8067 88.5815 18.1005C89.1037 18.9491 88.4509 19.7977 87.2433 19.9283C86.4599 19.9935 86.0683 19.8303 85.5461 19.1449L84.8606 18.2637L83.5551 18.8512C82.837 19.1776 82.2495 19.5692 82.2495 19.7324C82.2495 20.4505 83.7183 22.0498 84.7301 22.4741C88.1898 23.9102 91.6821 22.0498 91.9759 18.6227C92.1391 16.4033 91.5189 15.5873 88.712 14.2165C86.1988 12.9762 85.5787 12.3887 86.1662 11.6707C86.7211 11.0179 87.3738 11.0505 88.0266 11.8012C88.5488 12.4214 88.5815 12.4214 89.8217 11.8012C90.5071 11.4422 91.062 11.0179 91.062 10.8547C91.062 10.6915 90.6377 10.0714 90.1481 9.51651C89.3974 8.6679 88.9405 8.47207 87.6023 8.37415C86.7211 8.30887 85.7093 8.37415 85.3176 8.53734ZM12.7291 22.6045V15.5872V8.56985H14.361H15.993V15.5872V22.6045H14.361H12.7291Z"
                      fill="#9C2328"/>
            </svg>

        </div>
        <nav className="flex space-x-6 text-gray-300 text-2xl">
            <Link href={"/"} className={"hover:text-white transition ease-in"}>Главная</Link>
            <Link href={"/favourites"} className={"hover:text-white transition ease-in"}>Избранное</Link>
            <Link href={"#"} className={"hover:text-white transition ease-in"}>Студия</Link>
            <Link href={"#"} className={"hover:text-white transition ease-in"}>Подписки</Link>
        </nav>
        <div className="flex items-center space-x-2">
            <NeonGradientCard borderRadius={60} className="flex items-center w-1/2 ">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <div className="relative">
                        <div className="w-12 h-6 bg-gray-600 rounded-full shadow-inner"></div>
                        <div
                            className={`absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-[#ff2975] to-[#00FFF1] rounded-full shadow transform transition-transform duration-300 ${
                                isChecked ? "translate-x-6" : "translate-x-0"
                            }`}
                        ></div>
                    </div>
                    <span className="ml-4 text-white text-xl">Умный поиск</span>
                </label>
            </NeonGradientCard>

            <div className="relative w-64">
                <Input type="text" placeholder="Поиск"
                       className="bg-gray-800 text-gray-300 rounded-full px-4 py-1 pl-10 focus:outline-none"/>
                <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                     fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M12.9 14.32a8 8 0 111.42-1.42l4.61 4.62-1.42 1.42-4.61-4.62zM8 14A6 6 0 108 2a6 6 0 000 12z"
                          clip-rule="evenodd"/>
                </svg>
            </div>

            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700">
                <button
                    onClick={() => {
                        router.push("/profile")
                    }}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 focus:outline-none"
                    aria-label={"Профиль"}
                >
                    <svg
                        className="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
}