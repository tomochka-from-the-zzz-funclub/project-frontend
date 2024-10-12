import React from 'react';
import Link from 'next/link';
import {cn} from "@/lib/utils";

interface HorizontalCardProps {
    imageUrl: string;
    href: string;
    onClick?: () => void;
    className?: string;
    heightClass?: string;
    widthClass?: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
                                                           imageUrl,
                                                           href,
                                                           onClick,
                                                           className,
                                                           widthClass = 'min-w-96',
                                                           heightClass = 'h-60 md:h-64 lg:h-96',
                                                       }) => {
    const CardContent = (
        <div
            onClick={onClick}
            className={cn(
                'relative flex flex-col justify-end p-4 bg-cover  bg-center rounded-lg shadow-md cursor-pointer',
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

export default HorizontalCard;