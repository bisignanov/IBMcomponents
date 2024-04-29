"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[1089],{"../ibm-products/src/components/TagSet/TagSet.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O5:()=>TagSet,JP:()=>string_required_if_more_than_10_tags});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),useClickOutside=__webpack_require__("../ibm-products/src/global/js/hooks/useClickOutside.js"),settings=__webpack_require__("../ibm-products/src/settings.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["allTagsModalSearchThreshold","className","onShowAllClick","overflowAlign","overflowTags","overflowType","showAllTagsLabel","popoverOpen","setPopoverOpen"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(settings.K.prefix,"--tag-set-overflow"),defaults_allTagsModalSearchThreshold=10,defaults_overflowAlign="bottom",TagSetOverflow=react.forwardRef((function(_ref,ref){var _ref$allTagsModalSear=_ref.allTagsModalSearchThreshold,allTagsModalSearchThreshold=void 0===_ref$allTagsModalSear?defaults_allTagsModalSearchThreshold:_ref$allTagsModalSear,className=_ref.className,onShowAllClick=_ref.onShowAllClick,_ref$overflowAlign=_ref.overflowAlign,overflowAlign=void 0===_ref$overflowAlign?defaults_overflowAlign:_ref$overflowAlign,overflowTags=_ref.overflowTags,overflowType=_ref.overflowType,showAllTagsLabel=_ref.showAllTagsLabel,popoverOpen=_ref.popoverOpen,setPopoverOpen=_ref.setPopoverOpen,rest=_objectWithoutProperties(_ref,_excluded),localRef=(0,react.useRef)(),overflowTagContent=(0,react.useRef)(null);(0,useClickOutside.O)(ref||localRef,(function(){popoverOpen&&setPopoverOpen(!1)}));return(0,jsx_runtime.jsx)("span",_objectSpread(_objectSpread({},rest),{},{"aria-hidden":0===overflowTags.length,className:classnames_default()("".concat(blockClass),_defineProperty({},"".concat(blockClass,"--hidden"),0===overflowTags.length)),ref:ref||localRef,children:(0,jsx_runtime.jsxs)(es.J2e,{align:overflowAlign,className:classnames_default()(className,"".concat(blockClass,"__tagset-popover")),dropShadow:!0,highContrast:!0,onKeyDown:function handleEscKeyPress(event){"Escape"===event.key&&setPopoverOpen(!1)},open:popoverOpen,children:[(0,jsx_runtime.jsxs)(es.Vp9,{onClick:function onClick(){return setPopoverOpen(!popoverOpen)},className:classnames_default()("".concat(blockClass,"__popover-trigger")),children:["+",overflowTags.length]}),(0,jsx_runtime.jsx)(es.yky,{children:(0,jsx_runtime.jsxs)("div",{ref:overflowTagContent,className:"".concat(blockClass,"__content"),children:[(0,jsx_runtime.jsx)("ul",{className:"".concat(blockClass,"__tag-list"),children:overflowTags.filter((function(_,index){return overflowTags.length>allTagsModalSearchThreshold?index<allTagsModalSearchThreshold:index<=allTagsModalSearchThreshold})).map((function(tag,index){var tagProps={};return"tag"===overflowType&&(tagProps.type="high-contrast"),"default"===overflowType&&(tagProps.filter=!1),(0,jsx_runtime.jsx)("li",{className:classnames_default()("".concat(blockClass,"__tag-item"),_defineProperty(_defineProperty({},"".concat(blockClass,"__tag-item--default"),"default"===overflowType),"".concat(blockClass,"__tag-item--tag"),"tag"===overflowType)),children:react.cloneElement(tag,tagProps)},index)}))}),overflowTags.length>allTagsModalSearchThreshold&&(0,jsx_runtime.jsx)(es.rUS,{className:"".concat(blockClass,"__show-all-tags-link"),href:"",onClick:function handleShowAllTagsClick(ev){ev.stopPropagation(),ev.preventDefault(),setPopoverOpen(!1),onShowAllClick()},role:"button",children:showAllTagsLabel})]})})]})}))}));TagSetOverflow.displayName="TagSetOverflow",TagSetOverflow.propTypes={allTagsModalSearchThreshold:prop_types_default().number,className:prop_types_default().string,onShowAllClick:prop_types_default().func.isRequired,overflowAlign:prop_types_default().oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"]),overflowTags:prop_types_default().arrayOf(prop_types_default().object).isRequired,overflowType:prop_types_default().oneOf(["default","tag"]),popoverOpen:prop_types_default().bool,setPopoverOpen:prop_types_default().func,showAllTagsLabel:prop_types_default().string},TagSetOverflow.__docgenInfo={description:"",methods:[],displayName:"TagSetOverflow",props:{allTagsModalSearchThreshold:{defaultValue:{value:"10",computed:!1},description:"count of overflowTags over which a modal is offered",type:{name:"number"},required:!1},overflowAlign:{defaultValue:{value:"'bottom'",computed:!1},description:"overflowAlign from the standard tooltip",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'left-top'",computed:!1},{value:"'right'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'right-top'",computed:!1}]},required:!1},className:{description:"className",type:{name:"string"},required:!1},onShowAllClick:{description:"function to execute on clicking show all",type:{name:"func"},required:!0},overflowTags:{description:"tags shown in overflow",type:{name:"arrayOf",value:{name:"object"}},required:!0},overflowType:{description:"Type of rendering displayed inside of the tag overflow component",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'tag'",computed:!1}]},required:!1},popoverOpen:{description:"Open state of the popover",type:{name:"bool"},required:!1},setPopoverOpen:{description:"Setter function for the popoverOpen state value",type:{name:"func"},required:!1},showAllTagsLabel:{description:"label for the overflow show all tags link",type:{name:"string"},required:!1}}};var props_helper=__webpack_require__("../ibm-products/src/global/js/utils/props-helper.js"),usePortalTarget=__webpack_require__("../ibm-products/src/global/js/hooks/usePortalTarget.js");function TagSetModal_typeof(o){return TagSetModal_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TagSetModal_typeof(o)}var TagSetModal_excluded=["allTags","className","title","onClose","open","portalTarget","searchLabel","searchPlaceholder"],_excluded2=["label"];function TagSetModal_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TagSetModal_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TagSetModal_ownKeys(Object(t),!0).forEach((function(r){TagSetModal_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TagSetModal_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TagSetModal_defineProperty(obj,key,value){return(key=function TagSetModal_toPropertyKey(arg){var key=function TagSetModal_toPrimitive(input,hint){if("object"!==TagSetModal_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==TagSetModal_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===TagSetModal_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TagSetModal_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TagSetModal_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TagSetModal_blockClass="".concat(settings.K.prefix,"--tag-set-modal"),TagSetModal_defaults_searchLabel="",TagSetModal=function TagSetModal(_ref){var allTags=_ref.allTags,className=_ref.className,title=_ref.title,onClose=_ref.onClose,open=_ref.open,portalTargetIn=_ref.portalTarget,_ref$searchLabel=_ref.searchLabel,searchLabel=void 0===_ref$searchLabel?TagSetModal_defaults_searchLabel:_ref$searchLabel,searchPlaceholder=_ref.searchPlaceholder,rest=TagSetModal_objectWithoutProperties(_ref,TagSetModal_excluded),_useState2=_slicedToArray((0,react.useState)([]),2),filteredModalTags=_useState2[0],setFilteredModalTags=_useState2[1],_useState4=_slicedToArray((0,react.useState)(""),2),search=_useState4[0],setSearch=_useState4[1],renderPortalUse=(0,usePortalTarget.T)(portalTargetIn);(0,react.useEffect)((function(){var newFilteredModalTags=[];if(open)if(""===search)newFilteredModalTags=allTags.slice(0);else{var lCaseSearch=search.toLocaleLowerCase();allTags.forEach((function(tag){var _tag$dataSearch,_tag$label,dataSearch=null===(_tag$dataSearch=tag["data-search"])||void 0===_tag$dataSearch||null===(_tag$dataSearch=_tag$dataSearch.toLocaleLowerCase())||void 0===_tag$dataSearch?void 0:_tag$dataSearch.indexOf(lCaseSearch),labelSearch=null===(_tag$label=tag.label)||void 0===_tag$label||null===(_tag$label=_tag$label.toLocaleLowerCase())||void 0===_tag$label?void 0:_tag$label.indexOf(lCaseSearch);(dataSearch>-1||labelSearch>-1)&&newFilteredModalTags.push(tag)}))}setFilteredModalTags(newFilteredModalTags)}),[allTags,open,search]);return renderPortalUse((0,jsx_runtime.jsxs)(es.lpG,TagSetModal_objectSpread(TagSetModal_objectSpread({},rest),{},{containerClassName:"".concat(TagSetModal_blockClass,"__container"),className:classnames_default()(className,"".concat(TagSetModal_blockClass)),size:"sm",open,onClose,children:[(0,jsx_runtime.jsx)(es.xBx,{className:"".concat(TagSetModal_blockClass,"__header"),closeModal:onClose,title,children:(0,jsx_runtime.jsx)(es.olm,{"data-modal-primary-focus":!0,className:"".concat(TagSetModal_blockClass,"__search"),labelText:searchLabel,placeholder:searchPlaceholder,onChange:function handleSearch(ev){setSearch(ev.target.value||"")},size:"lg"})}),(0,jsx_runtime.jsx)(es.fef,{className:"".concat(TagSetModal_blockClass,"__body"),hasForm:!0,children:filteredModalTags.map((function(_ref2,index){var label=_ref2.label,other=TagSetModal_objectWithoutProperties(_ref2,_excluded2);return(0,react.createElement)(es.Vp9,TagSetModal_objectSpread(TagSetModal_objectSpread({},other),{},{filter:!1,key:"all-tags-".concat(index)}),label)}))}),(0,jsx_runtime.jsx)("div",{className:"".concat(TagSetModal_blockClass,"__fade")})]})))};TagSetModal.propTypes={allTags:prop_types_default().arrayOf(prop_types_default().shape(TagSetModal_objectSpread(TagSetModal_objectSpread({},(0,props_helper.eG)(es.Vp9.propTypes,"filter")),{},{label:prop_types_default().string.isRequired}))),className:prop_types_default().string,onClose:prop_types_default().func,open:prop_types_default().bool,portalTarget:prop_types_default().node,searchLabel:prop_types_default().string,searchPlaceholder:prop_types_default().string,title:prop_types_default().string},TagSetModal.displayName="TagSetModal";var useResizeObserver=__webpack_require__("../ibm-products/src/global/js/hooks/useResizeObserver.js"),devtools=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js");function TagSet_typeof(o){return TagSet_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TagSet_typeof(o)}var TagSet_excluded=["align","allTagsModalTarget","className","maxVisible","multiline","overflowAlign","overflowClassName","overflowType","allTagsModalTitle","allTagsModalSearchLabel","allTagsModalSearchPlaceholderText","showAllTagsLabel","tags","containingElementRef","measurementOffset","onOverflowTagChange"],TagSet_excluded2=["label","id"],_excluded3=["label","onClose"];function TagSet_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TagSet_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TagSet_ownKeys(Object(t),!0).forEach((function(r){TagSet_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TagSet_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TagSet_defineProperty(obj,key,value){return(key=function TagSet_toPropertyKey(arg){var key=function TagSet_toPrimitive(input,hint){if("object"!==TagSet_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==TagSet_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===TagSet_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TagSet_slicedToArray(arr,i){return function TagSet_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function TagSet_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function TagSet_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return TagSet_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TagSet_arrayLikeToArray(o,minLen)}(arr,i)||function TagSet_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TagSet_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TagSet_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TagSet_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TagSet_blockClass="".concat(settings.K.prefix,"--tag-set"),TagSet_defaults={align:"start",measurementOffset:0,overflowAlign:"bottom",overflowType:"default",onOverflowTagChange:function onOverflowTagChange(){}},TagSet=react.forwardRef((function(_ref,ref){var _ref$align=_ref.align,align=void 0===_ref$align?TagSet_defaults.align:_ref$align,allTagsModalTarget=_ref.allTagsModalTarget,className=_ref.className,maxVisible=_ref.maxVisible,multiline=_ref.multiline,_ref$overflowAlign=_ref.overflowAlign,overflowAlign=void 0===_ref$overflowAlign?TagSet_defaults.overflowAlign:_ref$overflowAlign,overflowClassName=_ref.overflowClassName,_ref$overflowType=_ref.overflowType,overflowType=void 0===_ref$overflowType?TagSet_defaults.overflowType:_ref$overflowType,allTagsModalTitle=_ref.allTagsModalTitle,allTagsModalSearchLabel=_ref.allTagsModalSearchLabel,allTagsModalSearchPlaceholderText=_ref.allTagsModalSearchPlaceholderText,showAllTagsLabel=_ref.showAllTagsLabel,tags=_ref.tags,containingElementRef=_ref.containingElementRef,_ref$measurementOffse=_ref.measurementOffset,measurementOffset=void 0===_ref$measurementOffse?TagSet_defaults.measurementOffset:_ref$measurementOffse,_ref$onOverflowTagCha=_ref.onOverflowTagChange,onOverflowTagChange=void 0===_ref$onOverflowTagCha?TagSet_defaults.onOverflowTagChange:_ref$onOverflowTagCha,rest=TagSet_objectWithoutProperties(_ref,TagSet_excluded),_useState2=TagSet_slicedToArray((0,react.useState)(3),2),displayCount=_useState2[0],setDisplayCount=_useState2[1],_useState4=TagSet_slicedToArray((0,react.useState)([]),2),displayedTags=_useState4[0],setDisplayedTags=_useState4[1],_useState6=TagSet_slicedToArray((0,react.useState)([]),2),hiddenSizingTags=_useState6[0],setHiddenSizingTags=_useState6[1],_useState8=TagSet_slicedToArray((0,react.useState)(!1),2),showAllModalOpen=_useState8[0],setShowAllModalOpen=_useState8[1],localTagSetRef=(0,react.useRef)(null),tagSetRef=ref||localTagSetRef,sizingContainerRef=(0,react.useRef)(),displayedArea=(0,react.useRef)(null),_useState10=TagSet_slicedToArray((0,react.useState)([]),2),sizingTags=_useState10[0],setSizingTags=_useState10[1],overflowTag=(0,react.useRef)(null),_useState12=TagSet_slicedToArray((0,react.useState)(!1),2),popoverOpen=_useState12[0],setPopoverOpen=_useState12[1],handleShowAllClick=function handleShowAllClick(){setShowAllModalOpen(!0)};(0,react.useEffect)((function(){var newSizingTags=[];setHiddenSizingTags(tags&&tags.length>0?tags.map((function(_ref2,index){var label=_ref2.label,id=_ref2.id,other=TagSet_objectWithoutProperties(_ref2,TagSet_excluded2);return(0,jsx_runtime.jsx)("div",{className:"".concat(TagSet_blockClass,"__sizing-tag"),ref:function ref(el){return newSizingTags[index]=el},children:(0,jsx_runtime.jsx)(es.Vp9,TagSet_objectSpread(TagSet_objectSpread({},other),{},{"data-original-id":id,children:label}))},index)})):[]),setSizingTags(newSizingTags)}),[tags]);var handleTagOnClose=(0,react.useCallback)((function(onClose,index){null==onClose||onClose(),index<=displayCount-1&&setPopoverOpen(!1)}),[displayCount]);(0,react.useEffect)((function(){var newDisplayedTags=tags&&tags.length>0?tags.map((function(_ref3,index){var label=_ref3.label,_onClose=_ref3.onClose,other=TagSet_objectWithoutProperties(_ref3,_excluded3);return(0,react.createElement)(es.Vp9,TagSet_objectSpread(TagSet_objectSpread({},other),{},{key:"displayed-tag-".concat(index),onClose:function onClose(){return handleTagOnClose(_onClose,index)}}),label)})):[],newOverflowTags=newDisplayedTags.splice(displayCount,newDisplayedTags.length-displayCount);(newDisplayedTags=newDisplayedTags.map((function(tag,index){return(0,jsx_runtime.jsx)("div",{className:"".concat(TagSet_blockClass,"__displayed-tag"),children:tag},index)}))).push((0,jsx_runtime.jsx)(TagSetOverflow,{allTagsModalSearchThreshold:10,className:overflowClassName,onShowAllClick:handleShowAllClick,overflowTags:newOverflowTags,overflowAlign,overflowType,showAllTagsLabel,ref:overflowTag,popoverOpen,setPopoverOpen},"displayed-tag-overflow")),null==onOverflowTagChange||onOverflowTagChange(newOverflowTags),setDisplayedTags(newDisplayedTags)}),[displayCount,overflowAlign,overflowClassName,overflowType,showAllTagsLabel,tags,onOverflowTagChange,popoverOpen,handleTagOnClose]);var checkFullyVisibleTags=(0,react.useCallback)((function(){if(multiline)return setDisplayCount(maxVisible);var willFit=0;if(sizingTags.length>0){var optionalContainingElement=null==containingElementRef?void 0:containingElementRef.current,measurementOffsetValue="number"==typeof measurementOffset?measurementOffset:0,spaceAvailable=optionalContainingElement?optionalContainingElement.offsetWidth-measurementOffsetValue:tagSetRef.current.offsetWidth;for(var i in sizingTags){var _sizingTags$i,tagWidth=(null===(_sizingTags$i=sizingTags[i])||void 0===_sizingTags$i?void 0:_sizingTags$i.offsetWidth)||0;if(!(spaceAvailable>=tagWidth))break;spaceAvailable-=tagWidth,willFit+=1}if(willFit<sizingTags.length)for(;willFit>0&&spaceAvailable<overflowTag.current.offsetWidth;)spaceAvailable+=sizingTags[willFit-=1].offsetWidth}setDisplayCount(willFit<1?0:maxVisible?Math.min(willFit,maxVisible):willFit)}),[maxVisible,multiline,sizingTags,tagSetRef,measurementOffset,containingElementRef]);(0,react.useEffect)((function(){checkFullyVisibleTags()}),[checkFullyVisibleTags,maxVisible,multiline,sizingTags]);(0,useResizeObserver.y)(sizingContainerRef,(function handleSizerTagsResize(){checkFullyVisibleTags()}));var resizeOption=containingElementRef||tagSetRef;return(0,useResizeObserver.y)(resizeOption,(function handleResize(){checkFullyVisibleTags()})),(0,jsx_runtime.jsxs)("div",TagSet_objectSpread(TagSet_objectSpread(TagSet_objectSpread({},rest),{},{className:classnames_default()([TagSet_blockClass,className]),ref:tagSetRef},(0,devtools.n8)("TagSet")),{},{children:[(0,jsx_runtime.jsxs)("div",{className:classnames_default()(["".concat(TagSet_blockClass,"__space"),"".concat(TagSet_blockClass,"__space--align-").concat(align)]),children:[(0,jsx_runtime.jsx)("div",{className:"".concat(TagSet_blockClass,"__tag-container ").concat(TagSet_blockClass,"__tag-container--hidden"),"aria-hidden":!0,ref:sizingContainerRef,children:hiddenSizingTags}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(["".concat(TagSet_blockClass,"__tag-container"),multiline&&"".concat(TagSet_blockClass,"__tag-container--multiline")]),ref:displayedArea,children:displayedTags})]}),(0,jsx_runtime.jsx)(TagSetModal,{allTags:tags,open:showAllModalOpen,title:allTagsModalTitle,onClose:function handleModalClose(){setShowAllModalOpen(!1)},searchLabel:allTagsModalSearchLabel,searchPlaceholder:allTagsModalSearchPlaceholderText,portalTarget:allTagsModalTarget})]}))}));TagSet=settings.K.checkComponentEnabled(TagSet,"TagSet");var string_required_if_more_than_10_tags=(0,props_helper.I3)(prop_types_default().string,(function(_ref4){var tags=_ref4.tags;return tags&&tags.length>10})),tagTypes=Object.keys({red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"});TagSet.types=tagTypes,TagSet.propTypes={align:prop_types_default().oneOf(["start","center","end"]),allTagsModalSearchLabel:string_required_if_more_than_10_tags,allTagsModalSearchPlaceholderText:string_required_if_more_than_10_tags,allTagsModalTarget:prop_types_default().node,allTagsModalTitle:string_required_if_more_than_10_tags,className:prop_types_default().string,containingElementRef:prop_types_default().object,maxVisible:prop_types_default().number,measurementOffset:prop_types_default().number,multiline:prop_types_default().bool,onOverflowTagChange:prop_types_default().func,overflowAlign:prop_types_default().oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"]),overflowClassName:prop_types_default().string,overflowType:prop_types_default().oneOf(["default","tag"]),showAllTagsLabel:string_required_if_more_than_10_tags,tags:prop_types_default().arrayOf(prop_types_default().shape(TagSet_objectSpread(TagSet_objectSpread({},es.Vp9.propTypes),{},{label:prop_types_default().string.isRequired,type:prop_types_default().oneOf(tagTypes)})))},TagSet.displayName="TagSet";TagSet.__docgenInfo={description:"",methods:[],displayName:"TagSet",props:{align:{defaultValue:{value:"'start'",computed:!1},description:"align the Tags displayed by the TagSet. Default start.",type:{name:"enum",value:[{value:"'start'",computed:!1},{value:"'center'",computed:!1},{value:"'end'",computed:!1}]},required:!1},overflowAlign:{defaultValue:{value:"'bottom'",computed:!1},description:"overflowAlign from the standard tooltip. Default center.",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'left-top'",computed:!1},{value:"'right'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'right-top'",computed:!1}]},required:!1},overflowType:{defaultValue:{value:"'default'",computed:!1},description:"Type of rendering displayed inside of the tag overflow component",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'tag'",computed:!1}]},required:!1},measurementOffset:{defaultValue:{value:"0",computed:!1},description:"Specify offset amount for measure available space, only used when `containingElementSelector`\nis also provided",type:{name:"number"},required:!1},onOverflowTagChange:{defaultValue:{value:"() => {}",computed:!1},description:"Handler to get overflow tags",type:{name:"func"},required:!1},allTagsModalSearchLabel:{description:"label text for the show all search. **Note: Required if more than 10 tags**",type:{name:"custom",raw:"isRequiredIf(\n  PropTypes.string,\n  ({ tags }) => tags && tags.length > allTagsModalSearchThreshold\n)"},required:!1},allTagsModalSearchPlaceholderText:{description:"placeholder text for the show all search. **Note: Required if more than 10 tags**",type:{name:"custom",raw:"isRequiredIf(\n  PropTypes.string,\n  ({ tags }) => tags && tags.length > allTagsModalSearchThreshold\n)"},required:!1},allTagsModalTarget:{description:"portal target for the all tags modal",type:{name:"node"},required:!1},allTagsModalTitle:{description:"title for the show all modal. **Note: Required if more than 10 tags**",type:{name:"custom",raw:"isRequiredIf(\n  PropTypes.string,\n  ({ tags }) => tags && tags.length > allTagsModalSearchThreshold\n)"},required:!1},className:{description:"className",type:{name:"string"},required:!1},containingElementRef:{description:"Optional ref for custom resize container to measure available space\nDefault will measure the available space of the TagSet container itself.",type:{name:"object"},required:!1},maxVisible:{description:"maximum visible tags",type:{name:"number"},required:!1},multiline:{description:"display tags in multiple lines",type:{name:"bool"},required:!1},overflowClassName:{description:"overflowClassName for the tooltip popup",type:{name:"string"},required:!1},showAllTagsLabel:{description:"label for the overflow show all tags link.\n\n**Note:** Required if more than 10 tags",type:{name:"custom",raw:"isRequiredIf(\n  PropTypes.string,\n  ({ tags }) => tags && tags.length > allTagsModalSearchThreshold\n)"},required:!1},tags:{description:"The tags to be shown in the TagSet. Each tag is specified as an object\nwith properties: **label**\\* (required) to supply the tag content, and\nother properties will be passed to the Carbon Tag component, such as\n**type**, **disabled**, **ref**, **className** , and any other Tag props.\n\nSee https://react.carbondesignsystem.com/?path=/docs/components-tag--default",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},type:{name:"enum",value:[{value:'"red"',computed:!1},{value:'"magenta"',computed:!1},{value:'"purple"',computed:!1},{value:'"blue"',computed:!1},{value:'"cyan"',computed:!1},{value:'"teal"',computed:!1},{value:'"green"',computed:!1},{value:'"gray"',computed:!1},{value:'"cool-gray"',computed:!1},{value:'"warm-gray"',computed:!1},{value:'"high-contrast"',computed:!1},{value:'"outline"',computed:!1}],required:!1}}}},required:!1}}}},"../ibm-products/src/global/js/hooks/useClickOutside.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),useClickOutside=function useClickOutside(ref,callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleClick=function handleClick(event){ref.current&&!ref.current.contains(event.target)&&callback(event.target)};return document.addEventListener("click",handleClick),function(){document.removeEventListener("click",handleClick)}}),[callback,ref])}},"../ibm-products/src/global/js/hooks/usePortalTarget.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>usePortalTarget});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ibm-products/src/settings.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-dom/index.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var usePortalTarget=function usePortalTarget(portalTargetIn){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),portalTarget=_useState2[0],setPortalTarget=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){portalTargetIn?setPortalTarget(portalTargetIn):_settings__WEBPACK_IMPORTED_MODULE_2__.K.isFeatureEnabled("default-portal-target-body")&&setPortalTarget(document.body)}),[portalTargetIn]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(children){return portalTarget?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,portalTarget):children}),[portalTarget])}},"../ibm-products/src/global/js/hooks/useResizeObserver.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useResizeObserver=function useResizeObserver(ref,callback){var deps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),2),width=_useState2[0],setWidth=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),2),height=_useState4[0],setHeight=_useState4[1],entriesToHandle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),cb=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){cb.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){null==ref||!ref.current||width>=0&&height>=0||function getInitialSize(){if(ref.current){var _ref$current,_ref$current2,refComputedStyle=window.getComputedStyle(ref.current),initialWidth=((null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.offsetWidth)||0)-(parseFloat((null==refComputedStyle?void 0:refComputedStyle.paddingLeft)||0),parseFloat((null==refComputedStyle?void 0:refComputedStyle.paddingRight)||0)),initialHeight=((null===(_ref$current2=ref.current)||void 0===_ref$current2?void 0:_ref$current2.offsetHeight)||0)-(parseFloat((null==refComputedStyle?void 0:refComputedStyle.paddingTop)||0),parseFloat((null==refComputedStyle?void 0:refComputedStyle.paddingLeft)||0));setWidth(initialWidth),setHeight(initialHeight)}}()}),[width,height,ref.current].concat(_toConsumableArray(deps))),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){if(null!=ref&&ref.current){var observer=new ResizeObserver((function(entries){entriesToHandle.current=entries,window.requestAnimationFrame((function(){!function doCallbacks(){if(null!=ref&&ref.current&&Array.isArray(null==entriesToHandle?void 0:entriesToHandle.current)){var entry=entriesToHandle.current[0];setWidth(entry.contentRect.width),setHeight(entry.contentRect.height),cb.current&&cb.current(entry.contentRect)}}()}))}));return observer.observe(ref.current),function(){observer.disconnect(),observer=null}}}),[ref.current].concat(_toConsumableArray(deps))),{width,height}}}}]);