import { useInView } from "react-intersection-observer";
import '../main.css';

interface Props {
    only?: boolean;
    threshold?: number;
    fillHeight?: boolean;
    anim: string;
    anim2?: string;
    children: React.ReactNode;
    time: string;
}

const ItemContainer = ({ threshold, fillHeight, time, anim, anim2, children }: Props) => {
    const { ref, inView } = useInView({
        threshold: threshold ? threshold : 0.1,
        triggerOnce: true,
    });

    return(
        <div
            ref={ref}
            className={`item-container inview-container-${time} inview-container-${anim} ${anim2? `inview-container-${anim2}` : ''} ${inView ? "visible" : "hidden"}`}
            style={{minHeight: fillHeight ? '100%' : 'auto'}}    
        >
            {children}
        </div>
    )
}

export default ItemContainer;