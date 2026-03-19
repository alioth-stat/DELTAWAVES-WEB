import {
    forwardRef,
    type ComponentType,
    useEffect,
    useImperativeHandle,
} from "react"
import { useAnimate } from "framer-motion"

// Framer override — creates an infinite vertical background scroll effect.
// Usage: export const MyComponent = withConstantOffset(FramerComponent)
// Learn more: https://www.framer.com/developers/overrides/

const offset = 1000000000
const offsetSpeed = 20

export function withConstantOffset(Component: ComponentType<any>): ComponentType {
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
