if (self.CavalryLogger) { CavalryLogger.start_js(["h3lXvCv"]); }

__d("TetraPivotLinkPile.react",["CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={defaultWidth:{maxWidth:"h26nb1kn"},fullWidth:{maxWidth:"d2edcug0"}};function a(a){var b=a.align;b=b===void 0?"center":b;var d=a.children,e=a.isFullWidth,f=e===void 0?!1:e;e=babelHelpers.objectWithoutPropertiesLoose(a,["align","children","isFullWidth"]);return h.jsx(c("CometRow.react"),babelHelpers["extends"]({},e,e.paddingVertical==null?{paddingTop:8}:null,{align:b,spacing:8,wrap:"forward",children:h.Children.map(d,function(a){return h.jsx(c("CometRowItem.react"),{xstyle:f?i.fullWidth:i.defaultWidth,children:a})})}))}g["default"]=a}),98);
__d("CometGeoCircleRadius",[],(function(a,b,c,d,e,f){"use strict";function g(a){switch(a){case"kilometer":case"kilometers":return"k";case"meter":case"meters":return"m";case"mile":case"miles":return"mi";case"foot":case"feet":return"ft"}return""}function a(a){var b=a.unit;a=a.value;return a+g(b)}f.toQueryData=a}),66);
__d("CometGeoCircle",["CometGeoCircleRadius"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.color,c=a.fillColor,e=a.position,f=a.radius;a=a.weight;var g=e.latitude;e=e.longitude;a=["weight:"+a,"color:"+b,"fillcolor:"+c,g+","+e,d("CometGeoCircleRadius").toQueryData(f)];return a.join("|")}g.toQueryData=a}),98);
__d("useMapImageURI",["CometGeoCircle","CurrentLocale","TilesMapConfig","URI","WebPixelRatio","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo,i=1.5,j=1,k=2;function l(a){var b=a.boundingBox,e=a.center,f=a.circle,g=a.markers,h=a.paths,l=a.size;a=a.zoom;var m=l.height;l=l.width;if(l===0||m===0)return null;l=new(c("URI"))(c("TilesMapConfig").STATIC_MAP_URL_TEMPLATE).addQueryData("size",l+"x"+m).addQueryData("language",c("CurrentLocale").get());m=(m=d("WebPixelRatio").get())!=null?m:c("TilesMapConfig").DEVICE_PIXEL_RATIO;m=m<i?j:k;l.addQueryData("scale",m);a!=null&&l.addQueryData("zoom",a);if(b!=null){m=b.east;a=b.north;var n=b.south;b=b.west;l.addQueryData("visible",a+","+b+"|"+n+","+m)}else if(e!=null){a=e.latitude;b=e.longitude;l.addQueryData("center",a+","+b)}g!=null&&g.length>0&&l.addQueryData("marker_list",g.map(function(a){var b=a.icon,c=a.label;a=a.position;return(b==null?"":"icon:"+b.iconPath+"|anchor:"+b.anchorU+","+b.anchorV+"|")+(c==null?"":"label:"+c+"|")+(a.latitude+","+a.longitude)}));h!=null&&h.length>0&&l.addQueryData("paths",h.map(function(a){var b=a.color,c=a.dashed,d=a.fillColor,e=a.points,f=a.route;a=a.weight;var g=[];b!=null&&g.push("color:"+b);c!=null&&c.length>0&&g.push("dashed:"+c.join(","));d!=null&&g.push("fillcolor:"+d);a!=null&&g.push("weight:"+a);f!=null&&g.push("route:"+f);for(var b=0;b<e.length;b++){c=e[b];d=c.latitude;a=c.longitude;g.push(d+","+a)}return g.join("|")}));f!=null&&l.addQueryData("circle",d("CometGeoCircle").toQueryData(f));return l}function a(a){var b=a.boundingBox,c=a.center,d=a.circle,e=a.height,f=a.markers,g=a.paths,i=a.width,j=a.zoom;return h(function(){return l({boundingBox:b,center:c,circle:d,markers:f,paths:g,size:{height:e,width:i},zoom:j})},[b,c,d,e,f,g,i,j])}g["default"]=a}),98);
__d("BaseStaticMap.react",["react","useMapImageURI"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.className,d=a.expand;d=d===void 0?!1:d;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","expand"]);var e=c("useMapImageURI")(a);e={backgroundImage:e==null?"none":"url("+e.toString()+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:d?"100%":a.height,width:d?"100%":a.width};return h.jsx("div",{className:b,style:e})}g["default"]=a}),98);
__d("CometMapInfoButton.react",["fbt","ix","CometLazyPopoverTrigger.react","JSResourceForInteraction","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=c("JSResourceForInteraction")("CometMapInfoMenu.react").__setRef("CometMapInfoButton.react"),k=d("react");function a(a){var b=a.infoButtonPosition;b=b===void 0?"bottomright":b;a=a.reportMapConfig;return k.jsx("div",{className:c("stylex").dedupe({"pointer-events-1":"oqq733wu","position-1":"pmk7jnqg"},b==="bottomleft"?{"bottom-1":"fpi38s0q","start-1":"ilmj46im"}:null,b==="bottomright"?{"bottom-1":"fpi38s0q","end-1":"o0s42vec"}:null,b==="topright"?{"end-1":"o0s42vec","top-1":"iscu2v8x"}:null),children:k.jsx(c("CometLazyPopoverTrigger.react"),{align:b.includes("left")?"start":"end",popoverProps:{reportMapConfig:a},popoverResource:j,position:b.includes("bottom")?"above":"below",children:function(a,b){return k.jsx(c("TetraIcon.react"),{"aria-label":h._("View Map Info"),color:"tertiary",icon:d("fbicon")._(i("479176"),16),onPress:b,ref:a})}})})}g["default"]=a}),98);
__d("CometGeoRectangle",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){var c=a.north;a=a.south;return b>=a&&b<=c}function a(a){var b=a.east,c=a.north,d=a.south;a=a.west;c=(c+d)/2;d=(b+a)/2;a>b&&(d-=180,d<-180&&(d+=360));return{latitude:c,longitude:d}}function h(a,b){var c=a.east;a=a.west;return a>c?b>=a||b<=c:b>=a&&b<=c}function b(a){var b=a.north;a=a.south;return b-a}function c(a){var b=a.east;a=a.west;b=a>b?b+360:b;return b-a}function i(a,b,c){return g(a,b)&&h(a,c)}function d(a,b){return i(a,b.north,b.west)&&i(a,b.south,b.east)}f.containsLat=g;f.getCenter=a;f.containsLong=h;f.getHeight=b;f.getWidth=c;f.containsPoint=i;f.containsGeoRectangle=d}),66);
__d("CometMapConfig",[],(function(a,b,c,d,e,f){"use strict";a="#4D6AA4";b="#DC3847";var g=2,h=200/255,i=3,j={blue:a,red:b};function k(a){return(a*255).toString(16).substr(0,2)}function l(a,b,c){a===void 0&&(a="blue");b===void 0&&(b=!1);c===void 0&&(c=.5);b=b?56/255:28/255;a=j[a];return{color:a,colorOpacity:c,fillColor:a,fillColorOpacity:b}}c={getLeafletCircleColorConfig:function(a,b){b===void 0&&(b=!1);a=l(a);b=b===!0?2:1;return{color:a.color,fillColor:a.fillColor,fillOpacity:a.fillColorOpacity*b,opacity:a.colorOpacity,weight:g}},getLeafletCircleMarkerColorConfig:function(a){return{color:"#FFFFFF",fillColor:l(a).fillColor,fillOpacity:1,opacity:1,radius:4,weight:2}},getStaticCircleColorConfig:function(a,b,c){a=l(a,b,c);b=a.color;c=a.colorOpacity;var d=a.fillColor;a=a.fillColorOpacity;return{color:"0x"+b.substr(1)+k(c),fillColor:"0x"+d.substr(1)+k(a),weight:g}},getStaticPathColorConfig:function(){var a=l("blue");a=a.color;return{color:"0x"+a.substr(1)+k(h),weight:i}}};f["default"]=c}),66);
__d("CometStaticMap.react",["BaseStaticMap.react","CometGeoRectangle","CometMapConfig","CometPlaceholder.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometMapInfoButton.react").__setRef("CometStaticMap.react"));function a(a){var b=a.circle,e=a.expand;e=e===void 0?!1:e;var f=a.fillColor;f=f===void 0?"blue":f;var g=a.fillColorOpacity;g=g===void 0?.5:g;var j=a.infoButtonPosition,k=a.isHighlighted;k=k===void 0?!1:k;var l=a.paths,m=a.polygons,n=babelHelpers.objectWithoutPropertiesLoose(a,["circle","expand","fillColor","fillColorOpacity","infoButtonPosition","isHighlighted","paths","polygons"]),o=[],p=c("CometMapConfig").getStaticPathColorConfig(),q=c("CometMapConfig").getStaticCircleColorConfig(f,k,g);l!=null&&l.forEach(function(a){o.push(babelHelpers["extends"]({},p,a))});m!=null&&m.forEach(function(a){o.push(babelHelpers["extends"]({},a,q))});a=e?{paddingTop:"calc("+n.height+" / "+n.width+" * 100%)"}:{height:n.height,width:n.width};f=function(){if(n.center)return[n.center.longitude,n.center.latitude];if(n.boundingBox){var a=d("CometGeoRectangle").getCenter(n.boundingBox);return[a.longitude,a.latitude]}return null};return h.jsxs("div",{className:"l9j0dhe7"+(e?" stjgntxs ni8dbmo4 do00u71z":""),"data-testid":void 0,style:a,children:[h.jsx(c("BaseStaticMap.react"),babelHelpers["extends"]({},n,{circle:b!=null?babelHelpers["extends"]({},b,q):void 0,className:e?"kr520xx4 j9ispegn pmk7jnqg":"",expand:e,paths:o})),h.jsx(c("CometPlaceholder.react"),{fallback:null,children:h.jsx(i,{infoButtonPosition:j,reportMapConfig:{getCenter:f,getZoom:function(){return n.zoom}}})})]})}g["default"]=a}),98);