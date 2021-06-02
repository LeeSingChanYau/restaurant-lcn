if (self.CavalryLogger) { CavalryLogger.start_js(["dXzJDW8"]); }

__d("CometNotificationsDropdownMenuButton_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"}],kind:"Fragment",metadata:null,name:"CometNotificationsDropdownMenuButton_notification",selections:[{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!1,selections:[{args:[{kind:"Variable",name:"isToast",variableName:"isToast"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenu_notification"}]},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{condition:"menuUseEntryPoint",kind:"Condition",passingValue:!0,selections:[{kind:"ClientExtension",selections:[{alias:"id_for_entrypoint",args:null,kind:"ScalarField",name:"__id",storageKey:null}]}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsDropdownMenuContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4260899100588564",metadata:{},name:"CometNotificationsDropdownMenuContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometNotificationsListItemAttachment_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"isToast"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItemAttachment_notification",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{condition:"isToast",kind:"Condition",passingValue:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"}],type:"InlineSurveyNotifAttachment",abstractKey:null}]}],storageKey:null}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometNotificationsListItem_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometNotificationsListItem_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"isToast",variableName:"isToast"};return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hideIcon"},{defaultValue:!1,kind:"LocalArgument",name:"isToast"},{defaultValue:!1,kind:"LocalArgument",name:"menuUseEntryPoint"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometNotificationsListItem_notification",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{args:[a,{kind:"Variable",name:"menuUseEntryPoint",variableName:"menuUseEntryPoint"}],kind:"FragmentSpread",name:"CometNotificationsDropdownMenuButton_notification"},{args:[a],kind:"FragmentSpread",name:"CometNotificationsListItemAttachment_notification"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometNotificationURL_notification"},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},{condition:"hideIcon",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null}],storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],type:"Notification",abstractKey:null}}();e.exports=a}),null);
__d("CometNotificationsUpdateSeenStateMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:c,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsBadgeCountFragment_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:c,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3454182731283099",metadata:{},name:"CometNotificationsUpdateSeenStateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometFriendNotificationsStateChangeSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"NotificationStateChangeSubscribeResponsePayload",kind:"LinkedField",name:"notification_state_change_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"last_update_timestamp",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"CometFriendNotificationsStateChangeSubscription",selections:c,type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"CometFriendNotificationsStateChangeSubscription",selections:c},params:{id:"3291362027598695",metadata:{subscriptionName:"notification_state_change_subscribe"},name:"CometFriendNotificationsStateChangeSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("getCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"getCometNotificationURL_notification"};e.exports=a}),null);
__d("useCometNotificationURL_notification.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometNotificationURL_notification",selections:[{kind:"InlineDataFragmentSpread",name:"getCometNotificationURL_notification",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}]}],type:"Notification",abstractKey:null};e.exports=a}),null);
__d("CometToastCard.react",["fbt","ix","CometAccessibilityAnnouncement.react","CometCard.react","CometPressable.react","TetraIcon.react","TetraTextPairing.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.accessibilityAnnouncement,e=a.content,f=a.headline,g=a.onCloseClick;a=a.onMouseEnter;return j.jsxs(c("CometCard.react"),{background:"white",dropShadow:2,children:[j.jsxs("div",{className:"jbcpqwzg jq4qci2q cbu4d94t j83agx80 rq0escxv bi1v6m2q l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",onMouseEnter:a,children:[j.jsx("div",{className:"n1l5q3vz",children:j.jsxs("div",{className:"dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",children:[j.jsx(c("TetraTextPairing.react"),{headline:f,level:4}),j.jsx(c("CometPressable.react"),{display:"inline",label:h._("Close"),onPress:g,overlayDisabled:!0,children:j.jsx("span",{className:"b73ngqbp taijpn5t rgmg9uty j83agx80 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l tdjehn4e bp9cbjyn",children:j.jsx(c("TetraIcon.react"),{color:"primary",icon:d("fbicon")._(i("478231"),12),size:12})})})]})}),j.jsx("div",{className:"ecm0bbzt sj5x9vvc ezxwwwxp",role:"grid",children:e})]}),b!=null&&j.jsx(c("CometAccessibilityAnnouncement.react"),{children:b.text},b.id)]})}g["default"]=a}),98);
__d("useNotificationsImpressionLogger",["gkx","react","requireDeferred","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("NotifImpressionEventsFalcoEvent").__setRef("useNotificationsImpressionLogger");function a(a){var b=a.actorId,d=a.loggerContext,e=a.notifId,f=a.trackingData;a=h(function(a){a=a.visibleDuration;var c={notification_data:{duration:String(a),logger_context:d,notif_id:e,user_id:b},ref:"www_tab",tracking:JSON.stringify(f)};i.onReady(function(a){a=a.log;return a(function(){return c})})},[f,d,e,b]);a=c("usePartialViewImpression")({onImpressionEnd:a});return[a,null]}g["default"]=a}),98);
__d("CometNotificationsDropdownMenuContainer.entrypoint",["CometNotificationsDropdownMenuContainerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={encoded_notif_id:a.encodedNotifId,scale:d("WebPixelRatio").get()};return{queries:{dropdownQueryRef:{parameters:b("CometNotificationsDropdownMenuContainerQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsDropdownMenuContainer.react").__setRef("CometNotificationsDropdownMenuContainer.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsDropdownMenuButton.react",["fbt","CometListCellHoverButton.react","CometNotificationsDropdownMenuButton_notification.graphql","CometNotificationsDropdownMenuContainer.entrypoint","CometRelay","JSResourceForInteraction","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useCallback,l=c("JSResourceForInteraction")("CometNotificationsDropdownMenu.react").__setRef("CometNotificationsDropdownMenuButton.react"),m=c("requireDeferred")("OpenOptionsMenuFalcoEvent").__setRef("CometNotificationsDropdownMenuButton.react");function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("CometNotificationsDropdownMenuButton_notification.graphql"),a.notification),f=a.userId,g=k(function(){m.onReady(function(a){a=a.log;return a(function(){return{notification_data:{alert_id:e==null?void 0:e.notif_id,logger_context:"www_tab",notif_type:e==null?void 0:e.notif_type,user_id:f},ref:"www_tab"}})})},[e,f]);return(e==null?void 0:e.id_for_entrypoint)==null?j.jsx(c("CometListCellHoverButton.react"),{hidden:a.hidden,label:h._("Options for this notification"),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:g,popoverProps:{notification:e},popoverResource:l,popoverTriggerType:"lazy",popoverType:"menu"}):j.jsx(c("CometListCellHoverButton.react"),{entryPointParams:{encodedNotifId:e.id_for_entrypoint},hidden:a.hidden,label:h._("Options for this notification"),onFocusChange:a.onFocusChange,onHoverChange:a.onHoverChange,onMenuStateChange:a.onMenuStateChange,onPress:g,popoverEntryPoint:c("CometNotificationsDropdownMenuContainer.entrypoint"),popoverProps:{},popoverTriggerType:"entryPoint",popoverType:"menu"})}g["default"]=a}),98);
__d("CometNotificationsListItemAttachment.react",["CometErrorBoundary.react","CometNotificationsListItemAttachment_notification.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var b=a.date,d=a.notification;a=a.onPress;return i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(j,{date:b,notification:d,onPress:a})})}function j(a){var c=a.date,e=a.notification,f=a.onPress;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometNotificationsListItemAttachment_notification.graphql"),e);e=a.notif_attachments;if(e==null)return null;a=e.map(function(a,b){return i.jsx(d("CometRelay").MatchContainer,{match:a,props:{date:c,notifAttachments:a,onPress:f}},b)}).filter(Boolean);return a.length===0?null:a}g["default"]=a}),98);
__d("CometNotificationsListItemSeenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("UntruncatedNotificationsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:UntruncatedNotificationsLoggerConfig")}),null);
__d("cometNotificationsListItemIcon",["ix","ImageIconSource","getReactionSVGSource"],(function(a,b,c,d,e,f,g,h){"use strict";var i={app_facebook:h("958818"),app_messenger:h("958823"),app_pages:h("958824"),app_rooms:h("1395467"),arrows_up_down:h("958826"),badge_heart:h("958827"),bar_chart:h("958828"),bookmark:h("958830"),breaking_news:h("958831"),briefcase:h("958832"),cake:h("958833"),calendar:h("958835"),camcorder_live:h("958836"),card:h("1289629"),caution_triangle:h("958837"),circle_3:h("958838"),"circle-heart-ribbon":h("12810"),comment:h("958852"),comment_star:h("958851"),"default":h("958829"),"desktop-mobile":h("1964681"),direct:h("958854"),friend_add:h("958857"),friends:h("958858"),fundraiser:h("958859"),games:h("958821"),group:h("958860"),headphones:h("2007797"),heart_lock:h("1250959"),high_five_hands:h("958861"),instagram_reels:h("1951540"),marketplace:h("894424"),notif_messages_question_live:h("1495236"),"notif-star-tip":h("1970274"),pencil:h("958866"),pencil_checkmark:h("958865"),photo:h("958867"),pin:h("958868"),play_circle:h("958869"),poke:h("958870"),politics:h("958871"),polls:h("958872"),posts:h("958873"),profile_circle:h("958874"),relationship:h("958875"),safety_check:h("958876"),share:h("958877"),shield:h("958878"),shops:h("1686153"),spark_ar:h("1079479"),stories:h("1819883"),tag:h("958882"),topics:h("958883"),watch_tv:h("958885"),water:h("958886")};function j(a){return new(c("ImageIconSource"))(i[a]||i["default"],28,28)}function a(a,b){if(b!=null){b=c("getReactionSVGSource")(b);if(b!=null)return new(c("ImageIconSource"))(b,28,28)}return a!=null?j(a):null}g["default"]=a}),98);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="developers"}g["default"]=a}),98);
__d("getCometNotificationURL",["CometRelay","ConstUriUtils","absoluteToRelative","getCometNotificationURL_notification.graphql","isBusinessURI","isDevelopersURI"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").readInlineData(h!==void 0?h:h=b("getCometNotificationURL_notification.graphql"),a);a=a==null?void 0:a.url;if(a==null)return null;var e=d("ConstUriUtils").getUri(a);return e==null?a:window.location.hostname.startsWith("www.facebook.com")?a:c("isBusinessURI")(e)||c("isDevelopersURI")(e)?a:c("absoluteToRelative")(a)}g["default"]=a}),98);
__d("useCometNotificationURL",["CometRelay","getCometNotificationURL","useCometNotificationURL_notification.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometNotificationURL_notification.graphql"),a);return c("getCometNotificationURL")(a)}g["default"]=a}),98);
__d("useScrollToNotif",["CometRouteMatch","XCometNotificationsControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;a=function(a){var b=d("CometRouteMatch").useCurrentRouteMatcher(d("CometRouteMatch").MatchFunctions.urlMatchFunction),e=d("CometRouteMatch").useHostedRouteMatcher(d("CometRouteMatch").MatchFunctions.urlMatchFunction);e=a!=null?e(a):!1;a=b(c("XCometNotificationsControllerRouteBuilder").buildURL({}).toString());b=h(e&&!a);return[e,b]};g.useScrollToNotif=a}),98);
__d("CometNotificationsListItem.react",["fbt","CometBadge.react","CometBoldedEntityRenderer","CometEmojiTransform","CometEmoticonTransform","CometFocusTableContext","CometNotificationsDropdownMenuButton.react","CometNotificationsListItemAttachment.react","CometNotificationsListItemSeenContext","CometNotificationsListItem_actor.graphql","CometNotificationsListItem_notification.graphql","CometNotificationsTimestamp.react","CometPressable.react","CometRelay","CometTextWithEntitiesRelay.react","FocusWithinHandler.react","JSResourceForInteraction","TetraAccessoryListCell.react","TetraIcon.react","UntruncatedNotificationsTypedLoggerLite","cometNotificationsListItemIcon","mergeRefs","promiseDone","qex","react","requireDeferred","scrollIntoView","stylex","useCometNotificationURL","useCometPreloader","useCometRouterDispatcher","useMenuButtonVisibilityState","useNotificationsImpressionLogger","useScrollToNotif","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useCallback,m=e.useContext,n=e.useEffect,aa=e.useLayoutEffect,o=e.useMemo,ba=e.useRef,ca=c("requireDeferred")("NotifClickEventsFalcoEvent").__setRef("CometNotificationsListItem.react"),p=c("JSResourceForInteraction")("CometNotificationsMarkReadMutation").__setRef("CometNotificationsListItem.react"),da=0,q={hiddenLabel:{clip:"q45zohi1",clipPath:"g0aa4cga",position:"pmk7jnqg",wordBreak:"dxrwds1f"},listItemContainer:{position:"l9j0dhe7"},pressable:{alignItems:"bp9cbjyn",display:"j83agx80",height:"m7zwrmfr",justifyContent:"taijpn5t",paddingStart:"b3onmgus",width:"odw8uiq3"},spacer:{height:"cyypbtt7",width:"fwizqjfa"}},ea={"*":[c("CometBoldedEntityRenderer")]},fa=[c("CometEmoticonTransform")(),c("CometEmojiTransform")()],ga=i!==void 0?i:i=b("CometNotificationsListItem_actor.graphql"),ha=j!==void 0?j:j=b("CometNotificationsListItem_notification.graphql");function a(a){var b=a.actor,e=a.hideMenuButton,f=e===void 0?!1:e;e=a.isFromPageNotification;var g=a.isNotificationsRoute,i=g===void 0?!1:g;g=a.loggerContext;var j=g===void 0?"www_tab":g;g=a.notification;var r=a.onClick,s=a.onClose,t=a.preventLocalNavigation,u=a.replace,v=a.routeTarget,w=a.shouldOpenInBlankTarget,x=a.shouldPrefetch;x=x===void 0?!1:x;var y=a.showSelectedState,ia=y===void 0?!1:y,z=a.trackingData;y=d("CometRelay").useFragment(ga,b);var A=d("CometRelay").useFragment(ha,g),B=c("useCometNotificationURL")(A);a=A.body;b=A.creation_time;var C=A.id;g=A.notif_attachments;var D=A.notif_id,E=A.notif_image,F=A.notif_type,G=A.seen_state,H=A.tracking,I=ba(null),J=y==null?void 0:y.id,K=(y=e)!=null?y:!1;e=babelHelpers["extends"]({navigation_source:"notifications_click"},F!=null?{notif_type:F}:null);y=o(function(){var a;return(a=z)!=null?a:{notif_tracking:H}},[H,z]);var ja={onNavigate:s,passthroughProps:{initialTracePolicy:"comet.notifications",notification_id:(s=D)!=null?s:void 0,notificationTracking:y,notificationType:F,ref:"notification"},prefetchQueries:x,preventLocalNavigation:(s=t)!=null?s:!1,productAttribution:{tap_point:"via_notification"},replace:(x=u)!=null?x:void 0,routeTarget:K?"content":(t=v)!=null?t:void 0,target:w===!0?"_blank":void 0,traceParams:e,url:(s=B)!=null?s:void 0},L=d("CometRelay").useRelayEnvironment(),ka="MAIN_SURFACE",M="unknown",N=c("useCometRouterDispatcher")();u=d("useScrollToNotif").useScrollToNotif(B);var la=u[0],O=u[1],P=O.current;x=m(c("CometFocusTableContext"));v=x.FocusCell;t=x.FocusRow;var ma=(w=v)!=null?w:k.Fragment,na=(e=t)!=null?e:k.Fragment;aa(function(){I.current!=null&&P&&(c("scrollIntoView")(I.current,{behavior:"auto",verticalAlign:"center"}),O.current=!1)},[P,O]);var oa=l(function(){C!=null&&J!=null&&(r&&r(),ca.onReady(function(a){a=a.log;return a(function(){var a;return{notification_data:{alert_id:(a=D)!=null?a:"",logger_context:(a=j)!=null?a:"",to_user:J},ref:i?"notifications_route":"www_tab",tracking:JSON.stringify(z)}})}),c("promiseDone")(p.load().then(function(a){return a(L,{input:{is_comet:!0,notif_id:C,source:M}})})))},[J,L,C,r,z,D,j,i]),Q=l(function(){C!=null&&c("promiseDone")(p.load().then(function(a){return a(L,{input:{environment:ka,is_comet:!0,notif_id:C,source:M}})}))},[L,C]),R=a;s=b==null?void 0:b.timestamp;u=E==null?void 0:E.uri;x=c("useMenuButtonVisibilityState")();var pa=x[0];v=x[1];var S=v.setListItemHovered,qa=v.setMenuBtnFocused,ra=v.setMenuBtnHovered,sa=v.setMenuOpened,T=G==="UNSEEN_AND_UNREAD"||G==="SEEN_BUT_UNREAD";w=l(function(){N&&B!=null&&T&&c("qex")._("1590992")&&N.prefetchRouteQueries(B,{})},[N,T,B]);t=c("useCometPreloader")("button",w,w);var U=t[0],V=t[1],ta=l(function(){S(!1),V()},[V,S]),ua=l(function(a){S(!0),U(a)},[U,S]);e=c("useNotificationsImpressionLogger")({actorId:J,loggerContext:j,notifId:D,trackingData:y});var W=e[0],va=e[1],wa=m(c("CometNotificationsListItemSeenContext")),X=c("useVisibilityObserver")({onVisible:function(){wa(C)}}),xa=o(function(){if(j==="www_tab"||j==="beeper")return c("mergeRefs")(W,I,X);else return I},[X,j,W]),Y=R==null?void 0:(a=R.text)==null?void 0:a.length;n(function(){Y!=null&&Y>da&&c("UntruncatedNotificationsTypedLoggerLite").log({length:Y,notification_type:F})},[F,Y]);if(C==null||R==null||u==null||G==null||s==null)return null;b=new Date(s*1e3);var Z=G==="SEEN_AND_READ";x=(E=A.icon_data)==null?void 0:E.reaction_type;w=(v=A.icon_data)==null?void 0:v.glyph_name;t=c("cometNotificationsListItemIcon")(w,x);y=t!=null?{backgroundColor:"transparent",icon:k.jsx(c("TetraIcon.react"),{color:"white",icon:t}),size:28,type:"activityBadge"}:null;var ya=k.jsx(c("CometNotificationsTimestamp.react"),{date:b,seenAndRead:Z}),za={addOn:y,shape:"circle",size:56,source:{uri:u},type:"profile-photo"},Aa={override_component:k.jsx(c("CometNotificationsListItemAttachment.react"),{date:b,notification:A,onPress:Q}),type:"designOverride_Notifications_bottomAddOn"};e=A==null?void 0:A.is_hidden;if(e===!0)return null;var $=g.find(function(a){return a.inline_survey!=null})!=null;return k.jsx(c("FocusWithinHandler.react"),{children:function(a,b){return k.jsx(na,{children:k.jsxs("div",{className:c("stylex")(q.listItemContainer),onMouseEnter:ua,onMouseLeave:ta,ref:xa,role:"row",children:[va,k.jsx(c("TetraAccessoryListCell.react"),{addOnBottom:Aa,addOnPrimary:za,addOnSecondary:{addOn:Z?k.jsx("div",{className:c("stylex")(q.spacer)}):k.jsx(c("CometPressable.react"),{expanding:!0,onPress:Q,overlayDisabled:!0,role:"none",testid:void 0,xstyle:q.pressable,children:k.jsx(c("CometBadge.react"),{color:"blue",isProfileBadge:!0,size:12})}),type:"body"},addOnSecondaryVerticalAlign:$?"start":"center",body:k.jsxs(k.Fragment,{children:[Z?null:k.jsx("div",{className:c("stylex")(q.hiddenLabel),children:h._("Unread")}),k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:ea,textWithEntities:R,transforms:fa})]}),bodyColor:Z?"secondary":"primary",bodyLineLimit:3,linkProps:ja,meta:ya,onPress:oa,role:"none",selected:la&&ia,testid:void 0}),F!=="friend"&&F!=="page_invite"&&!$?k.jsx(ma,{children:k.jsx(c("CometNotificationsDropdownMenuButton.react"),{hidden:f||K||!(a&&b)&&!pa,notification:A,onFocusChange:qa,onHoverChange:ra,onMenuStateChange:sa,userId:J})}):null]})})}})}f=k.memo(a);g["default"]=f}),98);
__d("CometNotificationsUpdateSeenStateMutation",["CometNotificationsMutationLogger","CometNotificationsThinClientConnectionHandler","CometNotificationsUpdateSeenStateMutation.graphql","CometRelay","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometNotificationsUpdateSeenStateMutation.graphql");function j(a,b){var c=b[0];if(c==null)return;b=a.get(d("relay-runtime").VIEWER_ID);if(b==null)return;a=d("CometNotificationsThinClientConnectionHandler").getConnection(b,"CometNotificationsList_notifications_page");if(a==null)return;a=a.getLinkedRecords("edges");if(a==null||a.length===0)return;var e=[];a.forEach(function(a){if(a==null)return;a=a.getLinkedRecord("node");if(a==null)return;var b=a.getType();if(b!=="NotifPageNotificationRow"&&b!=="NotifPageCachedNotificationRow")return;b=a.getLinkedRecord("notif");if(b==null)return;e.push(b)});a=e.findIndex(function(a){return a.getValue("id")===c});if(a<0)return;e[a]!=null&&e[a].setValue("SEEN_BUT_UNREAD","seen_state");a=b.getValue("notifications_unseen_count",{environment:"MAIN_SURFACE"});if(a==null)return;a=+a-1;b.setValue(Math.max(0,a),"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function a(a,b,c){var e=function(a){var d=b.input;if(d==null)return;d=d.notif_ids;if(d==null)return;j(a,d);c&&c.updater&&c.updater(a)},f=d("CometNotificationsMutationLogger").notificationMarkAsSeenStart(),g=f.logOnError,h=f.logOnSuccess;return d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(){h(),c&&c.onSuccess()},onError:function(a){g(a),c&&c.onError(a)},optimisticUpdater:e,variables:b})}g.CometNotificationsUpdateSeenStateMutation=a;g.mutation=i}),98);
__d("FriendingCometConfirmedFriendRequestToast.react",["fbt","CometNotificationsListItem.react","CometNotificationsUpdateSeenStateMutation","CometRelay","CometToastCard.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l="MARK_SEEN",m="comet_toast",n="beeper";function a(a){var b,e=a.onCloseClick;a=a.response;a=a==null?void 0:a.friend_request_confirm_subscribe;var f=a==null?void 0:a.notif,g=f==null?void 0:f.id,o=f==null?void 0:f.seen_state,p=a==null?void 0:a.new_friend;a=a==null?void 0:(a=a.viewer)==null?void 0:a.actor;b=f==null?void 0:(b=f.body)==null?void 0:b.text;var q=k(!1),r=d("CometRelay").useRelayEnvironment(),s=j(function(){if(g==null||o!=="UNSEEN_AND_UNREAD"||q.current===!0)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(r,{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB",is_comet:!0,last_notif_sync_time:0,notif_ids:[g],source:m,update_type:l}},{onError:function(a){c("recoverableViolation")("Failed to mark friend confirmed notification as seen in the toast: ","growth_friending",{error:a})},onSuccess:function(){q.current=!0}})},[r,g,o]);if(p==null||f==null)return null;p=g==null||b==null?null:{id:g,text:b};return i.jsx(c("CometToastCard.react"),{accessibilityAnnouncement:p,content:i.jsx(c("CometNotificationsListItem.react"),{actor:a,loggerContext:n,notification:f,onClick:e}),headline:h._("New Notification"),onCloseClick:e,onMouseEnter:s})}g["default"]=a}),98);
__d("FriendingCometFriendRequestToast.react",["fbt","CometNotificationsListItem.react","CometNotificationsUpdateSeenStateMutation","CometRelay","CometToastCard.react","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef,l="MARK_SEEN",m="comet_toast",n="beeper";function a(a){var b,e=a.onCloseClick;a=a.response;a=a==null?void 0:a.friend_request_receive_subscribe;var f=a==null?void 0:a.notif,g=f==null?void 0:f.id,o=f==null?void 0:f.seen_state;a=a==null?void 0:(a=a.viewer)==null?void 0:a.actor;b=f==null?void 0:(b=f.body)==null?void 0:b.text;var p=k(!1),q=d("CometRelay").useRelayEnvironment(),r=j(function(){if(g==null||o!=="UNSEEN_AND_UNREAD"||p.current===!0)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(q,{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB",is_comet:!0,last_notif_sync_time:0,notif_ids:[g],source:m,update_type:l}},{onError:function(a){c("recoverableViolation")("Failed to mark friend notification as seen in the toast: ","growth_friending",{error:a})},onSuccess:function(){p.current=!0}})},[q,g,o]);if(f==null)return null;b=g==null||b==null?null:{id:g,text:b};return i.jsx(c("CometToastCard.react"),{accessibilityAnnouncement:b,content:i.jsx(c("CometNotificationsListItem.react"),{actor:a,loggerContext:n,notification:f,onClick:e}),headline:h._("New Notification"),onCloseClick:e,onMouseEnter:r})}g["default"]=a}),98);
__d("CometFriendNotificationsStateChangeSubscription",["CometFriendNotificationsStateChangeSubscription.graphql","CometRelay","CurrentUser","FriendingCometSubscriptionToastHelper","RelayRTIGraphQLSubscriptionTopicProvider","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometFriendNotificationsStateChangeSubscription.graphql"),j={};function a(a,b){k();var c=function(a){a=a==null?void 0:(a=a.notification_state_change_subscribe)==null?void 0:a.notification;var c=a==null?void 0:a.seen_state;a=a==null?void 0:a.notif_id;c!=null&&a!=null&&d("FriendingCometSubscriptionToastHelper").deleteToastIfSeen(c,a,b)};return d("CometRelay").requestSubscription(a,{onNext:c,subscription:i,variables:{environment:"FRIENDS_TAB",input:{environment:"FRIENDS_TAB"}}})}function k(){var a=d("relay-runtime").getRequest(i);a=a.params.id;a!=null&&!j[a]&&(j[a]=!0,c("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(a,function(a){return"gqls/notification_state_change_subscribe/actor_id_"+c("CurrentUser").getID()+"_environment_"+a.input.environment}))}g.subscription=i;g.subscribeToFriendNotifs=a}),98);