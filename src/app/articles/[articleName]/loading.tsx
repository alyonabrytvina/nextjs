import Image from 'next/image';
import loadingCat from './loading-cat.png';

export default function Loading() {
    return <Image src={loadingCat} alt="Loading cat"/>;
}
