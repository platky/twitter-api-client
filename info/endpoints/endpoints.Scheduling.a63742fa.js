(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Scheduling"],
  {
    97475: (e) => {
      e.exports = {
        queryId: "LCVzRQGxOaGnOnYH01NQXg",
        operationName: "CreateScheduledTweet",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    6107: (e) => {
      e.exports = {
        queryId: "CTOVqej0JBXAZSwkp1US0g",
        operationName: "DeleteScheduledTweet",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    8735: (e) => {
      e.exports = {
        queryId: "_mHkQ5LHpRRjSXKOcG6eZw",
        operationName: "EditScheduledTweet",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    66150: (e) => {
      e.exports = {
        queryId: "ITtjAzvlZni2wWXwf295Qg",
        operationName: "FetchScheduledTweets",
        operationType: "query",
        metadata: { featureSwitches: [] },
      };
    },
    3754: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => _ });
      const d = (e) => {
        var t;
        return (
          (null == e || null == (t = e.viewer)
            ? void 0
            : t.scheduled_tweet_list) || []
        );
      };
      var i = r(97475),
        s = r.n(i),
        a = r(6107),
        u = r.n(a),
        n = r(8735),
        o = r.n(n),
        c = r(66150),
        l = r.n(c),
        w = r(98671);
      function p(e) {
        return Math.floor(e.getTime() / 1e3);
      }
      const _ = ({ apiClient: e, featureSwitches: t }) => ({
        scheduleTweet(t) {
          const { executeAt: r, ...d } = t,
            i = (0, w.y)(d);
          return e
            .graphQL(s(), { post_tweet_request: i, execute_at: p(r) })
            .then((e) => {
              var t;
              return null == (t = e.tweet) ? void 0 : t.rest_id;
            });
        },
        fetchScheduledTweets(t) {
          const r = {
            ascending: !0,
            limit: void 0,
            max_id: void 0,
            min_id: void 0,
          };
          return e.graphQL(l(), { ...r, ...t }, (0, w.F)("Scheduled")).then(d);
        },
        deleteScheduledTweet: (t) => e.graphQL(u(), t),
        editScheduledTweet(t) {
          const { executeAt: r, scheduledTweetId: d, ...i } = t,
            s = (0, w.y)(i);
          return e
            .graphQL(o(), {
              scheduled_tweet_id: d,
              post_tweet_request: s,
              execute_at: p(r),
            })
            .then(() => d);
        },
      });
    },
    98671: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => a, y: () => s });
      var d = r(72599),
        i = r(17360);
      function s({ exclude_reply_user_ids: e, media_ids: t, ...r }) {
        return {
          ...r,
          exclude_reply_user_ids: e ? e.split(",") : [],
          media_ids: t ? t.split(",") : [],
        };
      }
      const a = (e) => (t, r) => {
        const s =
            r &&
            r.viewer &&
            r.viewer.draft_list &&
            r.viewer.draft_list.response_data,
          a =
            r &&
            r.viewer &&
            !!r.viewer.scheduled_tweet_list &&
            r.viewer.scheduled_tweet_list;
        return (
          !s &&
          !a &&
          ((0, d.ZP)(`GQL: Failed to render ${e} Tweets List`), (0, i.jB)(t))
        );
      };
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Scheduling.a63742fa.js.map
