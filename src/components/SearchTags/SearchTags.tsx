import React, { useState, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { getCategories } from '../../api';
import useProductStore from '../../store/productStore';

function SearchTags() {
  const { products, filterProducts } = useProductStore();
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    suspense: true,
  });

  const [tags, setTags] = useState({
    elecronics: false,
    jewelery: false,
    "men's clothing": false,
    "women's clothing": false,
  });

  const checkedTags = Object.keys(tags).filter((key) => tags[key]);

  useEffect(() => {
    filterProducts(
      products.filter((product) => checkedTags.includes(product.category)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  return (
    <div className="flex flex-row justify-between md:justify-start md:gap-4">
      {categories?.map((category, index) => (
        <motion.label
          key={index}
          whileTap={{ scale: 0.9 }}
          className={`flex h-8 flex-col items-center justify-center rounded-sm hover:cursor-pointer ${
            tags[category]
              ? 'bg-black text-white hover:bg-slate-950'
              : 'bg-white text-black hover:bg-slate-50'
          }`}
          htmlFor={category}
        >
          <p className="p-2 text-[0.7rem] md:p-3 md:text-base">{category}</p>
          <input
            className="hidden"
            type="checkbox"
            role="searchbox"
            onChange={({ target }) => {
              setTags((prevState) => ({
                ...prevState,
                [target.id]: !prevState[target.id],
              }));
            }}
            id={category}
          />
        </motion.label>
      ))}
    </div>
  );
}

export default memo(SearchTags);
