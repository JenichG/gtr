// ==UserScript==
// @name         bratki
// @namespace    http://vk.com/di7ak
// @version      0.1
// @description  try to take over the world!
// @author       Di7aK
// @match        http://bratki.mobi/*
// @grant        none
// ==/UserScript==



var icPlayUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAiklEQVRIx+2UzQ1AQBQGJW7OGlACPeiCKqiCLqhCEUpYDTi7SUb27Hflc7JTwCT7dt4LAo9nD5lKtNISKUSWiVwjsvTEGhHMlBqRZSDRiGChJlSILOOLKDjGPQrOcYuCa55HcSPqFCKjeNpKoxj2SKoIslIEKVmRmUKxtJ3ijBjFYXP/6I+Pv+cPbFrkcdWH6mjQAAAAAElFTkSuQmCC";
var icPauseUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAMElEQVRIx2NgGAWjABn8b0BAYsRxG4QEiBEfNWjUoFGDRg0aNWgADaJW4T8KRg4AABfpAict00b7AAAAAElFTkSuQmCC";
var switchStyle = "img[src*='data:image'] {width:22px; height: 22px;}"
".switch {\n" +
    "  position: relative;\n" +
    "  top: 3px;" +
    "  display: inline-block;\n" +
    "  width: 24px;\n" +
    "  height: 15px;\n" +
    "}\n" +
    "\n" +
    "/* Hide default HTML checkbox */\n" +
    ".switch input {display:none;}\n" +
    "\n" +
    "/* The slider */\n" +
    ".slider {\n" +
    "  position: absolute;\n" +
    "  cursor: pointer;\n" +
    "  top: 0;\n" +
    "  left: 0;\n" +
    "  right: 0;\n" +
    "  bottom: 0;\n" +
    "  background-color: #ccc;\n" +
    "  -webkit-transition: .4s;\n" +
    "  transition: .4s;\n" +
    "}\n" +
    "\n" +
    ".slider:before {\n" +
    "  position: absolute;\n" +
    "  content: \"\";\n" +
    "  height: 13px;\n" +
    "  width: 13px;\n" +
    "  left: 1px;\n" +
    "  bottom: 1px;\n" +
    "  background-color: white;\n" +
    "  -webkit-transition: .4s;\n" +
    "  transition: .4s;\n" +
    "}\n" +
    "\n" +
    "input:checked + .slider {\n" +
    "  background-color: #2196F3;\n" +
    "}\n" +
    "\n" +
    "input:focus + .slider {\n" +
    "  box-shadow: 0 0 1px #2196F3;\n" +
    "}\n" +
    "\n" +
    "input:checked + .slider:before {\n" +
    "  -webkit-transform: translateX(10px);\n" +
    "  -ms-transform: translateX(10px);\n" +
    "  transform: translateX(10px);\n" +
    "}\n" +
    "\n" +
    "/* Rounded sliders */\n" +
    ".slider.round {\n" +
    "  border-radius: 10px;\n" +
    "}\n" +
    "\n" +
    ".slider.round:before {\n" +
    "  border-radius: 50%;\n" +
    "}" +
    "input[type='range'] {\n" +
    "    -webkit-appearance: none !important;\n" +
    "    background:white;\n" +
    "    height:3px;\n" +
    "}\n" +
    "input[type='range']::-webkit-slider-thumb {\n" +
    "    -webkit-appearance: none !important;\n" +
    "    background:#2196F3;\n" +
    "    border-radius: 100%;\n" +
    "    height:10px;\n" +
    "    width:10px;\n" +
    "}" +
    ".edit_text {\n" +
    "    border-bottom: 2px solid #555;\n" +
    "    background:#000;\n" +
    "    font-size: 12px;\n" +
    "    height:100px;\n" +
    "    outline: none;\n" +
    "}" +
    ".edit_text:focus {\n" +
    "    border-bottom: 2px solid #2196F3;\n" +
    "}" +
    ".btn-equip {color: #338899; display: inline-block; margin: 0 5px 3px 0; padding: 2px 4px; font-size: 12px; text-decoration: none;}";
