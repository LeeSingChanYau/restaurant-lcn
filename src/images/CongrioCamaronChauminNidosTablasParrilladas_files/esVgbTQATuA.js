if (self.CavalryLogger) { CavalryLogger.start_js(["dqJMs5t"]); }

__d("CometVideoHomeReactionsInfo_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeReactionsInfo_video",selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFITopReactions_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFIReactionsCount_feedback"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoViewAndCrosspostedInfo_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoViewAndCrosspostedInfo_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"total_posts",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_play_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"play_count",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeReactionsInfo.react",["CometErrorBoundary.react","CometRelay","CometTrackingNodeProvider.react","CometUFIReactionsCount.react","CometUFITopReactions.react","CometVideoHomeReactionsInfo_video.graphql","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.color,f=a.disallowPrivateFeedback,g=a.hideReactionsBackground,j=a.sentenceBackgroundXStyle;a=a.video;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeReactionsInfo_video.graphql"),a);a=a==null?void 0:a.feedback;return a==null?null:i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:22,children:i.jsx(c("TetraTextPairing.react"),{body:i.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(c("CometUFITopReactions.react"),{feedback:a,noBorder:g})}),i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(c("CometUFIReactionsCount.react"),{disallowPrivateFeedback:f,feedback:a,sentenceBackgroundXStyle:j})})]}),bodyColor:(g=e)!=null?g:"tertiary",level:4})})}g["default"]=a}),98);
__d("CometVideoViewAndCrosspostedInfo.react",["fbt","CometRelay","CometTooltip.react","CometVideoViewAndCrosspostedInfo_video.graphql","TetraTextPairing.react","intlSummarizeNumber","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e,f=a.color,g=a.showTooltip;a=a.video;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometVideoViewAndCrosspostedInfo_video.graphql"),a);var k=+a.total_posts||0;e=(e=+a.post_play_count)!=null?e:0;a=(a=+a.play_count)!=null?a:0;var l=a-e,m=Math.max(0,k-1);f=j.jsx(c("TetraTextPairing.react"),{body:j.jsx("div",{className:"bnpdmtie",children:h._({"*":"{view_count} Views","_1":"{view_count} View"},[h._param("view_count",c("intlSummarizeNumber")(a)),h._plural(a)])}),bodyColor:(a=f)!=null?a:"tertiary",level:4});if(!g||m<=1||l<1)return f;a=j.jsxs("div",{className:"cbu4d94t j83agx80",children:[j.jsx("div",{children:h._({"*":"{number} views from this post","_1":"1 view from this post"},[h._plural(e,"number")])}),h._({"*":{"*":"{number} views from {posts count} other posts","_1":"{number} views from {posts count} other post"},"_1":{"*":"1 view from {posts count} other posts","_1":"1 view from {posts count} other post"}},[h._plural(l,"number"),h._param("posts count",m),h._plural(m)])]});return j.jsx(c("CometTooltip.react"),{align:"start",delayMs:500,headline:h._({"*":"Video Posted {number} Times","_1":"Video Posted 1 Time"},[h._plural(k,"number")]),position:"above",tooltip:a,children:f})}g["default"]=a}),98);