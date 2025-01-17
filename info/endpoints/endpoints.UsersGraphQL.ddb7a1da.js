(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.UsersGraphQL"],
  {
    7435: (e) => {
      e.exports = {
        queryId: "QpNfg0kpPRfjROQ_9eOLXA",
        operationName: "RemoveFollower",
        operationType: "mutation",
        metadata: { featureSwitches: [] },
      };
    },
    25777: (e) => {
      e.exports = {
        queryId: "GazOglcBvgLigl3ywt6b3Q",
        operationName: "UserByRestId",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    6155: (e) => {
      e.exports = {
        queryId: "sLVLhk0bGj3MVFEKTdax1w",
        operationName: "UserByScreenName",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    93405: (e) => {
      e.exports = {
        queryId: "OJBgJQIrij6e3cjqQ3Zu1Q",
        operationName: "UsersByRestIds",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    81732: (e) => {
      e.exports = {
        queryId: "okNaf-6AQWu2DD2H_MAoVw",
        operationName: "Viewer",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    73339: (e) => {
      "use strict";
      var l,
        a,
        n,
        i,
        s,
        r,
        t,
        u,
        o,
        d,
        c,
        g,
        _,
        y,
        p,
        m,
        k,
        F,
        f,
        h,
        K,
        b,
        S,
        T,
        v,
        w,
        L,
        R,
        U,
        q,
        x,
        A,
        E,
        I,
        C,
        O,
        P,
        M,
        H,
        Q,
        B,
        N,
        Z,
        D,
        W,
        V,
        j,
        G,
        z,
        J,
        X,
        Y,
        $,
        ee,
        le,
        ae,
        ne,
        ie,
        se,
        re,
        te,
        ue,
        oe,
        de,
        ce,
        ge,
        _e,
        ye,
        pe,
        me,
        ke,
        Fe,
        fe,
        he,
        Ke,
        be,
        Se,
        Te,
        ve,
        we,
        Le,
        Re,
        Ue,
        qe,
        xe,
        Ae,
        Ee,
        Ie,
        Ce,
        Oe,
        Pe,
        Me,
        He,
        Qe,
        Be,
        Ne,
        Ze,
        De,
        We,
        Ve,
        je,
        Ge,
        ze = {
          fragment: {
            argumentDefinitions: (l = [
              {
                defaultValue: null,
                kind: "LocalArgument",
                name: "screen_name",
              },
              { defaultValue: !1, kind: "LocalArgument", name: "withDmMuting" },
              {
                defaultValue: !1,
                kind: "LocalArgument",
                name: "withSafetyModeUserFields",
              },
            ]),
            kind: "Fragment",
            metadata: null,
            name: "UsersGraphQLFetchByScreenNameQuery",
            selections: [
              {
                alias: "user",
                args: (a = [
                  { kind: "Literal", name: "s", value: "f3d8" },
                  {
                    kind: "Variable",
                    name: "screen_name",
                    variableName: "screen_name",
                  },
                ]),
                concreteType: "UserResults",
                kind: "LinkedField",
                name: "user_result_by_screen_name",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "result",
                    plural: !1,
                    selections: [
                      (n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null,
                      }),
                      {
                        kind: "InlineFragment",
                        selections: [
                          (i = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null,
                          }),
                          (s = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "rest_id",
                            storageKey: null,
                          }),
                          {
                            alias: "affiliates_highlighted_label",
                            args: null,
                            concreteType: "HighlightedUserLabelResponse",
                            kind: "LinkedField",
                            name: "identity_profile_labels_highlighted_label",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "HighlightedUserLabel",
                                kind: "LinkedField",
                                name: "label",
                                plural: !1,
                                selections: [
                                  (u = {
                                    alias: null,
                                    args: null,
                                    concreteType: "TimelineUrl",
                                    kind: "LinkedField",
                                    name: "url",
                                    plural: !1,
                                    selections: (t = [
                                      (r = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "url",
                                        storageKey: null,
                                      }),
                                      {
                                        alias: "urlType",
                                        args: null,
                                        kind: "ScalarField",
                                        name: "url_type",
                                        storageKey: null,
                                      },
                                      {
                                        alias: "urtEndpointOptions",
                                        args: null,
                                        concreteType:
                                          "TimelineUrtEndpointOptions",
                                        kind: "LinkedField",
                                        name: "urt_endpoint_options",
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: "cacheId",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "cache_id",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "subtitle",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "title",
                                            storageKey: null,
                                          },
                                          {
                                            alias: "requestParams",
                                            args: null,
                                            concreteType: "RequestParamsEntry",
                                            kind: "LinkedField",
                                            name: "request_params",
                                            plural: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "key",
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "value",
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: "Timeline",
                                            kind: "LinkedField",
                                            name: "timeline",
                                            plural: !1,
                                            selections: [i],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ]),
                                    storageKey: null,
                                  }),
                                  (o = {
                                    alias: null,
                                    args: null,
                                    concreteType: "BadgeInfo",
                                    kind: "LinkedField",
                                    name: "badge",
                                    plural: !1,
                                    selections: [r],
                                    storageKey: null,
                                  }),
                                  (d = {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "description",
                                    storageKey: null,
                                  }),
                                  {
                                    alias: "longDescription",
                                    args: null,
                                    concreteType: "TimelineRichText",
                                    kind: "LinkedField",
                                    name: "long_description",
                                    plural: !1,
                                    selections: (U = [
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "alignment",
                                        storageKey: null,
                                      }),
                                      (g = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "rtl",
                                        storageKey: null,
                                      }),
                                      (_ = {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "text",
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: "TimelineRichTextEntity",
                                        kind: "LinkedField",
                                        name: "entities",
                                        plural: !0,
                                        selections: [
                                          (y = {
                                            alias: "fromIndex",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "from_index",
                                            storageKey: null,
                                          }),
                                          (p = {
                                            alias: "toIndex",
                                            args: null,
                                            kind: "ScalarField",
                                            name: "to_index",
                                            storageKey: null,
                                          }),
                                          (m = {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "format",
                                            storageKey: null,
                                          }),
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "ref",
                                            plural: !1,
                                            selections: [
                                              (k = {
                                                alias: "type",
                                                args: null,
                                                kind: "ScalarField",
                                                name: "__typename",
                                                storageKey: null,
                                              }),
                                              (f = {
                                                kind: "InlineFragment",
                                                selections: (F = [_]),
                                                type: "TimelineRichTextCashtag",
                                                abstractKey: null,
                                              }),
                                              (h = {
                                                kind: "InlineFragment",
                                                selections: [i, r],
                                                type: "TimelineRichTextList",
                                                abstractKey: null,
                                              }),
                                              (K = {
                                                kind: "InlineFragment",
                                                selections: F,
                                                type: "TimelineRichTextHashtag",
                                                abstractKey: null,
                                              }),
                                              (b = {
                                                kind: "InlineFragment",
                                                selections: t,
                                                type: "TimelineUrl",
                                                abstractKey: null,
                                              }),
                                              {
                                                kind: "InlineFragment",
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "UserResults",
                                                    kind: "LinkedField",
                                                    name: "user_results",
                                                    plural: !1,
                                                    selections: (R = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                          n,
                                                          {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                              (T = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType:
                                                                  "ApiUser",
                                                                kind: "LinkedField",
                                                                name: "legacy",
                                                                plural: !1,
                                                                selections: [
                                                                  (S = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: "ScalarField",
                                                                    name: "screen_name",
                                                                    storageKey:
                                                                      null,
                                                                  }),
                                                                ],
                                                                storageKey:
                                                                  null,
                                                              }),
                                                              s,
                                                            ],
                                                            type: "User",
                                                            abstractKey: null,
                                                          },
                                                          (L = {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                              (v = {
                                                                alias: "reason",
                                                                args: null,
                                                                kind: "ScalarField",
                                                                name: "unavailable_reason",
                                                                storageKey:
                                                                  null,
                                                              }),
                                                              (w = {
                                                                alias: null,
                                                                args: null,
                                                                kind: "ScalarField",
                                                                name: "message",
                                                                storageKey:
                                                                  null,
                                                              }),
                                                            ],
                                                            type: "UserUnavailable",
                                                            abstractKey: null,
                                                          }),
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: "TimelineRichTextUser",
                                                abstractKey: null,
                                              },
                                              {
                                                kind: "InlineFragment",
                                                selections: [
                                                  S,
                                                  {
                                                    alias: "mention_results",
                                                    args: null,
                                                    concreteType: "UserResults",
                                                    kind: "LinkedField",
                                                    name: "user_results",
                                                    plural: !1,
                                                    selections: R,
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: "TimelineRichTextMention",
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ]),
                                    storageKey: null,
                                  },
                                  (q = {
                                    alias: "userLabelType",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "user_label_type",
                                    storageKey: null,
                                  }),
                                  (x = {
                                    alias: "userLabelDisplayType",
                                    args: null,
                                    kind: "ScalarField",
                                    name: "user_label_display_type",
                                    storageKey: null,
                                  }),
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          (A = {
                            condition: "withDmMuting",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "dm_muting",
                                storageKey: null,
                              },
                            ],
                          }),
                          (E = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "has_graduated_access",
                            storageKey: null,
                          }),
                          (I = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_blue_verified",
                            storageKey: null,
                          }),
                          (C = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "profile_image_shape",
                            storageKey: null,
                          }),
                          {
                            alias: null,
                            args: null,
                            concreteType: "ApiUser",
                            kind: "LinkedField",
                            name: "legacy",
                            plural: !1,
                            selections: [
                              (P = {
                                kind: "RequiredField",
                                field: (O = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "blocked_by",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.blocked_by",
                              }),
                              (H = {
                                kind: "RequiredField",
                                field: (M = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "blocking",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.blocking",
                              }),
                              (B = {
                                kind: "RequiredField",
                                field: (Q = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "follow_request_sent",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.follow_request_sent",
                              }),
                              (Z = {
                                kind: "RequiredField",
                                field: (N = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "followed_by",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.followed_by",
                              }),
                              (W = {
                                kind: "RequiredField",
                                field: (D = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "following",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.following",
                              }),
                              (V = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "muting",
                                storageKey: null,
                              }),
                              (j = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "notifications",
                                storageKey: null,
                              }),
                              (z = {
                                kind: "RequiredField",
                                field: (G = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "protected",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.protected",
                              }),
                              P,
                              H,
                              B,
                              Z,
                              W,
                              V,
                              j,
                              z,
                              (J = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "can_dm",
                                storageKey: null,
                              }),
                              (X = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "can_media_tag",
                                storageKey: null,
                              }),
                              (Y = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "created_at",
                                storageKey: null,
                              }),
                              ($ = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "default_profile",
                                storageKey: null,
                              }),
                              (ee = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "default_profile_image",
                                storageKey: null,
                              }),
                              d,
                              (ne = {
                                alias: null,
                                args: null,
                                concreteType: "UserEntities",
                                kind: "LinkedField",
                                name: "entities",
                                plural: !1,
                                selections: (ae = [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "EntitySet",
                                    kind: "LinkedField",
                                    name: "description",
                                    plural: !1,
                                    selections: (le = [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: "UrlsEntity",
                                        kind: "LinkedField",
                                        name: "urls",
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "display_url",
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "expanded_url",
                                            storageKey: null,
                                          },
                                          r,
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "indices",
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ]),
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "EntitySet",
                                    kind: "LinkedField",
                                    name: "url",
                                    plural: !1,
                                    selections: le,
                                    storageKey: null,
                                  },
                                ]),
                                storageKey: null,
                              }),
                              (ie = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "fast_followers_count",
                                storageKey: null,
                              }),
                              {
                                kind: "RequiredField",
                                field: (se = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "favourites_count",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.favourites_count",
                              },
                              (re = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "follow_request_received",
                                storageKey: null,
                              }),
                              {
                                kind: "RequiredField",
                                field: (te = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "followers_count",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.followers_count",
                              },
                              {
                                kind: "RequiredField",
                                field: (ue = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "friends_count",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.friends_count",
                              },
                              (oe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "has_custom_timelines",
                                storageKey: null,
                              }),
                              (de = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_translator",
                                storageKey: null,
                              }),
                              (ce = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "listed_count",
                                storageKey: null,
                              }),
                              (ge = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "location",
                                storageKey: null,
                              }),
                              {
                                kind: "RequiredField",
                                field: (_e = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "media_count",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.media_count",
                              },
                              (ye = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null,
                              }),
                              (pe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "needs_phone_verification",
                                storageKey: null,
                              }),
                              (me = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "normal_followers_count",
                                storageKey: null,
                              }),
                              (ke = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "pinned_tweet_ids_str",
                                storageKey: null,
                              }),
                              (Fe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "possibly_sensitive",
                                storageKey: null,
                              }),
                              (he = {
                                alias: null,
                                args: null,
                                concreteType: "ApiMediaExtensions",
                                kind: "LinkedField",
                                name: "profile_banner_extensions",
                                plural: !1,
                                selections: (fe = [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: "ApiMediaColorExtension",
                                    kind: "LinkedField",
                                    name: "mediaColor",
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiMediaColorExtensionR",
                                        kind: "LinkedField",
                                        name: "r",
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType:
                                              "ApiMediaEntityColorPalette",
                                            kind: "LinkedField",
                                            name: "ok",
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType:
                                                  "ApiMediaEntityColorPaletteColor",
                                                kind: "LinkedField",
                                                name: "palette",
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "percentage",
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType:
                                                      "ApiMediaEntityColor",
                                                    kind: "LinkedField",
                                                    name: "rgb",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "blue",
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "green",
                                                        storageKey: null,
                                                      },
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "red",
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ]),
                                storageKey: null,
                              }),
                              (Ke = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "profile_banner_url",
                                storageKey: null,
                              }),
                              (be = {
                                alias: null,
                                args: null,
                                concreteType: "ApiMediaExtensions",
                                kind: "LinkedField",
                                name: "profile_image_extensions",
                                plural: !1,
                                selections: fe,
                                storageKey: null,
                              }),
                              (Se = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "profile_image_url_https",
                                storageKey: null,
                              }),
                              (Te = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "profile_interstitial_type",
                                storageKey: null,
                              }),
                              S,
                              {
                                kind: "RequiredField",
                                field: (ve = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "statuses_count",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.statuses_count",
                              },
                              (we = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "time_zone",
                                storageKey: null,
                              }),
                              (Le = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "translator_type",
                                storageKey: null,
                              }),
                              r,
                              (Re = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "utc_offset",
                                storageKey: null,
                              }),
                              {
                                kind: "RequiredField",
                                field: (Ue = {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "verified",
                                  storageKey: null,
                                }),
                                action: "THROW",
                                path: "user.result.legacy.verified",
                              },
                              (qe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "verified_type",
                                storageKey: null,
                              }),
                              (xe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "want_retweets",
                                storageKey: null,
                              }),
                              (Ae = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "withheld_description",
                                storageKey: null,
                              }),
                              (Ee = {
                                alias: null,
                                args: null,
                                concreteType: "UserEntities",
                                kind: "LinkedField",
                                name: "withheld_entities",
                                plural: !1,
                                selections: ae,
                                storageKey: null,
                              }),
                              (Ie = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "withheld_in_countries",
                                storageKey: null,
                              }),
                              (Ce = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "withheld_scope",
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "Professional",
                            kind: "LinkedField",
                            name: "professional",
                            plural: !1,
                            selections: [
                              s,
                              (Oe = {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "professional_type",
                                storageKey: null,
                              }),
                              (Pe = {
                                alias: null,
                                args: null,
                                concreteType: "BusinessCategory",
                                kind: "LinkedField",
                                name: "category",
                                plural: !0,
                                selections: [
                                  i,
                                  ye,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "display",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "icon_name",
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              }),
                            ],
                            storageKey: null,
                          },
                          (Me = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "has_nft_avatar",
                            storageKey: null,
                          }),
                          (He = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "super_follow_eligible",
                            storageKey: null,
                          }),
                          (Qe = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "super_followed_by",
                            storageKey: null,
                          }),
                          (Be = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "super_following",
                            storageKey: null,
                          }),
                          Me,
                          He,
                          Qe,
                          Be,
                          (Ne = {
                            condition: "withSafetyModeUserFields",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "smart_blocked_by",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "smart_blocking",
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "smart_blocking_expiration",
                                storageKey: null,
                              },
                            ],
                          }),
                          (Ze = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verified_phone_status",
                            storageKey: null,
                          }),
                          (De = {
                            alias: null,
                            args: null,
                            concreteType: "LegacyExtendedUserProfile",
                            kind: "LinkedField",
                            name: "legacy_extended_profile",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "LegacyExtendedBirthDate",
                                kind: "LinkedField",
                                name: "birthdate",
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "day",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "month",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "year",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "visibility",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "year_visibility",
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          }),
                          (We = {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_profile_translatable",
                            storageKey: null,
                          }),
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          w,
                          {
                            alias: null,
                            args: null,
                            concreteType: "TimelineRichText",
                            kind: "LinkedField",
                            name: "unavailable_message",
                            plural: !1,
                            selections: U,
                            storageKey: null,
                          },
                          v,
                        ],
                        type: "UserUnavailable",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "Query",
            abstractKey: null,
          },
          kind: "Request",
          operation: {
            argumentDefinitions: l,
            kind: "Operation",
            name: "UsersGraphQLFetchByScreenNameQuery",
            selections: [
              {
                alias: "user",
                args: a,
                concreteType: "UserResults",
                kind: "LinkedField",
                name: "user_result_by_screen_name",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "result",
                    plural: !1,
                    selections: [
                      n,
                      {
                        kind: "InlineFragment",
                        selections: [
                          i,
                          s,
                          {
                            alias: "affiliates_highlighted_label",
                            args: null,
                            concreteType: "HighlightedUserLabelResponse",
                            kind: "LinkedField",
                            name: "identity_profile_labels_highlighted_label",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: "HighlightedUserLabel",
                                kind: "LinkedField",
                                name: "label",
                                plural: !1,
                                selections: [
                                  u,
                                  o,
                                  d,
                                  {
                                    alias: "longDescription",
                                    args: null,
                                    concreteType: "TimelineRichText",
                                    kind: "LinkedField",
                                    name: "long_description",
                                    plural: !1,
                                    selections: (Ge = [
                                      c,
                                      g,
                                      _,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: "TimelineRichTextEntity",
                                        kind: "LinkedField",
                                        name: "entities",
                                        plural: !0,
                                        selections: [
                                          y,
                                          p,
                                          m,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "ref",
                                            plural: !1,
                                            selections: [
                                              n,
                                              {
                                                kind: "TypeDiscriminator",
                                                abstractKey:
                                                  "__isTimelineReferenceObject",
                                              },
                                              k,
                                              f,
                                              h,
                                              K,
                                              b,
                                              {
                                                kind: "InlineFragment",
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "UserResults",
                                                    kind: "LinkedField",
                                                    name: "user_results",
                                                    plural: !1,
                                                    selections: (je = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "result",
                                                        plural: !1,
                                                        selections: [
                                                          n,
                                                          {
                                                            kind: "InlineFragment",
                                                            selections: [
                                                              T,
                                                              (Ve = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle:
                                                                  "defaultScalars",
                                                                key: "",
                                                                kind: "LinkedHandle",
                                                                name: "legacy",
                                                              }),
                                                              s,
                                                              i,
                                                            ],
                                                            type: "User",
                                                            abstractKey: null,
                                                          },
                                                          L,
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      i,
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: "TimelineRichTextUser",
                                                abstractKey: null,
                                              },
                                              {
                                                kind: "InlineFragment",
                                                selections: [
                                                  S,
                                                  {
                                                    alias: "mention_results",
                                                    args: null,
                                                    concreteType: "UserResults",
                                                    kind: "LinkedField",
                                                    name: "user_results",
                                                    plural: !1,
                                                    selections: je,
                                                    storageKey: null,
                                                  },
                                                ],
                                                type: "TimelineRichTextMention",
                                                abstractKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ]),
                                    storageKey: null,
                                  },
                                  q,
                                  x,
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          A,
                          E,
                          I,
                          C,
                          {
                            alias: null,
                            args: null,
                            concreteType: "ApiUser",
                            kind: "LinkedField",
                            name: "legacy",
                            plural: !1,
                            selections: [
                              O,
                              M,
                              Q,
                              N,
                              D,
                              V,
                              j,
                              G,
                              O,
                              M,
                              Q,
                              N,
                              D,
                              V,
                              j,
                              G,
                              J,
                              X,
                              Y,
                              $,
                              ee,
                              d,
                              ne,
                              ie,
                              se,
                              re,
                              te,
                              ue,
                              oe,
                              de,
                              ce,
                              ge,
                              _e,
                              ye,
                              pe,
                              me,
                              ke,
                              Fe,
                              he,
                              Ke,
                              be,
                              Se,
                              Te,
                              S,
                              ve,
                              we,
                              Le,
                              r,
                              Re,
                              Ue,
                              qe,
                              xe,
                              Ae,
                              Ee,
                              Ie,
                              Ce,
                            ],
                            storageKey: null,
                          },
                          Ve,
                          {
                            alias: null,
                            args: null,
                            concreteType: "Professional",
                            kind: "LinkedField",
                            name: "professional",
                            plural: !1,
                            selections: [s, Oe, Pe, i],
                            storageKey: null,
                          },
                          Me,
                          He,
                          Qe,
                          Be,
                          Me,
                          He,
                          Qe,
                          Be,
                          Ne,
                          Ze,
                          De,
                          We,
                        ],
                        type: "User",
                        abstractKey: null,
                      },
                      {
                        kind: "InlineFragment",
                        selections: [
                          w,
                          {
                            alias: null,
                            args: null,
                            concreteType: "TimelineRichText",
                            kind: "LinkedField",
                            name: "unavailable_message",
                            plural: !1,
                            selections: Ge,
                            storageKey: null,
                          },
                          v,
                        ],
                        type: "UserUnavailable",
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  i,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: "yGtWhat0rodvNPZ-AlYdnA",
            metadata: {
              features: [
                "blue_business_profile_image_shape_enabled",
                "responsive_web_graphql_exclude_directive_enabled",
                "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
                "responsive_web_graphql_timeline_navigation_enabled",
                "verified_phone_label_enabled",
              ],
            },
            name: "UsersGraphQLFetchByScreenNameQuery",
            operationKind: "query",
            text: null,
          },
        };
      (ze.hash = "fd3dd282da84093495635e8f3a6cf9b2"), (e.exports = ze);
    },
    7475: (e, l, a) => {
      "use strict";
      a.r(l),
        a.d(l, {
          default: () => E,
          isFatalRemoveFollowerError: () => A,
          isFatalUserResponseError: () => q,
          isFatalUsersResponseError: () => x,
          isFatalViewerResponseError: () => U,
        });
      var n,
        i = a(6899),
        s = (a(85488), a(58955)),
        r = a(11469),
        t = a(79363),
        u = a(15956),
        o = a(23335),
        d = a(51573),
        c = a(17360),
        g = a(90650),
        _ = a(7435),
        y = a.n(_),
        p = a(25777),
        m = a.n(p),
        k = a(6155),
        F = a.n(k),
        f = a(93405),
        h = a.n(f),
        K = a(81732),
        b = a.n(K),
        S = a(63174),
        T = a(63140),
        v = a(8893);
      const w = (0, s.Z)([
          "affiliates_highlighted_label",
          "is_profile_translatable",
        ]),
        L = (e) =>
          Array.isArray(e.path) && e.path.length > 0 && w.has((0, u.Z)(e.path)),
        R = (e) => {
          var l, a, n, s;
          if (
            "User" ===
            (null == (l = e.user) || null == (a = l.result)
              ? void 0
              : a.__typename)
          )
            return (0, i.Fv)(e.user.result, g.Z);
          if (
            "UserUnavailable" ===
            (null == (n = e.user) || null == (s = n.result)
              ? void 0
              : s.__typename)
          ) {
            let l, a;
            if ("Suspended" === e.user.result.reason)
              (a = JSON.stringify(e.user.result.unavailable_message)),
                (l = T.ZP.OtherUserSuspended);
            else l = T.ZP.GenericUserNotFound;
            const n = new S.Z("userByRestId", 401, {}, [
              { code: l, message: a },
            ]);
            return Promise.reject(n);
          }
          {
            const e = new S.Z("userByRestId", 401, {}, [
              { code: T.ZP.GenericUserNotFound },
            ]);
            return Promise.reject(e);
          }
        },
        U = (e, l) => {
          var a, n;
          const i =
              null == l ||
              null == (a = l.viewer) ||
              null == (n = a.user_results)
                ? void 0
                : n.result,
            s = i && "User" === i.__typename && i.legacy,
            r = Array.isArray(e) && e.includes(o.isGraphQLBounceError);
          return (!s || !r) && Array.isArray(e) && !(0, t.Z)(e, L);
        },
        q = (e, l) => {
          var a, n;
          return (
            !(
              "User" ===
                (null == l || null == (a = l.user) || null == (n = a.result)
                  ? void 0
                  : n.__typename) && l.user.result.legacy
            ) &&
            Array.isArray(e) &&
            !(0, t.Z)(e, L)
          );
        },
        x = (e, l) =>
          !(
            (null == l
              ? void 0
              : l.users.filter((e) => {
                  var l;
                  return (
                    "User" ===
                    !(null == e || null == (l = e.result) || !l.__typename)
                  );
                })) || []
          ).length &&
          Array.isArray(e) &&
          !(0, t.Z)(e, L),
        A = (e, l) => {
          var a, n;
          return (
            !(
              "UnfollowSuccessResult" ===
                (null == l || null == (a = l.remove_follower)
                  ? void 0
                  : a.__typename) &&
              (null == l || null == (n = l.remove_follower)
                ? void 0
                : n.unfollow_success_reason)
            ) && (0, c.jB)(e)
          );
        },
        E = ({ apiClient: e, featureSwitches: l, relayEnvironment: s }) => ({
          fetchViewer: () =>
            e
              .graphQL(
                b(),
                {
                  withCommunitiesMemberships: l.isTrue("c9s_enabled"),
                  withCommunitiesCreation: l.isTrue(
                    "c9s_community_creation_enabled"
                  ),
                },
                U
              )
              .then((e) => {
                var l, a, n, s;
                if (!e.viewer) return;
                const { viewer: r } = e;
                let t;
                if (
                  "User" ===
                  (null == (l = r.user_results) || null == (a = l.result)
                    ? void 0
                    : a.__typename)
                ) {
                  const { __typename: e, ...l } = r.user_results.result;
                  t = l;
                }
                const u = {};
                r.user_features &&
                  r.user_features.forEach(({ enabled: e, feature: l }) => {
                    u[l] = e;
                  });
                const o = r.educationFlags;
                return {
                  communitiesActions: {
                    create: Boolean(
                      "CommunityCreateAction" ===
                        (null == (n = r.create_community_action_result)
                          ? void 0
                          : n.__typename)
                    ),
                  },
                  educationFlags: o,
                  hasCommunityMemberships: r.has_community_memberships,
                  isActiveCreator: r.is_active_creator,
                  isRestrictedSession: r.is_tfe_restricted_session,
                  normalizedResult: (0, i.Fv)(t, g.Z),
                  superFollowersCount: r.super_followers_count,
                  superFollowsApplicationStatus:
                    null == (s = t)
                      ? void 0
                      : s.super_follows_application_status,
                  userFeatures: u,
                };
              }),
          fetchOneUserByScreenNameWithRelay: ({ screen_name: e }) =>
            (0, v.s)(
              s,
              void 0 !== n ? n : (n = a(73339)),
              {
                screen_name: e,
                withSafetyModeUserFields: l.isTrue(
                  "rito_safety_mode_blocked_profile_enabled"
                ),
              },
              q
            ).then((e) => (e ? R(e) : { result: void 0 })),
          fetchOneUserByScreenName: ({ screen_name: a }) =>
            (0, d.o)(
              "userByScreenName",
              () =>
                e
                  .graphQL(
                    F(),
                    {
                      screen_name: a,
                      withSafetyModeUserFields: l.isTrue(
                        "rito_safety_mode_blocked_profile_enabled"
                      ),
                    },
                    q
                  )
                  .then((e) => R(e)),
              (e) => e.then(({ screenName: e }) => e === a)
            ),
          fetchOneUser: ({ user_id: a }) =>
            e
              .graphQL(
                m(),
                {
                  userId: a,
                  withSafetyModeUserFields: l.isTrue(
                    "rito_safety_mode_blocked_profile_enabled"
                  ),
                },
                q
              )
              .then((e) => R(e)),
          fetchUsers: ({ user_id: l }) =>
            e.graphQL(h(), { userIds: l.split(",") }, x).then((e) => {
              const l = (0, r.Z)(e.users.filter(Boolean), (e) =>
                e.result && "User" === e.result.__typename && e.result.legacy
                  ? e.result
                  : void 0
              );
              return (0, i.Fv)(l, [g.Z]);
            }),
          removeFollower: ({ target_user_id: l }) =>
            e.graphQL(y(), { target_user_id: l }, A),
        });
    },
    8893: (e, l, a) => {
      "use strict";
      a.d(l, { s: () => s });
      var n = a(10622),
        i = a.n(n);
      function s(e, l, a, n) {
        return i()(
          e,
          l,
          a,
          n ? { networkCacheConfig: { metadata: { isFatalError: n } } } : void 0
        ).toPromise();
      }
    },
    51573: (e, l, a) => {
      "use strict";
      a.d(l, { o: () => o });
      a(21515), a(6886);
      var n = a(72599);
      const i = new (class {
          constructor() {
            this.promise = new Promise((e, l) => {
              (this.reject = l), (this.resolve = e);
            });
          }
        })(),
        s = i.promise;
      if ("undefined" != typeof document) {
        let e;
        document.addEventListener("DOMContentLoaded", () => {
          i.resolve(), null != e && clearTimeout(e);
        });
        const l = () => {
          "loading" !== document.readyState
            ? i.resolve()
            : (e = setTimeout(() => {
                l();
              }, 500));
        };
        l();
      }
      var r = a(86916),
        t = a(79150),
        u = a(25943);
      function o(e, l, a) {
        const i =
          "undefined" != typeof window ? window.__PREFETCH_DATA__ : void 0;
        if (!i) return l();
        const o = Date.now(),
          d = i.timestamp || o;
        if (Math.max(0, o - d) >= 3e5)
          return delete window.__PREFETCH_DATA__, l();
        const c = i.items[e];
        if (!c) return l();
        return (a ? a(c.meta) : Promise.resolve(!0)).then(
          (a) =>
            a
              ? ((u.q.didPrefetch[e] = !0),
                Promise.race([c.promise, s])
                  .then(
                    (a) =>
                      a
                        ? r.i(a, t.AK)
                        : ((0, n.ZP)(
                            `DOM loaded but prefetch data was not present for ${e}`
                          ),
                          l()),
                    () => ((u.q.prefetchPromiseRejected[e] = !0), l())
                  )
                  .finally(() => {
                    delete i.items[e];
                  }))
              : l(),
          () => l()
        );
      }
    },
    25943: (e, l, a) => {
      "use strict";
      a.d(l, { q: () => n });
      const n = { didPrefetch: {}, prefetchPromiseRejected: {} };
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.UsersGraphQL.ddb7a1da.js.map
