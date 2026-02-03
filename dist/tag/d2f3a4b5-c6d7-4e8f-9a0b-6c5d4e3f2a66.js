(function () {
  var w = window;
  var q = (w._ptq = w._ptq || []);

  var cs = document.currentScript;
  var base = "";
  if (cs && cs.src) {
    base = cs.src.split("/tag/")[0];
  }

  q.push(["__meta", {
    project_id: "d2f3a4b5-c6d7-4e8f-9a0b-6c5d4e3f2a66",
    cdnBase: base,
    tagVersion: "0.2.2"
  }]);

  // ✅ config (collectUrl + optional plugins)
  q.push(["config", {"collectUrl":"https://coll"}]);

  var d = document;
  var s = d.createElement("script");
  s.async = true;
  s.src = base + "/core/sdk.min.js?v=" + encodeURIComponent("0.2.2");

  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})();