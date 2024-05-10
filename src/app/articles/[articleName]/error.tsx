"use client"
import notFoundCat from './not-found-cat.png';
import Image from 'next/image';

export default function ErrorPage(){
    return <Image src={notFoundCat} alt="Not Found Cat" />
}
