(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.SettingsGraphQL"],
  {
    33816: (e) => {
      e.exports = {
        queryId: "PFIxTk8owMoZgiMccP0r4g",
        operationName: "getAltTextPromptPreference",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    41264: (e) => {
      e.exports = {
        queryId: "aQKrduk_DA46XfOQDkcEng",
        operationName: "updateAltTextPromptPreference",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    95915: (e) => {
      e.exports = {
        queryId: "BwgMOGpOViDS0ri7VUgglg",
        operationName: "getCaptionsAlwaysDisplayPreference",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    22502: (e) => {
      e.exports = {
        queryId: "uCUQhvZ5sJ9qHinRp6CFlQ",
        operationName: "updateCaptionsAlwaysDisplayPreference",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    65769: (e) => {
      e.exports = {
        queryId: "xF6sXnKJfS2AOylzxRjf6A",
        operationName: "DataSaverMode",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    35032: (e) => {
      e.exports = {
        queryId: "H03etWvZGz41YASxAU2YPg",
        operationName: "WriteDataSaverPreferences",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    76389: (e) => {
      e.exports = {
        queryId: "of_N6O33zfyD4qsFJMYFxA",
        operationName: "DmNsfwMediaFilterUpdate",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    78985: (e) => {
      e.exports = {
        queryId: "AhxTX0lkbIos4WG53xwzSA",
        operationName: "GetSafetyModeSettings",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    34628: (e) => {
      e.exports = {
        queryId: "qSJIPIpf4gA7Wn21bT3D4w",
        operationName: "SetSafetyModeSettings",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    68408: (e) => {
      e.exports = {
        queryId: "5h0kNbk3ii97rmfY6CdgAA",
        operationName: "SharingAudiospacesListeningDataWithFollowersUpdate",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    88541: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          default: () => M,
          isFatalSafetyModeSettingsPutError: () => q,
        });
      var r = a(10264),
        s = a(35494),
        n = a(72599),
        o = a(51573),
        i = a(17360),
        d = a(33816),
        p = a.n(d),
        u = a(41264),
        c = a.n(u),
        l = a(95915),
        f = a.n(l),
        m = a(22502),
        y = a.n(m),
        h = a(65769),
        g = a.n(h),
        w = a(35032),
        _ = a.n(w),
        S = a(76389),
        v = a.n(S),
        P = a(78985),
        A = a.n(P),
        T = a(34628),
        N = a.n(T),
        x = a(68408),
        D = a.n(x),
        I = a(63140);
      const q = (e, t) => {
          const a = null == t ? void 0 : t.user_safety_mode_settings_put;
          if (!a) {
            1 === e.length &&
              e[0].code === I.ZP.GenericAccessDenied &&
              (0, n.ZP)(
                "GQL Safety Mode Settings Update: user does not have access to Safety Mode"
              );
          }
          return !a && (0, i.jB)(e);
        },
        M = ({ apiClient: e, featureSwitches: t }) => ({
          fetchAltTextPromptPreference: () =>
            e
              .graphQL(p(), {})
              .then(({ authenticated_user_alt_text_prompt_preference: e }) => {
                const t = e || r.f.None;
                return { altTextNudgeType: r.f[t] };
              }),
          updateAltTextPromptPreference({ altTextNudgeType: t }) {
            const a = t || r.f.None;
            return e.graphQL(c(), { promptType: a });
          },
          fetchCaptionsAlwaysDisplayPreference: () =>
            e
              .graphQL(f(), {})
              .then(
                ({
                  authenticated_user_captions_always_display_preference: e,
                }) => {
                  const t = e || s.P.None;
                  return { displayType: s.P[t] };
                }
              ),
          updateCaptionsAlwaysDisplayPreference({ displayType: t }) {
            const a = t || s.P.None;
            return e.graphQL(y(), { displayPreference: a });
          },
          fetchDataUsageSettings: ({ deviceId: t }) =>
            (0, o.o)("dataUsageSettings", () =>
              e.graphQL(g(), { device_id: t }, void 0).then((e) => {
                var t;
                return null != (t = e.viewer) && t.dataUsageSettings
                  ? e.viewer.dataUsageSettings
                  : { dataSaverMode: !1, videoAutoplay: void 0 };
              })
            ),
          updateDataUsageSettings: ({
            dataSaverMode: t,
            deviceId: a,
            videoAutoplay: r,
          }) =>
            e.graphQL(_(), {
              dataSaverEnabled: t,
              deviceId: a,
              videoAutoplay: r,
            }),
          updateDmNsfwMediaFilter: ({ dmNsfwMediaFilter: t, userId: a }) =>
            e.graphQL(v(), { userId: a, dmNsfwMediaFilter: t }),
          updateSharingAudiospacesListeningDataWithFollowers: ({
            sharingAudiospacesListeningDataWithFollowers: t,
            userId: a,
          }) =>
            e.graphQL(D(), {
              userId: a,
              sharingAudiospacesListeningDataWithFollowers: t,
            }),
          fetchSafetyModeSettings: () =>
            e.graphQL(A(), {}).then((e) => {
              var t, a, r;
              return null != (t = e.viewer) &&
                null != (a = t.user_results) &&
                null != (r = a.result) &&
                r.safety_mode_settings
                ? {
                    enabled:
                      e.viewer.user_results.result.safety_mode_settings.enabled,
                    duration:
                      e.viewer.user_results.result.safety_mode_settings
                        .duration || "none",
                    expiration:
                      e.viewer.user_results.result.safety_mode_settings
                        .expiration,
                  }
                : Object.freeze({});
            }),
          updateSafetyModeSettings: ({ duration: t, userId: a }) =>
            e.graphQL(
              N(),
              {
                userId: a,
                enabled: "none" !== t,
                duration: "none" === t ? void 0 : t,
              },
              q
            ),
        });
    },
    10264: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => r });
      const r = Object.freeze({
        None: "None",
        Nudge: "Nudge",
        Prompt: "Prompt",
        Require: "Require",
      });
    },
    35494: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => r });
      const r = Object.freeze({ Enabled: "Enabled", None: "None" });
    },
    51573: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => p });
      a(21515), a(6886);
      var r = a(72599);
      const s = new (class {
          constructor() {
            this.promise = new Promise((e, t) => {
              (this.reject = t), (this.resolve = e);
            });
          }
        })(),
        n = s.promise;
      if ("undefined" != typeof document) {
        let e;
        document.addEventListener("DOMContentLoaded", () => {
          s.resolve(), null != e && clearTimeout(e);
        });
        const t = () => {
          "loading" !== document.readyState
            ? s.resolve()
            : (e = setTimeout(() => {
                t();
              }, 500));
        };
        t();
      }
      var o = a(86916),
        i = a(79150),
        d = a(25943);
      function p(e, t, a) {
        const s =
          "undefined" != typeof window ? window.__PREFETCH_DATA__ : void 0;
        if (!s) return t();
        const p = Date.now(),
          u = s.timestamp || p;
        if (Math.max(0, p - u) >= 3e5)
          return delete window.__PREFETCH_DATA__, t();
        const c = s.items[e];
        if (!c) return t();
        return (a ? a(c.meta) : Promise.resolve(!0)).then(
          (a) =>
            a
              ? ((d.q.didPrefetch[e] = !0),
                Promise.race([c.promise, n])
                  .then(
                    (a) =>
                      a
                        ? o.i(a, i.AK)
                        : ((0, r.ZP)(
                            `DOM loaded but prefetch data was not present for ${e}`
                          ),
                          t()),
                    () => ((d.q.prefetchPromiseRejected[e] = !0), t())
                  )
                  .finally(() => {
                    delete s.items[e];
                  }))
              : t(),
          () => t()
        );
      }
    },
    25943: (e, t, a) => {
      "use strict";
      a.d(t, { q: () => r });
      const r = { didPrefetch: {}, prefetchPromiseRejected: {} };
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.SettingsGraphQL.8a5300fa.js.map
