// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
    w[g] = w[g] || {};
    w[g].e = function (s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function () {

    var data = {
        "resource": {
            "version": "978",

            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.request(\"utm_source\")||$.cookie(\"utm_source\")||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.request(\"utm_campaign\")||$.cookie(\"utm_campaign\")||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.request(\"utm_medium\")||$.cookie(\"utm_medium\")||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.navigator.userAgent})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"open\"==$.request(\"utm_campaign\")||\"open\"==$.cookie(\"utm_campaign\")?$.request(\"utm_source\")||$.cookie(\"utm_source\")||\"\":\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=\"6206914490811007489 6218041426337333761 6186808400278897154 6199742913335050753 6192459817031057921 6233683751319110145\".split(\" \");return a.join(\",\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=$.request(\"W2atIF\")||$.cookie(\"W2atIF\");return a-0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.hash(\"channel\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.cookie(\"tt_webid\")%100})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return Math.floor(100*Math.random())})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=Number(window.custom_proportion2||0)-Number(window.custom_proportion1||0)+1,b=Number(window.custom_proportion1);a=Number(window.custom_proportion1)+Math.floor(a\/2)-1;var c=$.cookie(\"tt_webid\")%100;return(b=c\u003E=b\u0026\u0026c\u003C=a)?!0:!1})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=Number(window.custom_proportion2||0)-Number(window.custom_proportion1||0)+1;a=Number(window.custom_proportion2)-Math.floor(a\/2)+1;var c=Number(window.custom_proportion2),b=$.cookie(\"tt_webid\")%100;return(a=b\u003E=a\u0026\u0026b\u003C=c)?!0:!1})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=$.cookie(\"tt_webid\");parseInt(a).toString()!==a\u0026\u0026(a=parseInt(a\/Math.pow(2,32)).toString());return a%100})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return $.request(\"app\")||$.cookie(\"app\")||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.tag})();"]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__e"
            }, {
                "function": "__j",
                "vtp_name": "$.os.ios"
            }, {
                "function": "__j",
                "vtp_name": "city"
            }, {
                "function": "__j",
                "vtp_name": "isNewVideoPage"
            }, {
                "function": "__j",
                "vtp_name": "$.os.android"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "utm_source"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__j",
                "vtp_name": "isXiguaLive"
            }, {
                "function": "__j",
                "vtp_name": "isFullScreenBanner"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "utm_source"
            }, {
                "function": "__j",
                "vtp_name": "isListPage"
            }, {
                "function": "__j",
                "vtp_name": "$.os.ios"
            }, {
                "function": "__j",
                "vtp_name": "isArticlePage"
            }, {
                "function": "__j",
                "vtp_name": "isMiniXiguaVideoPage"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__html",
                "priority": 100,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownloadSurl:\"http:\/\/d.toutiao.com\/5RP8\/\",topbannerSurl:\"http:\/\/d.toutiao.com\/5RP8\/\",commentSurl:\"http:\/\/d.toutiao.com\/5RP8\/\",apponlySurl:\"http:\/\/d.toutiao.com\/5RP8\/\",relatedSurl:\"http:\/\/d.toutiao.com\/5RP8\/\",hotvideoSurl:\"http:\/\/d.toutiao.com\/5RP8\/\",detailbottombannerSurl:\"http:\/\/d.toutiao.com\/5RP8\/\"},list:{listbottombannerSurl:\"http:\/\/d.toutiao.com\/5RP8\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 151
            }, {
                "function": "__html",
                "priority": 100,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownloadSurl:\"http:\/\/d.toutiao.com\/jRVA\/\",topbannerSurl:\"http:\/\/d.toutiao.com\/jRVA\/\",commentSurl:\"http:\/\/d.toutiao.com\/jRVA\/\",apponlySurl:\"http:\/\/d.toutiao.com\/jRVA\/\",relatedSurl:\"http:\/\/d.toutiao.com\/jRVA\/\",hotvideoSurl:\"http:\/\/d.toutiao.com\/jRVA\/\",detailbottombannerSurl:\"http:\/\/d.toutiao.com\/jRVA\/\"},list:{listbottombannerSurl:\"http:\/\/d.toutiao.com\/jRVA\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 225
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.21980454933731886\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303832323630\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/kjET\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.21980454933731886\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303832323630\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/kjET\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 144
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 145
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.08364309230772893\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373035\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/LYHe\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.08364309230772893\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373035\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/LYHe\/\"],listbottombannerSurl:\"\/\/d.toutiao.com\/LYHe\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 146
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5030010557387248\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373231\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/SGnR\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5030010557387248\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373231\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/SGnR\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 150
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0,hideTopBanner:!0,hideRecommendation:!0,hideRelateNews:!0,hideBonus:!0,hideBottomBanner:!0,hideHotVideo:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 200
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"http:\/\/d.ixigua.com\/UkYr\/\",topbannerSurl:\"http:\/\/d.ixigua.com\/UkYr\/\",apponlySurl:\"http:\/\/d.ixigua.com\/UkYr\/\",relatedSurl:\"http:\/\/d.ixigua.com\/UkYr\/\",detailbottombannerSurl:\"http:\/\/d.ixigua.com\/UkYr\/\"},list:{listbottombannerSurl:\"http:\/\/d.ixigua.com\/UkYr\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 229
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"\",\"http:\/\/d.huoshanzhibo.com\/KuF\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.huoshanzhibo.com\/KuF\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 230
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"\",\"https:\/\/d.toutiao.com\/kVpD\/\"]},list:{yybSurl:[\"\",\"https:\/\/d.toutiao.com\/kVpD\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 231
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0,hideTopBanner:!0,hideGuanzhu:!0,hideRecommendation:!0,hideAd:!0,hideAllRec:!0,hideRelationCard:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 255
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/P217\/\",videobannerSurl:\"\/\/d.toutiao.com\/P217\/\",commentSurl:\"\/\/d.toutiao.com\/P217\/\",apponlySurl:\"\/\/d.toutiao.com\/P217\/\",relatedSurl:\"\/\/d.toutiao.com\/P217\/\",hotvideoSurl:\"\/\/d.toutiao.com\/P217\/\",detailbottombannerSurl:\"\/\/d.toutiao.com\/P217\/\",playbtnSurl:\"\/\/d.toutiao.com\/P217\/\",guanzhuSurl:\"\/\/d.toutiao.com\/P217\/\",relationSurl:\"\/\/d.toutiao.com\/P217\/\",shortVideoAllSurl:\"\/\/d.toutiao.com\/NuxG\/\"},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/P217\/\"}};\nttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 261
            }, {
                "function": "__html",
                "priority": 99,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 298
            }, {
                "function": "__html",
                "priority": 66,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownloadSurl:\"http:\/\/d.toutiao.com\/ARes\/\",topbannerSurl:\"http:\/\/d.toutiao.com\/ARes\/\",commentSurl:\"http:\/\/d.toutiao.com\/ARes\/\",apponlySurl:\"http:\/\/d.toutiao.com\/ARes\/\",relatedSurl:\"http:\/\/d.toutiao.com\/ARes\/\",hotvideoSurl:\"http:\/\/d.toutiao.com\/ARes\/\",detailbottombannerSurl:\"http:\/\/d.toutiao.com\/ARes\/\"},list:{listbottombannerSurl:\"http:\/\/d.toutiao.com\/ARes\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 155
            }, {
                "function": "__html",
                "priority": 50,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",commentSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",apponlySurl:\"https:\/\/d.toutiao.com\/LxCc\/\",relatedSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",relationSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/LxCc\/\",direct_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/LxCc\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 307
            }, {
                "function": "__html",
                "priority": 50,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",commentSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",apponlySurl:\"https:\/\/d.toutiao.com\/fPwX\/\",relatedSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",relationSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/fPwX\/\",direct_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/fPwX\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 308
            }, {
                "function": "__html",
                "priority": 50,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",commentSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",apponlySurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",relatedSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",relationSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/R9Jx\/\",direct_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/R9Jx\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 309
            }, {
                "function": "__html",
                "priority": 50,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",commentSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",apponlySurl:\"https:\/\/d.toutiao.com\/DkXL\/\",relatedSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",relationSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/DkXL\/\",direct_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/DkXL\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 310
            }, {
                "function": "__html",
                "priority": 50,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",commentSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",apponlySurl:\"https:\/\/d.toutiao.com\/NbAR\/\",relatedSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",relationSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/NbAR\/\",direct_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/NbAR\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 311
            }, {
                "function": "__html",
                "priority": 45,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",commentSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",apponlySurl:\"https:\/\/d.toutiao.com\/DEL8\/\",relatedSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",relationSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/DEL8\/\",direct_download:!0,app:\"news_article\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/DEL8\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 304
            }, {
                "function": "__html",
                "priority": 45,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.ixigua.com\/YACN\/\",videobannerSurl:\"https:\/\/d.ixigua.com\/YACN\/\",commentSurl:\"https:\/\/d.ixigua.com\/YACN\/\",apponlySurl:\"https:\/\/d.ixigua.com\/YACN\/\",relatedSurl:\"https:\/\/d.ixigua.com\/YACN\/\",hotvideoSurl:\"https:\/\/d.ixigua.com\/YACN\/\",detailbottombannerSurl:\"https:\/\/d.ixigua.com\/YACN\/\",playbtnSurl:\"https:\/\/d.ixigua.com\/YACN\/\",guanzhuSurl:\"https:\/\/d.ixigua.com\/YACN\/\",relationSurl:\"https:\/\/d.ixigua.com\/YACN\/\",shortVideoAllSurl:\"https:\/\/d.ixigua.com\/YACN\/\",unfoldSurl:\"https:\/\/d.ixigua.com\/YACN\/\",\ndirect_download:!0,app:\"video_article\"},list:{listbottombannerSurl:\"https:\/\/d.ixigua.com\/YACN\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 305
            }, {
                "function": "__html",
                "priority": 45,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",commentSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",apponlySurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",relatedSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",relationSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\",direct_download:!0,app:\"news_article\",preventDongTaiDaBao:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/P6Q6\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/P6Q6\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 306
            }, {
                "function": "__html",
                "priority": 45,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",videobannerSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",commentSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",apponlySurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",relatedSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",hotvideoSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",detailbottombannerSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",playbtnSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",guanzhuSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",relationSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",\nshortVideoAllSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",unfoldSurl:\"http:\/\/d.alpha-browser.com\/DkPV\/\",direct_download:!0,app:\"hupu\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"http:\/\/d.alpha-browser.com\/DkPV\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 312
            }, {
                "function": "__html",
                "priority": 40,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",commentSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",apponlySurl:\"https:\/\/d.toutiao.com\/YjXP\/\",relatedSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",relationSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/YjXP\/\",direct_download:!0},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/YjXP\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 303
            }, {
                "function": "__html",
                "priority": 35,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/LJTN\",videobannerSurl:\"https:\/\/d.toutiao.com\/LJTN\",commentSurl:\"https:\/\/d.toutiao.com\/LJTN\",apponlySurl:\"https:\/\/d.toutiao.com\/LJTN\",relatedSurl:\"https:\/\/d.toutiao.com\/LJTN\",hotvideoSurl:\"https:\/\/d.toutiao.com\/LJTN\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/LJTN\",playbtnSurl:\"https:\/\/d.toutiao.com\/LJTN\",guanzhuSurl:\"https:\/\/d.toutiao.com\/LJTN\",relationSurl:\"https:\/\/d.toutiao.com\/LJTN\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/LJTN\",unfoldSurl:\"https:\/\/d.toutiao.com\/LJTN\",\ndirect_download:!0,app:\"news_article_lite\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/LJTN\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 297
            }, {
                "function": "__html",
                "priority": 35,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",commentSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",apponlySurl:\"https:\/\/d.toutiao.com\/YNPe\/\",relatedSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",relationSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/YNPe\/\",direct_download:!0,app:\"news_article_lite\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 299
            }, {
                "function": "__html",
                "priority": 35,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",videobannerSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",commentSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",apponlySurl:\"https:\/\/d.ixigua.com\/fxNh\/\",relatedSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",hotvideoSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",detailbottombannerSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",playbtnSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",guanzhuSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",relationSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",shortVideoAllSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",unfoldSurl:\"https:\/\/d.ixigua.com\/fxNh\/\",\ndirect_download:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 302
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",commentSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",apponlySurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",relatedSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",relationSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/Dgfn\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 291
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",commentSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",apponlySurl:\"https:\/\/d.toutiao.com\/5FF3\/\",relatedSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",relationSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/5FF3\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/5FF3\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/5FF3\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 292
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/RpV\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/RpV\/\",commentSurl:\"https:\/\/d.toutiao.com\/RpV\/\",apponlySurl:\"https:\/\/d.toutiao.com\/RpV\/\",relatedSurl:\"https:\/\/d.toutiao.com\/RpV\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/RpV\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/RpV\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/RpV\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/RpV\/\",relationSurl:\"https:\/\/d.toutiao.com\/RpV\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/RpV\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/RpV\/\"},\nlist:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/RpV\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 293
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",commentSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",apponlySurl:\"https:\/\/d.toutiao.com\/jYQa\/\",relatedSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",relationSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/jYQa\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/jYQa\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/jYQa\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 294
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",commentSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",apponlySurl:\"https:\/\/d.toutiao.com\/YQw6\/\",relatedSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",relationSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/YQw6\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/YQw6\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/YQw6\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 295
            }, {
                "function": "__html",
                "priority": 30,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u597d\\u591a\\u623f\",CommentTitle:\"\\u597d\\u591a\\u623f\",topbannerSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",videobannerSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",commentSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",apponlySurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",relatedSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",hotvideoSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",detailbottombannerSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",playbtnSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",guanzhuSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",\nrelationSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",shortVideoAllSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",unfoldSurl:\"https:\/\/d.haoduofangs.com\/AX8b\/\",direct_download:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 301
            }, {
                "function": "__html",
                "priority": 25,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",commentSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",apponlySurl:\"https:\/\/d.toutiao.com\/dRwS\/\",relatedSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",relationSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",\nunfoldSurl:\"https:\/\/d.toutiao.com\/dRwS\/\",direct_download:!0,app:\"news_article\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/dRwS\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 259
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",commentSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",apponlySurl:\"https:\/\/d.toutiao.com\/eTeT\/\",relatedSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",relationSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/eTeT\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/eTeT\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/eTeT\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/eTeT\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 271
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",commentSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",apponlySurl:\"https:\/\/d.toutiao.com\/fUX6\/\",relatedSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",relationSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/fUX6\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/fUX6\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/fUX6\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/fUX6\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 272
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",commentSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",apponlySurl:\"https:\/\/d.toutiao.com\/8cU2\/\",relatedSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",relationSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/8cU2\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/8cU2\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/8cU2\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/8cU2\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 273
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",commentSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",apponlySurl:\"https:\/\/d.toutiao.com\/5RXx\/\",relatedSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",relationSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/5RXx\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/5RXx\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/5RXx\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/5RXx\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 274
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",commentSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",apponlySurl:\"https:\/\/d.toutiao.com\/L5E2\/\",relatedSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",relationSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/L5E2\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/L5E2\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/L5E2\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/L5E2\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 275
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",commentSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",apponlySurl:\"https:\/\/d.toutiao.com\/6aAH\/\",relatedSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",relationSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/6aAH\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/6aAH\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/6aAH\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/6aAH\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 276
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",commentSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",apponlySurl:\"https:\/\/d.toutiao.com\/SGo9\/\",relatedSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",relationSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/SGo9\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/SGo9\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/SGo9\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/SGo9\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 277
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",commentSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",apponlySurl:\"https:\/\/d.toutiao.com\/LYgu\/\",relatedSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",relationSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/LYgu\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/LYgu\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/LYgu\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/LYgu\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 278
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",commentSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",apponlySurl:\"https:\/\/d.toutiao.com\/6GCj\/\",relatedSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",relationSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/6GCj\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/6GCj\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/6GCj\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/6GCj\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 279
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",commentSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",apponlySurl:\"https:\/\/d.toutiao.com\/UwBd\/\",relatedSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",relationSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/UwBd\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/UwBd\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/UwBd\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/UwBd\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 280
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/YSY\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/YSY\/\",commentSurl:\"https:\/\/d.toutiao.com\/YSY\/\",apponlySurl:\"https:\/\/d.toutiao.com\/YSY\/\",relatedSurl:\"https:\/\/d.toutiao.com\/YSY\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/YSY\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/YSY\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/YSY\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/YSY\/\",relationSurl:\"https:\/\/d.toutiao.com\/YSY\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/YSY\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/YSY\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/YSY\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/YSY\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/YSY\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/YSY\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 281
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/MXos\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/MXos\/\",commentSurl:\"https:\/\/d.toutiao.com\/MXos\/\",apponlySurl:\"https:\/\/d.toutiao.com\/MXos\/\",relatedSurl:\"https:\/\/d.toutiao.com\/MXos\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/MXos\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/MXos\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/MXos\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/MXos\/\",relationSurl:\"https:\/\/d.toutiao.com\/MXos\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/MXos\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/MXos\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/MXos\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/MXos\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/MXos\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/MXos\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 282
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",commentSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",apponlySurl:\"https:\/\/d.toutiao.com\/fRKh\/\",relatedSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",relationSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/fRKh\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/fRKh\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/fRKh\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/fRKh\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 283
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",commentSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",apponlySurl:\"https:\/\/d.toutiao.com\/2aqM\/\",relatedSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",relationSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/2aqM\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/2aqM\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/2aqM\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/2aqM\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 284
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",commentSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",apponlySurl:\"https:\/\/d.toutiao.com\/NSAp\/\",relatedSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",relationSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/NSAp\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/NSAp\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/NSAp\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/NSAp\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 285
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",commentSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",apponlySurl:\"https:\/\/d.toutiao.com\/eCDE\/\",relatedSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",relationSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/eCDE\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/eCDE\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/eCDE\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/eCDE\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 286
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",commentSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",apponlySurl:\"https:\/\/d.toutiao.com\/FT1o\/\",relatedSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",relationSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/FT1o\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/FT1o\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/FT1o\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/FT1o\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 287
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",commentSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",apponlySurl:\"https:\/\/d.toutiao.com\/hjV1\/\",relatedSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",relationSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/hjV1\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/hjV1\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/hjV1\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/hjV1\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 288
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",topbannerSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",commentSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",apponlySurl:\"https:\/\/d.toutiao.com\/ktBr\/\",relatedSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",relationSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/ktBr\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/ktBr\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/ktBr\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/ktBr\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 289
            }, {
                "function": "__html",
                "priority": 24,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",app:\"news_article_lite\",topbannerSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",commentSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",apponlySurl:\"https:\/\/d.toutiao.com\/DEyE\/\",relatedSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",\nrelationSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",shortVideoAllSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/DEyE\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/DEyE\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/DEyE\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/DEyE\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 290
            }, {
                "function": "__html",
                "priority": 21,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u503c\\u70b9\",CommentTitle:\"\\u503c\\u70b9\",topbannerSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",commentSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",apponlySurl:\"https:\/\/d.toutiao.com\/rnxY\/\",relatedSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",relationSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/rnxY\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/rnxY\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/rnxY\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/rnxY\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 265
            }, {
                "function": "__html",
                "priority": 21,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u597d\\u591a\\u623f\",CommentTitle:\"\\u597d\\u591a\\u623f\",topbannerSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",videobannerSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",commentSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",apponlySurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",relatedSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",hotvideoSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",detailbottombannerSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",playbtnSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",guanzhuSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",\nrelationSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",shortVideoAllSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",unfoldSurl:\"https:\/\/d.haoduofangs.com\/UTPw\/\",direct_download:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 268
            }, {
                "function": "__html",
                "priority": 21,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u5929\\u6c14\",CommentTitle:\"\\u5929\\u6c14\",topbannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",videobannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",commentSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",apponlySurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",\nrelatedSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",hotvideoSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",detailbottombannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",playbtnSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",guanzhuSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",\nrelationSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",shortVideoAllSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\"]},\nlist:{listbottombannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.weather\\x26ckey\\x3dCK1396963441737\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 269
            }, {
                "function": "__html",
                "priority": 21,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u65e5\\u5386\",CommentTitle:\"\\u65e5\\u5386\",topbannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",videobannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",commentSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",apponlySurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",\nrelatedSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",hotvideoSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",detailbottombannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",playbtnSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",guanzhuSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",\nrelationSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",shortVideoAllSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",unfoldSurl:\"https:\/\/d.toutiao.com\/rnxY\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\"]},\nlist:{listbottombannerSurl:\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"http:\/\/a.app.qq.com\/o\/simple.jsp?pkgname\\x3dcom.ss.android.article.calendar\\x26ckey\\x3dCK1396961159077\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 270
            }, {
                "function": "__html",
                "priority": 20,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",videobannerSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",commentSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",apponlySurl:\"https:\/\/d.ixigua.com\/hq5d\/\",relatedSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",hotvideoSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",detailbottombannerSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",playbtnSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",guanzhuSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",relationSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",shortVideoAllSurl:\"https:\/\/d.ixigua.com\/hq5d\/\",unfoldSurl:\"https:\/\/d.ixigua.com\/hq5d\/\"}};\nttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 300
            }, {
                "function": "__html",
                "priority": 15,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.toutiao.com\/YGyH\/\",videobannerSurl:\"\/\/d.toutiao.com\/YGyH\/\",commentSurl:\"\/\/d.toutiao.com\/YGyH\/\",apponlySurl:\"\/\/d.toutiao.com\/YGyH\/\",relatedSurl:\"\/\/d.toutiao.com\/YGyH\/\",hotvideoSurl:\"\/\/d.toutiao.com\/YGyH\/\",detailbottombannerSurl:\"\/\/d.toutiao.com\/YGyH\/\",playbtnSurl:\"\/\/d.toutiao.com\/YGyH\/\",guanzhuSurl:\"\/\/d.toutiao.com\/YGyH\/\",relationSurl:\"\/\/d.toutiao.com\/YGyH\/\",shortVideoAllSurl:\"\/\/d.toutiao.com\/NuxG\/\"},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/YGyH\/\"}};\nttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 262
            }, {
                "function": "__html",
                "priority": 15,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",topbannerSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",commentSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",apponlySurl:\"https:\/\/d.toutiao.com\/LJTN\/\",relatedSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",relationSurl:\"https:\/\/d.toutiao.com\/LJTN\/\",\nshortVideoAllSurl:\"\/\/d.toutiao.com\/LJTN\/\",unfoldSurl:\"\/\/d.toutiao.com\/LJTN\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 263
            }, {
                "function": "__html",
                "priority": 12,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",topbannerSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",commentSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",apponlySurl:\"https:\/\/d.toutiao.com\/JqTb\/\",relatedSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",relationSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/JqTb\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/JqTb\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/JqTb\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/JqTb\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 264
            }, {
                "function": "__html",
                "priority": 11,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u897f\\u74dc\\u89c6\\u9891\",CommentTitle:\"\\u897f\\u74dc\\u89c6\\u9891\",topbannerSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",commentSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",apponlySurl:\"https:\/\/d.toutiao.com\/DwhP\/\",relatedSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",hotvideoSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",playbtnSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",relationSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",\nshortVideoAllSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/DwhP\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/DwhP\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/DwhP\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/DwhP\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 266
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.512380843232999\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533373130333732\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/fUqg\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.512380843232999\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533373130333732\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/fUqg\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 134
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/8qV6\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/8qV6\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/8qV6\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 240
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/BaMV\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/BaMV\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/BaMV\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 242
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/RvEX\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/RvEX\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/RvEX\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 244
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/fGcq\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/fGcq\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/fGcq\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 246
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/jYC4\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/jYC4\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/jYC4\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 248
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.ixigua.com\/DQL2\/\",unfoldArticle:!1,hideGuanzhu:!1,hideTopBanner:!1,hideRecommendation:!0,hideRelateNews:!0,hideBottomBanner:!1,hideBonus:!0,hideAd:!0,hideRelationCard:!1,direct_download:!0,yybSurl:[\"\",\"https:\/\/d.ixigua.com\/DQL2\/\"]},list:{listbottombannerSurl:\"https:\/\/d.ixigua.com\/DQL2\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 250
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/52a3\/\",unfoldArticle:!1,hideGuanzhu:!1,hideTopBanner:!1,hideRecommendation:!0,hideRelateNews:!0,hideBottomBanner:!1,hideBonus:!0,hideAd:!0,hideRelationCard:!1,direct_download:!0,yybSurl:[\"\",\"https:\/\/d.toutiao.com\/52a3\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/52a3\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 251
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/RtVM\/\",unfoldArticle:!1,hideGuanzhu:!1,hideTopBanner:!1,hideRecommendation:!0,hideRelateNews:!0,hideBottomBanner:!1,hideBonus:!0,hideAd:!0,hideRelationCard:!1,direct_download:!0,yybSurl:[\"\",\"https:\/\/d.toutiao.com\/RtVM\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/RtVM\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 252
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!1,unfoldArticle:!1,hideGuanzhu:!1,hideTopBanner:!1,hideRecommendation:!0,hideRelateNews:!0,hideBottomBanner:!1,hideBonus:!0,hideAd:!0,hideRelationCard:!1,direct_download:!0,topbannerSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",videobannerSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",maskSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",relationSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",guanzhuSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",unfoldSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",\npgcSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",fullscreenSurl:\"https:\/\/d.toutiao.com\/fYLu\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/fYLu\/\"]},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/fYLu\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 253
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{commentSurl:\"\/\/d.toutiao.com\/kvHo\/\",topbannerSurl:\"\/\/d.toutiao.com\/kvHo\/\",apponlySurl:\"\/\/d.toutiao.com\/kvHo\/\",relatedSurl:\"\/\/d.toutiao.com\/kvHo\/\",hotvideoSurl:\"\/\/d.toutiao.com\/kvHo\/\",videobannerSurl:\"\/\/d.toutiao.com\/kvHo\/\",detailbottombannerSurl:\"\/\/d.toutiao.com\/kvHo\/\",maskSurl:\"\/\/d.toutiao.com\/kvHo\/\",relationSurl:\"\/\/d.toutiao.com\/kvHo\/\",guanzhuSurl:\"\/\/d.toutiao.com\/kvHo\/\",pgcSurl:\"\/\/d.toutiao.com\/kvHo\/\",fullscreenSurl:\"\/\/d.toutiao.com\/kvHo\/\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/kvHo\/\"]},\nlist:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/kvHo\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 254
            }, {
                "function": "__html",
                "priority": 10,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",videobannerSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",commentSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",apponlySurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",relatedSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",hotvideoSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",detailbottombannerSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",playbtnSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",guanzhuSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",relationSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",shortVideoAllSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\",unfoldSurl:\"https:\/\/d.kckxtz.com\/UrbE\/\"}};\nttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 296
            }, {
                "function": "__ua",
                "priority": 9,
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 131
            }, {
                "function": "__html",
                "priority": 9,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 56
            }, {
                "function": "__html",
                "priority": 9,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideCommentBanner:!0,hideRecommendation:!0,hideRelateNews:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8907169937588479\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383438\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/2uYv\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8907169937588479\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383438\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/2uYv\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 129
            }, {
                "function": "__html",
                "priority": 9,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideCommentBanner:!0,hideRecommendation:!0,hideRelateNews:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5684885082779416\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383334\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/MVmD\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5684885082779416\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383334\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/MVmD\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 130
            }, {
                "function": "__html",
                "priority": 9,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0},list:{hideBonus:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 137
            }, {
                "function": "__html",
                "priority": 9,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.873442176474275\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343633333638\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/ygL8\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.873442176474275\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343633333638\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/ygL8\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 149
            }, {
                "function": "__html",
                "priority": 8,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,bounceWhenClickOriginal:!1,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/fQum\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/fQum\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 125
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,hideBonus:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/Yg12\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 192
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/JPeA\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/JPeA\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 196
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,hideBonus:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/N78r\/ \"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 197
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.903170090068848\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002286\\x26channelid\\x3d000116083533363537363630\\x26appid\\x3d42294302\",\"http:\/\/d.toutiao.com\/jRVA\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.903170090068848\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002286\\x26channelid\\x3d000116083533363537363630\\x26appid\\x3d42294302\",\n\"http:\/\/d.toutiao.com\/jRVA\/\"],listbottombannerSurl:\"\/\/d.toutiao.com\/jRVA\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 211
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.864819692043826\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002672\\x26channelid\\x3d000116083232333338353638\\x26appid\\x3d213141\",\"https:\/\/d.toutiao.com\/yd6x\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.864819692043826\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002672\\x26channelid\\x3d000116083232333338353638\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/yd6x\/\"],listbottombannerSurl:\"\/\/d.toutiao.com\/yd6x\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 213
            }, {
                "function": "__html",
                "priority": 6,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,bannerTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",CommentTitle:\"\\u4eca\\u65e5\\u5934\\u6761\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.37295860659215374\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002672\\x26channelid\\x3d000116083534313233373234\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/5RP8\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.37295860659215374\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002672\\x26channelid\\x3d000116083534313233373234\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/5RP8\/\"],listbottombannerSurl:\"\/\/d.toutiao.com\/5RP8\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 219
            }, {
                "function": "__ua",
                "priority": 5,
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 142
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0,hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5938250588703056\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343935373738\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/JwkL\/\"]},list:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5938250588703056\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343935373738\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/JwkL\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 107
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.07210358053794708\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303832323539\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/ADkf\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.07210358053794708\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303832323539\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/ADkf\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 143
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8509472100162967\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373236\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/YNb\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8509472100162967\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373236\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/YNb\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 152
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.41518510028499334\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373434\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/6Gyp\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.41518510028499334\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373434\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/6Gyp\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 153
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.624210345357906\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373238\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/L5Gg\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.624210345357906\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534313233373238\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/L5Gg\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 154
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,downloadWhenClickRelateNews:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 157
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,topbannerSurl:\"\/\/d.toutiao.com\/S6SP\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9735060273097775\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533363037343432\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/S6SP\/\"]},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/S6SP\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 172
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,topbannerSurl:\"\/\/d.toutiao.com\/fQum\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.13767524081496707\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533373331373438\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/fQum\/\"]},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/fQum\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 174
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7336244780930121\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534373532313437\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/fwoe\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7336244780930121\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534373532313437\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/fwoe\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 178
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,topbannerSurl:\"\/\/d.toutiao.com\/Ah6F\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.765054624114534\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532383136303234\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/Ah6F\/\"]},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/Ah6F\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 186
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"\/\/d.toutiao.com\/duXC\/\",hideBonus:!0,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.22412285025914946\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532383136303138\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/duXC\/\"]},list:{listbottombannerSurl:\"\/\/d.toutiao.com\/duXC\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 188
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.6384140666032165\\x26pname\\x3dcom.ss.android.article.lite\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002517\\x26channelid\\x3d000116083634383031313537\\x26appid\\x3d42392809\",\"http:\/\/d.toutiao.com\/6mA6\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.6384140666032165\\x26pname\\x3dcom.ss.android.article.lite\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1002517\\x26channelid\\x3d000116083634383031313537\\x26appid\\x3d42392809\",\n\"http:\/\/d.toutiao.com\/6mA6\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 189
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/FCdT\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/FCdT\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 198
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/UjSK\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/UjSK\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 199
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/2fKN\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/2fKN\/\"],listbottombannerSurl:\"\/\/d.toutiao.com\/2fKN\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 209
            }, {
                "function": "__html",
                "priority": 5,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u74dc\\u74dc\\u9f99\",CommentTitle:\"\\u74dc\\u74dc\\u9f99\",topbannerSurl:\"https:\/\/d.985gm.com\/P8eU\/\",videobannerSurl:\"https:\/\/d.985gm.com\/P8eU\/\",commentSurl:\"https:\/\/d.985gm.com\/P8eU\/\",apponlySurl:\"https:\/\/d.985gm.com\/P8eU\/\",relatedSurl:\"https:\/\/d.985gm.com\/P8eU\/\",hotvideoSurl:\"https:\/\/d.985gm.com\/P8eU\/\",detailbottombannerSurl:\"https:\/\/d.985gm.com\/P8eU\/\",playbtnSurl:\"https:\/\/d.985gm.com\/P8eU\/\",guanzhuSurl:\"https:\/\/d.985gm.com\/P8eU\/\",relationSurl:\"https:\/\/d.985gm.com\/P8eU\/\",\nshortVideoAllSurl:\"https:\/\/d.985gm.com\/P8eU\/\",unfoldSurl:\"https:\/\/d.985gm.com\/P8eU\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.985gm.com\/P8eU\/\"]},list:{listbottombannerSurl:\"https:\/\/d.985gm.com\/P8eU\/\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.985gm.com\/P8eU\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.985gm.com\/P8eU\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 267
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.557194872585248\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353032343239\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/fouq\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.557194872585248\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353032343239\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/fouq\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 76
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9454200354733642\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343934353634\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/RMx9\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9454200354733642\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343934353634\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/RMx9\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 84
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentsShare:!0,hideBottomBanner:!0,hideRecommendation:!0,gotoDetailWhenFromListPage:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickRelateNews:!1,hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.12054551707939831\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353339\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/B4Yg\/\"]},\nlist:{hideBottomBanner:!0,hideMsgBox:!0,gotoDetailWhenFromListPage:!1,hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.12054551707939831\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353339\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/B4Yg\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 86
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,hideBottomBanner:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4658008296601548\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353535\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/J8re\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4658008296601548\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353535\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/J8re\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 91
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8256899247113973\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536363030\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/MbHR\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8256899247113973\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536363030\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/MbHR\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 95
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.40440559305792645\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353734\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/NU3d\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.40440559305792645\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353734\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/NU3d\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 96
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4626286896682894\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343539333337\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/f8GV\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4626286896682894\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343539333337\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/f8GV\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 104
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,hideRelateNews:!1,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7972616223021731\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353339363731\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/ho5e\/\"]},list:{hideBottomBanner:!0,hideMsgBox:!0,\nhideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7972616223021731\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353339363731\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/ho5e\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideRecommendation:!0,hideCommentBanner:!0,hideBottomBanner:!0,hideRelateNews:!1,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7274738886616816\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353339353737\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/YqWJ\/\"]},list:{hideBottomBanner:!0,hideMsgBox:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7274738886616816\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533353339353737\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/YqWJ\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 110
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4908077479806603\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533363932383237\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/B25Q\/\"]},list:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.4908077479806603\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533363932383237\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/B25Q\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 124
            }, {
                "function": "__html",
                "priority": 4,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/P217\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\n\"https:\/\/d.toutiao.com\/P217\/\"]},weixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5020834724267937\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26appid\\x3d42294302\",\"https:\/\/d.toutiao.com\/P217\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 163
            }, {
                "function": "__html",
                "priority": 3,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={list:{adMaterialOptions:{adMaterialChannels:[\"__all__\",\"news_hot\",\"news_society\",\"news_entertainment\"],adMaterialPos:3,adMaterialUpateTime:Date.parse(\"April 9, 2017\"),adMaterials:[{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u5348\\u591c_6584dfd45e8f505ae91d52209df7065c.jpg\",href:\"http:\/\/d.toutiao.com\/F4rw\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u704c\\u7bee\\u9ad8\\u624b_f8c2fc51255042721be338c131b1dabd.jpg\",href:\"http:\/\/d.toutiao.com\/UMHE\/\"},\n{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u91c7\\u82b1_20e2d7c5d2f81fab71411ef719cb6b0a.jpg\",href:\"http:\/\/d.toutiao.com\/8aKf\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u53d1\\u578b_a693da5a978af018a79f21fc9dd8159d.jpg\",href:\"http:\/\/d.toutiao.com\/S865\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u7537_b3a792e3b6e28fbee1fa3065bb0a3542.jpg\",href:\"http:\/\/d.toutiao.com\/jtQP\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u6392\\u884c_3f03e726cd5e79af4d871644eeedc698.jpeg\",\nhref:\"http:\/\/d.toutiao.com\/J9kt\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u6e38\\u620f1_0c9cb2babaf3f50d4082b056ee810b66.jpg\",href:\"http:\/\/d.toutiao.com\/rFxW\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u6e38\\u620f2_8336a28240dd8bbeddec6f4ff18ed479.jpg\",href:\"http:\/\/d.toutiao.com\/N7wn\/\"},{title:\"\",src:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u6e38\\u620f3_ee3a1e02c0cefc4a15a4c5e7ed21e28f.jpg\",href:\"http:\/\/d.toutiao.com\/PUva\/\"},{title:\"\",\nsrc:\"http:\/\/s2.pstatp.com\/site\/promotion\/landing_page\/img\/\\u6e38\\u620f4_0fd8b9d4225f0c10c3423bfc3fde4abe.jpg\",href:\"http:\/\/d.toutiao.com\/D5j7\/\"}]}}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 82
            }, {
                "function": "__html",
                "priority": 3,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"\/\/d.toutiao.com\/NAvA\/\",videobannerSurl:\"\/\/d.toutiao.com\/NAvA\/\",commentSurl:\"\/\/d.toutiao.com\/NAvA\/\",apponlySurl:\"\/\/d.toutiao.com\/NAvA\/\",relatedSurl:\"\/\/d.toutiao.com\/NAvA\/\",hotvideoSurl:\"\/\/d.toutiao.com\/NAvA\/\",detailbottombannerSurl:\"\/\/d.toutiao.com\/NAvA\/\",playbtnSurl:\"\/\/d.toutiao.com\/NAvA\/\",guanzhuSurl:\"\/\/d.toutiao.com\/NAvA\/\",relationSurl:\"\/\/d.toutiao.com\/NAvA\/\",shortVideoAllSurl:\"\/\/d.toutiao.com\/NAvA\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 256
            }, {
                "function": "__html",
                "priority": 3,
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{topbannerSurl:\"\/\/d.toutiao.com\/AEYg\/\",videobannerSurl:\"\/\/d.toutiao.com\/AEYg\/\",commentSurl:\"\/\/d.toutiao.com\/AEYg\/\",apponlySurl:\"\/\/d.toutiao.com\/AEYg\/\",relatedSurl:\"\/\/d.toutiao.com\/AEYg\/\",hotvideoSurl:\"\/\/d.toutiao.com\/AEYg\/\",detailbottombannerSurl:\"\/\/d.toutiao.com\/AEYg\/\",playbtnSurl:\"\/\/d.toutiao.com\/AEYg\/\",guanzhuSurl:\"\/\/d.toutiao.com\/AEYg\/\",relationSurl:\"\/\/d.toutiao.com\/AEYg\/\",shortVideoAllSurl:\"\/\/d.toutiao.com\/NuxG\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 257
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 133
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 173
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 175
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 176
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 181
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 185
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 187
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 212
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 214
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 220
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 224
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 226
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 236
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 237
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 238
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 239
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 241
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 243
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 245
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 247
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-28423340-36",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 249
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){$(\"#pageletBottomBanner .download\").attr(\"href\",\"http:\/\/d.toutiao.com\/DpLe\/\")});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 28
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){$(\".download .open\").text(\"\\u7acb\\u5373\\u4e0b\\u8f7d\")});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 29
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.wkt_cfg={f:\"pv_third\",b:\"toutiao\"};var a=document.createElement(\"script\");a.src=\"\/\/static.51y5.net\/js\/wkt.m.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 30
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Edocument.title=\"\\u53d1\\u73b0\";\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 31
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Edocument.body.addEventListener(\"click\",function(a){\"undefined\"!=typeof baiduInputJSBridge\u0026\u0026(baiduInputJSBridge.on(\"onDownload\",{click_web_download_link:\"https:\/\/s4.pstatp.com\/site\/download\/promotion\/apk\/NewsArticle_bdsrfcpa1_v5.0.4_3bb4b82.apk\",click_web_download_package:\"com.ss.android.article.news\"},function(a){}),a.stopPropagation(),a.preventDefault())}.bind(this),!0);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBonus:!0,hideBottomBanner:!0,hideMedalTable:!0,allDownload:!1,gotoDetailWhenFromListPage:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideMsgBox:!0,hideBonus:!0,allDownload:!1,hideTopBar:!1,hideTopMenuMore:!1,gotoDetailWhenFromListPage:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 45
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,unfoldArticle:!1,hideGuanzhu:!1,hideCommentsShare:!1,hideCommentBanner:!1,hideRecommendation:!1,hideRelateNews:!1,hideBottomBanner:!1,hideHotVideo:!1,hideBonus:!1,hideAd:!1,hideVideoBanner:!0,videoBannerTitle:\"\\u4e0b\\u8f7d\\u4eca\\u65e5\\u5934\\u6761\\uff0c\\u4eab\\u53d7\\u9ad8\\u6e05\\u89c6\\u9891\\u4f53\\u9a8c\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",allDownload:!1,notJumpToApp:!1,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,\ndownloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!1,bounceWhenClickOriginal:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.164375419029966\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083532343331353031\\x26appid\\x3d213141\",\"https:\/\/fds.so\/d\/fbbca54fd667867c\/4SdaododnG\"]},list:{hideBottomBanner:!0,hideMsgBox:!0,allDownload:!0,hideTopBar:!0,hideTopMenuMore:!0,hideBonus:!0,gotoDetailWhenFromListPage:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5751336587127298\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26appid\\x3d213141\",\n\"https:\/\/fds.so\/d\/fbbca54fd667867c\/4SdaododnG\"]},weixin:{hideTopBanner:!1,unfoldArticle:!0,hideCommentsShare:!1,hideRecommendation:!1,hideRelateNews:!1,hideBottomBanner:!1,allDownload:!1,gotoDetailWhenFromListPage:!0,jumpToAppWhenClickRelateNews:!0,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.800875908927992\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083232373438333938\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/kR2b\/\"]}};\nttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 47
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={list:{hideBottomBanner:!1,hideMsgBox:!1,allDownload:!1,hideTopBar:!0,hideTopMenuMore:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 50
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 53
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 54
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBottomBanner:!0,hideBonus:!0,hideMedalTable:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideTopBar:!0,hideBonus:!0,hideBottomBanner:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 55
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 57
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 58
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 59
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 60
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,gotoDetailWhenFromListPage:!1},list:{hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 61
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 62
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={list:{hideTopBar:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 64
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={list:{hideTopBar:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 66
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={list:{hideTopBar:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 69
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideCommentBanner:!0},weixin:{hideCommentBanner:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,hideAd:!0,hideBonus:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 72
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,hideAd:!0}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 73
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 75
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideBottomBanner:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 77
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8532129973996758\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536363031\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/jSHb\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8532129973996758\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536363031\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/jSHb\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 78
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideBottomBanner:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideMsgBox:!0,hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 79
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!1,unfoldArticle:!1,hideCommentsShare:!1,hideRecommendation:!1,hideRelateNews:!1,hideBottomBanner:!1,allDownload:!1,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"\",\"https:\/\/fds.so\/d\/fbbca54fd667867c\/4BEqs4LDYk\"]},list:{hideBottomBanner:!1,hideMsgBox:!1,allDownload:!1,hideTopBar:!0,hideTopMenuMore:!1,gotoDetailWhenFromListPage:!0,yybSurl:[\"\",\"https:\/\/fds.so\/d\/fbbca54fd667867c\/4BEqs4LDYk\"]},weixin:{hideTopBanner:!1,\nunfoldArticle:!0,hideCommentsShare:!1,hideRecommendation:!1,hideRelateNews:!1,hideBottomBanner:!1,allDownload:!1,gotoDetailWhenFromListPage:!0,jumpToAppWhenClickRelateNews:!0,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.800875908927992\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083232373438333938\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/kR2b\/\"]}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 81
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.3579206307787226\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353437\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/fwnp\/\"]},list:{hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.3579206307787226\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353437\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/fwnp\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 83
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9546997416052267\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230353235\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/khJa\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9546997416052267\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230353235\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/khJa\/\"]},\nweixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9117135343389775\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230353235\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/khJa\/\"]}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 87
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5960916436789867\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230383337\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/PfjK\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5960916436789867\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230383337\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/PfjK\/\"]},\nweixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5960916436789867\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303230383337\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/PfjK\/\"]}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 88
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.09078839391840132\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303439\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/f4xd\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.09078839391840132\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303439\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/f4xd\/\"]},\nweixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.09078839391840132\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303439\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/f4xd\/\"]}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 89
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8988884813183335\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303436\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/n1D\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8988884813183335\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303436\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/n1D\/\"]},\nweixin:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.8988884813183335\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533303231303436\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/n1D\/\"]}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 90
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 92
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideBonus:!0,hideTopBar:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 93
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9447525262084191\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533313730333230\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/AuR4\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.9447525262084191\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26channelid\\x3d000116083533313730333230\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/AuR4\/\"]}};\nttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 94
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.2077559795152888\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343934363038\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/D1Y8\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.2077559795152888\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343934363038\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/D1Y8\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 99
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 100
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideMsgBox:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM);console.log(ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 101
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.40440559305792645\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533333536353734\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/\"+($.request(\"dl\")||\"YDjc\")]}};console.log($.request(\"dl\"));ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 103
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5424015214479736\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343539333339\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/eXjA\/\"]},list:{hideBonus:!0,gotoDetailWhenFromListPage:!1,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5424015214479736\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533343539333339\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/eXjA\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 105
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideCommentBanner:!0,hideBottomBanner:!0,hideRecommendation:!0,gotoDetailWhenFromListPage:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickRelateNews:!1,hideBonus:!0},list:{hideBottomBanner:!0,hideMsgBox:!0,gotoDetailWhenFromListPage:!1,hideBonus:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 108
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideRelateNews:!1,hideBonus:!0,playVideoImmediately:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideMsgBox:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(temp,ttGTM,!0);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 111
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.6695939105781896\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533363037343432\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/S6SP\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.6695939105781896\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533363037343432\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/S6SP\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerSubTitle:\"5.8\\u4ebf\\u7528\\u6237\\u7684\\u9009\\u62e9\"},list:{bannerSubTitle:\"5.8\\u4ebf\\u7528\\u6237\\u7684\\u9009\\u62e9\"},weixin:{bannerSubTitle:\"5.8\\u4ebf\\u7528\\u6237\\u7684\\u9009\\u62e9\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 113
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideMsgBox:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!1},list:{hideBottomBanner:!0,hideMsgBox:!0,hideTopBar:!0,hideBonus:!0,gotoDetailWhenFromListPage:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 119
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,unfoldArticle:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideMsgBox:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 126
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideCommentBanner:!0,hideRecommendation:!0,hideRelateNews:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5684885082779416\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383334\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/MVmD\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.5684885082779416\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083532363130383334\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/MVmD\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 132
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.470994670170521\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533383838313238\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/eM94\/\"]},list:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.470994670170521\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533383838313238\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/eM94\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 135
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,hideGuanzhu:!0,hideMedalTable:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1,jumpToAppWhenClickRelateNews:!1,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!1},list:{hideBottomBanner:!0,hideTopBar:!0,hideMsgBox:!0,hideBonus:!0,gotoDetailWhenFromListPage:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 139
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.879352588082357\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303237373633\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/6gbt\/\"]},list:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.879352588082357\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083534303237373633\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/6gbt\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 140
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.38499191618835127\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533393834323231\\x26appid\\x3d213141\",\"http:\/\/d.toutiao.com\/frML\/\"]},list:{hideBonus:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.38499191618835127\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083533393834323231\\x26appid\\x3d213141\",\n\"http:\/\/d.toutiao.com\/frML\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideGuanzhu:!0,hideCommentsShare:!0,hideBonus:!0,yybSurl:[\"\",\"http:\/\/d.toutiao.com\/fmG7\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/fmG7\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 148
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,notJumpToApp:!0,unfoldArticle:!0,hideGuanzhu:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideBonus:!0,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 158
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0,hideCommentsShare:!0,hideRecommendation:!0,hideRelateNews:!0,hideBonus:!0,hideBottomBanner:!0,hideHotVideo:!0,downloadWhenClickRelateNews:!1}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 159
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,unfoldArticle:!0,hideCommentsShare:!0,hideRecommendation:!0,hideBottomBanner:!0,hideHotVideo:!0,hideBonus:!0,downloadWhenClickRelateNews:!1},list:{hideBottomBanner:!0,hideBonus:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 160
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.79715837281951\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083232333338353638\\x26appid\\x3d213141\",\"https:\/\/d.toutiao.com\/yd6x\/\"]},list:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.79715837281951\\x26pname\\x3dcom.ss.android.article.news\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d991612\\x26channelid\\x3d000116083232333338353638\\x26appid\\x3d213141\",\n\"https:\/\/d.toutiao.com\/yd6x\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 161
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{unfoldArticle:!0,hideRelateNews:!0,hideBottomBanner:!0,hideHotVideo:!0,hideAd:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 162
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{videobannerSurl:\"\/\/d.toutiao.com\/SKX1\/\",topbannerSurl:\"\/\/d.toutiao.com\/SKX1\/\",commentSurl:\"\/\/d.toutiao.com\/SKX1\/\",apponlySurl:\"\/\/d.toutiao.com\/SKX1\/\",relatedSurl:\"\/\/d.toutiao.com\/SKX1\/\",hotvideoSurl:\"\/\/d.toutiao.com\/SKX1\/\",detailbottombannerSurl:\"https:\/\/d.toutiao.com\/SKX1\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/SKX1\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 166
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0},list:{allDownload:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 177
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,hideTopBanner:!0,hideRelateNews:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 183
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideTopBanner:!0,unfoldArticle:!0,hideGuanzhu:!0,hideCommentBanner:!0,hideRecommendation:!0,hideBottomBanner:!0,hideHotVideo:!0,hideBonus:!0,downloadWhenClickRelateNews:!1,jumpToAppWhenClickPGC:!1,gotoPGCWhenClickPGC:!0},list:{hideBottomBanner:!0,hideMsgBox:!0,hideBonus:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 190
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,hideRelateNews:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 208
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{bannerTitle:\"\\u5934\\u6761\\u89c6\\u9891\",CommentTitle:\"\\u5934\\u6761\\u89c6\\u9891\",yybSurl:[\"\",\"https:\/\/d.toutiao.com\/LGbX\/\"]},list:{yybSurl:[\"\",\"http:\/\/d.toutiao.com\/LGbX\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 216
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,hideTopBanner:!0,hideRelateNews:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 221
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{hideRecommendation:!0,hideTopBanner:!0,hideRelateNews:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 222
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7334194930516986\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26channelid\\x3d000116083634383035343936\\x26appid\\x3d42294302\",\"http:\/\/d.toutiao.com\/fqwU\/\"]},list:{yybSurl:[\"tmast:\/\/appdetails?r\\x3d0.7334194930516986\\x26pname\\x3dcom.ss.android.article.video\\x26oplist\\x3d1%3B2\\x26via\\x3dANDROIDWXZ.YYB.OTHERBROWSER\\x26downl_biz_id\\x3d1001792\\x26channelid\\x3d000116083634383035343936\\x26appid\\x3d42294302\",\n\"http:\/\/d.toutiao.com\/fqwU\/\"]}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 227
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{preventDongTaiDaBao:!0},list:{preventDongTaiDaBao:!0}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 228
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/ADkf\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/ADkf\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 232
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.toutiao.com\/kjET\/\"},list:{listbottombannerSurl:\"https:\/\/d.toutiao.com\/kjET\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 233
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.ixigua.com\/DHCc\/\"},list:{listbottombannerSurl:\"https:\/\/d.ixigua.com\/DHCc\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 234
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar temp={detail:{allDownload:!0,allDownloadSurl:\"https:\/\/d.ixigua.com\/RtJS\/\"},list:{listbottombannerSurl:\"https:\/\/d.ixigua.com\/RtJS\/\"}};ttGTM=$.extend(!0,{},temp,ttGTM);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 235
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "6314444011859870210"
            }, {
                "function": "_eq",
                "arg0": ["macro", 16],
                "arg1": "gtm.js"
            }, {
                "function": "_re",
                "arg0": ["macro", 15],
                "arg1": "6316134536291811842|6316898635321704962"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "wap_rec"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "xiaoshuozhan"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "fanxing_navigation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "weibo_tt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "cpm"
            }, {
                "function": "_eq",
                "arg0": ["macro", 17],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wps"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "chelaile"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "2345_push"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "2345_feed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "test"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "chunseshucheng"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "tiansheng"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "test"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "liebao"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "liebao_video"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_xg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "huzhong_tt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "huzhong_xg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt_1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt_2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt_3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt_4"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "linglukeji_tt_5"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "huawei_push"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "utm_source=huawei_push"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wififeed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "webview"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "open"
            }, {
                "function": "_eq",
                "arg0": ["macro", 15],
                "arg1": "utm_source=baidu_shuru"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "baidu_shuru"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "weiche"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "test123"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "360wifi"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "wififeed"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "webview"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "open"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "launcherkuyu"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "sdk"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "weihuifeed"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "ami"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "huashi"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "meizusj"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "lianlewifi"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "jinlisp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "rmsz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gukebao_ios"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "ArticleStreamSdk"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "wifi_wnt"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "mojiapp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "cheetah"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "cpc"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "tiebawap"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "coperation"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "wifiad"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gukebao_adr"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "bd_paid"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "navigation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hao123"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "navigation2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "360liulanqi"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "sdk"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kuwanshangdian"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "jinlirili"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "deepshare"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "unicomwo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "inapp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "cooperation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "MK001"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "oppo_llq_xinwen"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "operation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "oppo_llq_9"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "site"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "xiaomi_hotsite"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ucplus_toutiao"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "qq_view_detail"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "uc_site"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "weimiliulanqi"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "jijianzhuomian"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "tiexue"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "exchange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "alios"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "aliossearch"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "quanminshangwang"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "meizuliulanqi"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "leshiliulanqi_mz"
            }, {
                "function": "_re",
                "arg0": ["macro", 15],
                "arg1": "dl=*",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "lvchallq"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "junbo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "2345"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "cpt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "store_baidu"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "cpd"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "kandian"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "meizu_llq_mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "vivo_llq_mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "samsung_llq_mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "dianxin"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "cpc"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "push"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "vivoliulanqi"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "jinlisuoping"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "aliyun_llq_mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "shuaji"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "dingding"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sinaweibo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "mobile_qq"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "qzone"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sm_card"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "jinli_llq"
            }, {
                "function": "_eq",
                "arg0": ["macro", 18],
                "arg1": "æ·±åœ³"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "meizusousuo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "autonavi"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wifilaile"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_10"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gionee"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "suoping1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ceshi_mz"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_4"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_6"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_7"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_8"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_9"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "mz"
            }, {
                "function": "_cn",
                "arg0": ["macro", 18],
                "arg1": "ä¸Šæµ·"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wisesurvey"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6342996017561993730"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "360"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "callapp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wtoutiao"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6346476688972448258"
            }, {
                "function": "_eq",
                "arg0": ["macro", 19],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 20],
                "arg1": "true"
            }, {
                "function": "_cn",
                "arg0": ["macro", 13],
                "arg1": "news_article"
            }, {
                "function": "_eq",
                "arg0": ["macro", 21],
                "arg1": "test12"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sem_baidu"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6365640024133730818"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6433233642062873089"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6433246522980172289"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "500_h5"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "tianyi_push"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sogou_search"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "rec"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "meizullq_feed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_11"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "kjwl_12"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6379076811464114690"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6379098238657511937"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i437268159039799809"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "6437269807418065409"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6437274133439971841"
            }, {
                "function": "_cn",
                "arg0": ["macro", 22],
                "arg1": "i6439133898461938178"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6437262091471553026"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "6460733524063306254"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "i6461130278462030349"
            }, {
                "function": "_re",
                "arg0": ["macro", 15],
                "arg1": "6389150887431897601|6393105857915126273|6383587697155375618"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "6389150887431897601"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "qqbrowser"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "wzdh"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sem"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "pinzhuan"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "tiansheng"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "2345_video"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hotsoon"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "news_article_lite"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ug_dsp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ug_dx_xg2tt"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ug_dsp_xg2lite"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ug_dsp_xg2lite1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "netease_opening"
            }, {
                "function": "_cn",
                "arg0": ["macro", 23],
                "arg1": "6561412362111287822"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "6563848780355994116"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "video_article"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "true"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "mobile_qq"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "qzone"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "ecom_huimai"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "365yg.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "video_article"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "ixigua.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "guagualongkids"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "f100"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "news_weather"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "news_calendar"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "wap_search"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "vivoliulanqi_12"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "oppo_llq_api"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "xiaomi_sp_api"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ug_sms"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g4"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g5"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g6"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g7"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g8"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g11"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g12"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g13"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g14"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g15"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g16"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g17"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "g18"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "lahuo_test"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "qqqun"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "weixinqun"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "pengyouquan"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "news_article"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "abtest_id=1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "weixin_moments"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "abtest_id=2"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "video_lite"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sms_share"
            }, {
                "function": "_re",
                "arg0": ["macro", 3],
                "arg1": "FlipChat",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "t_browser"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "CZ"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hupu"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "news_house"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "video_house"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "qrcode"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "dxbd"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "dxbd"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "recall_dsp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "recall_sms_shortvideo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "xigua_cmcc"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "toutiao_pick"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "douyin_pick"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "OP"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "HW"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "VV"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "MI"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "SS"
            }, {
                "function": "_eq",
                "arg0": ["macro", 13],
                "arg1": "hupu"
            }],
            "rules": [
                [["if", 0, 1], ["add", 75]],
                [["if", 1, 2], ["add", 119]],
                [["if", 1, 3], ["add", 88, 3]],
                [["if", 1, 4], ["add", 120, 95, 98]],
                [["if", 1, 5], ["add", 121, 96]],
                [["if", 1, 6, 7, 8], ["add", 122, 97]],
                [["if", 1, 9], ["add", 123]],
                [["if", 1, 10], ["add", 124]],
                [["if", 1, 11], ["add", 125]],
                [["if", 1, 12, 13], ["add", 126, 85]],
                [["if", 1, 13, 14], ["add", 127, 86]],
                [["if", 1, 15, 16], ["add", 128]],
                [["if", 1, 17], ["add", 129, 0]],
                [["if", 1, 18], ["add", 130, 1]],
                [["if", 1, 19], ["add", 131, 209]],
                [["if", 1, 20], ["add", 132, 211]],
                [["if", 1, 21], ["add", 133, 210]],
                [["if", 1, 22], ["add", 134, 212]],
                [["if", 1, 23], ["add", 135, 64]],
                [["if", 1, 24], ["add", 136, 65]],
                [["if", 1, 25], ["add", 137, 66]],
                [["if", 1, 26], ["add", 138, 67]],
                [["if", 1, 27], ["add", 139, 68]],
                [["if", 1, 28], ["add", 140, 141]],
                [["if", 1, 29], ["add", 140, 141]],
                [["if", 1, 30, 31, 32], ["add", 142, 143]],
                [["if", 1, 33], ["add", 144]],
                [["if", 1, 34], ["add", 144]],
                [["if", 1, 31, 32, 35], ["add", 145]],
                [["if", 1, 36], ["add", 146]],
                [["if", 1, 37], ["add", 147]],
                [["if", 1, 38, 39, 40], ["add", 148]],
                [["if", 1, 39, 40, 41], ["add", 149]],
                [["if", 1, 40, 42, 43], ["add", 150]],
                [["if", 1, 39, 40, 44], ["add", 76]],
                [["if", 1, 39, 40, 45], ["add", 151]],
                [["if", 1, 46], ["add", 152]],
                [["if", 1, 39, 40, 47], ["add", 153]],
                [["if", 1, 39, 40, 48], ["add", 154]],
                [["if", 1, 39, 40, 49], ["add", 155]],
                [["if", 1, 31, 32, 50], ["add", 156]],
                [["if", 1, 51], ["add", 157]],
                [["if", 1, 52], ["add", 158]],
                [["if", 1, 53], ["add", 159]],
                [["if", 1, 54], ["add", 160]],
                [["if", 1, 55, 56, 57], ["add", 161]],
                [["if", 1, 55, 57, 58], ["add", 162]],
                [["if", 1, 31, 32, 59], ["add", 163]],
                [["if", 1, 60, 61, 62], ["add", 105]],
                [["if", 1, 60, 62, 63], ["add", 105]],
                [["if", 1, 32, 64, 65], ["add", 164]],
                [["if", 1, 32, 65, 66], ["add", 165]],
                [["if", 1, 32, 65, 67], ["add", 166]],
                [["if", 1, 68], ["add", 167]],
                [["if", 1], ["add", 116, 184, 208]],
                [["if", 1, 32, 69], ["add", 168]],
                [["if", 1, 31, 32, 69], ["add", 168]],
                [["if", 1, 70, 71, 72], ["add", 106]],
                [["if", 1, 61, 73, 74], ["add", 107]],
                [["if", 1, 74, 75, 76], ["add", 107]],
                [["if", 1, 61, 77], ["add", 169]],
                [["if", 1, 78], ["add", 170]],
                [["if", 1, 79], ["add", 171]],
                [["if", 1, 61, 80], ["add", 172]],
                [["if", 1, 31, 32, 81], ["add", 108]],
                [["if", 1, 32, 59, 65], ["add", 173]],
                [["if", 1, 32, 65, 82], ["add", 174]],
                [["if", 1, 83, 84], ["add", 175]],
                [["if", 1, 31, 32, 85], ["add", 109]],
                [["if", 1, 31, 32, 86], ["add", 110]],
                [["if", 1, 31, 32, 87], ["add", 176]],
                [["if", 1, 31, 32, 88], ["add", 177]],
                [["if", 1, 89], ["add", 178]],
                [["if", 1, 90], ["add", 179]],
                [["if", 1, 31, 32, 91], ["add", 111]],
                [["if", 1, 31, 32, 92], ["add", 180]],
                [["if", 1, 93, 94, 95], ["add", 89]],
                [["if", 1, 96, 97, 98], ["add", 181]],
                [["if", 1, 31, 32, 99], ["add", 112]],
                [["if", 1, 31, 32, 100], ["add", 113]],
                [["if", 1, 31, 32, 101], ["add", 182]],
                [["if", 1, 102, 103, 104], ["add", 183]],
                [["if", 1, 31, 32, 105], ["add", 185]],
                [["if", 1, 32, 65, 106], ["add", 186]],
                [["if", 1, 32, 103, 107], ["add", 114]],
                [["if", 1, 103, 104, 108], ["add", 81]],
                [["if", 1, 31, 32, 109], ["add", 187]],
                [["if", 0, 1, 110], ["add", 77]],
                [["if", 0, 1, 111], ["add", 78]],
                [["if", 0, 1, 112], ["add", 188]],
                [["if", 1, 113], ["add", 63]],
                [["if", 1, 94, 95, 114], ["add", 189]],
                [["if", 1, 94, 95, 114, 115], ["add", 79]],
                [["if", 1, 32, 65, 116], ["add", 190]],
                [["if", 1, 31, 32, 117], ["add", 191]],
                [["if", 1, 31, 32, 118], ["add", 192]],
                [["if", 1, 3, 119], ["add", 90]],
                [["if", 1, 3, 120], ["add", 2]],
                [["if", 1, 3, 121], ["add", 4]],
                [["if", 1, 122, 123], ["add", 193]],
                [["if", 1, 94, 124], ["add", 80]],
                [["if", 1, 3, 125], ["add", 5]],
                [["if", 1, 3, 126], ["add", 91]],
                [["if", 1, 3, 127], ["add", 92]],
                [["if", 1, 3, 128], ["add", 93]],
                [["if", 1, 3, 129], ["add", 13]],
                [["if", 1, 93, 94, 130, 131], ["add", 94]],
                [["if", 1, 132], ["add", 194]],
                [["if", 1, 133], ["add", 195]],
                [["if", 1, 134, 135], ["add", 196]],
                [["if", 1, 136], ["add", 197]],
                [["if", 1, 137], ["add", 198]],
                [["if", 1, 138, 139, 140], ["add", 115]],
                [["if", 1, 141], ["add", 199]],
                [["if", 1, 142], ["add", 200]],
                [["if", 1, 143, 144, 145], ["add", 201]],
                [["if", 1, 93], ["add", 99, 207]],
                [["if", 1, 6, 7, 139], ["add", 100]],
                [["if", 1, 146], ["add", 202]],
                [["if", 1, 147], ["add", 82]],
                [["if", 1, 148, 149], ["add", 83]],
                [["if", 1, 150], ["add", 84]],
                [["if", 1, 3, 151], ["add", 101]],
                [["if", 1, 3, 152], ["add", 102]],
                [["if", 1, 153], ["add", 6]],
                [["if", 1, 154], ["add", 6]],
                [["if", 1, 155], ["add", 6]],
                [["if", 1, 156], ["add", 6]],
                [["if", 1, 157], ["add", 6]],
                [["if", 1, 158], ["add", 6]],
                [["if", 1, 159], ["add", 6]],
                [["if", 1, 160], ["add", 6]],
                [["if", 1, 161], ["add", 6]],
                [["if", 1, 162], ["add", 203]],
                [["if", 1, 163], ["add", 203]],
                [["if", 1, 164, 165], ["add", 103]],
                [["if", 1, 166, 167], ["add", 204]],
                [["if", 1, 13, 168], ["add", 87]],
                [["if", 1, 144], ["add", 205]],
                [["if", 1, 145], ["add", 206]],
                [["if", 1, 169], ["add", 7]],
                [["if", 1, 170], ["add", 8]],
                [["if", 1, 171], ["add", 9]],
                [["if", 1, 172], ["add", 69]],
                [["if", 1, 173], ["add", 70]],
                [["if", 1, 174], ["add", 71]],
                [["if", 1, 175], ["add", 72]],
                [["if", 1, 176], ["add", 73]],
                [["if", 1, 177], ["add", 10]],
                [["if", 1, 178], ["add", 10]],
                [["if", 1, 8], ["add", 117]],
                [["if", 1, 138, 139], ["add", 118]],
                [["if", 1], ["unless", 179], ["add", 33]],
                [["if", 1, 179], ["add", 11]],
                [["if", 1, 180], ["add", 59]],
                [["if", 1, 138, 139, 140, 181], ["add", 60, 61]],
                [["if", 1, 138, 139, 140, 182], ["add", 60]],
                [["if", 1, 8, 138, 140, 182], ["add", 61]],
                [["if", 1, 183], ["add", 54]],
                [["if", 1, 185], ["unless", 184, 186], ["add", 62]],
                [["if", 1, 187], ["add", 104]],
                [["if", 1, 188], ["add", 55]],
                [["if", 1, 189], ["add", 56]],
                [["if", 1, 190], ["add", 57]],
                [["if", 1, 105, 139, 191], ["add", 34]],
                [["if", 1, 139, 191, 192], ["add", 34]],
                [["if", 1, 139, 191, 193], ["add", 35]],
                [["if", 1, 139, 191, 194], ["add", 36]],
                [["if", 1, 195, 196], ["add", 37]],
                [["if", 1, 195, 197], ["add", 38]],
                [["if", 1, 195, 198], ["add", 39]],
                [["if", 1, 195, 199], ["add", 40]],
                [["if", 1, 195, 200], ["add", 41]],
                [["if", 1, 195, 201], ["add", 42]],
                [["if", 1, 195, 202], ["add", 43]],
                [["if", 1, 195, 203], ["add", 44]],
                [["if", 1, 195, 204], ["add", 45]],
                [["if", 1, 195, 205], ["add", 46]],
                [["if", 1, 195, 206], ["add", 47]],
                [["if", 1, 195, 207], ["add", 48]],
                [["if", 1, 195, 208], ["add", 49]],
                [["if", 1, 195, 209], ["add", 50]],
                [["if", 1, 195, 210], ["add", 51]],
                [["if", 1, 195, 211], ["add", 52]],
                [["if", 1, 195, 212], ["add", 53]],
                [["if", 1, 213], ["add", 27]],
                [["if", 1, 214], ["add", 28]],
                [["if", 1, 215], ["add", 29]],
                [["if", 1, 216, 217, 218], ["add", 30]],
                [["if", 1, 216, 218, 219], ["add", 31]],
                [["if", 1, 139, 220], ["add", 74]],
                [["if", 1, 221], ["add", 24]],
                [["if", 1, 222], ["add", 12]],
                [["if", 1, 191, 223], ["add", 25]],
                [["if", 1, 224], ["add", 25]],
                [["if", 1, 225], ["add", 58]],
                [["if", 1, 216, 226], ["add", 32]],
                [["if", 1, 216, 227], ["add", 32]],
                [["if", 1, 226, 228], ["add", 32]],
                [["if", 1, 227, 228], ["add", 32]],
                [["if", 1, 229, 230], ["add", 26]],
                [["if", 1, 195, 231], ["add", 23]],
                [["if", 1, 195, 232], ["add", 19]],
                [["if", 1, 179, 195, 233], ["add", 20]],
                [["if", 1, 216, 234, 235], ["add", 21]],
                [["if", 1, 191, 236], ["add", 14]],
                [["if", 1, 191, 237], ["add", 15]],
                [["if", 1, 191, 238], ["add", 16]],
                [["if", 1, 191, 239], ["add", 17]],
                [["if", 1, 191, 240], ["add", 18]],
                [["if", 1, 241], ["add", 22]]]
        },
        "runtime": [
            [], []
        ]


    };
    var ba, da = function () {
        var a = ca, b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, ea = this || self, fa = /^[\w+/_-]+[=]{0,2}$/, ha = null;
    var ja = function () {
    }, ka = function (a) {
        return "function" == typeof a
    }, la = function (a) {
        return "string" == typeof a
    }, ma = function (a) {
        return "number" == typeof a && !isNaN(a)
    }, na = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, pa = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    }, qa = function (a, b) {
        if (a && na(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    }, ra = function (a, b) {
        if (!ma(a) ||
            !ma(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }, ta = function (a, b) {
        for (var c = new sa, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1
    }, ua = function (a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }, va = function (a) {
        return Math.round(Number(a)) || 0
    }, wa = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, xa = function (a) {
        var b = [];
        if (na(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, ya = function (a) {
        return a ?
            a.replace(/^\s+|\s+$/g, "") : ""
    }, za = function () {
        return (new Date).getTime()
    }, sa = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    sa.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    sa.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    sa.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var Aa = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Ba = function (a) {
        var b = !1;
        return function () {
            if (!b) try {
                a()
            } catch (c) {
            }
            b = !0
        }
    }, Ca = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, Ea = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1
    }, Fa = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    };/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ga = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Ha = function (a) {
        if (null == a) return String(a);
        var b = Ga.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Ia = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, Ja = function (a) {
        if (!a || "object" != Ha(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Ia(a, "constructor") && !Ia(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || Ia(a, b)
    }, f = function (a, b) {
        var c = b || ("array" == Ha(a) ? [] : {}), d;
        for (d in a) if (Ia(a, d)) {
            var e = a[d];
            "array" == Ha(e) ? ("array" != Ha(c[d]) && (c[d] = []), c[d] = f(e, c[d])) : Ja(e) ? (Ja(c[d]) || (c[d] = {}), c[d] = f(e, c[d])) : c[d] = e
        }
        return c
    };
    var u = window, C = document, Ka = navigator, La = C.currentScript && C.currentScript.src, Ma = function (a, b) {
        var c = u[a];
        u[a] = void 0 === c ? b : c;
        return u[a]
    }, Na = function (a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
            a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
        })
    }, Oa = function (a, b, c) {
        var d = C.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        Na(d, b);
        c && (d.onerror = c);
        var e;
        if (null === ha) b:{
            var g = ea.document, h = g.querySelector && g.querySelector("script[nonce]");
            if (h) {
                var k = h.nonce || h.getAttribute("nonce");
                if (k && fa.test(k)) {
                    ha = k;
                    break b
                }
            }
            ha = ""
        }
        e = ha;
        e && d.setAttribute("nonce", e);
        var l = C.getElementsByTagName("script")[0] || C.body || C.head;
        l.parentNode.insertBefore(d, l);
        return d
    }, Pa = function () {
        if (La) {
            var a = La.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    }, Qa = function (a, b) {
        var c = C.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = C.body && C.body.lastChild ||
            C.body || C.head;
        d.parentNode.insertBefore(c, d);
        Na(c, b);
        void 0 !== a && (c.src = a);
        return c
    }, Ra = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b()
        };
        d.onerror = function () {
            d.onerror = null;
            c && c()
        };
        d.src = a;
        return d
    }, Sa = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, Ta = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, D = function (a) {
        u.setTimeout(a, 0)
    }, Ua = function (a, b) {
        return a &&
        b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }, Va = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, Za = function (a) {
        var b = C.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
        return c
    }, $a = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var g = a, h = 0; g && h <= c; h++) {
            if (d[String(g.tagName).toLowerCase()]) return g;
            g = g.parentElement
        }
        return null
    }, ab = function (a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var cb = {}, db = function (a, b) {
        cb[a] = cb[a] || [];
        cb[a][b] = !0
    }, eb = function (a) {
        for (var b = [], c = cb[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var fb = /:[0-9]+$/, gb = function (a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        }, kb = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hb(a.protocol) || hb(u.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : u.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || u.location.hostname).replace(fb, "").toLowerCase());
            var g = b, h, k = hb(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = ib(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(fb, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || db("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= pa(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = gb(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        }, hb = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }, ib = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        lb = function (a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || db("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fb, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var mb = function (a, b, c) {
        for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
            var h = e[g].split("="), k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }, pb = function (a, b, c, d) {
        var e = nb(a, d);
        if (1 === e.length) return e[0].id;
        if (0 !== e.length) {
            e = ob(e, function (g) {
                return g.Hb
            }, b);
            if (1 === e.length) return e[0].id;
            e = ob(e, function (g) {
                return g.eb
            }, c);
            return e[0] ? e[0].id : void 0
        }
    };

    function qb(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= mb(b, e).indexOf(c)
    }

    var ub = function (a, b, c, d, e, g) {
        d = d || "auto";
        var h = {path: c || "/"};
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a:{
            var l = b, m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString(); else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0, t = void 0, q;
            for (q in h) if (h.hasOwnProperty(q)) {
                var r = h[q];
                if (null != r) switch (q) {
                    case "secure":
                        r && (m += "; secure");
                        break;
                    case "domain":
                        p = r;
                        break;
                    default:
                        "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                            r.toUTCString()), m += "; " + q + "=" + r
                }
            }
            if ("auto" === p) {
                for (var v = rb(), w = 0; w < v.length; ++w) {
                    var y = "none" != v[w] ? v[w] : void 0;
                    if (!tb(y, t) && qb(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p), k = !tb(p, t) && qb(m, a, l)
        }
        return k
    };

    function ob(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h], l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function nb(a, b) {
        for (var c = [], d = mb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."), h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({id: g.join("."), Hb: 1 * k[0] || 1, eb: 1 * k[1] || 1}))
            }
        }
        return c
    }

    var vb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, wb = /(^|\.)doubleclick\.net$/i, tb = function (a, b) {
        return wb.test(document.location.hostname) || "/" === b && vb.test(a)
    }, rb = function () {
        var a = [], b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        a.push("none");
        return a
    };
    var Sb = [], Tb = [], Ub = [], Vb = [], Wb = [], Yb = {}, Zb, $b, ac, bc = function (a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        }, cc = function (a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = !!Yb[c], e = {}, g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
            return d ? Yb[c](e) : (void 0)(c, e, b)
        }, ec = function (a, b, c) {
            c = c || [];
            var d = {}, e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = dc(a[e], b, c));
            return d
        },
        fc = function (a) {
            var b = a["function"];
            if (!b) throw"Error: No function name given for function call.";
            var c = Yb[b];
            return c ? c.priorityOverride || 0 : 0
        }, dc = function (a, b, c) {
            if (na(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(dc(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = Sb[g];
                        if (!h || b.Cc(h)) return;
                        c[g] = !0;
                        try {
                            var k = ec(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = cc(k, b);
                            ac && (d = ac.wf(d, k))
                        } catch (w) {
                            b.Ud && b.Ud(w, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[dc(a[l], b, c)] = dc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = dc(a[n], b, c);
                            $b && (m = m || p === $b.vb);
                            d.push(p)
                        }
                        return $b && m ? $b.zf(d) : d.join("");
                    case "escape":
                        d = dc(a[1], b, c);
                        if ($b && na(a[1]) && "macro" === a[1][0] && $b.ag(a)) return $b.lg(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!Vb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {Hd: a[2], index: q};
                    case "zb":
                        var r =
                            {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                        r["function"] = a[1];
                        var v = gc(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        }, gc = function (a, b, c) {
            try {
                return Zb(ec(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var hc = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            cd: a("convert_case_to"),
            dd: a("convert_false_to"),
            ed: a("convert_null_to"),
            fd: a("convert_true_to"),
            gd: a("convert_undefined_to"),
            ja: a("function"),
            Le: a("instance_name"),
            Me: a("live_only"),
            Ne: a("malware_disabled"),
            Oe: a("metadata"),
            Vg: a("original_vendor_template_id"),
            Pe: a("once_per_event"),
            wd: a("once_per_load"),
            xd: a("setup_tags"),
            yd: a("tag_id"),
            zd: a("teardown_tags")
        }
    }();
    var ic = null, lc = function (a) {
        function b(p) {
            for (var t = 0; t < p.length; t++) d[p[t]] = !0
        }

        var c = [], d = [];
        ic = jc(a);
        for (var e = 0; e < Tb.length; e++) {
            var g = Tb[e], h = kc(g);
            if (h) {
                for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(g.block || [])
            } else null === h && b(g.block || [])
        }
        for (var m = [], n = 0; n < Vb.length; n++) c[n] && !d[n] && (m[n] = !0);
        return m
    }, kc = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = ic(b[c]);
            if (!d) return null === d ? null : !1
        }
        for (var e = a.unless || [], g = 0; g < e.length; g++) {
            var h = ic(e[g]);
            if (null === h) return null;
            if (h) return !1
        }
        return !0
    }, jc = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = gc(Ub[c], a));
            return b[c]
        }
    };/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var oc, ca = "floor ceil round max min abs pow sqrt".split(" "),
        pc = "undefined" != typeof Symbol && Symbol.iterator && ca[Symbol.iterator];
    oc = pc ? pc.call(ca) : {next: da()};
    for (var qc = oc.next(); !qc.done; qc = oc.next()) Math.hasOwnProperty(qc.value);
    var Ec = {}, Fc = null, Gc = Math.random();
    Ec.i = "GTM-NRPFDC";
    Ec.zb = "7v2";
    var Hc = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0,
        __paused: !0
    }, Ic = "www.googletagmanager.com/gtm.js";
    var Jc = Ic, Kc = null, Lc = null, Mc = null, Nc = "//www.googletagmanager.com/a?id=" + Ec.i + "&cv=978", Oc = {},
        Pc = {}, Qc = function () {
            var a = Fc.sequence || 0;
            Fc.sequence = a + 1;
            return a
        };
    var F = function (a, b, c, d) {
        return (2 === Rc() || d || "http:" != u.location.protocol ? a : b) + c
    }, Rc = function () {
        var a = Pa(), b;
        if (1 === a) a:{
            var c = Jc;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, g = 1, h = C.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                var l = h[k].src;
                if (l) {
                    l = l.toLowerCase();
                    if (0 === l.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === g && 0 === l.indexOf(d) && (g = 2)
                }
            }
            b = g
        } else b = a;
        return b
    };
    var Yc = function () {
        return "&tc=" + Vb.filter(function (a) {
            return a
        }).length
    }, gd = function () {
        Zc && (u.clearTimeout(Zc), Zc = void 0);
        void 0 === $c || ad[$c] && !bd || (cd[$c] || dd.cg() || 0 >= ed-- ? (db("GTM", 1), cd[$c] = !0) : (dd.xg(), Ra(fd()), ad[$c] = !0, bd = ""))
    }, fd = function () {
        var a = $c;
        if (void 0 === a) return "";
        var b = eb("GTM"), c = eb("TAGGING");
        return [hd, ad[a] ? "" : "&es=1", id[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Yc(), bd, "&z=0"].join("")
    }, jd = function () {
        return [Nc, "&v=3&t=t", "&pid=" + ra(), "&rv=" + Ec.zb].join("")
    }, kd = "0.005000" >
        Math.random(), hd = jd(), ld = function () {
        hd = jd()
    }, ad = {}, bd = "", $c = void 0, id = {}, cd = {}, Zc = void 0, dd = function (a, b) {
        var c = 0, d = 0;
        return {
            cg: function () {
                if (c < a) return !1;
                za() - d >= b && (c = 0);
                return c >= a
            }, xg: function () {
                za() - d >= b && (c = 0);
                c++;
                d = za()
            }
        }
    }(2, 1E3), ed = 1E3, md = function (a, b) {
        if (kd && !cd[a] && $c !== a) {
            gd();
            $c = a;
            bd = "";
            var c;
            c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
            id[a] = "&e=" + c + "&eid=" + a;
            Zc || (Zc = u.setTimeout(gd, 500))
        }
    }, nd = function (a, b, c) {
        if (kd && !cd[a] && b) {
            a !== $c && (gd(), $c = a);
            var d = String(b[hc.ja] || "").replace(/_/g,
                "");
            0 === d.indexOf("cvt") && (d = "cvt");
            var e = c + d;
            bd = bd ? bd + "." + e : "&tr=" + e;
            Zc || (Zc = u.setTimeout(gd, 500));
            2022 <= fd().length && gd()
        }
    };
    var od = {}, pd = new sa, qd = {}, rd = {}, vd = {
        name: "dataLayer", set: function (a, b) {
            f(sd(a, b), qd);
            td()
        }, get: function (a) {
            return ud(a, 2)
        }, reset: function () {
            pd = new sa;
            qd = {};
            td()
        }
    }, ud = function (a, b) {
        if (2 != b) {
            var c = pd.get(a);
            if (kd) {
                var d = wd(a);
                c !== d && db("GTM", 5)
            }
            return c
        }
        return wd(a)
    }, wd = function (a, b, c) {
        var d = a.split("."), e = !1, g = void 0;
        return e ? g : yd(d)
    }, yd = function (a) {
        for (var b = qd, c = 0; c < a.length; c++) {
            if (null === b) return !1;
            if (void 0 === b) break;
            b = b[a[c]]
        }
        return b
    };
    var Bd = function (a, b) {
        rd.hasOwnProperty(a) || (pd.set(a, b), f(sd(a, b), qd), td())
    }, sd = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
        d[e[e.length - 1]] = b;
        return c
    }, td = function (a) {
        ua(rd, function (b, c) {
            pd.set(b, c);
            f(sd(b, void 0), qd);
            f(sd(b, c), qd);
            a && delete rd[b]
        })
    }, Cd = function (a, b, c) {
        od[a] = od[a] || {};
        var d = 1 !== c ? wd(b) : pd.get(b);
        "array" === Ha(d) || "object" === Ha(d) ? od[a][b] = f(d) : od[a][b] = d
    }, Dd = function (a, b) {
        if (od[a]) return od[a][b]
    };
    var Ed = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Fd = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Gd = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Hd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Jd = function (a) {
        var b = ud("gtm.whitelist");
        b && db("GTM", 9);
        var c = b && Fa(xa(b), Fd), d = ud("gtm.blacklist");
        d || (d = ud("tagTypeBlacklist")) && db("GTM", 3);
        d ? db("GTM", 8) : d = [];
        Id() && (d = xa(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        0 <= pa(xa(d), "google") && db("GTM", 2);
        var e = d && Fa(xa(d), Gd), g = {};
        return function (h) {
            var k = h && h[hc.ja];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== g[k]) return g[k];
            var l = Pc[k] || [], m = a(k);
            if (b) {
                var n;
                if (n = m) a:{
                    if (0 > pa(c, k)) if (l && 0 < l.length) for (var p = 0; p < l.length; p++) {
                        if (0 >
                            pa(c, l[p])) {
                            db("GTM", 11);
                            n = !1;
                            break a
                        }
                    } else {
                        n = !1;
                        break a
                    }
                    n = !0
                }
                m = n
            }
            var t = !1;
            if (d) {
                var q = 0 <= pa(e, k);
                if (q) t = q; else {
                    var r = ta(e, l || []);
                    r && db("GTM", 10);
                    t = r
                }
            }
            var v = !m || t;
            v || !(0 <= pa(l, "sandboxedScripts")) || c && -1 !== pa(c, "sandboxedScripts") || (v = ta(e, Hd));
            return g[k] = v
        }
    }, Id = function () {
        return Ed.test(u.location && u.location.hostname)
    };
    var Kd = {
        wf: function (a, b) {
            b[hc.cd] && "string" === typeof a && (a = 1 == b[hc.cd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(hc.ed) && null === a && (a = b[hc.ed]);
            b.hasOwnProperty(hc.gd) && void 0 === a && (a = b[hc.gd]);
            b.hasOwnProperty(hc.fd) && !0 === a && (a = b[hc.fd]);
            b.hasOwnProperty(hc.dd) && !1 === a && (a = b[hc.dd]);
            return a
        }
    };
    var Ld = {
        active: !0, isWhitelisted: function () {
            return !0
        }
    }, Md = function (a) {
        var b = Fc.zones;
        !b && a && (b = Fc.zones = a());
        return b
    };
    var Nd = !1, Od = 0, Pd = [];

    function Qd(a) {
        if (!Nd) {
            var b = C.createEventObject, c = "complete" == C.readyState, d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Nd = !0;
                for (var e = 0; e < Pd.length; e++) D(Pd[e])
            }
            Pd.push = function () {
                for (var g = 0; g < arguments.length; g++) D(arguments[g]);
                return 0
            }
        }
    }

    function Rd() {
        if (!Nd && 140 > Od) {
            Od++;
            try {
                C.documentElement.doScroll("left"), Qd()
            } catch (a) {
                u.setTimeout(Rd, 50)
            }
        }
    }

    var Sd = function (a) {
        Nd ? a() : Pd.push(a)
    };
    var Td = {}, Ud = {}, Vd = function (a, b, c, d) {
        if (!Ud[a] || Hc[b] || "__zone" === b) return -1;
        var e = {};
        Ja(d) && (e = f(d, e));
        e.id = c;
        e.status = "timeout";
        return Ud[a].tags.push(e) - 1
    }, Wd = function (a, b, c, d) {
        if (Ud[a]) {
            var e = Ud[a].tags[b];
            e && (e.status = c, e.executionTime = d)
        }
    };

    function Xd(a) {
        for (var b = Td[a] || [], c = 0; c < b.length; c++) b[c]();
        Td[a] = {
            push: function (d) {
                d(Ec.i, Ud[a])
            }
        }
    }

    var $d = function (a, b, c) {
        Ud[a] = {tags: []};
        ka(b) && Yd(a, b);
        c && u.setTimeout(function () {
            return Xd(a)
        }, Number(c));
        return Zd(a)
    }, Yd = function (a, b) {
        Td[a] = Td[a] || [];
        Td[a].push(Ba(function () {
            return D(function () {
                b(Ec.i, Ud[a])
            })
        }))
    };

    function Zd(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return Ba(function () {
                    b++;
                    d && b >= c && Xd(a)
                })
            }, cf: function () {
                d = !0;
                b >= c && Xd(a)
            }
        }
    };var ae = function () {
        function a(d) {
            return !ma(d) || 0 > d ? 0 : d
        }

        if (!Fc._li && u.performance && u.performance.timing) {
            var b = u.performance.timing.navigationStart, c = ma(vd.get("gtm.start")) ? vd.get("gtm.start") : 0;
            Fc._li = {cst: a(c - b), cbt: a(Lc - b)}
        }
    };
    var ee = !1, fe = function () {
        return u.GoogleAnalyticsObject && u[u.GoogleAnalyticsObject]
    }, ge = !1;
    var he = function (a) {
        u.GoogleAnalyticsObject || (u.GoogleAnalyticsObject = a || "ga");
        var b = u.GoogleAnalyticsObject;
        if (u[b]) u.hasOwnProperty(b) || db("GTM", 12); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            u[b] = c
        }
        ae();
        return u[b]
    }, ie = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = fe();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var ke = function () {
    }, je = function () {
        return u.GoogleAnalyticsObject || "ga"
    };
    var re = function (a) {
    };

    function qe(a, b) {
        a.containerId = Ec.i;
        var c = {type: "GENERIC", value: a};
        b.length && (c.trace = b);
        return c
    };

    function se(a, b, c, d) {
        var e = Vb[a], g = te(a, b, c, d);
        if (!g) return null;
        var h = dc(e[hc.xd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = se(k.index, {I: g, R: 1 === k.Hd ? b.terminate : g, terminate: b.terminate}, c, d)
        }
        return g
    }

    function te(a, b, c, d) {
        function e() {
            if (g[hc.Ne]) k(); else {
                var w = ec(g, c, []), y = Vd(c.id, String(g[hc.ja]), Number(g[hc.yd]), w[hc.Oe]), x = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!x) {
                        x = !0;
                        var A = za() - B;
                        nd(c.id, Vb[a], "5");
                        Wd(c.id, y, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!x) {
                        x = !0;
                        var A = za() - B;
                        nd(c.id, Vb[a], "6");
                        Wd(c.id, y, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                nd(c.id, g, "1");
                var z = function (A) {
                    var E = za() - B;
                    re(A);
                    nd(c.id, g, "7");
                    Wd(c.id, y, "exception", E);
                    x || (x = !0, k())
                };
                var B = za();
                try {
                    cc(w, c)
                } catch (A) {
                    z(A)
                }
            }
        }

        var g = Vb[a], h = b.I, k = b.R, l = b.terminate;
        if (c.Cc(g)) return null;
        var m = dc(g[hc.zd], c, []);
        if (m && m.length) {
            var n = m[0], p = se(n.index, {I: h, R: k, terminate: l}, c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Hd ? l : p
        }
        if (g[hc.wd] || g[hc.Pe]) {
            var t = g[hc.wd] ? Wb : c.Hg, q = h, r = k;
            if (!t[a]) {
                e = Ba(e);
                var v = ue(a, t, e);
                h = v.I;
                k = v.R
            }
            return function () {
                t[a](q, r)
            }
        }
        return e
    }

    function ue(a, b, c) {
        var d = [], e = [];
        b[a] = ve(d, e, c);
        return {
            I: function () {
                b[a] = we;
                for (var g = 0; g < d.length; g++) d[g]()
            }, R: function () {
                b[a] = xe;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function ve(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function we(a) {
        a()
    }

    function xe(a, b) {
        b()
    };var Ae = function (a, b) {
        for (var c = [], d = 0; d < Vb.length; d++) if (a.ab[d]) {
            var e = Vb[d];
            var g = b.add();
            try {
                var h = se(d, {I: g, R: g, terminate: g}, a, d);
                h ? c.push({me: d, ae: fc(e), Hf: h}) : (ye(d, a), g())
            } catch (l) {
                g()
            }
        }
        b.cf();
        c.sort(ze);
        for (var k = 0; k < c.length; k++) c[k].Hf();
        return 0 < c.length
    };

    function ze(a, b) {
        var c, d = b.ae, e = a.ae;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c; else {
            var h = a.me, k = b.me;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function ye(a, b) {
        if (!kd) return;
        var c = function (d) {
            var e = b.Cc(Vb[d]) ? "3" : "4", g = dc(Vb[d][hc.xd], b, []);
            g && g.length && c(g[0].index);
            nd(b.id, Vb[d], e);
            var h = dc(Vb[d][hc.zd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var Be = !1, Ce = function (a, b, c, d, e) {
        if ("gtm.js" == b) {
            if (Be) return !1;
            Be = !0
        }
        md(a, b);
        var g = $d(a, d, e);
        Cd(a, "event", 1);
        Cd(a, "ecommerce", 1);
        Cd(a, "gtm");
        var h = {
            id: a, name: b, Cc: Jd(c), ab: [], Hg: [], Ud: function (n) {
                db("GTM", 6);
                re(n)
            }
        };
        h.ab = lc(h);
        var k = Ae(h, g);
        "gtm.js" !== b && "gtm.sync" !== b || ke();
        if (!k) return k;
        for (var l = 0; l < h.ab.length; l++) if (h.ab[l]) {
            var m =
                Vb[l];
            if (m && !Hc[String(m[hc.ja])]) return !0
        }
        return !1
    };
    var Ee = function (a, b, c) {
        var d = this;
        this.eventModel = a;
        this.targetConfig = b || {};
        this.globalConfig = c || {};
        this.getWithConfig = function (e) {
            if (d.eventModel.hasOwnProperty(e)) return d.eventModel[e];
            if (d.targetConfig.hasOwnProperty(e)) return d.targetConfig[e];
            if (d.globalConfig.hasOwnProperty(e)) return d.globalConfig[e]
        }
    };
    var G = {
        Yb: "event_callback",
        Ma: "event_timeout",
        T: "gtag.config",
        M: "allow_ad_personalization_signals",
        O: "cookie_expires",
        La: "cookie_update",
        wa: "session_duration"
    };
    var Fe = function () {
        var a = !1;
        return a
    };

    function Ge() {
        var a = Fc;
        return a.gcq = a.gcq || new He
    }

    var Ie = function (a, b) {
        Ge().register(a, b)
    }, Je = function () {
        this.status = 1;
        this.uc = {};
        this.be = null
    }, Ke = function (a, b, c, d, e) {
        this.type = a;
        this.Mg = b;
        this.ca = c || "";
        this.Bb = d;
        this.defer = e
    }, He = function () {
        this.ne = {};
        this.Md = {};
        this.Wa = []
    }, Le = function (a, b) {
        return a.ne[b] = a.ne[b] || new Je
    }, Me = function (a, b, c, d) {
        var e = Le(a, d.ca).be;
        if (e) {
            var g = f(c), h = f(Le(a, d.ca).uc), k = f(a.Md), l = new Ee(g, h, k);
            try {
                e(b, d.Mg, l)
            } catch (m) {
            }
        }
    };
    He.prototype.register = function (a, b) {
        3 !== Le(this, a).status && (Le(this, a).be = b, Le(this, a).status = 3, this.flush())
    };
    He.prototype.push = function (a, b, c, d) {
        var e = Math.floor(za() / 1E3);
        if (c && 1 === Le(this, c).status && (Le(this, c).status = 2, this.push("require", [], c), !Fe())) {
            var g = encodeURIComponent(c);
            Oa(("http:" != u.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + g + "&l=dataLayer&cx=c"))
        }
        this.Wa.push(new Ke(a, e, c, b, d));
        d || this.flush()
    };
    He.prototype.flush = function (a) {
        for (var b = this; this.Wa.length;) {
            var c = this.Wa[0];
            if (c.defer) c.defer = !1, this.Wa.push(c); else switch (c.type) {
                case "require":
                    if (3 !== Le(this, c.ca).status && !a) return;
                    break;
                case "set":
                    ua(c.Bb[0], function (e, g) {
                        b.Md[e] = g
                    });
                    break;
                case "config":
                    var d = c.Bb[0];
                    Le(this, c.ca).uc = {};
                    Me(this, G.T, d, c);
                    Le(this, c.ca).uc = d;
                    break;
                case "event":
                    Me(this, c.Bb[1], c.Bb[0], c)
            }
            this.Wa.shift()
        }
    };
    var Ne = /[A-Z]+/, Oe = /\s/, Pe = function (a) {
        if (la(a) && (a = ya(a), !Oe.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Ne.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], ka: d}
                }
            }
        }
    }, Re = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Pe(a[c]);
            d && (b[d.id] = d)
        }
        Qe(b);
        var e = [];
        ua(b, function (g, h) {
            e.push(h)
        });
        return e
    };

    function Qe(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.ka[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var Se = {};
    var Te = null, Ue = {}, We = {}, Xe, Ye = function (a, b) {
        var c = {event: a};
        b && (c.eventModel = f(b), b[G.Yb] && (c.eventCallback = b[G.Yb]), b[G.Ma] && (c.eventTimeout = b[G.Ma]));
        return c
    };
    var df = {
        config: function (a) {
        }, event: function (a) {
            var b = a[1];
            if (la(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Ja(a[2])) return;
                    c = a[2]
                }
                var d = Ye(b, c);
                return d
            }
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) return {event: "gtm.js", "gtm.start": a[1].getTime()}
        }, policy: function (a) {
            if (3 === a.length) {
                var b = a[1], c = a[2];
                Se[b] || (Se[b] = []);
                Se[b].push(c)
            }
        }, set: function (a) {
            var b;
            2 == a.length && Ja(a[1]) ? b = f(a[1]) : 3 == a.length && la(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) {
                b._clear = !0;
                return b
            }
        }
    }, ef = {policy: !0};
    var gf = function (a) {
        return ff ? C.querySelectorAll(a) : null
    }, hf = function (a, b) {
        if (!ff) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!C.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, jf = !1;
    if (C.querySelectorAll) try {
        var kf = C.querySelectorAll(":root");
        kf && 1 == kf.length && kf[0] == C.documentElement && (jf = !0)
    } catch (a) {
    }
    var ff = jf;
    var rf = function (a) {
        if (qf(a)) return a;
        this.Pg = a
    };
    rf.prototype.Of = function () {
        return this.Pg
    };
    var qf = function (a) {
        return !a || "object" !== Ha(a) || Ja(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    rf.prototype.getUntrustedUpdateValue = rf.prototype.Of;
    var sf = !1, tf = [];

    function uf() {
        if (!sf) {
            sf = !0;
            for (var a = 0; a < tf.length; a++) D(tf[a])
        }
    }

    var vf = function (a) {
        sf ? D(a) : tf.push(a)
    };
    var wf = [], xf = !1, yf = function (a) {
        return u["dataLayer"].push(a)
    }, zf = function (a) {
        var b = Fc["dataLayer"], c = b ? b.subscribers : 1, d = 0;
        return function () {
            ++d === c && a()
        }
    }, Bf = function (a) {
        var b = a._clear;
        ua(a, function (g, h) {
            "_clear" !== g && (b && Bd(g, void 0), Bd(g, h))
        });
        Kc || (Kc = a["gtm.start"]);
        var c = a.event;
        if (!c) return !1;
        var d = a["gtm.uniqueEventId"];
        d || (d = Qc(), a["gtm.uniqueEventId"] = d, Bd("gtm.uniqueEventId", d));
        Mc = c;
        var e = Af(a);
        Mc = null;
        switch (c) {
            case "gtm.init":
                db("GTM", 19), e && db("GTM", 20)
        }
        return e
    };

    function Af(a) {
        var b = a.event, c = a["gtm.uniqueEventId"], d, e = Fc.zones;
        d = e ? e.checkState(Ec.i, c) : Ld;
        return d.active ? Ce(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }

    var Cf = function () {
        for (var a = !1; !xf && 0 < wf.length;) {
            xf = !0;
            delete qd.eventModel;
            td();
            var b = wf.shift();
            if (null != b) {
                var c = qf(b);
                if (c) {
                    var d = b;
                    b = qf(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                        var h = e[g], k = ud(h, 1);
                        if (na(k) || Ja(k)) k = f(k);
                        rd[h] = k
                    }
                }
                try {
                    if (ka(b)) try {
                        b.call(vd)
                    } catch (v) {
                    } else if (na(b)) {
                        var l = b;
                        if (la(l[0])) {
                            var m =
                                l[0].split("."), n = m.pop(), p = l.slice(1), t = ud(m.join("."), 2);
                            if (void 0 !== t && null !== t) try {
                                t[n].apply(t, p)
                            } catch (v) {
                            }
                        }
                    } else {
                        var q = b;
                        if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                            a:{
                                if (b.length && la(b[0])) {
                                    var r = df[b[0]];
                                    if (r && (!c || !ef[b[0]])) {
                                        b = r(b);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                xf = !1;
                                continue
                            }
                        }
                        a = Bf(b) || a
                    }
                } finally {
                    c && td(!0)
                }
            }
            xf = !1
        }
        return !a
    }, Df = function () {
        var a = Cf();
        try {
            var b = Ec.i, c = u["dataLayer"].hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0, e;
                for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break
                }
                d && (c.end(), c.end = null)
            }
        } catch (g) {
        }
        return a
    }, Ef = function () {
        var a = Ma("dataLayer", []), b = Ma("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Sd(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        vf(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        b.subscribers = (b.subscribers ||
            0) + 1;
        var c = a.push;
        a.push = function () {
            var d;
            if (0 < Fc.SANDBOXED_JS_SEMAPHORE) {
                d = [];
                for (var e = 0; e < arguments.length; e++) d[e] = new rf(arguments[e])
            } else d = [].slice.call(arguments, 0);
            var g = c.apply(a, d);
            wf.push.apply(wf, d);
            if (300 < this.length) for (db("GTM", 4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return Cf() && h
        };
        wf.push.apply(wf, a.slice(0));
        D(Df)
    };
    var Ff;
    var ag = {};
    ag.vb = new String("undefined");
    var bg = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ag.vb ? b : a[d]);
            return c.join("")
        }
    };
    bg.prototype.toString = function () {
        return this.resolve("undefined")
    };
    bg.prototype.valueOf = bg.prototype.toString;
    ag.Qe = bg;
    ag.kc = {};
    ag.zf = function (a) {
        return new bg(a)
    };
    var cg = {};
    ag.yg = function (a, b) {
        var c = Qc();
        cg[c] = [a, b];
        return c
    };
    ag.Ed = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = cg[c];
            if (d && "function" === typeof d[b]) d[b]();
            cg[c] = void 0
        }
    };
    ag.ag = function (a) {
        for (var b = !1, c = !1,
                 d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    ag.lg = function (a) {
        if (a === ag.vb) return a;
        var b = Qc();
        ag.kc[b] = a;
        return 'google_tag_manager["' + Ec.i + '"].macro(' + b + ")"
    };
    ag.eg = function (a, b, c) {
        a instanceof ag.Qe && (a = a.resolve(ag.yg(b, c)), b = ja);
        return {zc: a, I: b}
    };
    var dg = function (a, b, c) {
        function d(g, h) {
            var k = g[h];
            return k
        }

        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || Ua(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
            "";
        return e
    }, eg = function (a) {
        Fc.hasOwnProperty("autoEventsSettings") || (Fc.autoEventsSettings = {});
        var b = Fc.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, fg = function (a, b, c) {
        eg(a)[b] = c
    }, gg = function (a, b, c, d) {
        var e = eg(a), g = Aa(e, b, d);
        e[b] = c(g)
    }, hg = function (a, b, c) {
        var d = eg(a);
        return Aa(d, b, c)
    };
    var ig = function () {
        for (var a = Ka.userAgent + (C.cookie || "") + (C.referrer || ""), b = a.length, c = u.history.length; 0 < c;) a += c-- ^ b++;
        var d = 1, e, g, h;
        if (a) for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(za() / 1E3)].join(".")
    }, lg = function (a, b, c, d) {
        var e = jg(b);
        return pb(a, e, kg(c), d)
    }, mg = function (a, b, c, d) {
        var e = "" + jg(c), g = kg(d);
        1 < g && (e += "-" + g);
        return [b, e, a].join(".")
    }, jg = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, kg = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var ng = ["1"], og = {}, sg = function (a, b, c, d) {
        var e = pg(a);
        og[e] || qg(e, b, c) || (rg(e, ig(), b, c, d), qg(e, b, c))
    };

    function rg(a, b, c, d, e) {
        var g = mg(b, "1", d, c);
        ub(a, g, c, d, 0 == e ? void 0 : new Date(za() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function qg(a, b, c) {
        var d = lg(a, b, c, ng);
        d && (og[a] = d);
        return d
    }

    function pg(a) {
        return (a || "_gcl") + "_au"
    };var tg = function () {
        for (var a = [], b = C.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({Wc: e[1], value: e[2]})
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Wc] || (g[a[h].Wc] = []), g[a[h].Wc].push({
                timestamp: k[1],
                Lf: k[2]
            }))
        }
        return g
    };

    function ug() {
        for (var a = vg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function wg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var vg, xg, yg = function (a) {
        vg = vg || wg();
        xg = xg || ug();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, g = a.charCodeAt(c), h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0, l = g >> 2, m = (g & 3) << 4 | h >> 4, n = (h & 15) << 2 | k >> 6,
                p = k & 63;
            e || (p = 64, d || (n = 64));
            b.push(vg[l], vg[m], vg[n], vg[p])
        }
        return b.join("")
    }, zg = function (a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++), n = xg[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }

        vg = vg || wg();
        xg = xg ||
            ug();
        for (var c = "", d = 0; ;) {
            var e = b(-1), g = b(0), h = b(64), k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | g >> 4);
            64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var Ag;

    function Bg(a, b) {
        if (!a || b === C.location.hostname) return !1;
        for (var c = 0; c < a.length; c++) if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return !0
        } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }

    var Fg = function () {
        var a = Cg, b = Dg, c = Eg(), d = function (h) {
            a(h.target || h.srcElement || {})
        }, e = function (h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            Sa(C, "mousedown", d);
            Sa(C, "keyup", d);
            Sa(C, "submit", e);
            var g = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                g.call(this)
            };
            c.init = !0
        }
    }, Eg = function () {
        var a = Ma("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };
    var Gg = /(.*?)\*(.*?)\*(.*)/, Hg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ig = /^(?:www\.|m\.|amp\.)+/, Jg = /([^?#]+)(\?[^#]*)?(#.*)?/, Kg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        Mg = function (a) {
            var b = [], c;
            for (c in a) if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(yg(String(d))))
            }
            var e = b.join("*");
            return ["1", Lg(e), e].join("*")
        }, Lg = function (a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = Ag)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Ag = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Ag[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        }, Og = function () {
            return function (a) {
                var b = lb(u.location.href), c = b.search.replace("?", ""), d = gb(c, "_gl", !0) || "";
                a.query = Ng(d) || {};
                var e = kb(b, "fragment").match(Kg);
                a.fragment = Ng(e && e[3] ||
                    "") || {}
            }
        }, Pg = function () {
            var a = Og(), b = Eg();
            b.data || (b.data = {query: {}, fragment: {}}, a(b.data));
            var c = {}, d = b.data;
            d && (Ca(c, d.query), Ca(c, d.fragment));
            return c
        }, Ng = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a:{
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Gg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3], l;
                        a:{
                            for (var m = h[2], n = 0; n < b; ++n) if (m === Lg(k, n)) {
                                l = !0;
                                break a
                            }
                            l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = zg(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {
            }
        };

    function Qg(a, b, c) {
        function d(m) {
            var n = m, p = Kg.exec(n), t = n;
            if (p) {
                var q = p[2], r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }

        c = void 0 === c ? !1 : c;
        var e = Jg.exec(b);
        if (!e) return "";
        var g = e[1], h = e[2] || "", k = e[3] || "", l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function Rg(a, b, c) {
        for (var d = {}, e = {}, g = Eg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Bg(k.domains, b) && (k.fragment ? Ca(e, k.callback()) : Ca(d, k.callback()))
        }
        if (Ea(d)) {
            var l = Mg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = C.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = Qg(l, a.action);
                        bb.test(v) && (a.action = v)
                    }
                }
            } else Sg(l, a, !1)
        }
        if (!c && Ea(e)) {
            var w = Mg(e);
            Sg(w, a, !0)
        }
    }

    function Sg(a, b, c) {
        if (b.href) {
            var d = Qg(a, b.href, void 0 === c ? !1 : c);
            bb.test(d) && (b.href = d)
        }
    }

    var Cg = function (a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var g = e.protocol;
                "http:" !== g && "https:" !== g || Rg(e, e.hostname, !1)
            }
        } catch (h) {
        }
    }, Dg = function (a) {
        try {
            if (a.action) {
                var b = kb(lb(a.action), "host");
                Rg(a, b, !0)
            }
        } catch (c) {
        }
    }, Tg = function (a, b, c, d) {
        Fg();
        var e = {callback: a, domains: b, fragment: "fragment" === c, forms: !!d};
        Eg().decorators.push(e)
    }, Ug = function () {
        var a = C.location.hostname, b = Hg.exec(C.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var g = c.split("/"), h = g[1];
            e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        return a.replace(Ig, "") === e.replace(Ig, "")
    }, Vg = function (a, b) {
        return !1 === a ? !1 : a || b || Ug()
    };
    var Wg = {};
    var Xg = /^\w+$/, Yg = /^[\w-]+$/, Zg = /^~?[\w-]+$/, $g = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha"};

    function ah(a) {
        return a && "string" == typeof a && a.match(Xg) ? a : "_gcl"
    }

    var ch = function () {
        var a = lb(u.location.href), b = kb(a, "query", !1, void 0, "gclid"), c = kb(a, "query", !1, void 0, "gclsrc"),
            d = kb(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || gb(e, "gclid", void 0);
            c = c || gb(e, "gclsrc", void 0)
        }
        return bh(b, c, d)
    };

    function bh(a, b, c) {
        var d = {}, e = function (g, h) {
            d[h] || (d[h] = []);
            d[h].push(g)
        };
        if (void 0 !== a && a.match(Yg)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == Wg.gtm_3pds ? 0 : Wg.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function dh(a, b, c) {
        function d(p, t) {
            var q = eh(p, e);
            q && ub(q, t, h, g, l, !0)
        }

        b = b || {};
        var e = ah(b.prefix), g = b.domain || "auto", h = b.path || "/", k = void 0 == b.Vd ? 7776E3 : b.Vd;
        c = c || za();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k), m = Math.round(c / 1E3), n = function (p) {
            return ["GCL", m, p].join(".")
        };
        a.aw && (!0 === b.vh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }

    var eh = function (a, b) {
        var c = $g[a];
        if (void 0 !== c) return b + c
    }, fh = function (a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    };

    function gh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }

    var hh = function (a, b, c, d, e) {
        if (na(b)) {
            var g = ah(e);
            Tg(function () {
                for (var h = {}, k = 0; k < a.length; ++k) {
                    var l = eh(a[k], g);
                    if (l) {
                        var m = mb(l, C.cookie);
                        m.length && (h[l] = m.sort()[m.length - 1])
                    }
                }
                return h
            }, b, c, d)
        }
    }, ih = function (a) {
        return a.filter(function (b) {
            return Zg.test(b)
        })
    }, jh = function (a) {
        for (var b = ["aw", "dc"], c = ah(a && a.prefix), d = {}, e = 0; e < b.length; e++) $g[b[e]] && (d[b[e]] = $g[b[e]]);
        ua(d, function (g, h) {
            var k = mb(c + h, C.cookie);
            if (k.length) {
                var l = k[0], m = fh(l), n = {};
                n[g] = [gh(l)];
                dh(n, a, m)
            }
        })
    };
    var kh = /^\d+\.fls\.doubleclick\.net$/;

    function lh(a) {
        var b = lb(u.location.href), c = kb(b, "host", !1);
        if (c && c.match(kh)) {
            var d = kb(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function mh(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = lh("gcl" + a);
            if (c) return c.split(".")
        }
        var d = ah(b);
        if ("_gcl" == d) {
            var e;
            e = ch()[a] || [];
            if (0 < e.length) return e
        }
        var g = eh(a, d), h;
        if (g) {
            var k = [];
            if (C.cookie) {
                var l = mb(g, C.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = gh(l[m]);
                        n && -1 === pa(k, n) && k.push(n)
                    }
                    h = ih(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }

    var nh = function () {
        var a = lh("gac");
        if (a) return decodeURIComponent(a);
        var b = tg(), c = [];
        ua(b, function (d, e) {
            for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Lf);
            g = ih(g);
            g.length && c.push(d + ":" + g.join(","))
        });
        return c.join(";")
    }, oh = function (a, b, c, d, e) {
        sg(b, c, d, e);
        var g = og[pg(b)], h = ch().dc || [], k = !1;
        if (g && 0 < h.length) {
            var l = Fc.joined_au = Fc.joined_au || {}, m = b || "_gcl";
            if (!l[m]) for (var n = 0; n < h.length; n++) {
                var p = "http://ad.doubleclick.net/ddm/regclk", t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                Ka.sendBeacon && Ka.sendBeacon(t) || Ra(t);
                k = l[m] =
                    !0
            }
        }
        null == a && (a = k);
        if (a && g) {
            var q = pg(b), r = og[q];
            r && rg(q, r, c, d, e)
        }
    };
    var ph;
    if (3 === Ec.zb.length) ph = "g"; else {
        var rh = "G";
        ph = rh
    }
    var sh = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: ph, OPT: "o"}, th = function (a) {
        var b = Ec.i.split("-"), c = b[0].toUpperCase(), d = sh[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", g;
        if (3 === Ec.zb.length) {
            var h = void 0;
            g = "2" + (h || "w")
        } else g =
            "";
        return g + d + Ec.zb + e
    };
    var yh = ["input", "select", "textarea"], zh = ["button", "hidden", "image", "reset", "submit"], Ah = function (a) {
        var b = a.tagName.toLowerCase();
        return !qa(yh, function (c) {
            return c === b
        }) || "input" === b && qa(zh, function (c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }, Bh = function (a) {
        return a.form ? a.form.tagName ? a.form : C.getElementById(a.form) : $a(a, ["form"], 100)
    }, Ch = function (a, b, c) {
        if (!a.elements) return 0;
        for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (Ah(h)) {
                if (h.getAttribute(c) === d) return g;
                g++
            }
        }
        return 0
    };
    var Fh = !!u.MutationObserver, Gh = void 0, Hh = function (a) {
        if (!Gh) {
            var b = function () {
                var c = C.body;
                if (c) if (Fh) (new MutationObserver(function () {
                    for (var e = 0; e < Gh.length; e++) D(Gh[e])
                })).observe(c, {childList: !0, subtree: !0}); else {
                    var d = !1;
                    Sa(c, "DOMNodeInserted", function () {
                        d || (d = !0, D(function () {
                            d = !1;
                            for (var e = 0; e < Gh.length; e++) D(Gh[e])
                        }))
                    })
                }
            };
            Gh = [];
            C.body ? b() : D(b)
        }
        Gh.push(a)
    };
    var ii = u.clearTimeout, ji = u.setTimeout, M = function (a, b, c) {
        if (Fe()) {
            b && D(b)
        } else return Oa(a, b, c)
    }, ki = function () {
        return new Date
    }, li = function () {
        return u.location.href
    }, mi = function (a) {
        return kb(lb(a), "fragment")
    }, ni = function (a) {
        return ib(lb(a))
    }, oi = null;
    var pi = function (a, b) {
        return ud(a, b || 2)
    }, qi = function (a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return yf(a)
    }, ri = function (a, b) {
        u[a] = b
    }, N = function (a, b, c) {
        b && (void 0 === u[a] || c && !u[a]) && (u[a] = b);
        return u[a]
    }, si = function (a, b, c) {
        return mb(a, b, void 0 === c ? !0 : !!c)
    }, ti = function (a, b, c, d) {
        var e = {prefix: a, path: b, domain: c, Vd: d}, g = ch();
        dh(g, e);
        jh(e)
    }, ui = function (a, b, c, d, e) {
        for (var g = Pg(), h = ah(b), k = 0; k < a.length; ++k) {
            var l = a[k];
            if (void 0 !== $g[l]) {
                var m = eh(l, h),
                    n = g[m];
                if (n) {
                    var p = Math.min(fh(n), za()), t;
                    b:{
                        for (var q = p, r = mb(m, C.cookie), v = 0; v < r.length; ++v) if (fh(r[v]) > q) {
                            t = !0;
                            break b
                        }
                        t = !1
                    }
                    t || ub(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3 : e)), !0)
                }
            }
        }
        var w = {prefix: b, path: c, domain: d};
        dh(bh(g.gclid, g.gclsrc), w);
    }, vi = function (a, b, c, d, e) {
        hh(a, b, c, d, e);
    }, wi = function (a, b) {
        if (Fe()) {
            b && D(b)
        } else Qa(a, b)
    }, xi = function (a) {
        return !!hg(a, "init", !1)
    }, yi = function (a) {
        fg(a, "init", !0)
    }, zi = function (a, b, c) {
        var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Jc;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        b && ua(b, function (e, g) {
            g && (d += "&" + e + "=" + encodeURIComponent(g))
        });
        M(F("https://", "http://", d))
    }, Ai = function (a, b) {
        var c = a[b];
        return c
    };
    var Ci = ag.eg;
    var Di = new sa, Ei = function (a, b) {
        function c(h) {
            var k = lb(h), l = kb(k, "protocol"), m = kb(k, "host", !0), n = kb(k, "port"),
                p = kb(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
            return [l, m, n, p]
        }

        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++) if (d[g] !== e[g]) return !1;
        return !0
    }, Fi = function (a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && na(c)) {
            for (var d = 0; d < c.length; d++) if (Fi({"function": a["function"], arg0: b, arg1: c[d]})) return !0;
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <=
                    String(b).indexOf(String(c));
            case "_css":
                var e;
                a:{
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++) if (b[g[h]]) {
                                e = b[g[h]](c);
                                break a
                            }
                        } catch (v) {
                        }
                    }
                    e = !1
                }
                return e;
            case "_ew":
                var k, l;
                k = String(b);
                l = String(c);
                var m = k.length - l.length;
                return 0 <= m && k.indexOf(l, m) == m;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var n;
                n = String(b).split(",");
                return 0 <= pa(n, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var p;
                var t = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + t, r = Di.get(q);
                    r || (r = new RegExp(c, t), Di.set(q, r));
                    p = r.test(b)
                } catch (v) {
                    p = !1
                }
                return p;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Ei(b, c)
        }
        return !1
    };
    var Hi = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Ii = {}, Ji = encodeURI, Y = encodeURIComponent, Ki = Ra;
    var Li = function (a, b) {
        if (!a) return !1;
        var c = kb(lb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Mi = function (a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Ii.bg = function () {
        var a = !1;
        return a
    };
    var lj = function () {
        var a = u.gaGlobal = u.gaGlobal || {};
        a.hid = a.hid || ra();
        return a.hid
    };
    var Cj = function (a, b, c, d) {
        this.n = a;
        this.t = b;
        this.p = c;
        this.d = d
    }, Dj = function () {
        this.c = 1;
        this.e = [];
        this.p2 = this.p = null
    };

    function Ej(a) {
        var b = Fc, c = b.gss = b.gss || {};
        return c[a] = c[a] || new Dj
    }

    var Fj = function (a) {
        if (Ej(a).p && !Ej(a).p2) {
            var b = Ej(a).p;
            Ej(a).p2 = function (c, d, e) {
                b(c, d, e.eventModel)
            }
        }
        return Ej(a).p2
    }, Gj = function (a, b) {
        Ej(a).p2 = b;
        Ej(a).p = function (c, d, e) {
            return b(c, d, new Ee(e))
        }
    }, Hj = function (a) {
        var b = Ej(a), c = Fj(a);
        if (c) {
            var d = b.e, e = [];
            b.e = [];
            var g = function (h) {
                for (var k = 0; k < h.length; k++) try {
                    var l = h[k];
                    l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, new Ee(l.p))
                } catch (m) {
                }
            };
            g(d);
            g(e)
        }
    };
    var ak = window, bk = document, ck = function (a) {
        var b = ak._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === ak["ga-disable-" + a]) return !0;
        try {
            var c = ak.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (g) {
        }
        for (var d = mb("AMP_TOKEN", bk.cookie, !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return bk.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var hk = !1;
    hk = !0;
    var jk = function (a, b, c) {
        if (hk) Ge().push("event", [c, b], a, void 0); else {
            ik(a);
            var d = Math.floor(za() / 1E3);
            Ej(a).e.push(new Cj(b, d, c, void 0));
            Hj(a)
        }
    }, kk = function (a, b, c) {
        if (hk) Ge().push("event", [c, b], a, !0); else {
            ik(a);
            var d = Math.floor(za() / 1E3);
            Ej(a).e.push(new Cj(b, d, c, !0))
        }
    }, ik = function (a) {
        if (1 === Ej(a).c && (Ej(a).c = 2, !Fe())) {
            var b = encodeURIComponent(a);
            Oa(("http:" != u.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
        }
    }, mk = function (a, b) {
    }, lk = function (a, b) {
    }, nk = function (a) {
        return "_" === a.charAt(0)
    }, ok = function (a) {
        ua(a, function (c) {
            nk(c) &&
            delete a[c]
        });
        var b = a[G.ub] || {};
        ua(b, function (c) {
            nk(c) && delete b[c]
        })
    };
    var Z = {a: {}};

    Z.a.jsm = ["customScripts"], function () {
        (function (a) {
            Z.__jsm = a;
            Z.__jsm.b = "jsm";
            Z.__jsm.g = !0;
            Z.__jsm.priorityOverride = 0
        })(function (a) {
            if (void 0 !== a.vtp_javascript) {
                var b = a.vtp_javascript;
                try {
                    var c = N("google_tag_manager");
                    return c && c.e && c.e(b)
                } catch (d) {
                }
            }
        })
    }();
    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0;
            Z.__e.priorityOverride = 0
        })(function (a) {
            return String(Dd(a.vtp_gtmEventId, "event"))
        })
    }();
    Z.a.f = ["google"], function () {
        (function (a) {
            Z.__f = a;
            Z.__f.b = "f";
            Z.__f.g = !0;
            Z.__f.priorityOverride = 0
        })(function (a) {
            var b = pi("gtm.referrer", 1) || C.referrer;
            return b ? a.vtp_component && "URL" != a.vtp_component ? kb(lb(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ni(String(b)) : String(b)
        })
    }();
    Z.a.j = ["google"], function () {
        (function (a) {
            Z.__j = a;
            Z.__j.b = "j";
            Z.__j.g = !0;
            Z.__j.priorityOverride = 0
        })(function (a) {
            for (var b = String(a.vtp_name).split("."), c = N(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
            return c
        })
    }();
    Z.a.k = ["google"], function () {
        (function (a) {
            Z.__k = a;
            Z.__k.b = "k";
            Z.__k.g = !0;
            Z.__k.priorityOverride = 0
        })(function (a) {
            return si(a.vtp_name, pi("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
        })
    }();


    Z.a.u = ["google"], function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        (function (b) {
            Z.__u = b;
            Z.__u.b = "u";
            Z.__u.g = !0;
            Z.__u.priorityOverride = 0
        })(function (b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : pi("gtm.url", 1)) || li();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d) return ni(String(c));
            var e = lb(String(c)), g;
            if ("QUERY" === d) a:{
                var h = b[a("vtp_multiQueryKeys").toString()], k = b[a("vtp_queryKey").toString()] || "",
                    l = b[a("vtp_ignoreEmptyQueryParam").toString()], m;
                m = h ? na(k) ? k : String(k).replace(/\s+/g,
                    "").split(",") : [String(k)];
                for (var n = 0; n < m.length; n++) {
                    var p = kb(e, "QUERY", void 0, void 0, m[n]);
                    if (void 0 != p && (!l || "" !== p)) {
                        g = p;
                        break a
                    }
                }
                g = void 0
            } else g = kb(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
            return g
        })
    }();
    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0;
            Z.__v.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = pi(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();
    Z.a.ua = ["google"], function () {
        var a, b = {}, c = function (d) {
            var e = {}, g = {}, h = {}, k = {}, l = {}, m = void 0;
            if (d.vtp_gaSettings) {
                var n = d.vtp_gaSettings;
                f(Mi(n.vtp_fieldsToSet, "fieldName", "value"), g);
                f(Mi(n.vtp_contentGroup, "index", "group"), h);
                f(Mi(n.vtp_dimension, "index", "dimension"), k);
                f(Mi(n.vtp_metric, "index", "metric"), l);
                d.vtp_gaSettings = null;
                n.vtp_fieldsToSet = void 0;
                n.vtp_contentGroup = void 0;
                n.vtp_dimension = void 0;
                n.vtp_metric = void 0;
                var p = f(n);
                d = f(d, p)
            }
            f(Mi(d.vtp_fieldsToSet, "fieldName", "value"), g);
            f(Mi(d.vtp_contentGroup,
                "index", "group"), h);
            f(Mi(d.vtp_dimension, "index", "dimension"), k);
            f(Mi(d.vtp_metric, "index", "metric"), l);
            var t = he(d.vtp_functionName);
            if (ka(t)) {
                var q = "", r = "";
                d.vtp_setTrackerName && "string" == typeof d.vtp_trackerName ? "" !== d.vtp_trackerName && (r = d.vtp_trackerName, q = r + ".") : (r = "gtm" + Qc(), q = r + ".");
                var v = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0
                }, w = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0
                }, y = function (Q) {
                    var P = [].slice.call(arguments, 0);
                    P[0] = q + P[0];
                    t.apply(window, P)
                }, x = function (Q, P) {
                    return void 0 === P ? P : Q(P)
                }, z = function (Q, P) {
                    if (P) for (var ia in P) P.hasOwnProperty(ia) && y("set", Q + ia, P[ia])
                }, B = function () {
                }, A = function (Q, P, ia) {
                    var Wa = 0;
                    if (Q) for (var Da in Q) if (Q.hasOwnProperty(Da) && (ia && v[Da] || !ia && void 0 === v[Da])) {
                        var Xa = w[Da] ? wa(Q[Da]) : Q[Da];
                        "anonymizeIp" != Da || Xa || (Xa = void 0);
                        P[Da] = Xa;
                        Wa++
                    }
                    return Wa
                }, E = {name: r};
                A(g, E, !0);
                t("create", d.vtp_trackingId || e.trackingId, E);
                y("set", "&gtm", th(!0));
                d.vtp_enableRecaptcha && y("require", "recaptcha", "recaptcha.js");
                (function (Q, P) {
                    void 0 !== d[P] && y("set", Q, d[P])
                })("nonInteraction", "vtp_nonInteraction");
                z("contentGroup", h);
                z("dimension", k);
                z("metric", l);
                var J = {};
                A(g, J, !1) && y("set", J);
                var H;
                d.vtp_enableLinkId && y("require", "linkid", "linkid.js");
                y("set", "hitCallback", function () {
                    var Q = g && g.hitCallback;
                    ka(Q) && Q();
                    d.vtp_gtmOnSuccess()
                });
                if ("TRACK_EVENT" == d.vtp_trackType) {
                } else if ("TRACK_SOCIAL" == d.vtp_trackType) {
                } else if ("TRACK_TRANSACTION" == d.vtp_trackType) {
                } else if ("TRACK_TIMING" ==
                    d.vtp_trackType) {
                } else if ("DECORATE_LINK" == d.vtp_trackType) {
                } else if ("DECORATE_FORM" == d.vtp_trackType) {
                } else if ("TRACK_DATA" == d.vtp_trackType) {
                } else {
                    d.vtp_enableEcommerce && (y("require", "ec", "ec.js"), B());
                    if (d.vtp_doubleClick || "DISPLAY_FEATURES" == d.vtp_advertisingFeaturesType) {
                        var T =
                            "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                        y("require", "displayfeatures", void 0, {cookieName: T})
                    }
                    if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == d.vtp_advertisingFeaturesType) {
                        var W = "_dc_gtm_" + String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                        y("require", "adfeatures", {cookieName: W})
                    }
                    H ? y("send", "pageview", H) : y("send", "pageview");
                }
                if (!a) {
                    var aa = d.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    d.vtp_useInternalVersion && !d.vtp_useDebugVersion && (aa = "internal/" + aa);
                    a = !0;
                    var oa = F("https:", "http:", "//www.google-analytics.com/" + aa, g && g.forceSSL);
                    M(oa, function () {
                        var Q = fe();
                        Q && Q.loaded || d.vtp_gtmOnFailure();
                    }, d.vtp_gtmOnFailure)
                }
            } else D(d.vtp_gtmOnFailure)
        };
        Z.__ua = c;
        Z.__ua.b = "ua";
        Z.__ua.g = !0;
        Z.__ua.priorityOverride = 0
    }();


    Z.a.html = ["customScripts"], function () {
        function a(d, e, g, h) {
            return function () {
                try {
                    if (0 < e.length) {
                        var k = e.shift(), l = a(d, e, g, h);
                        if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                            var m = C.createElement("script");
                            m.async = !1;
                            m.type = "text/javascript";
                            m.id = k.id;
                            m.text = k.text || k.textContent || k.innerHTML || "";
                            k.charset && (m.charset = k.charset);
                            var n = k.getAttribute("data-gtmsrc");
                            n && (m.src = n, Na(m, l));
                            d.insertBefore(m, null);
                            n || l()
                        } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                            for (var p =
                                []; k.firstChild;) p.push(k.removeChild(k.firstChild));
                            d.insertBefore(k, null);
                            a(k, p, l, h)()
                        } else d.insertBefore(k, null), l()
                    } else g()
                } catch (t) {
                    D(h)
                }
            }
        }

        var c = function (d) {
            if (C.body) {
                var e =
                    d.vtp_gtmOnFailure, g = Ci(d.vtp_html, d.vtp_gtmOnSuccess, e), h = g.zc, k = g.I;
                if (d.vtp_useIframe) {
                } else d.vtp_supportDocumentWrite ? b(h, k, e) : a(C.body, Za(h), k, e)()
            } else ji(function () {
                    c(d)
                },
                200)
        };
        Z.__html = c;
        Z.__html.b = "html";
        Z.__html.g = !0;
        Z.__html.priorityOverride = 0
    }();


    var pk = {};
    pk.macro = function (a) {
        if (ag.kc.hasOwnProperty(a)) return ag.kc[a]
    }, pk.onHtmlSuccess = ag.Ed(!0), pk.onHtmlFailure = ag.Ed(!1);
    pk.dataLayer = vd;
    pk.callback = function (a) {
        Oc.hasOwnProperty(a) && ka(Oc[a]) && Oc[a]();
        delete Oc[a]
    };
    pk.jf = function () {
        Fc[Ec.i] = pk;
        Ca(Pc, Z.a);
        $b = $b || ag;
        ac = Kd
    };
    pk.Xf = function () {
        Wg.gtm_3pds = !0;
        Fc = u.google_tag_manager = u.google_tag_manager || {};
        if (Fc[Ec.i]) {
            var a = Fc.zones;
            a && a.unregisterChild(Ec.i)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Sb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Vb.push(e[g]);
            for (var h = b.predicates || [],
                     k = 0; k < h.length; k++) Ub.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                Tb.push(p)
            }
            Yb = Z;
            Zb = Fi;
            pk.jf();
            Ef();
            Nd = !1;
            Od = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Qd(); else {
                Sa(C, "DOMContentLoaded", Qd);
                Sa(C, "readystatechange", Qd);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !u.frameElement
                    } catch (y) {
                    }
                    q && Rd()
                }
                Sa(u, "load", Qd)
            }
            sf = !1;
            "complete" === C.readyState ? uf() :
                Sa(u, "load", uf);
            a:{
                if (!kd) break a;
                u.setInterval(ld, 864E5);
            }
            Lc = (new Date).getTime();
        }
    };
    (0, pk.Xf)();

})()