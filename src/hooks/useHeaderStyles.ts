import { useScroll, useTransform } from 'framer-motion';

const useHeaderStyles = () => {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.01],
    ['transparent', '#e5e7eb'],
  );
  const textColor = useTransform(scrollYProgress, [0, 0.01], ['#fff', '#000']);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.01],
    ['none', '0 1px 2px 0 rgb(0 0 0 / 0.05)'],
  );

  return { backgroundColor, textColor, boxShadow };
};

export default useHeaderStyles;
