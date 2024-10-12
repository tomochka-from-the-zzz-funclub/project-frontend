// components/VerticalCard.tsx

import React from 'react';
import Link from 'next/link';
import {cn} from "@/lib/utils";

interface VerticalCardProps {
    imageUrl: string;
    href: string;
    onClick?: () => void;
    className?: string;
    heightClass?: string;
    widthClass?: string;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
                                                       imageUrl,
                                                       href,
                                                       onClick,
                                                       className,
                                                       heightClass = 'h-64 md:h-80 lg:h-96',
                                                       widthClass = 'w-48 md:w-60 lg:w-64',
                                                   }) => {
    const CardContent = (
        <div
            onClick={onClick}
            className={cn(
                'relative flex flex-col justify-end p-4 bg-cover bg-center rounded-lg shadow-md cursor-pointer',
                heightClass,
                widthClass,
                className
            )}
            style={{backgroundImage: `url(${imageUrl})`}}
        >
        </div>
    );

    return href ? (
        <Link href={href}>
            {CardContent}
        </Link>
    ) : (
        CardContent
    );
};

export default VerticalCard;