var customStyle = ".msg {\n" +
    "padding: 5px;\n" +
    "margin: 5px;\n" +
    "background: #3339;\n" +
    "border-radius: 5px;\n" +
    "}" +
    ".s, .hr, .shr {\n" +
    "display: none !important;\n" +
    "}" +
    "a.b-r {\n" +
    "display: none !important;\n" +
    "}" +
    "a {color: #338899;}" +
    ".btn.btn-name, .btn.btn-name:hover, .btn-name {\n" +
    "float: none !important;\n" +
    "background: none !important;\n" +
    "color: #339db4 !important\n" +
    "}" +
    ".chat-item {\n" +
    "margin: 0 !important;\n" +
    "padding: 0 !important;\n" +
    "background: none !important;\n" +
    "}" +
    ".menu-item, .mainmenu-item, .btn-a, .btn-flat, .btn-equip, .btn-attack, .btn-combat, .btn-send {\n" +
    "background: #234 !important;\n" +
    "border: 0px solid #333 !important;\n" +
    "text-transform: lowercase;\n" +
    "}" +
    ".footmenu-item {\n" +
    "background: none !important;\n" +
    "border: 0px solid #333 !important;\n" +
    "color: #fff !important;" +
    "text-transform: uppercase;" +
    "height: auto !important;" +
    "}" +
    ".search-form, input[type='kek'] {\n" +
    "background: #4449 !important;\n" +
    "border: 0px;\n" +
    "padding: 5px;\n" +
    "color: #fff;\n" +
    "border-radius: 5px;\n" +
    "}" +
    ".btn-smiles {\n" +
    "background: #345 !important;\n" +
    "border-top-left-radius: 5px;\n" +
    "border-top-right-radius: 5px;\n" +
    "}" +
    "textarea {\n" +
    "background: #444 !important;\n" +
    "border: 0px !important;\n" +
    "padding: 5px !important;\n" +
    "color: #fff !important;\n" +
    "border-radius: 5px !important;\n" +
    "box-shadow: none !important;\n" +
    "}" +
    "body {background: url(http://img.desktopwallpapers.ru/newyear/pics/wide/1920x1200/3ffa689b3e916bf6c15222f66d92c92d.jpg) no-repeat fixed 100% 50%!important;}" +
    ".content {background: #2225 !important;}" +
    ".btn-send {background: #234; padding: 5px; border: 0 !important; font-transform: uppercase;}" +
    ".btn-name {display:inline-block !important;}" +
    ".sep-top, .sep-bot {display:none !important;}" +
    ".ml a, .ml2 a {background: #234; padding: 5px; margin-top: 1px; width: auto !important; border: 0 !important; font-transform: lowercase;}" +
    ".ml a:hover, .ml2 a:hover{background: #222 !important;}" +
    ".ml li.sep {display: none !important;}" +
    ".ml2 a {background: #3335 !important;}" +
    ".block a {color: #338899;}" +
    ".minor {color: #999999 !important;}" +
    ".container {background: #2345 !important; max-width: 550px !important;}" +
    ".b-content, .b-robbery, .bg-verygray {background: none !important;}" +
    ".ml, .ml2 {background: none !important; margin-top:3px;}" +
    ".shop-filter, .b-tabs {background: #0005 !important;}" +
    ".b-title span:before, .b-title span:after {display: none;}" +
    "a .btn-r {background: none !important;}" +
    ".event, .notice-inner {background: #234a !important;}" +
    ".chat-head {padding: 5px !important;}" +
    ".b-notice-close {background: url(../images/notice-close_cross.png) no-repeat 51% 50% #933c !important;}" +
    ".b-title, h2.cn {background: #2345 !important; color: #ccc !important; font-weight: bold; text-transform: uppercase;}";

var TYPE_SWITCH = 1;
var TYPE_TIMEOUT_SCENES = 2;
var TYPE_SCENES = 3;

