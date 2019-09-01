/// <reference path="jquery-1.7.1-vsdoc.js" />
var cokv = getCookie("jpvolume");
if (cokv == "" || cokv == null || cokv == undefined || cokv == "NaN") cokv = 0.9;
var cokl = getCookie("jploop");
if (cokl == "false" || !cokl) cokl = false; else cokl = true;
var isMobile = navigator.userAgent.match(/Android|iPhone|iPad/i) ? true : false;
var isAndroid = navigator.userAgent.match(/Android/i) ? true : false;
var solution = "html,flash";
var record = 1;
var isLocal = location.href.indexOf("localhost") > 0;
if (isLocal) {
    $("#playState").text("暂停");
}
$(document).ready(function () {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            var media = {};
            if (top != self) {
                mp3 = "/file/tn9.mp3";
                alert("欢迎访问好听轻音乐网！ www.htqyy.com");
            }
            if (isLocal) {
                mp3 = mp3.replace("f.htqyy.com", "192.168.100.2:8081");
            } else if (location.href.indexOf("192.168.100.2") > 0) {
                mp3 = mp3.replace("f.htqyy.com", "192.168.100.2:8081");
            }
            media[format] = mp3;
            if (isLocal) {
                var options = $(this).data("jPlayer").options;
                options.preload = "none";
                $("#jp_audio_0").attr("preload", "none");
                $(this).jPlayer("setMedia", media);
                $("#playState").text("暂停");
            } else {
                $(this).jPlayer("setMedia", media).jPlayer("play");
            }
            $("audio").attr("rel", "nofollow");

        },
        swfPath: "http://i.htqyy.com/js/jPlayer",
        solution: solution,
        supplied: window.format,
        wmode: "window",
        useStateClassSkin: true,
        smoothPlayBar: false,
        keyEnabled: false,
        loop: cokl,
        repeat: repeatFun,
        volume: cokv,
        //loadstart:loadstart,
        //loadedmetadata: loadedmetadata,
        //loadeddata: loadeddata,
        canplay: canplay,
        volumechange: volumechangeFun,
        play: playStateFun,
        pause: playStateFun,
        ended: endedFun2,
        durationchange: durationchangeFun
    });
    initComment();
});

function downCallback(data) {
    asyncbox.tips(data);
}

$(function () {
    $("#downBtn").click(function (e) {
        var flag = $(this).data("flag");
        if (flag) return false;
        $(this).data("flag", 1);
        setTimeout(function () {
            $("#downBtn").data("flag", 0);
        }, 1500);

        var downUrl = PageData.DownHost + PageData.down + "/" + PageData.musicId + "/" + PageData.format + "/" + PageData.code + "/" + new Date().getHours();

        var myDate = new Date();
        var strDate = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate();
        var strStart = strDate + " 20:00";
        var sTime = new Date(strStart);
        var strEnd = strDate + " 22:00";
        var eTime = new Date(strEnd);
        if (myDate > sTime && myDate < eTime) {
            var isVisible = $(".asynctips").is(":visible");
            if (!isVisible) {
                var tipMsg = "晚上八点到十点高峰期不提供音乐下载服务，谢谢您的支持与理解！";
                asyncbox.tips(tipMsg, null, 6000);
            }
            e.stopImmediatePropagation();
            return false;
        }

        //$(this).attr("href", downUrl);
        PageData.downUrl = downUrl;
        getProxy("/proxy.htm");

        if (isPC() && isBlk()) {
            var adName = window.TANX_ONLOAD ? "百度" : "";
            var content = '<div style="font-size:15px;margin-top:-2px;">因您的浏览器拦截了本站' + adName + '广告，不提供下载服务<br>设置浏览器不再拦截本站广告后，再点击下载<br>若不会设置，换用IE浏览器访问此页面下载</div><div class="mt2 hide"><div class="fl" style="width: 120px; margin-right: 19px;"><img width="120" height="120" src="/img/wx200.jpg"></div><div style="line-height: 25px;" class="fl">微信扫一扫<br>关注好听轻音乐公众号<br>手机收听好音乐</div></div>';
            asyncbox.alert(content, "您的浏览器拦截了本站" + adName + "广告，不提供下载服务", function () {
                setItem("blk", 1);
            });
            $("#asyncbox_alert_ok").html("<span> 我知道了 </span>")
        } else {
            var checkUrl = PageData.DownHost + PageData.down + "/check/" + PageData.musicId;
            getUrl(checkUrl);
        }
        e.stopImmediatePropagation();
        return false;
    });
    $("#goodBtn").bind("click", function () {
        if ($(this).attr("posted")) {
            asyncbox.tips("您已点赞!");
            return;
        }
        $(this).attr("posted", 1);
        $("#likeCount").text(++PageData.likeCount);
        $.ajax({
            type: "POST",
            dataType: "text",
            url: rootPath + "/Comment/Rating/" + PageData.musicId,
            data: "title=" + $(".jp-title li").text(),
            success: function (data) {
                if (data == "1") {
                } else {
                }
            },
            complete: function (data) {
            }
        });
    });
    $("a[target=_self]").attr("target", "_blank");
    $(".mTitle a").click(function () {
        if (window.cflag) return false;
        window.cflag = true;
        setTimeout(function () {
            window.cflag = 0;
        }, 1500);
    });
    intlCount = 0;
    intl = setInterval(setShareEvent, 1200);
});

