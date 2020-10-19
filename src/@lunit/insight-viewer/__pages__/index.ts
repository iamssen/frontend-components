import { HandbookTreeNode } from '@handbook/components';
import { source } from '@handbook/source';

export const insightViewerPages: HandbookTreeNode = {
  'Getting Started': source(() => import('./Basic/Getting-Started.mdx')),
  CornerstoneImage: source(() => import('./Basic/CornerstoneImage.mdx')),
  CornerstoneRenderData: source(
    () => import('./Basic/CornerstoneRenderData.mdx'),
  ),
  '<DCMImage>': source(() => import('./Components/DCMImage.mdx')),
  '<CornerstoneViewer>': source(
    () => import('./Components/CornerstoneViewer.mdx'),
  ),
  '<InsightViewer>': source(() => import('./Components/InsightViewer.mdx')),
  '<InsightViewerContainer>': source(
    () => import('./Components/InsightViewerContainer.mdx'),
  ),
  '<InsightViewerTestController>': source(
    () => import('./Components/InsightViewerTestController.mdx'),
  ),
  '<StrokeText>': source(() => import('./Components/StrokeText.mdx')),
  '<ProgressViewer>': source(() => import('./Components/ProgressViewer.mdx')),
  '<HeatmapViewer>': source(() => import('./Components/HeatmapViewer.mdx')),
  Contour: source(() => import('./Basic/Contour.mdx')),
  '<ContourViewer>': source(() => import('./Components/ContourViewer.mdx')),
  '<ContourDrawer>': source(() => import('./Components/ContourDrawer.mdx')),
  '<ContourHover>': source(() => import('./Components/ContourHover.mdx')),
  '<ArrowedContourViewer>': source(
    () => import('./Components/ArrowedContourViewer.mdx'),
  ),
  '<LineViewer>': source(() => import('./Components/LineViewer.mdx')),
  '<LineDrawer>': source(() => import('./Components/LineDrawer.mdx')),
  '<CircleViewer>': source(() => import('./Components/CircleViewer.mdx')),
  '<CircleDrawer>': source(() => import('./Components/CircleDrawer.mdx')),
  '<CircleHover>': source(() => import('./Components/CircleHover.mdx')),
  '<PointViewer>': source(() => import('./Components/PointViewer.mdx')),
  'useSeriesImagePosition()': source(
    () => import('./Hooks/useSeriesImagePosition.mdx'),
  ),
  'useSeriesImageScroll()': source(
    () => import('./Hooks/useSeriesImageScroll.mdx'),
  ),
  'useContour()': source(() => import('./Hooks/useContour.mdx')),
  'useImageLoadedTime()': source(
    () => import('./Hooks/useImageLoadedTime.mdx'),
  ),
  'useImageProgress()': source(() => import('./Hooks/useImageProgress.mdx')),
  'useImageStore()': source(() => import('./Hooks/useImageStore.mdx')),
  'useInsightViewerSync()': source(
    () => import('./Hooks/useInsightViewerSync.mdx'),
  ),
  'useViewportMirroring()': source(
    () => import('./Hooks/useViewportMirroring.mdx'),
  ),
  CT: {
    'Get ArrayBuffer': source(() => import('./CT/GetArrayBuffer.mdx')),
    'Convert to Images': source(() => import('./CT/ConvertToImages.mdx')),
  },
};