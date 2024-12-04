import { useInView } from "react-intersection-observer";
import '../main.css';

interface Props {
    only?: boolean;
    children: React.ReactNode;
}

const ItemContainer = ({ only, children }: Props) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <div
            ref={ref}
            className={`item-container inview-container ${inView ? (only ? "only-visible" : "visible") : (only ? "only-hidden" : "hidden")}`}
            >
            {children}
        </div>
    )
}

export default ItemContainer;