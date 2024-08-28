import{p as J,j as e,B as q}from"./settings-DDDiKwEV.js";import{r as n}from"./index-BwDkhjyp.js";import{c as me}from"./floating-ui.react-BgNs4SA8.js";import{w as fe}from"./wait-CTNFjQS8.js";import{S as ge}from"./StoryDocsPage-CfmQO964.js";import{C as xe,M as ye,a as he,b as be}from"./ComposedModal-BB3t0zem.js";import{F as ve}from"./FormGroup-DoLxBdhK.js";import{L as Se}from"./InlineLoading-BvhLs1sa.js";import{T as Te,P as Ee}from"./TextInput-Hd7J5_5S.js";import{R as Me}from"./RadioButton-Dk88TpeT.js";import{R as we}from"./RadioButtonGroup-CQZQsCyP.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as qe}from"./devtools-C7Iu0rt6.js";import{u as Ce}from"./usePortalTarget-BD2WdNlr.js";import{u as je}from"./uuidv4-BQrI85uz.js";import{a as Le}from"./events-Dp3Lalez.js";import{E as Oe}from"./bucket-6-CS7rNrxx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./index-Cfxh4ZWR.js";import"./iframe-D1NHqrr9.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-BB2of0Wm.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Dwf_xrN7.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./Text-DpcC0Z3Y.js";import"./bucket-18-D_XNNF5i.js";import"./FormContext-C7kRVu4t.js";import"./bucket-17-B2E3mTyd.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-DW1YkzHB.js";const C="ExportModal",F={inputType:"text",preformattedExtensions:Object.freeze([]),validExtensions:Object.freeze([])};let a=n.forwardRef(({body:f,className:g,error:x,errorMessage:S,filename:i,hidePasswordLabel:T,inputLabel:y,inputType:E="text",invalidInputText:h,loading:l,loadingMessage:b,onClose:p,onRequestSubmit:v,open:O,portalTarget:K,preformattedExtensions:r=F.preformattedExtensions,preformattedExtensionsLabel:Q,primaryButtonText:X,secondaryButtonText:Z,showPasswordLabel:ee,successMessage:te,successful:B,title:I,validExtensions:M=F.validExtensions,...se},ne)=>{const[d,_]=n.useState(""),[re,oe]=n.useState(!1),[w,k]=n.useState(""),ae=Ce(K);n.useEffect(()=>{var s,N;_(i),r&&r.length>0&&((s=r[0])!=null&&s.extension)&&k((N=r==null?void 0:r[0])==null?void 0:N.extension)},[i,r,O]);const ie=s=>{_(s.target.value)},le=s=>{k(s)},pe=()=>{oe(!0)},de=()=>{const s=w?`${i}.${w.toLocaleLowerCase()}`:d;v&&v(s)},H=()=>{if(!re||!M||!M.length)return!1;if(!d.includes("."))return!0;const s=d.split(".").pop();return!M.includes(s)},o=`${J.prefix}--export-modal`,ue=n.useRef(je()),ce=l||!d||H(),P=l||x||B,R={id:`text-input--${ue.current}`,value:d,onChange:ie,labelText:y,invalid:H(),invalidText:h,onBlur:pe,"data-modal-primary-focus":!0};return ae(e.jsxs(xe,{...se,className:me(o,g),"aria-label":I,size:"sm",preventCloseOnClickOutside:!0,open:O,ref:ne,onClose:p,...qe(C),children:[e.jsx(ye,{className:`${o}__header`,closeModal:p,title:I}),e.jsxs(he,{className:`${o}__body-container`,children:[!P&&e.jsxs(e.Fragment,{children:[f&&e.jsx("p",{className:`${o}__body`,children:f}),r.length?e.jsx(ve,{legendText:Q,children:e.jsx(we,{orientation:"vertical",onChange:le,valueSelected:w,name:"extensions",children:r.map(s=>e.jsx(Me,{id:s.extension,value:s.extension,labelText:`${s.extension} (${s.description})`,"data-modal-primary-focus":!0},s.extension))})}):e.jsx("div",{className:`${o}__input-container`,children:E==="text"?e.jsx(Te,{...R}):e.jsx(Ee,{...R,showPasswordLabel:ee,hidePasswordLabel:T,tooltipPosition:"left"})})]}),e.jsxs("div",{className:`${o}__messaging`,children:[l&&e.jsxs(e.Fragment,{children:[e.jsx(Se,{small:!0,withOverlay:!1}),e.jsx("p",{children:b})]}),B&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{size:16,className:`${o}__checkmark-icon`}),e.jsx("p",{children:te})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx(Oe,{size:16,className:`${o}__error-icon`}),e.jsx("p",{children:S})]})]})]}),!P&&e.jsxs(be,{className:`${o}__footer`,children:[e.jsx(q,{type:"button",kind:"secondary",onClick:p,children:Z}),e.jsx(q,{type:"submit",kind:"primary",onClick:de,disabled:ce,children:X})]})]}))});a=J.checkComponentEnabled(a,C);a.propTypes={body:t.string,className:t.string,error:t.bool,errorMessage:t.string,filename:t.string.isRequired,hidePasswordLabel:t.string,inputLabel:t.string,inputType:t.oneOf(["text","password"]),invalidInputText:t.string,loading:t.bool,loadingMessage:t.string,onClose:t.func,onRequestSubmit:t.func,open:t.bool,portalTarget:t.node,preformattedExtensions:t.arrayOf(t.shape({extension:t.string,description:t.string})),preformattedExtensionsLabel:t.string,primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,showPasswordLabel:t.string,successMessage:t.string,successful:t.bool,title:t.string.isRequired,validExtensions:t.array};a.displayName=C;a.__docgenInfo={description:"Modal dialog version of the export pattern",methods:[],displayName:"ExportModal",props:{body:{required:!1,tsType:{name:"string"},description:"Body content for the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},error:{required:!1,tsType:{name:"boolean"},description:"specify if an error occurred",type:{name:"bool"}},errorMessage:{required:!1,tsType:{name:"string"},description:"messaging to display in the event of an error",type:{name:"string"}},filename:{required:!0,tsType:{name:"string"},description:"name of the file being exported",type:{name:"string"}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to hide key",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"label for the text input",type:{name:"string"}},inputType:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"specify the type of text input",defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'password'",computed:!1}]}},invalidInputText:{required:!1,tsType:{name:"string"},description:"text for an invalid input",type:{name:"string"}},loading:{required:!1,tsType:{name:"boolean"},description:"specify if the modal is in a loading state",type:{name:"bool"}},loadingMessage:{required:!1,tsType:{name:"string"},description:"message to display during the loading state",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Specify a handler for closing modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:'Specify a handler for "submitting" modal. Returns the file name',type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preformattedExtensions:{required:!1,tsType:{name:"unknown"},description:"Array of extensions to display as radio buttons",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"arrayOf",value:{name:"shape",value:{extension:{name:"string",required:!1},description:{name:"string",required:!1}}}}},preformattedExtensionsLabel:{required:!1,tsType:{name:"string"},description:"Label for the preformatted label form group",type:{name:"string"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},showPasswordLabel:{required:!1,tsType:{name:"string"},description:"label text that's displayed when hovering over visibility toggler to show key",type:{name:"string"}},successMessage:{required:!1,tsType:{name:"string"},description:"messaging to display if the export was successful",type:{name:"string"}},successful:{required:!1,tsType:{name:"boolean"},description:"specify if the export was successful",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},validExtensions:{required:!1,tsType:{name:"unknown"},description:"array of valid extensions the file can have",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}}}};const Mt={title:"IBM Products/Patterns/Export/ExportModal",component:a,tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(ge,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/cdai-design/pal/patterns/exporting/usage",label:"Export guidelines"},{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})}},argTypes:{validExtensions:{control:{type:"select",labels:{0:"no extension validation",1:"pdf extension validation"}},options:[0,1],mapping:{0:[],1:["pdf"]}},preformattedExtensions:{control:{type:"select",labels:{0:"no preformatted extensions",1:"preformatted extensions"}},options:[0,1],mapping:{0:[],1:[{extension:"YAML",description:"best for IBM managed cloud"},{extension:"BAR",description:"best for integration server"}]}}}},j={filename:"Sample02.pdf",inputLabel:"File name",onClose:()=>{},onRequestSubmit:()=>{},open:!0,primaryButtonText:"Export",secondaryButtonText:"Cancel",title:"Export",inputType:"text",successful:!0},L=({storyInitiallyOpen:f=!1,...g},x)=>{const[S,i]=n.useState(x.viewMode!=="docs"&&f),[T,y]=n.useState(!1),[E,h]=n.useState(!1),[l,b]=n.useState(!1),p=async()=>{y(!0),await fe(1e3),g.successful?h(!0):b(!0),y(!1)},v=()=>{i(!1),h(!1),b(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{...g,open:S,onClose:v,onRequestSubmit:p,loading:T,successful:E,loadingMessage:"Exporting file...",successMessage:"The file has been exported.",error:l,errorMessage:"Server error 500"}),e.jsx(q,{onClick:()=>i(!0),children:"Launch modal"})]})},u=L.bind({});u.args={...j,validExtensions:0,preformattedExtensions:0,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const c=L.bind({});c.args={...j,validExtensions:1,preformattedExtensions:0,filename:"",invalidInputText:"File must have valid extension .pdf",body:"File must be exported in a PDF format.",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};const m=L.bind({});m.args={...j,filename:"test",validExtensions:0,preformattedExtensions:1,invalidInputText:"File must have valid extension .pdf",body:"",preformattedExtensionsLabel:"Choose an export format",storyInitiallyOpen:!0};var $,z,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var V,W,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var G,U,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`({
  storyInitiallyOpen = false,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && storyInitiallyOpen);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    if (args.successful) {
      setSuccessful(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };
  return <>
      <ExportModal {...args} open={open} onClose={onCloseHandler} onRequestSubmit={onSubmitHandler} loading={loading} successful={successful} loadingMessage="Exporting file..." successMessage="The file has been exported." error={error} errorMessage="Server error 500" />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const wt=["Standard","WithExtensionValidation","WithPreformattedExtensions"];export{u as Standard,c as WithExtensionValidation,m as WithPreformattedExtensions,wt as __namedExportsOrder,Mt as default};
