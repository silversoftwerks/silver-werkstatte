import { useState, useCallback, useLayoutEffect } from "react";
const breakPoints = {
  sm: 768,
  md: 1024,
  lg: 1400
};

const isPhone = ({ width }) => width < breakPoints.sm;
const isDesktop = ({ width }) => width > breakPoints.lg;
const screen = ({ width }) => ({
  phone: isPhone({ width }),
  tablet: !isDesktop({ width }) && !isPhone({ width }),
  desktop: isDesktop({ width })
});
const getDimensionObject = ({ node }) => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
};
export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);
  const ref = useCallback(node => {
    setNode(node);
  }, []);
  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(screen(getDimensionObject({ node })))
        );
      measure();
      window.addEventListener("load", measure);
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
      return () => {
        window.removeEventListener("load", measure);
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      };
    }
  }, [node]);

  return [ref, dimensions, node];
};
const useScreens = () => useDimensions();
