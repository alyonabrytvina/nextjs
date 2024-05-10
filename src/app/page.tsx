import { getAllArticles } from '@/app/(server)/api';
import { ROUTES } from '@/app/routes';
import { AppLink } from '@/app/shared/components/app-link';
import { useState } from 'react';
import ArticlePreview from '@/app/ActivePreview';

const ARTICLES_PER_PAGE = 3;

export default async function HomePage({searchParams}: { searchParams: Record<string, string> }) {
    const {articles} = await getAllArticles();
    const page = Number.parseInt(searchParams['page']) || 1;
    const shownArticles = articles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
    const PAGE_NEXT_URL = new URLSearchParams({page: (page + 1)}).toString();

    return <>
        <h1>Cat breeds, page {page}</h1>
        <ul>
            {shownArticles.map((article, index) => {
                return (
                    <li key={index}>
                        <ArticlePreview name={article.name}
                                        text={article.header}/>
                    </li>
                );
            })
            }
        </ul>

        <AppLink href={{
            search: PAGE_NEXT_URL
        }}>
            Next
        </AppLink>
    </>;
}