function setShareEvent() {
    if (intlCount++ == 5) {
        clearInterval(intl);
    }
    var objs = $(".bdsharebuttonbox a:not(.bds_count)");
    if (objs.length > 0) {
        objs.click(function () {
            window.isCall = true;
            var timeout = setTimeout(function () {
                getUrl(PageData.DownHost + "admin/share");
                window.isCall = false;
                window.onbeforeunload = null;
            }, 5000);
            window.onbeforeunload = function () {
                if (window.isCall) {
                    getUrl(PageData.DownHost + "admin/share");
                }
                return;
            }
        });
        clearInterval(intl);
    }
}

function getUrl(url) {
    var iframe = $(".iframe");
    if (iframe.length == 0) {
        iframe = $("<iframe frameborder=0 width=0 height=0 class='iframe hide' />");
        iframe.appendTo($("body"));
        iframe.load(function () {
            //console.log("loaded - " + $(this).attr("src"));
        });
    }
    iframe.attr("src", url);
}

function getProxy(url) {
    var iframe = $("#proxy");
    if (iframe.length == 0) {
        iframe = $("<iframe id='proxy' frameborder=0 width=0 height=0 class='hide' />");
        iframe.appendTo($("body"));
        iframe.load(function () {
            //console.log("loaded - " + $(this).attr("src"));
        });
        iframe.attr("src", url);
    }
}

var pageIndex = 0;
var pageSize = 5;
$(function () {
    if (PageData.commentCount) {
        var pagin = $("#Pagination");
        if (pagin.pagination) {
            $("#Pagination").pagination(PageData.commentCount, {
                callback: PageCallback,
                prev_text: '上一页',
                next_text: '下一页',
                items_per_page: pageSize,
                num_display_entries: 6,
                current_page: pageIndex,
                num_edge_entries: 1,
                link_to: "javascript:;",
                hidePager: true
            });
        }
    } else {
        $("#comment").html("<div class='sf'>这首歌曲怎么样？快来评论一下吧！ </div>");
    }
});
var cc = 0;

function initComment() {
    var nickname = getCookie("nn");
    if (nickname) {
        $("#userName").val(nickname).parent().hide();
    }
    var postedText;
    $("#btnSubmit").bind("click", function () {
        var userName = $.trim($("#userName").val());
        if (userName.length == 0) {
            alert("请输入昵称!");
            return false;
        } else if (userName.length > 15) {
            alert("昵称过长!");
            return false;
        }

        var text = $.trim($("#textComment").val());
        var reg = /http|.com|.cn|www|微信|威信|VX|WX|淘宝|sex|qq/i;
        if (reg.test(userName) || reg.test(text)) {
            alert("存在非法字符!");
            return false;
        }
        var reg1 = /支付宝|手机|搜索|代孕|老公|房|男人|美女|操|免费|视频|看片/i;
        if (text.length > 20 && reg1.test(text)) {
            alert("存在非法字符!");
            return false;
        }

        var reg2 = /(\w)\1{4}|^(\w){1,3}$|[\d\s]{6}|[\w:]{12}/i;
        var reg3 = /(\w)\1\1\1/i;
        if (reg2.test(text) || (text.length < 8 && reg3.test(text))) {
            alert("书写不规范!");
            return false;
        }

        if (text.length == 0) {
            alert("请输入评论内容!");
            return false;
        } else if (text.length > 140) {
            alert("评论内容超出140字!");
            return false;
        } else if (text == postedText) {
            $("#sendStatus").text("已成功提交！再发一条吧！").fadeIn("slow");
            setTimeout("$('#sendStatus').fadeOut('slow')", 3500);
            return false;
        }
        if ($(this).attr("post")) {
            return false;
        }
        if (cc++ > 2) {
            $("#sendStatus").text("提交失败,评论次数过多!");
            return false;
        }
        $(this).attr("post", 1);
        $("#sendStatus").text("提交中...").fadeIn("slow");
        $.ajax({
            type: "POST",
            dataType: "text",
            url: rootPath + '/Comment/CreateComment/' + PageData.musicId,
            data: "musicId=" + PageData.musicId + "&nickname=" + userName + "&text=" + text + "&title=" + $(".jp-title li").text(),
            success: function (data) {
                postedText = text;
                if (PageData.commentCount++ == 0) {
                    $("#comment .sf").hide();
                    $("#comment").append('<ul id="commentList"></ul>');
                }
                $("#commentList").prepend("<li><div class='post_item'><div class='info'><span>" + userName + "</span><span class='ml f12'>发表于：</span><span class='f12'>" + new Date().toLocaleString() + "</span></div><div class='brief'>" + text + "</div></div></li>");
                $("#sendStatus").text("提交成功！");
                if (data == "-1") {
                    $("#sendStatus").text("提交失败,今天评论次数过多!");
                }
                setTimeout("$('#sendStatus').fadeOut('slow')", 3000);
            },
            error: function (data) {
                $("#sendStatus").text(data.statusText);
                setTimeout("$('#sendStatus').fadeOut('slow')", 3000)
            },
            complete: function () {
                $("#btnSubmit").attr("post", null);
            }
        });
    });
}

