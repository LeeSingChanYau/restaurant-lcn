if (self.CavalryLogger) { CavalryLogger.start_js(["IOco4ha"]); }

__d("JobsCometBrowserBaseRootJobSearchQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3687393031388281",metadata:{},name:"JobsCometBrowserBaseRootJobSearchQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("JobsCometBrowserLeftRailQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3991011730959446",metadata:{},name:"JobsCometBrowserLeftRailQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("JobsCometBrowserListContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4244404022259059",metadata:{},name:"JobsCometBrowserListContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometStickyHeaderHideOnScrollDown.react",["BaseStickyHeader.react","ReactDOMComet","react","useCometOnScroll"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=b.useState,l={header:{transform:"agkhgkm8",transitionDuration:"tn0ko95a",transitionProperty:"flx89l3n"},headerHidden:{pointerEvents:"hzruof5a",transform:"i9k17dj3",transitionDuration:"tn0ko95a"}},m=4;function a(a){var b=a.children,e=a.headerHeight,f=a.hideHeader;f=f===void 0?!0:f;var g=a.onScroll,n=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","headerHeight","hideHeader","onScroll","xstyle"]);var o=k(!1),p=o[0],q=o[1],r=j(0);o=i(function(a){var b=a.top,c=r.current,f=b>c&&b>e;r.current=b;if(f===p||Math.abs(b-c)<=m)return;g&&g(a);d("ReactDOMComet").flushSync(function(){q(f)})},[p,g,e]);c("useCometOnScroll")(o);return f===!0?null:h.jsx(c("BaseStickyHeader.react"),babelHelpers["extends"]({},a,{"aria-hidden":f,xstyle:[n,p?l.headerHidden:l.header],children:b(!p)}))}g["default"]=a}),98);
__d("TetraPivotLinkRow.react",["CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={link:{maxWidth:"h26nb1kn"}};function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return h.jsx(c("CometRow.react"),babelHelpers["extends"]({},a,{align:"start",spacing:8,children:h.Children.map(b,function(a){return h.jsx(c("CometRowItem.react"),{xstyle:i.link,children:a})})}))}g["default"]=a}),98);
__d("CometFeedFiltersPivotLink.react",["TetraPivotLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.label,d=a.linkProps,e=a.onPress;a=a.selected;return h.jsx(c("TetraPivotLink.react"),{color:a?"highlight":"tertiary",label:b,linkProps:d,onPress:e,onWashBackground:!0,selected:a,type:"deemphasized"})}g["default"]=a}),98);
__d("CometFeedFiltersHeader.react",["fbt","ix","CometDeferredPopoverTrigger.react","CometFeedFiltersPivotLink.react","CometRouteParams","CometRow.react","CometRowItem.react","CometStickyHeaderHideOnScrollDown.react","CometVisualCompletionAttributes","TetraButton.react","TetraPivotLinkRow.react","XCometHomeControllerRouteBuilder","fbicon","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useEffect,l=b.useState,m=c("requireDeferred")("CometFeedFiltersPopoverMenu.react").__setRef("CometFeedFiltersHeader.react"),n={background:{backgroundColor:"qsy8amke",marginEnd:"atpwa242",marginStart:"a0m09mqa",paddingEnd:"f7vcsfb0",paddingStart:"fjf4s8hc"},header:{borderBottom:"s1tcr66n"}},o={headerHidden:{marginBottom:"bi6gxh9e"},headerVisible:{marginBottom:"tvmbv18p"}};function p(a){switch(a){case"h_chr":return"most_recent";case"favorites":return"favorites";default:return"home"}}function a(){var a=d("CometRouteParams").useRouteParams(),b=a.sk;a=l(p(b));var e=a[0],f=a[1];a=l(e==="home");var g=a[0],q=a[1];k(function(){var a=p(b);f(a);a!=="home"&&g===!0&&q(!1)},[g,b]);return j.jsx(c("CometStickyHeaderHideOnScrollDown.react"),babelHelpers["extends"]({},c("CometVisualCompletionAttributes").IGNORE,{headerHeight:45,hideHeader:g,onScroll:function(){if(!g)return;q(!1)},topOffset:8,children:function(a){return j.jsx("div",{className:c("stylex")(n.background),children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,spacingVertical:16,xstyle:[n.header,a?o.headerVisible:o.headerHidden],children:[j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsxs(c("TetraPivotLinkRow.react"),{paddingHorizontal:0,paddingVertical:0,children:[j.jsx(c("CometFeedFiltersPivotLink.react"),{label:h._("Home"),linkProps:{url:c("XCometHomeControllerRouteBuilder").buildURL({})},onPress:function(){return f("home")},selected:e==="home"}),j.jsx(c("CometFeedFiltersPivotLink.react"),{label:h._("Favorites"),linkProps:{url:c("XCometHomeControllerRouteBuilder").buildURL({sk:"favorites"})},onPress:function(){return f("favorites")},selected:e==="favorites"}),j.jsx(c("CometFeedFiltersPivotLink.react"),{label:h._("Recent"),linkProps:{url:c("XCometHomeControllerRouteBuilder").buildURL({sk:"h_chr"})},onPress:function(){return f("most_recent")},selected:e==="most_recent"})]})}),a?j.jsx(c("CometRowItem.react"),{children:j.jsx(c("CometDeferredPopoverTrigger.react"),{align:"end",popoverProps:{selectedFeedType:e},popoverResource:m,position:"below",children:function(a,b){return j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("500221"),16),label:h._("Your News Feed"),labelIsHidden:!0,onPress:b,ref:a,testid:void 0,type:"secondary"})}})}):null]})})}}))}g["default"]=a}),98);
__d("buildCometJobsBrowserRoute.entrypoint",["JSResourceForInteraction","JobsCometBrowserBaseRootJobSearchQuery$Parameters","JobsCometBrowserLeftRailQuery$Parameters","createContentAreaCompoundEntryPointBuilder"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("JobsCometBrowserBaseRoot.react").__setRef("buildCometJobsBrowserRoute.entrypoint");d=c("createContentAreaCompoundEntryPointBuilder")(a,function(a){var c=a.routeProps.location,d=c.latitude;c=c.longitude;return{jobSearchQueryReference:{parameters:b("JobsCometBrowserBaseRootJobSearchQuery$Parameters"),variables:{fptIdParams:(a=a.routeProps.categories)==null?void 0:a[0]}},leftRailQueryReference:{parameters:b("JobsCometBrowserLeftRailQuery$Parameters"),variables:{location:{latitude:d,longitude:c}}}}});g["default"]=d}),98);
__d("JobsCometBrowserFindJobsTabRoot.entrypoint",["JSResourceForInteraction","JobsCometBrowserListContainerQuery$Parameters","buildCometJobsBrowserRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("JobsCometBrowserFindJobsTabRoot.react").__setRef("JobsCometBrowserFindJobsTabRoot.entrypoint");function h(a){switch(a){case 1:return"HOURLY";case 5:return"MONTHLY";case 6:return"ANNUALLY";default:return"HOURLY"}}d=c("buildCometJobsBrowserRoute.entrypoint")(a,function(a){var c=a.routeProps,d=c.categories,e=c.job_types,f=c.location,g=c.use_fpt_category;c=c.wage_currency;var i=a.routeParams,j=i.keyword,k=i.max_wage,l=i.min_wage,m=i.pinned_job_opening_id,n=i.wage_type;i=i.waterfall_session_id;var o=f.latitude,p=f.longitude,q=f.radius;f=f.vanityPageId;a=(i=i)!=null?i:(i=a.timeSpentMetaData)==null?void 0:i.job_search_session_id;return{queries:{jobsCometBrowserListContainerQueryReference:{parameters:b("JobsCometBrowserListContainerQuery$Parameters"),variables:{cityID:f,count:10,fptVirtualCategories:g?d:[],jobTypeFilters:e,keyword:j,latitude:o,location:{latitude:o,longitude:p},longitude:p,maxWage:k!=null?k*100:null,minWage:l!=null?l*100:null,occupationCategoryFilters:g?[]:d.map(function(a){return parseInt(a,10)}),pinnedJobOpeningID:m,radius:q,wageCurrency:c,wageTypes:[h(n)],waterfallSessionID:a}}}}});g["default"]=d}),98);
__d("JobBrowserMode",[],(function(a,b,c,d,e,f){a=Object.freeze({HIRING:"hiring",SEEKING:"seeking"});f["default"]=a}),66);