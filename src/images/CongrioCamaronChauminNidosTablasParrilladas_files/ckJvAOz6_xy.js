if (self.CavalryLogger) { CavalryLogger.start_js(["eLBQmpa"]); }

__d("PagesCometAdminPhotosCreateAlbumButton_page$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometAdminPhotosCreateAlbumButton_page$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}]};e.exports=a}),null);
__d("PagesCometAdminPhotosCreateAlbumButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometAdminPhotosCreateAlbumButton_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("XCometPageVanityPhotosCreateAlbumControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/photos/album/create/",Object.freeze({ref:""}),void 0);b=a;g["default"]=b}),98);
__d("PagesCometAdminPhotosCreateAlbumButton.react",["fbt","ix","CometRelay","PagesCometAdminPhotosCreateAlbumButton_page.graphql","PagesCometPageContext.react","TetraButton.react","XCometPageVanityPhotosCreateAlbumControllerRouteBuilder","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useContext;function a(a){a=d("CometRelay").useFragment(j!==void 0?j:j=b("PagesCometAdminPhotosCreateAlbumButton_page.graphql"),a.page);var e=l(d("PagesCometPageContext.react").PagesCometPageContext);e=e.isAdminView;if(!e)return null;e=a.viewer_profile_permissions;var f=a==null?void 0:a.uri_token;if(a==null||e==null||f==null)return c("recoverableViolation")("Failed to fetch page data for Create Album Button.","pages_consumer_experience_www");a=e.includes("CREATE_CONTENT");return a?k.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("483768"),16),label:h._("Create Album"),linkProps:{url:c("XCometPageVanityPhotosCreateAlbumControllerRouteBuilder").buildURL({vanity:f})},reduceEmphasis:!0,size:"medium",type:"secondary"}):null}g["default"]=a}),98);