"use client";

import { useRef, type ComponentPropsWithRef } from "react";

/** Native modal semantics retain Escape, focus trapping and focus restoration. */
export default function DismissibleDialog({ onPointerDown, onClick, onClose, ...props }: ComponentPropsWithRef<"dialog">) {
  const beganOnBackdrop = useRef(false);
  return <dialog {...props}
    onPointerDown={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      beganOnBackdrop.current = event.target === event.currentTarget &&
        (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom);
      onPointerDown?.(event);
    }}
    onClick={(event) => {
      onClick?.(event);
      const bounds = event.currentTarget.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (!event.defaultPrevented && beganOnBackdrop.current && outside && event.target === event.currentTarget) event.currentTarget.close();
      beganOnBackdrop.current = false;
    }}
    onClose={(event) => { beganOnBackdrop.current = false; onClose?.(event); }}
  />;
}
