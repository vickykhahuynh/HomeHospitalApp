import React, { useRef, useEffect } from 'react';
import Tree from './Tree.svelte';

export const SvelteWrapper: React.FC<{ name: string }> = ({ name }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let svelteComponent: any = null;

    if (containerRef.current) {
      svelteComponent = new Tree({
        target: containerRef.current,
        props: {
          name,
        },
      });
    }

    return () => {
      if (svelteComponent && typeof svelteComponent.$destroy === 'function') {
        svelteComponent.$destroy();
      }
    };
  }, [name]);

  return <div ref={containerRef}></div>;
};
