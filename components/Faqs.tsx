'use client'

import React, { useState } from 'react';
import { FaqItem } from '../constants';

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter(i => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">{faq.question}</h3>
                <button
                  className="focus:outline-none text-blue-600 hover:text-blue-800 text-4xl "
                  onClick={() => toggleAnswer(index)}
                >
                  {expandedIndexes.includes(index) ? '-' : '+'}
                </button>
              </div>
              {expandedIndexes.includes(index) && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
