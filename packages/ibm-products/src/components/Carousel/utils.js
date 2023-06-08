/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export const useIntersection = (element, threshold) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const el = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { threshold }
    );

    el && observer.observe(el);

    return () => observer.unobserve(el);
  }, [element, threshold]);

  return isVisible;
};

export const useIsOverflow = (ref) => {
  const [isScrollable, setIsScrollable] = useState();
  const [mutationObserver, setMutationObserver] = useState();
  const [resizeObserver, setResizeObserver] = useState();

  const checkOverflow = useCallback(() => {
    if (!ref.current) {
      return;
    }
    const hasOverflow = ref.current.scrollWidth > ref.current.clientWidth;
    setIsScrollable(hasOverflow);
  }, [ref]);

  useEffect(() => {
    if (!mutationObserver) {
      return;
    }

    return () => {
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });

  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      if ('ResizeObserver' in window && !resizeObserver) {
        setResizeObserver(new ResizeObserver(checkOverflow).observe(current));
      }
      if ('MutationObserver' in window && !mutationObserver) {
        setMutationObserver(
          new MutationObserver(checkOverflow).observe(current, {
            attributes: false,
            childList: true,
            subtree: false,
          })
        );
      }
      checkOverflow();
    }
  }, [ref, checkOverflow, mutationObserver, resizeObserver]);

  return isScrollable;
};

export const useWindowEvent = (eventName, callback) => {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function handler(event) {
      if (savedCallback.current) {
        savedCallback.current(event);
      }
    }

    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName]);
};
