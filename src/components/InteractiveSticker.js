import React, { useState, useEffect, useRef } from 'react';

const InteractiveSticker = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [status, setStatus] = useState("idle"); // "idle" | "running" | "sleeping" | "reacting"
  
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const sleepTimer = useRef(null);
  const reactionTimer = useRef(null);

  const resetSleepTimer = () => {
    if (sleepTimer.current) clearTimeout(sleepTimer.current);
    if (status !== 'running' && status !== 'reacting') {
      sleepTimer.current = setTimeout(() => {
        setStatus("sleeping");
      }, 5000);
    }
  };

  useEffect(() => {
    // Initial position on mount (bottom right corner)
    setPosition({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
    resetSleepTimer();

    return () => {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
      if (reactionTimer.current) clearTimeout(reactionTimer.current);
    };
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      resetSleepTimer();
    } else {
      if (sleepTimer.current) clearTimeout(sleepTimer.current);
    }
  }, [status]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      let newX = e.clientX - dragOffset.current.x;
      let newY = e.clientY - dragOffset.current.y;
      
      // Keep within bounds (assuming ~80px width/height for the sticker)
      newX = Math.max(0, Math.min(newX, window.innerWidth - 80));
      newY = Math.max(0, Math.min(newY, window.innerHeight - 80));
      
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = (e) => {
      if (isDragging.current) {
        isDragging.current = false;
        
        // Check if it was a click or a drag
        const dx = e.clientX - dragStartPos.current.x;
        const dy = e.clientY - dragStartPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) {
          // It was a click
          triggerReaction();
        } else {
          // Finished dragging
          setStatus("idle");
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault(); // prevent text selection
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY
    };
    setStatus("running");
  };

  const triggerReaction = () => {
    setStatus("reacting");
    if (reactionTimer.current) clearTimeout(reactionTimer.current);
    reactionTimer.current = setTimeout(() => {
      setStatus("idle");
    }, 2000);
  };

  const getEmoji = () => {
    switch (status) {
      case "running": return "🐒💨";
      case "sleeping": return "💤🐒";
      case "reacting": return "🐵✨";
      case "idle":
      default: return "🐒";
    }
  };

  return (
    <div 
      className="interactive-sticker-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: 'transform',
        cursor: isDragging.current ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className={`interactive-sticker ${status}`}>
        {getEmoji()}
      </div>
    </div>
  );
};

export default InteractiveSticker;
