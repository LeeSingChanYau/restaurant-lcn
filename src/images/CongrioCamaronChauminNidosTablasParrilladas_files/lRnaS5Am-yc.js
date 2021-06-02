if (self.CavalryLogger) { CavalryLogger.start_js(["+D4O0oZ"]); }

__d("CometCloudGamingPreGameDialogRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3289151184531095",metadata:{},name:"CometCloudGamingPreGameDialogRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPageAdminInsightsReskinLeftNavContainer_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageAdminInsightsReskinLeftNavContainer_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPageAdminInsightsReskinLeftNavTabs_page"},{args:null,kind:"FragmentSpread",name:"PagesCometAdminLeftNavPromoteButton_page"}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("CometPageAdminInsightsReskinLeftNavTabs_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageAdminInsightsReskinLeftNavTabs_page",selections:[{alias:null,args:null,concreteType:"PageAdminInsightsTabList",kind:"LinkedField",name:"comet_page_admin_insights_tabs",plural:!1,selections:[{alias:null,args:null,concreteType:"CometPageAdminInsightsTab",kind:"LinkedField",name:"tabs",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_external_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("CometPageAdminInsightsReskinRootQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"pageID"}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometPageAdminInsightsReskinRootQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPageAdminInsightsReskinLeftNavContainer_page"},{args:null,kind:"FragmentSpread",name:"usePagesCometProfilePlusTransition_page"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometPageAdminInsightsReskinRootQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:"PageAdminInsightsTabList",kind:"LinkedField",name:"comet_page_admin_insights_tabs",plural:!1,selections:[{alias:null,args:null,concreteType:"CometPageAdminInsightsTab",kind:"LinkedField",name:"tabs",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_name",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"is_external_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AccountBanhammerInfo",kind:"LinkedField",name:"account_banhammer_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_banhammered",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_published",storageKey:null},{alias:null,args:null,concreteType:"AdsLWIInfo",kind:"LinkedField",name:"lwi_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_render_promote_button",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_additional_profile_transition_interstitial",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_page_eligible_for_transition_entrypoint",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_simplified_dialog",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page_transition_cohort",storageKey:null}],storageKey:null}]},params:{id:"3688874871211494",metadata:{},name:"CometPageAdminInsightsReskinRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometCloudGamingPreGameDialogRoot.entrypoint",["CometCloudGamingPreGameDialogRootQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{extraProps:{category:a.routeProps.category,cloud_binary_id:a.routeProps.cloud_binary_id,context_source_id:a.routeProps.context_source_id,context_type:a.routeProps.context_type,game_or_link:a.routeProps.game_or_link,payload:a.routeProps.payload,source:a.routeProps.source},queries:{preGameDialogRootQuery:{parameters:b("CometCloudGamingPreGameDialogRootQuery$Parameters"),variables:{app_id:a.routeProps.game_or_link}}}}},root:c("JSResourceForInteraction")("CometCloudGamingPreGameDialogRoot.react").__setRef("CometCloudGamingPreGameDialogRoot.entrypoint")};g["default"]=a}),98);
__d("CometPageAdminInsightsReskinLeftNavTabs.react",["ix","CometPageAdminInsightsReskinLeftNavTabs_page.graphql","CometRelay","CometRouteParams","IconSource","PagesCometFilledIcons20","TetraAccessoryListCell.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPageAdminInsightsReskinLeftNavTabs_page.graphql"),a.page);var e=d("CometRouteParams").useRouteParams();a=(a=a.comet_page_admin_insights_tabs)==null?void 0:a.tabs;return a==null||a.length===0?j.jsx("div",{}):j.jsx("div",{className:"r54jmrld",children:a.map(function(a){var b=a.icon_name,f=a.id,g=a.is_external_link,i=a.label,k=a.uri;if(b==null||b===""||i==null||a==null||k==null||k==="")return null;a=e.section===f||e.section==null&&f==="navOverview";f=g===!0?{icon:new(c("IconSource"))("FB",h("552682"),24),type:"icon"}:null;return j.jsx(c("TetraAccessoryListCell.react"),{addOnPrimary:{color:a?"blue":"gray",icon:d("PagesCometFilledIcons20").getFilledIcon(b).asset,size:36,type:"contained-icon"},addOnSecondary:f,headline:i,linkProps:{routeTarget:"self",url:k},selected:a,testid:void 0},i)})})}g["default"]=a}),98);
__d("CometPageAdminInsightsReskinLeftNavContainer.react",["fbt","CometErrorBoundary.react","CometLeftRailBreadcrumbs.react","CometLeftRailComponent.react","CometLeftRailHeader.react","CometPageAdminInsightsReskinLeftNavContainer_page.graphql","CometPageAdminInsightsReskinLeftNavTabs.react","CometRelay","PagesCometAdminLeftNavPromoteButton.react","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=h._("Page Insights");function a(a){a=a.page$key;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPageAdminInsightsReskinLeftNavContainer_page.graphql"),a);var e=a==null?void 0:a.id;if(e==null)throw c("unrecoverableViolation")("CometPageAdminInsightsReskinLeftNavContainer: missing pageID","page_insights");if(a==null)return null;var f=a.name,g=a.url;f=f==null||g==null?[{label:k}]:[{label:f,url:g},{label:k}];return j.jsx(c("CometLeftRailComponent.react"),{footer:j.jsx(c("PagesCometAdminLeftNavPromoteButton.react"),{page$key:a,pageID:e}),header:j.jsx(c("CometLeftRailHeader.react"),{meta:j.jsx(c("CometLeftRailBreadcrumbs.react"),{breadcrumbs:f}),title:k}),primaryNav:j.jsx(c("CometErrorBoundary.react"),{children:j.jsx(c("CometPageAdminInsightsReskinLeftNavTabs.react"),{page:a})})})}g["default"]=a}),98);
__d("CometPageAdminInsightsReskinRoot.react",["CometLeftRailAndMainContentContainer.react","CometPageAdminInsightsReskinLeftNavContainer.react","CometPageAdminInsightsReskinRootQuery.graphql","CometPlaceholder.react","CometRelay","CometTransientDialogProvider.react","PagesCometPageContext.react","react","usePagesCometProfilePlusTransition"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={},k=h!==void 0?h:h=b("CometPageAdminInsightsReskinRootQuery.graphql");function a(a){var b=a.entryPoints,e=a.props;a=a.queries;e=e.routeProps;e=e.pageID;a=d("CometRelay").usePreloadedQuery(k,a.cometPageAdminInsightsReskinRootQueryReference);a=a.page;c("usePagesCometProfilePlusTransition")({page$key:a,pageID:e});b=i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx("div",{}),children:i.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:b.contentEntryPoint,props:j})});return i.jsx(d("PagesCometPageContext.react").PagesCometPageContextProvider,{pageID:e,children:i.jsx(c("CometTransientDialogProvider.react"),{children:i.jsx(c("CometLeftRailAndMainContentContainer.react"),{leftRailContent:i.jsx(c("CometPageAdminInsightsReskinLeftNavContainer.react"),{page$key:a}),mainContent:b,mainContentHeading:"Page Insights"})})})}g["default"]=a}),98);