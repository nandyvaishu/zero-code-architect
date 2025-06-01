import React from 'react';
import { X } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70"
      onClick={onClose} // Dismiss on click outside
    >
      <div
        className="relative bg-white dark:bg-gray-800 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-xl p-6 shadow-lg transform transition-all sm:w-full"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="prose dark:prose-invert max-w-none">
          {content.split('\n').map((line, i) => (
            // Render content, handling potential markdown-like headers/paragraphs
            line.startsWith('### ') ? (
              <h4 key={i} className="mt-4 mb-2 text-lg font-semibold">{line.substring(4)}</h4>
            ) : line.trim() === '' ? (
              <br key={i} /> // Add a break for empty lines
            ) : (
              <p key={i} className="mb-2">{line}</p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;