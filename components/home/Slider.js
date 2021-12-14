import { useState } from "react";
import Image from "next/image";

import { Carousel } from "react-bootstrap";

import styles from "../../styles/components/Slider.module.css";

const items = [
    {
        src: require("../../public/images/slider1.jpg"),
        altText: "Slide 1",
        caption: "Slide 1",
    },
    {
        src: require("../../public/images/slider2.jpg"),
        altText: "Slide 2",
        caption: "Slide 2",
    },
    {
        src: require("../../public/images/slider3.jpg"),
        altText: "Slide 3",
        caption: "Slide 3",
    },
];

export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}  variant="dark">
            {items.map((item) => (
                <Carousel.Item className={styles.carousel_item}>
                        <Image src={item.src} layout='fill' alt={item.altText} />

                        <Carousel.Caption>
                            <h3>{item.altText}</h3>
                            <p>{item.caption}</p>
                        </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
                        // <Image src={item.src} layout='fill' alt={item.altText} />
