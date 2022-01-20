import { keyframes } from "@emotion/react";

export const rise = keyframes`
    0% { transform: translateY(110%) },
    0% { opacity: 0 },
    100% { transform: translateY(0%) },
    100% { opacity: 1 },
`;

export const appearFromRight = keyframes` 
    0% { transform: translateX(110%) },
    0% { opacity: 0 },
    100% { transform: translateX(0%) },
    100% { opacity: 1 },
`;
