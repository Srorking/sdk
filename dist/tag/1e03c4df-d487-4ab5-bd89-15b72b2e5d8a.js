(function () {
  var w = window;
  var q = (w._ptq = w._ptq || []);

  var cs = document.currentScript;
  var base = "";
  if (cs && cs.src) {
    base = cs.src.split("/tag/")[0];
  }

  q.push(["__meta", {
    project_id: "1e03c4df-d487-4ab5-bd89-15b72b2e5d8a",
    cdnBase: base,
    tagVersion: "0.2.2"
  }]);

  // ✅ config (collectUrl already includes siteId + optional plugins)
  q.push(["config", {"collectUrl":"https://collect-api-yzug.onrender.com/collect?siteId=1e03c4df-d487-4ab5-bd89-15b72b2e5d8a","plugins":{"ads":true,"search":true}}]);

  var d = document;
  var s = d.createElement("script");
  s.async = true;

  // ✅ always bust SDK cache by version
  s.src = base + "/core/sdk.min.js?v=" + encodeURIComponent("0.2.2");

  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})();