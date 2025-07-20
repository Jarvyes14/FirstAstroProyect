import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

export default function MasonryGrid({ children }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const masonry = new Masonry(gridRef.current, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-sizer',
      percentPosition: true,
      gutter: 100,
    });
    return () => masonry.destroy();
  }, []);

  return (
    <div ref={gridRef} className="masonry-grid">
      <div className="masonry-sizer"></div>
      {children}
    </div>
  );
}

