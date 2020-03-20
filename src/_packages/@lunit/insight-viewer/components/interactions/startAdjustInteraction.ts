interface AdjustInteractionParams {
  element: HTMLElement;
  getCurrentViewport: () => cornerstone.Viewport | null;
  onMove: (voi: cornerstone.VOI) => void;
  onEnd: () => void;
  contentWindow: Window;
}

export function startAdjustInteraction({
  element,
  getCurrentViewport,
  onMove,
  onEnd,
  contentWindow,
}: AdjustInteractionParams): () => void {
  let startPageX: number;
  let startPageY: number;
  let startWindowCenter: number;
  let startWindowWidth: number;

  function start(event: MouseEvent) {
    if (event.button !== 0) return;

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    const viewport = getCurrentViewport();
    if (!viewport) return;

    element.removeEventListener('mousedown', this.onAdjustStart);

    startPageX = event.pageX;
    startPageY = event.pageY;
    startWindowCenter = viewport.voi.windowCenter;
    startWindowWidth = viewport.voi.windowWidth;

    contentWindow.addEventListener('mousemove', move);
    contentWindow.addEventListener('mouseup', end);
    element.addEventListener('mouseleave', end);
  }

  function move(event: MouseEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    const dx: number = event.pageX - startPageX;
    const dy: number = event.pageY - startPageY;

    onMove({
      windowWidth: Math.max(startWindowWidth + dx, 1),
      windowCenter: Math.max(startWindowCenter + dy, 1),
    });
  }

  function end(event: MouseEvent) {
    if (event.button !== 0) return;

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    contentWindow.removeEventListener('mousemove', move);
    contentWindow.removeEventListener('mouseup', end);
    element.removeEventListener('mouseleave', end);

    element.addEventListener('mousedown', start);

    onEnd();
  }

  element.addEventListener('mousedown', start);

  return () => {
    element.removeEventListener('mousedown', start);
    contentWindow.removeEventListener('mousemove', move);
    contentWindow.removeEventListener('mouseup', end);
    element.removeEventListener('mouseleave', end);
  };
}