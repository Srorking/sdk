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
    project_id: "d2f3a4b5-c6d7-4e8f-9a0b-6c5d4e3f2a66",
    cdnBase: base,
    tagVersion: "0.1.0"
  }]);

  // ✅ أهم سطر بالـProduction
  q.push(["config", { collectUrl: "http://127.0.0.1:4000/collect" }]);

  var d = document;
  var s = d.createElement("script");
  s.async = true;
  s.src = base + "/core/sdk.min.js?v=0.1.0";

  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})();