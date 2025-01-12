import { useInView } from "react-intersection-observer";
import '../main.css';

interface Props {
    only?: boolean;
    threshold?: number;
    fillHeight?: boolean;
    children: React.ReactNode;
}

const ItemContainer = ({ only, threshold, fillHeight, children }: Props) => {
    const { ref, inView } = useInView({
        threshold: threshold ? threshold : 0.1,
        triggerOnce: true,
    });

    return(
        <div
            ref={ref}
            className={`item-container inview-container ${inView ? (only ? "only-visible" : "visible") : (only ? "only-hidden" : "hidden")}`}
            style={{minHeight: fillHeight ? '100%' : 'auto'}}    
        >
            {children}
        </div>
    )
}

export default ItemContainer;