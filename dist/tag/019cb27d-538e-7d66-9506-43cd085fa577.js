(function () {
  var w = window;
  var q = (w._ptq = w._ptq || []);

  var cs = document.currentScript;
  var base = "";
  if (cs && cs.src) {
    base = cs.src.split("/tag/")[0];
  }

  q.push(["__meta", {
    project_id: "019cb27d-538e-7d66-9506-43cd085fa577",
    cdnBase: base,
    tagVersion: "0.2.5"
  }]);

  q.push(["config", {"collectUrl":"https://collect-api-yzug.onrender.com/collect","plugins":{"cards":true,"ads":true,"search":true,"checkout":true}}]);

  function loadSdk() {
    var d = document;
    var s = d.createElement("script");
    s.async = true;
    s.src = base + "/core/sdk.min.js?pid=" + encodeURIComponent("019cb27d-538e-7d66-9506-43cd085fa577") + "&v=" + encodeURIComponent("0.2.5");
    var h = d.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  }

  try {
    if (!w.fetch) return;

    var collectUrlStr = "https://collect-api-yzug.onrender.com/collect";

    var bootUrl = "";
    try {
      var u = new URL(collectUrlStr);
      u.pathname = u.pathname.replace(/\/collect\/?$/, "");
      if (!u.pathname.endsWith("/")) u.pathname += "/";
      bootUrl = u.origin + u.pathname + "bootstrap?pid=" + encodeURIComponent("019cb27d-538e-7d66-9506-43cd085fa577");
    } catch (e) {
      return;
    }

    fetch(bootUrl, { method: "GET", credentials: "omit", cache: "no-store" })
      .then(function (r) { return (r && r.ok) ? r.json() : { allow: false }; })
      .then(function (j) { if (j && j.allow === true) loadSdk(); })
      .catch(function () {});
  } catch (e) {}
})();