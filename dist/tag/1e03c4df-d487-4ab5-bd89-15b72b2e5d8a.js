(function () {
  var w = window;
  var q = (w._ptq = w._ptq || []);

  var tagVersion = "0.2.2";

  var cs = document.currentScript;
  if (!cs) {
    var scripts = document.getElementsByTagName("script");
    cs = scripts[scripts.length - 1];
  }

  var base = "";
  if (cs && cs.src) {
    var src = cs.src;
    base = src.split("/tag/")[0];

    try {
      var qs = src.split("?")[1] || "";
      if (qs) {
        var sp = new URLSearchParams(qs);
        var v = sp.get("v") || sp.get("tagVersion");
        if (v) tagVersion = v;
      }
    } catch (e) {}
  }

  q.push(["__meta", {
    project_id: "1e03c4df-d487-4ab5-bd89-15b72b2e5d8a",
    cdnBase: base,
    tagVersion: tagVersion
  }]);

  // ✅ config (collectUrl + optional plugins)
  q.push(["config", {"collectUrl":"https://collect-api-yzug.onrender.com/collect","plugins":{"ads":true,"search":true}}]);

  var d = document;
  var s = d.createElement("script");
  s.async = true;
  s.src = base + "/core/sdk.min.js?v=" + encodeURIComponent(tagVersion);

  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})();