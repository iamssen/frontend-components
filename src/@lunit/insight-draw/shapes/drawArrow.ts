export interface DrawArrowParams {
  /** start 화살표 시작점 */
  start: [number, number];

  /** end 막대 끝점 */
  end: [number, number];

  /** lineWidth 막대의 굵기 */
  lineWidth: number;

  /** arrowWidth 화살의 넓이 (양옆으로) */
  arrowDepth: number;

  /** arrowDepth 화살의 깊이 (길이) */
  arrowWidth: number;
}

export function drawArrow({ start, end, lineWidth, arrowWidth, arrowDepth }: DrawArrowParams): [number, number][] {
  const south: number = Math.atan2(start[1] - end[1], start[0] - end[0]);
  const angle: { south: number; north: number; east: number; west: number } = {
    south,
    north: south + Math.PI,
    east: south + Math.PI * 1.5,
    west: south + Math.PI * 0.5,
  };

  const arrowEnd = [arrowDepth * Math.cos(angle.north) + start[0], arrowDepth * Math.sin(angle.north) + start[1]];

  return [
    start,
    [
      (arrowWidth / 2) * Math.cos(angle.east) + arrowEnd[0], // arrow east
      (arrowWidth / 2) * Math.sin(angle.east) + arrowEnd[1],
    ],
    [
      (lineWidth / 2) * Math.cos(angle.east) + arrowEnd[0], // arrow line east
      (lineWidth / 2) * Math.sin(angle.east) + arrowEnd[1],
    ],
    [
      (lineWidth / 2) * Math.cos(angle.east) + end[0], // line end east
      (lineWidth / 2) * Math.sin(angle.east) + end[1],
    ],
    [
      (lineWidth / 2) * Math.cos(angle.west) + end[0], // line end west
      (lineWidth / 2) * Math.sin(angle.west) + end[1],
    ],
    [
      (lineWidth / 2) * Math.cos(angle.west) + arrowEnd[0], // arrow line west
      (lineWidth / 2) * Math.sin(angle.west) + arrowEnd[1],
    ],
    [
      (arrowWidth / 2) * Math.cos(angle.west) + arrowEnd[0], // arrow west
      (arrowWidth / 2) * Math.sin(angle.west) + arrowEnd[1],
    ],
  ];
}
