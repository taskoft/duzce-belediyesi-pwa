import { useEffect, useRef, useState, type CSSProperties } from "react";

interface ExpandableTextProps {
  text: string;
  clampLines?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
}

export function ExpandableText({
  text,
  clampLines = 3,
  className = "",
  moreLabel = "Devamını oku",
  lessLabel = "Daha az göster",
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClampable, setIsClampable] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element || isExpanded) {
      return;
    }
    // Only the collapsed state reveals hidden overflow; keep the toggle once we know it clamps.
    setIsClampable(element.scrollHeight > element.clientHeight + 1);
  }, [text, clampLines, isExpanded]);

  const clampStyle: CSSProperties | undefined = isExpanded
    ? undefined
    : {
        display: "-webkit-box",
        WebkitLineClamp: clampLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      };

  return (
    <div>
      <p ref={textRef} className={className} style={clampStyle}>
        {text}
      </p>
      {(isClampable || isExpanded) && (
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={(event) => {
            event.stopPropagation();
            setIsExpanded((previous) => !previous);
          }}
          className="font-label-sm text-label-sm mt-1 text-primary transition-colors hover:text-primary/80"
        >
          {isExpanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
