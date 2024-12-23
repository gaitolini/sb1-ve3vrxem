import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleTextProps {
  text: string;
  maxLength?: number;
}

const CollapsibleText: React.FC<CollapsibleTextProps> = ({ text, maxLength = 200 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  
  const truncatedText = shouldTruncate && !isExpanded 
    ? text.slice(0, maxLength) + '...'
    : text;

  if (!shouldTruncate) return <div className="whitespace-pre-line">{text}</div>;

  return (
    <div>
      <div className="whitespace-pre-line">{truncatedText}</div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
      >
        {isExpanded ? (
          <>
            Ver menos
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Ver mais
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  );
};

export default CollapsibleText;