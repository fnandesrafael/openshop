import React from 'react';
import { motion } from 'framer-motion';

type SearchTagsProps = {
  categories: Array<string>;
};

export default function SearchTags({ categories }: SearchTagsProps) {
  return (
    <div className="flex flex-row gap-4 rounded-sm">
      {categories?.map((category, index) => (
        <motion.label
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: index / 100 } }}
          className="flex h-6 flex-col items-center justify-center rounded-sm bg-white p-4 hover:cursor-pointer hover:bg-slate-50"
          htmlFor={category}
        >
          {category}
          <input
            className="hidden"
            role="searchbox"
            type="checkbox"
            id={category}
          />
        </motion.label>
      ))}
    </div>
  );
}
