import {
    forwardRef,
    type ComponentType,
    useEffect,
    useRef,
    useState,
    useImperativeHandle,
} from "react"
import { useMotionValue, useAnimate } from "framer-motion"

// Learn more: https://www.framer.com/developers/overrides/

const offset = 1000000000
const offsetSpeed = 20

export function withConstantOffset(Component): ComponentType {
    return forwardRef((props, ref) => {
        const [container, animate] = useAnimate()
        useImperativeHandle(ref, () => container.current, [])

        useEffect(() => {
            animate(
                "div",
                { backgroundPosition: `center ${-offset}px` },
                {
                    duration: offset / offsetSpeed,
                    repeat: Infinity,
                    ease: "linear",
                }
            )
        }, [])

        return <Component ref={container} {...props} />
    })
}
