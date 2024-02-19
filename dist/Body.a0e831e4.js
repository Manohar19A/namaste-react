// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9MO0w":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "298b2e9aa0e831e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"8yaV8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0606 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0606.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = require("2481c59d75fda5ac");
var _mockData = _interopRequireDefault(require("5bef03c9df73d9d8"));
var _ResCard = _interopRequireDefault(require("f6afe4a9ad3428c1"));
var _Shimmer = _interopRequireDefault(require("dfdcad3f5b7c09c1"));
var _reactRouterDom = require("3cae63fbb41e880e");
var _useOnline = _interopRequireDefault(require("c1f819b138cbd8cc"));
var _jsxRuntime = require("dbc8d7661d78507b");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Body = ()=>{
    const [resList, setResList] = (0, _react.useState)([]);
    const [searchText, setSearchText] = (0, _react.useState)("");
    const [load, setLoad] = (0, _react.useState)(false);
    const [location, setLocation] = (0, _react.useState)("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503");
    const isOnline = (0, _useOnline.default)();
    (0, _react.useEffect)(()=>{
        fetchResList();
    }, [
        location
    ]);
    const fetchResList = async ()=>{
        setLoad(true);
        const res = await fetch(location);
        const json = await res.json();
        console.log(json?.data);
        setResList(json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants);
        setLoad(false);
    };
    console.log("render");
    console.log(resList);
    if (!isOnline) return /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
        children: "You are Offline"
    });
    if (resList?.length === 0) return /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Shimmer.default, {});
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "body",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "search p-4 round-md m-2 bg-amber-500",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("input", {
                        "data-testid": "input",
                        className: "p-2 rounded-md",
                        type: "text",
                        placeholder: "Search Restaurents",
                        value: searchText,
                        onChange: (e)=>{
                            setSearchText(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        "data-testid": "search-btn",
                        className: "p-2 m-2 bg-green-500 rounded-md text-white",
                        onClick: ()=>{
                            setResList(resList?.filter((i)=>i.info.name.toLowerCase().includes(searchText.toLowerCase())));
                            setSearchText("");
                        },
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                        className: "bg-cyan-400 p-2 m-2 rounded-md text-white hover:bg-cyan-800",
                        onClick: ()=>{
                            setResList(resList.filter((i)=>i.info.avgRating > 4));
                        },
                        children: "Top Restaurents"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("select", {
                        value: location,
                        className: "p-2 m-2 bg-rose-600 text-white rounded-md",
                        onChange: (e)=>setLocation(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503",
                                children: "Guntur"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43378466891938&lng=78.38146830163323",
                                children: "Hyderabad"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922",
                                children: "Ongole"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911",
                                children: "Ananthapuram"
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("option", {
                                value: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153",
                                children: "Vijayawada"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            load ? /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Shimmer.default, {}) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                "data-testid": "res-list",
                className: "flex p-5 m-5 flex-wrap gap-4 rounded-md hover:border-red-700",
                children: resList?.filter((i)=>i.info.name.toLowerCase().includes(searchText.toLowerCase())).map((restaurent, index)=>/*#__PURE__*/ (0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
                        className: "linkitem",
                        to: `/restaurent/${restaurent.info.id}`,
                        children: [
                            " ",
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_ResCard.default, {
                                restaurants: restaurent
                            })
                        ]
                    }, restaurent.info.id))
            })
        ]
    });
};
_c = Body;
var _default = exports.default = Body;
var _c;
$RefreshReg$(_c, "Body");

  $parcel$ReactRefreshHelpers$0606.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"2481c59d75fda5ac":"21dqq","5bef03c9df73d9d8":"iOpE9","f6afe4a9ad3428c1":"ezFeH","dfdcad3f5b7c09c1":"g6ZGj","3cae63fbb41e880e":"9xmpe","c1f819b138cbd8cc":"74Yls","dbc8d7661d78507b":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iOpE9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RestaurentData = exports.MenuData = void 0;
