// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#text");
var style = document.querySelector("#style");
var string = "/*\n *\u4F60\u597D\uFF0C\u6211\u662F\u5218\u4FCA\u5CF0\u3002\n *\u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u4E00\u4E2A\u516B\u5366\u56FE\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F\n *\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n**/\n#demo{\n  width: 400px;\n  height: 400px;\n  box-shadow:0 0 3px rgba(0,0,0,0.5);\n}\n/*\n *\u73B0\u5728\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n**/\n#demo{\n  border-radius:50%;\n}\n/*\n *\u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n *\u4E00\u9ED1\u4E00\u767D\n**/\n#demo{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\n *\u73B0\u5728\u6211\u4EEC\u7ED9\u516B\u5366\u52A0\u4E0A\u9B54\u4E38\u548C\u7075\u73E0(\u4E24\u4E2A\u5706\u7403)\n**/\n#demo::after{\n  content: \"\";\n  display: block;\n  width: 50%;\n  height: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n  border-radius: 50%;\n}\n#demo::before{\n  content: \"\";\n  display: block;\n  width: 50%;\n  height: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n  border-radius: 50%;\n}\n/*\n *\u6700\u540E\u8BA9\u592A\u6781\u8F6C\u8D77\u6765\u5427\uFF01\n**/\n#demo {\n  animation: rotate 5s linear infinite;\n}";
var string2 = "";
var n = 0;
var delay = 50;

function step() {
  if (n < string.length) {
    if (string[n] === "魔") {
      delay = 5;
    }

    if (string[n] === "\n") {
      string2 += "<br />";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    style.innerHTML = string.substring(0, n + 1);
    html.innerHTML = string2;
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n++;
    setTimeout(function () {
      step();
    }, delay);
  } else {
    return;
  }
}

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.fb73fcb6.js.map