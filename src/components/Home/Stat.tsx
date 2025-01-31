import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  stat: number;
}

const Stat = ({ stat }: Props) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const { ref, inView } = useInView({
      threshold: 0.99,
      triggerOnce: true,
  });
  

  useEffect(() => {
    if(inView) {
      let animationFrame: number;

      const duration = 1000; // total animation time in ms
      const startTime = performance.now();

      // Cubic ease-out easing function
      const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

      const animate = (time: DOMHighResTimeStamp) => {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Normalize to [0, 1]
        const easedProgress = easeOut(progress);
        const newValue = Math.floor(easedProgress * stat);

        setCurrentValue(newValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
    }
  }, [inView, stat]);

  return(
    <span ref={ref} className='stat-symbol'>{currentValue}</span>
  );
}

export default Stat;