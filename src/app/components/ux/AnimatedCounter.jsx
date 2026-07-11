"use client";
import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCounter
 *
 * Props:
 *  - target   {number}   Final numeric value (required)
 *  - duration {number}   Animation duration in ms (default: 1800)
 *  - prefix   {string}   Text before the number, e.g. "₹"
 *  - suffix   {string}   Text after the number, e.g. "+", "%", "x", "k"
 *  - decimals {number}   Decimal places (default: 0)
 *  - className {string}  Extra classes for the outer span
 */
export function AnimatedCounter({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target}${suffix}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