function volumechangeFun() {
    var w = $(".jp-volume-bar-value").attr("style").toLowerCase();
    w = w.replace("width:", "");
    w = w.replace("%", "");
    w = w.replace(";", "");
    w = (w / 100).toString();
    w = w.substring(0, 5);
    if (w > 0) setCookie2("jpvolume", w);
}

function playStateFun(event) {
    var s = event.jPlayer.status;
    var text = "正在播放";
    if (s.paused == true) {
        text = "暂停";
    } else if (s.ended === 0 || s.duration === 0) {
        text = "正在加载";
    }
    $("#playState").text(text);
}

function durationchangeFun(event) {
    var s = event.jPlayer.status;
    if (isMobile && s.paused == false && s.duration > 1) {
        $("#playState").text("正在播放");
    }
}

function endedFun2(event) {
    if (!event.jPlayer.options.loop) {
        var text = "停止";
        $("#playState").text(text);
    }
}

function repeatFun(event) {
    $.jPlayer.prototype.options.repeat.call(this, event);
    setCookie2("jploop", event.jPlayer.options.loop);
}

function loadstart() {
    $("#playState").text("正在加载");
}

function loadedmetadata() {
}

function loadeddata() {
    $("#playState").text("正在加载");
}

function canplay(event) {
    var s = event.jPlayer.status;
    var text = "正在播放";
    if (s.paused && s.duration > 0) {
        text = "暂停";
    }
    $("#playState").text(text);
}

function PageCallback(index, jq) {
    InitTable(index, jq);
}

function InitTable(pageIndex, jq) {
    if (PageData.commentCount > 0) {
        var method = "GET";
        if (pageIndex > 0) method = "POST";
        $.ajax({
            type: method,
            dataType: "text",
            url: rootPath + '/Comment/CommentList/' + PageData.musicId,
            data: "pageIndex=" + pageIndex + "&pageSize=" + pageSize,
            success: function (data) {
                var links = jq.data("links");
                if (links) {
                    jq.empty().append(links);
                }
                $("#comment").empty();
                $("#comment").append(data);
                $("#Pagination").show();
            }
        });
    }
}

function rating() {
    $.ajax({
        url: rootPath + "/Comment/Rating/" + PageData.musicId,
        success: function (data) {
            if (data == "1") {
                $("#likeCount").text(++PageData.likeCount);
            } else {
                asyncbox.tips("您已评价!");
            }
        },
        complete: function (data) {
        }
    });
    return false;
}

function onBeforeClick(cmd, config) {
    config.bdDesc = "好听的轻音乐《" + $.trim($(".jp-title").text()) + "》在线试听，MP3下载。";
    var dest = $.trim($(".destWrap").text());
    if (dest.length > 90) {
        dest = dest.substring(0, 90);
    }
    if (cmd == "qzone") {
        config.bdDesc = "分享一首好听的轻音乐";
        config.bdText = bdText;
        config.bdComment = dest;
    } else if (cmd == "renren") {
        config.bdText = bdText2;
        config.bdDesc = dest;
    } else if (cmd == "sqq") {
        config.bdComment = dest;
        config.bdDesc = "分享一首好听的轻音乐";
    } else {
        config.bdText = bdText2;
    }
    return config;
};
window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": window.bdText,
        "bdDesc": "",
        "bdMini": "2",
        "bdPic": window.imgUrl,
        "bdStyle": "0",
        "bdSize": "24",
        "bdSign": "off",
        "onBeforeClick": onBeforeClick
    },
    "share": {},
    "image": {"viewList": ["qzone", "tsina", "tqq", "renren", "weixin"], "viewText": "分享到：", "viewSize": "16"},
    "selectShare1": {"bdContainerClass": null, "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]}
};
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];


// <script type="text/javascript">
//         var format = "mp3";
//         var PageData = {};
//         PageData.Host="http://f.htqyy.com/";
//         PageData.DownHost="http://d.htqyy.com/";
//         PageData.down="down7";
//         PageData.musicId = "33";
//         PageData.likeCount = "2040";
//         PageData.commentCount = 172;
//         PageData.day=30;
//         PageData.code=8;
//         PageData.format="mp3";
//         var ip="114.94.255.0";
//         var fileHost="http://f2.htqyy.com/play7/";
//         var musicHost="http://f.htqyy.com/play7/";
//         var isCMobile=isMobileIp(ip) && window.isCMIp;
//         setItem("cm",isCMobile);
//         var mp3="33/mp3/8";
//         mp3=fileHost+mp3;
//         var bdText = "清晨(New Morning) - 班得瑞";
//         var bdText2 = "分享一首好听的轻音乐：" + bdText;
//         var imgUrl="http://i.htqyy.com/img7/0/33.jpg";
//     </script>
