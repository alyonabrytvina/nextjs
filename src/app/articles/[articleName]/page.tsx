import { getArticleByName } from '@/app/(server)/api';
import Image from 'next/image';

export default async function ArticlePage({params}: Params) {
    const { articleName } = params;
    const article = await getArticleByName(articleName);

    return <>
        <h1>{article.header}</h1>
        <Image src={article.preview.src} width={article.preview.width} height={article.preview.height} alt="cat photo" />
        <p>{article.text}</p>
    </>;
}
