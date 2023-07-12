import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import clamp from "lodash/clamp";
import range from "lodash/range";

export const ImagesSlider = ({ images }) => {
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(0);

  const carousel = useRef();

  const dragEndHandler = (event, info) => {
    const offset = info.offset.x;
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1;
      setActive((active) => clamp(active + direction, 0, images.length - 1));
    }
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div className="cursor-grab overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        onDragEnd={dragEndHandler}
        // animate={{
        //   x: -1 * active * width,
        // }}
        className="flex"
      >
        {images.map(({ image, id }) => {
          return (
            <motion.div
              key={id}
              className="radius-md w-40 first-line:h-full min-w-full min-h-full"
            >
              <img
                key={image}
                className="rounded-md w-4/5 h-96 object-cover"
                src={image}
                alt="slider image"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

/*
TODO: Best styles

 <motion.div
              key={id}
              className="radius-md w-40 h-2/4 min-w-full min-h-full"
            >
              <img
                key={image}
                className="rounded-md w-4/5 h-2/4 object-cover"
                src={image}
                alt="slider image"
              />
            </motion.div>


*/
