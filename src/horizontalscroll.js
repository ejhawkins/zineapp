
import React, { useRef, useState, useEffect } from 'react';

const HorizontalScroll = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const element = scrollRef.current;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // Increase the scroll speed by 2
      element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener('mousedown', onMouseDown);
    element.addEventListener('mouseup', onMouseUp);
    element.addEventListener('mousemove', onMouseMove);

    return () => {
      element.removeEventListener('mousedown', onMouseDown);
      element.removeEventListener('mouseup', onMouseUp);
      element.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging, startX, scrollLeft]); 

  return (
   
      <div className="horizontal-scroll-container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
      </div>

  );
};

export default HorizontalScroll; 
    
    