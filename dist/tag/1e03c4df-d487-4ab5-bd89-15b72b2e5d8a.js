(function () {
  var w = window;
  var q = (w._ptq = w._ptq || []);

  // استخرج base من رابط سكربت الـtag نفسه
  var cs = document.currentScript;
  var base = "";
  if (cs && cs.src) {
    base = cs.src.split("/tag/")[0];
  }

  q.push(["__meta", {
    project_id: "1e03c4df-d487-4ab5-bd89-15b72b2e5d8a",
    cdnBase: base,
    tagVersion: "0.2.1"
  }]);

  // ✅ أهم سطر بالـProduction
  q.push(["config", { collectUrl: "https://collect-api-yzug.onrender.com/collect" }]);

  var d = document;
  var s = d.createElement("script");
  s.async = true;
  s.src = base + "/core/sdk.min.js?v=" + encodeURIComponent("0.2.1");

  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})();