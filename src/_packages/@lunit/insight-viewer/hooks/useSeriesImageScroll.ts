import { CornerstoneSequenceImage } from '@lunit/insight-viewer';
import { useEffect } from 'react';

interface SeriesImageScrollParams {
  image: CornerstoneSequenceImage;

  /** Wheel Event를 처리할 EventTarget */
  element: HTMLElement | null;

  /** User Interaction 활성화 여부 */
  enabled?: boolean;

  /** Touch Direction */
  touchDirection?: 'horizontal' | 'vertical';
}

export function useSeriesImageScroll({
  image,
  element,
  enabled = true,
  touchDirection = 'horizontal',
}: SeriesImageScrollParams) {
  useEffect(() => {
    if (!element || enabled !== true) {
      return () => {};
    }

    function wheel(event: WheelEvent) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (event.deltaY > 0) {
        image.prev();
      } else if (event.deltaY < 0) {
        image.next();
      }
    }

    let startPoint: { x: number; y: number } | null = null;

    function touchStart(event: TouchEvent) {
      if (event.targetTouches.length !== 2) return;

      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();

      startPoint = {
        x: event.targetTouches[0].pageX,
        y: event.targetTouches[0].pageY,
      };

      if (!element) {
        throw new Error(`undefined element!!!`);
      }

      element.removeEventListener('touchstart', touchStart);

      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchEnd);
      element.addEventListener('touchcancel', touchEnd);
    }

    function touchMove(event: TouchEvent) {
      if (event.targetTouches.length !== 2 || event.changedTouches.length !== 2 || !startPoint) return;

      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();

      const dx: number = event.targetTouches[0].pageX - startPoint.x;
      const dy: number = event.targetTouches[0].pageY - startPoint.y;
      const d: number = touchDirection === 'vertical' ? dy : dx;

      image.goto(image.getIndex() + d / 100);
    }

    function touchEnd(event: TouchEvent) {
      if (!element) {
        throw new Error(`undefined element!!!`);
      }

      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
      element.removeEventListener('touchcancel', touchEnd);

      element.addEventListener('touchstart', touchStart);
    }

    element.addEventListener('wheel', wheel);
    element.addEventListener('touchstart', touchStart);

    return () => {
      element.removeEventListener('wheel', wheel);

      element.removeEventListener('touchstart', touchStart);

      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchEnd);
      element.removeEventListener('touchcancel', touchEnd);
    };
  }, [image, element, enabled, touchDirection]);
}

/** @deprecated use useSeriesImageScroll */
export const useBulkImageScroll = useSeriesImageScroll;
