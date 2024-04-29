"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[5402],{"../ibm-products/src/components/UserProfileImage/UserProfileImage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithGroupIcon:()=>WithGroupIcon,WithImage:()=>WithImage,WithImageAndTooltip:()=>WithImageAndTooltip,WithInitials:()=>WithInitials,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UserProfileImage_stories});var react=__webpack_require__("../../node_modules/react/index.js"),UserProfileImage=__webpack_require__("../ibm-products/src/components/UserProfileImage/UserProfileImage.tsx"),headshot=__webpack_require__("../ibm-products/src/components/UserProfileImage/headshot.jpg"),StoryDocsPage=__webpack_require__("../ibm-products/src/global/js/utils/StoryDocsPage.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),DocsPage=function DocsPage(){return(0,jsx_runtime.jsx)(StoryDocsPage.r,{blocks:[{story:Default},{story:WithGroupIcon,description:"By passing in icon prop with a value of `group`, the avatar will display the group icon"},{story:WithInitials,description:"When passing a display name to the component, the display name will be distilled down to the first and last initials of the display name. `Thomas Watson` and `Thomas J. Watson` will both display `TW` as the initials."}]})};DocsPage.displayName="DocsPage";const UserProfileImage_docs_page=DocsPage;DocsPage.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultArgs={backgroundColor:"light-cyan",theme:"light",size:"xl"};const UserProfileImage_stories={title:"IBM Products/Patterns/User profile images/UserProfileImage",component:UserProfileImage.n,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["light-cyan","dark-cyan"]},theme:{control:{type:"select"},options:["light","dark"]},kind:{control:{type:"radio"},options:["user","group"]},size:{control:{type:"radio"},options:["xl","lg","md"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},parameters:{storySource:{source:"function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\n * Copyright IBM Corp. 2021, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from 'react';\nimport { UserProfileImage } from '.';\nimport image from './headshot.jpg'; // cspell:disable-line\nimport DocsPage from './UserProfileImage.docs-page';\n\n// import styles from './_storybook.scss'; // import storybook which includes component and additional storybook styles\n\nvar defaultArgs = {\n  backgroundColor: 'light-cyan',\n  theme: 'light',\n  size: 'xl'\n};\nexport default {\n  title: 'IBM Products/Patterns/User profile images/UserProfileImage',\n  component: UserProfileImage,\n  tags: ['autodocs'],\n  argTypes: {\n    backgroundColor: {\n      control: {\n        type: 'select'\n      },\n      options: ['light-cyan', 'dark-cyan']\n    },\n    theme: {\n      control: {\n        type: 'select'\n      },\n      options: ['light', 'dark']\n    },\n    kind: {\n      control: {\n        type: 'radio'\n      },\n      options: ['user', 'group']\n    },\n    size: {\n      control: {\n        type: 'radio'\n      },\n      options: ['xl', 'lg', 'md']\n    },\n    tooltipAlignment: {\n      control: {\n        type: 'select'\n      },\n      options: ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'right']\n    }\n  },\n  parameters: {\n    // styles,\n    docs: {\n      page: DocsPage\n    }\n  }\n};\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(UserProfileImage, args);\n};\nexport var Default = Template.bind({});\nDefault.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {\n  kind: 'user',\n  tooltipText: 'Thomas Watson'\n});\nexport var WithGroupIcon = Template.bind({});\nWithGroupIcon.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {\n  kind: 'group'\n});\nexport var WithInitials = Template.bind({});\nWithInitials.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {\n  initials: 'thomas j. watson',\n  tooltipText: 'Thomas Watson'\n});\nexport var WithImage = Template.bind({});\nWithImage.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {\n  image: image,\n  imageDescription: 'image here'\n});\nexport var WithImageAndTooltip = Template.bind({});\nWithImageAndTooltip.args = _objectSpread(_objectSpread({}, defaultArgs), {}, {\n  image: image,\n  imageDescription: 'image here',\n  tooltipText: 'Display Name'\n});",locationsMap:{default:{startLoc:{col:15,line:69},endLoc:{col:1,line:71},startBody:{col:15,line:69},endBody:{col:1,line:71}},"with-group-icon":{startLoc:{col:15,line:69},endLoc:{col:1,line:71},startBody:{col:15,line:69},endBody:{col:1,line:71}},"with-initials":{startLoc:{col:15,line:69},endLoc:{col:1,line:71},startBody:{col:15,line:69},endBody:{col:1,line:71}},"with-image":{startLoc:{col:15,line:69},endLoc:{col:1,line:71},startBody:{col:15,line:69},endBody:{col:1,line:71}},"with-image-and-tooltip":{startLoc:{col:15,line:69},endLoc:{col:1,line:71},startBody:{col:15,line:69},endBody:{col:1,line:71}}}},docs:{page:UserProfileImage_docs_page}}};var Template=function Template(args){return react.createElement(UserProfileImage.n,args)},Default=Template.bind({});Default.args=_objectSpread(_objectSpread({},defaultArgs),{},{kind:"user",tooltipText:"Thomas Watson"});var WithGroupIcon=Template.bind({});WithGroupIcon.args=_objectSpread(_objectSpread({},defaultArgs),{},{kind:"group"});var WithInitials=Template.bind({});WithInitials.args=_objectSpread(_objectSpread({},defaultArgs),{},{initials:"thomas j. watson",tooltipText:"Thomas Watson"});var WithImage=Template.bind({});WithImage.args=_objectSpread(_objectSpread({},defaultArgs),{},{image:headshot,imageDescription:"image here"});var WithImageAndTooltip=Template.bind({});WithImageAndTooltip.args=_objectSpread(_objectSpread({},defaultArgs),{},{image:headshot,imageDescription:"image here",tooltipText:"Display Name"}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <UserProfileImage {...args} />;\n}",...Default.parameters?.docs?.source}}},WithGroupIcon.parameters={...WithGroupIcon.parameters,docs:{...WithGroupIcon.parameters?.docs,source:{originalSource:"args => {\n  return <UserProfileImage {...args} />;\n}",...WithGroupIcon.parameters?.docs?.source}}},WithInitials.parameters={...WithInitials.parameters,docs:{...WithInitials.parameters?.docs,source:{originalSource:"args => {\n  return <UserProfileImage {...args} />;\n}",...WithInitials.parameters?.docs?.source}}},WithImage.parameters={...WithImage.parameters,docs:{...WithImage.parameters?.docs,source:{originalSource:"args => {\n  return <UserProfileImage {...args} />;\n}",...WithImage.parameters?.docs?.source}}},WithImageAndTooltip.parameters={...WithImageAndTooltip.parameters,docs:{...WithImageAndTooltip.parameters?.docs,source:{originalSource:"args => {\n  return <UserProfileImage {...args} />;\n}",...WithImageAndTooltip.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithGroupIcon","WithInitials","WithImage","WithImageAndTooltip"]},"../ibm-products/src/components/TooltipTrigger/TooltipTrigger.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>TooltipTrigger});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_settings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ibm-products/src/settings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_3__.K.prefix,"--tooltip-trigger"),TooltipTrigger=function TooltipTrigger(_ref){var children=_ref.children,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",_objectSpread(_objectSpread({type:"button"},rest),{},{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockClass,className),children}))};TooltipTrigger.displayName="TooltipTrigger",(TooltipTrigger=_settings__WEBPACK_IMPORTED_MODULE_3__.K.checkComponentEnabled(TooltipTrigger,"TooltipTrigger")).displayName="TooltipTrigger",TooltipTrigger.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},TooltipTrigger.__docgenInfo={description:"This is an tooltip trigger as Carbon Tooltip requires an active element to work but provides\nno blanked button.",methods:[],displayName:"TooltipTrigger",props:{children:{description:"Child content of tooltip trigger",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1}}}},"../ibm-products/src/components/UserProfileImage/UserProfileImage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>UserProfileImage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),_settings__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("../ibm-products/src/global/js/utils/props-helper.js"),__webpack_require__("../ibm-products/src/settings.js")),_carbon_react_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-16.js"),_carbon_react_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-6.js"),_carbon_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),_TooltipTrigger__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../ibm-products/src/components/TooltipTrigger/TooltipTrigger.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["backgroundColor","className","kind","icon","initials","image","imageDescription","size","theme","tooltipText","tooltipAlignment"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_5__.K.prefix,"--user-profile-image"),defaults_tooltipAlignment="bottom",UserProfileImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var _FillItem,backgroundColor=_ref.backgroundColor,className=_ref.className,kind=_ref.kind,icon=_ref.icon,initials=_ref.initials,image=_ref.image,imageDescription=_ref.imageDescription,size=_ref.size,theme=_ref.theme,tooltipText=_ref.tooltipText,_ref$tooltipAlignment=_ref.tooltipAlignment,tooltipAlignment=void 0===_ref$tooltipAlignment?defaults_tooltipAlignment:_ref$tooltipAlignment,rest=_objectWithoutProperties(_ref,_excluded),carbonPrefix=(0,_carbon_react__WEBPACK_IMPORTED_MODULE_3__.AKj)(),icons={user:{md:function md(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_6__.n5,_objectSpread({size:20},props))},lg:function lg(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_6__.n5,_objectSpread({size:24},props))},xl:function xl(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_6__.n5,_objectSpread({size:32},props))}},group:{md:function md(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_7__.ZA,_objectSpread({size:20},props))},lg:function lg(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_7__.ZA,_objectSpread({size:24},props))},xl:function xl(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_7__.ZA,_objectSpread({size:32},props))}}},formatInitials=function formatInitials(){var _match;return initials&&2===initials.length?initials:(null===(_match=(initials||"").match(/(^\S\S?|\b\S)?/g))||void 0===_match||null===(_match=_match.join("").match(/(^\S|\S$)?/g))||void 0===_match?void 0:_match.join("").toUpperCase())||""},getRandomColor=function getRandomColor(){var colors=["light-cyan","dark-cyan","light-gray","dark-gray","light-green","dark-green","light-magenta","dark-magenta","light-purple","dark-purple","light-teal","dark-teal"];return colors[Math.floor(Math.random()*colors.length)]},FillItem=function getFillItem(){return image?function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{alt:imageDescription,src:image,className:"".concat(blockClass,"__photo ").concat(blockClass,"__photo--").concat(size)})}:initials?formatInitials:kind&&size?icons[kind][size]:icon}(),renderUserProfileImage=function renderUserProfileImage(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",_objectSpread(_objectSpread(_objectSpread({},rest),{},{ref,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()([blockClass,className,"".concat(blockClass,"--").concat(size),"".concat(blockClass,"--").concat(theme),"".concat(blockClass,"--").concat(backgroundColor||getRandomColor())])},(0,_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_8__.n8)("UserProfileImage")),{},{children:_FillItem||(_FillItem=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FillItem,{}))}))};return FillItem&&(tooltipText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.ua7,{align:tooltipAlignment,label:tooltipText,className:"".concat(blockClass,"__tooltip ").concat(carbonPrefix,"--icon-tooltip"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TooltipTrigger__WEBPACK_IMPORTED_MODULE_9__.a,{children:renderUserProfileImage()})}):renderUserProfileImage())}));(UserProfileImage=_settings__WEBPACK_IMPORTED_MODULE_5__.K.checkComponentEnabled(UserProfileImage,"UserProfileImage")).displayName="UserProfileImage",UserProfileImage.propTypes={backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["light-cyan","dark-cyan","light-gray","dark-gray","light-green","dark-green","light-magenta","dark-magenta","light-purple","dark-purple","light-teal","dark-teal"]),className:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func,image:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,imageDescription:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired.if((function(_ref2){return!!_ref2.image})),initials:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,kind:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["user","group"]),size:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["xl","lg","md"]).isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["light","dark"]).isRequired,tooltipAlignment:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]),tooltipText:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string},UserProfileImage.__docgenInfo={description:"The user profile avatar allows for an image of the user to be displayed by passing in the image prop. By default the component will display a user icon on a blue background.",methods:[],displayName:"UserProfileImage",props:{tooltipAlignment:{defaultValue:{value:"'bottom'",computed:!1},description:"Specify how the trigger should align with the tooltip",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},backgroundColor:{description:"The background color passed should match one of the background colors in the library documentation:\nhttps://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/",type:{name:"enum",value:[{value:"'light-cyan'",computed:!1},{value:"'dark-cyan'",computed:!1},{value:"'light-gray'",computed:!1},{value:"'dark-gray'",computed:!1},{value:"'light-green'",computed:!1},{value:"'dark-green'",computed:!1},{value:"'light-magenta'",computed:!1},{value:"'dark-magenta'",computed:!1},{value:"'light-purple'",computed:!1},{value:"'dark-purple'",computed:!1},{value:"'light-teal'",computed:!1},{value:"'dark-teal'",computed:!1}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},icon:{description:"Provide a custom icon to use if you need to use an icon other than the included ones",type:{name:"func"},required:!1},image:{description:"When passing the image prop, supply a full path to the image to be displayed.",type:{name:"string"},required:!1},imageDescription:{description:"When passing the image prop use the imageDescription prop to describe the image for screen reader.",type:{name:"string"},required:!0},initials:{description:"When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.",type:{name:"string"},required:!1},kind:{description:'When passing the kind prop, use either "user" or "group". The values match up to the Carbon Library icons.',type:{name:"enum",value:[{value:"'user'",computed:!1},{value:"'group'",computed:!1}]},required:!1},size:{description:"Set the size of the avatar circle",type:{name:"enum",value:[{value:"'xl'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1}]},required:!0},theme:{description:"Set theme in which the component will be rendered",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!0},tooltipText:{description:"Pass in the display name to have it shown on hover",type:{name:"string"},required:!1}}}},"../ibm-products/src/global/js/utils/devtools.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n8:()=>getDevtoolsProps});var _package_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getDevtoolsProps(componentName){return _defineProperty({},_package_settings__WEBPACK_IMPORTED_MODULE_0__.s5,(0,_package_settings__WEBPACK_IMPORTED_MODULE_0__.Md)(componentName))}},"../ibm-products/src/global/js/utils/props-helper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I3:()=>isRequiredIf,UL:()=>allPropTypes,W:()=>getDeprecatedArgTypes,eG:()=>prepareProps,jc:()=>deprecateProp});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_pconsole__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ibm-products/src/global/js/utils/pconsole.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var prepareProps=function prepareProps(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++)values[_key]=arguments[_key];var merged=Object.assign.apply(Object,[{}].concat(_toConsumableArray(values.map((function toNulls(arg){return"string"==typeof arg?_defineProperty({},arg,null):Array.isArray(arg)?Object.fromEntries(arg.map((function(key){return[key,null]}))):arg})))));return Object.entries(merged).reduce((function(result,_ref2){var _ref3=_slicedToArray(_ref2,2),key=_ref3[0],value=_ref3[1];return null!==value&&(result[key]=value),result}),{})},propHasValue=function propHasValue(props,propName){var result=null!==props[propName]&&void 0!==props[propName];if(result&&"children"===propName&&Array.isArray(props[propName])){result=!1;for(var i=0;!result&&i<props[propName].length;i++)result=null!==props[propName][i]&&void 0!==props[propName][i]}return result},deprecateProp=function deprecateProp(validator,additionalInfo){return function(props,propName,comp,loc,propFullName,secret){return propHasValue(props,propName)&&_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.warn("The ".concat(loc," `").concat(propFullName||propName,"` of `").concat(comp,"` has been deprecated and will soon be removed. ").concat(additionalInfo)),validator(props,propName,comp,loc,propFullName,secret)}},getDeprecatedArgTypes=function getDeprecatedArgTypes(deprecatedProps){return Object.keys(deprecatedProps).reduce((function(acc,cur){return acc[cur]={table:{disable:!0}},acc}),{})},allPropTypes=_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.shimIfProduction((function(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers))return _pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.error("Warning: Invalid argument supplied to allPropTypes, expected an instance of array."),_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop;for(var i=0;i<arrayOfTypeCheckers.length;i++)if("function"!=typeof arrayOfTypeCheckers[i])return _pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.error("Invalid argument supplied to allPropTypes. Expected an array of check functions, but received ".concat(arrayOfTypeCheckers[i]," at index ").concat(i,".")),_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop;var checkType=function checkType(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var error=null;return arrayOfTypeCheckers.some((function(checker){return error=checker.apply(void 0,args)})),error};return checkType.isRequired=function(props,propName,comp,loc,propFullName,secret){var prop=propFullName||propName;return null==props[prop]?new Error("The ".concat(loc," `").concat(prop,"` is marked as required in `").concat(comp||"<<anonymous>>","`, but its value is `").concat(null===props[prop]?"null":"undefined","`.")):checkType(props,prop,comp,loc,propFullName,secret)},checkType})),isRequiredIf=function isRequiredIf(checker,conditionFn){return function(props,propName,componentName,location,propFullName,secret){return(conditionFn(props)?checker.isRequired:checker)(props,propName,componentName,location,propFullName,secret)}};for(var checker in isRequiredIf.decorate=function(checker){checker.isRequired.if=_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.isProduction?_pconsole__WEBPACK_IMPORTED_MODULE_1__.ZP.noop:isRequiredIf.bind(null,checker)},prop_types__WEBPACK_IMPORTED_MODULE_2___default())prop_types__WEBPACK_IMPORTED_MODULE_2___default()[checker].isRequired&&isRequiredIf.decorate(prop_types__WEBPACK_IMPORTED_MODULE_2___default()[checker])},"../ibm-products/src/components/UserProfileImage/headshot.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/headshot.234b5762.jpg"}}]);