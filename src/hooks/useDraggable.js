import { useRef, useState } from 'react';

export default function useDraggable(initialPosition) {
  const windowRef = useRef(null);

  const [position, setPosition] = useState(initialPosition);
  const dragState = useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  });

  const onMouseDown = (event) => {
    if (!windowRef.current) return;

    const rect = windowRef.current.getBoundingClientRect();

    dragState.current = {
      isDragging: true,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    event.preventDefault();
  };

  const onMouseMove = (event) => {
    if (!dragState.current.isDragging) return;

    setPosition({
      left: event.clientX - dragState.current.offsetX,
      top: event.clientY - dragState.current.offsetY,
    });
  };

  const onMouseUp = () => {
    dragState.current.isDragging = false;

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  return {
    windowRef,
    position,
    onMouseDown,
  };
}