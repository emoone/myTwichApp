import { RefObject, useEffect } from 'react';

interface PropTypes {
  threshold?: number;
  root?: any;
  rootMargin?: string;
  targetRef: RefObject<any>;
}

/**
 * Intersectionobserver 이용한 InfinitiScroll 구현
 * 재사용 목적으로 hook 구현
 * ref정보를 외부에서 받아 오는방식으로 구현 함
 * callback 함수로 필요 동작 실행
 * https://heropy.blog/2019/10/27/intersection-observer/
 *
 * @param callback: () => void
 * @param threshold:
 * @param root
 * @param rootMargin
 * @returns targetRef: RefObject
 */
const useIntersectionObserver = (callback: () => void, props: PropTypes) => {
  const { threshold = 0, root = null, rootMargin = '0%', targetRef } = props;

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // 옵션 설명
          // isIntersecting 관찰 대상의 교차 상태(Boolean)
          // boundingClientRect 관찰 대상의 사각형 정보(DOMRectReadOnly) = ref걸린 button
          // intersectionRect 관찰 대상의 교차한 영역 정보(DOMRectReadOnly)
          // intersectionRatio 관찰 대상의 교차한 영역 백분율(intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
          // rootBounds  지정한 루트 요소의 사각형 정보(DOMRectReadOnly)
          // target  관찰 대상 요소(Element)
          // time 변경이 발생한 시간 정보(DOMHighResTimeStamp)
          if (entry.isIntersecting) {
            return callback();
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(targetRef.current);

    return () => {
      // observer.unobserve(targetRef.current);
      observer.disconnect();
    };
  }, [targetRef, callback]);
};

export default useIntersectionObserver;
