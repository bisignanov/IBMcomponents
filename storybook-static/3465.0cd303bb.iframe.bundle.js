/*! For license information please see 3465.0cd303bb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[3465],{"../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var MapShim=function(){if("undefined"!=typeof Map)return Map;function getIndex(arr,key){var result=-1;return arr.some((function(entry,index){return entry[0]===key&&(result=index,!0)})),result}return function(){function class_1(){this.__entries__=[]}return Object.defineProperty(class_1.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),class_1.prototype.get=function(key){var index=getIndex(this.__entries__,key),entry=this.__entries__[index];return entry&&entry[1]},class_1.prototype.set=function(key,value){var index=getIndex(this.__entries__,key);~index?this.__entries__[index][1]=value:this.__entries__.push([key,value])},class_1.prototype.delete=function(key){var entries=this.__entries__,index=getIndex(entries,key);~index&&entries.splice(index,1)},class_1.prototype.has=function(key){return!!~getIndex(this.__entries__,key)},class_1.prototype.clear=function(){this.__entries__.splice(0)},class_1.prototype.forEach=function(callback,ctx){void 0===ctx&&(ctx=null);for(var _i=0,_a=this.__entries__;_i<_a.length;_i++){var entry=_a[_i];callback.call(ctx,entry[1],entry[0])}},class_1}()}(),isBrowser="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,global$1=void 0!==__webpack_require__.g&&__webpack_require__.g.Math===Math?__webpack_require__.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),requestAnimationFrame$1="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(global$1):function(callback){return setTimeout((function(){return callback(Date.now())}),1e3/60)};var transitionKeys=["top","right","bottom","left","width","height","size","weight"],mutationObserverSupported="undefined"!=typeof MutationObserver,ResizeObserverController=function(){function ResizeObserverController(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function throttle(callback,delay){var leadingCall=!1,trailingCall=!1,lastCallTime=0;function resolvePending(){leadingCall&&(leadingCall=!1,callback()),trailingCall&&proxy()}function timeoutCallback(){requestAnimationFrame$1(resolvePending)}function proxy(){var timeStamp=Date.now();if(leadingCall){if(timeStamp-lastCallTime<2)return;trailingCall=!0}else leadingCall=!0,trailingCall=!1,setTimeout(timeoutCallback,delay);lastCallTime=timeStamp}return proxy}(this.refresh.bind(this),20)}return ResizeObserverController.prototype.addObserver=function(observer){~this.observers_.indexOf(observer)||this.observers_.push(observer),this.connected_||this.connect_()},ResizeObserverController.prototype.removeObserver=function(observer){var observers=this.observers_,index=observers.indexOf(observer);~index&&observers.splice(index,1),!observers.length&&this.connected_&&this.disconnect_()},ResizeObserverController.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},ResizeObserverController.prototype.updateObservers_=function(){var activeObservers=this.observers_.filter((function(observer){return observer.gatherActive(),observer.hasActive()}));return activeObservers.forEach((function(observer){return observer.broadcastActive()})),activeObservers.length>0},ResizeObserverController.prototype.connect_=function(){isBrowser&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),mutationObserverSupported?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},ResizeObserverController.prototype.disconnect_=function(){isBrowser&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},ResizeObserverController.prototype.onTransitionEnd_=function(_a){var _b=_a.propertyName,propertyName=void 0===_b?"":_b;transitionKeys.some((function(key){return!!~propertyName.indexOf(key)}))&&this.refresh()},ResizeObserverController.getInstance=function(){return this.instance_||(this.instance_=new ResizeObserverController),this.instance_},ResizeObserverController.instance_=null,ResizeObserverController}(),defineConfigurable=function(target,props){for(var _i=0,_a=Object.keys(props);_i<_a.length;_i++){var key=_a[_i];Object.defineProperty(target,key,{value:props[key],enumerable:!1,writable:!1,configurable:!0})}return target},getWindowOf=function(target){return target&&target.ownerDocument&&target.ownerDocument.defaultView||global$1},emptyRect=createRectInit(0,0,0,0);function toFloat(value){return parseFloat(value)||0}function getBordersSize(styles){for(var positions=[],_i=1;_i<arguments.length;_i++)positions[_i-1]=arguments[_i];return positions.reduce((function(size,position){return size+toFloat(styles["border-"+position+"-width"])}),0)}function getHTMLElementContentRect(target){var clientWidth=target.clientWidth,clientHeight=target.clientHeight;if(!clientWidth&&!clientHeight)return emptyRect;var styles=getWindowOf(target).getComputedStyle(target),paddings=function getPaddings(styles){for(var paddings={},_i=0,positions_1=["top","right","bottom","left"];_i<positions_1.length;_i++){var position=positions_1[_i],value=styles["padding-"+position];paddings[position]=toFloat(value)}return paddings}(styles),horizPad=paddings.left+paddings.right,vertPad=paddings.top+paddings.bottom,width=toFloat(styles.width),height=toFloat(styles.height);if("border-box"===styles.boxSizing&&(Math.round(width+horizPad)!==clientWidth&&(width-=getBordersSize(styles,"left","right")+horizPad),Math.round(height+vertPad)!==clientHeight&&(height-=getBordersSize(styles,"top","bottom")+vertPad)),!function isDocumentElement(target){return target===getWindowOf(target).document.documentElement}(target)){var vertScrollbar=Math.round(width+horizPad)-clientWidth,horizScrollbar=Math.round(height+vertPad)-clientHeight;1!==Math.abs(vertScrollbar)&&(width-=vertScrollbar),1!==Math.abs(horizScrollbar)&&(height-=horizScrollbar)}return createRectInit(paddings.left,paddings.top,width,height)}var isSVGGraphicsElement="undefined"!=typeof SVGGraphicsElement?function(target){return target instanceof getWindowOf(target).SVGGraphicsElement}:function(target){return target instanceof getWindowOf(target).SVGElement&&"function"==typeof target.getBBox};function getContentRect(target){return isBrowser?isSVGGraphicsElement(target)?function getSVGContentRect(target){var bbox=target.getBBox();return createRectInit(0,0,bbox.width,bbox.height)}(target):getHTMLElementContentRect(target):emptyRect}function createRectInit(x,y,width,height){return{x,y,width,height}}var ResizeObservation=function(){function ResizeObservation(target){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=createRectInit(0,0,0,0),this.target=target}return ResizeObservation.prototype.isActive=function(){var rect=getContentRect(this.target);return this.contentRect_=rect,rect.width!==this.broadcastWidth||rect.height!==this.broadcastHeight},ResizeObservation.prototype.broadcastRect=function(){var rect=this.contentRect_;return this.broadcastWidth=rect.width,this.broadcastHeight=rect.height,rect},ResizeObservation}(),ResizeObserverEntry=function ResizeObserverEntry(target,rectInit){var contentRect=function createReadOnlyRect(_a){var x=_a.x,y=_a.y,width=_a.width,height=_a.height,Constr="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,rect=Object.create(Constr.prototype);return defineConfigurable(rect,{x,y,width,height,top:y,right:x+width,bottom:height+y,left:x}),rect}(rectInit);defineConfigurable(this,{target,contentRect})},ResizeObserverSPI=function(){function ResizeObserverSPI(callback,controller,callbackCtx){if(this.activeObservations_=[],this.observations_=new MapShim,"function"!=typeof callback)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=callback,this.controller_=controller,this.callbackCtx_=callbackCtx}return ResizeObserverSPI.prototype.observe=function(target){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(target instanceof getWindowOf(target).Element))throw new TypeError('parameter 1 is not of type "Element".');var observations=this.observations_;observations.has(target)||(observations.set(target,new ResizeObservation(target)),this.controller_.addObserver(this),this.controller_.refresh())}},ResizeObserverSPI.prototype.unobserve=function(target){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(target instanceof getWindowOf(target).Element))throw new TypeError('parameter 1 is not of type "Element".');var observations=this.observations_;observations.has(target)&&(observations.delete(target),observations.size||this.controller_.removeObserver(this))}},ResizeObserverSPI.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},ResizeObserverSPI.prototype.gatherActive=function(){var _this=this;this.clearActive(),this.observations_.forEach((function(observation){observation.isActive()&&_this.activeObservations_.push(observation)}))},ResizeObserverSPI.prototype.broadcastActive=function(){if(this.hasActive()){var ctx=this.callbackCtx_,entries=this.activeObservations_.map((function(observation){return new ResizeObserverEntry(observation.target,observation.broadcastRect())}));this.callback_.call(ctx,entries,ctx),this.clearActive()}},ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0)},ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0},ResizeObserverSPI}(),observers="undefined"!=typeof WeakMap?new WeakMap:new MapShim,ResizeObserver=function ResizeObserver(callback){if(!(this instanceof ResizeObserver))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var controller=ResizeObserverController.getInstance(),observer=new ResizeObserverSPI(callback,controller,this);observers.set(this,observer)};["observe","unobserve","disconnect"].forEach((function(method){ResizeObserver.prototype[method]=function(){var _a;return(_a=observers.get(this))[method].apply(_a,arguments)}}));const __WEBPACK_DEFAULT_EXPORT__=void 0!==global$1.ResizeObserver?global$1.ResizeObserver:ResizeObserver},"../../node_modules/scheduler/cjs/scheduler.production.min.js":(__unused_webpack_module,exports)=>{function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(!(0<g(e,b)))break a;a[d]=b,a[c]=e,c=d}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else{if(!(n<e&&0>g(x,c)))break a;a[d]=x,a[n]=c,d=n}}}return b}function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"==typeof setTimeout?setTimeout:null,E="function"==typeof clearTimeout?clearTimeout:null,F="undefined"!=typeof setImmediate?setImmediate:null;function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else{if(!(b.startTime<=a))break;k(t),b.sortIndex=b.expirationTime,f(r,b)}b=h(t)}}function H(a){if(B=!1,G(a),!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}function J(a,b){A=!1,B&&(B=!1,E(L),L=-1),z=!0;var c=y;try{for(G(b),v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"==typeof d){v.callback=null,y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now(),"function"==typeof e?v.callback=e:v===h(r)&&k(r),G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b),w=!1}return w}finally{v=null,y=c,z=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,N=!1,O=null,L=-1,P=5,Q=-1;function M(){return!(exports.unstable_now()-Q<P)}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}if("function"==typeof F)S=function(){F(R)};else if("undefined"!=typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R,S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a,N||(N=!0,S())}function K(a,b){L=D((function(){a(exports.unstable_now())}),b)}exports.unstable_IdlePriority=5,exports.unstable_ImmediatePriority=1,exports.unstable_LowPriority=4,exports.unstable_NormalPriority=3,exports.unstable_Profiling=null,exports.unstable_UserBlockingPriority=2,exports.unstable_cancelCallback=function(a){a.callback=null},exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))},exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1e3/a):5},exports.unstable_getCurrentPriorityLevel=function(){return y},exports.unstable_getFirstCallbackNode=function(){return h(r)},exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}},exports.unstable_pauseExecution=function(){},exports.unstable_requestPaint=function(){},exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}},exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();switch("object"==typeof c&&null!==c?c="number"==typeof(c=c.delay)&&0<c?d+c:d:c=d,a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1e4;break;default:e=5e3}return a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e=c+e,sortIndex:-1},c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J))),a},exports.unstable_shouldYield=M,exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}}},"../../node_modules/scheduler/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/scheduler/cjs/scheduler.production.min.js")},"../../node_modules/set-function-length/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var GetIntrinsic=__webpack_require__("../../node_modules/get-intrinsic/index.js"),define=__webpack_require__("../../node_modules/define-data-property/index.js"),hasDescriptors=__webpack_require__("../../node_modules/has-property-descriptors/index.js")(),gOPD=__webpack_require__("../../node_modules/gopd/index.js"),$TypeError=GetIntrinsic("%TypeError%"),$floor=GetIntrinsic("%Math.floor%");module.exports=function setFunctionLength(fn,length){if("function"!=typeof fn)throw new $TypeError("`fn` is not a function");if("number"!=typeof length||length<0||length>4294967295||$floor(length)!==length)throw new $TypeError("`length` must be a positive 32-bit integer");var loose=arguments.length>2&&!!arguments[2],functionLengthIsConfigurable=!0,functionLengthIsWritable=!0;if("length"in fn&&gOPD){var desc=gOPD(fn,"length");desc&&!desc.configurable&&(functionLengthIsConfigurable=!1),desc&&!desc.writable&&(functionLengthIsWritable=!1)}return(functionLengthIsConfigurable||functionLengthIsWritable||!loose)&&(hasDescriptors?define(fn,"length",length,!0,!0):define(fn,"length",length)),fn}}}]);