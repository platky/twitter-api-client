"use strict";
(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Places"],
  {
    90330: (e, t, s) => {
      s.r(t), s.d(t, { default: () => c });
      s(6886);
      var n = s(6899),
        r = s(46395);
      const a = new n.fK.Entity(
          "places",
          {},
          {
            processStrategy: function (e, t, s) {
              const { vendor_info: n, ...a } = (0, r.Z)(e, t, s);
              if (n) {
                const e = Object.keys(n)[0];
                a.vendor_info = { data: n[e], vendor: e };
              }
              return a;
            },
          }
        ),
        c = ({ apiClient: e, featureSwitches: t }) => ({
          fetchPlace: ({ id: t, ...s }, r = {}) =>
            e.get(`geo/id/${t}`, s, r).then((e) => (0, n.Fv)(e, a)),
          search: (t, s = {}) =>
            e.get("geo/places", t, s).then((e) => {
              var t;
              const s = new Set();
              return (
                null == (t = e.attributions) ||
                  t.forEach((e) => Object.keys(e).forEach((e) => s.add(e))),
                {
                  ...e,
                  attributions: s,
                  places: e.places.map((t) => ({
                    ...t,
                    geo_search_request_id: e.geo_search_request_id,
                  })),
                }
              );
            }),
        });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Places.1cc954ca.js.map
