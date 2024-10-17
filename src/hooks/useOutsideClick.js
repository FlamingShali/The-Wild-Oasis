import { useEffect, useRef } from 'react';
     
export const useOutsideClick = (closeFn, listenCapturing = true) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) closeFn();
    };
 
    const handleEscape = (e) => {
      if (!ref.current) return;
      if (e.key === 'Escape') closeFn();
    };
 
    document.addEventListener('click', handleClick, listenCapturing);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeFn, listenCapturing]);
 
  return ref;
};