if (self.CavalryLogger) { CavalryLogger.start_js(["OTOEmWA"]); }

__d("InitialJSLoader",["Arbiter","Bootloader","PageEvents"],(function(a,b,c,d,e,f,g){var h="BOOTLOAD/JSREADY";function a(a,b){c("Arbiter").subscribe(c("PageEvents").BIGPIPE_DOMREADY,function(){function d(){c("Bootloader").loadResources(a,{onAll:function(){c("Arbiter").inform(h,!0,"state")}})}b!=null&&b>0?setTimeout(d,b):d()})}g.INITIAL_JS_READY=h;g.loadOnDOMContentReady=a}),98);
__d("PageHooks",["Arbiter","ErrorUtils","InitialJSLoader","PageEvents"],(function(a,b,c,d,e,f){var g;f={DOMREADY_HOOK:"domreadyhooks",ONLOAD_HOOK:"onloadhooks"};function h(){var c=a.CavalryLogger;!window.domready&&c&&c.getInstance().setTimeStamp("t_prehooks");k(l.DOMREADY_HOOK);!window.domready&&c&&c.getInstance().setTimeStamp("t_hooks");window.domready=!0;b("Arbiter").inform("uipage_onload",!0,"state")}function i(){k(l.ONLOAD_HOOK),window.loaded=!0}function j(a,c){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,null,null,function(a){a.event_type=c,a.category="runhook"},"PageHooks:"+c)}function k(a){var b=a=="onbeforeleavehooks"||a=="onbeforeunloadhooks";do{var c=window[a];if(!c)break;b||(window[a]=null);for(var d=0;d<c.length;d++){var e=j(c[d],a);if(b&&e)return e}}while(!b&&window[a])}function c(){window.domready||(window.domready=!0,k("onloadhooks")),window.loaded||(window.loaded=!0,k("onafterloadhooks"))}function d(){var a,c;(a=b("Arbiter")).registerCallback(h,[(c=b("PageEvents")).BIGPIPE_DOMREADY,b("InitialJSLoader").INITIAL_JS_READY]);a.registerCallback(i,[c.BIGPIPE_DOMREADY,c.BIGPIPE_ONLOAD,b("InitialJSLoader").INITIAL_JS_READY]);a.subscribe(c.NATIVE_ONBEFOREUNLOAD,function(a,b){b.warn=k("onbeforeleavehooks")||k("onbeforeunloadhooks"),b.warn||(window.domready=!1,window.loaded=!1)},"new");a.subscribe(c.NATIVE_ONUNLOAD,function(a,b){k("onunloadhooks"),k("onafterunloadhooks")},"new")}var l=babelHelpers["extends"]({_domreadyHook:h,_onloadHook:i,runHook:j,runHooks:k,keepWindowSetAsLoaded:c},f);d();a.PageHooks=e.exports=l}),null);
__d("ObservableMixin",[],(function(a,b,c,d,e,f){function a(){this.__observableEvents={}}a.prototype={inform:function(a){var b=Array.prototype.slice.call(arguments,1),c=Array.prototype.slice.call(this.getSubscribers(a));for(var d=0;d<c.length;d++){if(c[d]===null)continue;try{c[d].apply(this,b)}catch(a){window.setTimeout(function(){throw a},0)}}return this},getSubscribers:function(a){return this.__observableEvents[a]||(this.__observableEvents[a]=[])},clearSubscribers:function(a){a&&(this.__observableEvents[a]=[]);return this},subscribe:function(a,b){a=this.getSubscribers(a);a.push(b);return this},unsubscribe:function(a,b){a=this.getSubscribers(a);for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}return this}};e.exports=a}),null);
__d("Type",["Assert"],(function(a,b,c,d,e,f){function g(){var a=this.__mixins;if(a)for(var b=0;b<a.length;b++)a[b].apply(this,arguments)}function h(a,b){if(b instanceof a)return!0;if(b instanceof g)for(var c=0;c<b.__mixins.length;c++)if(b.__mixins[c]==a)return!0;return!1}function i(a,b){var c=a.prototype;Array.isArray(b)||(b=[b]);for(var a=0;a<b.length;a++){var d=b[a];typeof d==="function"&&(c.__mixins.push(d),d=d.prototype);Object.keys(d).forEach(function(a){c[a]=d[a]})}}function j(a,c,d){var e=c&&Object.prototype.hasOwnProperty.call(c,"constructor")?c.constructor:function(){this.parent.apply(this,arguments)};b("Assert").isFunction(e);if(a&&a.prototype instanceof g===!1)throw new Error("parent type does not inherit from Type");a=a||g;function f(){}f.prototype=a.prototype;e.prototype=new f();c&&Object.assign(e.prototype,c);e.prototype.constructor=e;e.parent=a;e.prototype.__mixins=a.prototype.__mixins?Array.prototype.slice.call(a.prototype.__mixins):[];d&&i(e,d);e.prototype.parent=function(){this.parent=a.prototype.parent,a.apply(this,arguments)};e.prototype.parentCall=function(b){return a.prototype[b].apply(this,Array.prototype.slice.call(arguments,1))};e.extend=function(a,b){return j(this,a,b)};return e}Object.assign(g.prototype,{instanceOf:function(a){return h(a,this)}});Object.assign(g,{extend:function(a,b){return typeof a==="function"?j.apply(null,arguments):j(null,a,b)},instanceOf:h});e.exports=g}),null);
__d("sdk.Model",["ObservableMixin","Type"],(function(a,b,c,d,e,f,g){"use strict";a=c("Type").extend({constructor:function(a){this.parent();var b={},c=this;Object.keys(a).forEach(function(d){b[d]=a[d],c["set"+d]=function(a){if(a===b[d])return c;b[d]=a;c.inform(d+".change",a);return c},c["get"+d]=function(){return b[d]}})}},c("ObservableMixin"));b=a;g["default"]=b}),98);
__d("sdk.Runtime",["JSSDKRuntimeConfig","sdk.Model"],(function(a,b,c,d,e,f,g){var h={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},i=new(c("sdk.Model"))({AccessToken:"",AutoLogAppEvents:!1,ClientID:"",CookieUserID:"",EnforceHttps:!1,Environment:h.UNKNOWN,GraphDomain:"",Initialized:!1,IsVersioned:!1,KidDirectedSite:void 0,Locale:d("JSSDKRuntimeConfig").locale,LoggedIntoFacebook:void 0,LoginStatus:void 0,Revision:d("JSSDKRuntimeConfig").revision,Rtl:d("JSSDKRuntimeConfig").rtl,Scope:void 0,SDKAB:d("JSSDKRuntimeConfig").sdkab,SDKUrl:d("JSSDKRuntimeConfig").sdkurl,SDKNS:d("JSSDKRuntimeConfig").sdkns,UseCookie:!1,UseLocalStorage:!0,UserID:"",Version:void 0});Object.assign(i,{ENVIRONMENTS:h,isEnvironment:function(a){var b=this.getEnvironment();return(a|b)===b},isCanvasEnvironment:function(){return this.isEnvironment(h.CANVAS)||this.isEnvironment(h.PAGETAB)}});(function(){var a=/app_runner/.test(window.name)?h.PAGETAB:/iframe_canvas/.test(window.name)?h.CANVAS:h.UNKNOWN;(a|h.PAGETAB)===a&&(a|=h.CANVAS);i.setEnvironment(a)})();a=i;g["default"]=a}),98);
__d("UrlMap",["invariant","UrlMapConfig","sdk.Runtime"],(function(a,b,c,d,e,f,g,h){function a(a){var b="https";if(a==="graph_domain"){var e=c("sdk.Runtime").getGraphDomain();e?a="graph_".concat(e):a="graph"}if(a in d("UrlMapConfig"))return b+"://"+d("UrlMapConfig")[a];a in d("UrlMapConfig")||h(0,2511,a);return""}g.resolve=a}),98);
__d("TV2UniqueIDs",["guid"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map();function i(a){var b;b=(b=h.get(a))!=null?b:0;h.set(a,b+1);return""+a+b.toString(36)}function a(){return i("id_tv2_vcr_")}function b(){return i("id_tv2_veqe_")}function d(){return i("id_tv2_toast_")}function e(){return i("id_tv2_rvr_")}function f(){return c("guid")()}g.makeTV2VideoCastRequestID=a;g.makeTV2VideoExperienceQueueEntryID=b;g.makeTV2ToastID=d;g.makeTV2RelatedVideosRequestID=e;g.makeTV2ChainingSessionID=f}),98);
__d("getTV2QueryStringCheatcodeValue",[],(function(a,b,c,d,e,f){"use strict";function b(b){try{b=new RegExp("\\b"+b+"=([^&]*)");b=b.exec(a.location.search);return!b||b[1]==null?null:b[1]}catch(a){return null}}f["default"]=b}),66);
__d("getTV2QueryStringCheatcode",["getTV2QueryStringCheatcodeValue"],(function(a,b,c,d,e,f,g){"use strict";function a(a){try{return c("getTV2QueryStringCheatcodeValue")(a)==="1"}catch(a){return!1}}g["default"]=a}),98);
__d("getTV2DebuggingEnabled",["getTV2QueryStringCheatcode"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("getTV2QueryStringCheatcode")("debugging")}g["default"]=a}),98);
__d("TV2CommsParseUtils",["TV2UniqueIDs","err","getTV2DebuggingEnabled"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return a===null?"null":a===""?"empty string":Array.isArray(a)?"array":typeof a==="object"?"object with keys: "+JSON.stringify(Object.keys(a).sort()):typeof a}function i(a,b,d){if(typeof a!=="string"||a===""){var e=c("err")("Message parse error: %s expected JSON string, got %s",d,h(a));throw e}try{e=JSON.parse(a);return b(e,d)}catch(b){if("messageFormat"in b&&typeof b.messageFormat==="string"&&"messageParams"in b&&Array.isArray(b.messageParams))throw b;else{a=c("err")("Message parse error: %s expected JSON string, got error: %s",d,b.message);throw a}}}function j(a,b){if(typeof a!=="object"||a==null){b=c("err")("Message parse error: %s expected object, got %s",b,h(a));throw b}return a}function b(a,b){if(a==null)return null;if(typeof a!=="object"||a==null){b=c("err")("Message parse error: %s expected object, got %s",b,h(a));throw b}return a}function k(a,b){if(!Array.isArray(a)){b=c("err")("Message parse error: %s expected array, got %s",b,h(a));throw b}return a}function l(a,b){if(!Array.isArray(a)){var d=c("err")("Message parse error: %s expected array, got %s",b,h(a));throw d}d=a.map(function(a){return m(a,b)});return d}function m(a,b){if(typeof a!=="string"||a===""){b=c("err")("Message parse error: %s expected non-empty string, got %s",b,h(a));throw b}return a}function n(a,b){if(a==null)return null;if(typeof a!=="string"||a===""){b=c("err")("Message parse error: %s expected optional non-empty string, got %s",b,h(a));throw b}return a}function o(a,b){if(a==null)return null;if(typeof a!=="string"){b=c("err")("Message parse error: %s expected optional string, got %s",b,h(a));throw b}return a}function p(a,b){if(a==null)return null;if(!(typeof a==="number"&&Number.isFinite(a)||typeof a==="string"&&a!=="")){b=c("err")("Message parse error: %s expected optional non-empty string or number, got %s",b,h(a));throw b}return a}function q(a,b){if(typeof a!=="number"||!Number.isFinite(a)){b=c("err")("Message parse error: %s expected finite number, got %s",b,h(a));throw b}return a}function e(a,b){if(a==null)return null;if(typeof a!=="number"||!Number.isFinite(a)){b=c("err")("Message parse error: %s expected optional finite number, got %s",b,h(a));throw b}return a}function f(a,b){return a==="true"||a===!0}function r(a,b,c){c===void 0&&(c=!1);return a==null?c:a===!0}function s(a,b){if(typeof a!=="boolean"){b=c("err")("Parse error: %s expected boolean, got %s",b,h(a));throw b}return a}function t(a,b){a=a!=null?j(a,b):null;if(a==null)return null;var c=m(a.uri,b+".uri"),d=q(a.width,b+".width");a=q(a.height,b+".height");return{height:a,uri:c,width:d}}function u(a,b){a=a!=null?j(a,b):null;if(a==null)return null;a=j(a.image,b+".image");a=m(a.uri,b+".image.uri");return{uri:a}}function v(a,b){if(a==null)return null;a=k(a,b);return a.map(function(a,b){return m(a,"["+b+"]")})}function w(a,b){return i(a,function(b,a){b=k(b,a);return b.map(function(b,c){c=a+"."+c;return y(j(b,c),c)})},b)}function x(a,b){return i(a,function(b,a){return y(j(b,a),a)},b)}function y(b,e){var f=m(b.access_token,e+".access_token"),g=String(p(b.app_id,e+".app_id")),h=o(b.app_version,e+".app_version"),i=t(b.background_image,e+".background_image"),j=n(b.channel_token,e+".channel_token"),k=n(b.channel_session_id,e+".channel_session_id"),q=o(b.end_cursor,e+".end_cursor")||null,s=r(b.from_next_video_query,e+".from_next_video_query"),w=r(b.is_ad,e+".is_ad"),x=v(b.dash_prefetched_representation_ids,e+".dash_prefetched_representation_ids"),y=n(b.entry_point,e+".entry_point"),z=n(b.player_origin===""?null:b.player_origin,e+".player_origin"),A=n(b.player_suborigin===""?null:b.player_suborigin,e+".player_suborigin"),B=u(b.preferred_thumbnail,e+".preferred_thumbnail"),C=n(b.video_channel_id,e+".video_channel_id"),D=m(b.root_video_id,e+".root_video_id"),E=c("getTV2DebuggingEnabled")()?/\bvideo_id=([0-9]+)\b/.exec(a.location.search):null;E=E&&E[1]?E[1]:m(b.video_id,e+".video_id");b=b.tracking_codes!=null?l(b.tracking_codes,e+".tracking_codes"):null;return{accessToken:f,appID:g,appVersion:h,backgroundImage:i,chainingEnabled:!1,channelSessionID:k,channelToken:j,dashPrefetchedRepresentationIDs:x,endCursor:q,entryPoint:y,fromNextVideoQuery:s,isAd:w,playerOrigin:z,playerSuborigin:A,preferredThumbnail:B,rootVideoID:D,startTimestamp:0,trackingCodes:b,videoCastRequestID:d("TV2UniqueIDs").makeTV2VideoCastRequestID(),videoChannelID:C,videoID:E}}function z(a,b){a=j(a,b);b=m(a.type,b+".type");switch(b){case"version_response":return a;case"version_launch_response":return a;case"experience_state":return a;case"command_result":return a;case"duration_change":return a;case"status_update":return a}b=c("err")("Parse error: %s expected response message type, got %s","parseTV2CommsFBAppOutboundMessageFromObject",h(a));throw b}function A(a){return i(a,z,".")}function B(a){a=A(a);switch(a.type){case"version_response":case"version_launch_response":case"experience_state":case"command_result":return a}a=c("err")("Parse error: %s expected response message type, got %s","parseCastingReceiverResponseMessageFromJSON",h(a));throw a}g.parseJSONString=i;g.parseObject=j;g.parseOptionalObject=b;g.parseArray=k;g.parseStringArray=l;g.parseNonEmptyString=m;g.parseOptionalNonEmptyString=n;g.parseOptionalString=o;g.parseNumber=q;g.parseOptionalNumber=e;g.parseOptionalStringishBoolean=f;g.parseOptionalBoolean=r;g.parseBoolean=s;g.parseVideoCastingPayloadBackgroundImage=t;g.parseVideoCastingPayloadPreferredThumbnail=u;g.parseVideoCastingPayloadListJSONAsTV2VideoCastRequestArray=w;g.parseVideoCastingPayloadJSONAsTV2VideoCastRequest=x;g.parseVideoCastingPayloadAsTV2VideoCastRequest=y;g.parseTV2CommsFBAppOutboundMessageFromJSON=A;g.parseCastingReceiverResponseMessageFromJSON=B}),98);
__d("TV2MessageTypes",[],(function(a,b,c,d,e,f){"use strict";a="urn:x-cast:com.facebook.fb";b="urn:x-cast:com.google.cast.media";f.FBAPP_CAST_PROTOCOL_NAMESPACE=a;f.GOOGLE_CAST_MEDIA_PROTOCOL_NAMESPACE=b}),66);
__d("TV2PhotoShowRequest",[],(function(a,b,c,d,e,f){"use strict";function a(a){return k(JSON.parse(a),m("TV2PhotoShowRequest"))}function b(a){return JSON.stringify(l(a,m("TV2PhotoShowRequest")),null,2)}function g(a,b,c){c===void 0&&(c="");if(c)throw Error('Invalid value for key "'+c+'". Expected type '+JSON.stringify(a)+" but got "+JSON.stringify(b));throw Error("Invalid value "+JSON.stringify(b)+" for type "+JSON.stringify(a))}function h(a){if(a.jsonToJS===void 0){var b={};a.props.forEach(function(a){return b[a.json]={key:a.js,typ:a.typ}});a.jsonToJS=b}return a.jsonToJS}function i(a){if(a.jsToJSON===void 0){var b={};a.props.forEach(function(a){return b[a.js]={key:a.json,typ:a.typ}});a.jsToJSON=b}return a.jsToJSON}function j(a,b,c,d){d===void 0&&(d="");function e(b,a){return typeof b===typeof a?a:g(b,a,d)}function f(b,a){var d=b.length;for(var e=0;e<d;e++){var f=b[e];try{return j(a,f,c)}catch(a){}}return g(b,a)}function h(b,a){return b.indexOf(a)!==-1?a:g(b,a)}function i(b,a){return!Array.isArray(a)?g("array",a):a.map(function(a){return j(a,b,c)})}function k(a){if(a===null)return null;var b=new Date(a);return isNaN(b.valueOf())?g("Date",a):b}function l(b,d,a){if(a===null||typeof a!=="object"||Array.isArray(a))return g("object",a);var e={};Object.getOwnPropertyNames(b).forEach(function(d){var f=b[d];d=Object.prototype.hasOwnProperty.call(a,d)?a[d]:void 0;e[f.key]=j(d,f.typ,c,f.key)});Object.getOwnPropertyNames(a).forEach(function(f){Object.prototype.hasOwnProperty.call(b,f)||(e[f]=j(a[f],d,c,f))});return e}if(b==="any")return a;if(b===null)return a===null?a:g(b,a);if(b===!1)return g(b,a);while(typeof b==="object"&&b.ref!==void 0)b=n[b.ref];if(Array.isArray(b))return h(b,a);if(typeof b==="object")return Object.prototype.hasOwnProperty.call(b,"unionMembers")?f(b.unionMembers,a):Object.prototype.hasOwnProperty.call(b,"arrayItems")?i(b.arrayItems,a):Object.prototype.hasOwnProperty.call(b,"props")?l(c(b),b.additional,a):g(b,a);return b===Date&&typeof a!=="number"?k(a):e(b,a)}function k(a,b){return j(a,b,h)}function l(a,b){return j(a,b,i)}function c(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];return{unionMembers:b}}function d(a,b){return{props:a,additional:b}}function m(a){return{ref:a}}var n={TV2PhotoShowRequest:d([{json:"media_parameters",js:"media_parameters",typ:m("MediaParameters")},{json:"request_id",js:"request_id",typ:""}],"any"),MediaParameters:d([{json:"photo_id",js:"photo_id",typ:c(void 0,"")},{json:"video_id",js:"video_id",typ:c(void 0,"")}],"any")};e.exports={TV2PhotoShowRequestToJson:b,toTV2PhotoShowRequest:a}}),null);
__d("ConnectedTvLoggingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1843753");c=b("FalcoLoggerInternal").create("connected_tv_logging",a);e.exports=c}),null);