window.onpopstate = function (event) {
    document.body.innerHTML = event.state.html;
    lib.onload();
};
var change = 0;
var modules = {
    races: {
        name: "Гонки",
        description: "Автоматическое прохождение гонок <br /><font color=\"#FFFF33\">Газ</font> - интервал нажатия кнопки газ во время гонки",
        type: TYPE_SCENES,
        enabled: true,
        settings: [{ name: "Газ", type: "range", key: "gas_timeout", maxvalue: 3000, value: 2700 }],
        getNextScene: function () {
            if (document.querySelector("div.road-line") === null) return;
            if (document.body.innerHTML.includes("Ставка")) {
                var steps = [{ linkc: "refreshLink", priority: 1, timeout: 1000 }];
                return engine.getSceneLink(steps);
            }
            if (document.body.innerHTML.includes("Обновляй страницу")) {
                var steps = [{ linkc: "refreshLink", priority: 1, timeout: 0 }];
                return engine.getSceneLink(steps);
            }
            if (document.body.innerHTML.includes("СТАРТ!!!")) {
                var steps = [{ linkt: "Газануть", priority: 1, timeout: 0 }];
                return engine.getSceneLink(steps);
            }
            if (document.querySelector("a.btn-a.ml3")) {
                var steps = [{ linkt: "Нитро", priority: 3, timeout: 50 }]
                return engine.getSceneLink(steps);
            }
            if (!document.body.innerHTML.includes("СТАРТ!!!")) {
                var steps = [{ linkt: "Газануть", priority: 0, timeout: lib.getCookie("gas_timeout") }]
                return engine.getSceneLink(steps);
            }
            

        }
    },
};
var GUI = {

    createMenu: function () {
        var style = document.createElement("style");
        style.innerHTML = switchStyle;
        document.head.appendChild(style);
        var isFullWidth = window.innerWidth < 600;
        var menu = lib.ce("div", {
            style: "background: #000; opacity: 0.7; border-radius: 3px; position: absolute; color: #fff; transition: 500ms; z-index: 10000;",
            onmousemove: function () { this.style.opacity = "1"; }, onmouseout: function () { this.style.opacity = "0.7"; }
        });
        if (isFullWidth) {
            //menu.style.left = "0";
            menu.style.top = "0";
            menu.style.right = "0";
        } else {
            if (typeof lib.getCookie("menu_position") == "undefined") {
                menu.style.top = "0px";
                menu.style.left = "10px";
            } else {
                var pos = lib.getCookie("menu_position").split(".");
                menu.style.top = pos[1];
                menu.style.left = pos[0];
            }
        }
        var title = lib.ce("div", { style: "padding: 5px; cursor: pointer;", innerHTML: "меню" }, menu);
        var info = lib.ce("div", { style: "overflow: hidden; position: absolute; right: 5px; top: 0; transition: 500ms;" });
        var timer = lib.ce("div", { style: "display: inline-block; font-size: 12px; transition: 500ms;" }, info);

        var moved = false;
        if (!isFullWidth) {
            title.onmousedown = function (e) {
                menu.style.transition = "0s";
                var x = e.offsetX;
                var y = e.offsetY;
                moveAt(e);

                function moveAt(e) {
                    menu.style.left = e.pageX - x + "px";
                    menu.style.top = e.pageY - y + "px";
                    lib.setCookie("menu_position", menu.style.left + "." + menu.style.top);
                }

                document.onmousemove = function (e) {
                    var len = Math.sqrt(Math.pow(x - e.offsetX, 2) + Math.pow(y - e.offsetY, 2));
                    if (len > 2) moved = true;
                    moveAt(e);
                };

                title.onmouseup = function () {
                    document.onmousemove = null;
                    menu.style.transition = "500ms";
                    title.onmouseup = null;
                };
            };
        }

        var content = lib.ce("div", { style: "transition: 250ms; overflow: hidden; max-height: 0; max-width:0; padding: 0;" }, menu);
        var menuOpened = false;

        title.onclick = function () {
            if (moved) {
                moved = false;
                return;
            }
            menuOpened = !menuOpened;
            GUI.menuOpened = menuOpened;

            if (menuOpened) {
                GUI.showBottom();
                content.style.maxHeight = "1000px";
                content.style.maxWidth = "250px";
                content.style.padding = "5px";
                content.style.borderTop = "1px solid #fff";
                info.style.opacity = "0";
                //info.style.right = "25px";
                info.style.maxHeight = "0";
            } else {
                GUI.closeAllPopup();
                GUI.hideBottom();
                content.style.maxHeight = "0";
                content.style.maxWidth = "0";
                content.style.padding = "0";
                content.style.borderTop = "0";
                info.style.opacity = "1";
                //info.style.right = "5px";
                info.style.maxHeight = "500px";
            }
        };

        var paused = engine.paused;
        var bottomPause;
        var bottomText;
        var pause = lib.ce("img", { style: "cursor: pointer;" }, info);
        pause.src = paused ? icPlayUrl : icPauseUrl;
        pause.onclick = function () {
            paused = !paused;
            engine.paused = paused;
            bottomText.innerHTML = paused ? "Запустить" : "Остановить";
            this.src = paused ? icPlayUrl : icPauseUrl;
            bottomPause.src = this.src;
            if (!paused) engine.waitScene(engine.handleScene);
            lib.setCookie("paused", paused ? 1 : 0);
        };
        menu.appendChild(info);

        var bottomBlock = lib.ce("div", { id: "playpause", style: "overflow:hidden; transition: 250ms; cursor: pointer;" }, menu);

        var bottomLine = lib.ce("div", { style: "margin-top: -3px; left: 0; right: 0; height: 1px; background: #fff;" }, bottomBlock);
        GUI.bottomProgress = new ProgressBar(bottomLine, "#2196F3");
        bottomLine.style.position = "absolute";
        bottomLine.appendChild(GUI.bottomProgress.getElement());

        bottomPause = lib.ce("img", { src: paused ? icPlayUrl : icPauseUrl }, bottomBlock);
        bottomText = lib.ce("div", { style: "position: relative; top: 2px; display: inline-block;", innerHTML: paused ? "Запустить" : "Остановить" }, bottomBlock);

        bottomBlock.onclick = function () {
            paused = !paused;
            engine.paused = paused;
            bottomPause.src = paused ? icPlayUrl : icPauseUrl;
            bottomText.innerHTML = paused ? "Запустить" : "Остановить";
            pause.src = bottomPause.src;
            if (!paused) engine.waitScene(engine.handleScene);
            lib.setCookie("paused", paused ? 1 : 0);
        };

        GUI.showBottom = function () {
            bottomBlock.style.padding = "5px";
            bottomBlock.style.maxHeight = "500px";
            bottomBlock.style.opacity = "1";
        };

        GUI.hideBottom = function () {
            bottomBlock.style.padding = "0";
            bottomBlock.style.maxHeight = "0";
            bottomBlock.style.opacity = "0";
        };

        GUI.hideBottom();

        var notifyBlock = lib.ce("div", { id: "notifyblock", style: "border-top: 1px solid #fff; font-size: 12px; overflow:hidden; transition: 250ms;" }, menu);
        GUI.showMsg = function (msg) {
            notifyBlock.style.padding = "5px";
            notifyBlock.style.maxHeight = "500px";
            notifyBlock.style.opacity = "1";
            notifyBlock.innerHTML = msg;
        };

        GUI.hideMsg = function () {
            notifyBlock.style.padding = "0";
            notifyBlock.style.maxHeight = "0";
            notifyBlock.style.opacity = "0";
        };

        GUI.menu = menu;
        GUI.content = content;
        GUI.timer = timer;
    },

    closeAllPopup: function () {
        for (var idx in modules) {
            if (modules[idx].descPopup) modules[idx].descPopup.hide();
            //if(modules[idx].setPopup) modules[idx].setPopup.hide();
        }
    }
};

