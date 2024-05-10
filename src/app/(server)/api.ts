import articles from './db.json';
import { delayed } from '@/app/(server)/delayed';

export function getAllArticles() {
    return delayed(articles, {shouldFail: false, timeout: 500});
}

export function getArticleByName(articleName: string) {
    const {articles: articlesArr} = articles;
    // todo: create helper for detailed comparing
    const article = articlesArr?.find(({name}) => name === articleName);

    if (!article) {
        throw new Error('Not Found!');
    }
    return article;
}
