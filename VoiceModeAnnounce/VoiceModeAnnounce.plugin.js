/**
 * @name VoiceModeAnnounce
 * @author Froghut
 * @description When the user switches between voice activation and push-to-talk modes the plugin will announce the currently set mode via audio notification
 * @version 1.0.0
 * @source https://github.com/Froghut/BDPlugins/tree/main/VoiceModeAnnounce
 */

var ptt = "data:audio/mpeg;base64,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";
var voice = "data:audio/mpeg;base64,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";
var mode = "";
var interval;
var voiceSettings;

function Check() {
    var curMode = voiceSettings.getMode();
    if (curMode != mode) {
        if (curMode == "PUSH_TO_TALK") {
            play(ptt);
        }
        else {
            play(voice);
        }
        mode = curMode;
    }
}

function play(src) {
    let audio = new Audio();
    audio.src = src;
    audio.play();
}

module.exports = class VoiceModeAnnounce {
    
    load() {
        voiceSettings = BdApi.findModuleByProps("getEchoCancellation");
    }

    start() {
        mode = BdApi.findModuleByProps("getEchoCancellation").getMode();
        interval = setInterval(Check, 500);
        Check();
    }
    stop() {
        clearInterval(interval);
    }

    observer(changes) {}
       
};