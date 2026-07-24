import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ROTATIONS = [0, -7, 7, -12, 12, -15, 15];

const ScrollStack = ({ children, className = '' }) => {
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !scrollerRef.current) return;

    // Find the parent sticky section
    const parentSection = scrollerRef.current.closest('section');
    if (!parentSection) return;

    const rect = parentSection.getBoundingClientRect();
    const totalSectionHeight = parentSection.offsetHeight - window.innerHeight;
    
    // Calculate how far we've scrolled inside the section (0 to 1)
    const scrollProgress = Math.max(0, Math.min(1, -rect.top / totalSectionHeight));

    const totalCards = cardsRef.current.length;
    // Each card gets a slice of the total scroll progress
    const segmentSize = 1 / totalCards;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const baseRotation = ROTATIONS[index % ROTATIONS.length];
      const cardStartProgress = index * segmentSize;
      const cardEndProgress = cardStartProgress + segmentSize;

      let translateY = 0;
      let opacity = 1;
      let rotation = baseRotation;
      let scale = 1 - index * 0.02;

      if (scrollProgress > cardStartProgress) {
        // Individual progress for this card (0 to 1)
        const cardProgress = Math.min(
          1,
          (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)
        );

        // Card flies up and fades out
        translateY = -cardProgress * window.innerHeight * 0.8;
        rotation = baseRotation + cardProgress * (index % 2 === 0 ? -15 : 15);
        opacity = 1 - Math.pow(cardProgress, 2);
        scale = scale + cardProgress * 0.05;
      }

      const transform = `translate3d(0px, ${Math.round(translateY)}px, 0px) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(1)}deg)`;

      card.style.transform = transform;
      card.style.webkitTransform = transform;
      card.style.opacity = opacity.toFixed(2);
      card.style.zIndex = totalCards - index;
    });
  }, []);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.willChange = 'transform, opacity';
      card.style.transformOrigin = 'center center';
      card.style.backfaceVisibility = 'hidden';
      card.style.webkitBackfaceVisibility = 'hidden';
    });

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);

    const handleResize = () => {
      updateCardTransforms();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      window.removeEventListener('resize', handleResize);
      cardsRef.current = [];
    };
  }, [updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-deck">{children}</div>
    </div>
  );
};

export default ScrollStack;