import { useEffect, useRef } from "react";

export default function BlobCursor() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow effect
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      blob.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="
        fixed top-0 left-0
        w-[600px] h-[600px]
        pointer-events-none
        z-30
        rounded-full
        bg-[radial-gradient(circle_at_center,rgba(100,140,200,0.1),transparent_60%)]
        blur-3xl
      "
    />
  );
}
