/*
    This code belongs to Tsoding Recreational Programming Organization
    [https://github.com/tsoding]
    Under MIT License
    
    Copyright 2023 Tsoding

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    let adopt = (value) => { 
        return value instanceof P ? value : new P((resolve) => { resolve(value); }); 
    }
    return new (P || (P = Promise))((resolve, reject) => {
        let fulfilled = (value) => { try { step(generator.next(value)); } catch (e) { reject(e); } }
        let rejected = (value) => { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        let step = (result) => { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: () => { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = () => { return this; }), g;
    function verb(n) { return (v) => { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cacheName = "leyuskc_web-v1";
var assets = [
    './static/fonts/fa-regular-400.ttf',
    './static/fonts/fa-brands-400.woff2',
    './static/css/home.css',
    './static/css/icons.css',
    './static/css/aboutme/style.css',
    './aboutme/profile.html', ,
    './aboutme/certs.html',
    './aboutme/others.html',
];

self.addEventListener("install", (e) => {
    //console.log("[Service Worker] Install");
    var event = e;
    event.waitUntil((() => {
        return __awaiter(void 0, void 0, void 0, () => {
            var cache;
            return __generator(this, (_a) => {
                switch (_a.label) {
                    case 0:
                        //console.log("[Service Worker] Caching all the assets");
                        return [4, caches.open(cacheName)];
                    case 1:
                        cache = _a.sent();
                        cache.addAll(assets);
                        return [2];
                }
            });
        });
    })());
});
self.addEventListener("activate", (e) => {
    //console.log("[Service Worker] Activate");
    var event = e;
    event.waitUntil((() => {
        return __awaiter(void 0, void 0, void 0, () => {
            var keys, _a, _b, _i, key;
            return __generator(this, (_c) => {
                switch (_c.label) {
                    case 0:
                        //console.log("[Service Worker] Cleaning up all caches");
                        return [4, caches.keys()];
                    case 1:
                        keys = _c.sent();
                        _a = [];
                        for (_b in keys)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        key = _a[_i];
                        if (!(key !== cacheName)) return [3, 4];
                        return [4, caches["delete"](key)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [2];
                }
            });
        });
    })());
});
self.addEventListener("fetch", (e) => {
    var event = e;
    event.respondWith((() => {
        return __awaiter(void 0, void 0, void 0, () => {
            var cache, response;
            return __generator(this, (_a) => {
                switch (_a.label) {
                    case 0:
                        //console.log("[Service Worker] Fetch " + event.request.url);
                        return [4, caches.open(cacheName)];
                    case 1:
                        cache = _a.sent();
                        return [4, cache.match(event.request.url)];
                    case 2:
                        response = _a.sent();
                        if (!(response === undefined)) return [3, 4];
                        //console.log("[Service Worker] Response for " + event.request.url + " is not available in cache. Making an actual request...");
                        return [4, fetch(event.request.url)];
                    case 3:
                        response = _a.sent();
                        cache.put(event.request.url, response.clone());
                        _a.label = 4;
                    case 4: return [2, response];
                }
            });
        });
    })());
});