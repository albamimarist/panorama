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
var script = {"children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"watermark":false,"hash": "2355e7810d864a6ff9324001d9743246703d4f256d0672b4fb9a456f1796eb1e", "definitions": [{"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"progressHeight":2,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"height":"100%","toolTipFontFamily":"Arial","progressRight":"33%","vrPointerSelectionTime":2000,"progressOpacity":0.7,"subtitlesBottom":50,"subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderRadius":0,"firstTransitionDuration":0,"progressBarBorderRadius":2,"playbackBarLeft":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"progressBarBackgroundColorRatios":[0],"class":"ViewerArea","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBarBorderSize":0,"progressBarBorderColor":"#000000","toolTipTextShadowColor":"#000000","progressBorderSize":0,"toolTipPaddingTop":4,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","minHeight":50,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","minWidth":100,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","id":"MainViewer","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"toolTipFontColor":"#606060","playbackBarBottom":5,"toolTipPaddingRight":6,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesGap":0,"progressBackgroundColor":["#000000"],"subtitlesTop":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeight":10,"toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","propagateClick":false,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"progressLeft":"33%","progressBottom":10,"width":"100%","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0},{"id":"mainPlayList","items":[{"camera":"this.panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2_camera","media":"this.panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"vfov":180,"hfovMax":130,"id":"panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2","hfov":360,"data":{"label":"panorama_340E7A06_38DC_35C2_41B4_E9E99F2089DD_hd_t"},"hfovMin":"150%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":1,"height":512,"url":"media/panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2_0/{face}/0/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2_t.webp"}],"label":trans('panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2.label'),"class":"Panorama","thumbnailUrl":"media/panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2_t.webp"},{"initialSequence":"this.sequence_33EE4925_38E6_23F3_41CB_6A1DF02EF7D7","id":"panorama_340BC3E4_38E6_E671_41BD_B8E7E4E02BC2_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"touchControlMode":"drag_rotation"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_33EE4925_38E6_23F3_41CB_6A1DF02EF7D7","class":"PanoramaCameraSequence"}],"layout":"absolute","backgroundColorRatios":[0],"minHeight":0,"minWidth":0,"scrollBarColor":"#000000","data":{"name":"Player509","displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false},"defaultLocale":"tr","locales":{"tr":"locale/tr.txt"}},"backgroundColor":["#FFFFFF"],"id":"rootPlayer","scripts":{"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"clone":TDV.Tour.Script.clone,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"openLink":TDV.Tour.Script.openLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"enableVR":TDV.Tour.Script.enableVR,"getPixels":TDV.Tour.Script.getPixels,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"disableVR":TDV.Tour.Script.disableVR,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeJS":TDV.Tour.Script.executeJS,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"init":TDV.Tour.Script.init,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleVR":TDV.Tour.Script.toggleVR,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"createTween":TDV.Tour.Script.createTween,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"quizStart":TDV.Tour.Script.quizStart,"registerKey":TDV.Tour.Script.registerKey,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"existsKey":TDV.Tour.Script.existsKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"setValue":TDV.Tour.Script.setValue,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByName":TDV.Tour.Script.getMediaByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama},"start":"this.init()","propagateClick":false,"width":"100%","class":"Player","scrollBarMargin":2,"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.35, Fri Oct 31 2025