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

  q.push(["config", {"collectUrl":"https://collect-api-yzug.onrender.com/collect","plugins":{"cards":true,"ads":true,"search":true,"checkout":true}}]);

  function loadSdk() {
    var d = document;
    var s = d.createElement("script");
    s.async = true;
    s.src = base + "/core/sdk.min.js?pid=" + encodeURIComponent("1e03c4df-d487-4ab5-bd89-15b72b2e5d8a") + "&v=" + encodeURIComponent("0.2.2");
    var h = d.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  }

  // ✅ Gate BEFORE downloading SDK
  try {
    var collectOrigin = "";
    try { collectOrigin = (new URL("https://collect-api-yzug.onrender.com/collect")).origin; } catch (e) {}
    var boot = collectOrigin ? (collectOrigin + "/bootstrap?pid=" + encodeURIComponent("1e03c4df-d487-4ab5-bd89-15b72b2e5d8a")) : "";

    // safest => no SDK download if fetch missing / boot invalid
    if (!boot || !w.fetch) return;

    fetch(boot, { method: "GET", credentials: "omit", cache: "no-store" })
      .then(function (r) { return (r && r.ok) ? r.json() : { allow: false }; })
      .then(function (j) {
        if (j && j.allow === true) {
          loadSdk();
        } else {
          // Not allowed => do nothing (no SDK download)
        }
      })
      .catch(function () {
        // bootstrap failed => safest is do nothing
      });
  } catch (e) {
    // safest => no SDK download
  }
})();