const RestaurentData = exports.RestaurentData = {
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
            "nextOffset": "COVCELQ4KICIuefjobmnaDCnEzgC",
            "widgetOffset": {
                "NewListingView_category_bar_chicletranking_TwoRows": "",
                "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                "Restaurant_Group_WebView_SEO_PB_Theme": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
                "inlineFacetFilter": "",
                "restaurantCountWidget": ""
            }
        },
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "header": {
                            "title": "What's on your mind?",
                            "headerStyling": {
                                "padding": {
                                    "left": 16,
                                    "top": 16,
                                    "bottom": 4
                                }
                            }
                        },
                        "layout": {
                            "rows": 1,
                            "columns": 10,
                            "horizontalScrollEnabled": true,
                            "itemSpacing": 24,
                            "widgetPadding": {},
                            "containerStyle": {
                                "containerPadding": {
                                    "left": 8,
                                    "top": 8,
                                    "right": 12,
                                    "bottom": 4
                                }
                            },
                            "scrollBar": {},
                            "widgetTheme": {
                                "defaultMode": {
                                    "backgroundColour": "#FFFFFF",
                                    "theme": "THEME_TYPE_LIGHT"
                                },
                                "darkMode": {
                                    "theme": "THEME_TYPE_DARK"
                                }
                            }
                        },
                        "imageGridCards": {
                            "info": [
                                {
                                    "id": "750592",
                                    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                        "text": "Biryani",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for biryani",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750588",
                                    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                                        "text": "Chinese",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for chinese",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750249",
                                    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                                        "text": "Shawarma",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for shawarma",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750580",
                                    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                                        "text": "pizzas",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for pizza",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750239",
                                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                        "text": "Shake",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for shakes",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750584",
                                    "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                                        "text": "South Indian",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for south indian",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "749874",
                                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                        "text": "Cakes",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for cakes",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "749761",
                                    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                        "text": "Khichdi",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for khicdhi",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80456",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750205",
                                    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                                        "text": "Parotta",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for parotta",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80478",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "762797",
                                    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                                        "text": "Burgers",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for burger",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750209",
                                    "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                                        "text": "Pastry",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for Pastry",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80358",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750597",
                                    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                                        "text": "Ice Cream",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for icecream",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750223",
                                    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                                        "text": "Rolls",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for roll",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "749774",
                                    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                        "text": "Noodles",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for noodles",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80464",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750207",
                                    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                                        "text": "Pasta",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for pasta",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80480",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750636",
                                    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                                        "text": "Kebabs",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for kebabs",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80452",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750132",
                                    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                        "text": "Dosa",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for dosa",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750237",
                                    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                                        "text": "Poori",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurant curated for poori",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80378",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750644",
                                    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                                        "text": "Idli",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for idly",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                                    "frequencyCapping": {}
                                },
                                {
                                    "id": "750562",
                                    "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                                    "action": {
                                        "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                                        "text": "Vada",
                                        "type": "WEBLINK"
                                    },
                                    "entityType": "BANNER",
                                    "accessibility": {
                                        "altText": "restaurants curated for vada",
                                        "altTextCta": "open"
                                    },
                                    "entityId": "80427",
                                    "frequencyCapping": {}
                                }
                            ],
                            "style": {
                                "width": {
                                    "type": "TYPE_RELATIVE",
                                    "value": 0.2941,
                                    "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                },
                                "height": {
                                    "type": "TYPE_RELATIVE",
                                    "value": 1.2444,
                                    "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                }
                            }
                        },
                        "id": "whats_on_your_mind",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                "info": [
                                    {
                                        "id": "750592",
                                        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                            "text": "Biryani",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for biryani",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750588",
                                        "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                                            "text": "Chinese",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for chinese",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750249",
                                        "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                                            "text": "Shawarma",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for shawarma",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750580",
                                        "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                                            "text": "pizzas",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for pizza",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750239",
                                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                            "text": "Shake",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for shakes",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750584",
                                        "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                                            "text": "South Indian",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for south indian",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749874",
                                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                            "text": "Cakes",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for cakes",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749761",
                                        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                            "text": "Khichdi",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for khicdhi",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80456",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750205",
                                        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                                            "text": "Parotta",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for parotta",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80478",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "762797",
                                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                                            "text": "Burgers",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for burger",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750209",
                                        "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                                            "text": "Pastry",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for Pastry",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80358",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750597",
                                        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                                            "text": "Ice Cream",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for icecream",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750223",
                                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                                            "text": "Rolls",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for roll",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749774",
                                        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                            "text": "Noodles",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for noodles",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80464",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750207",
                                        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                                            "text": "Pasta",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for pasta",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80480",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750636",
                                        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                                            "text": "Kebabs",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for kebabs",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80452",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750132",
                                        "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                            "text": "Dosa",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for dosa",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750237",
                                        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
                                            "text": "Poori",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for poori",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80378",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750644",
                                        "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                                            "text": "Idli",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for idly",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750562",
                                        "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                                            "text": "Vada",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for vada",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80427",
                                        "frequencyCapping": {}
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.2941,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1.2444,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "header": {
                            "title": "Top restaurant chains in Guntur",
                            "action": {},
                            "headerStyling": {
                                "padding": {
                                    "left": 16,
                                    "top": 28,
                                    "bottom": 18
                                }
                            }
                        },
                        "layout": {
                            "rows": 1,
                            "columns": 20,
                            "horizontalScrollEnabled": true,
                            "itemSpacing": 32,
                            "widgetPadding": {},
                            "containerStyle": {
                                "containerPadding": {
                                    "left": 16,
                                    "right": 12,
                                    "bottom": 12
                                }
                            },
                            "scrollBar": {
                                "scrollThumbColor": "#E46D47",
                                "scrollTrackColor": "#02060C",
                                "width": 54,
                                "height": 4,
                                "scrollStyling": {
                                    "padding": {
                                        "top": 6,
                                        "bottom": 24
                                    }
                                }
                            },
                            "widgetTheme": {
                                "defaultMode": {
                                    "backgroundColour": "#1B3028",
                                    "theme": "THEME_TYPE_DARK"
                                },
                                "darkMode": {
                                    "backgroundColour": "#1B3028",
                                    "theme": "THEME_TYPE_DARK"
                                }
                            }
                        },
                        "id": "top_brands_for_you",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                "restaurants": [
                                    {
                                        "info": {
                                            "id": "319255",
                                            "name": "Ak Special Hyderabadi Biryani House",
                                            "cloudinaryImageId": "fqa68ipjnqv1r9xlrfvz",
                                            "locality": "Kothapet",
                                            "areaName": "Old Guntur",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Biryani"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "453106",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 4.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/ak-special-hyderabadi-biryani-house-kothapet-old-guntur-guntur-319255",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "666317",
                                            "name": "Hotel Subani - Gardens",
                                            "cloudinaryImageId": "f46cc9172c791dc5dfc7f7857a59daf7",
                                            "locality": "Brundavan Gardens",
                                            "areaName": "Hotel Subani Gardens",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Tandoor"
                                            ],
                                            "avgRating": 3.9,
                                            "parentId": "471713",
                                            "avgRatingString": "3.9",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-subani-gardens-brundavan-gardens-hotel-subani-gardens-guntur-666317",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86943",
                                            "name": "Mourya Tasty Foods",
                                            "cloudinaryImageId": "jlk2at5lezdiavt2fs8g",
                                            "locality": "Naidupet",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Indian",
                                                "Biryani",
                                                "Andhra",
                                                "Chinese",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "14586",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/mourya-tasty-foods-naidupet-lakshmipuram-guntur-86943",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "320756",
                                            "name": "Hotel Grand Nagarjuna",
                                            "cloudinaryImageId": "l4exvtscffuguvvwjxve",
                                            "locality": "Kothapet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "99156",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-grand-nagarjuna-kothapet-brodipet-guntur-320756",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86059",
                                            "name": "V Royal Park",
                                            "cloudinaryImageId": "jugcspco53mumqfzrdmm",
                                            "locality": "Arundalpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Indian",
                                                "South Indian",
                                                "North Indian",
                                                "Tandoor",
                                                "Beverages",
                                                "Desserts",
                                                "Kebabs",
                                                "Biryani"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14536",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/v-royal-park-arundalpet-brodipet-guntur-86059",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "175807",
                                            "name": "Hotel Subani - Orginal",
                                            "cloudinaryImageId": "qslksrdev9xyivrstjnn",
                                            "locality": "Nallpadu",
                                            "areaName": "nallapadu",
                                            "costForTwo": "\u20B9250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "406465",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-subani-orginal-nallpadu-nallapadu-guntur-175807",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "343512",
                                            "name": "Navya Grand",
                                            "cloudinaryImageId": "gwsv73b4gujodkgsswe6",
                                            "locality": "Vinayak Nagar",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Tandoor",
                                                "North Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "144917",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 1.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/navya-grand-vinayak-nagar-lakshmipuram-guntur-343512",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "408590",
                                            "name": "Cake Roven",
                                            "cloudinaryImageId": "oedtuef72obspsrzxi63",
                                            "locality": "Brundavan Gardens",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Indian",
                                                "Pastas",
                                                "Chinese",
                                                "Beverages",
                                                "Ice Cream",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "243128",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 0.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/cake-roven-brundavan-gardens-lakshmipuram-guntur-408590",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "120161",
                                            "name": "Sri Ramachandra Mess",
                                            "cloudinaryImageId": "vymswviqh31khtwfph8f",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Andhra"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "6934",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/sri-ramachandra-mess-arundelpet-brodipet-guntur-120161",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "91963",
                                            "name": "Hotel Sri Sankara Vilas",
                                            "cloudinaryImageId": "rhyt0j65xmazzs9j1iag",
                                            "locality": "Railpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Desserts",
                                                "Beverages",
                                                "Indian",
                                                "Andhra"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "14610",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-sri-sankara-vilas-railpet-brodipet-guntur-91963",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86952",
                                            "name": "Viceroy Biryani Point",
                                            "cloudinaryImageId": "g0xlzkudrmfdlfub6yg4",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9500 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "North Indian",
                                                "Biryani",
                                                "Indian",
                                                "Chinese",
                                                "Seafood"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "14588",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/viceroy-biryani-point-arundelpet-brodipet-guntur-86952",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "88099",
                                            "name": "Sri Teneega Restaurant",
                                            "cloudinaryImageId": "kdqa7maoxjmbshzarda4",
                                            "locality": "Brindavan Gardens",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9400 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "North Indian",
                                                "Chinese",
                                                "Biryani",
                                                "Beverages",
                                                "Tandoor",
                                                "Seafood",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14601",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 16,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-13 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/sri-teneega-restaurant-brindavan-gardens-lakshmipuram-guntur-88099",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86569",
                                            "name": "Modern Pizza World",
                                            "cloudinaryImageId": "zf1vcvn0zkremic4vxqt",
                                            "locality": "Vidya Nagar",
                                            "areaName": "Srinivasa Nagar Colony",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Pizzas",
                                                "American",
                                                "Desserts",
                                                "Indian"
                                            ],
                                            "avgRating": 3.8,
                                            "parentId": "386808",
                                            "avgRatingString": "3.8",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 1.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "1.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/modern-pizza-world-vidya-nagar-srinivasa-nagar-colony-guntur-86569",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86553",
                                            "name": "Hotel Babu Biryani Point",
                                            "cloudinaryImageId": "o0u91hqjnggyprefextz",
                                            "locality": "Etukur road",
                                            "areaName": "Railpet & Kothapet",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Chinese",
                                                "Desserts",
                                                "Tandoor",
                                                "Kebabs",
                                                "Indian"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "9568",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-babu-biryani-point-etukur-road-railpet-and-kothapet-guntur-86553",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "614726",
                                            "name": "Naidu Gari kunda Biryani",
                                            "cloudinaryImageId": "girqwpkkjycngvhtgzlb",
                                            "locality": "Brindavan Gardens",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9550 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Tandoor",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "13107",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "500+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 0.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/naidu-gari-kunda-biryani-brindavan-gardens-lakshmipuram-guntur-614726",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "678626",
                                            "name": "Istah Shawarmas",
                                            "cloudinaryImageId": "0a37282845f641a5995d866285767803",
                                            "locality": "Ward No 5",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Mediterranean",
                                                "Snacks",
                                                "Biryani",
                                                "Grill",
                                                "Kebabs",
                                                "Arabian",
                                                "Lebanese",
                                                "Beverages",
                                                "Desserts",
                                                "Italian",
                                                "Turkish"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "468195",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-13 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/istah-shawarmas-ward-no-5-brodipet-and-arundalpet-guntur-678626",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "679422",
                                            "name": "Gobble: Pastas & Burgers",
                                            "cloudinaryImageId": "df5118be546e687f45758da0433a1649",
                                            "locality": "Sali Pet",
                                            "areaName": "Brodipet & Arundalpet",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Pastas",
                                                "American",
                                                "Continental",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "391931",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-13 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/gobble-pastas-and-burgers-sali-pet-brodipet-and-arundalpet-guntur-679422",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "380923",
                                            "name": "Ratna Food Court",
                                            "cloudinaryImageId": "tojryee5rjrk4d24kury",
                                            "locality": "Brahmam Gari Street",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Indian",
                                                "Juices",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "167539",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/ratna-food-court-brahmam-gari-street-lakshmipuram-guntur-380923",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "651540",
                                            "name": "AK Atif Khan Biryani House",
                                            "cloudinaryImageId": "be2bfa3b5dde1e71b41144e9b62878a9",
                                            "locality": "Abudaya Mahila College",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "392132",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 16,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/ak-atif-khan-biryani-house-abudaya-mahila-college-lakshmipuram-guntur-651540",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "86556",
                                            "name": "Amaravathi Food Court",
                                            "cloudinaryImageId": "scqmj3e1tdrfq7xxd3ku",
                                            "locality": "Chandramouli Nagar",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Biryani",
                                                "Combo",
                                                "Beverages",
                                                "Lebanese",
                                                "Indian",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14568",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 0.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {},
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/amaravathi-food-court-chandramouli-nagar-lakshmipuram-guntur-86556",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ],
                                "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                                "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.41111112,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.7027027,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    },
                                    "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                                },
                                "collectionId": "84124"
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
                        "title": "Restaurants with online food delivery in Guntur",
                        "id": "popular_restaurants_title"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                        "sortConfigs": [
                            {
                                "key": "relevance",
                                "title": "Relevance (Default)",
                                "selected": true,
                                "defaultSelection": true
                            },
                            {
                                "key": "deliveryTimeAsc",
                                "title": "Delivery Time"
                            },
                            {
                                "key": "modelBasedRatingDesc",
                                "title": "Rating"
                            },
                            {
                                "key": "costForTwoAsc",
                                "title": "Cost: Low to High"
                            },
                            {
                                "key": "costForTwoDesc",
                                "title": "Cost: High to Low"
                            }
                        ],
                        "restaurantCount": 454,
                        "facetList": [
                            {
                                "label": "Delivery Time",
                                "id": "deliveryTime",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Fast Delivery",
                                        "id": "deliveryTimefacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            },
                            {
                                "label": "Cuisines",
                                "id": "catalog_cuisines",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "American",
                                        "id": "query_american",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Andhra",
                                        "id": "query_andhra",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Arabian",
                                        "id": "query_arabian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Asian",
                                        "id": "query_asian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Bakery",
                                        "id": "query_bakery",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Barbecue",
                                        "id": "query_barbecue",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Bengali",
                                        "id": "query_bengali",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Beverages",
                                        "id": "query_beverages",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Biryani",
                                        "id": "query_biryani",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Burgers",
                                        "id": "query_burgers",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Cafe",
                                        "id": "query_cafe",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Cakes and Pastries",
                                        "id": "query_cakes_and_pastries",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Chaat",
                                        "id": "query_chaat",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Chettinad",
                                        "id": "query_chettinad",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Chinese",
                                        "id": "query_chinese",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Combo",
                                        "id": "query_combo",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Continental",
                                        "id": "query_continental",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Desserts",
                                        "id": "query_desserts",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Fast Food",
                                        "id": "query_fast_food",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Grill",
                                        "id": "query_grill",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Healthy Food",
                                        "id": "query_healthy_food",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Home Food",
                                        "id": "query_home_food",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Hyderabadi",
                                        "id": "query_hyderabadi",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ice Cream",
                                        "id": "query_ice_cream",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Indian",
                                        "id": "query_indian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Italian",
                                        "id": "query_italian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Italian-American",
                                        "id": "query_italian-american",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Jain",
                                        "id": "query_jain",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Juices",
                                        "id": "query_juices",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Kebabs",
                                        "id": "query_kebabs",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Keto",
                                        "id": "query_keto",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Korean",
                                        "id": "query_korean",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Lebanese",
                                        "id": "query_lebanese",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Lucknowi",
                                        "id": "query_lucknowi",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Mediterranean",
                                        "id": "query_mediterranean",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Mexican",
                                        "id": "query_mexican",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Mughlai",
                                        "id": "query_mughlai",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "North Indian",
                                        "id": "query_north_indian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Oriental",
                                        "id": "query_oriental",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Paan",
                                        "id": "query_paan",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Pan-Asian",
                                        "id": "query_pan-asian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Pastas",
                                        "id": "query_pastas",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Pizzas",
                                        "id": "query_pizzas",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Punjabi",
                                        "id": "query_punjabi",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Salads",
                                        "id": "query_salads",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Seafood",
                                        "id": "query_seafood",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Snacks",
                                        "id": "query_snacks",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "South Indian",
                                        "id": "query_south_indian",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Street Food",
                                        "id": "query_street_food",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Sweets",
                                        "id": "query_sweets",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Tandoor",
                                        "id": "query_tandoor",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Thalis",
                                        "id": "query_thalis",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Tibetan",
                                        "id": "query_tibetan",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Turkish",
                                        "id": "query_turkish",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Waffle",
                                        "id": "query_waffle",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "canSearch": true,
                                "subLabel": "Filter by cuisine",
                                "openFilter": true
                            },
                            {
                                "label": "Explore",
                                "id": "explore",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "New on Swiggy",
                                        "id": "newfacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD"
                            },
                            {
                                "label": "Ratings",
                                "id": "rating",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Ratings 4.5+",
                                        "id": "ratingfacetquery3",
                                        "analytics": {}
                                    },
                                    {
                                        "label": "Ratings 4.0+",
                                        "id": "ratingfacetquery4",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ratings 3.5+",
                                        "id": "ratingfacetquery5",
                                        "analytics": {}
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            },
                            {
                                "label": "Veg/Non-Veg",
                                "id": "isVeg",
                                "selection": "SELECT_TYPE_SINGLESELECT",
                                "facetInfo": [
                                    {
                                        "label": "Pure Veg",
                                        "id": "isVegfacetquery2",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Non Veg",
                                        "id": "isVegfacetquery3",
                                        "analytics": {}
                                    }
                                ],
                                "viewType": "VIEW_TYPE_FLATTENED",
                                "subLabel": "Filter by"
                            },
                            {
                                "label": "Offers",
                                "id": "restaurantOfferMultiTd",
                                "selection": "SELECT_TYPE_SINGLESELECT",
                                "facetInfo": [
                                    {
                                        "label": "Offers",
                                        "id": "restaurantOfferMultiTdfacetquery3",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_FLATTENED",
                                "subLabel": "Restaurants with"
                            },
                            {
                                "label": "Cost for two",
                                "id": "costForTwo",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Rs. 300-Rs. 600",
                                        "id": "costForTwofacetquery3",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Greater than Rs. 600",
                                        "id": "costForTwofacetquery4",
                                        "analytics": {}
                                    },
                                    {
                                        "label": "Less than Rs. 300",
                                        "id": "costForTwofacetquery5",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by"
                            }
                        ]
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "columns": 4
                        },
                        "id": "restaurant_grid_listing",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                "restaurants": [
                                    {
                                        "info": {
                                            "id": "319255",
                                            "name": "Ak Special Hyderabadi Biryani House",
                                            "cloudinaryImageId": "fqa68ipjnqv1r9xlrfvz",
                                            "locality": "Kothapet",
                                            "areaName": "Old Guntur",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Biryani"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "453106",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 4.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/ak-special-hyderabadi-biryani-house-kothapet-old-guntur-guntur-319255",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "666317",
                                            "name": "Hotel Subani - Gardens",
                                            "cloudinaryImageId": "f46cc9172c791dc5dfc7f7857a59daf7",
                                            "locality": "Brundavan Gardens",
                                            "areaName": "Hotel Subani Gardens",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Tandoor"
                                            ],
                                            "avgRating": 3.9,
                                            "parentId": "471713",
                                            "avgRatingString": "3.9",
                                            "totalRatingsString": "1K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-subani-gardens-brundavan-gardens-hotel-subani-gardens-guntur-666317",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "86943",
                                            "name": "Mourya Tasty Foods",
                                            "cloudinaryImageId": "jlk2at5lezdiavt2fs8g",
                                            "locality": "Naidupet",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Indian",
                                                "Biryani",
                                                "Andhra",
                                                "Chinese",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "14586",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/mourya-tasty-foods-naidupet-lakshmipuram-guntur-86943",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "320756",
                                            "name": "Hotel Grand Nagarjuna",
                                            "cloudinaryImageId": "l4exvtscffuguvvwjxve",
                                            "locality": "Kothapet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9300 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "99156",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                        "description": "OnlyOnSwiggy"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "OnlyOnSwiggy",
                                                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-grand-nagarjuna-kothapet-brodipet-guntur-320756",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "86059",
                                            "name": "V Royal Park",
                                            "cloudinaryImageId": "jugcspco53mumqfzrdmm",
                                            "locality": "Arundalpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Indian",
                                                "South Indian",
                                                "North Indian",
                                                "Tandoor",
                                                "Beverages",
                                                "Desserts",
                                                "Kebabs",
                                                "Biryani"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "14536",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/v-royal-park-arundalpet-brodipet-guntur-86059",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "175807",
                                            "name": "Hotel Subani - Orginal",
                                            "cloudinaryImageId": "qslksrdev9xyivrstjnn",
                                            "locality": "Nallpadu",
                                            "areaName": "nallapadu",
                                            "costForTwo": "\u20B9250 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "406465",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/hotel-subani-orginal-nallpadu-nallapadu-guntur-175807",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "343512",
                                            "name": "Navya Grand",
                                            "cloudinaryImageId": "gwsv73b4gujodkgsswe6",
                                            "locality": "Vinayak Nagar",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "South Indian",
                                                "Tandoor",
                                                "North Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "144917",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 1.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/navya-grand-vinayak-nagar-lakshmipuram-guntur-343512",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "408590",
                                            "name": "Cake Roven",
                                            "cloudinaryImageId": "oedtuef72obspsrzxi63",
                                            "locality": "Brundavan Gardens",
                                            "areaName": "Lakshmipuram",
                                            "costForTwo": "\u20B9350 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Indian",
                                                "Pastas",
                                                "Chinese",
                                                "Beverages",
                                                "Ice Cream",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "243128",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 0.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/cake-roven-brundavan-gardens-lakshmipuram-guntur-408590",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "info": {
                                            "id": "120161",
                                            "name": "Sri Ramachandra Mess",
                                            "cloudinaryImageId": "vymswviqh31khtwfph8f",
                                            "locality": "Arundelpet",
                                            "areaName": "Brodipet",
                                            "costForTwo": "\u20B9200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Andhra"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "6934",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "10K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2024-01-12 16:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "\u20B9120 OFF",
                                                "subHeader": "ABOVE \u20B9199",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-e484238b-33a2-4828-b005-ebf294eab8ae"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/restaurants/sri-ramachandra-mess-arundelpet-brodipet-guntur-120161",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
                                ],
                                "theme": "SeoRestaurantListingGridWidget"
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
                        "message": "Show More",
                        "id": "show_more_button"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        "title": "Best Places to Eat Across Cities",
                        "brands": [
                            {
                                "text": "Best Restaurants in Bangalore",
                                "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Pune",
                                "link": "https://www.swiggy.com/city/pune/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Mumbai",
                                "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Delhi",
                                "link": "https://www.swiggy.com/city/delhi/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Hyderabad",
                                "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Kolkata",
                                "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Chennai",
                                "link": "https://www.swiggy.com/city/chennai/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Chandigarh",
                                "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Ahmedabad",
                                "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Jaipur",
                                "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Nagpur",
                                "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Bhubaneswar",
                                "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Kochi",
                                "link": "https://www.swiggy.com/city/kochi/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Surat",
                                "link": "https://www.swiggy.com/city/surat/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Dehradun",
                                "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Ludhiana",
                                "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Patna",
                                "link": "https://www.swiggy.com/city/patna/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Mangaluru",
                                "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Bhopal",
                                "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Gurgaon",
                                "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Coimbatore",
                                "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Agra",
                                "link": "https://www.swiggy.com/city/agra/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Noida",
                                "link": "https://www.swiggy.com/city/noida/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Vijayawada",
                                "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Guwahati",
                                "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Mysore",
                                "link": "https://www.swiggy.com/city/mysore/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Pondicherry",
                                "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Thiruvananthapuram",
                                "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Ranchi",
                                "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Vizag",
                                "link": "https://www.swiggy.com/city/vizag/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Udaipur",
                                "link": "https://www.swiggy.com/city/udaipur/best-restaurants"
                            },
                            {
                                "text": "Best Restaurants in Vadodara",
                                "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
                            }
                        ],
                        "id": "restaurant_near_me_links"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        "title": "Best Cuisines Near Me",
                        "brands": [
                            {
                                "text": "Chinese Restaurant Near Me",
                                "link": "https://www.swiggy.com/chinese-restaurants-near-me"
                            },
                            {
                                "text": "South Indian Restaurant Near Me",
                                "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
                            },
                            {
                                "text": "Indian Restaurant Near Me",
                                "link": "https://www.swiggy.com/indian-restaurants-near-me"
                            },
                            {
                                "text": "Kerala Restaurant Near Me",
                                "link": "https://www.swiggy.com/kerala-restaurants-near-me"
                            },
                            {
                                "text": "Korean Restaurant Near Me",
                                "link": "https://www.swiggy.com/korean-restaurants-near-me"
                            },
                            {
                                "text": "North Indian Restaurant Near Me",
                                "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
                            },
                            {
                                "text": "Seafood Restaurant Near Me",
                                "link": "https://www.swiggy.com/seafood-restaurants-near-me"
                            },
                            {
                                "text": "Bengali Restaurant Near Me",
                                "link": "https://www.swiggy.com/bengali-restaurants-near-me"
                            },
                            {
                                "text": "Punjabi Restaurant Near Me",
                                "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
                            },
                            {
                                "text": "Italian Restaurant Near Me",
                                "link": "https://www.swiggy.com/italian-restaurants-near-me"
                            },
                            {
                                "text": "Andhra Restaurant Near Me",
                                "link": "https://www.swiggy.com/andhra-restaurants-near-me"
                            },
                            {
                                "text": "Biryani Restaurant Near Me",
                                "link": "https://www.swiggy.com/biryani-restaurants-near-me"
                            },
                            {
                                "text": "Japanese Restaurant Near Me",
                                "link": "https://www.swiggy.com/japanese-restaurants-near-me"
                            },
                            {
                                "text": "Arabian Restaurant Near Me",
                                "link": "https://www.swiggy.com/arabian-restaurants-near-me"
                            },
                            {
                                "text": "Fast Food Restaurant Near Me",
                                "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
                            },
                            {
                                "text": "Jain Restaurant Near Me",
                                "link": "https://www.swiggy.com/jain-restaurants-near-me"
                            },
                            {
                                "text": "Gujarati Restaurant Near Me",
                                "link": "https://www.swiggy.com/gujarati-restaurants-near-me"
                            },
                            {
                                "text": "Thai Restaurant Near Me",
                                "link": "https://www.swiggy.com/thai-restaurants-near-me"
                            },
                            {
                                "text": "Pizzas Restaurant Near Me",
                                "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
                            },
                            {
                                "text": "Asian Restaurant Near Me",
                                "link": "https://www.swiggy.com/asian-restaurants-near-me"
                            },
                            {
                                "text": "Cafe Restaurant Near Me",
                                "link": "https://www.swiggy.com/cafe-restaurants-near-me"
                            },
                            {
                                "text": "Continental Restaurant Near Me",
                                "link": "https://www.swiggy.com/continental-restaurants-near-me"
                            },
                            {
                                "text": "Mexican Restaurant Near Me",
                                "link": "https://www.swiggy.com/mexican-restaurants-near-me"
                            },
                            {
                                "text": "Mughlai Restaurant Near Me",
                                "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
                            },
                            {
                                "text": "Sushi Restaurant Near Me",
                                "link": "https://www.swiggy.com/sushi-restaurants-near-me"
                            },
                            {
                                "text": "Mangalorean Restaurant Near Me",
                                "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
                            },
                            {
                                "text": "Tibetan Restaurant Near Me",
                                "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
                            },
                            {
                                "text": "Barbecue Restaurant Near Me",
                                "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
                            },
                            {
                                "text": "Maharashtrian Restaurant Near Me",
                                "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
                            },
                            {
                                "text": "Nepalese Restaurant Near Me",
                                "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
                            },
                            {
                                "text": "Rajasthani Restaurant Near Me",
                                "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
                            },
                            {
                                "text": "Turkish Restaurant Near Me",
                                "link": "https://www.swiggy.com/turkish-restaurants-near-me"
                            }
                        ],
                        "id": "restaurant_near_me_links"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                        "title": "Explore Every Restaurants Near Me",
                        "brands": [
                            {
                                "text": "Explore Restaurants Near Me",
                                "link": "https://www.swiggy.com/restaurants-near-me"
                            },
                            {
                                "text": "Explore Top Rated Restaurants Near Me",
                                "link": "https://www.swiggy.com/best-restaurants-near-me"
                            }
                        ],
                        "id": "restaurant_near_me_links"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
                        "title": "For better experience,download the Swiggy app now",
                        "androidAppImage": "portal/m/play_store.png",
                        "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                        "iosAppImage": "portal/m/app_store.png",
                        "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                        "id": "app_install_links"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
                        "cities": [
                            {
                                "text": "Bangalore",
                                "link": "https://www.swiggy.com/city/bangalore"
                            },
                            {
                                "text": "Gurgaon",
                                "link": "https://www.swiggy.com/city/gurgaon"
                            },
                            {
                                "text": "Hyderabad",
                                "link": "https://www.swiggy.com/city/hyderabad"
                            },
                            {
                                "text": "Delhi",
                                "link": "https://www.swiggy.com/city/delhi"
                            },
                            {
                                "text": "Mumbai",
                                "link": "https://www.swiggy.com/city/mumbai"
                            },
                            {
                                "text": "Pune",
                                "link": "https://www.swiggy.com/city/pune"
                            },
                            {
                                "text": "Kolkata",
                                "link": "https://www.swiggy.com/city/kolkata"
                            },
                            {
                                "text": "Chennai",
                                "link": "https://www.swiggy.com/city/chennai"
                            },
                            {
                                "text": "Ahmedabad",
                                "link": "https://www.swiggy.com/city/ahmedabad"
                            },
                            {
                                "text": "Chandigarh",
                                "link": "https://www.swiggy.com/city/chandigarh"
                            },
                            {
                                "text": "Jaipur",
                                "link": "https://www.swiggy.com/city/jaipur"
                            },
                            {
                                "text": "Kochi",
                                "link": "https://www.swiggy.com/city/kochi"
                            },
                            {
                                "text": "Coimbatore",
                                "link": "https://www.swiggy.com/city/coimbatore"
                            },
                            {
                                "text": "Lucknow",
                                "link": "https://www.swiggy.com/city/lucknow"
                            },
                            {
                                "text": "Nagpur",
                                "link": "https://www.swiggy.com/city/nagpur"
                            },
                            {
                                "text": "Vadodara",
                                "link": "https://www.swiggy.com/city/vadodara"
                            },
                            {
                                "text": "Indore",
                                "link": "https://www.swiggy.com/city/indore"
                            },
                            {
                                "text": "Guwahati",
                                "link": "https://www.swiggy.com/city/guwahati"
                            },
                            {
                                "text": "Vizag",
                                "link": "https://www.swiggy.com/city/vizag"
                            },
                            {
                                "text": "Surat",
                                "link": "https://www.swiggy.com/city/surat"
                            },
                            {
                                "text": "Dehradun",
                                "link": "https://www.swiggy.com/city/dehradun"
                            },
                            {
                                "text": "Noida",
                                "link": "https://www.swiggy.com/city/noida"
                            },
                            {
                                "text": "Ludhiana",
                                "link": "https://www.swiggy.com/city/ludhiana"
                            },
                            {
                                "text": "Trichy",
                                "link": "https://www.swiggy.com/city/trichy"
                            },
                            {
                                "text": "Vijayawada",
                                "link": "https://www.swiggy.com/city/vijayawada"
                            },
                            {
                                "text": "Kanpur",
                                "link": "https://www.swiggy.com/city/kanpur"
                            },
                            {
                                "text": "Mysore",
                                "link": "https://www.swiggy.com/city/mysore"
                            },
                            {
                                "text": "Nashik",
                                "link": "https://www.swiggy.com/city/nashik"
                            },
                            {
                                "text": "Udaipur",
                                "link": "https://www.swiggy.com/city/udaipur"
                            },
                            {
                                "text": "Pondicherry",
                                "link": "https://www.swiggy.com/city/pondicherry"
                            },
                            {
                                "text": "Agra",
                                "link": "https://www.swiggy.com/city/agra"
                            },
                            {
                                "text": "Aurangabad",
                                "link": "https://www.swiggy.com/city/aurangabad"
                            },
                            {
                                "text": "Jalandhar",
                                "link": "https://www.swiggy.com/city/jalandhar"
                            },
                            {
                                "text": "Kota",
                                "link": "https://www.swiggy.com/city/kota"
                            },
                            {
                                "text": "Madurai",
                                "link": "https://www.swiggy.com/city/madurai"
                            },
                            {
                                "text": "Allahabad",
                                "link": "https://www.swiggy.com/city/allahabad"
                            },
                            {
                                "text": "Manipal",
                                "link": "https://www.swiggy.com/city/manipal"
                            },
                            {
                                "text": "Amritsar",
                                "link": "https://www.swiggy.com/city/amritsar"
                            },
                            {
                                "text": "Bareilly",
                                "link": "https://www.swiggy.com/city/bareilly"
                            },
                            {
                                "text": "Meerut",
                                "link": "https://www.swiggy.com/city/meerut"
                            },
                            {
                                "text": "Bhopal",
                                "link": "https://www.swiggy.com/city/bhopal"
                            },
                            {
                                "text": "Ooty",
                                "link": "https://www.swiggy.com/city/ooty"
                            },
                            {
                                "text": "Bhubaneswar",
                                "link": "https://www.swiggy.com/city/bhubaneswar"
                            },
                            {
                                "text": "Raipur",
                                "link": "https://www.swiggy.com/city/raipur"
                            },
                            {
                                "text": "Bikaner",
                                "link": "https://www.swiggy.com/city/bikaner"
                            },
                            {
                                "text": "Rajkot",
                                "link": "https://www.swiggy.com/city/rajkot"
                            },
                            {
                                "text": "Kozhikode",
                                "link": "https://www.swiggy.com/city/kozhikode"
                            },
                            {
                                "text": "Central Goa",
                                "link": "https://www.swiggy.com/city/central-goa"
                            },
                            {
                                "text": "Sirsa",
                                "link": "https://www.swiggy.com/city/sirsa"
                            },
                            {
                                "text": "Gwalior",
                                "link": "https://www.swiggy.com/city/gwalior"
                            },
                            {
                                "text": "Thrissur",
                                "link": "https://www.swiggy.com/city/thrissur"
                            },
                            {
                                "text": "Kharagpur",
                                "link": "https://www.swiggy.com/city/kharagpur"
                            },
                            {
                                "text": "Tirupati",
                                "link": "https://www.swiggy.com/city/tirupati"
                            },
                            {
                                "text": "Tirupur",
                                "link": "https://www.swiggy.com/city/tirupur"
                            },
                            {
                                "text": "Vellore",
                                "link": "https://www.swiggy.com/city/vellore"
                            },
                            {
                                "text": "Thiruvananthapuram",
                                "link": "https://www.swiggy.com/city/thiruvananthapuram"
                            },
                            {
                                "text": "Warangal",
                                "link": "https://www.swiggy.com/city/warangal"
                            },
                            {
                                "text": "Varanasi",
                                "link": "https://www.swiggy.com/city/varanasi"
                            },
                            {
                                "text": "Mangaluru",
                                "link": "https://www.swiggy.com/city/mangaluru"
                            },
                            {
                                "text": "Patna",
                                "link": "https://www.swiggy.com/city/patna"
                            },
                            {
                                "text": "Ranchi",
                                "link": "https://www.swiggy.com/city/ranchi"
                            },
                            {
                                "text": "Faridabad",
                                "link": "https://www.swiggy.com/city/faridabad"
                            },
                            {
                                "text": "Guntur",
                                "link": "https://www.swiggy.com/city/guntur"
                            },
                            {
                                "text": "Ujjain",
                                "link": "https://www.swiggy.com/city/ujjain"
                            },
                            {
                                "text": "Patiala",
                                "link": "https://www.swiggy.com/city/patiala"
                            },
                            {
                                "text": "Karnal",
                                "link": "https://www.swiggy.com/city/karnal"
                            },
                            {
                                "text": "Kakinada",
                                "link": "https://www.swiggy.com/city/kakinada"
                            },
                            {
                                "text": "Rajahmundry",
                                "link": "https://www.swiggy.com/city/rajahmundry"
                            },
                            {
                                "text": "Bilaspur",
                                "link": "https://www.swiggy.com/city/bilaspur"
                            },
                            {
                                "text": "Bhilai",
                                "link": "https://www.swiggy.com/city/bhilai"
                            },
                            {
                                "text": "Anand",
                                "link": "https://www.swiggy.com/city/anand"
                            },
                            {
                                "text": "Bhavnagar",
                                "link": "https://www.swiggy.com/city/bhavnagar"
                            },
                            {
                                "text": "Jammu",
                                "link": "https://www.swiggy.com/city/jammu"
                            },
                            {
                                "text": "Muktsar",
                                "link": "https://www.swiggy.com/city/muktsar"
                            },
                            {
                                "text": "Panipat",
                                "link": "https://www.swiggy.com/city/panipat"
                            },
                            {
                                "text": "Dhanbad",
                                "link": "https://www.swiggy.com/city/dhanbad"
                            },
                            {
                                "text": "Hubli",
                                "link": "https://www.swiggy.com/city/hubli"
                            },
                            {
                                "text": "Belgaum",
                                "link": "https://www.swiggy.com/city/belgaum"
                            },
                            {
                                "text": "Jabalpur",
                                "link": "https://www.swiggy.com/city/jabalpur"
                            },
                            {
                                "text": "Kolhapur",
                                "link": "https://www.swiggy.com/city/kolhapur"
                            },
                            {
                                "text": "Solapur",
                                "link": "https://www.swiggy.com/city/solapur"
                            },
                            {
                                "text": "Shillong",
                                "link": "https://www.swiggy.com/city/shillong"
                            },
                            {
                                "text": "Cuttack",
                                "link": "https://www.swiggy.com/city/cuttack"
                            },
                            {
                                "text": "Aligarh",
                                "link": "https://www.swiggy.com/city/aligarh"
                            },
                            {
                                "text": "Salem",
                                "link": "https://www.swiggy.com/city/salem"
                            },
                            {
                                "text": "Jodhpur",
                                "link": "https://www.swiggy.com/city/jodhpur"
                            },
                            {
                                "text": "Ajmer",
                                "link": "https://www.swiggy.com/city/ajmer"
                            },
                            {
                                "text": "Jhansi",
                                "link": "https://www.swiggy.com/city/jhansi"
                            },
                            {
                                "text": "Gorakhpur",
                                "link": "https://www.swiggy.com/city/gorakhpur"
                            },
                            {
                                "text": "Thanjavur",
                                "link": "https://www.swiggy.com/city/thanjavur"
                            },
                            {
                                "text": "Erode",
                                "link": "https://www.swiggy.com/city/erode"
                            },
                            {
                                "text": "Nellore",
                                "link": "https://www.swiggy.com/city/nellore"
                            },
                            {
                                "text": "Rourkela",
                                "link": "https://www.swiggy.com/city/rourkela"
                            },
                            {
                                "text": "Anantapur",
                                "link": "https://www.swiggy.com/city/anantapur"
                            },
                            {
                                "text": "Kurnool",
                                "link": "https://www.swiggy.com/city/kurnool"
                            },
                            {
                                "text": "Ahmednagar",
                                "link": "https://www.swiggy.com/city/ahmednagar"
                            },
                            {
                                "text": "Phagwara",
                                "link": "https://www.swiggy.com/city/phagwara"
                            },
                            {
                                "text": "Ambala",
                                "link": "https://www.swiggy.com/city/ambala"
                            },
                            {
                                "text": "Ballari",
                                "link": "https://www.swiggy.com/city/ballari"
                            },
                            {
                                "text": "Saharanpur",
                                "link": "https://www.swiggy.com/city/saharanpur"
                            },
                            {
                                "text": "Tirunelveli",
                                "link": "https://www.swiggy.com/city/tirunelveli"
                            },
                            {
                                "text": "Bathinda",
                                "link": "https://www.swiggy.com/city/bathinda"
                            },
                            {
                                "text": "Mathura",
                                "link": "https://www.swiggy.com/city/mathura"
                            },
                            {
                                "text": "Haridwar",
                                "link": "https://www.swiggy.com/city/haridwar"
                            },
                            {
                                "text": "Ratnagiri",
                                "link": "https://www.swiggy.com/city/ratnagiri"
                            },
                            {
                                "text": "Sangli",
                                "link": "https://www.swiggy.com/city/sangli"
                            },
                            {
                                "text": "Amravati",
                                "link": "https://www.swiggy.com/city/amravati"
                            },
                            {
                                "text": "Rishikesh",
                                "link": "https://www.swiggy.com/city/rishikesh"
                            },
                            {
                                "text": "Nagercoil",
                                "link": "https://www.swiggy.com/city/nagercoil"
                            },
                            {
                                "text": "KanyaKumari",
                                "link": "https://www.swiggy.com/city/kanyakumari"
                            },
                            {
                                "text": "Kadapa",
                                "link": "https://www.swiggy.com/city/kadapa"
                            },
                            {
                                "text": "Nizamabad",
                                "link": "https://www.swiggy.com/city/nizamabad"
                            },
                            {
                                "text": "Shivamogga",
                                "link": "https://www.swiggy.com/city/shivamogga"
                            },
                            {
                                "text": "Davanagere",
                                "link": "https://www.swiggy.com/city/davanagere"
                            },
                            {
                                "text": "Roorkee",
                                "link": "https://www.swiggy.com/city/roorkee"
                            },
                            {
                                "text": "Nanded",
                                "link": "https://www.swiggy.com/city/nanded"
                            },
                            {
                                "text": "Rewa",
                                "link": "https://www.swiggy.com/city/rewa"
                            },
                            {
                                "text": "Satna",
                                "link": "https://www.swiggy.com/city/satna"
                            },
                            {
                                "text": "Muzaffarpur",
                                "link": "https://www.swiggy.com/city/muzaffarpur"
                            },
                            {
                                "text": "Valsad",
                                "link": "https://www.swiggy.com/city/valsad"
                            },
                            {
                                "text": "Vapi",
                                "link": "https://www.swiggy.com/city/vapi"
                            },
                            {
                                "text": "Chhapra",
                                "link": "https://www.swiggy.com/city/chhapra"
                            },
                            {
                                "text": "Dharamshala",
                                "link": "https://www.swiggy.com/city/dharamshala"
                            },
                            {
                                "text": "Kollam",
                                "link": "https://www.swiggy.com/city/kollam"
                            },
                            {
                                "text": "Silchar",
                                "link": "https://www.swiggy.com/city/silchar"
                            },
                            {
                                "text": "Alappuzha",
                                "link": "https://www.swiggy.com/city/alappuzha"
                            },
                            {
                                "text": "Sonipat",
                                "link": "https://www.swiggy.com/city/sonipat"
                            },
                            {
                                "text": "Rohtak",
                                "link": "https://www.swiggy.com/city/rohtak"
                            },
                            {
                                "text": "Mehsana",
                                "link": "https://www.swiggy.com/city/mehsana"
                            },
                            {
                                "text": "Kullu",
                                "link": "https://www.swiggy.com/city/kullu"
                            },
                            {
                                "text": "Dhule",
                                "link": "https://www.swiggy.com/city/dhule"
                            },
                            {
                                "text": "Dharwad",
                                "link": "https://www.swiggy.com/city/dharwad"
                            },
                            {
                                "text": "Latur",
                                "link": "https://www.swiggy.com/city/latur"
                            },
                            {
                                "text": "Vizianagaram",
                                "link": "https://www.swiggy.com/city/vizianagaram"
                            },
                            {
                                "text": "Khammam",
                                "link": "https://www.swiggy.com/city/khammam"
                            },
                            {
                                "text": "Hampi",
                                "link": "https://www.swiggy.com/city/hampi"
                            },
                            {
                                "text": "Nainital",
                                "link": "https://www.swiggy.com/city/nainital"
                            },
                            {
                                "text": "Akola",
                                "link": "https://www.swiggy.com/city/akola"
                            },
                            {
                                "text": "Kalaburagi",
                                "link": "https://www.swiggy.com/city/kalaburagi"
                            },
                            {
                                "text": "Gaya",
                                "link": "https://www.swiggy.com/city/gaya"
                            },
                            {
                                "text": "Muzaffarnagar",
                                "link": "https://www.swiggy.com/city/muzaffarnagar"
                            },
                            {
                                "text": "Dewas",
                                "link": "https://www.swiggy.com/city/dewas"
                            },
                            {
                                "text": "Korba",
                                "link": "https://www.swiggy.com/city/korba"
                            },
                            {
                                "text": "Mussoorie",
                                "link": "https://www.swiggy.com/city/mussoorie"
                            },
                            {
                                "text": "Jalgaon",
                                "link": "https://www.swiggy.com/city/jalgaon"
                            },
                            {
                                "text": "Yamuna Nagar",
                                "link": "https://www.swiggy.com/city/yamuna-nagar"
                            },
                            {
                                "text": "Bhagalpur",
                                "link": "https://www.swiggy.com/city/bhagalpur"
                            },
                            {
                                "text": "Hapur",
                                "link": "https://www.swiggy.com/city/hapur"
                            },
                            {
                                "text": "Morena",
                                "link": "https://www.swiggy.com/city/morena"
                            },
                            {
                                "text": "Hassan",
                                "link": "https://www.swiggy.com/city/hassan"
                            },
                            {
                                "text": "Hisar",
                                "link": "https://www.swiggy.com/city/hisar"
                            },
                            {
                                "text": "Godhra",
                                "link": "https://www.swiggy.com/city/godhra"
                            },
                            {
                                "text": "Kolar ",
                                "link": "https://www.swiggy.com/city/kolar"
                            },
                            {
                                "text": "Rampur",
                                "link": "https://www.swiggy.com/city/rampur"
                            },
                            {
                                "text": "Sitapur",
                                "link": "https://www.swiggy.com/city/sitapur"
                            },
                            {
                                "text": "Etawah",
                                "link": "https://www.swiggy.com/city/etawah"
                            },
                            {
                                "text": "Porbandar",
                                "link": "https://www.swiggy.com/city/porbandar"
                            },
                            {
                                "text": "Nadiad",
                                "link": "https://www.swiggy.com/city/nadiad"
                            },
                            {
                                "text": "Sagar",
                                "link": "https://www.swiggy.com/city/sagar"
                            },
                            {
                                "text": "Morbi",
                                "link": "https://www.swiggy.com/city/morbi"
                            },
                            {
                                "text": "Chhindwara",
                                "link": "https://www.swiggy.com/city/chhindwara"
                            },
                            {
                                "text": "Tumakuru",
                                "link": "https://www.swiggy.com/city/tumakuru"
                            },
                            {
                                "text": "Singrauli",
                                "link": "https://www.swiggy.com/city/singrauli"
                            },
                            {
                                "text": "Thoothukudi",
                                "link": "https://www.swiggy.com/city/thoothukudi"
                            },
                            {
                                "text": "Katni",
                                "link": "https://www.swiggy.com/city/katni"
                            },
                            {
                                "text": "Khandwa",
                                "link": "https://www.swiggy.com/city/khandwa"
                            },
                            {
                                "text": "Eluru",
                                "link": "https://www.swiggy.com/city/eluru"
                            },
                            {
                                "text": "Malappuram",
                                "link": "https://www.swiggy.com/city/malappuram"
                            },
                            {
                                "text": "Dibrugarh",
                                "link": "https://www.swiggy.com/city/dibrugarh"
                            },
                            {
                                "text": "Deoghar",
                                "link": "https://www.swiggy.com/city/deoghar"
                            },
                            {
                                "text": "Khanna",
                                "link": "https://www.swiggy.com/city/khanna"
                            },
                            {
                                "text": "Bidar",
                                "link": "https://www.swiggy.com/city/bidar"
                            },
                            {
                                "text": "Madikeri",
                                "link": "https://www.swiggy.com/city/madikeri"
                            },
                            {
                                "text": "Haldwani",
                                "link": "https://www.swiggy.com/city/haldwani"
                            },
                            {
                                "text": "Farrukhabad",
                                "link": "https://www.swiggy.com/city/farrukhabad"
                            },
                            {
                                "text": "Malegaon",
                                "link": "https://www.swiggy.com/city/malegaon"
                            },
                            {
                                "text": "Dindigul",
                                "link": "https://www.swiggy.com/city/dindigul"
                            },
                            {
                                "text": "Shahjahanpur",
                                "link": "https://www.swiggy.com/city/shahjahanpur"
                            },
                            {
                                "text": "Beed",
                                "link": "https://www.swiggy.com/city/beed"
                            },
                            {
                                "text": "Junagadh",
                                "link": "https://www.swiggy.com/city/junagadh"
                            },
                            {
                                "text": "Asansol",
                                "link": "https://www.swiggy.com/city/asansol"
                            },
                            {
                                "text": "Beawar",
                                "link": "https://www.swiggy.com/city/beawar"
                            },
                            {
                                "text": "Kishangarh",
                                "link": "https://www.swiggy.com/city/kishangarh"
                            },
                            {
                                "text": "Parbhani",
                                "link": "https://www.swiggy.com/city/parbhani"
                            },
                            {
                                "text": "Gondia",
                                "link": "https://www.swiggy.com/city/gondia"
                            },
                            {
                                "text": "Ichalkaranji",
                                "link": "https://www.swiggy.com/city/ichalkaranji"
                            },
                            {
                                "text": "Jalna",
                                "link": "https://www.swiggy.com/city/jalna"
                            },
                            {
                                "text": "Yavatmal",
                                "link": "https://www.swiggy.com/city/yavatmal"
                            },
                            {
                                "text": "Shivpuri",
                                "link": "https://www.swiggy.com/city/shivpuri"
                            },
                            {
                                "text": "Moga",
                                "link": "https://www.swiggy.com/city/moga"
                            },
                            {
                                "text": "Abohar",
                                "link": "https://www.swiggy.com/city/abohar"
                            },
                            {
                                "text": "Adoni",
                                "link": "https://www.swiggy.com/city/adoni"
                            },
                            {
                                "text": "Madanapalle",
                                "link": "https://www.swiggy.com/city/madanapalle"
                            },
                            {
                                "text": "Tiruvannamalai",
                                "link": "https://www.swiggy.com/city/tiruvannamalai"
                            },
                            {
                                "text": "Satara",
                                "link": "https://www.swiggy.com/city/satara"
                            },
                            {
                                "text": "Ambur",
                                "link": "https://www.swiggy.com/city/ambur"
                            },
                            {
                                "text": "Karimnagar",
                                "link": "https://www.swiggy.com/city/karimnagar"
                            },
                            {
                                "text": "Ratlam",
                                "link": "https://www.swiggy.com/city/ratlam"
                            },
                            {
                                "text": "Moradabad",
                                "link": "https://www.swiggy.com/city/moradabad"
                            },
                            {
                                "text": "Machilipatnam",
                                "link": "https://www.swiggy.com/city/machilipatnam"
                            },
                            {
                                "text": "Ongole",
                                "link": "https://www.swiggy.com/city/ongole"
                            },
                            {
                                "text": "Kottayam",
                                "link": "https://www.swiggy.com/city/kottayam"
                            },
                            {
                                "text": "Darbhanga",
                                "link": "https://www.swiggy.com/city/darbhanga"
                            },
                            {
                                "text": "Kurukshetra",
                                "link": "https://www.swiggy.com/city/kurukshetra"
                            },
                            {
                                "text": "Unnao",
                                "link": "https://www.swiggy.com/city/unnao"
                            },
                            {
                                "text": "Bulandshahr",
                                "link": "https://www.swiggy.com/city/bulandshahr"
                            },
                            {
                                "text": "Durgapur",
                                "link": "https://www.swiggy.com/city/durgapur"
                            },
                            {
                                "text": "Siliguri",
                                "link": "https://www.swiggy.com/city/siliguri"
                            },
                            {
                                "text": "Pali",
                                "link": "https://www.swiggy.com/city/pali"
                            },
                            {
                                "text": "Tadepalligudem",
                                "link": "https://www.swiggy.com/city/tadepalligudem"
                            },
                            {
                                "text": "Ramagundam",
                                "link": "https://www.swiggy.com/city/ramagundam"
                            },
                            {
                                "text": "Mahbubnagar",
                                "link": "https://www.swiggy.com/city/mahbubnagar"
                            },
                            {
                                "text": "Bhiwani",
                                "link": "https://www.swiggy.com/city/bhiwani"
                            },
                            {
                                "text": "Cuddalore",
                                "link": "https://www.swiggy.com/city/cuddalore"
                            },
                            {
                                "text": "Kaithal",
                                "link": "https://www.swiggy.com/city/kaithal"
                            },
                            {
                                "text": "Jagtial",
                                "link": "https://www.swiggy.com/city/jagtial"
                            },
                            {
                                "text": "Palakkad",
                                "link": "https://www.swiggy.com/city/palakkad"
                            },
                            {
                                "text": "Guna",
                                "link": "https://www.swiggy.com/city/guna"
                            },
                            {
                                "text": "Kumbakonam",
                                "link": "https://www.swiggy.com/city/kumbakonam"
                            },
                            {
                                "text": "Maunath Bhanjan",
                                "link": "https://www.swiggy.com/city/maunath-bhanjan"
                            },
                            {
                                "text": "Baripada",
                                "link": "https://www.swiggy.com/city/baripada"
                            },
                            {
                                "text": "Orai",
                                "link": "https://www.swiggy.com/city/orai"
                            },
                            {
                                "text": "Bhadrak",
                                "link": "https://www.swiggy.com/city/bhadrak"
                            },
                            {
                                "text": "Batala",
                                "link": "https://www.swiggy.com/city/batala"
                            },
                            {
                                "text": "Firozpur",
                                "link": "https://www.swiggy.com/city/firozpur"
                            },
                            {
                                "text": "Barnala",
                                "link": "https://www.swiggy.com/city/barnala"
                            },
                            {
                                "text": "Raigarh",
                                "link": "https://www.swiggy.com/city/raigarh"
                            },
                            {
                                "text": "Nagaon",
                                "link": "https://www.swiggy.com/city/nagaon"
                            },
                            {
                                "text": "Mainpuri",
                                "link": "https://www.swiggy.com/city/mainpuri"
                            },
                            {
                                "text": "Balurghat",
                                "link": "https://www.swiggy.com/city/balurghat"
                            },
                            {
                                "text": "Giridih",
                                "link": "https://www.swiggy.com/city/giridih"
                            },
                            {
                                "text": "Ghazipur",
                                "link": "https://www.swiggy.com/city/ghazipur"
                            },
                            {
                                "text": "Jagdalpur",
                                "link": "https://www.swiggy.com/city/jagdalpur"
                            },
                            {
                                "text": "Vidisha",
                                "link": "https://www.swiggy.com/city/vidisha"
                            },
                            {
                                "text": "Dimapur",
                                "link": "https://www.swiggy.com/city/dimapur"
                            },
                            {
                                "text": "Shikohabad",
                                "link": "https://www.swiggy.com/city/shikohabad"
                            },
                            {
                                "text": "Imphal",
                                "link": "https://www.swiggy.com/city/imphal"
                            },
                            {
                                "text": "Lakhimpur",
                                "link": "https://www.swiggy.com/city/lakhimpur"
                            },
                            {
                                "text": "Rudrapur",
                                "link": "https://www.swiggy.com/city/rudrapur"
                            },
                            {
                                "text": "Ambikapur",
                                "link": "https://www.swiggy.com/city/ambikapur"
                            },
                            {
                                "text": "Rae Bareli",
                                "link": "https://www.swiggy.com/city/rae-bareli"
                            },
                            {
                                "text": "Tinsukia",
                                "link": "https://www.swiggy.com/city/tinsukia"
                            },
                            {
                                "text": "Rajapalayam",
                                "link": "https://www.swiggy.com/city/rajapalayam"
                            },
                            {
                                "text": "Rajnandgaon",
                                "link": "https://www.swiggy.com/city/rajnandgaon"
                            },
                            {
                                "text": "Kashipur",
                                "link": "https://www.swiggy.com/city/kashipur"
                            },
                            {
                                "text": "Ranibennur",
                                "link": "https://www.swiggy.com/city/ranibennur"
                            },
                            {
                                "text": "Burhanpur",
                                "link": "https://www.swiggy.com/city/burhanpur"
                            },
                            {
                                "text": "Bhadravati",
                                "link": "https://www.swiggy.com/city/bhadravati"
                            },
                            {
                                "text": "Chittoor",
                                "link": "https://www.swiggy.com/city/chittoor"
                            },
                            {
                                "text": "Pudukkottai",
                                "link": "https://www.swiggy.com/city/pudukkottai"
                            },
                            {
                                "text": "Hardoi",
                                "link": "https://www.swiggy.com/city/hardoi"
                            },
                            {
                                "text": "Basti",
                                "link": "https://www.swiggy.com/city/basti"
                            },
                            {
                                "text": "Karaikkudi",
                                "link": "https://www.swiggy.com/city/karaikkudi"
                            },
                            {
                                "text": "Lalitpur",
                                "link": "https://www.swiggy.com/city/lalitpur"
                            },
                            {
                                "text": "Hospet",
                                "link": "https://www.swiggy.com/city/hospet"
                            },
                            {
                                "text": "Budaun",
                                "link": "https://www.swiggy.com/city/budaun"
                            },
                            {
                                "text": "Neemuch",
                                "link": "https://www.swiggy.com/city/neemuch"
                            },
                            {
                                "text": "Pilibhit",
                                "link": "https://www.swiggy.com/city/pilibhit"
                            },
                            {
                                "text": "Barshi",
                                "link": "https://www.swiggy.com/city/barshi"
                            },
                            {
                                "text": "Sri Ganganagar",
                                "link": "https://www.swiggy.com/city/sri-ganganagar"
                            },
                            {
                                "text": "Wardha",
                                "link": "https://www.swiggy.com/city/wardha"
                            },
                            {
                                "text": "Sehore",
                                "link": "https://www.swiggy.com/city/sehore"
                            },
                            {
                                "text": "Bhimavaram",
                                "link": "https://www.swiggy.com/city/bhimavaram"
                            },
                            {
                                "text": "Hanumangarh",
                                "link": "https://www.swiggy.com/city/hanumangarh"
                            },
                            {
                                "text": "Pathankot",
                                "link": "https://www.swiggy.com/city/pathankot"
                            },
                            {
                                "text": "Puri",
                                "link": "https://www.swiggy.com/city/puri"
                            },
                            {
                                "text": "Fatehpur",
                                "link": "https://www.swiggy.com/city/fatehpur"
                            },
                            {
                                "text": "Surendranagar Dudhrej",
                                "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
                            },
                            {
                                "text": "Jamnagar",
                                "link": "https://www.swiggy.com/city/jamnagar"
                            },
                            {
                                "text": "Bhuj",
                                "link": "https://www.swiggy.com/city/bhuj"
                            },
                            {
                                "text": "Gandhidham",
                                "link": "https://www.swiggy.com/city/gandhidham"
                            },
                            {
                                "text": "Bharuch",
                                "link": "https://www.swiggy.com/city/bharuch"
                            },
                            {
                                "text": "Navsari",
                                "link": "https://www.swiggy.com/city/navsari"
                            },
                            {
                                "text": "Amreli",
                                "link": "https://www.swiggy.com/city/amreli"
                            },
                            {
                                "text": "Palanpur",
                                "link": "https://www.swiggy.com/city/palanpur"
                            },
                            {
                                "text": "Bhilwara",
                                "link": "https://www.swiggy.com/city/bhilwara"
                            },
                            {
                                "text": "Suratgarh",
                                "link": "https://www.swiggy.com/city/suratgarh"
                            },
                            {
                                "text": "Sikar",
                                "link": "https://www.swiggy.com/city/sikar"
                            },
                            {
                                "text": "Churu",
                                "link": "https://www.swiggy.com/city/churu"
                            },
                            {
                                "text": "Alwar",
                                "link": "https://www.swiggy.com/city/alwar"
                            },
                            {
                                "text": "Bhiwadi",
                                "link": "https://www.swiggy.com/city/bhiwadi"
                            },
                            {
                                "text": "Bharatpur",
                                "link": "https://www.swiggy.com/city/bharatpur"
                            },
                            {
                                "text": "Mount Abu",
                                "link": "https://www.swiggy.com/city/mount-abu"
                            },
                            {
                                "text": "Bundi",
                                "link": "https://www.swiggy.com/city/bundi"
                            },
                            {
                                "text": "Sawai Madhopur",
                                "link": "https://www.swiggy.com/city/sawai-madhopur"
                            },
                            {
                                "text": "Purulia",
                                "link": "https://www.swiggy.com/city/purulia"
                            },
                            {
                                "text": "Bardhaman",
                                "link": "https://www.swiggy.com/city/bardhaman"
                            },
                            {
                                "text": "Raniganj",
                                "link": "https://www.swiggy.com/city/raniganj"
                            },
                            {
                                "text": "Darjeeling",
                                "link": "https://www.swiggy.com/city/darjeeling"
                            },
                            {
                                "text": "Jalpaiguri",
                                "link": "https://www.swiggy.com/city/jalpaiguri"
                            },
                            {
                                "text": "Chittorgarh",
                                "link": "https://www.swiggy.com/city/chittorgarh"
                            },
                            {
                                "text": "Dholpur",
                                "link": "https://www.swiggy.com/city/dholpur"
                            },
                            {
                                "text": "Uluberia",
                                "link": "https://www.swiggy.com/city/uluberia"
                            },
                            {
                                "text": "Nabadwip",
                                "link": "https://www.swiggy.com/city/nabadwip"
                            },
                            {
                                "text": "Bongaon",
                                "link": "https://www.swiggy.com/city/bongaon"
                            },
                            {
                                "text": "Kanchrapara",
                                "link": "https://www.swiggy.com/city/kanchrapara"
                            },
                            {
                                "text": "Habra",
                                "link": "https://www.swiggy.com/city/habra"
                            },
                            {
                                "text": "Firozabad",
                                "link": "https://www.swiggy.com/city/firozabad"
                            },
                            {
                                "text": "Nalgonda",
                                "link": "https://www.swiggy.com/city/nalgonda"
                            },
                            {
                                "text": "Chandrapur",
                                "link": "https://www.swiggy.com/city/chandrapur"
                            },
                            {
                                "text": "Bijapur",
                                "link": "https://www.swiggy.com/city/bijapur"
                            },
                            {
                                "text": "Bhusawal",
                                "link": "https://www.swiggy.com/city/bhusawal"
                            },
                            {
                                "text": "Raichur",
                                "link": "https://www.swiggy.com/city/raichur"
                            },
                            {
                                "text": "Bahraich",
                                "link": "https://www.swiggy.com/city/bahraich"
                            },
                            {
                                "text": "Azamgarh",
                                "link": "https://www.swiggy.com/city/azamgarh"
                            },
                            {
                                "text": "Bahadurgarh",
                                "link": "https://www.swiggy.com/city/bahadurgarh"
                            },
                            {
                                "text": "Jind",
                                "link": "https://www.swiggy.com/city/jind"
                            },
                            {
                                "text": "Rewari",
                                "link": "https://www.swiggy.com/city/rewari"
                            },
                            {
                                "text": "Palwal",
                                "link": "https://www.swiggy.com/city/palwal"
                            },
                            {
                                "text": "Hathras",
                                "link": "https://www.swiggy.com/city/hathras"
                            },
                            {
                                "text": "Sambalpur",
                                "link": "https://www.swiggy.com/city/sambalpur"
                            },
                            {
                                "text": "Banda",
                                "link": "https://www.swiggy.com/city/banda"
                            },
                            {
                                "text": "Hoshiarpur",
                                "link": "https://www.swiggy.com/city/hoshiarpur"
                            },
                            {
                                "text": "Faridkot",
                                "link": "https://www.swiggy.com/city/faridkot"
                            },
                            {
                                "text": "Mandsaur",
                                "link": "https://www.swiggy.com/city/mandsaur"
                            },
                            {
                                "text": "Suryapet",
                                "link": "https://www.swiggy.com/city/suryapet"
                            },
                            {
                                "text": "Adilabad",
                                "link": "https://www.swiggy.com/city/adilabad"
                            },
                            {
                                "text": "Narasaraopet",
                                "link": "https://www.swiggy.com/city/narasaraopet"
                            },
                            {
                                "text": "Faizabad",
                                "link": "https://www.swiggy.com/city/faizabad"
                            },
                            {
                                "text": "Tadpatri",
                                "link": "https://www.swiggy.com/city/tadpatri"
                            },
                            {
                                "text": "Gonda",
                                "link": "https://www.swiggy.com/city/gonda"
                            },
                            {
                                "text": "Mughalsarai",
                                "link": "https://www.swiggy.com/city/mughalsarai"
                            },
                            {
                                "text": "Medinipur",
                                "link": "https://www.swiggy.com/city/medinipur"
                            },
                            {
                                "text": "Nagda",
                                "link": "https://www.swiggy.com/city/nagda"
                            },
                            {
                                "text": "Raiganj",
                                "link": "https://www.swiggy.com/city/raiganj"
                            },
                            {
                                "text": "Deoria City",
                                "link": "https://www.swiggy.com/city/deoria-city"
                            },
                            {
                                "text": "Sultanpur",
                                "link": "https://www.swiggy.com/city/sultanpur"
                            },
                            {
                                "text": "Shamli",
                                "link": "https://www.swiggy.com/city/shamli"
                            },
                            {
                                "text": "Krishnanagar",
                                "link": "https://www.swiggy.com/city/krishnanagar"
                            },
                            {
                                "text": "Ballia",
                                "link": "https://www.swiggy.com/city/ballia"
                            },
                            {
                                "text": "Guntakal",
                                "link": "https://www.swiggy.com/city/guntakal"
                            },
                            {
                                "text": "Miryalaguda",
                                "link": "https://www.swiggy.com/city/miryalaguda"
                            },
                            {
                                "text": "Etah",
                                "link": "https://www.swiggy.com/city/etah"
                            },
                            {
                                "text": "Berhampore",
                                "link": "https://www.swiggy.com/city/berhampore"
                            },
                            {
                                "text": "Gudivada",
                                "link": "https://www.swiggy.com/city/gudivada"
                            },
                            {
                                "text": "Haldia",
                                "link": "https://www.swiggy.com/city/haldia"
                            },
                            {
                                "text": "Santipur",
                                "link": "https://www.swiggy.com/city/santipur"
                            },
                            {
                                "text": "Basirhat",
                                "link": "https://www.swiggy.com/city/basirhat"
                            },
                            {
                                "text": "Udgir",
                                "link": "https://www.swiggy.com/city/udgir"
                            },
                            {
                                "text": "Proddatur",
                                "link": "https://www.swiggy.com/city/proddatur"
                            },
                            {
                                "text": "Nagapattinam",
                                "link": "https://www.swiggy.com/city/nagapattinam"
                            },
                            {
                                "text": "Chikmagalur",
                                "link": "https://www.swiggy.com/city/chikmagalur"
                            },
                            {
                                "text": "Chandausi",
                                "link": "https://www.swiggy.com/city/chandausi"
                            },
                            {
                                "text": "Bhind",
                                "link": "https://www.swiggy.com/city/bhind"
                            },
                            {
                                "text": "Mandya",
                                "link": "https://www.swiggy.com/city/mandya"
                            },
                            {
                                "text": "Bagalkot",
                                "link": "https://www.swiggy.com/city/bagalkot"
                            },
                            {
                                "text": "Nandurbar",
                                "link": "https://www.swiggy.com/city/nandurbar"
                            },
                            {
                                "text": "Chitradurga",
                                "link": "https://www.swiggy.com/city/chitradurga"
                            },
                            {
                                "text": "Osmanabad",
                                "link": "https://www.swiggy.com/city/osmanabad"
                            },
                            {
                                "text": "Modinagar",
                                "link": "https://www.swiggy.com/city/modinagar"
                            },
                            {
                                "text": "Gadag-Betigeri",
                                "link": "https://www.swiggy.com/city/gadag-betigeri"
                            },
                            {
                                "text": "Hoshangabad",
                                "link": "https://www.swiggy.com/city/hoshangabad"
                            },
                            {
                                "text": "Jaunpur",
                                "link": "https://www.swiggy.com/city/jaunpur"
                            },
                            {
                                "text": "Port Blair",
                                "link": "https://www.swiggy.com/city/port-blair"
                            },
                            {
                                "text": "Jorhat",
                                "link": "https://www.swiggy.com/city/jorhat"
                            },
                            {
                                "text": "Nandyal",
                                "link": "https://www.swiggy.com/city/nandyal"
                            },
                            {
                                "text": "Biharsharif",
                                "link": "https://www.swiggy.com/city/biharsharif"
                            },
                            {
                                "text": "Buxar",
                                "link": "https://www.swiggy.com/city/buxar"
                            },
                            {
                                "text": "Siwan",
                                "link": "https://www.swiggy.com/city/siwan"
                            },
                            {
                                "text": "Dehri",
                                "link": "https://www.swiggy.com/city/dehri"
                            },
                            {
                                "text": "Bettiah",
                                "link": "https://www.swiggy.com/city/bettiah"
                            },
                            {
                                "text": "Kishanganj",
                                "link": "https://www.swiggy.com/city/kishanganj"
                            },
                            {
                                "text": "Saharsa",
                                "link": "https://www.swiggy.com/city/saharsa"
                            },
                            {
                                "text": "Hajipur",
                                "link": "https://www.swiggy.com/city/hajipur"
                            },
                            {
                                "text": "Motihari",
                                "link": "https://www.swiggy.com/city/motihari"
                            },
                            {
                                "text": "Sasaram",
                                "link": "https://www.swiggy.com/city/sasaram"
                            },
                            {
                                "text": "Munger",
                                "link": "https://www.swiggy.com/city/munger"
                            },
                            {
                                "text": "Katihar",
                                "link": "https://www.swiggy.com/city/katihar"
                            },
                            {
                                "text": "Arrah",
                                "link": "https://www.swiggy.com/city/arrah"
                            },
                            {
                                "text": "Srikakulam",
                                "link": "https://www.swiggy.com/city/srikakulam"
                            },
                            {
                                "text": "Begusarai",
                                "link": "https://www.swiggy.com/city/begusarai"
                            },
                            {
                                "text": "Neyveli",
                                "link": "https://www.swiggy.com/city/neyveli"
                            },
                            {
                                "text": "Waidhan",
                                "link": "https://www.swiggy.com/city/waidhan"
                            },
                            {
                                "text": "Markapur",
                                "link": "https://www.swiggy.com/city/markapur"
                            },
                            {
                                "text": "Chikkaballapur",
                                "link": "https://www.swiggy.com/city/chikkaballapur"
                            },
                            {
                                "text": "Bhatkal",
                                "link": "https://www.swiggy.com/city/bhatkal"
                            },
                            {
                                "text": "Gokak",
                                "link": "https://www.swiggy.com/city/gokak"
                            },
                            {
                                "text": "Itarsi",
                                "link": "https://www.swiggy.com/city/itarsi"
                            },
                            {
                                "text": "Dhar",
                                "link": "https://www.swiggy.com/city/dhar"
                            },
                            {
                                "text": "Chalisgaon",
                                "link": "https://www.swiggy.com/city/chalisgaon"
                            },
                            {
                                "text": "Thiruvallur",
                                "link": "https://www.swiggy.com/city/thiruvallur"
                            },
                            {
                                "text": "Namakkal",
                                "link": "https://www.swiggy.com/city/namakkal"
                            },
                            {
                                "text": "Dharmapuri",
                                "link": "https://www.swiggy.com/city/dharmapuri"
                            },
                            {
                                "text": "Bhandara",
                                "link": "https://www.swiggy.com/city/bhandara"
                            },
                            {
                                "text": "Virudhunagar",
                                "link": "https://www.swiggy.com/city/virudhunagar"
                            },
                            {
                                "text": "Siddipet",
                                "link": "https://www.swiggy.com/city/siddipet"
                            },
                            {
                                "text": "Gadwal",
                                "link": "https://www.swiggy.com/city/gadwal"
                            },
                            {
                                "text": "Bodhan-Rural",
                                "link": "https://www.swiggy.com/city/bodhan-rural"
                            },
                            {
                                "text": "Kamareddy",
                                "link": "https://www.swiggy.com/city/kamareddy"
                            },
                            {
                                "text": "Jhunjhunu",
                                "link": "https://www.swiggy.com/city/jhunjhunu"
                            },
                            {
                                "text": "Kapurthala",
                                "link": "https://www.swiggy.com/city/kapurthala"
                            },
                            {
                                "text": "Sangrur",
                                "link": "https://www.swiggy.com/city/sangrur"
                            },
                            {
                                "text": "Gurdaspur",
                                "link": "https://www.swiggy.com/city/gurdaspur"
                            },
                            {
                                "text": "Ramgarh",
                                "link": "https://www.swiggy.com/city/ramgarh"
                            },
                            {
                                "text": "Bantwal",
                                "link": "https://www.swiggy.com/city/bantwal"
                            },
                            {
                                "text": "Doddaballapura",
                                "link": "https://www.swiggy.com/city/doddaballapura"
                            },
                            {
                                "text": "Buldana",
                                "link": "https://www.swiggy.com/city/buldana"
                            },
                            {
                                "text": "Karad",
                                "link": "https://www.swiggy.com/city/karad"
                            },
                            {
                                "text": "Krishnagiri",
                                "link": "https://www.swiggy.com/city/krishnagiri"
                            },
                            {
                                "text": "Tiptur",
                                "link": "https://www.swiggy.com/city/tiptur"
                            },
                            {
                                "text": "Bhadrachalam",
                                "link": "https://www.swiggy.com/city/bhadrachalam"
                            },
                            {
                                "text": "Mancherial",
                                "link": "https://www.swiggy.com/city/mancherial"
                            },
                            {
                                "text": "Balrampur",
                                "link": "https://www.swiggy.com/city/balrampur"
                            },
                            {
                                "text": "Bharabanki",
                                "link": "https://www.swiggy.com/city/bharabanki"
                            },
                            {
                                "text": "Malout",
                                "link": "https://www.swiggy.com/city/malout"
                            },
                            {
                                "text": "Fatehgarh Sahib",
                                "link": "https://www.swiggy.com/city/fatehgarh-sahib"
                            },
                            {
                                "text": "Ropar",
                                "link": "https://www.swiggy.com/city/ropar"
                            },
                            {
                                "text": "Nangal",
                                "link": "https://www.swiggy.com/city/nangal"
                            },
                            {
                                "text": "Narnaul",
                                "link": "https://www.swiggy.com/city/narnaul"
                            },
                            {
                                "text": "Naraingarh",
                                "link": "https://www.swiggy.com/city/naraingarh"
                            },
                            {
                                "text": "Himmatnagar",
                                "link": "https://www.swiggy.com/city/himmatnagar"
                            },
                            {
                                "text": "Dausa",
                                "link": "https://www.swiggy.com/city/dausa"
                            },
                            {
                                "text": "Jahanabad",
                                "link": "https://www.swiggy.com/city/jahanabad"
                            },
                            {
                                "text": "Samastipur",
                                "link": "https://www.swiggy.com/city/samastipur"
                            },
                            {
                                "text": "Purnea",
                                "link": "https://www.swiggy.com/city/purnea"
                            },
                            {
                                "text": "Berhampur",
                                "link": "https://www.swiggy.com/city/berhampur"
                            },
                            {
                                "text": "Malda",
                                "link": "https://www.swiggy.com/city/malda"
                            },
                            {
                                "text": "Tuni",
                                "link": "https://www.swiggy.com/city/tuni"
                            },
                            {
                                "text": "Puttur",
                                "link": "https://www.swiggy.com/city/puttur"
                            },
                            {
                                "text": "Rayachoty",
                                "link": "https://www.swiggy.com/city/rayachoty"
                            },
                            {
                                "text": "Nirmal",
                                "link": "https://www.swiggy.com/city/nirmal"
                            },
                            {
                                "text": "Mirzapur",
                                "link": "https://www.swiggy.com/city/mirzapur"
                            },
                            {
                                "text": "Tanuku",
                                "link": "https://www.swiggy.com/city/tanuku"
                            },
                            {
                                "text": "Dahod",
                                "link": "https://www.swiggy.com/city/dahod"
                            },
                            {
                                "text": "Barmer",
                                "link": "https://www.swiggy.com/city/barmer"
                            },
                            {
                                "text": "Gangapur City",
                                "link": "https://www.swiggy.com/city/gangapur-city"
                            },
                            {
                                "text": "Mandi Gobindgarh",
                                "link": "https://www.swiggy.com/city/mandi-gobindgarh"
                            },
                            {
                                "text": "Tarn Taran Sahib",
                                "link": "https://www.swiggy.com/city/tarn-taran-sahib"
                            },
                            {
                                "text": "Nakodar",
                                "link": "https://www.swiggy.com/city/nakodar"
                            },
                            {
                                "text": "Ankleshwar",
                                "link": "https://www.swiggy.com/city/ankleshwar"
                            },
                            {
                                "text": "Vyara",
                                "link": "https://www.swiggy.com/city/vyara"
                            },
                            {
                                "text": "Bardoli",
                                "link": "https://www.swiggy.com/city/bardoli"
                            },
                            {
                                "text": "Halol",
                                "link": "https://www.swiggy.com/city/halol"
                            },
                            {
                                "text": "Bijnor",
                                "link": "https://www.swiggy.com/city/bijnor"
                            },
                            {
                                "text": "Sangamner",
                                "link": "https://www.swiggy.com/city/sangamner"
                            },
                            {
                                "text": "Baramati",
                                "link": "https://www.swiggy.com/city/baramati"
                            },
                            {
                                "text": "Betul",
                                "link": "https://www.swiggy.com/city/betul"
                            },
                            {
                                "text": "Chhatarpur",
                                "link": "https://www.swiggy.com/city/chhatarpur"
                            },
                            {
                                "text": "Balaghat",
                                "link": "https://www.swiggy.com/city/balaghat"
                            },
                            {
                                "text": "Sivakasi",
                                "link": "https://www.swiggy.com/city/sivakasi"
                            },
                            {
                                "text": "Viluppuram",
                                "link": "https://www.swiggy.com/city/viluppuram"
                            },
                            {
                                "text": "Ramanathapuram",
                                "link": "https://www.swiggy.com/city/ramanathapuram"
                            },
                            {
                                "text": "Sirsi",
                                "link": "https://www.swiggy.com/city/sirsi"
                            },
                            {
                                "text": "Theni",
                                "link": "https://www.swiggy.com/city/theni"
                            },
                            {
                                "text": "Karur",
                                "link": "https://www.swiggy.com/city/karur"
                            },
                            {
                                "text": "Karwar",
                                "link": "https://www.swiggy.com/city/karwar"
                            },
                            {
                                "text": "Sindhanur",
                                "link": "https://www.swiggy.com/city/sindhanur"
                            },
                            {
                                "text": "Kannur",
                                "link": "https://www.swiggy.com/city/kannur"
                            },
                            {
                                "text": "Noida 1",
                                "link": "https://www.swiggy.com/city/noida-1"
                            },
                            {
                                "text": "Thiruvalla",
                                "link": "https://www.swiggy.com/city/thiruvalla"
                            },
                            {
                                "text": "Thodupuzha",
                                "link": "https://www.swiggy.com/city/thodupuzha"
                            },
                            {
                                "text": "Kadiri",
                                "link": "https://www.swiggy.com/city/kadiri"
                            },
                            {
                                "text": "Kavali",
                                "link": "https://www.swiggy.com/city/kavali"
                            },
                            {
                                "text": "Tezpur",
                                "link": "https://www.swiggy.com/city/tezpur"
                            },
                            {
                                "text": "Kayamkulam",
                                "link": "https://www.swiggy.com/city/kayamkulam"
                            },
                            {
                                "text": "Kottarakkara",
                                "link": "https://www.swiggy.com/city/kottarakkara"
                            },
                            {
                                "text": "Mandi Dabwali",
                                "link": "https://www.swiggy.com/city/mandi-dabwali"
                            },
                            {
                                "text": "Fatehabad",
                                "link": "https://www.swiggy.com/city/fatehabad"
                            },
                            {
                                "text": "Jagraon",
                                "link": "https://www.swiggy.com/city/jagraon"
                            },
                            {
                                "text": "Mansa",
                                "link": "https://www.swiggy.com/city/mansa"
                            },
                            {
                                "text": "Pinjore City",
                                "link": "https://www.swiggy.com/city/pinjore-city"
                            },
                            {
                                "text": "Fazilka",
                                "link": "https://www.swiggy.com/city/fazilka"
                            },
                            {
                                "text": "Baddi",
                                "link": "https://www.swiggy.com/city/baddi"
                            },
                            {
                                "text": "Solan",
                                "link": "https://www.swiggy.com/city/solan"
                            },
                            {
                                "text": "Daltonganj",
                                "link": "https://www.swiggy.com/city/daltonganj"
                            },
                            {
                                "text": "Balangir",
                                "link": "https://www.swiggy.com/city/balangir"
                            },
                            {
                                "text": "Kothagudem",
                                "link": "https://www.swiggy.com/city/kothagudem"
                            },
                            {
                                "text": "Hansi",
                                "link": "https://www.swiggy.com/city/hansi"
                            },
                            {
                                "text": "Aurangabad_Bihar",
                                "link": "https://www.swiggy.com/city/aurangabadbihar"
                            },
                            {
                                "text": "Gopalganj",
                                "link": "https://www.swiggy.com/city/gopalganj"
                            },
                            {
                                "text": "Jharsuguda",
                                "link": "https://www.swiggy.com/city/jharsuguda"
                            },
                            {
                                "text": "Tohana",
                                "link": "https://www.swiggy.com/city/tohana"
                            },
                            {
                                "text": "Jhalawar",
                                "link": "https://www.swiggy.com/city/jhalawar"
                            },
                            {
                                "text": "Sivasagar",
                                "link": "https://www.swiggy.com/city/sivasagar"
                            },
                            {
                                "text": "Bagdogra",
                                "link": "https://www.swiggy.com/city/bagdogra"
                            },
                            {
                                "text": "Kendrapada",
                                "link": "https://www.swiggy.com/city/kendrapada"
                            },
                            {
                                "text": "Mallapuram (Do not Use)",
                                "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
                            },
                            {
                                "text": "Veraval",
                                "link": "https://www.swiggy.com/city/veraval"
                            },
                            {
                                "text": "Daman",
                                "link": "https://www.swiggy.com/city/daman"
                            },
                            {
                                "text": "Chiplun",
                                "link": "https://www.swiggy.com/city/chiplun"
                            },
                            {
                                "text": "Silvassa",
                                "link": "https://www.swiggy.com/city/silvassa"
                            },
                            {
                                "text": "Lonavla",
                                "link": "https://www.swiggy.com/city/lonavla"
                            },
                            {
                                "text": "Bongaigaon",
                                "link": "https://www.swiggy.com/city/bongaigaon"
                            },
                            {
                                "text": "Golaghat",
                                "link": "https://www.swiggy.com/city/golaghat"
                            },
                            {
                                "text": "Duliajan",
                                "link": "https://www.swiggy.com/city/duliajan"
                            },
                            {
                                "text": "Bolpur",
                                "link": "https://www.swiggy.com/city/bolpur"
                            },
                            {
                                "text": "Madhubani",
                                "link": "https://www.swiggy.com/city/madhubani"
                            },
                            {
                                "text": "Balasore",
                                "link": "https://www.swiggy.com/city/balasore"
                            },
                            {
                                "text": "Palampur",
                                "link": "https://www.swiggy.com/city/palampur"
                            },
                            {
                                "text": "Kotdwar",
                                "link": "https://www.swiggy.com/city/kotdwar"
                            },
                            {
                                "text": "Koppal",
                                "link": "https://www.swiggy.com/city/koppal"
                            },
                            {
                                "text": "Chikhli",
                                "link": "https://www.swiggy.com/city/chikhli"
                            },
                            {
                                "text": "Dahanu",
                                "link": "https://www.swiggy.com/city/dahanu"
                            },
                            {
                                "text": "Itanagar",
                                "link": "https://www.swiggy.com/city/itanagar"
                            },
                            {
                                "text": "Rangpo",
                                "link": "https://www.swiggy.com/city/rangpo"
                            },
                            {
                                "text": "Aizawl",
                                "link": "https://www.swiggy.com/city/aizawl"
                            },
                            {
                                "text": "Gangtok",
                                "link": "https://www.swiggy.com/city/gangtok"
                            },
                            {
                                "text": "Mayiladuthurai",
                                "link": "https://www.swiggy.com/city/mayiladuthurai"
                            },
                            {
                                "text": "Kannauj",
                                "link": "https://www.swiggy.com/city/kannauj"
                            },
                            {
                                "text": "Cooch Behar",
                                "link": "https://www.swiggy.com/city/cooch-behar"
                            },
                            {
                                "text": "Palani",
                                "link": "https://www.swiggy.com/city/palani"
                            },
                            {
                                "text": "Bilimora",
                                "link": "https://www.swiggy.com/city/bilimora"
                            },
                            {
                                "text": "Boisar",
                                "link": "https://www.swiggy.com/city/boisar"
                            },
                            {
                                "text": "Kohima",
                                "link": "https://www.swiggy.com/city/kohima"
                            },
                            {
                                "text": "Naharlagun",
                                "link": "https://www.swiggy.com/city/naharlagun"
                            },
                            {
                                "text": "Dumka",
                                "link": "https://www.swiggy.com/city/dumka"
                            },
                            {
                                "text": "Rajsamand",
                                "link": "https://www.swiggy.com/city/rajsamand"
                            },
                            {
                                "text": "Gauriganj",
                                "link": "https://www.swiggy.com/city/gauriganj"
                            },
                            {
                                "text": "Bodinayakanur",
                                "link": "https://www.swiggy.com/city/bodinayakanur"
                            },
                            {
                                "text": "Bhawanipatna",
                                "link": "https://www.swiggy.com/city/bhawanipatna"
                            },
                            {
                                "text": "Baran",
                                "link": "https://www.swiggy.com/city/baran"
                            },
                            {
                                "text": "Narsinghpur",
                                "link": "https://www.swiggy.com/city/narsinghpur"
                            },
                            {
                                "text": "Kovilpatti",
                                "link": "https://www.swiggy.com/city/kovilpatti"
                            },
                            {
                                "text": "Pusad",
                                "link": "https://www.swiggy.com/city/pusad"
                            },
                            {
                                "text": "Kendujhar",
                                "link": "https://www.swiggy.com/city/kendujhar"
                            },
                            {
                                "text": "Manali",
                                "link": "https://www.swiggy.com/city/manali"
                            },
                            {
                                "text": "Diu",
                                "link": "https://www.swiggy.com/city/diu"
                            },
                            {
                                "text": "Khamgaon",
                                "link": "https://www.swiggy.com/city/khamgaon"
                            },
                            {
                                "text": "Ramanagara",
                                "link": "https://www.swiggy.com/city/ramanagara"
                            },
                            {
                                "text": "Alipurduar",
                                "link": "https://www.swiggy.com/city/alipurduar"
                            },
                            {
                                "text": "Almora",
                                "link": "https://www.swiggy.com/city/almora"
                            },
                            {
                                "text": "Jhargram",
                                "link": "https://www.swiggy.com/city/jhargram"
                            },
                            {
                                "text": "Arambagh",
                                "link": "https://www.swiggy.com/city/arambagh"
                            },
                            {
                                "text": "Bhadohi",
                                "link": "https://www.swiggy.com/city/bhadohi"
                            },
                            {
                                "text": "Tenkasi",
                                "link": "https://www.swiggy.com/city/tenkasi"
                            },
                            {
                                "text": "Srivilliputhur",
                                "link": "https://www.swiggy.com/city/srivilliputhur"
                            },
                            {
                                "text": "Chidambaram",
                                "link": "https://www.swiggy.com/city/chidambaram"
                            },
                            {
                                "text": "Rajgarh",
                                "link": "https://www.swiggy.com/city/rajgarh"
                            },
                            {
                                "text": "Pratapgarh",
                                "link": "https://www.swiggy.com/city/pratapgarh"
                            },
                            {
                                "text": "Washim",
                                "link": "https://www.swiggy.com/city/washim"
                            },
                            {
                                "text": "Raghunathpur",
                                "link": "https://www.swiggy.com/city/raghunathpur"
                            },
                            {
                                "text": "Suri",
                                "link": "https://www.swiggy.com/city/suri"
                            },
                            {
                                "text": "Kadayanallur",
                                "link": "https://www.swiggy.com/city/kadayanallur"
                            },
                            {
                                "text": "Thiruvarur",
                                "link": "https://www.swiggy.com/city/thiruvarur"
                            },
                            {
                                "text": "Ranaghat-WB",
                                "link": "https://www.swiggy.com/city/ranaghat-wb"
                            },
                            {
                                "text": "Wayanad",
                                "link": "https://www.swiggy.com/city/wayanad"
                            },
                            {
                                "text": "Perambalur",
                                "link": "https://www.swiggy.com/city/perambalur"
                            },
                            {
                                "text": "Paramakudi",
                                "link": "https://www.swiggy.com/city/paramakudi"
                            },
                            {
                                "text": "Bela Pratapgarh",
                                "link": "https://www.swiggy.com/city/bela-pratapgarh"
                            },
                            {
                                "text": "Mahoba",
                                "link": "https://www.swiggy.com/city/mahoba"
                            },
                            {
                                "text": "Sitamarhi",
                                "link": "https://www.swiggy.com/city/sitamarhi"
                            },
                            {
                                "text": "Chakdaha",
                                "link": "https://www.swiggy.com/city/chakdaha"
                            },
                            {
                                "text": "Khalilabad",
                                "link": "https://www.swiggy.com/city/khalilabad"
                            },
                            {
                                "text": "Pattukkottai",
                                "link": "https://www.swiggy.com/city/pattukkottai"
                            },
                            {
                                "text": "Tindivanam",
                                "link": "https://www.swiggy.com/city/tindivanam"
                            },
                            {
                                "text": "Tiruttani",
                                "link": "https://www.swiggy.com/city/tiruttani"
                            },
                            {
                                "text": "Gangarampur",
                                "link": "https://www.swiggy.com/city/gangarampur"
                            },
                            {
                                "text": "Dharapuram",
                                "link": "https://www.swiggy.com/city/dharapuram"
                            },
                            {
                                "text": "Arakkonam",
                                "link": "https://www.swiggy.com/city/arakkonam"
                            },
                            {
                                "text": "Sirkali",
                                "link": "https://www.swiggy.com/city/sirkali"
                            },
                            {
                                "text": "Mettupalayam",
                                "link": "https://www.swiggy.com/city/mettupalayam"
                            },
                            {
                                "text": "Digboi",
                                "link": "https://www.swiggy.com/city/digboi"
                            },
                            {
                                "text": "Biswanath Chariali",
                                "link": "https://www.swiggy.com/city/biswanath-chariali"
                            },
                            {
                                "text": "Nalbari",
                                "link": "https://www.swiggy.com/city/nalbari"
                            },
                            {
                                "text": "Shirdi city",
                                "link": "https://www.swiggy.com/city/shirdi-city"
                            },
                            {
                                "text": "Mukerian",
                                "link": "https://www.swiggy.com/city/mukerian"
                            },
                            {
                                "text": "Hosur",
                                "link": "https://www.swiggy.com/city/hosur"
                            },
                            {
                                "text": "Palakollu",
                                "link": "https://www.swiggy.com/city/palakollu"
                            },
                            {
                                "text": "Ravulapalem",
                                "link": "https://www.swiggy.com/city/ravulapalem"
                            },
                            {
                                "text": "Barh",
                                "link": "https://www.swiggy.com/city/barh"
                            },
                            {
                                "text": "Palghar",
                                "link": "https://www.swiggy.com/city/palghar"
                            },
                            {
                                "text": "Kushalnagar",
                                "link": "https://www.swiggy.com/city/kushalnagar"
                            },
                            {
                                "text": "Dungarpur",
                                "link": "https://www.swiggy.com/city/dungarpur"
                            },
                            {
                                "text": "Chaibasa",
                                "link": "https://www.swiggy.com/city/chaibasa"
                            },
                            {
                                "text": "Haveri",
                                "link": "https://www.swiggy.com/city/haveri"
                            },
                            {
                                "text": "Karaikal",
                                "link": "https://www.swiggy.com/city/karaikal"
                            },
                            {
                                "text": "Jjajjar",
                                "link": "https://www.swiggy.com/city/jjajjar"
                            },
                            {
                                "text": "Kokrajhar",
                                "link": "https://www.swiggy.com/city/kokrajhar"
                            },
                            {
                                "text": "Rangia",
                                "link": "https://www.swiggy.com/city/rangia"
                            },
                            {
                                "text": "Hamirpur",
                                "link": "https://www.swiggy.com/city/hamirpur"
                            },
                            {
                                "text": "Una",
                                "link": "https://www.swiggy.com/city/una"
                            },
                            {
                                "text": "Sulthan Bathery",
                                "link": "https://www.swiggy.com/city/sulthan-bathery"
                            },
                            {
                                "text": "Rayagada",
                                "link": "https://www.swiggy.com/city/rayagada"
                            },
                            {
                                "text": "Paradeep",
                                "link": "https://www.swiggy.com/city/paradeep"
                            },
                            {
                                "text": "Mandapeta",
                                "link": "https://www.swiggy.com/city/mandapeta"
                            },
                            {
                                "text": "Jamui",
                                "link": "https://www.swiggy.com/city/jamui"
                            },
                            {
                                "text": "Pilkhuwa",
                                "link": "https://www.swiggy.com/city/pilkhuwa"
                            },
                            {
                                "text": "Parvathipuram",
                                "link": "https://www.swiggy.com/city/parvathipuram"
                            },
                            {
                                "text": "Ambajogai",
                                "link": "https://www.swiggy.com/city/ambajogai"
                            },
                            {
                                "text": "Araria",
                                "link": "https://www.swiggy.com/city/araria"
                            },
                            {
                                "text": "North Lakhimpur",
                                "link": "https://www.swiggy.com/city/north-lakhimpur"
                            },
                            {
                                "text": "Rajampet",
                                "link": "https://www.swiggy.com/city/rajampet"
                            },
                            {
                                "text": "Udumalaipettai",
                                "link": "https://www.swiggy.com/city/udumalaipettai"
                            },
                            {
                                "text": "Tirupattur",
                                "link": "https://www.swiggy.com/city/tirupattur"
                            },
                            {
                                "text": "Hojai",
                                "link": "https://www.swiggy.com/city/hojai"
                            },
                            {
                                "text": "Khagaria",
                                "link": "https://www.swiggy.com/city/khagaria"
                            },
                            {
                                "text": "Dasuya",
                                "link": "https://www.swiggy.com/city/dasuya"
                            },
                            {
                                "text": "Gudur",
                                "link": "https://www.swiggy.com/city/gudur"
                            },
                            {
                                "text": "Sullurpeta",
                                "link": "https://www.swiggy.com/city/sullurpeta"
                            },
                            {
                                "text": "Piler",
                                "link": "https://www.swiggy.com/city/piler"
                            },
                            {
                                "text": "SankaranKoil",
                                "link": "https://www.swiggy.com/city/sankarankoil"
                            },
                            {
                                "text": "Nabha",
                                "link": "https://www.swiggy.com/city/nabha"
                            },
                            {
                                "text": "LPU - Phagwara",
                                "link": "https://www.swiggy.com/city/lpu-phagwara"
                            },
                            {
                                "text": "Jangipur",
                                "link": "https://www.swiggy.com/city/jangipur"
                            },
                            {
                                "text": "Roha",
                                "link": "https://www.swiggy.com/city/roha"
                            }
                        ],
                        "id": "footer_content"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
                        "citySlug": "guntur",
                        "lat": "16.312817",
                        "lng": "80.418503",
                        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
                        "gandalfRequest": '{"sortAttribute":"relevance","isFiltered":false,"queryId":"seo-data-e484238b-33a2-4828-b005-ebf294eab8ae","seoParams":{"apiName":"FoodHomePage","brandId":"","seoUrl":"www.swiggy.com","pageType":"FOOD_HOME_PAGE"}}',
                        "id": "meta_data",
                        "metaInfo": {
                            "pageType": "FOOD_HOME_PAGE",
                            "pageTitle": "Order Food Online from India's Best Food Delivery Service | Swiggy",
                            "pageMetaDescription": "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
                            "pageKeywords": "Food delivery, Online food order, Online food dleivery"
                        },
                        "screenType": "filteredCollection",
                        "seoParams": {
                            "apiName": "FoodHomePage",
                            "seoUrl": "www.swiggy.com",
                            "pageType": "FOOD_HOME_PAGE"
                        }
                    }
                }
            }
        ],
        "firstOffsetRequest": true,
        "cacheExpiryTime": 240,
        "nextFetch": 1
    },
    "tid": "3c790b3f-7bb2-4fbb-bf70-98ee86071339",
    "sid": "bjobd061-f68a-455a-8d3f-7b1ade8a2a72",
    "deviceId": "1f16e5d9-2012-5515-4098-9726ac1d5807",
    "csrfToken": "PTpKcSl2kXyn-YVMJ3IW1eNv4-1taPBVBs1OgtQk"
};
const MenuData = exports.MenuData = {
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "678626",
                            "name": "Istah Shawarmas",
                            "city": "Guntur",
                            "slugs": {
                                "restaurant": "istah---the-mediterranean-way-brodipet-&-arundalpet-brodipet-&-arundalpet",
                                "city": "guntur"
                            },
                            "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                            "cloudinaryImageId": "0a37282845f641a5995d866285767803",
                            "locality": "Ward No 5",
                            "areaName": "Brodipet & Arundalpet",
                            "costForTwo": "30000",
                            "costForTwoMessage": "\u20B9300 for two",
                            "cuisines": [
                                "Mediterranean",
                                "Snacks"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                                "restaurantId": "678626",
                                "fees": [
                                    {
                                        "name": "distance"
                                    },
                                    {
                                        "name": "time"
                                    },
                                    {
                                        "name": "special"
                                    }
                                ],
                                "title": "Delivery Charge",
                                "amount": "0"
                            },
                            "parentId": "468195",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+ ratings",
                            "sla": {
                                "restaurantId": "678626",
                                "deliveryTime": 32,
                                "minDeliveryTime": 30,
                                "maxDeliveryTime": 35,
                                "lastMileTravel": 3.8,
                                "serviceability": "SERVICEABLE",
                                "stressFactor": 1,
                                "rainMode": "RAIN_MODE_NONE",
                                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                                "zoneId": 864,
                                "slaString": "30-35 MINS",
                                "lastMileTravelString": "3.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2024-01-13 00:00:00",
                                "visibility": true,
                                "opened": true,
                                "restaurantClosedMeta": {}
                            },
                            "aggregatedDiscountInfo": {
                                "header": "60% off",
                                "shortDescriptionList": [
                                    {
                                        "meta": "60% off | Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "FLAT150 off | Use FLATDEAL",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "60% off up to \u20B9100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "FLAT150 off | Use FLATDEAL",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "visible": true
                            },
                            "badges": {},
                            "slugString": "istah---the-mediterranean-way-brodipet-&-arundalpet-brodipet-&-arundalpet",
                            "isOpen": true,
                            "labels": [
                                {
                                    "title": "Timings",
                                    "message": "null"
                                },
                                {
                                    "title": "Address",
                                    "message": "D.NO.31-4, GB PRIME, 363, 4th Ln, Sali Pet, Arundelpet, Guntur, Andhra Pradesh 522002"
                                },
                                {
                                    "title": "Cuisines",
                                    "message": "Mediterranean,Snacks"
                                }
                            ],
                            "totalRatings": 1000,
                            "aggregatedDiscountInfoV2": {
                                "header": "60% off",
                                "shortDescriptionList": [
                                    {
                                        "meta": "60% off | Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "FLAT150 off | Use FLATDEAL",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "60% off up to \u20B9100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "FLAT150 off | Use FLATDEAL",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "couponDetailsCta": "View coupon details"
                            },
                            "type": "F",
                            "nudgeBanners": [
                                {
                                    "minValue": 289,
                                    "maxValue": 399,
                                    "priority": 2,
                                    "couponCode": "FLATDEAL",
                                    "discountInfo": {
                                        "discountType": "Flat",
                                        "value": 150
                                    },
                                    "lockedMessage": "Add items worth \u20B9<amount> to save \u20B9150 | Code FLATDEAL",
                                    "unlockedMessage": "FLATDEAL Coupon Unlocked! Use it to save \u20B9150",
                                    "logoCtx": {}
                                },
                                {
                                    "minValue": 560,
                                    "maxValue": 800,
                                    "priority": 3,
                                    "couponCode": "PARTY",
                                    "discountInfo": {
                                        "discountType": "Percentage",
                                        "value": 20
                                    },
                                    "lockedMessage": "Add items worth \u20B9<amount> to unlock flat 20% off | Code PARTY",
                                    "unlockedMessage": "PARTY Coupon Unlocked! Use it to save flat 20% off",
                                    "logoCtx": {}
                                }
                            ],
                            "headerBanner": {
                                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/678626"
                            },
                            "ratingSlab": "RATING_SLAB_5",
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "hasBestsellerItems": true,
                            "cartOrderabilityNudgeBanner": {
                                "parameters": {},
                                "presentation": {}
                            },
                            "latLong": "16.304787,80.44484"
                        },
                        "analytics": {}
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
                        "sectionId": "POP_UP_CROUTON_MENU"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "columns": 5,
                            "horizontalScrollEnabled": true,
                            "itemSpacing": 12,
                            "lineSpacing": 10,
                            "widgetPadding": {},
                            "containerStyle": {
                                "containerPadding": {
                                    "left": 10,
                                    "right": 10,
                                    "bottom": 16
                                }
                            },
                            "scrollBar": {}
                        },
                        "id": "offerCollectionWidget_UX4",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                "offers": [
                                    {
                                        "info": {
                                            "header": "60% OFF UPTO \u20B9100",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "f54d9e57-ddee-4a49-b96a-7d38997199b1"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE TRYNEW",
                                            "description": "ABOVE \u20B9159",
                                            "offerType": "offers",
                                            "restId": "678626",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT \u20B9150 OFF",
                                            "offerTag": "FLAT DEAL",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "e9a9109d-a8e1-42cd-9dfe-c6f387416af1"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE FLATDEAL",
                                            "description": "ABOVE \u20B9399",
                                            "offerType": "offers",
                                            "restId": "678626",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT 20% OFF",
                                            "offerTag": "FLAT DEAL",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "126f7f10-e611-4006-8f11-58195f731fee"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE PARTY",
                                            "description": "ABOVE \u20B9800",
                                            "offerType": "offers",
                                            "restId": "678626",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT \u20B9175 OFF",
                                            "offerTag": "DEFAULT",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "840a5e91-a815-43fd-ad55-596ab1f28024"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE MEGASAVER",
                                            "description": "ABOVE \u20B9499",
                                            "offerType": "offers",
                                            "restId": "678626",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT \u20B9100 OFF",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                                            "offerIds": [
                                                "8a152532-4401-414c-905c-00e0b864e478"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "NO CODE REQUIRED",
                                            "description": "ABOVE \u20B9550",
                                            "offerType": "offers",
                                            "restId": "678626",
                                            "offerLogo": "rng/md/ads/production/cd60f23dc2ac83be906d0f6ba55d3d12",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }
                                ],
                                "habitMilestoneInfo": {
                                    "callout": {}
                                }
                            }
                        }
                    }
                }
            },
            {
                "groupedCard": {
                    "cardGroupMap": {
                        "REGULAR": {
                            "cards": [
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                            "badges": {},
                                            "vegOnlyDetails": {
                                                "imageId": "AutoVegOnly_qkjowj",
                                                "title": "Showing only vegetarian options.",
                                                "description": "Tap on the VEG ONLY button to turn off the setting"
                                            },
                                            "topRatedFilter": {},
                                            "kidsCategoryFilter": {
                                                "attributes": {
                                                    "displayText": "Kids Favourites",
                                                    "tooltip": {
                                                        "enabled": true,
                                                        "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                                                    }
                                                }
                                            },
                                            "vegFilter": {
                                                "attributes": {
                                                    "displayText": "VEG"
                                                }
                                            },
                                            "nonvegFilter": {
                                                "attributes": {
                                                    "displayText": "NONVEG"
                                                }
                                            }
                                        },
                                        "relevance": {
                                            "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                                            "sectionId": "MENU_FILTER_TOGGLE"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                                            "title": "Top Picks",
                                            "carousel": [
                                                {
                                                    "type": "TopCarousel",
                                                    "subtype": "image",
                                                    "bannerId": "1418457",
                                                    "creativeId": "TopPicks/SChSh",
                                                    "title": "Spicy Chicken Shawarma",
                                                    "description": " ",
                                                    "fontColor": "#FFFFFF",
                                                    "dish": {
                                                        "info": {
                                                            "id": "124313335",
                                                            "name": "Spicy Chicken Shawarma",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "Indulge in our zesty Hot and Spicy chicken shawarma, generously smothered in our signature house-made mayonnaise and tantalizing sauce.",
                                                            "imageId": "07966f49c87dc358fb329eaa23fb3070",
                                                            "inStock": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "115890729",
                                                                    "groupName": "Choice of Preparation",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415282",
                                                                            "name": "Rumali",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415283",
                                                                            "name": "Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "type": "TopCarousel",
                                                    "subtype": "image",
                                                    "bannerId": "1418461",
                                                    "creativeId": "TopPicks/IChSha",
                                                    "title": "Istah's Chicken Shawarma (Khubus)",
                                                    "description": " ",
                                                    "fontColor": "#FFFFFF",
                                                    "dish": {
                                                        "info": {
                                                            "id": "122680269",
                                                            "name": "Istah's Chicken Shawarma (Khubus)",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Khubus loaded with diced chicken (contains more chicken instead of onions). Egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat and milk. Energy : 685 Kcal/serve. (213 gms).",
                                                            "imageId": "c055d974a8a59f4b93fe7beb119d6654",
                                                            "inStock": 1,
                                                            "price": 19900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720834",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720835",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720836",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720837",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "type": "TopCarousel",
                                                    "subtype": "image",
                                                    "bannerId": "1418465",
                                                    "creativeId": "TopPicks/PPSha",
                                                    "title": "Paneer Packed Shawarma (Rumali) ",
                                                    "description": " ",
                                                    "fontColor": "#FFFFFF",
                                                    "dish": {
                                                        "info": {
                                                            "id": "122680271",
                                                            "name": "Paneer Packed Shawarma (Rumali) ",
                                                            "category": "Classic Shawarmas",
                                                            "description": "Soft Rumali loaded with grilled paneer and salad. Loaded with rich veg garlic mayonnaise and with a touch of in-house sauce. Contains  wheat and milk. Energy : 547.4 Kcal. (248 gms).",
                                                            "imageId": "d15bef52030c934c14948b9fc2aeb32b",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720846",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720847",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720848",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720849",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "type": "TopCarousel",
                                                    "subtype": "image",
                                                    "bannerId": "1418471",
                                                    "creativeId": "TopPicks/CS",
                                                    "title": "Chicken Sabbah (Rumali Wrap)",
                                                    "description": " ",
                                                    "fontColor": "#FFFFFF",
                                                    "dish": {
                                                        "info": {
                                                            "id": "110714736",
                                                            "name": "Chicken Sabbah (Rumali Wrap)",
                                                            "category": "Sabbah Shawarmas & Sahaan",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Fresh rumali loaded with diced chicken, boiled eggs, french fries. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 789 Kcal. (286 gms).",
                                                            "imageId": "52c3993fbae353add85c34e77f9f2412",
                                                            "inStock": 1,
                                                            "price": 21900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Classic Shawarmas",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122680268",
                                                            "name": "Chicken Shawarma (Rumali)",
                                                            "category": "Classic Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Fresh rumali loaded with diced chicken and salad. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 673 Kcal. (253 gms).",
                                                            "imageId": "8ce79a3f878d36e7367480ba9002dab9",
                                                            "inStock": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720829",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720830",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720831",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720832",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "401 ratings",
                                                                    "ratingCountV2": "401"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122680267",
                                                            "name": "Chicken Shawarma (Khubus)",
                                                            "category": "Classic Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Khubus loaded with diced chicken and salad. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat, milk & soy. Energy : 687 Kcal. (243 gms).",
                                                            "imageId": "0d710b58c615f12d5f0f0999e2d55a9d",
                                                            "inStock": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720824",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720825",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720826",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720827",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "64 ratings",
                                                                    "ratingCountV2": "64"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122680271",
                                                            "name": "Paneer Packed Shawarma (Rumali) ",
                                                            "category": "Classic Shawarmas",
                                                            "description": "Soft Rumali loaded with grilled paneer and salad. Loaded with rich veg garlic mayonnaise and with a touch of in-house sauce. Contains  wheat and milk. Energy : 547.4 Kcal. (248 gms).",
                                                            "imageId": "d15bef52030c934c14948b9fc2aeb32b",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720846",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720847",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720848",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720849",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "120 ratings",
                                                                    "ratingCountV2": "120"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714753",
                                                            "name": "Falafel Shawarma in Khubus",
                                                            "category": "Classic Shawarmas",
                                                            "description": "Khubus loaded with salad and smashed kebabs made from chickpeas, onions and garlic. Loaded with rich veg garlic mayonnaise and with a touch of in-house sauce. Contains gluten, wheat and milk. Energy : 468 Kcal. (216 gms).",
                                                            "imageId": "84c89f88eeec0d5d2f5f18a8ef787ab0",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 17900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720851",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720852",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720853",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720854",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.6",
                                                                    "ratingCount": "28 ratings",
                                                                    "ratingCountV2": "28"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Whole Wheat Shawarmas",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122675539",
                                                            "name": "Istah's Chicken Shawarma in Wheat",
                                                            "category": "Whole Wheat Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Wheat tortilla loaded with diced chicken (contains more chicken instead of onions). Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 708 Kcal. (233 gms).",
                                                            "imageId": "0328ebda62ff7aba546578f5cd41ae08",
                                                            "inStock": 1,
                                                            "price": 22900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "37 ratings",
                                                                    "ratingCountV2": "37"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122675538",
                                                            "name": "Chicken Shawarma in Wheat",
                                                            "category": "Whole Wheat Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Wheat Tortilla loaded with diced chicken and salad. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 685 Kcal. (243 gms).",
                                                            "imageId": "7b48f978832e1c7776db8f6c38a262d9",
                                                            "inStock": 1,
                                                            "price": 21900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "19 ratings",
                                                                    "ratingCountV2": "19"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122675540",
                                                            "name": "Paneer Packed Shawarma in Wheat",
                                                            "category": "Whole Wheat Shawarmas",
                                                            "description": "Wheat tortilla loaded with grilled paneer and salad. Loaded with rich veg garlic mayonnaise and with a touch of in-house sauce. Contains  wheat & milk. Energy : 798 Kcal. (238 gms).",
                                                            "imageId": "c82e0a98ad8528455e8fb54066f384fa",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 22900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "13 ratings",
                                                                    "ratingCountV2": "13"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714733",
                                                            "name": "Falafel Shawarma in Wheat",
                                                            "category": "Whole Wheat Shawarmas",
                                                            "description": "Wheat tortilla loaded with salad and smashed kebabs made from chickpeas, onions and garlic. Loaded with rich veg garlic mayonnaise and with a touch of in-house sauce. Contains  wheat & milk. Energy : 695 Kcal. (206 gms).",
                                                            "imageId": "a5a3b62ee647daa4a44dab5fc47c892b",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 20900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "39 ratings",
                                                                    "ratingCountV2": "39"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Fully Meat Loaded Shawarmas",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122680270",
                                                            "name": "Istah's Chicken Shawarma (Rumali)",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Soft rumali loaded with diced chicken (contains more chicken instead of onions). +egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat and milk. Energy : 696 Kcal/serve. (243 gms).",
                                                            "imageId": "c5e3a483122ca81a5a923ebe6e629dca",
                                                            "inStock": 1,
                                                            "price": 19900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720839",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720840",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720841",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720842",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "584 ratings",
                                                                    "ratingCountV2": "584"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "124313335",
                                                            "name": "Spicy Chicken Shawarma",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "Indulge in our zesty Hot and Spicy chicken shawarma, generously smothered in our signature house-made mayonnaise and tantalizing sauce.",
                                                            "imageId": "07966f49c87dc358fb329eaa23fb3070",
                                                            "inStock": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "115890729",
                                                                    "groupName": "Choice of Preparation",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415282",
                                                                            "name": "Rumali",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415283",
                                                                            "name": "Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "70 ratings",
                                                                    "ratingCountV2": "70"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "124313336",
                                                            "name": "Spicy Paneer Shawarma",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "Paneer sizzling with bold spices, generously smothered in our signature house-made mayo and sauce.",
                                                            "imageId": "7ed33e06f4dfefd7fe7212de507f13a9",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "115890730",
                                                                    "groupName": "Choice of Preparation",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415282",
                                                                            "name": "Rumali",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415283",
                                                                            "name": "Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "18 ratings",
                                                                    "ratingCountV2": "18"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128419961",
                                                            "name": "Peri Peri Chicken Shawarma    ",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "Experience a tantalizing twist on Shawarma with our loaded Peri Peri chicken and signature house sauce.",
                                                            "imageId": "ce6fe0f0feec453110b980bb4e741a43",
                                                            "inStock": 1,
                                                            "price": 18900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488960",
                                                                    "groupName": "Choice of Preparation",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415282",
                                                                            "name": "Rumali",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415283",
                                                                            "name": "Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.5",
                                                                    "ratingCount": "7 ratings",
                                                                    "ratingCountV2": "7"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122680269",
                                                            "name": "Istah's Chicken Shawarma (Khubus)",
                                                            "category": "Fully Meat Loaded Shawarmas",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Khubus loaded with diced chicken (contains more chicken instead of onions). Egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat and milk. Energy : 685 Kcal/serve. (213 gms).",
                                                            "imageId": "c055d974a8a59f4b93fe7beb119d6654",
                                                            "inStock": 1,
                                                            "price": 19900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "119720834",
                                                                    "groupName": "Dips",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796997",
                                                                            "name": "Garlic Mayonnaise (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796998",
                                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                                            "price": 3900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796996",
                                                                            "name": "Hummus (100 gms)",
                                                                            "price": 9900,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 3,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720835",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720836",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "119720837",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "103 ratings",
                                                                    "ratingCountV2": "103"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Sabbah Shawarmas & Sahaan",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714736",
                                                            "name": "Chicken Sabbah (Rumali Wrap)",
                                                            "category": "Sabbah Shawarmas & Sahaan",
                                                            "description": "(100% Halal and Breast Boneless Chicken) Fresh rumali loaded with diced chicken, boiled eggs, french fries. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 789 Kcal. (286 gms).",
                                                            "imageId": "52c3993fbae353add85c34e77f9f2412",
                                                            "inStock": 1,
                                                            "price": 21900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "158 ratings",
                                                                    "ratingCountV2": "158"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714739",
                                                            "name": "Chicken Sahaan (Meat Bowl)",
                                                            "category": "Sabbah Shawarmas & Sahaan",
                                                            "description": "(100% Halal and Breast Boneless Chicken) A meat bowl of diced chicken breast mixed with grilled salad, jalapenos and iceberg lettuce, topped with egg based garlic mayonnaise, with boiled egg. Contains egg & milk. Energy : 759 Kcal. (358 gms).",
                                                            "imageId": "917239e8666cab9cb5e35dc77eee34a8",
                                                            "inStock": 1,
                                                            "price": 19900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "174 ratings",
                                                                    "ratingCountV2": "174"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714737",
                                                            "name": "Paneer Sabbah (Rumali Wrap)",
                                                            "category": "Sabbah Shawarmas & Sahaan",
                                                            "description": "Soft rumali loaded with grilled paneer, boiled eggs and french fries. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 895 Kcal. (261 gms).",
                                                            "imageId": "eb64afbc4b2947e768942e8bc8bed5b0",
                                                            "inStock": 1,
                                                            "price": 20900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.1",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128419953",
                                                            "name": "Falafel Sabbah (Rumali Wrap)     ",
                                                            "category": "Sabbah Shawarmas & Sahaan",
                                                            "description": "Soft rumali loaded with crispy falafel, boiled eggs and french fries. Loaded with egg based garlic mayonnaise and with a touch of in-house sauce. Contains egg, wheat & milk. Energy : 798 Kcal. (277 gms).",
                                                            "imageId": "93ab67f733a44f34ace328da6df462bf",
                                                            "inStock": 1,
                                                            "price": 19900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Pita Pocket Sandwiches",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714750",
                                                            "name": "Chicken Pita Pocket Sandwich",
                                                            "category": "Pita Pocket Sandwiches",
                                                            "description": "North African spiced grilled chicken chunks filled in soft Khubus Pita sandwich along with lettuce, cabbage and veggies, loaded with chef's special sauce and mayonnaise. Contains milk, egg, wheat, soy & gluten. Energy : 329 Kcal. (150 gms).",
                                                            "imageId": "d6950fdaed1351e6d0c08a175721c0ab",
                                                            "inStock": 1,
                                                            "price": 15900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488839",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "123488841",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "123488842",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "157 ratings",
                                                                    "ratingCountV2": "157"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714748",
                                                            "name": "Paneer Pita Pocket Sandwich",
                                                            "category": "Pita Pocket Sandwiches",
                                                            "description": "North African spiced soft marnated paneer filled in fresh Khubus Pita sandwich along with lettuce, cabbage and veggies, loaded with chef's special sauce and mayonnaise. Contains milk, wheat, soy & gluten. Energy : 328 Kcal. (150 gms).",
                                                            "imageId": "3f2f6eb8ad568de5d3f6937ec0be9bd7",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 15900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488938",
                                                                    "groupName": "Desserts",
                                                                    "choices": [
                                                                        {
                                                                            "id": "103796981",
                                                                            "name": "Roasted Almond Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "103796982",
                                                                            "name": "Rose & White Chocolate Mousse",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "123488941",
                                                                    "groupName": "Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415230",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415231",
                                                                            "name": "Arabian Pulpy Grape Juice (300 ml)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415232",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415233",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415234",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "price": 5000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "123488944",
                                                                    "groupName": "Sides",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415235",
                                                                            "name": "Falafel (4Pcs)",
                                                                            "price": 6900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415236",
                                                                            "name": "Peri Peri Fries (Mini)",
                                                                            "price": 7900,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "48 ratings",
                                                                    "ratingCountV2": "48"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Saver Combos",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128419950",
                                                            "name": "Big Meal with Shawarma, Fries & Drink",
                                                            "category": "Saver Combos",
                                                            "description": "Ultimate meal with ultimate Deal! Choose a shawarma and drink of your choice and enjoy it with peri peri fires on the side.",
                                                            "imageId": "775462d69663d79b1706e4a0e6608af8",
                                                            "inStock": 1,
                                                            "price": 36900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488832",
                                                                    "groupName": "Select your Favourite Shawarma",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048226",
                                                                            "name": "Chicken Shawarma in Khubus",
                                                                            "price": 1000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048225",
                                                                            "name": "Falafel Shawarma in Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048224",
                                                                            "name": "Paneer Shawarma in Rumali",
                                                                            "price": 1000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048227",
                                                                            "name": "Istah's Chicken Shawarma in Rumali",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                },
                                                                {
                                                                    "groupId": "123488834",
                                                                    "groupName": "Select Your Fries",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048219",
                                                                            "name": "Peri Peri Fries (Regular)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                },
                                                                {
                                                                    "groupId": "123488835",
                                                                    "groupName": "Select Your Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048222",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048221",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048220",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048223",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128419960",
                                                            "name": "Loaded Shawarma with Choice of Flavored Quick Bites",
                                                            "category": "Saver Combos",
                                                            "description": "Delicious meal! Pick your favourite shawarma and appetizer from our top-selling list.",
                                                            "imageId": "42d30221a8f17b85b80f20a0da402ea1",
                                                            "inStock": 1,
                                                            "price": 30900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488931",
                                                                    "groupName": "Select your Favourite Shawarma",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048226",
                                                                            "name": "Chicken Shawarma in Khubus",
                                                                            "price": 1000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048225",
                                                                            "name": "Falafel Shawarma in Khubus",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048224",
                                                                            "name": "Paneer Shawarma in Rumali",
                                                                            "price": 1000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048227",
                                                                            "name": "Istah's Chicken Shawarma in Rumali",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                },
                                                                {
                                                                    "groupId": "123488934",
                                                                    "groupName": "Select Your Quick Bites",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048205",
                                                                            "name": "Peri Peri Fries (Regular)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048203",
                                                                            "name": "Hummus With Toasted Pita Bread",
                                                                            "price": 2000,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048206",
                                                                            "name": "Hummus With Falafel",
                                                                            "price": 2000,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714757",
                                                            "name": "Istah's Chicken Shawarma in Rumali + Chicken Pita Pocket Sandwich",
                                                            "category": "Saver Combos",
                                                            "description": "Enjoy our signature shawarma loaded with extra meat and pita pocket stuffed with spicy chicken. Double bonanza! (403 gms).",
                                                            "imageId": "1d6e1e694e90572b5f426a9c403ef8b9",
                                                            "inStock": 1,
                                                            "price": 34900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "37 ratings",
                                                                    "ratingCountV2": "37"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714761",
                                                            "name": "Chicken Pita Pocket Sandwich + Peri Peri Fries (Regular) + Choice of Drink",
                                                            "category": "Saver Combos",
                                                            "description": "Fresh pita pocket stuffed with grilled chicken marinated in spicy paste and topped with garlic mayo and salad. Enjoy with peri peri flavoured fries and a beverage of your choice.",
                                                            "imageId": "082b90024a8c96314f8d98b44a1558e2",
                                                            "inStock": 1,
                                                            "price": 35900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "123488830",
                                                                    "groupName": "Choice of Beverage",
                                                                    "choices": [
                                                                        {
                                                                            "id": "106048208",
                                                                            "name": "Coca-Cola Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048209",
                                                                            "name": "Sprite Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048207",
                                                                            "name": "Zero Coke Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "106048210",
                                                                            "name": "Thums Up Can (330 ml)",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "9 ratings",
                                                                    "ratingCountV2": "9"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714758",
                                                            "name": "Paneer Shawarma in Rumali + Paneer Pita Pocket Sandwich",
                                                            "category": "Saver Combos",
                                                            "description": "Relish our classic veg shawarma loaded with grilled paneer and garlic mayo alongside a toasted pita packed with harissa-flavoured paneer and veggies. A delight for paneer lovers! (408 gms).",
                                                            "imageId": "d0f77fe6393969c44da539c5494fc586",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 33900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "7 ratings",
                                                                    "ratingCountV2": "7"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122573366",
                                                            "name": "Istah's Chicken Shawarma in Khubus + Choice of Pita Pocket",
                                                            "category": "Saver Combos",
                                                            "description": "Bite into our signature khubus shawarma loaded with extra meat and pair it with a pita pocket of your choice.",
                                                            "imageId": "1d6e1e694e90572b5f426a9c403ef8b9",
                                                            "inStock": 1,
                                                            "price": 34900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "115890650",
                                                                    "groupName": "Choice of Pita Pocket",
                                                                    "choices": [
                                                                        {
                                                                            "id": "102415250",
                                                                            "name": "Paneer Pita Pocket Sandwich",
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "102415251",
                                                                            "name": "Chicken Pita Pocket Sandwich",
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 1,
                                                                    "maxFreeAddons": -1,
                                                                    "minAddons": 1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "16 ratings",
                                                                    "ratingCountV2": "16"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Snacks & Kebabs",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128419962",
                                                            "name": "Peri Peri Fries (Regular)",
                                                            "category": "Snacks & Kebabs",
                                                            "description": "Peri Peri flavored sticks of love! Energy : 654 Kcal. (148 gms).",
                                                            "imageId": "a5e1d13efbba812d99a4dd9570e7cab5",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 13900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "15 ratings",
                                                                    "ratingCountV2": "15"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Dips",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122384077",
                                                            "name": "Sizzling Spicy Dip (50 gms)",
                                                            "category": "Dips",
                                                            "description": "Serves 1 | Contains milk. Energy : 205 Kcal. (50 gms).",
                                                            "imageId": "58217098ded2ef5f62ce9c2afb70480d",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122384087",
                                                            "name": "Garlic Mayonnaise Dip (50 gms)",
                                                            "category": "Dips",
                                                            "description": "Serves 1 | Contains egg. Energy : 354 Kcal. (50 gms).",
                                                            "imageId": "2aef886242b76f17ddd3ec0ece3ea2f6",
                                                            "inStock": 1,
                                                            "price": 3900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Desserts",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122384873",
                                                            "name": "Roasted Almond Chocolate Mousse",
                                                            "category": "Desserts",
                                                            "description": "Smooth and creamy chocolate mousse topped with roasted almonds. Contains nuts and dairy. (70 gms).",
                                                            "imageId": "9ad868519c16dacee08fe809043d4df0",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 7900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "5 ratings",
                                                                    "ratingCountV2": "5"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "122384874",
                                                            "name": "Rose & White Chocolate Mousse",
                                                            "category": "Desserts",
                                                            "description": "Light and creamy white chocolate mousse delicately infused with rose extract. Contains nuts and dairy. (70 gms).",
                                                            "imageId": "75bd5f7a58e055c956d4dc5d1f0dd845",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 7900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "3 ratings",
                                                                    "ratingCountV2": "3"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "112108226",
                                                            "name": "Walnut Brownie",
                                                            "category": "Desserts",
                                                            "description": "Rich and fudgy chocolate brownie with toasted walnuts. An indulgent treat for chocolate lovers. Contains: Egg, Wheat, Nut. Energy: 527 kcal.",
                                                            "imageId": "819ef899438044cba98afc9711df0c67",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 12900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "32 ratings",
                                                                    "ratingCountV2": "32"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Beverages",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714745",
                                                            "name": "Zero Coke Can (330 ml)",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | The real Coke taste you love - minus the sugar and calories. *Packaged products sold by Venkatesh Trading Co Country of origin : India. Contains caffeine. Please read label for more specific declaration.",
                                                            "imageId": "c472b586d2e130cdcd7fb49f3cb987b0",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "39 ratings",
                                                                    "ratingCountV2": "39"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714743",
                                                            "name": "Coca-Cola Can (330 ml)",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | Meals seem incomplete without a chilled and bubbling can of Coca-Cola. *Packaged products sold by Venkatesh Trading Co. Country of origin : India Energy : 145Kcal /pack (as per label) Contains caffeine. Please read label for more specific declaration.",
                                                            "imageId": "1d2f2cdbf8dbfbd0c4d9355498d44665",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "52 ratings",
                                                                    "ratingCountV2": "52"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "110714744",
                                                            "name": "Sprite Can (330 ml)",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | The lemony taste of Sprite will always keep you refreshed. *Packaged products sold by Venkatesh Trading Co. Country of origin : India Energy : 144 Kcal/pack (as per label) Please read label for more specific declaration.",
                                                            "imageId": "5db8488450c26abd9a38cf18fdc0c905",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "22 ratings",
                                                                    "ratingCountV2": "22"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "113918791",
                                                            "name": "Thums Up Can (330 ml)",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | India's unbeaten cold drink choice for decades - raise the excitement of any occasion to toofani levels with power-packed Thums Up. *Packaged products sold by Venkatesh Trading Co. Country of origin : India Energy : 129 Kcal/pack (as per label) Contains caffeine. Please read label for more specific declaration.",
                                                            "imageId": "a5497173810328da916f37ec58ff3da4",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "16 ratings",
                                                                    "ratingCountV2": "16"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                            "name": "Istah Shawarmas",
                                            "area": "Brodipet & Arundalpet",
                                            "completeAddress": "D.NO.31-4, GB PRIME, 363, 4th Ln, Sali Pet, Arundelpet, Guntur, Andhra Pradesh 522002"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "firstOffsetRequest": true,
        "isQCLink": false
    },
    "tid": "54fc6e89-594d-4152-ab40-72f83ffbff4e",
    "sid": "bjsf2f8f-c3b2-42d6-a100-d484a2e03746",
    "deviceId": "d1d2207f-c2e6-8f86-b036-467931e52400",
    "csrfToken": "oef9mD4ujm9l-RAdpiHW96c8OGSWze-xBqQk-POE"
};

},{}],"ezFeH":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$40f6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$40f6.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("3a7b0935697a6f80");
var _jsxRuntime = require("3a122efeb80cee1d");
const ResCard = ({ restaurants })=>{
    const { info } = restaurants;
    const { cloudinaryImageId, avgRating, cuisines, locality, areaName, sla } = info;
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
        className: "w-52 hover:border-2 border-black ",
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
            className: "res-card text-wrap",
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                    className: "res-logo",
                    src: _constants.CDN_URL + cloudinaryImageId
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("h4", {
                    className: "font-bold text-xl",
                    children: info.name
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("article", {
                    className: "break-words",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("h5", {
                        children: cuisines.join(",")
                    })
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h5", {
                    children: [
                        locality,
                        " ,",
                        areaName
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h5", {
                    children: [
                        sla.deliveryTime,
                        "MIN"
                    ]
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h5", {
                    children: [
                        avgRating,
                        "\u2B50"
                    ]
                })
            ]
        })
    });
};
_c = ResCard;
var _default = exports.default = ResCard;
var _c;
$RefreshReg$(_c, "ResCard");

  $parcel$ReactRefreshHelpers$40f6.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"3a7b0935697a6f80":"hB8jg","3a122efeb80cee1d":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["9MO0w","1xC6H"], null, "parcelRequire164e")

//# sourceMappingURL=Body.a0e831e4.js.map
