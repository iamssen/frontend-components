(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{850:function(e,n,t){"use strict";t.r(n);var r=t(666),a=t(0),i=t.n(a),s=t(647),o=t(651);Object(r.installWADOImageLoader)();function l({image:e}){const[n,t]=Object(a.useState)(null);Object(r.useSeriesImageScroll)({image:e,element:n});const{current:s,end:o}=Object(r.useSeriesImagePosition)(e),l=Object(r.useViewerInteractions)(["pan"]);return i.a.createElement(r.InsightViewerContainer,{ref:t,width:300,height:300},i.a.createElement(r.CornerstoneViewer,{width:300,height:300,invert:!1,flip:!1,interactions:l,resetTime:0,image:e,updateCornerstoneRenderData:()=>{}}),i.a.createElement(r.ProgressViewer,{width:300,height:300,image:e}),i.a.createElement(r.RightTopHolder,null,i.a.createElement(r.StrokeText,null,i.a.createElement("text",null,i.a.createElement("tspan",{fill:"#ffffff"},s),"\xa0 \xa0",i.a.createElement("tspan",{fill:"#8694B1"},"/"),"\xa0 \xa0",i.a.createElement("tspan",{fill:"#ffffff"},o)))))}n.default=()=>{const[e,n]=Object(a.useState)(null),[t,c]=Object(a.useState)(null),[m,p]=Object(a.useState)(null);return Object(a.useEffect)(()=>{const e=new AbortController,t=Object(r.fetchBuffer)({url:"https://opt-frontend.s3.ap-northeast-2.amazonaws.com/fixtures/npy/image.npy",signal:e.signal}),a=t.pipe(Object(s.a)(e=>"number"===typeof e?e:e?1:0)),i=t.pipe(Object(o.a)(e=>"number"!==typeof e&&!!e),Object(r.mapNpyBufferToImages)({id:"ct-test",sliceSpacing:3,rowPixelSpacing:.9765625,columnPixelSpacing:.9765625,windowWidth:1500,windowCenter:-600}));return n(new r.CornerstoneStaticSeriesImage({progress:a,images:i.pipe(Object(s.a)(({axial:e})=>e))})),c(new r.CornerstoneStaticSeriesImage({progress:a,images:i.pipe(Object(s.a)(({coronal:e})=>e))})),p(new r.CornerstoneStaticSeriesImage({progress:a,images:i.pipe(Object(s.a)(({sagittal:e})=>e))})),()=>{e.abort()}},[]),e&&t&&m?i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(l,{image:e}),i.a.createElement(l,{image:t}),i.a.createElement(l,{image:m})):i.a.createElement("div",null,"...in progress")}},851:function(e,n,t){"use strict";t.r(n),n.default="import {\n  CornerstoneSequenceImage,\n  CornerstoneStaticSeriesImage,\n  CornerstoneViewer,\n  fetchBuffer,\n  InsightViewerContainer,\n  installWADOImageLoader,\n  mapNpyBufferToImages,\n  NpyCornerstoneImages,\n  ProgressViewer,\n  RightTopHolder,\n  StrokeText,\n  useSeriesImagePosition,\n  useSeriesImageScroll,\n  useViewerInteractions,\n} from '@lunit/insight-viewer';\nimport React, { useEffect, useState } from 'react';\nimport { Observable } from 'rxjs';\nimport { filter, map } from 'rxjs/operators';\n\ninstallWADOImageLoader();\n\nconst width: number = 300;\nconst height: number = 300;\n\nfunction Viewer({ image }: { image: CornerstoneSequenceImage }) {\n  const [element, setElement] = useState<HTMLDivElement | null>(null);\n\n  useSeriesImageScroll({\n    image,\n    element,\n  });\n\n  const { current, end } = useSeriesImagePosition(image);\n\n  const interactions = useViewerInteractions(['pan']);\n\n  return (\n    <InsightViewerContainer ref={setElement} width={width} height={height}>\n      <CornerstoneViewer\n        width={width}\n        height={height}\n        invert={false}\n        flip={false}\n        interactions={interactions}\n        resetTime={0}\n        image={image}\n        updateCornerstoneRenderData={() => {}}\n      />\n      <ProgressViewer width={width} height={height} image={image} />\n      <RightTopHolder>\n        <StrokeText>\n          <text>\n            <tspan fill=\"#ffffff\">{current}</tspan>\n            &nbsp; &nbsp;\n            <tspan fill=\"#8694B1\">/</tspan>\n            &nbsp; &nbsp;\n            <tspan fill=\"#ffffff\">{end}</tspan>\n          </text>\n        </StrokeText>\n      </RightTopHolder>\n    </InsightViewerContainer>\n  );\n}\n\nexport default () => {\n  const [axial, setAxial] = useState<CornerstoneSequenceImage | null>(null);\n  const [coronal, setCoronal] = useState<CornerstoneSequenceImage | null>(null);\n  const [sagittal, setSagittal] = useState<CornerstoneSequenceImage | null>(null);\n\n  useEffect(() => {\n    const abort = new AbortController();\n\n    const buffer: Observable<number | ArrayBufferLike> = fetchBuffer({\n      url: 'https://opt-frontend.s3.ap-northeast-2.amazonaws.com/fixtures/npy/image.npy',\n      signal: abort.signal,\n    });\n\n    const progress: Observable<number> = buffer.pipe(\n      map((progressOrBytes) => (typeof progressOrBytes === 'number' ? progressOrBytes : progressOrBytes ? 1 : 0)),\n    );\n\n    const images: Observable<NpyCornerstoneImages> = buffer.pipe(\n      filter<number | ArrayBufferLike, ArrayBufferLike>(\n        (progressOrBytes: number | ArrayBufferLike): progressOrBytes is ArrayBufferLike => {\n          return typeof progressOrBytes !== 'number' && !!progressOrBytes;\n        },\n      ),\n      mapNpyBufferToImages({\n        id: 'ct-test',\n        sliceSpacing: 3.0,\n        rowPixelSpacing: 0.9765625,\n        columnPixelSpacing: 0.9765625,\n        windowWidth: 1500.0,\n        windowCenter: -600.0,\n      }),\n    );\n\n    setAxial(new CornerstoneStaticSeriesImage({ progress, images: images.pipe(map(({ axial }) => axial)) }));\n    setCoronal(new CornerstoneStaticSeriesImage({ progress, images: images.pipe(map(({ coronal }) => coronal)) }));\n    setSagittal(new CornerstoneStaticSeriesImage({ progress, images: images.pipe(map(({ sagittal }) => sagittal)) }));\n\n    return () => {\n      abort.abort();\n    };\n  }, []);\n\n  return axial && coronal && sagittal ? (\n    <div style={{ display: 'flex' }}>\n      <Viewer image={axial} />\n      <Viewer image={coronal} />\n      <Viewer image={sagittal} />\n    </div>\n  ) : (\n    <div>...in progress</div>\n  );\n};\n"},919:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));t(0);var r=t(62),a=t(7),i=t(89);const s={};function o({components:e,...n}){return Object(r.b)("wrapper",Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Convert Images"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ArrayBuffer")," \ud615\ud0dc\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\ub4e4\uc740 ",Object(r.b)("inlineCode",{parentName:"p"},"CornerstoneImage")," \ud615\ud0dc\ub85c \ubcc0\ud658\ud574\uc57c \ud55c\ub2e4."),Object(r.b)(i.Example,{example:Object(a.b)("./ConvertToImages/Basic",{component:t(850),source:t(851),filename:"src/_packages/@lunit/insight-viewer/__pages__/CT/ConvertToImages/Basic.tsx"}),mdxType:"Example"},Object(r.b)(i.Preview,{height:320,mdxType:"Preview"})))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=37.ea1b371d448daa952c0a.js.map