import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const titleAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(90px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`

const cardAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`

export const TitleAnimation = ({ children }) => {
    return <Reveal keyframes={titleAnimation} triggerOnce>{children}</Reveal>
}

export const CardAnimation = ({ children }) => {
    return <Reveal cascade duration={1500} damping={0.3} keyframes={cardAnimation}>{children}</Reveal>
}

export const ShowUpAnimation = ({ children }) => {
    return <Reveal duration={1500} delay={500} keyframes={cardAnimation}>{children}</Reveal>
}