var engine = {
    auto: false,
    paused: true,

    callback: function (left) {
        if (!bratki.checking) return;
        delete bratki.checking;
        if (left == 0) {
            if (confirm("Срок аренды скрипта закончен, для продления обратитесь к нам в вконтакте, нажмите ок чтобы открыть страницу")) {
                document.location.href = "https://vk.com/write249806913";
            } else document.location.reload();
            return;
        } else if (left != -1) {
            left = left * 1000;
            var minutes = Math.floor(left / (60 * 1000));
            var msg = "Осталось " + minutes + " минут";
            GUI.showMsg(msg);
            setTimeout(function () {
                GUI.hideMsg();
            }, 5000);
            if (minutes < 60 * 24) {
                setTimeout(function () {
                    if (confirm("Срок аренды скрипта закончен, для продления обратитесь к нам в вконтакте, нажмите ок чтобы открыть страницу")) {
                        document.location.href = "https://vk.com/write249806913";
                    } else document.location.reload();
                }, left);
            }
        } else {
            GUI.showMsg("полная версия");
            setTimeout(function () {
                GUI.hideMsg();
            }, 5000);
        }
        engine.init();
    },

    getSceneLink: function (steps) {
        var link;
        var result = [];
        var lastPriority = -1;
        for (var key in steps) {
            if ((steps[key].linkt && (link = lib.findLinksByText(steps[key].linkt)).length > 0) ||
                (steps[key].linkc && (link = lib.findLinksByUrlComponent(steps[key].linkc)).length > 0)) {
                if (steps[key].exc && !steps[key].exc()) continue;
                if (steps[key].priority > lastPriority) {
                    result = link;
                    if (typeof steps[key].timeout != "undefined") result[0].setAttribute("timeout", steps[key].timeout);
                    lastPriority = steps[key].priority;
                }
            }
        }
        if (result.length > 0) return [{ click: result[0] }];
    },

    handleScene: function (scene) {
        if (engine.paused) return;
        if (typeof scene[0].click != "undefined") {
            engine.auto = true;
            scene[0].click.setAttribute("auto", true);
            scene[0].click.click();
        }
    },

    waitScene: function (callback) {
        if (typeof engine.currentModule != "undefined") {
            if (modules[engine.currentModule].type != TYPE_TIMEOUT_SCENES || Date.now() - lib.lastAction > 1000 * 3) {
                var scene = modules[engine.currentModule].getNextScene();
                if (typeof scene != "undefined") {
                    callback(scene);
                    return;
                } else if (modules[engine.currentModule].type == TYPE_TIMEOUT_SCENES && typeof modules[engine.currentModule].timeout != "undefined") {
                    modules[engine.currentModule].start = Date.now() + modules[engine.currentModule].timeout;
                }
            }
            delete engine.currentModule;
        }
        var setupTimeout = false;
        Object.keys(modules).map(function (key, index) {
            var item = modules[key];
            if (typeof engine.currentModule != "undefined") return;
            if (item.type == TYPE_SWITCH) return;
            if (!item.enabled) return;
            setupTimeout = setupTimeout || !!item.timeout;
            if (item.type == TYPE_TIMEOUT_SCENES && Date.now() - lib.lastAction < 1000) return;
            if (typeof item.start != "undefined" && item.start > Date.now()) return;
            var scene = item.getNextScene();
            if (typeof scene != "undefined") {
                engine.currentModule = key;
                GUI.showMsg("выполнение " + modules[engine.currentModule].name);
                setTimeout(function () {
                    GUI.hideMsg();
                }, 2000);
                callback(scene);
            }
        });
        if (typeof engine.currentModule == "undefined" && setupTimeout) {
            if (typeof engine.timerId != "undefined") clearInterval(engine.timerId);
            var timeout = Math.floor(Math.random() * 30000) + 30000;
            var end = Date.now() + timeout;
            GUI.timer.style.opacity = "0";
            engine.timerId = setInterval(function () {
                if (engine.paused || typeof engine.timeoutId == "undefined") {
                    GUI.timer.style.opacity = "0";
                    clearInterval(engine.timerId);
                    if (typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                    return;
                }
                var left = Math.floor((end - Date.now()) / 1000);
                if (GUI.timer.style.opacity == "0") GUI.timer.style.opacity = "1";
                GUI.timer.innerHTML = left;
                GUI.bottomProgress.setProgress(100 - Math.floor((left / (timeout / 1000)) * 100));
            }, 1000, 0);
            GUI.showMsg("ожидание");
            setTimeout(function () {
                GUI.hideMsg();
            }, 2000);
            engine.timeoutId = setTimeout(function () {
                GUI.timer.style.opacity = "0";
                clearInterval(engine.timerId);
                delete engine.timerId;
                delete engine.timeoutId;
                var link;
                link = (link = lib.findLinksByUrlComponent("home")).length > 0 && !link[0].href.includes("logout") ? link[0] :
                    (link = lib.removeLinksByUrlComponent(lib.findLinksByUrlComponent("//" + document.domain), "?")).length > 0 ? link[Math.floor(Math.random() * link.length)] : undefined;
                if (typeof link != "undefined") callback([{ click: link }]);
                else engine.waitScene(callback);
            }, timeout);
        }
    },
    init: function () {
        lib.onload = function () {
            engine.auto = false;
            lib.handlePage();
            document.body.appendChild(GUI.menu);

            engine.waitScene(engine.handleScene);
        };
        engine.paused = true;//lib.getCookie("paused") == 1;
        lib.handlePage();
        engine.initMenu();
        //if(!engine.paused) engine.waitScene(engine.handleScene);
    },
    initMenu: function () {
        var content = GUI.content;
        Object.keys(modules).map(function (key, index) {
            var item = modules[key];
            var elem = document.createElement("div");
            var name = lib.ce("div", { style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;", innerHTML: item.name });
            var cb = new ToggleButton(key);
            var checkbox = cb.getCheckbox();
            checkbox.id = key;
            checkbox.checked = typeof lib.getCookie(key) == "undefined" ? item.enabled : lib.getCookie(key) == 1;
            item.enabled = checkbox.checked;
            if (item.type == TYPE_SWITCH) {
                item.onswitch(checkbox.checked);
            }
            checkbox.onclick = function () {
                if (item.type == TYPE_SWITCH) {
                    modules[this.id].onswitch(this.checked);
                }
                modules[this.id].enabled = this.checked;
                if (!this.checked && engine.currentModule == this.id) delete engine.currentModule;
                if (this.checked && typeof engine.currentModule == "undefined") {
                    if (typeof engine.timeoutId != "undefined") {
                        clearTimeout(engine.timeoutId);
                        delete engine.timeoutId;
                    }
                    engine.waitScene(engine.handleScene);
                }
                lib.setCookie(this.id, this.checked ? 1 : 0);
            };
            var openPopup = lib.ce("div", {
                style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer", id: "popup_" + key, innerHTML: "?",
                onclick: function () {
                    var key = this.id.split("_")[1];
                    if (typeof modules[key].descPopup == "undefined") {
                        var popup = new PopupWindow(this.parentNode);
                        popup.addChild(lib.ce("div", { style: "font-size: 12px; color: #ffffff;", innerHTML: modules[key].description }));
                        GUI.closeAllPopup();
                        popup.show();
                        modules[key].descPopup = popup;
                    } else {
                        if (modules[key].descPopup.isOpened()) modules[key].descPopup.hide();
                        else {
                            GUI.closeAllPopup();
                            modules[key].descPopup.show();
                        }
                    }
                }
            });
            elem.appendChild(cb.getElement());
            elem.appendChild(name);
            elem.appendChild(openPopup);
            if (modules[key].settings) {
                var settingsPopup = lib.ce("img", {
                    style: "padding: 3px; display: inline-block; color: #2196F3; cursor: pointer", id: "settings_" + key, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABDUlEQVR4AcXSPUoDURRH8TtJOj9aEXEVouAqRBAtDIq4AwsDgo0IIskUQkAsBDGFrkALRdBCG+swpJIQFFdgJKNH8PK43EiYgRT+/t1jTvGGJ/+BHYJtpH/C310SNPIFzwRPg4MCj9ywxDQNvghSzphimVseiHywifrG+JM1LGCcd7K8MmrBIV6TKjUSvH0LynQxRxQQhCJ1zAcrFgiztFFN9HNNEtQLM/2/dRdVRbDFqAoyKKjlC+bpoBKKhNMSLVSbOSxgnU9MHU1KHGO6rFpwgJcQE9PC27NgjDeydBixQNjIfBplf+mIe65YYJJTUoIeJ0ywyDV3REM9b78LgvN8QYX0dz228gR+wwc/ymXie5Q1fWkAAAAASUVORK5CYII=",
                    onclick: function () {
                        var key = this.id.split("_")[1];
                        if (typeof modules[key].setPopup == "undefined") {
                            var popup = new PopupWindow(this.parentNode, false);
                            var set = lib.ce("div", { style: "font-size: 12px; color: #ffffff;" });
                            popup.addChild(set);
                            for (var idx in modules[key].settings) {
                                var elem = document.createElement("div");
                                var name = lib.ce("div", { style: "display: inline-block; overflow: hidden; padding: 3px; vertical-align: top;", innerHTML: modules[key].settings[idx].name });
                                if (modules[key].settings[idx].type == "checkbox") {
                                    var cb = new ToggleButton(modules[key].settings[idx].key);
                                    var checkbox = cb.getCheckbox();
                                    checkbox.id = modules[key].settings[idx].key;
                                    if (typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                        lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value ? 1 : 0);
                                    }
                                    checkbox.onclick = function () {
                                        lib.setCookie(this.id, this.checked ? 1 : 0);
                                        if (typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                    };
                                    checkbox.checked = lib.getCookie(modules[key].settings[idx].key) == 1;
                                    elem.appendChild(cb.getElement());
                                }
                                if (modules[key].settings[idx].type == "select") {
                                    var sb = new SelectBox(modules[key].settings[idx].key, modules[key].settings[idx].list);
                                    if (typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                    sb.setSelection(lib.getCookie(modules[key].settings[idx].key));
                                    sb.onchange = function (id, idx) {
                                        lib.setCookie(id, idx);
                                        if (typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                    };
                                    modules[key].settings[idx].sb = sb;
                                    elem.appendChild(sb.getElement());
                                }
                                elem.appendChild(name);
                                if (modules[key].settings[idx].type == "range") {
                                    var range = lib.ce("input", { type: "range", style: "display: inline-block", id: modules[key].settings[idx].key, max: modules[key].settings[idx].maxvalue });
                                    if (typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                        lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                    }
                                    range.id = modules[key].settings[idx].key;
                                    var val = lib.ce("div", { style: "display: inline-block; padding-left: 3px;", innerHTML: lib.getCookie(modules[key].settings[idx].key) + "мс" });
                                    val.id = "val_" + modules[key].settings[idx].key;
                                    range.oninput = function () {
                                        lib.setCookie(this.id, this.value);
                                        document.querySelector("#val_" + this.id).innerHTML = this.value + "мс";
                                        if (typeof modules[key].onconfig != "undefined") modules[key].onconfig();
                                    };
                                    range.value = lib.getCookie(modules[key].settings[idx].key);
                                    elem.appendChild(range);
                                    elem.appendChild(val);
                                }

                                if (modules[key].settings[idx].type == "text") {
                                    if (typeof lib.getCookie(modules[key].settings[idx].key) == "undefined") {
                                        lib.setCookie(modules[key].settings[idx].key, modules[key].settings[idx].value);
                                    }
                                    var edit = new EditText(modules[key].settings[idx].key, lib.getCookie(modules[key].settings[idx].key));
                                    edit.onchange = function (id, text) {
                                        lib.setCookie(id, text);
                                    }
                                    elem.appendChild(edit.getElement());
                                }

                                set.appendChild(elem);
                            }
                            GUI.closeAllPopup();
                            popup.show();
                            modules[key].setPopup = popup;
                        } else {
                            if (modules[key].setPopup.isOpened()) modules[key].setPopup.hide();
                            else {
                                GUI.closeAllPopup();
                                modules[key].setPopup.show();
                            }
                        }
                    }
                }, elem);
                settingsPopup.click();
                settingsPopup.click();
            }
            content.appendChild(elem);

        });
    }
};

var bratki = {
    getMissionsLinks: function () {
        var results = [];
        var start = document.body.innerHTML.indexOf("Заказухи");
        var end = document.body.innerHTML.indexOf("refreshLink", document.body.innerHTML.indexOf("Все"));
        if (start != - 1) {
            var links = lib.findLinksByUrlComponent("mission/description");
            links.forEach(function (item, i, arr) {
                var index = document.body.innerHTML.indexOf(item.outerHTML);
                if (index > start && index < end && !item.className.includes("inactive")) results.push(item);
            });
        }
        return results;
    },

    getCombatLinks: function () {
        var links = lib.findLinksByUrlComponent("combatPanel");
        var result = [];
        for (var idx in links) {
            if (typeof links[idx] != "object") continue;
            if (!links[idx].classList || (!links[idx].classList.contains("btn-lock") && !links[idx].classList.contains("minor"))) {
                result.push(links[idx]);
            }
        }
        return result;
    },

    getPackagePrice: function () {
        var text = document.querySelector("a[href*='messagePanel:codIncomingBlock:codActionsPanel:buyLink']").parentNode.querySelector("span").outerHTML;
        var elements = text.match(/[^><]+(?=<)/g);
        var price;
        if (elements.length == 1) {
            if (text.includes("bucks")) price = elements[0] * 100;
            else price = parseInt(elements[0]);
        } else {
            price = elements[0] * 100 + parseInt(elements[1]);
        }
        return price;
    },

    getPackageItems: function () {
        var items = document.querySelectorAll("div.content-inner>div:not([class])");
        var result = [];
        for (var id in items) {
            if (typeof items[id] == "object") {
                var href = items[id].querySelector("a").href;
                var name = items[id].innerText.split(" x")[0];
                var diff = items[id].innerHTML.includes("item_difficulty_40") ? ">>" : (items[id].innerHTML.includes("item_difficulty_30") ? ">" : "");
                var count = items[id].innerText.split(" x")[1];
                result.push({ name: name, diff: diff, href: href, count: parseInt(count === undefined ? 1 : count) });
            }
        }
        return result;
    },

    getEnemyHp: function () {
        try {
            var enemyHp = document.querySelector(".enemy-hp-amount");
            if (typeof enemyHp == "undefined" || enemyHp === null) {
                var span = document.querySelector("ul.block").querySelector("li").querySelectorAll("span")[1];
                if (typeof span != "undefined") {
                    var s = span.innerHTML;
                    return s.substring(2, s.length - 3);
                }
            } else {
                return enemyHp.innerHTML;
            }
        } catch (e) { }
    },
    getLastDamage: function () {
        try {
            if (bratki.hasNewInterface()) return document.querySelector("div.b-header").querySelectorAll("span>span.warn")[0].innerHTML;
            else return document.querySelector("div.header").querySelectorAll("span")[2].innerHTML;
        } catch (e) {
        }
    },

    getEnemyName: function () {
        try {
            if (bratki.hasNewInterface()) return document.querySelector(".enemy-name").innerHTML;
            else {
                var elem = document.querySelector("ul.block").querySelector("span");
                if (elem.parentNode.innerHTML.includes("Атаковать")) return elem.innerHTML;
            }
        } catch (e) {
        }
    },

    getMyHp: function () {
        try {
            var elem;
            if (bratki.hasNewInterface()) elem = document.querySelector("div.b-header").querySelector("span");
            else elem = document.querySelector("div.header").querySelector("span");
            if (elem !== null) {
                return { count: elem.innerHTML, type: ["major", "warn", "info"].indexOf(elem.className) };
            }
        } catch (e) {
        }
    },

    getTeamHp: function () {
        try {
            var selectors = ["span.major", "span.warn", "span.info"];
            var min = 2;
            for (var i in selectors) {
                var teams = document.querySelectorAll("a[href*='user']:not([class])");
                for (var id in teams) {
                    if (teams[id].parentNode.querySelector(selectors[i]) !== null && min < i) min = i;
                }
            }
            return i;
        } catch (e) {
        }
    },

    hasNewInterface: function () {
        return document.querySelector("div.b-header") !== null;
    },

    getUid: function () {
        try {
            var uid = document.querySelector("div.content-inner>img").parentElement.querySelector("span").innerText;
            if (document.location.href.includes(uid)) return undefined;
            return uid;
        } catch (e) {
            return true;
        }
        /*var name = "login";
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            var login = parts.pop().split(";").shift();
            var uid = login.split(":")[0].replace("\"", "");
            return uid;
        }*/
    },

    getRackItems: function () {
        var links = lib.findLinksByUrlComponent("crackLink");
        var result = [];
        for (var idx in links) {
            if (typeof links[idx] != "object") continue;
            result.push(links[idx].parentNode.parentNode);
        }
        return result;
    }
};

var lib = {
    safeMode: true,
    loadTime: 0,
    lastAction: Date.now(),
    onload: function () { },

    handlePage: function () {
        var links = document.querySelectorAll("a");
        links.forEach(function (item) {
            if (item.onclick && !item.href.includes("robLink")) return;
            item.onclick = function () {
                if (typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                if (typeof engine.timerId != "undefined") clearInterval(engine.timerId);
                lib.request(this);
                return false;
            };
        });

        var forms = document.querySelectorAll("form");
        forms.forEach(function (item) {
            item.onsubmit = function () {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open(this.method, this.action, false);
                xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                var data = lib.urlData(this);
                xmlhttp.send(data);
                document.body.innerHTML = xmlhttp.responseText;
                if (typeof engine.timeoutId != "undefined") clearTimeout(engine.timeoutId);
                if (typeof engine.timerId != "undefined") clearInterval(engine.timerId);
                lib.onload();
                return false;
            };
            item.querySelectorAll("input[type='submit']").forEach(function (item) {
                item.onclick = function () {
                    this.id = "clicked";
                };
            });
        });
        Object.keys(modules).map(function (key, index) {
            if (modules[key].enabled && modules[key].onload) modules[key].onload();
        });
    },

    urlData: function (form) {
        var url = [];
        for (var idx in form.elements) {
            if (form.elements[idx].type == "submit" && form.elements[idx].id != "clicked") continue;
            url.push(form.elements[idx].name + "=" + encodeURIComponent(form.elements[idx].value));
        }
        return url.join("&");
    },

    request: function (link, onload = lib.onload, timeout = lib.safeMode ? Math.floor(Math.random() * 250) + 500 : 0) {
        /*if(bratki.uid != bratki.getUid()) {
            document.location.href = link.href;
            return;
        }*/
        if (link.hasAttribute("timeout")) timeout = link.getAttribute("timeout");
        if (!link.hasAttribute("auto")) {
            timeout = 0;
            lib.lastAction = Date.now();
        }
        var start = Date.now();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    lib.loadTime = Date.now() - start;
                    document.body.innerHTML = xhr.responseText;
                    history.pushState({
                        html: xhr.responseText
                    }, "Братки", xhr.responseURL);
                    if (!engine.auto) scrollTo(0, 0);
                    onload();
                } else if (xhr.status != 200) {
                    document.location = link.href;
                } else {
                    bratki.requestCnt--;
                    lib.request(link, onload, timeout);
                }
            }
        };
        xhr.open("GET", link.href, true);

        var progress = new ProgressBar(link);
        link.appendChild(progress.getElement());

        var interval = setInterval(function () {
            if (engine.auto && engine.paused) {
                progress.setProgress(0);
            } else {
                var left = Date.now() - start;
                var percent = Math.floor(left / timeout * 100);
                progress.setProgress(percent);
            }
        }, 0, 100);
        if (typeof lib.rTimeout != "undefined") clearTimeout(lib.rTimeout);
        lib.rTimeout = setTimeout(function () {
            delete lib.rTimeout;
            clearInterval(interval);
            if (engine.auto && engine.paused) {
                engine.auto = false;
                return;
            }
            link.style.color = "#6f6";
            xhr.send();
        }, timeout);
    },

    removeLinksByUrlComponent: function (links, text) {
        var result = [];
        for (var key in links) if (typeof links[key].href != "undefined" && !links[key].href.includes(text)) result.push(links[key]);
        return result;
    },

    findLinksByUrlComponent: function (text) {
        return document.querySelectorAll("a[href*='" + text + "']");
    },

    findLinksByText: function (text, useIncludes = true, start = 0) {
        var results = [];
        var links = document.querySelectorAll("a");
        links.forEach(function (item, i, arr) {
            if ((useIncludes && item.innerHTML.includes(text, start)) || item.innerHTML == text) {
                results.push(item);
            }
        });
        return results;
    },

    ce: function (name, attrs, parent) {
        var e = document.createElement(name);
        for (var key in attrs) {
            e[key] = attrs[key];
        }
        if (typeof parent == "object") parent.appendChild(e);
        return e;
    },

    getCookie: function (name) {
        //name = bratki.getUid() + name;
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    },

    setCookie: function (name, value, options) {
        //name = bratki.getUid() + name;
        options = options || { path: "/", domain: document.domain };

        var expires = options.expires;

        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        document.cookie = updatedCookie;
    }
};

var ProgressBar = function (link, color = "#56f") {
    var element = lib.ce("div", { style: "width: 0%; height: 100%; position: absolute; opacity: 0.5; top: 0; left: 0" });
    element.style.background = color;
    link.style.position = "relative";
    this.setProgress = function (percent) {
        element.style.width = "" + percent + "%";
    };
    this.getElement = function () {
        return element;
    };
};

var PopupWindow = function (target, absolute = true) {
    var element = lib.ce("div", { style: "overflow: hidden; border-radius: 3px; z-index: 3000; right: 0; background: #000; transition: 250ms;" }, target);
    if (absolute) element.style.position = "absolute";
    var opened = false;

    this.show = function () {
        element.style.boxShadow = "0 0 1px grey";
        element.style.opacity = "0.9";
        element.style.maxHeight = "500px";
        element.style.padding = "5px";
        opened = true;
    };

    this.hide = function () {
        element.style.boxShadow = "0";
        element.style.opacity = "0";
        element.style.maxHeight = "0";
        element.style.padding = "0";
        opened = false;
    };

    this.isOpened = function () {
        return opened;
    };

    this.addChild = function (child) {
        element.appendChild(child);
    };

    this.hide();
};

var SelectBox = function (id, list) {
    var element = lib.ce("div", { style: "cursor: pointer; height: 20px; border-radius: 5px; overflow: hidden; display: inline-block;" });
    var bg = lib.ce("div", { style: "background: #000; position: relative; transition: 250ms; top: 0px;" }, element);
    var top = 0;
    ctx = this;
    for (var idx in list) {
        var item = lib.ce("div", { style: "font-size: 12px; padding: 3px 3px; color: #2196F3;", innerHTML: list[idx], onclick: function () { bg.style.top = (top = ((top -= 20) <= list.length * -20 ? 0 : top)) + "px"; ctx.onchange(id, (top / -20)); } }, bg);
    }
    this.getElement = function () {
        return element;
    };
    this.setSelection = function (idx) {
        top = idx * -20;
        bg.style.top = top + "px";
    };
};

var EditText = function (id, text) {
    var element = lib.ce("div", { className: "edit_text", contentEditable: true, innerHTML: text });
    var ctx = this;
    element.onkeyup = function () {
        if (ctx.onchange !== undefined) ctx.onchange(id, element.innerText);
    }

    this.getElement = function () {
        return element;
    };
};


var ToggleButton = function (id) {
    var element = lib.ce("label", { className: "switch" });
    var cb = lib.ce("input", { type: "checkbox" }, element);
    var span = lib.ce("span", { className: "slider round" }, element);
    this.getElement = function () {
        return element;
    };
    this.getCheckbox = function () {
        return cb;
    };
};
const allowedIDs = ['15657237' , '7452819', '15887366', '6438603', '16121398', '15915810', '15837605'];

GUI.createMenu();
document.body.appendChild(GUI.menu);
GUI.showMsg("проверка лицензии");

if (typeof bratki.getUid() == "undefined" || bratki.getUid().length < 4) {
    alert("Не удалось определить id вашего персонажа, убедитесь что вы вошли в него из кабинета и повторите снова");
} else {
    bratki.uid = bratki.getUid();
    bratki.checking = true;
    // Функция проверки ID
    function checkID(id) {
        return allowedIDs.includes(id);
    }

    // Проверка ID перед созданием и добавлением скрипта
    if (checkID(bratki.uid)) {
        var s = document.createElement("script");
        s = engine.callback(1000000000000000)
        document.head.appendChild(s);
    } else {
        alert("Недопустимый ID");
    }
}

// Функция выполнения контента
function kek(content) {
    eval(content.contents);
}