(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"propagateClick":false,"children":["this.MainViewer"],"watermark":false,"minHeight":0,"start":"this.init()","minWidth":0,"data":{"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1},"displayTooltipInTouchScreens":true,"defaultLocale":"tr","history":{},"name":"Player3884","locales":{"tr":"locale/tr.txt"}},"backgroundColor":["#FFFFFF"],"id":"rootPlayer","scrollBarMargin":2,"hash": "21a5bc3d457542d0d7ac7adfb6a99944759adffc322c71965a9555d94f911b09", "definitions": [{"id":"mainPlayList","items":[{"camera":"this.panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_camera","media":"this.panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_camera","media":"this.panorama_3E436C45_33D9_1614_41AB_1F8182E432F8","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_camera","media":"this.panorama_3E437711_33D9_320C_41C9_BA2CEBE91159","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"initialSequence":"this.sequence_3E43F1F1_33D9_2E0F_41BC_5A13E5A95A49","id":"panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_camera","class":"PanoramaCamera","initialPosition":{"pitch":-5.5,"class":"PanoramaCameraPosition","yaw":-63.44},"enterPointingToHorizon":true},{"initialSequence":"this.sequence_3E43D1F1_33D9_2E0F_41C4_B71050759DEB","id":"panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_camera","class":"PanoramaCamera","initialPosition":{"pitch":0.26,"class":"PanoramaCameraPosition","yaw":-2.35},"enterPointingToHorizon":true},{"class":"Panorama","thumbnailUrl":"media/panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_t.webp","adjacentPanoramas":[{"data":{"overlayID":"overlay_3C71CA4E_33C9_7214_41C8_6FB5B5790EE2"},"distance":3.82,"backwardYaw":0.64,"yaw":34.49,"panorama":"this.panorama_3E436C45_33D9_1614_41AB_1F8182E432F8","class":"AdjacentPanorama","select":"this.overlay_3C71CA4E_33C9_7214_41C8_6FB5B5790EE2.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","hfovMax":130,"vfov":180,"data":{"label":"3"},"id":"panorama_3E437711_33D9_320C_41C9_BA2CEBE91159","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"height":2048,"url":"media/panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_0/{face}/0/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_0/{face}/1/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_t.webp"}],"overlays":["this.overlay_3C71CA4E_33C9_7214_41C8_6FB5B5790EE2"],"hfov":360,"label":trans('panorama_3E437711_33D9_320C_41C9_BA2CEBE91159.label')},{"initialSequence":"this.sequence_3E43B1F1_33D9_2E0F_41C2_04757A032F78","id":"panorama_3E437711_33D9_320C_41C9_BA2CEBE91159_camera","class":"PanoramaCamera","initialPosition":{"pitch":-0.78,"class":"PanoramaCameraPosition","yaw":35.13},"enterPointingToHorizon":true},{"class":"Panorama","thumbnailUrl":"media/panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_t.webp","adjacentPanoramas":[{"data":{"overlayID":"overlay_2354CB3F_33C8_F273_41B1_107CB0E566E7"},"distance":4.38,"backwardYaw":-176.8,"yaw":-58.18,"panorama":"this.panorama_3E436C45_33D9_1614_41AB_1F8182E432F8","class":"AdjacentPanorama","select":"this.overlay_2354CB3F_33C8_F273_41B1_107CB0E566E7.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","hfovMax":130,"vfov":180,"data":{"label":"1"},"id":"panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"height":2048,"url":"media/panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_0/{face}/0/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_0/{face}/1/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370_t.webp"}],"overlays":["this.overlay_2354CB3F_33C8_F273_41B1_107CB0E566E7"],"hfov":360,"label":trans('panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370.label')},{"toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingTop":4,"playbackBarBackgroundOpacity":1,"progressBorderColor":"#000000","subtitlesFontSize":"3vmin","toolTipFontFamily":"Arial","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","toolTipFontSize":"1.11vmin","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"toolTipTextShadowColor":"#000000","vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowColor":"#333138","progressBackgroundColor":["#000000"],"playbackBarBottom":5,"playbackBarBorderSize":0,"progressBottom":10,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","class":"ViewerArea","progressHeight":2,"propagateClick":false,"progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"minHeight":50,"playbackBarHeight":10,"minWidth":100,"progressBarBorderSize":0,"id":"MainViewer","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"firstTransitionDuration":0,"playbackBarRight":0,"progressBorderRadius":2,"progressRight":"33%","subtitlesTop":0,"progressOpacity":0.7,"toolTipFontColor":"#606060","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","toolTipPaddingLeft":6,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"progressBarBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"height":"100%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadHeight":15,"width":"100%","vrPointerSelectionColor":"#FF6600","subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000"},{"mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"viewerArea":"this.MainViewer"},{"class":"Panorama","thumbnailUrl":"media/panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_t.webp","adjacentPanoramas":[{"data":{"overlayID":"overlay_23074629_33CB_121C_41C9_B09C2B34DF57"},"distance":2.84,"backwardYaw":-58.18,"yaw":-176.8,"panorama":"this.panorama_3DB97160_33D9_6E0D_41BB_0BC32583B370","class":"AdjacentPanorama","select":"this.overlay_23074629_33CB_121C_41C9_B09C2B34DF57.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_23ADFBC4_33C9_3215_41C1_3FB029C3FA47"},"distance":3.5,"backwardYaw":34.49,"yaw":0.64,"panorama":"this.panorama_3E437711_33D9_320C_41C9_BA2CEBE91159","class":"AdjacentPanorama","select":"this.overlay_23ADFBC4_33C9_3215_41C1_3FB029C3FA47.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","hfovMax":130,"vfov":180,"data":{"label":"2"},"id":"panorama_3E436C45_33D9_1614_41AB_1F8182E432F8","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"height":2048,"url":"media/panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_0/{face}/0/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_0/{face}/1/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"rowCount":1,"height":512,"url":"media/panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_3E436C45_33D9_1614_41AB_1F8182E432F8_t.webp"}],"overlays":["this.overlay_23ADFBC4_33C9_3215_41C1_3FB029C3FA47","this.overlay_23074629_33CB_121C_41C9_B09C2B34DF57"],"hfov":360,"label":trans('panorama_3E436C45_33D9_1614_41AB_1F8182E432F8.label')},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_3E43F1F1_33D9_2E0F_41BC_5A13E5A95A49","class":"PanoramaCameraSequence"},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_3E43D1F1_33D9_2E0F_41C4_B71050759DEB","class":"PanoramaCameraSequence"},{"data":{"label":"Arrow 05b","hasPanoramaAction":true},"items":[{"pitch":-23.99,"distance":100,"roll":-0.76,"yaw":34.49,"vfov":3.88,"scaleMode":"fit_inside","hfov":6.47,"data":{"label":"Arrow 05b"},"image":"this.AnimatedImageResource_2232A672_33CB_120D_41B4_D6C04902C491","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_3C191A8C_33C9_7214_41AA_14DBE3EF4DC2"],"maps":[],"id":"overlay_3C71CA4E_33C9_7214_41C8_6FB5B5790EE2","class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true},{"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_3E43B1F1_33D9_2E0F_41C2_04757A032F78","class":"PanoramaCameraSequence"},{"data":{"label":"Arrow 05b","hasPanoramaAction":true},"items":[{"pitch":-21.2,"distance":100,"yaw":-58.18,"vfov":4.91,"scaleMode":"fit_inside","hfov":7.06,"data":{"label":"Arrow 05b"},"image":"this.AnimatedImageResource_22321670_33CB_120D_419D_5F42DD0BC68A","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_23416B5E_33C8_F235_41BA_223B766C77D8"],"maps":[],"id":"overlay_2354CB3F_33C8_F273_41B1_107CB0E566E7","class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true},{"data":{"label":"Arrow 05b","hasPanoramaAction":true},"items":[{"pitch":-25.93,"distance":100,"yaw":0.64,"vfov":5.09,"scaleMode":"fit_inside","hfov":7.26,"data":{"label":"Arrow 05b"},"image":"this.AnimatedImageResource_2232D670_33CB_120D_41A1_638DC421126A","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_23985BCF_33C9_3214_4192_C46E7059AD45"],"maps":[],"id":"overlay_23ADFBC4_33C9_3215_41C1_3FB029C3FA47","class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true},{"data":{"label":"Arrow 05b","hasPanoramaAction":true},"items":[{"pitch":-30.88,"distance":100,"roll":3.52,"yaw":-176.8,"vfov":6.26,"scaleMode":"fit_inside","hfov":7.55,"data":{"label":"Arrow 05b"},"image":"this.AnimatedImageResource_2232F670_33CB_120D_41C1_6486441B56D7","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_22F9462F_33CB_1213_41A0_D0D34BB7F1E6"],"maps":[],"id":"overlay_23074629_33CB_121C_41C9_B09C2B34DF57","class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true},{"colCount":4,"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_2232A672_33CB_120D_41B4_D6C04902C491","class":"AnimatedImageResource","levels":[{"height":420,"url":"media/res_229A916C_33C9_2E14_41BE_0FE3653605ED_0.webp","class":"ImageResourceLevel","width":480}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_3C191A8C_33C9_7214_41AA_14DBE3EF4DC2","class":"HotspotPanoramaOverlayArea"},{"colCount":4,"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_22321670_33CB_120D_419D_5F42DD0BC68A","class":"AnimatedImageResource","levels":[{"height":420,"url":"media/res_229A916C_33C9_2E14_41BE_0FE3653605ED_0.webp","class":"ImageResourceLevel","width":480}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_23416B5E_33C8_F235_41BA_223B766C77D8","class":"HotspotPanoramaOverlayArea"},{"colCount":4,"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_2232D670_33CB_120D_41A1_638DC421126A","class":"AnimatedImageResource","levels":[{"height":420,"url":"media/res_229A916C_33C9_2E14_41BE_0FE3653605ED_0.webp","class":"ImageResourceLevel","width":480}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_23985BCF_33C9_3214_4192_C46E7059AD45","class":"HotspotPanoramaOverlayArea"},{"colCount":4,"rowCount":6,"finalFrame":"first","frameCount":24,"frameDuration":41,"id":"AnimatedImageResource_2232F670_33CB_120D_41C1_6486441B56D7","class":"AnimatedImageResource","levels":[{"height":420,"url":"media/res_229A916C_33C9_2E14_41BE_0FE3653605ED_0.webp","class":"ImageResourceLevel","width":480}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_22F9462F_33CB_1213_41A0_D0D34BB7F1E6","class":"HotspotPanoramaOverlayArea"}],"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","width":"100%","scrollBarColor":"#000000","backgroundColorRatios":[0],"scripts":{"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openLink":TDV.Tour.Script.openLink,"cloneBindings":TDV.Tour.Script.cloneBindings,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"enableVR":TDV.Tour.Script.enableVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clone":TDV.Tour.Script.clone,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"isPanorama":TDV.Tour.Script.isPanorama,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"mixObject":TDV.Tour.Script.mixObject,"startMeasurement":TDV.Tour.Script.startMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"registerKey":TDV.Tour.Script.registerKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"createTween":TDV.Tour.Script.createTween,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizStart":TDV.Tour.Script.quizStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"initAnalytics":TDV.Tour.Script.initAnalytics,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizFinish":TDV.Tour.Script.quizFinish,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"shareSocial":TDV.Tour.Script.shareSocial,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeJS":TDV.Tour.Script.executeJS,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"disableVR":TDV.Tour.Script.disableVR,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"translate":TDV.Tour.Script.translate,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setLocale":TDV.Tour.Script.setLocale,"initQuiz":TDV.Tour.Script.initQuiz,"toggleVR":TDV.Tour.Script.toggleVR,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D},"layout":"absolute","class":"Player","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.35, Thu Oct 30 2025