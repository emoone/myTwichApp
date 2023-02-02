import { Ref, RefObject, useEffect, useRef, useState } from 'react';

interface PropTypes {
  threshold?: number;
  root?: any;
  rootMargin?: string;
  handleIntersect: IntersectionObserverCallback;
  isMounted?: boolean;
}

/**
 * Intersectionobserver 이용한 InfinitiScroll 구현
 * https://heropy.blog/2019/10/27/intersection-observer/
 *
 * @param callback: handleIntersect()
 * @param threshold
 * @param root
 * @param rootMargin
 * @param isMounted
 * @param isIntersecting 관찰 대상의 교차 상태(Boolean)
 * @param boundingClientRect 관찰 대상의 사각형 정보(DOMRectReadOnly) = ref걸린 button
 * @param intersectionRect 관찰 대상의 교차한 영역 정보(DOMRectReadOnly)
 * @param intersectionRatio 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
 * @param rootBounds  지정한 루트 요소의 사각형 정보(DOMRectReadOnly)
 * @param target  관찰 대상 요소(Element)
 * @param time 변경이 발생한 시간 정보(DOMHighResTimeStamp)
 * @returns setTaget
 */
const useIntersectionObserver = (props: PropTypes) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    handleIntersect,
  } = props;
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(handleIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [target, threshold, root, rootMargin, handleIntersect]);

  return [setTarget];
};

export default useIntersectionObserver;
