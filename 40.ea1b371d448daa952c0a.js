(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{794:function(e,n,t){"use strict";t.r(n);var o=t(666),r=t(0),i=t.n(r);Object(o.installWADOImageLoader)();const l={width:[600,400,1e3],height:[700,400,1e3],control:["pan",["none","pan","adjust"]],wheel:["zoom",["none","zoom"]],flip:[!0],invert:[!0]};n.default=()=>{const e=Object(r.useMemo)(()=>new o.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:o.unloadImage}),[]);return i.a.createElement(o.InsightViewerTestController,{options:l},({width:n,height:t,invert:r,flip:l,control:a,wheel:s,resetTime:c,interactions:p})=>i.a.createElement(o.CornerstoneViewer,{width:n,height:t,invert:r,flip:l,interactions:p,resetTime:c,image:e,updateCornerstoneRenderData:()=>{}}))}},795:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneImage,\n  CornerstoneSingleImage,\n  CornerstoneViewer,\n  InsightViewerControllerOptions,\n  InsightViewerTestController,\n  installWADOImageLoader,\n  unloadImage,\n} from '@lunit/insight-viewer';\nimport React, { useMemo } from 'react';\n\ninstallWADOImageLoader();\n\nconst controllerOptions: InsightViewerControllerOptions = {\n  width: [600, 400, 1000],\n  height: [700, 400, 1000],\n  control: ['pan', ['none', 'pan', 'adjust']],\n  wheel: ['zoom', ['none', 'zoom']],\n  flip: [true],\n  invert: [true],\n};\n\nexport default () => {\n  const image: CornerstoneImage = useMemo(\n    () =>\n      new CornerstoneSingleImage(`wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm`, {\n        unload: unloadImage,\n      }),\n    [],\n  );\n\n  return (\n    <InsightViewerTestController options={controllerOptions}>\n      {({ width, height, invert, flip, control, wheel, resetTime, interactions }) => (\n        <CornerstoneViewer\n          width={width}\n          height={height}\n          invert={invert} // \uc0c9\uc0c1\uc744 \ubc18\uc804\ud55c\ub2e4\n          flip={flip} // \uc774\ubbf8\uc9c0\ub97c \uc88c\uc6b0\ub85c \ub4a4\uc9d1\ub294\ub2e4\n          interactions={interactions}\n          resetTime={resetTime} // \uc774 \uac12\uc774 \ubcc0\uacbd\ub418\uba74 Pan, Adjust, Zoom \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654 \ub41c\ub2e4\n          image={image}\n          updateCornerstoneRenderData={() => {}}\n        />\n      )}\n    </InsightViewerTestController>\n  );\n};\n"},898:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(0);var o=t(62),r=t(7),i=t(89),l=t(667);const a={};function s({components:e,...n}){return Object(o.b)("wrapper",Object.assign({},a,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",null,Object(o.b)("inlineCode",{parentName:"h1"},"<InsightViewerTestController>")),Object(o.b)("p",null,"options\uc758 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud574\uc8fc\uace0 \uc774 \uc0c1\ud0dc\ub4e4\uc744 children\uc778 ",Object(o.b)("inlineCode",{parentName:"p"},"<CornerstoneViewer>"),"\uc640 \uc88c\uce21 Controller panel\uc778 ",Object(o.b)("inlineCode",{parentName:"p"},"<Controller>"),"\uc5d0\uac8c \uc804\ub2ec\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function InsightViewerTestController({ children, options }: InsightViewerControllerProps) {\n  // code \uc0dd\ub7b5...\n  return (\n    <Fragment>\n      {children(state)}\n      <Controller {...state} />\n    </Fragment>\n  );\n}\n")),Object(o.b)("p",null,"options\uc758 \uac12\ub4e4\uc740 2\uac00\uc9c0 \ud615\ud0dc\uac00 \ub420 \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Array \ud0c0\uc785\uc774 \uc544\ub2d0\uacbd\uc6b0 Controller\uac00 \ube44\ud65c\uc131\ud654 \ub41c\ub2e4.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"{children(state)}"),"\ub85c ",Object(o.b)("inlineCode",{parentName:"p"},"<InsightViewer>"),"\uc5d0\uac8c state\uac00 \uc804\ub2ec\ub418\uae30 \ub54c\ubb38\uc5d0 \uc815\ud655\ud55c default\uac12\uc73c\ub85c \uc804\ub2ec\ud574\uc57c \ud55c\ub2e4. \uae30\ub2a5\uc744 \ub044\ub294\uc6a9\uc73c\ub85c \uc0ac\uc6a9\ud574\uc11c\ub294 \uc548\ub41c\ub2e4."),Object(o.b)("p",null,"array\uc758 index \ub9c8\ub2e4 \uc5ed\ud560\uc774 \ub2e4\ub974\ub2c8 \ud558\ub2e8 interface\uc120\uc5b8\ubb38\uc744 \ucc38\uace0\ud558\uc790"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"interface InsightViewerControllerProps {\n  children: (controllerState: InsightViewerControllerState) => ReactNode;\n  options: InsightViewerControllerOptions;\n}\n\nexport interface InsightViewerControllerOptions {\n  /**\n  * [default, min, max]\n  * default\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc904 width\uc640 height\uac12, min\uacfc max\ub294 Controller\uc758 \ucd5c\uc19f\uac12\uacfc \ucd5c\ub313\uac12\n  * number\ub294 width Controller\uac00 \ube44\ud65c\uc131\ud654 \ub41c\ub2e4.\n  */\n  width: [number, number, number] | number;\n  height: [number, number, number] | number;\n\n  /**\n  * Control \ud0c0\uc785\uc744 \uc0b4\ud3b4\ubcf4\uba74,\n  * export const controls = ['none', 'pen', 'pan', 'adjust', 'magnify'] as const;\n  * export type Control = typeof controls[number];\n  *\n  * control: ['pan', ['none', 'pan', 'adjust']]\n  * [default, [\uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 options]]\n  * 'pan'\uacfc 'adjust'\ub294 \uac19\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.\n  */\n  control: [Control, Control[]] | Control;\n\n  /**\n   * type Wheel = 'none' | 'zoom' | 'scroll';\n   * wheel: ['zoom', ['none', 'zoom']]\n   * [default, [\uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud560 \uc218 \uc788\ub294 options]]\n   */\n  wheel: [Wheel, Wheel[]] | Wheel;\n\n  // \uc0c9\uc0c1\uc744 \ubc18\uc804\ud55c\ub2e4. [default]\n  invert: [boolean] | boolean;\n\n  // \uc774\ubbf8\uc9c0\ub97c \uc88c\uc6b0\ub85c \ub4a4\uc9d1\ub294\ub2e4. [default]\n  flip: [boolean] | boolean;\n}\n")),Object(o.b)(i.Example,{example:Object(r.b)("./InsightViewerTestController/Basic",{component:t(794),source:t(795),filename:"src/_packages/@lunit/insight-viewer/__pages__/Components/InsightViewerTestController/Basic.tsx"}),mdxType:"Example"},Object(o.b)(l.a,{height:720,mdxType:"InsightViewerPreview"})))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=40.ea1b371d448daa952c0a.js.map