import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';

type SearchTagsProps = {
  categories: Array<string>;
};

function SearchTags({ categories }: SearchTagsProps) {
  const [checkedTags, setCheckedTags] = useState({
    elecronics: false,
    jewelery: false,
    "men's clothing": false,
    "women's clothing": false,
  });

  return (
    <div className="flex flex-row gap-4 rounded-sm">
      {categories?.map((category, index) => (
        <motion.label
          key={index}
          whileTap={{ scale: 0.8 }}
          className={`flex h-9 flex-col items-center justify-center rounded-md p-4 hover:cursor-pointer ${
            checkedTags[category]
              ? 'bg-black text-white hover:bg-slate-950'
              : 'bg-white text-black hover:bg-slate-50'
          }`}
          htmlFor={category}
        >
          {category}
          <input
            className="hidden"
            role="searchbox"
            type="checkbox"
            onChange={({ target }) =>
              setCheckedTags((prevState) => ({
                ...prevState,
                [target.id]: !prevState[target.id],
              }))
            }
            id={category}
          />
        </motion.label>
      ))}
    </div>
  );
}

export default memo(SearchTags);
