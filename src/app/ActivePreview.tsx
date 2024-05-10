'use client';
import { useEffect, useState } from 'react';
import { AppLink } from '@/app/shared/components/app-link';
import { ROUTES } from '@/app/routes';

const getLikeKey = (articleName: string) => {
    return `cat_${articleName}_like`;
};

export default function ArticlePreview({
                                           name,
                                           text
                                       }: { name: string, text: string }) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsLiked(localStorage.getItem(getLikeKey(name)) === 'liked');
    }, [name]);

    const like = (catName: string) => {
        setIsLiked((prev) => !prev);

        if(localStorage.getItem(getLikeKey(catName)) === 'liked'){
            localStorage.removeItem(getLikeKey(catName));
        } else {
            localStorage.setItem(getLikeKey(catName), 'liked');
        }
    };

    return <>
        <AppLink href={ROUTES.article(name)}>
            {text}
        </AppLink>
        <button onClick={() => like(name)}>{isLiked ? '👍' : 'Like'}</button>
    </>;
}
