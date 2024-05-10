import Image from 'next/image';
import myImage from './masya.jpg';
import styles from './about.module.css';

export default function AboutPage() {
    return <article className={styles.root}>
        <Image src={myImage} alt="cat photo" className={styles.img}/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            fermentum odio. Praesent imperdiet erat at tristique ullamcorper.
            Vivamus id eros semper lorem tincidunt sagittis. Quisque volutpat
            molestie mollis. Nullam vitae ligula a velit viverra tempor at et
            ante. Quisque turpis nisl, elementum at tincidunt eget, consectetur
            vitae justo. Praesent tincidunt justo ac neque feugiat, vel pretium
            lectus hendrerit. In tristique, ipsum sit amet pharetra tempus, urna
            ligula mollis sem, id vestibulum urna nunc nec felis. Mauris leo
            nisi, pharetra ut diam ac, vulputate auctor quam. In ultrices lorem
            urna, ac dignissim massa aliquam nec. Nulla posuere eleifend nisl
            vel posuere. Vestibulum ac purus vitae ex feugiat gravida. Donec vel
            hendrerit quam, a commodo nibh. Mauris hendrerit suscipit massa, vel
            accumsan dolor ultricies ut. Nam finibus est quam, at tincidunt elit
            pellentesque eu.

            Donec et elit in ex elementum pharetra. Vestibulum sed mauris ut
            nisl vulputate malesuada et vitae nunc. Pellentesque vel tellus
            nisi. Curabitur at lacus est. Vivamus massa ante, interdum non
            auctor a, laoreet non velit. Phasellus sit amet nulla sem. Mauris
            sed interdum justo. Suspendisse malesuada elementum sapien, vitae
            laoreet nibh imperdiet nec.

            Nam at dolor tristique, aliquam magna sed, tempus diam. Vestibulum
            ullamcorper ante a tellus blandit, sollicitudin faucibus augue
            viverra. Suspendisse lobortis tincidunt elit, vitae ultrices mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin ligula eget diam sagittis, at cursus quam pulvinar.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada, nunc ac fringilla lacinia, nibh est tempus tellus, vitae
            consectetur nisl urna vitae turpis. Phasellus quis nisi laoreet
            felis euismod eleifend. Sed volutpat ac velit pellentesque bibendum.
            Morbi justo dui, hendrerit non dolor non, gravida iaculis dui.
            Suspendisse commodo metus sed auctor tristique. Ut nunc est,
            vestibulum nec sem sit amet, lacinia vestibulum nibh.
        </p>
    </article>;
}
