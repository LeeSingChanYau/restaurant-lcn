if (self.CavalryLogger) { CavalryLogger.start_js(["frWr7Ij"]); }

__d("MWChatBusinessCTAAdsSenderMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"action_link",variableName:"input"}],kind:"ScalarField",name:"messenger_business_ads_sender",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"MWChatBusinessCTAAdsSenderMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"MWChatBusinessCTAAdsSenderMutation",selections:b},params:{id:"3559873240789162",metadata:{},name:"MWChatBusinessCTAAdsSenderMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("squareTransparentGif",[],(function(a,b,c,d,e,f){"use strict";a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";f["default"]=a}),66);
__d("MWChatBusinessCTAAdsSenderMutation",["CometRelay","MWChatBusinessCTAAdsSenderMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("MWChatBusinessCTAAdsSenderMutation.graphql");function a(a,b){d("CometRelay").commitMutation(a,{mutation:i,onCompleted:function(){},onError:function(a){},variables:{input:b}})}g.sendAds=a}),98);