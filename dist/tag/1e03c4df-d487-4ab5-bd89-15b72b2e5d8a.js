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

  function deriveApiBase(collectUrl) {
    try {
      var u = String(collectUrl || "");
      // remove trailing /collect or /collect/
      u = u.replace(/\/collect\/?$/i, "");
      return u;
    } catch (e) {
      return "";
    }
  }

  function loadSdk() {
    var d = document;
    var s = d.createElement("script");
    s.async = true;
    s.src = base + "/core/sdk.min.js?pid=" + encodeURIComponent("1e03c4df-d487-4ab5-bd89-15b72b2e5d8a") + "&v=" + encodeURIComponent("0.2.2");
    var h = d.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  }

  // ✅ Gate: call /bootstrap
  try {
    var cfg = {"collectUrl":"https://collect-api-yzug.onrender.com/collect","plugins":{"cards":true,"ads":true,"search":true,"checkout":true}};
    var apiBase = deriveApiBase(cfg.collectUrl);
    var boot = apiBase ? (apiBase + "/bootstrap?pid=" + encodeURIComponent("1e03c4df-d487-4ab5-bd89-15b72b2e5d8a")) : "";

    if (!boot) {
      // no api base => do not load sdk (safe)
      return;
    }

    // Use fetch gate. If allow=true => load sdk
    w.fetch(boot, { method: "GET", mode: "cors", credentials: "omit" })
      .then(function (r) {
        if (!r || !r.ok) throw new Error("bootstrap_not_ok");
        return r.json();
      })
      .then(function (j) {
        if (j && j.allow === true) {
          loadSdk();
        } else {
          // denied => do not load sdk
        }
      })
      .catch(function () {
        // error => do not load sdk (safe default)
      });
  } catch (e) {
    // error => do not load sdk
  }
})();