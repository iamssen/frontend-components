(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{670:function(e,n,o){"use strict";o.r(n),n.default="import { ColorProperty } from 'csstype';\nimport { css } from 'styled-components';\n\nexport interface InsightViewerCSSProperties {\n  '--contour-viewer-color'?: ColorProperty;\n  '--contour-viewer-focused-color'?: ColorProperty;\n  '--contour-viewer-stroke-width'?: ColorProperty;\n  '--contour-viewer-focused-stroke-width'?: ColorProperty;\n  '--contour-viewer-fill-color'?: ColorProperty;\n  '--contour-viewer-focused-fill-color'?: ColorProperty;\n\n  '--contour-drawer-color'?: ColorProperty;\n  '--contour-drawer-stroke-width'?: ColorProperty;\n  '--contour-drawer-fill-color'?: ColorProperty;\n\n  '--pin-color'?: ColorProperty;\n  '--pin-focused-color'?: ColorProperty;\n}\n\nexport const blockStyle = css`\n  --contour-viewer-color: #ffffff;\n  --contour-viewer-focused-color: rgb(255, 194, 17);\n  --contour-viewer-stroke-width: 3px;\n  --contour-viewer-focused-stroke-width: 6px;\n  --contour-viewer-fill-color: rgba(0, 0, 0, 0.2);\n  --contour-viewer-focused-fill-color: rgba(0, 0, 0, 0.4);\n\n  --contour-drawer-color: rgb(255, 224, 0);\n  --contour-drawer-stroke-width: 4px;\n  --contour-drawer-fill-color: rgba(255, 224, 0, 0.2);\n\n  --pin-color: #ffffff;\n  --pin-focused-color: rgb(255, 194, 17);\n`;\n\nexport const globalStyle = css`\n  :root {\n    ${blockStyle};\n  }\n`;\n"},674:function(e,n,o){"use strict";function t(e){return`Annotation(${e.id})`}o.d(n,"b",(function(){return t})),o.d(n,"a",(function(){return r}));const r=[{polygon:[[340.48,232.95999999999998],[265.38666666666666,232.10666666666668]],label:t,dataAttrs:{"data-category":"normal"}},{polygon:[[173.2266666666667,381.44],[276.48,400.21333333333337]],label:t,dataAttrs:{"data-category":"abnormal"}},{polygon:[[419.84000000000003,448.85333333333335],[361.81333333333333,407.04]],label:t,dataAttrs:{"data-category":"normal"}},{polygon:[[174.93333333333334,88.74666666666668],[215.89333333333335,129.70666666666665]],label:t,dataAttrs:{"data-category":"abnormal"}}]},818:function(e,n,o){"use strict";o.r(n);var t=o(666),r=o(0),i=o.n(r),a=o(674);Object(t.installWADOImageLoader)();const s={width:[600,400,1e3],height:[700,400,1e3],control:["pen",["none","pan","pen","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]};n.default=()=>{const e=Object(r.useMemo)(()=>new t.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:t.unloadImage}),[]),{cornerstoneRenderData:n,updateCornerstoneRenderData:o}=Object(t.useInsightViewerSync)(),{contours:c,focusedContour:l,addContour:u,removeContour:d,focusContour:m}=Object(t.useContour)({mode:"circle"});return i.a.createElement(t.InsightViewerTestController,{options:s},({width:r,height:s,invert:h,flip:w,control:p,resetTime:C,interactions:g,setElement:f,element:b})=>i.a.createElement(t.InsightViewerContainer,{ref:f,width:r,height:s},i.a.createElement(t.CornerstoneViewer,{width:r,height:s,invert:h,flip:w,interactions:g,resetTime:C,image:e,updateCornerstoneRenderData:o}),c&&c.length>0&&n&&i.a.createElement(t.CircleViewer,{width:r,height:s,contours:c,focusedContour:l,cornerstoneRenderData:n}),c&&n&&"pen"===p&&b&&i.a.createElement(t.CircleDrawer,{width:r,height:s,contours:c,draw:"pen"===p&&b,onFocus:m,onAdd:e=>u(e,{label:a.b}),onRemove:d,cornerstoneRenderData:n})))}},819:function(e,n,o){"use strict";o.r(n),n.default="import {\n  CircleDrawer,\n  CircleViewer,\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerContainer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n  useContour,\n  useInsightViewerSync,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\nimport { labelFunction } from '../../../__fixtures__/circle';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pen', ['none', 'pan', 'pen', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();\n\n  // create contour data and user drawing behaviors\n  const { contours, focusedContour, addContour, removeContour, focusContour } = useContour({\n    mode: 'circle',\n  });\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, resetTime, interactions, setElement, element }) => (\n        <InsightViewerContainer ref={setElement} width={width} height={height}>\n          <CornerstoneViewer\n            width={width}\n            height={height}\n            invert={invert}\n            flip={flip}\n            interactions={interactions}\n            resetTime={resetTime}\n            image={image}\n            updateCornerstoneRenderData={updateCornerstoneRenderData}\n          />\n          {contours && contours.length > 0 && cornerstoneRenderData && (\n            <CircleViewer\n              width={width}\n              height={height}\n              contours={contours}\n              focusedContour={focusedContour}\n              cornerstoneRenderData={cornerstoneRenderData}\n            />\n          )}\n          {contours && cornerstoneRenderData && control === 'pen' && element && (\n            <CircleDrawer\n              width={width}\n              height={height}\n              contours={contours}\n              draw={control === 'pen' && element}\n              onFocus={focusContour}\n              onAdd={(contour) => addContour(contour, { label: labelFunction })}\n              onRemove={removeContour}\n              cornerstoneRenderData={cornerstoneRenderData}\n            />\n          )}\n        </InsightViewerContainer>\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},820:function(e,n,o){"use strict";o.r(n);var t=o(666),r=o(0),i=o.n(r),a=o(36),s=o(674);Object(t.installWADOImageLoader)();const c={width:[600,400,1e3],height:[700,400,1e3],control:["pen",["none","pan","pen","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!1],invert:[!1]},l=Object(a.d)(t.CircleDrawer)`
  --contour-drawer-color: #ff0000;
  --contour-drawer-fill-color: rgba(255, 255, 255, 0.4);
  --contour-drawer-stroke-width: 7px;
`;n.default=()=>{const e=Object(r.useMemo)(()=>new t.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:t.unloadImage}),[]),{cornerstoneRenderData:n,updateCornerstoneRenderData:o}=Object(t.useInsightViewerSync)(),{contours:a,focusedContour:u,addContour:d,removeContour:m,focusContour:h}=Object(t.useContour)({mode:"circle"});return i.a.createElement(t.InsightViewerTestController,{options:c},({width:r,height:c,invert:w,flip:p,control:C,wheel:g,resetTime:f,interactions:b,setElement:v,element:D})=>i.a.createElement(t.InsightViewerContainer,{ref:v,width:r,height:c},i.a.createElement(t.CornerstoneViewer,{width:r,height:c,invert:w,flip:p,interactions:b,resetTime:f,image:e,updateCornerstoneRenderData:o}),a&&a.length>0&&n&&i.a.createElement(t.CircleViewer,{width:r,height:c,contours:a,focusedContour:u,cornerstoneRenderData:n}),a&&n&&"pen"===C&&D&&i.a.createElement(l,{width:r,height:c,contours:a,draw:"pen"===C&&D,onFocus:h,onAdd:e=>d(e,{label:s.b}),onRemove:m,cornerstoneRenderData:n})))}},821:function(e,n,o){"use strict";o.r(n),n.default="import {\n  CircleDrawer,\n  CircleViewer,\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerContainer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n  useContour,\n  useInsightViewerSync,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\nimport styled from 'styled-components';\nimport { labelFunction } from '../../../__fixtures__/circle';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pen', ['none', 'pan', 'pen', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [false],\n  invert: [false],\n};\n\nconst CustomStyleDrawer = styled(CircleDrawer)`\n  --contour-drawer-color: #ff0000;\n  --contour-drawer-fill-color: rgba(255, 255, 255, 0.4);\n  --contour-drawer-stroke-width: 7px;\n`;\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();\n\n  // create contour data and user drawing behaviors\n  const { contours, focusedContour, addContour, removeContour, focusContour } = useContour({\n    mode: 'circle',\n  });\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, interactions, setElement, element }) => (\n        <InsightViewerContainer ref={setElement} width={width} height={height}>\n          <CornerstoneViewer\n            width={width}\n            height={height}\n            invert={invert}\n            flip={flip}\n            interactions={interactions}\n            resetTime={resetTime}\n            image={image}\n            updateCornerstoneRenderData={updateCornerstoneRenderData}\n          />\n          {contours && contours.length > 0 && cornerstoneRenderData && (\n            <CircleViewer\n              width={width}\n              height={height}\n              contours={contours}\n              focusedContour={focusedContour}\n              cornerstoneRenderData={cornerstoneRenderData}\n            />\n          )}\n          {contours && cornerstoneRenderData && control === 'pen' && element && (\n            <CustomStyleDrawer\n              width={width}\n              height={height}\n              contours={contours}\n              draw={control === 'pen' && element}\n              onFocus={focusContour}\n              onAdd={(contour) => addContour(contour, { label: labelFunction })}\n              onRemove={removeContour}\n              cornerstoneRenderData={cornerstoneRenderData}\n            />\n          )}\n        </InsightViewerContainer>\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},907:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return c}));o(0);var t=o(62),r=o(7),i=o(89),a=o(667);const s={};function c({components:e,...n}){return Object(t.b)("wrapper",Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),Object(t.b)("h1",null,Object(t.b)("inlineCode",{parentName:"h1"},"<CircleDrawer>")),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"<ContourDrawer>"),"\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub2e8\uc21c\ud788 \uadf8\ub9ac\ub294 \uae30\ub2a5\ub9cc \uc788\uace0, \uadf8\ub824\uc9c4 Contour \ub370\uc774\ud130\ub4e4\uc740 ",Object(t.b)("inlineCode",{parentName:"p"},"<CircleViewer>"),"\uc5d0\uc11c \ucc98\ub9ac\ud574\uc57c \ud55c\ub2e4."),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"export interface CircleDrawerProps<T extends Contour> extends InsightViewerGuestProps {\n  width: number;\n  height: number;\n  \n  /** Contour \ub370\uc774\ud130\ub97c \uc0c1\uc18d\ubc1b\uc740 Annotation \ub370\uc774\ud130 */\n  contours: T[];\n  \n  /**\n   * \uadf8\ub9ac\uae30 \uae30\ub2a5 \ud65c\uc131\ud654 \uc5ec\ubd80\n   *\n   * HTMLElement\ub85c \uc785\ub825\ud560 \uacbd\uc6b0 MouseEvent\ub97c \ud574\ub2f9 HTMLElement\ub97c \uc0ac\uc6a9\ud574\uc11c \ucc98\ub9ac\ud55c\ub2e4\n   */\n  draw: boolean | HTMLElement | null;\n  \n  /**\n   * \ud2b9\uc815 Contour\uc5d0 Mouse Over \ub418\uc5c8\uc744 \ub54c\n   * focusedContour\ub97c \uacb0\uc815\ud558\ub294\ub370 \ud544\uc694\ud558\ub2e4\n   */\n  onFocus: (contour: T | null) => void;\n  \n  /** \uadf8\ub9ac\uae30\uac00 \uc644\ub8cc\ub418\uc5b4 \uc0c8\ub85c\uc6b4 Contour\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c */\n  onAdd: (polygon: Point[], event: MouseEvent) => void;\n  \n  /** \ud2b9\uc815 Contour\ub97c Click \ud574\uc11c \uc9c0\uc6b8\ub54c \ud544\uc694\ud558\ub2e4 */\n  onRemove: (contour: T) => void;\n  \n  className?: string;\n  style?: CSSProperties;\n  \n  /** \uadf8\ub9ac\ub294 \uacfc\uc815\uc5d0\uc11c Line\uc5d0 \ud45c\ud604\ub418\ub294 Animation\uc744 \ube44\ud65c\uc131 \uc2dc\ud0ac \uc218 \uc788\ub2e4 */\n  animateStroke?: boolean;\n}\n")),Object(t.b)(i.Example,{example:Object(r.b)("./CircleDrawer/Basic",{component:o(818),source:o(819),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/CircleDrawer/Basic.tsx"}),mdxType:"Example"},Object(t.b)(a.a,{height:720,mdxType:"InsightViewerPreview"})),Object(t.b)("h1",null,"Styling"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"<ContourDrawer>"),"\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c CSS Variable\uc744 \ud1b5\ud574\uc11c \uc0c9\uc0c1\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"<ContourDrawer>"),"\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c ",Object(t.b)("inlineCode",{parentName:"p"},"--contour-drawer-*"),"\uc758 \uc774\ub984\uc744 \uac00\uc9c4 \ud56d\ubaa9\ub4e4\uc5d0 \uc601\ud5a5\uc744 \ubc1b\ub294\ub2e4."),Object(t.b)(i.Example,{example:Object(r.d)("../../theme/style",{source:o(670),filename:"src/_packages/@lunit/insight-viewer/theme/style.ts"}),mdxType:"Example"}),Object(t.b)(i.Example,{example:Object(r.b)("./CircleDrawer/CustomStyle",{component:o(820),source:o(821),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/CircleDrawer/CustomStyle.tsx"}),mdxType:"Example"},Object(t.b)(a.a,{height:720,mdxType:"InsightViewerPreview"})))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=13.ea1b371d448daa952c0a.js.map