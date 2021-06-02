if (self.CavalryLogger) { CavalryLogger.start_js(["zo8VhuG"]); }

__d("CometCrossProfileNotificationsListItem_cpnInfo$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometCrossProfileNotificationsListItem_cpnInfo$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a,c],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{alias:null,args:[{kind:"Literal",name:"notif_option_set_context",value:{client_action_types:["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],environment:"MAIN_SURFACE",is_comet:!0,supported_display_styles:[{option_display_styles:["CHEVRON_MENU_OPTION"],option_set_display_style:"CHEVRON_MENU"}]}}],concreteType:"NotificationOptionSetsConnection",kind:"LinkedField",name:"notif_option_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"NotificationOptionSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOptionSet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsConnection",kind:"LinkedField",name:"notif_options",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOption",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_option_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsDropdownMenu_notification",fragmentName:"CometNotificationsDropdownHideMenuItem_notifOptionRenderer",fragmentPropName:"notifOptionRenderer",kind:"ModuleImport"}],type:"NotifOptionHideRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsDropdownMenu_notification",fragmentName:"CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",fragmentPropName:"notifOptionRenderer",kind:"ModuleImport"}],type:"NotifOptionDefaultRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsDropdownMenu_notification",fragmentName:"CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",fragmentPropName:"notifOptionRenderer",kind:"ModuleImport"}],type:"NotifOptionDialogRenderer",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},c],storageKey:null}],storageKey:null}],storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineCTAAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"InlineCTACometNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemPageInviteAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"PageInviteNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemQuickPromotionAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"QuickPromotionNotifAttachment",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemInlineSurveyAttachment_attachment",fragmentPropName:"attachment",kind:"ModuleImport"},{alias:null,args:null,concreteType:"StructuredSurveySession",kind:"LinkedField",name:"inline_survey",plural:!1,selections:[a],storageKey:null}],type:"InlineSurveyNotifAttachment",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:56},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:56}],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"target_viewer",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_plus_primary_platform_tool",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"target_viewer_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_actor_onboarded_to_notif_profile_plus",storageKey:null}]}}();e.exports=a}),null);
__d("CometCrossProfileNotificationsListItem_cpnInfo.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometCrossProfileNotificationsListItem_cpnInfo",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notif",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometNotificationURL_notification"},{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_notification"}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"target_viewer",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_plus_primary_platform_tool",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"target_viewer_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_actor_onboarded_to_notif_profile_plus",storageKey:null}],type:"CrossProfileNotificationInfo",abstractKey:null}}();e.exports=a}),null);
__d("ProfilePlusCometAdminlessVoiceSwitchingDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5347917795282817",metadata:{},name:"ProfilePlusCometAdminlessVoiceSwitchingDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfilePlusAdminPermissionsConstants",[],(function(a,b,c,d,e,f){"use strict";var g=12,h=6;function a(a){return a==="can_have_limited_access_roles_only"?g:h}b=["Messages","Permissions","Page Deletion"];c=["Content","Messages","Community Activity","Ads","Insights","Permissions","Page Deletion"];d=["Content","Messages","Community Activity","Ads","Insights"];e="https://www.facebook.com/business/help/582754542592549";var i="https://www.facebook.com/policies/pages_groups_events/",j="https://www.facebook.com/business/help/294498964994409#tools",k="https://www.facebook.com/business/help/298014914912551?id=418112142508425",l="https://www.facebook.com/business/help/294498964994409";f.getInitialNumOfAdminsToShow=a;f.PERMISSIONS_NOT_DISPLAYED_IN_VIEW_ACCESS=b;f.FULL_ACCESS_PERMISSIONS=c;f.CORE_APP_EDITOR_PERMISSIONS=d;f.LEARN_MORE_ABOUT_SHARED_PROFILE_LINK=e;f.PAGE_TERMS_LINK=i;f.VIEW_TOOLS_LINK=j;f.PAGE_MANAGEMENT_HISTORY_LINK=k;f.LEARN_MORE_ABOUT_RESTRICTED_ROLES=l}),66);
__d("CometCrossProfileNotificationStrings",["fbt","CometLink.react","ProfilePlusAdminPermissionsConstants","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){return h._("This notification is from your Page {=[additional profile's name]}. Switch into your Page to view it. You can switch between your Page and profile anytime.",[h._param("=[additional profile's name]",i.jsx("strong",{children:h._("{additional profile's name}",[h._param("additional profile's name",a)])}))])}function b(a){return h._("This notification is from your profile {=[additional profile's name]}. Switch to your profile to view this notification and start using Facebook as your profile.",[h._param("=[additional profile's name]",i.jsx("strong",{children:h._("{additional profile's name}",[h._param("additional profile's name",a)])}))])}function e(a){return h._("Switch into {additional profile's name}",[h._param("additional profile's name",a)])}function f(){return h._("Switch")}function j(){return h._("Cancel")}function k(){return h._("Failed to switch to your Page")}function l(){return h._("An unknown error occurred.")}function m(){return h._("Go to Tools")}function n(a){return h._("You can comment and interact as {=[additional profile's name]} with tools.",[h._param("=[additional profile's name]",i.jsx("strong",{children:h._("{additional profile's name}",[h._param("additional profile's name",a)])}))])}function o(){return h._("{Link to a help center article that describes more information about limited access roles.}",[h._param("Link to a help center article that describes more information about limited access roles.",i.jsx(c("CometLink.react"),{href:d("ProfilePlusAdminPermissionsConstants").LEARN_MORE_ABOUT_RESTRICTED_ROLES,target:"_blank",children:"Learn More"}))])}function p(){return h._("{=Creator Studio}",[h._param("=Creator Studio",i.jsx("strong",{children:h._("Creator Studio")}))])}function q(){return h._("{=Facebook Business Suite}",[h._param("=Facebook Business Suite",i.jsx("strong",{children:h._("Facebook Business Suite")}))])}g.getProfileSwitchDialogBodyForAP=a;g.getProfileSwitchDialogBodyForProfile=b;g.getCAAProfileSwitchDialogTitle=e;g.getCAAProfileSwitchDialogConfirmText=f;g.getCAAProfileSwitchDialogCancelText=j;g.getCAAProfileSwitchErrorDialogTitle=k;g.getCAAProfileSwitchErrorDialogBody=l;g.getLARGoToToolsDialogTitleText=m;g.getLARGoToToolsDialogHeadlineText=n;g.getLARGoToToolsDialogLearnMoreLink=o;g.getLARGoToToolsDialogCreatorStudioTitle=p;g.getLARGoToToolsDialogFacebookBusinessSuiteTitle=q}),98);
__d("ProfilePlusCometAdminlessVoiceSwitchingDialog.entrypoint",["JSResourceForInteraction","ProfilePlusCometAdminlessVoiceSwitchingDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.profilePlusID;a=a.scale;return{queries:{profilePlusCometAdminlessVoiceSwitchingDialogQueryReference:{parameters:c("ProfilePlusCometAdminlessVoiceSwitchingDialogQuery$Parameters"),variables:{profilePlusID:b,scale:a}}}}},root:c("JSResourceForInteraction")("ProfilePlusCometAdminlessVoiceSwitchingDialog.react").__setRef("ProfilePlusCometAdminlessVoiceSwitchingDialog.entrypoint")};g["default"]=a}),98);
__d("useCometCrossProfileNotificationsCAAConfirmationDialog",["CometCrossProfileNotificationStrings","CometRelay","JSResourceForInteraction","ProfileCometContext","ProfilePlusCometAdminlessVoiceSwitchingDialog.entrypoint","WebPixelRatio","gkx","goForceFullPageRedirectTo","promiseDone","react","requireDeferred","useCometAlertDialog","useCometConfirmationDialog","useCometEntryPointDialog","useCometInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("JSResourceForInteraction")("CometProfileSwitchMutation").__setRef("useCometCrossProfileNotificationsCAAConfirmationDialog"),k=c("requireDeferred")("ProfilePlusCrossProfileNotificationFalcoEvent").__setRef("useCometCrossProfileNotificationsCAAConfirmationDialog");function a(a){var b=a.adminId,e=a.hasOnboarded;e=e===void 0?!0:e;var f=a.isAdditionalProfile,g=a.medium,l=a.notifId,m=a.notifType,n=a.profileId,o=a.profileName,p=a.url;a=c("useCometAlertDialog")();var q=a[0];a=c("useCometConfirmationDialog")();var r=a[0];a=c("useCometEntryPointDialog")(c("ProfilePlusCometAdminlessVoiceSwitchingDialog.entrypoint"),{profilePlusID:n,scale:d("WebPixelRatio").get()});var s=a[0],t=d("CometRelay").useRelayEnvironment();a=i(c("ProfileCometContext"));var u=a.viewerID,v=!e&&c("gkx")("2047319"),w=c("useCometInteractionTracing")(30618615,"responsive","INTERACTION"),x=h(function(){k.onReady(function(a){a=a.log;return a(function(){var a;return{event:"VIEW_COMET_SWITCHING_DIALOG",logged_in_user_id:(a=b)!=null?a:"",medium:g,ndid:"",notif_id:(a=l)!=null?a:"",notif_type:(a=m)!=null?a:"",target_viewer_id:n,target_viewer_type:"MP_CORE_APP_ADMIN",underlying_admin_id:(a=b)!=null?a:""}})})},[n,b,g,l,m]),y=h(function(){k.onReady(function(a){a=a.log;return a(function(){var a;return{event:"CONFIRM_SWITCHING",logged_in_user_id:(a=b)!=null?a:"",medium:g,ndid:"",notif_id:(a=l)!=null?a:"",notif_type:(a=m)!=null?a:"",target_viewer_id:n,target_viewer_type:"MP_CORE_APP_ADMIN",underlying_admin_id:(a=b)!=null?a:""}})})},[n,b,g,l,m]),z=h(function(){k.onReady(function(a){a=a.log;return a(function(){var a;return{event:"CANCEL_SWITCHING",logged_in_user_id:(a=b)!=null?a:"",medium:g,ndid:"",notif_id:(a=l)!=null?a:"",notif_type:(a=m)!=null?a:"",target_viewer_id:n,target_viewer_type:"MP_CORE_APP_ADMIN",underlying_admin_id:(a=b)!=null?a:""}})})},[n,b,g,l,m]);return h(function(){if(p!=null){var a=j.load(),b=function(b){c("promiseDone")(a.then(function(a){a=a.switchProfile;a(t,{profileId:b},{onCompleted:function(){c("goForceFullPageRedirectTo")(p)},onError:function(){q({body:d("CometCrossProfileNotificationStrings").getCAAProfileSwitchErrorDialogBody(),title:d("CometCrossProfileNotificationStrings").getCAAProfileSwitchErrorDialogTitle()},function(){})}})}))};v?s({onClick:function(){return b(n)},referrer_surface:"cross_profile_notification"}):o!=null&&(x(),r({body:f?d("CometCrossProfileNotificationStrings").getProfileSwitchDialogBodyForAP(o):d("CometCrossProfileNotificationStrings").getProfileSwitchDialogBodyForProfile(o),cancel:d("CometCrossProfileNotificationStrings").getCAAProfileSwitchDialogCancelText(),confirm:d("CometCrossProfileNotificationStrings").getCAAProfileSwitchDialogConfirmText(),title:d("CometCrossProfileNotificationStrings").getCAAProfileSwitchDialogTitle(o)},function(){y();return w(function(a){a.addMetadata("origin","cross_profile_notifications"),a.addMetadata("landing_surface","post_permalink"),a.addMetadata("originating_user_id",u),b(n)})},function(){z()}))}},[v,t,f,z,y,x,n,o,r,q,s,p])}g["default"]=a}),98);
__d("CometCrossProfileNotificationsListItem.react",["CometCrossProfileNotificationsListItem_cpnInfo.graphql","CometNotificationsListItem.react","CometRelay","JSResourceForInteraction","emptyFunction","react","useCometCrossProfileNotificationsCAAConfirmationDialog","useCometLazyDialog","useCometNotificationURL"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback,k=c("JSResourceForInteraction")("CometCrossProfileNotificationsLARConfirmationDialog.react").__setRef("CometCrossProfileNotificationsListItem.react");function a(a){var e,f=a.actor,g=a.cpnInfo,l=a.isFromPageNotification,m=a.isNotificationsRoute;m=m===void 0?!1:m;var n=a.onClick,o=a.onClose,p=a.replace,q=a.routeTarget,r=a.shouldPrefetch;r=r===void 0?!1:r;var s=a.showSelectedState;s=s===void 0?!1:s;a=a.trackingData;g=d("CometRelay").useFragment(h!==void 0?h:h=b("CometCrossProfileNotificationsListItem_cpnInfo.graphql"),g);var t=(e=g.notif)==null?void 0:e.id,u=(e=g.notif)==null?void 0:e.notif_id,v=(e=g.notif)==null?void 0:e.notif_type,w=(e=g.actor)==null?void 0:e.id,x=g.target_viewer_type==="MP_CORE_APP_ADMIN",y=g.target_viewer_type==="MP_LIMITED_ACCESS_ROLE",z=(e=g.target_viewer)==null?void 0:e.name,A=(e=g.target_viewer)==null?void 0:e.id,B=(e=g.target_viewer)==null?void 0:e.profile_plus_primary_platform_tool,C=c("useCometNotificationURL")(g.notif),D=c("useCometCrossProfileNotificationsCAAConfirmationDialog")({adminId:w,hasOnboarded:(e=g.has_actor_onboarded_to_notif_profile_plus)!=null?e:!0,isAdditionalProfile:!0,medium:"jewel",notifId:u,notifType:v,profileId:(e=A)!=null?e:"",profileName:z,url:C});e=c("useCometLazyDialog")(k);var E=e[0];e=j(function(){t!=null&&w!=null&&(n&&n(),C!=null&&z!=null&&(x&&A!=null?D():C!=null&&y&&E({additionalProfileId:A,additionalProfileName:z,adminId:w,larLandingPlatform:B,notifId:u,notifType:v,onClose:c("emptyFunction"),url:C})))},[w,B,x,y,u,v,t,n,A,z,D,E,C]);return g.notif==null?null:i.jsx(c("CometNotificationsListItem.react"),{actor:f,isFromPageNotification:l,isNotificationsRoute:m,notification:g.notif,onClick:e,onClose:o,preventLocalNavigation:C!=null&&z!=null&&t!=null&&w!=null,replace:p,routeTarget:q,shouldPrefetch:r,showSelectedState:s,trackingData:a})}g["default"]=a}),98);