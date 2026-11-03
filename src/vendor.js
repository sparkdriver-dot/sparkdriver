/* Recovered browser dependencies. Original upstream license comments retained. */
var mh = (e) => {
  throw TypeError(e);
};
var Ml = (e, t, r) => t.has(e) || mh("Cannot " + r);
var T = (e, t, r) => (
    Ml(e, t, "read from private field"),
    r ? r.call(e) : t.get(e)
  ),
  te = (e, t, r) =>
    t.has(e)
      ? mh("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  V = (e, t, r, n) => (
    Ml(e, t, "write to private field"),
    n ? n.call(e, r) : t.set(e, r),
    r
  ),
  Le = (e, t, r) => (Ml(e, t, "access private method"), r);
var bo = (e, t, r, n) => ({
  set _(s) {
    V(e, t, s, r);
  },
  get _() {
    return T(e, t, n);
  },
});
function A0(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => n[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = r(s);
    fetch(s.href, i);
  }
})();
function Zp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var em = { exports: {} },
  Za = {},
  tm = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ao = Symbol.for("react.element"),
  N0 = Symbol.for("react.portal"),
  O0 = Symbol.for("react.fragment"),
  I0 = Symbol.for("react.strict_mode"),
  L0 = Symbol.for("react.profiler"),
  $0 = Symbol.for("react.provider"),
  M0 = Symbol.for("react.context"),
  D0 = Symbol.for("react.forward_ref"),
  U0 = Symbol.for("react.suspense"),
  F0 = Symbol.for("react.memo"),
  B0 = Symbol.for("react.lazy"),
  gh = Symbol.iterator;
function z0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gh && e[gh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nm = Object.assign,
  sm = {};
function Ws(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = sm),
    (this.updater = r || rm));
}
Ws.prototype.isReactComponent = {};
Ws.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ws.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function im() {}
im.prototype = Ws.prototype;
function qu(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = sm),
    (this.updater = r || rm));
}
var Gu = (qu.prototype = new im());
Gu.constructor = qu;
nm(Gu, Ws.prototype);
Gu.isPureReactComponent = !0;
var yh = Array.isArray,
  om = Object.prototype.hasOwnProperty,
  Ju = { current: null },
  am = { key: !0, ref: !0, __self: !0, __source: !0 };
function lm(e, t, r) {
  var n,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      om.call(t, n) && !am.hasOwnProperty(n) && (s[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) s.children = r;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) s[n] === void 0 && (s[n] = a[n]);
  return {
    $$typeof: ao,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Ju.current,
  };
}
function H0(e, t) {
  return {
    $$typeof: ao,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ao;
}
function W0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var vh = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? W0("" + e.key)
    : t.toString(36);
}
function Xo(e, t, r, n, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ao:
          case N0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = n === "" ? "." + Dl(o, 0) : n),
      yh(s)
        ? ((r = ""),
          e != null && (r = e.replace(vh, "$&/") + "/"),
          Xo(s, t, r, "", function (c) {
            return c;
          }))
        : s != null &&
          (Qu(s) &&
            (s = H0(
              s,
              r +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(vh, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), yh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = n + Dl(i, a);
      o += Xo(i, t, r, l, s);
    }
  else if (((l = z0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done;)
      ((i = i.value), (l = n + Dl(i, a++)), (o += Xo(i, t, r, l, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function _o(e, t, r) {
  if (e == null) return e;
  var n = [],
    s = 0;
  return (
    Xo(e, n, "", "", function (i) {
      return t.call(r, i, s++);
    }),
    n
  );
}
function V0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  Zo = { transition: null },
  K0 = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Zo,
    ReactCurrentOwner: Ju,
  };
function cm() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: _o,
  forEach: function (e, t, r) {
    _o(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _o(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _o(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Y.Component = Ws;
Y.Fragment = O0;
Y.Profiler = L0;
Y.PureComponent = qu;
Y.StrictMode = I0;
Y.Suspense = U0;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
Y.act = cm;
Y.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = nm({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ju.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      om.call(t, l) &&
        !am.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    n.children = a;
  }
  return { $$typeof: ao, type: e.type, key: s, ref: i, props: n, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: M0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $0, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = lm;
Y.createFactory = function (e) {
  var t = lm.bind(null, e);
  return ((t.type = e), t);
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: D0, render: e };
};
Y.isValidElement = Qu;
Y.lazy = function (e) {
  return { $$typeof: B0, _payload: { _status: -1, _result: e }, _init: V0 };
};
Y.memo = function (e, t) {
  return { $$typeof: F0, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Zo.transition;
  Zo.transition = {};
  try {
    e();
  } finally {
    Zo.transition = t;
  }
};
Y.unstable_act = cm;
Y.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Ve.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Y.useId = function () {
  return Ve.current.useId();
};
Y.useImperativeHandle = function (e, t, r) {
  return Ve.current.useImperativeHandle(e, t, r);
};
Y.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Y.useReducer = function (e, t, r) {
  return Ve.current.useReducer(e, t, r);
};
Y.useRef = function (e) {
  return Ve.current.useRef(e);
};
Y.useState = function (e) {
  return Ve.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, r) {
  return Ve.current.useSyncExternalStore(e, t, r);
};
Y.useTransition = function () {
  return Ve.current.useTransition();
};
Y.version = "18.3.1";
tm.exports = Y;
var b = tm.exports;
const N = Zp(b),
  um = A0({ __proto__: null, default: N }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q0 = b,
  G0 = Symbol.for("react.element"),
  J0 = Symbol.for("react.fragment"),
  Q0 = Object.prototype.hasOwnProperty,
  Y0 = q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  X0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function dm(e, t, r) {
  var n,
    s = {},
    i = null,
    o = null;
  (r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (n in t) Q0.call(t, n) && !X0.hasOwnProperty(n) && (s[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: G0,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Y0.current,
  };
}
Za.Fragment = J0;
Za.jsx = dm;
Za.jsxs = dm;
em.exports = Za;
var p = em.exports,
  hm = { exports: {} },
  ct = {},
  fm = { exports: {} },
  pm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var $ = C.length;
    C.push(P);
    e: for (; 0 < $;) {
      var K = ($ - 1) >>> 1,
        F = C[K];
      if (0 < s(F, P)) ((C[K] = P), (C[$] = F), ($ = K));
      else break e;
    }
  }
  function r(C) {
    return C.length === 0 ? null : C[0];
  }
  function n(C) {
    if (C.length === 0) return null;
    var P = C[0],
      $ = C.pop();
    if ($ !== P) {
      C[0] = $;
      e: for (var K = 0, F = C.length, Q = F >>> 1; K < Q;) {
        var X = 2 * (K + 1) - 1,
          xe = C[X],
          Ie = X + 1,
          re = C[Ie];
        if (0 > s(xe, $))
          Ie < F && 0 > s(re, xe)
            ? ((C[K] = re), (C[Ie] = $), (K = Ie))
            : ((C[K] = xe), (C[X] = $), (K = X));
        else if (Ie < F && 0 > s(re, $)) ((C[K] = re), (C[Ie] = $), (K = Ie));
        else break e;
      }
    }
    return P;
  }
  function s(C, P) {
    var $ = C.sortIndex - P.sortIndex;
    return $ !== 0 ? $ : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    h = !1,
    w = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(C) {
    for (var P = r(c); P !== null;) {
      if (P.callback === null) n(c);
      else if (P.startTime <= C)
        (n(c), (P.sortIndex = P.expirationTime), t(l, P));
      else break;
      P = r(c);
    }
  }
  function _(C) {
    if (((v = !1), y(C), !w))
      if (r(l) !== null) ((w = !0), H(k));
      else {
        var P = r(c);
        P !== null && q(_, P.startTime - C);
      }
  }
  function k(C, P) {
    ((w = !1), v && ((v = !1), g(R), (R = -1)), (h = !0));
    var $ = f;
    try {
      for (
        y(P), d = r(l);
        d !== null && (!(d.expirationTime > P) || (C && !z()));
      ) {
        var K = d.callback;
        if (typeof K == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var F = K(d.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof F == "function" ? (d.callback = F) : d === r(l) && n(l),
            y(P));
        } else n(l);
        d = r(l);
      }
      if (d !== null) var Q = !0;
      else {
        var X = r(c);
        (X !== null && q(_, X.startTime - P), (Q = !1));
      }
      return Q;
    } finally {
      ((d = null), (f = $), (h = !1));
    }
  }
  var S = !1,
    E = null,
    R = -1,
    A = 5,
    O = -1;
  function z() {
    return !(e.unstable_now() - O < A);
  }
  function D() {
    if (E !== null) {
      var C = e.unstable_now();
      O = C;
      var P = !0;
      try {
        P = E(!0, C);
      } finally {
        P ? J() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var J;
  if (typeof m == "function")
    J = function () {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      Z = L.port2;
    ((L.port1.onmessage = D),
      (J = function () {
        Z.postMessage(null);
      }));
  } else
    J = function () {
      x(D, 0);
    };
  function H(C) {
    ((E = C), S || ((S = !0), J()));
  }
  function q(C, P) {
    R = x(function () {
      C(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || h || ((w = !0), H(k));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = f;
      }
      var $ = f;
      f = P;
      try {
        return C();
      } finally {
        f = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var $ = f;
      f = C;
      try {
        return P();
      } finally {
        f = $;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, $) {
      var K = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? K + $ : K))
          : ($ = K),
        C)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = $ + F),
        (C = {
          id: u++,
          callback: P,
          priorityLevel: C,
          startTime: $,
          expirationTime: F,
          sortIndex: -1,
        }),
        $ > K
          ? ((C.sortIndex = $),
            t(c, C),
            r(l) === null &&
              C === r(c) &&
              (v ? (g(R), (R = -1)) : (v = !0), q(_, $ - K)))
          : ((C.sortIndex = F), t(l, C), w || h || ((w = !0), H(k))),
        C
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (C) {
      var P = f;
      return function () {
        var $ = f;
        f = P;
        try {
          return C.apply(this, arguments);
        } finally {
          f = $;
        }
      };
    }));
})(pm);
fm.exports = pm;
var Z0 = fm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ew = b,
  lt = Z0;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mm = new Set(),
  ji = {};
function Un(e, t) {
  (Ls(e, t), Ls(e + "Capture", t));
}
function Ls(e, t) {
  for (ji[e] = t, e = 0; e < t.length; e++) mm.add(t[e]);
}
var dr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _c = Object.prototype.hasOwnProperty,
  tw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wh = {},
  xh = {};
function rw(e) {
  return _c.call(xh, e)
    ? !0
    : _c.call(wh, e)
      ? !1
      : tw.test(e)
        ? (xh[e] = !0)
        : ((wh[e] = !0), !1);
}
function nw(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sw(e, t, r, n) {
  if (t === null || typeof t > "u" || nw(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, r, n, s, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = s),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yu = /[\-:]([a-z])/g;
function Xu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    Oe[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yu, Xu);
    Oe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yu, Xu);
  Oe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zu(e, t, r, n) {
  var s = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (s !== null
    ? s.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sw(t, r, s, n) && (r = null),
    n || s === null
      ? rw(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : s.mustUseProperty
        ? (e[s.propertyName] = r === null ? (s.type === 3 ? !1 : "") : r)
        : ((t = s.attributeName),
          (n = s.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (r = s === 3 || (s === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var yr = ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ko = Symbol.for("react.element"),
  ns = Symbol.for("react.portal"),
  ss = Symbol.for("react.fragment"),
  ed = Symbol.for("react.strict_mode"),
  kc = Symbol.for("react.profiler"),
  gm = Symbol.for("react.provider"),
  ym = Symbol.for("react.context"),
  td = Symbol.for("react.forward_ref"),
  Sc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.suspense_list"),
  rd = Symbol.for("react.memo"),
  jr = Symbol.for("react.lazy"),
  vm = Symbol.for("react.offscreen"),
  bh = Symbol.iterator;
function Zs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bh && e[bh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Ul;
function ui(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Fl = !1;
function Bl(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var n = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          n = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        n = c;
      }
      e();
    }
  } catch (c) {
    if (c && n && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          i = n.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Fl = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? ui(e) : "";
}
function iw(e) {
  switch (e.tag) {
    case 5:
      return ui(e.type);
    case 16:
      return ui("Lazy");
    case 13:
      return ui("Suspense");
    case 19:
      return ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Bl(e.type, !1)), e);
    case 11:
      return ((e = Bl(e.type.render, !1)), e);
    case 1:
      return ((e = Bl(e.type, !0)), e);
    default:
      return "";
  }
}
function Tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ss:
      return "Fragment";
    case ns:
      return "Portal";
    case kc:
      return "Profiler";
    case ed:
      return "StrictMode";
    case Sc:
      return "Suspense";
    case Ec:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ym:
        return (e.displayName || "Context") + ".Consumer";
      case gm:
        return (e._context.displayName || "Context") + ".Provider";
      case td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case rd:
        return (
          (t = e.displayName || null),
          t !== null ? t : Tc(e.type) || "Memo"
        );
      case jr:
        ((t = e._payload), (e = e._init));
        try {
          return Tc(e(t));
        } catch {}
    }
  return null;
}
function ow(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tc(t);
    case 8:
      return t === ed ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Xr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function aw(e) {
  var t = wm(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var s = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          ((n = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function So(e) {
  e._valueTracker || (e._valueTracker = aw(e));
}
function xm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = wm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function pa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cc(e, t) {
  var r = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function _h(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  ((r = Xr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function bm(e, t) {
  ((t = t.checked), t != null && Zu(e, "checked", t, !1));
}
function Pc(e, t) {
  bm(e, t);
  var r = Xr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Rc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Rc(e, t.type, Xr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function kh(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(
      (n !== "submit" && n !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function Rc(e, t, r) {
  (t !== "number" || pa(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var di = Array.isArray;
function ys(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
    for (r = 0; r < e.length; r++)
      ((s = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== s && (e[r].selected = s),
        s && n && (e[r].defaultSelected = !0));
  } else {
    for (r = "" + Xr(r), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === r) {
        ((e[s].selected = !0), n && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function jc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(j(92));
      if (di(r)) {
        if (1 < r.length) throw Error(j(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: Xr(r) };
}
function _m(e, t) {
  var r = Xr(t.value),
    n = Xr(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n));
}
function Eh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function km(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ac(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? km(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Eo,
  Sm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Eo = Eo || document.createElement("div"),
          Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Eo.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Ai(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  lw = ["Webkit", "ms", "Moz", "O"];
Object.keys(gi).forEach(function (e) {
  lw.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gi[t] = gi[e]));
  });
});
function Em(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (gi.hasOwnProperty(e) && gi[e])
      ? ("" + t).trim()
      : t + "px";
}
function Tm(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        s = Em(r, t[r], n);
      (r === "float" && (r = "cssFloat"), n ? e.setProperty(r, s) : (e[r] = s));
    }
}
var cw = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Nc(e, t) {
  if (t) {
    if (cw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Oc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ic = null;
function nd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lc = null,
  vs = null,
  ws = null;
function Th(e) {
  if ((e = uo(e))) {
    if (typeof Lc != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = sl(t)), Lc(e.stateNode, e.type, t));
  }
}
function Cm(e) {
  vs ? (ws ? ws.push(e) : (ws = [e])) : (vs = e);
}
function Pm() {
  if (vs) {
    var e = vs,
      t = ws;
    if (((ws = vs = null), Th(e), t)) for (e = 0; e < t.length; e++) Th(t[e]);
  }
}
function Rm(e, t) {
  return e(t);
}
function jm() {}
var zl = !1;
function Am(e, t, r) {
  if (zl) return e(t, r);
  zl = !0;
  try {
    return Rm(e, t, r);
  } finally {
    ((zl = !1), (vs !== null || ws !== null) && (jm(), Pm()));
  }
}
function Ni(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = sl(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(j(231, t, typeof r));
  return r;
}
var $c = !1;
if (dr)
  try {
    var ei = {};
    (Object.defineProperty(ei, "passive", {
      get: function () {
        $c = !0;
      },
    }),
      window.addEventListener("test", ei, ei),
      window.removeEventListener("test", ei, ei));
  } catch {
    $c = !1;
  }
function uw(e, t, r, n, s, i, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (u) {
    this.onError(u);
  }
}
var yi = !1,
  ma = null,
  ga = !1,
  Mc = null,
  dw = {
    onError: function (e) {
      ((yi = !0), (ma = e));
    },
  };
function hw(e, t, r, n, s, i, o, a, l) {
  ((yi = !1), (ma = null), uw.apply(dw, arguments));
}
function fw(e, t, r, n, s, i, o, a, l) {
  if ((hw.apply(this, arguments), yi)) {
    if (yi) {
      var c = ma;
      ((yi = !1), (ma = null));
    } else throw Error(j(198));
    ga || ((ga = !0), (Mc = c));
  }
}
function Fn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (r = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Nm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ch(e) {
  if (Fn(e) !== e) throw Error(j(188));
}
function pw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ;) {
    var s = r.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((n = s.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i;) {
        if (i === r) return (Ch(s), e);
        if (i === n) return (Ch(s), t);
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (r.return !== n.return) ((r = s), (n = i));
    else {
      for (var o = !1, a = s.child; a;) {
        if (a === r) {
          ((o = !0), (r = s), (n = i));
          break;
        }
        if (a === n) {
          ((o = !0), (n = s), (r = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a;) {
          if (a === r) {
            ((o = !0), (r = i), (n = s));
            break;
          }
          if (a === n) {
            ((o = !0), (n = i), (r = s));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (r.alternate !== n) throw Error(j(190));
  }
  if (r.tag !== 3) throw Error(j(188));
  return r.stateNode.current === r ? e : t;
}
function Om(e) {
  return ((e = pw(e)), e !== null ? Im(e) : null);
}
function Im(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Im(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lm = lt.unstable_scheduleCallback,
  Ph = lt.unstable_cancelCallback,
  mw = lt.unstable_shouldYield,
  gw = lt.unstable_requestPaint,
  we = lt.unstable_now,
  yw = lt.unstable_getCurrentPriorityLevel,
  sd = lt.unstable_ImmediatePriority,
  $m = lt.unstable_UserBlockingPriority,
  ya = lt.unstable_NormalPriority,
  vw = lt.unstable_LowPriority,
  Mm = lt.unstable_IdlePriority,
  el = null,
  Jt = null;
function ww(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : _w,
  xw = Math.log,
  bw = Math.LN2;
function _w(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((xw(e) / bw) | 0)) | 0);
}
var To = 64,
  Co = 4194304;
function hi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function va(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (n = hi(a)) : ((i &= o), i !== 0 && (n = hi(i)));
  } else ((o = r & ~s), o !== 0 ? (n = hi(o)) : i !== 0 && (n = hi(i)));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & s) &&
    ((s = n & -n), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t;)
      ((r = 31 - It(t)), (s = 1 << r), (n |= e[r]), (t &= ~s));
  return n;
}
function kw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sw(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - It(i),
      a = 1 << o,
      l = s[o];
    (l === -1
      ? (!(a & r) || a & n) && (s[o] = kw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Dc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dm() {
  var e = To;
  return ((To <<= 1), !(To & 4194240) && (To = 64), e);
}
function Hl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function lo(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - It(t)),
    (e[t] = r));
}
function Ew(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r;) {
    var s = 31 - It(r),
      i = 1 << s;
    ((t[s] = 0), (n[s] = -1), (e[s] = -1), (r &= ~i));
  }
}
function id(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r;) {
    var n = 31 - It(r),
      s = 1 << n;
    ((s & t) | (e[n] & t) && (e[n] |= t), (r &= ~s));
  }
}
var ne = 0;
function Um(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Fm,
  od,
  Bm,
  zm,
  Hm,
  Uc = !1,
  Po = [],
  Wr = null,
  Vr = null,
  Kr = null,
  Oi = new Map(),
  Ii = new Map(),
  Nr = [],
  Tw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Rh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wr = null;
      break;
    case "dragenter":
    case "dragleave":
      Vr = null;
      break;
    case "mouseover":
    case "mouseout":
      Kr = null;
      break;
    case "pointerover":
    case "pointerout":
      Oi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ii.delete(t.pointerId);
  }
}
function ti(e, t, r, n, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = uo(t)), t !== null && od(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Cw(e, t, r, n, s) {
  switch (t) {
    case "focusin":
      return ((Wr = ti(Wr, e, t, r, n, s)), !0);
    case "dragenter":
      return ((Vr = ti(Vr, e, t, r, n, s)), !0);
    case "mouseover":
      return ((Kr = ti(Kr, e, t, r, n, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (Oi.set(i, ti(Oi.get(i) || null, e, t, r, n, s)), !0);
    case "gotpointercapture":
      return (
        (i = s.pointerId),
        Ii.set(i, ti(Ii.get(i) || null, e, t, r, n, s)),
        !0
      );
  }
  return !1;
}
function Wm(e) {
  var t = wn(e.target);
  if (t !== null) {
    var r = Fn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Nm(r)), t !== null)) {
          ((e.blockedOn = t),
            Hm(e.priority, function () {
              Bm(r);
            }));
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ea(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var r = Fc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ((Ic = n), r.target.dispatchEvent(n), (Ic = null));
    } else return ((t = uo(r)), t !== null && od(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function jh(e, t, r) {
  ea(e) && r.delete(t);
}
function Pw() {
  ((Uc = !1),
    Wr !== null && ea(Wr) && (Wr = null),
    Vr !== null && ea(Vr) && (Vr = null),
    Kr !== null && ea(Kr) && (Kr = null),
    Oi.forEach(jh),
    Ii.forEach(jh));
}
function ri(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Uc ||
      ((Uc = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Pw)));
}
function Li(e) {
  function t(s) {
    return ri(s, e);
  }
  if (0 < Po.length) {
    ri(Po[0], e);
    for (var r = 1; r < Po.length; r++) {
      var n = Po[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Wr !== null && ri(Wr, e),
      Vr !== null && ri(Vr, e),
      Kr !== null && ri(Kr, e),
      Oi.forEach(t),
      Ii.forEach(t),
      r = 0;
    r < Nr.length;
    r++
  )
    ((n = Nr[r]), n.blockedOn === e && (n.blockedOn = null));
  for (; 0 < Nr.length && ((r = Nr[0]), r.blockedOn === null);)
    (Wm(r), r.blockedOn === null && Nr.shift());
}
var xs = yr.ReactCurrentBatchConfig,
  wa = !0;
function Rw(e, t, r, n) {
  var s = ne,
    i = xs.transition;
  xs.transition = null;
  try {
    ((ne = 1), ad(e, t, r, n));
  } finally {
    ((ne = s), (xs.transition = i));
  }
}
function jw(e, t, r, n) {
  var s = ne,
    i = xs.transition;
  xs.transition = null;
  try {
    ((ne = 4), ad(e, t, r, n));
  } finally {
    ((ne = s), (xs.transition = i));
  }
}
function ad(e, t, r, n) {
  if (wa) {
    var s = Fc(e, t, r, n);
    if (s === null) (Zl(e, t, n, xa, r), Rh(e, n));
    else if (Cw(s, e, t, r, n)) n.stopPropagation();
    else if ((Rh(e, n), t & 4 && -1 < Tw.indexOf(e))) {
      for (; s !== null;) {
        var i = uo(s);
        if (
          (i !== null && Fm(i),
          (i = Fc(e, t, r, n)),
          i === null && Zl(e, t, n, xa, r),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && n.stopPropagation();
    } else Zl(e, t, n, null, r);
  }
}
var xa = null;
function Fc(e, t, r, n) {
  if (((xa = null), (e = nd(n)), (e = wn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Nm(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((xa = e), null);
}
function Vm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yw()) {
        case sd:
          return 1;
        case $m:
          return 4;
        case ya:
        case vw:
          return 16;
        case Mm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Br = null,
  ld = null,
  ta = null;
function Km() {
  if (ta) return ta;
  var e,
    t = ld,
    r = t.length,
    n,
    s = "value" in Br ? Br.value : Br.textContent,
    i = s.length;
  for (e = 0; e < r && t[e] === s[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === s[i - n]; n++);
  return (ta = s.slice(e, 1 < n ? 1 - n : void 0));
}
function ra(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ro() {
  return !0;
}
function Ah() {
  return !1;
}
function ut(e) {
  function t(r, n, s, i, o) {
    ((this._reactName = r),
      (this._targetInst = s),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ro
        : Ah),
      (this.isPropagationStopped = Ah),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ro));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ro));
      },
      persist: function () {},
      isPersistent: Ro,
    }),
    t
  );
}
var Vs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cd = ut(Vs),
  co = me({}, Vs, { view: 0, detail: 0 }),
  Aw = ut(co),
  Wl,
  Vl,
  ni,
  tl = me({}, co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ud,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ni &&
            (ni && e.type === "mousemove"
              ? ((Wl = e.screenX - ni.screenX), (Vl = e.screenY - ni.screenY))
              : (Vl = Wl = 0),
            (ni = e)),
          Wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  Nh = ut(tl),
  Nw = me({}, tl, { dataTransfer: 0 }),
  Ow = ut(Nw),
  Iw = me({}, co, { relatedTarget: 0 }),
  Kl = ut(Iw),
  Lw = me({}, Vs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $w = ut(Lw),
  Mw = me({}, Vs, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dw = ut(Mw),
  Uw = me({}, Vs, { data: 0 }),
  Oh = ut(Uw),
  Fw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Bw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zw[e]) ? !!t[e] : !1;
}
function ud() {
  return Hw;
}
var Ww = me({}, co, {
    key: function (e) {
      if (e.key) {
        var t = Fw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Bw[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ud,
    charCode: function (e) {
      return e.type === "keypress" ? ra(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ra(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Vw = ut(Ww),
  Kw = me({}, tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ih = ut(Kw),
  qw = me({}, co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ud,
  }),
  Gw = ut(qw),
  Jw = me({}, Vs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qw = ut(Jw),
  Yw = me({}, tl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xw = ut(Yw),
  Zw = [9, 13, 27, 32],
  dd = dr && "CompositionEvent" in window,
  vi = null;
dr && "documentMode" in document && (vi = document.documentMode);
var ex = dr && "TextEvent" in window && !vi,
  qm = dr && (!dd || (vi && 8 < vi && 11 >= vi)),
  Lh = " ",
  $h = !1;
function Gm(e, t) {
  switch (e) {
    case "keyup":
      return Zw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jm(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var is = !1;
function tx(e, t) {
  switch (e) {
    case "compositionend":
      return Jm(t);
    case "keypress":
      return t.which !== 32 ? null : (($h = !0), Lh);
    case "textInput":
      return ((e = t.data), e === Lh && $h ? null : e);
    default:
      return null;
  }
}
function rx(e, t) {
  if (is)
    return e === "compositionend" || (!dd && Gm(e, t))
      ? ((e = Km()), (ta = ld = Br = null), (is = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Mh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nx[e.type] : t === "textarea";
}
function Qm(e, t, r, n) {
  (Cm(n),
    (t = ba(t, "onChange")),
    0 < t.length &&
      ((r = new cd("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t })));
}
var wi = null,
  $i = null;
function sx(e) {
  ag(e, 0);
}
function rl(e) {
  var t = ls(e);
  if (xm(t)) return e;
}
function ix(e, t) {
  if (e === "change") return t;
}
var Ym = !1;
if (dr) {
  var ql;
  if (dr) {
    var Gl = "oninput" in document;
    if (!Gl) {
      var Dh = document.createElement("div");
      (Dh.setAttribute("oninput", "return;"),
        (Gl = typeof Dh.oninput == "function"));
    }
    ql = Gl;
  } else ql = !1;
  Ym = ql && (!document.documentMode || 9 < document.documentMode);
}
function Uh() {
  wi && (wi.detachEvent("onpropertychange", Xm), ($i = wi = null));
}
function Xm(e) {
  if (e.propertyName === "value" && rl($i)) {
    var t = [];
    (Qm(t, $i, e, nd(e)), Am(sx, t));
  }
}
function ox(e, t, r) {
  e === "focusin"
    ? (Uh(), (wi = t), ($i = r), wi.attachEvent("onpropertychange", Xm))
    : e === "focusout" && Uh();
}
function ax(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl($i);
}
function lx(e, t) {
  if (e === "click") return rl(t);
}
function cx(e, t) {
  if (e === "input" || e === "change") return rl(t);
}
function ux(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $t = typeof Object.is == "function" ? Object.is : ux;
function Mi(e, t) {
  if ($t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var s = r[n];
    if (!_c.call(t, s) || !$t(e[s], t[s])) return !1;
  }
  return !0;
}
function Fh(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Bh(e, t) {
  var r = Fh(e);
  e = 0;
  for (var n; r;) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r;) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Fh(r);
  }
}
function Zm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Zm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function eg() {
  for (var e = window, t = pa(); t instanceof e.HTMLIFrameElement;) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = pa(e.document);
  }
  return t;
}
function hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dx(e) {
  var t = eg(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Zm(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && hd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = r.textContent.length,
          i = Math.min(n.start, s);
        ((n = n.end === void 0 ? i : Math.min(n.end, s)),
          !e.extend && i > n && ((s = n), (n = i), (i = s)),
          (s = Bh(r, i)));
        var o = Bh(r, n);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var hx = dr && "documentMode" in document && 11 >= document.documentMode,
  os = null,
  Bc = null,
  xi = null,
  zc = !1;
function zh(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  zc ||
    os == null ||
    os !== pa(n) ||
    ((n = os),
    "selectionStart" in n && hd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (xi && Mi(xi, n)) ||
      ((xi = n),
      (n = ba(Bc, "onSelect")),
      0 < n.length &&
        ((t = new cd("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = os))));
}
function jo(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var as = {
    animationend: jo("Animation", "AnimationEnd"),
    animationiteration: jo("Animation", "AnimationIteration"),
    animationstart: jo("Animation", "AnimationStart"),
    transitionend: jo("Transition", "TransitionEnd"),
  },
  Jl = {},
  tg = {};
dr &&
  ((tg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete as.animationend.animation,
    delete as.animationiteration.animation,
    delete as.animationstart.animation),
  "TransitionEvent" in window || delete as.transitionend.transition);
function nl(e) {
  if (Jl[e]) return Jl[e];
  if (!as[e]) return e;
  var t = as[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in tg) return (Jl[e] = t[r]);
  return e;
}
var rg = nl("animationend"),
  ng = nl("animationiteration"),
  sg = nl("animationstart"),
  ig = nl("transitionend"),
  og = new Map(),
  Hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function an(e, t) {
  (og.set(e, t), Un(t, [e]));
}
for (var Ql = 0; Ql < Hh.length; Ql++) {
  var Yl = Hh[Ql],
    fx = Yl.toLowerCase(),
    px = Yl[0].toUpperCase() + Yl.slice(1);
  an(fx, "on" + px);
}
an(rg, "onAnimationEnd");
an(ng, "onAnimationIteration");
an(sg, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(ig, "onTransitionEnd");
Ls("onMouseEnter", ["mouseout", "mouseover"]);
Ls("onMouseLeave", ["mouseout", "mouseover"]);
Ls("onPointerEnter", ["pointerout", "pointerover"]);
Ls("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var fi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  mx = new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));
function Wh(e, t, r) {
  var n = e.type || "unknown-event";
  ((e.currentTarget = r), fw(n, t, void 0, e), (e.currentTarget = null));
}
function ag(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      s = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = n[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          (Wh(s, a, c), (i = l));
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((a = n[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          (Wh(s, a, c), (i = l));
        }
    }
  }
  if (ga) throw ((e = Mc), (ga = !1), (Mc = null), e);
}
function ce(e, t) {
  var r = t[qc];
  r === void 0 && (r = t[qc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (lg(t, e, 2, !1), r.add(n));
}
function Xl(e, t, r) {
  var n = 0;
  (t && (n |= 4), lg(r, e, n, t));
}
var Ao = "_reactListening" + Math.random().toString(36).slice(2);
function Di(e) {
  if (!e[Ao]) {
    ((e[Ao] = !0),
      mm.forEach(function (r) {
        r !== "selectionchange" && (mx.has(r) || Xl(r, !1, e), Xl(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ao] || ((t[Ao] = !0), Xl("selectionchange", !1, t));
  }
}
function lg(e, t, r, n) {
  switch (Vm(t)) {
    case 1:
      var s = Rw;
      break;
    case 4:
      s = jw;
      break;
    default:
      s = ad;
  }
  ((r = s.bind(null, t, r, e)),
    (s = void 0),
    !$c ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    n
      ? s !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: s })
        : e.addEventListener(t, r, !0)
      : s !== void 0
        ? e.addEventListener(t, r, { passive: s })
        : e.addEventListener(t, r, !1));
}
function Zl(e, t, r, n, s) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var a = n.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = n.return; o !== null;) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null;) {
          if (((o = wn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Am(function () {
    var c = i,
      u = nd(r),
      d = [];
    e: {
      var f = og.get(e);
      if (f !== void 0) {
        var h = cd,
          w = e;
        switch (e) {
          case "keypress":
            if (ra(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = Vw;
            break;
          case "focusin":
            ((w = "focus"), (h = Kl));
            break;
          case "focusout":
            ((w = "blur"), (h = Kl));
            break;
          case "beforeblur":
          case "afterblur":
            h = Kl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Nh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ow;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Gw;
            break;
          case rg:
          case ng:
          case sg:
            h = $w;
            break;
          case ig:
            h = Qw;
            break;
          case "scroll":
            h = Aw;
            break;
          case "wheel":
            h = Xw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Dw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ih;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          g = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var m = c, y; m !== null;) {
          y = m;
          var _ = y.stateNode;
          if (
            (y.tag === 5 &&
              _ !== null &&
              ((y = _),
              g !== null && ((_ = Ni(m, g)), _ != null && v.push(Ui(m, _, y)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((f = new h(f, w, null, r, u)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            r !== Ic &&
            (w = r.relatedTarget || r.fromElement) &&
            (wn(w) || w[hr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((w = r.relatedTarget || r.toElement),
              (h = c),
              (w = w ? wn(w) : null),
              w !== null &&
                ((x = Fn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = c)),
          h !== w)
        ) {
          if (
            ((v = Nh),
            (_ = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ih),
              (_ = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (x = h == null ? f : ls(h)),
            (y = w == null ? f : ls(w)),
            (f = new v(_, m + "leave", h, r, u)),
            (f.target = x),
            (f.relatedTarget = y),
            (_ = null),
            wn(u) === c &&
              ((v = new v(g, m + "enter", w, r, u)),
              (v.target = y),
              (v.relatedTarget = x),
              (_ = v)),
            (x = _),
            h && w)
          )
            t: {
              for (v = h, g = w, m = 0, y = v; y; y = qn(y)) m++;
              for (y = 0, _ = g; _; _ = qn(_)) y++;
              for (; 0 < m - y;) ((v = qn(v)), m--);
              for (; 0 < y - m;) ((g = qn(g)), y--);
              for (; m--;) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                ((v = qn(v)), (g = qn(g)));
              }
              v = null;
            }
          else v = null;
          (h !== null && Vh(d, f, h, v, !1),
            w !== null && x !== null && Vh(d, x, w, v, !0));
        }
      }
      e: {
        if (
          ((f = c ? ls(c) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var k = ix;
        else if (Mh(f))
          if (Ym) k = cx;
          else {
            k = ax;
            var S = ox;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = lx);
        if (k && (k = k(e, c))) {
          Qm(d, k, r, u);
          break e;
        }
        (S && S(e, f, c),
          e === "focusout" &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === "number" &&
            Rc(f, "number", f.value));
      }
      switch (((S = c ? ls(c) : window), e)) {
        case "focusin":
          (Mh(S) || S.contentEditable === "true") &&
            ((os = S), (Bc = c), (xi = null));
          break;
        case "focusout":
          xi = Bc = os = null;
          break;
        case "mousedown":
          zc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((zc = !1), zh(d, r, u));
          break;
        case "selectionchange":
          if (hx) break;
        case "keydown":
        case "keyup":
          zh(d, r, u);
      }
      var E;
      if (dd)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        is
          ? Gm(e, r) && (R = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (R = "onCompositionStart");
      (R &&
        (qm &&
          r.locale !== "ko" &&
          (is || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && is && (E = Km())
            : ((Br = u),
              (ld = "value" in Br ? Br.value : Br.textContent),
              (is = !0))),
        (S = ba(c, R)),
        0 < S.length &&
          ((R = new Oh(R, e, null, r, u)),
          d.push({ event: R, listeners: S }),
          E ? (R.data = E) : ((E = Jm(r)), E !== null && (R.data = E)))),
        (E = ex ? tx(e, r) : rx(e, r)) &&
          ((c = ba(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Oh("onBeforeInput", "beforeinput", null, r, u)),
            d.push({ event: u, listeners: c }),
            (u.data = E))));
    }
    ag(d, t);
  });
}
function Ui(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ba(e, t) {
  for (var r = t + "Capture", n = []; e !== null;) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Ni(e, r)),
      i != null && n.unshift(Ui(e, i, s)),
      (i = Ni(e, t)),
      i != null && n.push(Ui(e, i, s))),
      (e = e.return));
  }
  return n;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vh(e, t, r, n, s) {
  for (var i = t._reactName, o = []; r !== null && r !== n;) {
    var a = r,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === n) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((l = Ni(r, i)), l != null && o.unshift(Ui(r, l, a)))
        : s || ((l = Ni(r, i)), l != null && o.push(Ui(r, l, a)))),
      (r = r.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gx = /\r\n?/g,
  yx = /\u0000|\uFFFD/g;
function Kh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gx,
      `
`,
    )
    .replace(yx, "");
}
function No(e, t, r) {
  if (((t = Kh(t)), Kh(e) !== t && r)) throw Error(j(425));
}
function _a() {}
var Hc = null,
  Wc = null;
function Vc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Kc = typeof setTimeout == "function" ? setTimeout : void 0,
  vx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qh = typeof Promise == "function" ? Promise : void 0,
  wx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qh < "u"
        ? function (e) {
            return qh.resolve(null).then(e).catch(xx);
          }
        : Kc;
function xx(e) {
  setTimeout(function () {
    throw e;
  });
}
function ec(e, t) {
  var r = t,
    n = 0;
  do {
    var s = r.nextSibling;
    if ((e.removeChild(r), s && s.nodeType === 8))
      if (((r = s.data), r === "/$")) {
        if (n === 0) {
          (e.removeChild(s), Li(t));
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = s;
  } while (r);
  Li(t);
}
function qr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gh(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ks = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + Ks,
  Fi = "__reactProps$" + Ks,
  hr = "__reactContainer$" + Ks,
  qc = "__reactEvents$" + Ks,
  bx = "__reactListeners$" + Ks,
  _x = "__reactHandles$" + Ks;
function wn(e) {
  var t = e[Gt];
  if (t) return t;
  for (var r = e.parentNode; r;) {
    if ((t = r[hr] || r[Gt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Gh(e); e !== null;) {
          if ((r = e[Gt])) return r;
          e = Gh(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
  }
  return null;
}
function uo(e) {
  return (
    (e = e[Gt] || e[hr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ls(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function sl(e) {
  return e[Fi] || null;
}
var Gc = [],
  cs = -1;
function ln(e) {
  return { current: e };
}
function ue(e) {
  0 > cs || ((e.current = Gc[cs]), (Gc[cs] = null), cs--);
}
function oe(e, t) {
  (cs++, (Gc[cs] = e.current), (e.current = t));
}
var Zr = {},
  Fe = ln(Zr),
  Ye = ln(!1),
  Nn = Zr;
function $s(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Zr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in r) s[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function ka() {
  (ue(Ye), ue(Fe));
}
function Jh(e, t, r) {
  if (Fe.current !== Zr) throw Error(j(168));
  (oe(Fe, t), oe(Ye, r));
}
function cg(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var s in n) if (!(s in t)) throw Error(j(108, ow(e) || "Unknown", s));
  return me({}, r, n);
}
function Sa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zr),
    (Nn = Fe.current),
    oe(Fe, e),
    oe(Ye, Ye.current),
    !0
  );
}
function Qh(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(j(169));
  (r
    ? ((e = cg(e, t, Nn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ue(Ye),
      ue(Fe),
      oe(Fe, e))
    : ue(Ye),
    oe(Ye, r));
}
var or = null,
  il = !1,
  tc = !1;
function ug(e) {
  or === null ? (or = [e]) : or.push(e);
}
function kx(e) {
  ((il = !0), ug(e));
}
function cn() {
  if (!tc && or !== null) {
    tc = !0;
    var e = 0,
      t = ne;
    try {
      var r = or;
      for (ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      ((or = null), (il = !1));
    } catch (s) {
      throw (or !== null && (or = or.slice(e + 1)), Lm(sd, cn), s);
    } finally {
      ((ne = t), (tc = !1));
    }
  }
  return null;
}
var us = [],
  ds = 0,
  Ea = null,
  Ta = 0,
  pt = [],
  mt = 0,
  On = null,
  lr = 1,
  cr = "";
function gn(e, t) {
  ((us[ds++] = Ta), (us[ds++] = Ea), (Ea = e), (Ta = t));
}
function dg(e, t, r) {
  ((pt[mt++] = lr), (pt[mt++] = cr), (pt[mt++] = On), (On = e));
  var n = lr;
  e = cr;
  var s = 32 - It(n) - 1;
  ((n &= ~(1 << s)), (r += 1));
  var i = 32 - It(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    ((i = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (s -= o),
      (lr = (1 << (32 - It(t) + s)) | (r << s) | n),
      (cr = i + e));
  } else ((lr = (1 << i) | (r << s) | n), (cr = e));
}
function fd(e) {
  e.return !== null && (gn(e, 1), dg(e, 1, 0));
}
function pd(e) {
  for (; e === Ea;)
    ((Ea = us[--ds]), (us[ds] = null), (Ta = us[--ds]), (us[ds] = null));
  for (; e === On;)
    ((On = pt[--mt]),
      (pt[mt] = null),
      (cr = pt[--mt]),
      (pt[mt] = null),
      (lr = pt[--mt]),
      (pt[mt] = null));
}
var ot = null,
  it = null,
  he = !1,
  Nt = null;
function hg(e, t) {
  var r = gt(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function Yh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (it = qr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = On !== null ? { id: lr, overflow: cr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = gt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ot = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qc(e) {
  if (he) {
    var t = it;
    if (t) {
      var r = t;
      if (!Yh(e, t)) {
        if (Jc(e)) throw Error(j(418));
        t = qr(r.nextSibling);
        var n = ot;
        t && Yh(e, t)
          ? hg(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ot = e));
      }
    } else {
      if (Jc(e)) throw Error(j(418));
      ((e.flags = (e.flags & -4097) | 2), (he = !1), (ot = e));
    }
  }
}
function Xh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  ot = e;
}
function Oo(e) {
  if (e !== ot) return !1;
  if (!he) return (Xh(e), (he = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Jc(e)) throw (fg(), Error(j(418)));
    for (; t;) (hg(e, t), (t = qr(t.nextSibling)));
  }
  if ((Xh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              it = qr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? qr(e.stateNode.nextSibling) : null;
  return !0;
}
function fg() {
  for (var e = it; e;) e = qr(e.nextSibling);
}
function Ms() {
  ((it = ot = null), (he = !1));
}
function md(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var Sx = yr.ReactCurrentBatchConfig;
function si(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(j(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(j(147, e));
      var s = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!r._owner) throw Error(j(290, e));
  }
  return e;
}
function Io(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Zh(e) {
  var t = e._init;
  return t(e._payload);
}
function pg(e) {
  function t(g, m) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [m]), (g.flags |= 16)) : y.push(m);
    }
  }
  function r(g, m) {
    if (!e) return null;
    for (; m !== null;) (t(g, m), (m = m.sibling));
    return null;
  }
  function n(g, m) {
    for (g = new Map(); m !== null;)
      (m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling));
    return g;
  }
  function s(g, m) {
    return ((g = Yr(g, m)), (g.index = 0), (g.sibling = null), g);
  }
  function i(g, m, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((g.flags |= 2), m) : y)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, m, y, _) {
    return m === null || m.tag !== 6
      ? ((m = lc(y, g.mode, _)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function l(g, m, y, _) {
    var k = y.type;
    return k === ss
      ? u(g, m, y.props.children, _, y.key)
      : m !== null &&
          (m.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === jr &&
              Zh(k) === m.type))
        ? ((_ = s(m, y.props)), (_.ref = si(g, m, y)), (_.return = g), _)
        : ((_ = ca(y.type, y.key, y.props, null, g.mode, _)),
          (_.ref = si(g, m, y)),
          (_.return = g),
          _);
  }
  function c(g, m, y, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = cc(y, g.mode, _)), (m.return = g), m)
      : ((m = s(m, y.children || [])), (m.return = g), m);
  }
  function u(g, m, y, _, k) {
    return m === null || m.tag !== 7
      ? ((m = An(y, g.mode, _, k)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function d(g, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = lc("" + m, g.mode, y)), (m.return = g), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ko:
          return (
            (y = ca(m.type, m.key, m.props, null, g.mode, y)),
            (y.ref = si(g, null, m)),
            (y.return = g),
            y
          );
        case ns:
          return ((m = cc(m, g.mode, y)), (m.return = g), m);
        case jr:
          var _ = m._init;
          return d(g, _(m._payload), y);
      }
      if (di(m) || Zs(m))
        return ((m = An(m, g.mode, y, null)), (m.return = g), m);
      Io(g, m);
    }
    return null;
  }
  function f(g, m, y, _) {
    var k = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : a(g, m, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ko:
          return y.key === k ? l(g, m, y, _) : null;
        case ns:
          return y.key === k ? c(g, m, y, _) : null;
        case jr:
          return ((k = y._init), f(g, m, k(y._payload), _));
      }
      if (di(y) || Zs(y)) return k !== null ? null : u(g, m, y, _, null);
      Io(g, y);
    }
    return null;
  }
  function h(g, m, y, _, k) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return ((g = g.get(y) || null), a(m, g, "" + _, k));
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ko:
          return (
            (g = g.get(_.key === null ? y : _.key) || null),
            l(m, g, _, k)
          );
        case ns:
          return (
            (g = g.get(_.key === null ? y : _.key) || null),
            c(m, g, _, k)
          );
        case jr:
          var S = _._init;
          return h(g, m, y, S(_._payload), k);
      }
      if (di(_) || Zs(_)) return ((g = g.get(y) || null), u(m, g, _, k, null));
      Io(m, _);
    }
    return null;
  }
  function w(g, m, y, _) {
    for (
      var k = null, S = null, E = m, R = (m = 0), A = null;
      E !== null && R < y.length;
      R++
    ) {
      E.index > R ? ((A = E), (E = null)) : (A = E.sibling);
      var O = f(g, E, y[R], _);
      if (O === null) {
        E === null && (E = A);
        break;
      }
      (e && E && O.alternate === null && t(g, E),
        (m = i(O, m, R)),
        S === null ? (k = O) : (S.sibling = O),
        (S = O),
        (E = A));
    }
    if (R === y.length) return (r(g, E), he && gn(g, R), k);
    if (E === null) {
      for (; R < y.length; R++)
        ((E = d(g, y[R], _)),
          E !== null &&
            ((m = i(E, m, R)),
            S === null ? (k = E) : (S.sibling = E),
            (S = E)));
      return (he && gn(g, R), k);
    }
    for (E = n(g, E); R < y.length; R++)
      ((A = h(E, g, R, y[R], _)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? R : A.key),
          (m = i(A, m, R)),
          S === null ? (k = A) : (S.sibling = A),
          (S = A)));
    return (
      e &&
        E.forEach(function (z) {
          return t(g, z);
        }),
      he && gn(g, R),
      k
    );
  }
  function v(g, m, y, _) {
    var k = Zs(y);
    if (typeof k != "function") throw Error(j(150));
    if (((y = k.call(y)), y == null)) throw Error(j(151));
    for (
      var S = (k = null), E = m, R = (m = 0), A = null, O = y.next();
      E !== null && !O.done;
      R++, O = y.next()
    ) {
      E.index > R ? ((A = E), (E = null)) : (A = E.sibling);
      var z = f(g, E, O.value, _);
      if (z === null) {
        E === null && (E = A);
        break;
      }
      (e && E && z.alternate === null && t(g, E),
        (m = i(z, m, R)),
        S === null ? (k = z) : (S.sibling = z),
        (S = z),
        (E = A));
    }
    if (O.done) return (r(g, E), he && gn(g, R), k);
    if (E === null) {
      for (; !O.done; R++, O = y.next())
        ((O = d(g, O.value, _)),
          O !== null &&
            ((m = i(O, m, R)),
            S === null ? (k = O) : (S.sibling = O),
            (S = O)));
      return (he && gn(g, R), k);
    }
    for (E = n(g, E); !O.done; R++, O = y.next())
      ((O = h(E, g, R, O.value, _)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? R : O.key),
          (m = i(O, m, R)),
          S === null ? (k = O) : (S.sibling = O),
          (S = O)));
    return (
      e &&
        E.forEach(function (D) {
          return t(g, D);
        }),
      he && gn(g, R),
      k
    );
  }
  function x(g, m, y, _) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ss &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ko:
          e: {
            for (var k = y.key, S = m; S !== null;) {
              if (S.key === k) {
                if (((k = y.type), k === ss)) {
                  if (S.tag === 7) {
                    (r(g, S.sibling),
                      (m = s(S, y.props.children)),
                      (m.return = g),
                      (g = m));
                    break e;
                  }
                } else if (
                  S.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === jr &&
                    Zh(k) === S.type)
                ) {
                  (r(g, S.sibling),
                    (m = s(S, y.props)),
                    (m.ref = si(g, S, y)),
                    (m.return = g),
                    (g = m));
                  break e;
                }
                r(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            y.type === ss
              ? ((m = An(y.props.children, g.mode, _, y.key)),
                (m.return = g),
                (g = m))
              : ((_ = ca(y.type, y.key, y.props, null, g.mode, _)),
                (_.ref = si(g, m, y)),
                (_.return = g),
                (g = _));
          }
          return o(g);
        case ns:
          e: {
            for (S = y.key; m !== null;) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  (r(g, m.sibling),
                    (m = s(m, y.children || [])),
                    (m.return = g),
                    (g = m));
                  break e;
                } else {
                  r(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            ((m = cc(y, g.mode, _)), (m.return = g), (g = m));
          }
          return o(g);
        case jr:
          return ((S = y._init), x(g, m, S(y._payload), _));
      }
      if (di(y)) return w(g, m, y, _);
      if (Zs(y)) return v(g, m, y, _);
      Io(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (r(g, m.sibling), (m = s(m, y)), (m.return = g), (g = m))
          : (r(g, m), (m = lc(y, g.mode, _)), (m.return = g), (g = m)),
        o(g))
      : r(g, m);
  }
  return x;
}
var Ds = pg(!0),
  mg = pg(!1),
  Ca = ln(null),
  Pa = null,
  hs = null,
  gd = null;
function yd() {
  gd = hs = Pa = null;
}
function vd(e) {
  var t = Ca.current;
  (ue(Ca), (e._currentValue = t));
}
function Yc(e, t, r) {
  for (; e !== null;) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function bs(e, t) {
  ((Pa = e),
    (gd = hs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null)));
}
function vt(e) {
  var t = e._currentValue;
  if (gd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hs === null)) {
      if (Pa === null) throw Error(j(308));
      ((hs = e), (Pa.dependencies = { lanes: 0, firstContext: e }));
    } else hs = hs.next = e;
  return t;
}
var xn = null;
function wd(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function gg(e, t, r, n) {
  var s = t.interleaved;
  return (
    s === null ? ((r.next = r), wd(t)) : ((r.next = s.next), (s.next = r)),
    (t.interleaved = r),
    fr(e, n)
  );
}
function fr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
var Ar = !1;
function xd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yg(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ur(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ee & 2)) {
    var s = n.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (n.pending = t),
      fr(e, r)
    );
  }
  return (
    (s = n.interleaved),
    s === null ? ((t.next = t), wd(n)) : ((t.next = s.next), (s.next = t)),
    (n.interleaved = t),
    fr(e, r)
  );
}
function na(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), id(e, r));
  }
}
function ef(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var s = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        (i === null ? (s = i = o) : (i = i.next = o), (r = r.next));
      } while (r !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((r = {
      baseState: n.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function Ra(e, t, r, n) {
  var s = e.updateQueue;
  Ar = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), o === null ? (i = c) : (o.next = c), (o = l));
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = s.baseState;
    ((o = 0), (u = c = l = null), (a = i));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((n & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((f = t), (h = r), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                d = w.call(h, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (f = typeof w == "function" ? w.call(h, d, f) : w),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              Ar = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = d)) : (u = u.next = h),
          (o |= f));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (s.baseState = l),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = u),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((o |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Ln |= o), (e.lanes = o), (e.memoizedState = d));
  }
}
function tf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        s = n.callback;
      if (s !== null) {
        if (((n.callback = null), (n = r), typeof s != "function"))
          throw Error(j(191, s));
        s.call(n);
      }
    }
}
var ho = {},
  Qt = ln(ho),
  Bi = ln(ho),
  zi = ln(ho);
function bn(e) {
  if (e === ho) throw Error(j(174));
  return e;
}
function bd(e, t) {
  switch ((oe(zi, t), oe(Bi, e), oe(Qt, ho), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ac(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ac(t, e)));
  }
  (ue(Qt), oe(Qt, t));
}
function Us() {
  (ue(Qt), ue(Bi), ue(zi));
}
function vg(e) {
  bn(zi.current);
  var t = bn(Qt.current),
    r = Ac(t, e.type);
  t !== r && (oe(Bi, e), oe(Qt, r));
}
function _d(e) {
  Bi.current === e && (ue(Qt), ue(Bi));
}
var fe = ln(0);
function ja(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var rc = [];
function kd() {
  for (var e = 0; e < rc.length; e++)
    rc[e]._workInProgressVersionPrimary = null;
  rc.length = 0;
}
var sa = yr.ReactCurrentDispatcher,
  nc = yr.ReactCurrentBatchConfig,
  In = 0,
  pe = null,
  ke = null,
  Ce = null,
  Aa = !1,
  bi = !1,
  Hi = 0,
  Ex = 0;
function $e() {
  throw Error(j(321));
}
function Sd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!$t(e[r], t[r])) return !1;
  return !0;
}
function Ed(e, t, r, n, s, i) {
  if (
    ((In = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (sa.current = e === null || e.memoizedState === null ? Rx : jx),
    (e = r(n, s)),
    bi)
  ) {
    i = 0;
    do {
      if (((bi = !1), (Hi = 0), 25 <= i)) throw Error(j(301));
      ((i += 1),
        (Ce = ke = null),
        (t.updateQueue = null),
        (sa.current = Ax),
        (e = r(n, s)));
    } while (bi);
  }
  if (
    ((sa.current = Na),
    (t = ke !== null && ke.next !== null),
    (In = 0),
    (Ce = ke = pe = null),
    (Aa = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Td() {
  var e = Hi !== 0;
  return ((Hi = 0), e);
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce);
}
function wt() {
  if (ke === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Ce === null ? pe.memoizedState : Ce.next;
  if (t !== null) ((Ce = t), (ke = e));
  else {
    if (e === null) throw Error(j(310));
    ((ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e));
  }
  return Ce;
}
function Wi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sc(e) {
  var t = wt(),
    r = t.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var n = ke,
    s = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      ((s.next = i.next), (i.next = o));
    }
    ((n.baseQueue = s = i), (r.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (n = n.baseState));
    var a = (o = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((In & u) === u)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (n = c.hasEagerState ? c.eagerState : e(n, c.action)));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (o = n)) : (l = l.next = d),
          (pe.lanes |= u),
          (Ln |= u));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (l === null ? (o = n) : (l.next = a),
      $t(n, t.memoizedState) || (Qe = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n));
  }
  if (((e = r.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (pe.lanes |= i), (Ln |= i), (s = s.next));
    while (s !== e);
  } else s === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function ic(e) {
  var t = wt(),
    r = t.queue;
  if (r === null) throw Error(j(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    s = r.pending,
    i = t.memoizedState;
  if (s !== null) {
    r.pending = null;
    var o = (s = s.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== s);
    ($t(i, t.memoizedState) || (Qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i));
  }
  return [i, n];
}
function wg() {}
function xg(e, t) {
  var r = pe,
    n = wt(),
    s = t(),
    i = !$t(n.memoizedState, s);
  if (
    (i && ((n.memoizedState = s), (Qe = !0)),
    (n = n.queue),
    Cd(kg.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Vi(9, _g.bind(null, r, n, s, t), void 0, null),
      Pe === null)
    )
      throw Error(j(349));
    In & 30 || bg(r, t, s);
  }
  return s;
}
function bg(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function _g(e, t, r, n) {
  ((t.value = r), (t.getSnapshot = n), Sg(t) && Eg(e));
}
function kg(e, t, r) {
  return r(function () {
    Sg(t) && Eg(e);
  });
}
function Sg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !$t(e, r);
  } catch {
    return !0;
  }
}
function Eg(e) {
  var t = fr(e, 1);
  t !== null && Lt(t, e, 1, -1);
}
function rf(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Px.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Vi(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Tg() {
  return wt().memoizedState;
}
function ia(e, t, r, n) {
  var s = zt();
  ((pe.flags |= e),
    (s.memoizedState = Vi(1 | t, r, void 0, n === void 0 ? null : n)));
}
function ol(e, t, r, n) {
  var s = wt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (ke !== null) {
    var o = ke.memoizedState;
    if (((i = o.destroy), n !== null && Sd(n, o.deps))) {
      s.memoizedState = Vi(t, r, i, n);
      return;
    }
  }
  ((pe.flags |= e), (s.memoizedState = Vi(1 | t, r, i, n)));
}
function nf(e, t) {
  return ia(8390656, 8, e, t);
}
function Cd(e, t) {
  return ol(2048, 8, e, t);
}
function Cg(e, t) {
  return ol(4, 2, e, t);
}
function Pg(e, t) {
  return ol(4, 4, e, t);
}
function Rg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jg(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null),
    ol(4, 4, Rg.bind(null, t, e), r)
  );
}
function Pd() {}
function Ag(e, t) {
  var r = wt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Sd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Ng(e, t) {
  var r = wt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Sd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Og(e, t, r) {
  return In & 21
    ? ($t(r, t) || ((r = Dm()), (pe.lanes |= r), (Ln |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = r));
}
function Tx(e, t) {
  var r = ne;
  ((ne = r !== 0 && 4 > r ? r : 4), e(!0));
  var n = nc.transition;
  nc.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ne = r), (nc.transition = n));
  }
}
function Ig() {
  return wt().memoizedState;
}
function Cx(e, t, r) {
  var n = Qr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lg(e))
  )
    $g(t, r);
  else if (((r = gg(e, t, r, n)), r !== null)) {
    var s = We();
    (Lt(r, e, n, s), Mg(r, t, n));
  }
}
function Px(e, t, r) {
  var n = Qr(e),
    s = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Lg(e)) $g(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, r);
        if (((s.hasEagerState = !0), (s.eagerState = a), $t(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((s.next = s), wd(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((r = gg(e, t, s, n)),
      r !== null && ((s = We()), Lt(r, e, n, s), Mg(r, t, n)));
  }
}
function Lg(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function $g(e, t) {
  bi = Aa = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function Mg(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), id(e, r));
  }
}
var Na = {
    readContext: vt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1,
  },
  Rx = {
    readContext: vt,
    useCallback: function (e, t) {
      return ((zt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: vt,
    useEffect: nf,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ia(4194308, 4, Rg.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ia(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ia(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = zt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (r.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, r) {
      var n = zt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Cx.bind(null, pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: rf,
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = rf(!1),
        t = e[0];
      return ((e = Tx.bind(null, e[1])), (zt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = pe,
        s = zt();
      if (he) {
        if (r === void 0) throw Error(j(407));
        r = r();
      } else {
        if (((r = t()), Pe === null)) throw Error(j(349));
        In & 30 || bg(n, t, r);
      }
      s.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (s.queue = i),
        nf(kg.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Vi(9, _g.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = zt(),
        t = Pe.identifierPrefix;
      if (he) {
        var r = cr,
          n = lr;
        ((r = (n & ~(1 << (32 - It(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Hi++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":"));
      } else ((r = Ex++), (t = ":" + t + "r" + r.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jx = {
    readContext: vt,
    useCallback: Ag,
    useContext: vt,
    useEffect: Cd,
    useImperativeHandle: jg,
    useInsertionEffect: Cg,
    useLayoutEffect: Pg,
    useMemo: Ng,
    useReducer: sc,
    useRef: Tg,
    useState: function () {
      return sc(Wi);
    },
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      var t = wt();
      return Og(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = sc(Wi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: wg,
    useSyncExternalStore: xg,
    useId: Ig,
    unstable_isNewReconciler: !1,
  },
  Ax = {
    readContext: vt,
    useCallback: Ag,
    useContext: vt,
    useEffect: Cd,
    useImperativeHandle: jg,
    useInsertionEffect: Cg,
    useLayoutEffect: Pg,
    useMemo: Ng,
    useReducer: ic,
    useRef: Tg,
    useState: function () {
      return ic(Wi);
    },
    useDebugValue: Pd,
    useDeferredValue: function (e) {
      var t = wt();
      return ke === null ? (t.memoizedState = e) : Og(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = ic(Wi)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: wg,
    useSyncExternalStore: xg,
    useId: Ig,
    unstable_isNewReconciler: !1,
  };
function Tt(e, t) {
  if (e && e.defaultProps) {
    ((t = me({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Xc(e, t, r, n) {
  ((t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : me({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      s = Qr(e),
      i = ur(n, s);
    ((i.payload = t),
      r != null && (i.callback = r),
      (t = Gr(e, i, s)),
      t !== null && (Lt(t, e, s, n), na(t, e, s)));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = We(),
      s = Qr(e),
      i = ur(n, s);
    ((i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Gr(e, i, s)),
      t !== null && (Lt(t, e, s, n), na(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = We(),
      n = Qr(e),
      s = ur(r, n);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Gr(e, s, n)),
      t !== null && (Lt(t, e, n, r), na(t, e, n)));
  },
};
function sf(e, t, r, n, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Mi(r, n) || !Mi(s, i)
        : !0
  );
}
function Dg(e, t, r) {
  var n = !1,
    s = Zr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = vt(i))
      : ((s = Xe(t) ? Nn : Fe.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? $s(e, s) : Zr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function of(e, t, r, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && al.enqueueReplaceState(t, t.state, null));
}
function Zc(e, t, r, n) {
  var s = e.stateNode;
  ((s.props = r), (s.state = e.memoizedState), (s.refs = {}), xd(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = vt(i))
    : ((i = Xe(t) ? Nn : Fe.current), (s.context = $s(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xc(e, t, i, r), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && al.enqueueReplaceState(s, s.state, null),
      Ra(e, r, s, n),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Fs(e, t) {
  try {
    var r = "",
      n = t;
    do ((r += iw(n)), (n = n.return));
    while (n);
    var s = r;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function oc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function eu(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Nx = typeof WeakMap == "function" ? WeakMap : Map;
function Ug(e, t, r) {
  ((r = ur(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var n = t.value;
  return (
    (r.callback = function () {
      (Ia || ((Ia = !0), (uu = n)), eu(e, t));
    }),
    r
  );
}
function Fg(e, t, r) {
  ((r = ur(-1, r)), (r.tag = 3));
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var s = t.value;
    ((r.payload = function () {
      return n(s);
    }),
      (r.callback = function () {
        eu(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        (eu(e, t),
          typeof n != "function" &&
            (Jr === null ? (Jr = new Set([this])) : Jr.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function af(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Nx();
    var s = new Set();
    n.set(t, s);
  } else ((s = n.get(t)), s === void 0 && ((s = new Set()), n.set(t, s)));
  s.has(r) || (s.add(r), (e = Kx.bind(null, e, t, r)), t.then(e, e));
}
function lf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cf(e, t, r, n, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ur(-1, 1)), (t.tag = 2), Gr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var Ox = yr.ReactCurrentOwner,
  Qe = !1;
function ze(e, t, r, n) {
  t.child = e === null ? mg(t, null, r, n) : Ds(t, e.child, r, n);
}
function uf(e, t, r, n, s) {
  r = r.render;
  var i = t.ref;
  return (
    bs(t, s),
    (n = Ed(e, t, r, n, i, s)),
    (r = Td()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        pr(e, t, s))
      : (he && r && fd(t), (t.flags |= 1), ze(e, t, n, s), t.child)
  );
}
function df(e, t, r, n, s) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !$d(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Bg(e, t, i, n, s))
      : ((e = ca(r.type, null, n, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Mi), r(o, n) && e.ref === t.ref)
    )
      return pr(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Yr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bg(e, t, r, n, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mi(i, n) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = n = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return ((t.lanes = e.lanes), pr(e, t, s));
  }
  return tu(e, t, r, n, s);
}
function zg(e, t, r) {
  var n = t.pendingProps,
    s = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(ps, rt),
        (rt |= r));
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(ps, rt),
          (rt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        oe(ps, rt),
        (rt |= n));
    }
  else
    (i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      oe(ps, rt),
      (rt |= n));
  return (ze(e, t, s, r), t.child);
}
function Hg(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tu(e, t, r, n, s) {
  var i = Xe(r) ? Nn : Fe.current;
  return (
    (i = $s(t, i)),
    bs(t, s),
    (r = Ed(e, t, r, n, i, s)),
    (n = Td()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        pr(e, t, s))
      : (he && n && fd(t), (t.flags |= 1), ze(e, t, r, s), t.child)
  );
}
function hf(e, t, r, n, s) {
  if (Xe(r)) {
    var i = !0;
    Sa(t);
  } else i = !1;
  if ((bs(t, s), t.stateNode === null))
    (oa(e, t), Dg(t, r, n), Zc(t, r, n, s), (n = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = vt(c))
      : ((c = Xe(r) ? Nn : Fe.current), (c = $s(t, c)));
    var u = r.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== n || l !== c) && of(t, o, n, c)),
      (Ar = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Ra(t, n, o, s),
      (l = t.memoizedState),
      a !== n || f !== l || Ye.current || Ar
        ? (typeof u == "function" && (Xc(t, r, u, n), (l = t.memoizedState)),
          (a = Ar || sf(t, r, a, n, f, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = c),
          (n = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1)));
  } else {
    ((o = t.stateNode),
      yg(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Tt(t.type, a)),
      (o.props = c),
      (d = t.pendingProps),
      (f = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = vt(l))
        : ((l = Xe(r) ? Nn : Fe.current), (l = $s(t, l))));
    var h = r.getDerivedStateFromProps;
    ((u =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && of(t, o, n, l)),
      (Ar = !1),
      (f = t.memoizedState),
      (o.state = f),
      Ra(t, n, o, s));
    var w = t.memoizedState;
    a !== d || f !== w || Ye.current || Ar
      ? (typeof h == "function" && (Xc(t, r, h, n), (w = t.memoizedState)),
        (c = Ar || sf(t, r, c, n, f, w, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, w, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, w, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (o.props = n),
        (o.state = w),
        (o.context = l),
        (n = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return ru(e, t, r, n, i, s);
}
function ru(e, t, r, n, s, i) {
  Hg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return (s && Qh(t, r, !1), pr(e, t, i));
  ((n = t.stateNode), (Ox.current = t));
  var a =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ds(t, e.child, null, i)), (t.child = Ds(t, null, a, i)))
      : ze(e, t, a, i),
    (t.memoizedState = n.state),
    s && Qh(t, r, !0),
    t.child
  );
}
function Wg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Jh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jh(e, t.context, !1),
    bd(e, t.containerInfo));
}
function ff(e, t, r, n, s) {
  return (Ms(), md(s), (t.flags |= 256), ze(e, t, r, n), t.child);
}
var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vg(e, t, r) {
  var n = t.pendingProps,
    s = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    oe(fe, s & 1),
    e === null)
  )
    return (
      Qc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ul(o, n, 0, null)),
              (e = An(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = su(r)),
              (t.memoizedState = nu),
              e)
            : Rd(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Ix(e, t, o, n, a, s, r);
  if (i) {
    ((i = n.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
    var l = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== s
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = Yr(s, l)), (n.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = Yr(a, i)) : ((i = An(i, o, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? su(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = nu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Yr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Rd(e, t) {
  return (
    (t = ul({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lo(e, t, r, n) {
  return (
    n !== null && md(n),
    Ds(t, e.child, null, r),
    (e = Rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ix(e, t, r, n, s, i, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = oc(Error(j(422)))), Lo(e, t, o, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (s = t.mode),
          (n = ul({ mode: "visible", children: n.children }, s, 0, null)),
          (i = An(i, s, o, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && Ds(t, e.child, null, o),
          (t.child.memoizedState = su(o)),
          (t.memoizedState = nu),
          i);
  if (!(t.mode & 1)) return Lo(e, t, o, null);
  if (s.data === "$!") {
    if (((n = s.nextSibling && s.nextSibling.dataset), n)) var a = n.dgst;
    return (
      (n = a),
      (i = Error(j(419))),
      (n = oc(i, n, void 0)),
      Lo(e, t, o, n)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Qe || a)) {
    if (((n = Pe), n !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (n.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), fr(e, s), Lt(n, e, s, -1)));
    }
    return (Ld(), (n = oc(Error(j(421)))), Lo(e, t, o, n));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qx.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (it = qr(s.nextSibling)),
      (ot = t),
      (he = !0),
      (Nt = null),
      e !== null &&
        ((pt[mt++] = lr),
        (pt[mt++] = cr),
        (pt[mt++] = On),
        (lr = e.id),
        (cr = e.overflow),
        (On = t)),
      (t = Rd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function pf(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), Yc(e.return, t, r));
}
function ac(e, t, r, n, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = s));
}
function Kg(e, t, r) {
  var n = t.pendingProps,
    s = n.revealOrder,
    i = n.tail;
  if ((ze(e, t, n.children, r), (n = fe.current), n & 2))
    ((n = (n & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && pf(e, r, t);
        else if (e.tag === 19) pf(e, r, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    n &= 1;
  }
  if ((oe(fe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (r = t.child, s = null; r !== null;)
          ((e = r.alternate),
            e !== null && ja(e) === null && (s = r),
            (r = r.sibling));
        ((r = s),
          r === null
            ? ((s = t.child), (t.child = null))
            : ((s = r.sibling), (r.sibling = null)),
          ac(t, !1, s, r, i));
        break;
      case "backwards":
        for (r = null, s = t.child, t.child = null; s !== null;) {
          if (((e = s.alternate), e !== null && ja(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = r), (r = s), (s = e));
        }
        ac(t, !0, r, null, i);
        break;
      case "together":
        ac(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Yr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (r = r.sibling = Yr(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function Lx(e, t, r) {
  switch (t.tag) {
    case 3:
      (Wg(t), Ms());
      break;
    case 5:
      vg(t);
      break;
    case 1:
      Xe(t.type) && Sa(t);
      break;
    case 4:
      bd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        s = t.memoizedProps.value;
      (oe(Ca, n._currentValue), (n._currentValue = s));
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (oe(fe, fe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? Vg(e, t, r)
            : (oe(fe, fe.current & 1),
              (e = pr(e, t, r)),
              e !== null ? e.sibling : null);
      oe(fe, fe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Kg(e, t, r);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        oe(fe, fe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), zg(e, t, r));
  }
  return pr(e, t, r);
}
var qg, iu, Gg, Jg;
qg = function (e, t) {
  for (var r = t.child; r !== null;) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      ((r.child.return = r), (r = r.child));
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null;) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    ((r.sibling.return = r.return), (r = r.sibling));
  }
};
iu = function () {};
Gg = function (e, t, r, n) {
  var s = e.memoizedProps;
  if (s !== n) {
    ((e = t.stateNode), bn(Qt.current));
    var i = null;
    switch (r) {
      case "input":
        ((s = Cc(e, s)), (n = Cc(e, n)), (i = []));
        break;
      case "select":
        ((s = me({}, s, { value: void 0 })),
          (n = me({}, n, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((s = jc(e, s)), (n = jc(e, n)), (i = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = _a);
    }
    Nc(r, n);
    var o;
    r = null;
    for (c in s)
      if (!n.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ji.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in n) {
      var l = n[c];
      if (
        ((a = s != null ? s[c] : void 0),
        n.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else (r || (i || (i = []), i.push(c, r)), (r = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ji.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && ce("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    r && (i = i || []).push("style", r);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Jg = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ii(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null;)
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null;)
          (r.alternate !== null && (n = r), (r = r.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var s = e.child; s !== null;)
      ((r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags & 14680064),
        (n |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null;)
      ((r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags),
        (n |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = r), t);
}
function $x(e, t, r) {
  var n = t.pendingProps;
  switch ((pd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Me(t), null);
    case 1:
      return (Xe(t.type) && ka(), Me(t), null);
    case 3:
      return (
        (n = t.stateNode),
        Us(),
        ue(Ye),
        ue(Fe),
        kd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (fu(Nt), (Nt = null)))),
        iu(e, t),
        Me(t),
        null
      );
    case 5:
      _d(t);
      var s = bn(zi.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (Gg(e, t, r, n, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(j(166));
          return (Me(t), null);
        }
        if (((e = bn(Qt.current)), Oo(t))) {
          ((n = t.stateNode), (r = t.type));
          var i = t.memoizedProps;
          switch (((n[Gt] = t), (n[Fi] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (ce("cancel", n), ce("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", n);
              break;
            case "video":
            case "audio":
              for (s = 0; s < fi.length; s++) ce(fi[s], n);
              break;
            case "source":
              ce("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (ce("error", n), ce("load", n));
              break;
            case "details":
              ce("toggle", n);
              break;
            case "input":
              (_h(n, i), ce("invalid", n));
              break;
            case "select":
              ((n._wrapperState = { wasMultiple: !!i.multiple }),
                ce("invalid", n));
              break;
            case "textarea":
              (Sh(n, i), ce("invalid", n));
          }
          (Nc(r, i), (s = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      No(n.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      No(n.textContent, a, e),
                    (s = ["children", "" + a]))
                : ji.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ce("scroll", n);
            }
          switch (r) {
            case "input":
              (So(n), kh(n, i, !0));
              break;
            case "textarea":
              (So(n), Eh(n));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = _a);
          }
          ((n = s), (t.updateQueue = n), n !== null && (t.flags |= 4));
        } else {
          ((o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = km(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = o.createElement(r, { is: n.is }))
                  : ((e = o.createElement(r)),
                    r === "select" &&
                      ((o = e),
                      n.multiple
                        ? (o.multiple = !0)
                        : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[Gt] = t),
            (e[Fi] = n),
            qg(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Oc(r, n)), r)) {
              case "dialog":
                (ce("cancel", e), ce("close", e), (s = n));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ce("load", e), (s = n));
                break;
              case "video":
              case "audio":
                for (s = 0; s < fi.length; s++) ce(fi[s], e);
                s = n;
                break;
              case "source":
                (ce("error", e), (s = n));
                break;
              case "img":
              case "image":
              case "link":
                (ce("error", e), ce("load", e), (s = n));
                break;
              case "details":
                (ce("toggle", e), (s = n));
                break;
              case "input":
                (_h(e, n), (s = Cc(e, n)), ce("invalid", e));
                break;
              case "option":
                s = n;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!n.multiple }),
                  (s = me({}, n, { value: void 0 })),
                  ce("invalid", e));
                break;
              case "textarea":
                (Sh(e, n), (s = jc(e, n)), ce("invalid", e));
                break;
              default:
                s = n;
            }
            (Nc(r, s), (a = s));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Tm(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Sm(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (r !== "textarea" || l !== "") && Ai(e, l)
                        : typeof l == "number" && Ai(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ji.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && ce("scroll", e)
                          : l != null && Zu(e, i, l, o));
              }
            switch (r) {
              case "input":
                (So(e), kh(e, n, !1));
                break;
              case "textarea":
                (So(e), Eh(e));
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Xr(n.value));
                break;
              case "select":
                ((e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? ys(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      ys(e, !!n.multiple, n.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = _a);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Me(t), null);
    case 6:
      if (e && t.stateNode != null) Jg(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(j(166));
        if (((r = bn(zi.current)), bn(Qt.current), Oo(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Gt] = t),
            (i = n.nodeValue !== r) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                No(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  No(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Gt] = t),
            (t.stateNode = n));
      }
      return (Me(t), null);
    case 13:
      if (
        (ue(fe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && it !== null && t.mode & 1 && !(t.flags & 128))
          (fg(), Ms(), (t.flags |= 98560), (i = !1));
        else if (((i = Oo(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[Gt] = t;
          } else
            (Ms(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Me(t), (i = !1));
        } else (Nt !== null && (fu(Nt), (Nt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Ee === 0 && (Ee = 3) : Ld())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        Us(),
        iu(e, t),
        e === null && Di(t.stateNode.containerInfo),
        Me(t),
        null
      );
    case 10:
      return (vd(t.type._context), Me(t), null);
    case 17:
      return (Xe(t.type) && ka(), Me(t), null);
    case 19:
      if ((ue(fe), (i = t.memoizedState), i === null)) return (Me(t), null);
      if (((n = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (n) ii(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((o = ja(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ii(i, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;
                )
                  ((i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling));
                return (oe(fe, (fe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > Bs &&
            ((t.flags |= 128), (n = !0), ii(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ja(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ii(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !he)
            )
              return (Me(t), null);
          } else
            2 * we() - i.renderingStartTime > Bs &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), ii(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = i.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (r = fe.current),
          oe(fe, n ? (r & 1) | 2 : r & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Id(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? rt & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Mx(e, t) {
  switch ((pd(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && ka(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Us(),
        ue(Ye),
        ue(Fe),
        kd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (_d(t), null);
    case 13:
      if (
        (ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ms();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ue(fe), null);
    case 4:
      return (Us(), null);
    case 10:
      return (vd(t.type._context), null);
    case 22:
    case 23:
      return (Id(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var $o = !1,
  Ue = !1,
  Dx = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function fs(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ve(e, t, n);
      }
    else r.current = null;
}
function ou(e, t, r) {
  try {
    r();
  } catch (n) {
    ve(e, t, n);
  }
}
var mf = !1;
function Ux(e, t) {
  if (((Hc = wa), (e = eg()), hd(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var s = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            (r.nodeType, i.nodeType);
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== r || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = o + n),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;
            )
              ((f = d), (d = h));
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++c === s && (a = o),
                f === i && ++u === n && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = h;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Wc = { focusedElem: e, selectionRange: r }, wa = !1, M = t; M !== null;)
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (M = e));
    else
      for (; M !== null;) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    x = w.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Tt(t.type, v),
                      x,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (_) {
          ve(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (M = e));
          break;
        }
        M = t.return;
      }
  return ((w = mf), (mf = !1), w);
}
function _i(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var s = (n = n.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && ou(t, r, i));
      }
      s = s.next;
    } while (s !== n);
  }
}
function ll(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function au(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qg(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Qg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[Fi], delete t[qc], delete t[bx], delete t[_x])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Yg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gf(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Yg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = _a)));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, r), e = e.sibling; e !== null;)
      (lu(e, t, r), (e = e.sibling));
}
function cu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, r), e = e.sibling; e !== null;)
      (cu(e, t, r), (e = e.sibling));
}
var Ae = null,
  At = !1;
function Er(e, t, r) {
  for (r = r.child; r !== null;) (Xg(e, t, r), (r = r.sibling));
}
function Xg(e, t, r) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(el, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ue || fs(r, t);
    case 6:
      var n = Ae,
        s = At;
      ((Ae = null),
        Er(e, t, r),
        (Ae = n),
        (At = s),
        Ae !== null &&
          (At
            ? ((e = Ae),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ae.removeChild(r.stateNode)));
      break;
    case 18:
      Ae !== null &&
        (At
          ? ((e = Ae),
            (r = r.stateNode),
            e.nodeType === 8
              ? ec(e.parentNode, r)
              : e.nodeType === 1 && ec(e, r),
            Li(e))
          : ec(Ae, r.stateNode));
      break;
    case 4:
      ((n = Ae),
        (s = At),
        (Ae = r.stateNode.containerInfo),
        (At = !0),
        Er(e, t, r),
        (Ae = n),
        (At = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        s = n = n.next;
        do {
          var i = s,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ou(r, t, o),
            (s = s.next));
        } while (s !== n);
      }
      Er(e, t, r);
      break;
    case 1:
      if (
        !Ue &&
        (fs(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          ((n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount());
        } catch (a) {
          ve(r, t, a);
        }
      Er(e, t, r);
      break;
    case 21:
      Er(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ue = (n = Ue) || r.memoizedState !== null), Er(e, t, r), (Ue = n))
        : Er(e, t, r);
      break;
    default:
      Er(e, t, r);
  }
}
function yf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new Dx()),
      t.forEach(function (n) {
        var s = Gx.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(s, s));
      }));
  }
}
function kt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((Ae = a.stateNode), (At = !1));
              break e;
            case 3:
              ((Ae = a.stateNode.containerInfo), (At = !0));
              break e;
            case 4:
              ((Ae = a.stateNode.containerInfo), (At = !0));
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(j(160));
        (Xg(i, o, s), (Ae = null), (At = !1));
        var l = s.alternate;
        (l !== null && (l.return = null), (s.return = null));
      } catch (c) {
        ve(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (Zg(t, e), (t = t.sibling));
}
function Zg(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Ft(e), n & 4)) {
        try {
          (_i(3, e, e.return), ll(3, e));
        } catch (v) {
          ve(e, e.return, v);
        }
        try {
          _i(5, e, e.return);
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 1:
      (kt(t, e), Ft(e), n & 512 && r !== null && fs(r, r.return));
      break;
    case 5:
      if (
        (kt(t, e),
        Ft(e),
        n & 512 && r !== null && fs(r, r.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ai(s, "");
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      if (n & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = r !== null ? r.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && i.type === "radio" && i.name != null && bm(s, i),
              Oc(a, o));
            var c = Oc(a, i);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? Tm(s, d)
                : u === "dangerouslySetInnerHTML"
                  ? Sm(s, d)
                  : u === "children"
                    ? Ai(s, d)
                    : Zu(s, u, d, c);
            }
            switch (a) {
              case "input":
                Pc(s, i);
                break;
              case "textarea":
                _m(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? ys(s, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ys(s, !!i.multiple, i.defaultValue, !0)
                      : ys(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Fi] = i;
          } catch (v) {
            ve(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Ft(e), n & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (v) {
          ve(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), Ft(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Li(t.containerInfo);
        } catch (v) {
          ve(e, e.return, v);
        }
      break;
    case 4:
      (kt(t, e), Ft(e));
      break;
    case 13:
      (kt(t, e),
        Ft(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Nd = we())),
        n & 4 && yf(e));
      break;
    case 22:
      if (
        ((u = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ue = (c = Ue) || u), kt(t, e), (Ue = c)) : kt(t, e),
        Ft(e),
        n & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (M = e, u = e.child; u !== null;) {
            for (d = M = u; M !== null;) {
              switch (((f = M), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _i(4, f, f.return);
                  break;
                case 1:
                  fs(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((n = f), (r = f.return));
                    try {
                      ((t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (v) {
                      ve(n, r, v);
                    }
                  }
                  break;
                case 5:
                  fs(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    wf(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (M = h)) : wf(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ;) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                ((s = d.stateNode),
                  c
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Em("display", o))));
              } catch (v) {
                ve(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (v) {
                ve(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e) break e;
            (u === d && (u = null), (d = d.return));
          }
          (u === d && (u = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (kt(t, e), Ft(e), n & 4 && yf(e));
      break;
    case 21:
      break;
    default:
      (kt(t, e), Ft(e));
  }
}
function Ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null;) {
          if (Yg(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(j(160));
      }
      switch (n.tag) {
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (Ai(s, ""), (n.flags &= -33));
          var i = gf(e);
          cu(e, i, s);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            a = gf(e);
          lu(e, a, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fx(e, t, r) {
  ((M = e), ey(e));
}
function ey(e, t, r) {
  for (var n = (e.mode & 1) !== 0; M !== null;) {
    var s = M,
      i = s.child;
    if (s.tag === 22 && n) {
      var o = s.memoizedState !== null || $o;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Ue;
        a = $o;
        var c = Ue;
        if ((($o = o), (Ue = l) && !c))
          for (M = s; M !== null;)
            ((o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? xf(s)
                : l !== null
                  ? ((l.return = o), (M = l))
                  : xf(s));
        for (; i !== null;) ((M = i), ey(i), (i = i.sibling));
        ((M = s), ($o = a), (Ue = c));
      }
      vf(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (M = i)) : vf(e);
  }
}
function vf(e) {
  for (; M !== null;) {
    var t = M;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || ll(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (r === null) n.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Tt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    s,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && tf(t, i, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                tf(t, o, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Li(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Ue || (t.flags & 512 && au(t));
      } catch (f) {
        ve(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (M = r));
      break;
    }
    M = t.return;
  }
}
function wf(e) {
  for (; M !== null;) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (M = r));
      break;
    }
    M = t.return;
  }
}
function xf(e) {
  for (; M !== null;) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ll(4, t);
          } catch (l) {
            ve(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var s = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ve(t, s, l);
            }
          }
          var i = t.return;
          try {
            au(t);
          } catch (l) {
            ve(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            au(t);
          } catch (l) {
            ve(t, o, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (M = a));
      break;
    }
    M = t.return;
  }
}
var Bx = Math.ceil,
  Oa = yr.ReactCurrentDispatcher,
  jd = yr.ReactCurrentOwner,
  yt = yr.ReactCurrentBatchConfig,
  ee = 0,
  Pe = null,
  _e = null,
  Ne = 0,
  rt = 0,
  ps = ln(0),
  Ee = 0,
  Ki = null,
  Ln = 0,
  cl = 0,
  Ad = 0,
  ki = null,
  Je = null,
  Nd = 0,
  Bs = 1 / 0,
  nr = null,
  Ia = !1,
  uu = null,
  Jr = null,
  Mo = !1,
  zr = null,
  La = 0,
  Si = 0,
  du = null,
  aa = -1,
  la = 0;
function We() {
  return ee & 6 ? we() : aa !== -1 ? aa : (aa = we());
}
function Qr(e) {
  return e.mode & 1
    ? ee & 2 && Ne !== 0
      ? Ne & -Ne
      : Sx.transition !== null
        ? (la === 0 && (la = Dm()), la)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vm(e.type))),
          e)
    : 1;
}
function Lt(e, t, r, n) {
  if (50 < Si) throw ((Si = 0), (du = null), Error(j(185)));
  (lo(e, r, n),
    (!(ee & 2) || e !== Pe) &&
      (e === Pe && (!(ee & 2) && (cl |= r), Ee === 4 && Or(e, Ne)),
      Ze(e, n),
      r === 1 && ee === 0 && !(t.mode & 1) && ((Bs = we() + 500), il && cn())));
}
function Ze(e, t) {
  var r = e.callbackNode;
  Sw(e, t);
  var n = va(e, e === Pe ? Ne : 0);
  if (n === 0)
    (r !== null && Ph(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Ph(r), t === 1))
      (e.tag === 0 ? kx(bf.bind(null, e)) : ug(bf.bind(null, e)),
        wx(function () {
          !(ee & 6) && cn();
        }),
        (r = null));
    else {
      switch (Um(n)) {
        case 1:
          r = sd;
          break;
        case 4:
          r = $m;
          break;
        case 16:
          r = ya;
          break;
        case 536870912:
          r = Mm;
          break;
        default:
          r = ya;
      }
      r = ly(r, ty.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function ty(e, t) {
  if (((aa = -1), (la = 0), ee & 6)) throw Error(j(327));
  var r = e.callbackNode;
  if (_s() && e.callbackNode !== r) return null;
  var n = va(e, e === Pe ? Ne : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = $a(e, n);
  else {
    t = n;
    var s = ee;
    ee |= 2;
    var i = ny();
    (Pe !== e || Ne !== t) && ((nr = null), (Bs = we() + 500), jn(e, t));
    do
      try {
        Wx();
        break;
      } catch (a) {
        ry(e, a);
      }
    while (!0);
    (yd(),
      (Oa.current = i),
      (ee = s),
      _e !== null ? (t = 0) : ((Pe = null), (Ne = 0), (t = Ee)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Dc(e)), s !== 0 && ((n = s), (t = hu(e, s)))), t === 1)
    )
      throw ((r = Ki), jn(e, 0), Or(e, n), Ze(e, we()), r);
    if (t === 6) Or(e, n);
    else {
      if (
        ((s = e.current.alternate),
        !(n & 30) &&
          !zx(s) &&
          ((t = $a(e, n)),
          t === 2 && ((i = Dc(e)), i !== 0 && ((n = i), (t = hu(e, i)))),
          t === 1))
      )
        throw ((r = Ki), jn(e, 0), Or(e, n), Ze(e, we()), r);
      switch (((e.finishedWork = s), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          yn(e, Je, nr);
          break;
        case 3:
          if (
            (Or(e, n), (n & 130023424) === n && ((t = Nd + 500 - we()), 10 < t))
          ) {
            if (va(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & n) !== n)) {
              (We(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Kc(yn.bind(null, e, Je, nr), t);
            break;
          }
          yn(e, Je, nr);
          break;
        case 4:
          if ((Or(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, s = -1; 0 < n;) {
            var o = 31 - It(n);
            ((i = 1 << o), (o = t[o]), o > s && (s = o), (n &= ~i));
          }
          if (
            ((n = s),
            (n = we() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * Bx(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Kc(yn.bind(null, e, Je, nr), n);
            break;
          }
          yn(e, Je, nr);
          break;
        case 5:
          yn(e, Je, nr);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return (Ze(e, we()), e.callbackNode === r ? ty.bind(null, e) : null);
}
function hu(e, t) {
  var r = ki;
  return (
    e.current.memoizedState.isDehydrated && (jn(e, t).flags |= 256),
    (e = $a(e, t)),
    e !== 2 && ((t = Je), (Je = r), t !== null && fu(t)),
    e
  );
}
function fu(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function zx(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var s = r[n],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!$t(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      ((r.return = t), (t = r));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Or(e, t) {
  for (
    t &= ~Ad,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var r = 31 - It(t),
      n = 1 << r;
    ((e[r] = -1), (t &= ~n));
  }
}
function bf(e) {
  if (ee & 6) throw Error(j(327));
  _s();
  var t = va(e, 0);
  if (!(t & 1)) return (Ze(e, we()), null);
  var r = $a(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Dc(e);
    n !== 0 && ((t = n), (r = hu(e, n)));
  }
  if (r === 1) throw ((r = Ki), jn(e, 0), Or(e, t), Ze(e, we()), r);
  if (r === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yn(e, Je, nr),
    Ze(e, we()),
    null
  );
}
function Od(e, t) {
  var r = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    ((ee = r), ee === 0 && ((Bs = we() + 500), il && cn()));
  }
}
function $n(e) {
  zr !== null && zr.tag === 0 && !(ee & 6) && _s();
  var t = ee;
  ee |= 1;
  var r = yt.transition,
    n = ne;
  try {
    if (((yt.transition = null), (ne = 1), e)) return e();
  } finally {
    ((ne = n), (yt.transition = r), (ee = t), !(ee & 6) && cn());
  }
}
function Id() {
  ((rt = ps.current), ue(ps));
}
function jn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), vx(r)), _e !== null))
    for (r = _e.return; r !== null;) {
      var n = r;
      switch ((pd(n), n.tag)) {
        case 1:
          ((n = n.type.childContextTypes), n != null && ka());
          break;
        case 3:
          (Us(), ue(Ye), ue(Fe), kd());
          break;
        case 5:
          _d(n);
          break;
        case 4:
          Us();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          vd(n.type._context);
          break;
        case 22:
        case 23:
          Id();
      }
      r = r.return;
    }
  if (
    ((Pe = e),
    (_e = e = Yr(e.current, null)),
    (Ne = rt = t),
    (Ee = 0),
    (Ki = null),
    (Ad = cl = Ln = 0),
    (Je = ki = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((r = xn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var s = n.next,
          i = r.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = s), (n.next = o));
        }
        r.pending = n;
      }
    xn = null;
  }
  return e;
}
function ry(e, t) {
  do {
    var r = _e;
    try {
      if ((yd(), (sa.current = Na), Aa)) {
        for (var n = pe.memoizedState; n !== null;) {
          var s = n.queue;
          (s !== null && (s.pending = null), (n = n.next));
        }
        Aa = !1;
      }
      if (
        ((In = 0),
        (Ce = ke = pe = null),
        (bi = !1),
        (Hi = 0),
        (jd.current = null),
        r === null || r.return === null)
      ) {
        ((Ee = 1), (Ki = t), (_e = null));
        break;
      }
      e: {
        var i = e,
          o = r.return,
          a = r,
          l = t;
        if (
          ((t = Ne),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = lf(o);
          if (h !== null) {
            ((h.flags &= -257),
              cf(h, o, a, i, t),
              h.mode & 1 && af(i, c, t),
              (t = h),
              (l = c));
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              (v.add(l), (t.updateQueue = v));
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (af(i, c, t), Ld());
              break e;
            }
            l = Error(j(426));
          }
        } else if (he && a.mode & 1) {
          var x = lf(o);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              cf(x, o, a, i, t),
              md(Fs(l, a)));
            break e;
          }
        }
        ((i = l = Fs(l, a)),
          Ee !== 4 && (Ee = 2),
          ki === null ? (ki = [i]) : ki.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var g = Ug(i, l, t);
              ef(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Jr === null || !Jr.has(y))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var _ = Fg(i, a, t);
                ef(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      iy(r);
    } catch (k) {
      ((t = k), _e === r && r !== null && (_e = r = r.return));
      continue;
    }
    break;
  } while (!0);
}
function ny() {
  var e = Oa.current;
  return ((Oa.current = Na), e === null ? Na : e);
}
function Ld() {
  ((Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Pe === null || (!(Ln & 268435455) && !(cl & 268435455)) || Or(Pe, Ne));
}
function $a(e, t) {
  var r = ee;
  ee |= 2;
  var n = ny();
  (Pe !== e || Ne !== t) && ((nr = null), jn(e, t));
  do
    try {
      Hx();
      break;
    } catch (s) {
      ry(e, s);
    }
  while (!0);
  if ((yd(), (ee = r), (Oa.current = n), _e !== null)) throw Error(j(261));
  return ((Pe = null), (Ne = 0), Ee);
}
function Hx() {
  for (; _e !== null;) sy(_e);
}
function Wx() {
  for (; _e !== null && !mw();) sy(_e);
}
function sy(e) {
  var t = ay(e.alternate, e, rt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? iy(e) : (_e = t),
    (jd.current = null));
}
function iy(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Mx(r, t)), r !== null)) {
        ((r.flags &= 32767), (_e = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Ee = 6), (_e = null));
        return;
      }
    } else if (((r = $x(r, t, rt)), r !== null)) {
      _e = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function yn(e, t, r) {
  var n = ne,
    s = yt.transition;
  try {
    ((yt.transition = null), (ne = 1), Vx(e, t, r, n));
  } finally {
    ((yt.transition = s), (ne = n));
  }
  return null;
}
function Vx(e, t, r, n) {
  do _s();
  while (zr !== null);
  if (ee & 6) throw Error(j(327));
  r = e.finishedWork;
  var s = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(j(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = r.lanes | r.childLanes;
  if (
    (Ew(e, i),
    e === Pe && ((_e = Pe = null), (Ne = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Mo ||
      ((Mo = !0),
      ly(ya, function () {
        return (_s(), null);
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ((i = yt.transition), (yt.transition = null));
    var o = ne;
    ne = 1;
    var a = ee;
    ((ee |= 4),
      (jd.current = null),
      Ux(e, r),
      Zg(r, e),
      dx(Wc),
      (wa = !!Hc),
      (Wc = Hc = null),
      (e.current = r),
      Fx(r),
      gw(),
      (ee = a),
      (ne = o),
      (yt.transition = i));
  } else e.current = r;
  if (
    (Mo && ((Mo = !1), (zr = e), (La = s)),
    (i = e.pendingLanes),
    i === 0 && (Jr = null),
    ww(r.stateNode),
    Ze(e, we()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      ((s = t[r]), n(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ia) throw ((Ia = !1), (e = uu), (uu = null), e);
  return (
    La & 1 && e.tag !== 0 && _s(),
    (i = e.pendingLanes),
    i & 1 ? (e === du ? Si++ : ((Si = 0), (du = e))) : (Si = 0),
    cn(),
    null
  );
}
function _s() {
  if (zr !== null) {
    var e = Um(La),
      t = yt.transition,
      r = ne;
    try {
      if (((yt.transition = null), (ne = 16 > e ? 16 : e), zr === null))
        var n = !1;
      else {
        if (((e = zr), (zr = null), (La = 0), ee & 6)) throw Error(j(331));
        var s = ee;
        for (ee |= 4, M = e.current; M !== null;) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (M = c; M !== null;) {
                  var u = M;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) ((d.return = u), (M = d));
                  else
                    for (; M !== null;) {
                      u = M;
                      var f = u.sibling,
                        h = u.return;
                      if ((Qg(u), u === c)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (M = f));
                        break;
                      }
                      M = h;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var x = v.sibling;
                    ((v.sibling = null), (v = x));
                  } while (v !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (M = o));
          else
            e: for (; M !== null;) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _i(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                ((g.return = i.return), (M = g));
                break e;
              }
              M = i.return;
            }
        }
        var m = e.current;
        for (M = m; M !== null;) {
          o = M;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) ((y.return = o), (M = y));
          else
            e: for (o = m; M !== null;) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ll(9, a);
                  }
                } catch (k) {
                  ve(a, a.return, k);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                ((_.return = a.return), (M = _));
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((ee = s), cn(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(el, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ((ne = r), (yt.transition = t));
    }
  }
  return !1;
}
function _f(e, t, r) {
  ((t = Fs(r, t)),
    (t = Ug(e, t, 1)),
    (e = Gr(e, t, 1)),
    (t = We()),
    e !== null && (lo(e, 1, t), Ze(e, t)));
}
function ve(e, t, r) {
  if (e.tag === 3) _f(e, e, r);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        _f(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Jr === null || !Jr.has(n)))
        ) {
          ((e = Fs(r, e)),
            (e = Fg(t, e, 1)),
            (t = Gr(t, e, 1)),
            (e = We()),
            t !== null && (lo(t, 1, e), Ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Kx(e, t, r) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Pe === e &&
      (Ne & r) === r &&
      (Ee === 4 || (Ee === 3 && (Ne & 130023424) === Ne && 500 > we() - Nd)
        ? jn(e, 0)
        : (Ad |= r)),
    Ze(e, t));
}
function oy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Co), (Co <<= 1), !(Co & 130023424) && (Co = 4194304))
      : (t = 1));
  var r = We();
  ((e = fr(e, t)), e !== null && (lo(e, t, r), Ze(e, r)));
}
function qx(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), oy(e, r));
}
function Gx(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        s = e.memoizedState;
      s !== null && (r = s.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  (n !== null && n.delete(t), oy(e, r));
}
var ay;
ay = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Qe = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return ((Qe = !1), Lx(e, t, r));
      Qe = !!(e.flags & 131072);
    }
  else ((Qe = !1), he && t.flags & 1048576 && dg(t, Ta, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      (oa(e, t), (e = t.pendingProps));
      var s = $s(t, Fe.current);
      (bs(t, r), (s = Ed(null, t, n, e, s, r)));
      var i = Td();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(n) ? ((i = !0), Sa(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            xd(t),
            (s.updater = al),
            (t.stateNode = s),
            (s._reactInternals = t),
            Zc(t, n, e, r),
            (t = ru(null, t, n, !0, i, r)))
          : ((t.tag = 0), he && i && fd(t), ze(null, t, s, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (oa(e, t),
          (e = t.pendingProps),
          (s = n._init),
          (n = s(n._payload)),
          (t.type = n),
          (s = t.tag = Qx(n)),
          (e = Tt(n, e)),
          s)
        ) {
          case 0:
            t = tu(null, t, n, e, r);
            break e;
          case 1:
            t = hf(null, t, n, e, r);
            break e;
          case 11:
            t = uf(null, t, n, e, r);
            break e;
          case 14:
            t = df(null, t, n, Tt(n.type, e), r);
            break e;
        }
        throw Error(j(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Tt(n, s)),
        tu(e, t, n, s, r)
      );
    case 1:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Tt(n, s)),
        hf(e, t, n, s, r)
      );
    case 3:
      e: {
        if ((Wg(t), e === null)) throw Error(j(387));
        ((n = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          yg(e, t),
          Ra(t, n, null, r));
        var o = t.memoizedState;
        if (((n = o.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Fs(Error(j(423)), t)), (t = ff(e, t, n, r, s)));
            break e;
          } else if (n !== s) {
            ((s = Fs(Error(j(424)), t)), (t = ff(e, t, n, r, s)));
            break e;
          } else
            for (
              it = qr(t.stateNode.containerInfo.firstChild),
                ot = t,
                he = !0,
                Nt = null,
                r = mg(t, null, n, r),
                t.child = r;
              r;
            )
              ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
        else {
          if ((Ms(), n === s)) {
            t = pr(e, t, r);
            break e;
          }
          ze(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vg(t),
        e === null && Qc(t),
        (n = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Vc(n, s) ? (o = null) : i !== null && Vc(n, i) && (t.flags |= 32),
        Hg(e, t),
        ze(e, t, o, r),
        t.child
      );
    case 6:
      return (e === null && Qc(t), null);
    case 13:
      return Vg(e, t, r);
    case 4:
      return (
        bd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ds(t, null, n, r)) : ze(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Tt(n, s)),
        uf(e, t, n, s, r)
      );
    case 7:
      return (ze(e, t, t.pendingProps, r), t.child);
    case 8:
      return (ze(e, t, t.pendingProps.children, r), t.child);
    case 12:
      return (ze(e, t, t.pendingProps.children, r), t.child);
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          oe(Ca, n._currentValue),
          (n._currentValue = o),
          i !== null)
        )
          if ($t(i.value, o)) {
            if (i.children === s.children && !Ye.current) {
              t = pr(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      ((l = ur(-1, r & -r)), (l.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        (u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      Yc(i.return, r, t),
                      (a.lanes |= r));
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(j(341));
                ((o.lanes |= r),
                  (a = o.alternate),
                  a !== null && (a.lanes |= r),
                  Yc(o, r, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null;) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (ze(e, t, s.children, r), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (n = t.pendingProps.children),
        bs(t, r),
        (s = vt(s)),
        (n = n(s)),
        (t.flags |= 1),
        ze(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (s = Tt(n, t.pendingProps)),
        (s = Tt(n.type, s)),
        df(e, t, n, s, r)
      );
    case 15:
      return Bg(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (s = t.pendingProps),
        (s = t.elementType === n ? s : Tt(n, s)),
        oa(e, t),
        (t.tag = 1),
        Xe(n) ? ((e = !0), Sa(t)) : (e = !1),
        bs(t, r),
        Dg(t, n, s),
        Zc(t, n, s, r),
        ru(null, t, n, !0, e, r)
      );
    case 19:
      return Kg(e, t, r);
    case 22:
      return zg(e, t, r);
  }
  throw Error(j(156, t.tag));
};
function ly(e, t) {
  return Lm(e, t);
}
function Jx(e, t, r, n) {
  ((this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function gt(e, t, r, n) {
  return new Jx(e, t, r, n);
}
function $d(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Qx(e) {
  if (typeof e == "function") return $d(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === td)) return 11;
    if (e === rd) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = gt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function ca(e, t, r, n, s, i) {
  var o = 2;
  if (((n = e), typeof e == "function")) $d(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ss:
        return An(r.children, s, i, t);
      case ed:
        ((o = 8), (s |= 8));
        break;
      case kc:
        return (
          (e = gt(12, r, t, s | 2)),
          (e.elementType = kc),
          (e.lanes = i),
          e
        );
      case Sc:
        return ((e = gt(13, r, t, s)), (e.elementType = Sc), (e.lanes = i), e);
      case Ec:
        return ((e = gt(19, r, t, s)), (e.elementType = Ec), (e.lanes = i), e);
      case vm:
        return ul(r, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gm:
              o = 10;
              break e;
            case ym:
              o = 9;
              break e;
            case td:
              o = 11;
              break e;
            case rd:
              o = 14;
              break e;
            case jr:
              ((o = 16), (n = null));
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(o, r, t, s)),
    (t.elementType = e),
    (t.type = n),
    (t.lanes = i),
    t
  );
}
function An(e, t, r, n) {
  return ((e = gt(7, e, n, t)), (e.lanes = r), e);
}
function ul(e, t, r, n) {
  return (
    (e = gt(22, e, n, t)),
    (e.elementType = vm),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function lc(e, t, r) {
  return ((e = gt(6, e, null, t)), (e.lanes = r), e);
}
function cc(e, t, r) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Yx(e, t, r, n, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Md(e, t, r, n, s, i, o, a, l) {
  return (
    (e = new Yx(e, t, r, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xd(i),
    e
  );
}
function Xx(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ns,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function cy(e) {
  if (!e) return Zr;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Xe(r)) return cg(e, r, t);
  }
  return t;
}
function uy(e, t, r, n, s, i, o, a, l) {
  return (
    (e = Md(r, n, !0, e, s, i, o, a, l)),
    (e.context = cy(null)),
    (r = e.current),
    (n = We()),
    (s = Qr(r)),
    (i = ur(n, s)),
    (i.callback = t ?? null),
    Gr(r, i, s),
    (e.current.lanes = s),
    lo(e, s, n),
    Ze(e, n),
    e
  );
}
function dl(e, t, r, n) {
  var s = t.current,
    i = We(),
    o = Qr(s);
  return (
    (r = cy(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ur(i, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Gr(s, t, o)),
    e !== null && (Lt(e, s, o, i), na(e, s, o)),
    o
  );
}
function Ma(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Dd(e, t) {
  (kf(e, t), (e = e.alternate) && kf(e, t));
}
function Zx() {
  return null;
}
var dy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ud(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ud.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  dl(e, t, null, null);
};
hl.prototype.unmount = Ud.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ($n(function () {
      dl(null, e, null, null);
    }),
      (t[hr] = null));
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zm();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Nr.length && t !== 0 && t < Nr[r].priority; r++);
    (Nr.splice(r, 0, e), r === 0 && Wm(e));
  }
};
function Fd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sf() {}
function eb(e, t, r, n, s) {
  if (s) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var c = Ma(o);
        i.call(c);
      };
    }
    var o = uy(t, n, e, 0, null, !1, !1, "", Sf);
    return (
      (e._reactRootContainer = o),
      (e[hr] = o.current),
      Di(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      o
    );
  }
  for (; (s = e.lastChild);) e.removeChild(s);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var c = Ma(l);
      a.call(c);
    };
  }
  var l = Md(e, 0, !1, null, null, !1, !1, "", Sf);
  return (
    (e._reactRootContainer = l),
    (e[hr] = l.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      dl(t, l, r, n);
    }),
    l
  );
}
function pl(e, t, r, n, s) {
  var i = r._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Ma(o);
        a.call(l);
      };
    }
    dl(t, o, e, s);
  } else o = eb(r, t, e, s, n);
  return Ma(o);
}
Fm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = hi(t.pendingLanes);
        r !== 0 &&
          (id(t, r | 1), Ze(t, we()), !(ee & 6) && ((Bs = we() + 500), cn()));
      }
      break;
    case 13:
      ($n(function () {
        var n = fr(e, 1);
        if (n !== null) {
          var s = We();
          Lt(n, e, 1, s);
        }
      }),
        Dd(e, 1));
  }
};
od = function (e) {
  if (e.tag === 13) {
    var t = fr(e, 134217728);
    if (t !== null) {
      var r = We();
      Lt(t, e, 134217728, r);
    }
    Dd(e, 134217728);
  }
};
Bm = function (e) {
  if (e.tag === 13) {
    var t = Qr(e),
      r = fr(e, t);
    if (r !== null) {
      var n = We();
      Lt(r, e, t, n);
    }
    Dd(e, t);
  }
};
zm = function () {
  return ne;
};
Hm = function (e, t) {
  var r = ne;
  try {
    return ((ne = e), t());
  } finally {
    ne = r;
  }
};
Lc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Pc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode;) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var s = sl(n);
            if (!s) throw Error(j(90));
            (xm(n), Pc(n, s));
          }
        }
      }
      break;
    case "textarea":
      _m(e, r);
      break;
    case "select":
      ((t = r.value), t != null && ys(e, !!r.multiple, t, !1));
  }
};
Rm = Od;
jm = $n;
var tb = { usingClientEntryPoint: !1, Events: [uo, ls, sl, Cm, Pm, Od] },
  oi = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rb = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Om(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || Zx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Do.isDisabled && Do.supportsFiber)
    try {
      ((el = Do.inject(rb)), (Jt = Do));
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tb;
ct.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fd(t)) throw Error(j(200));
  return Xx(e, t, null, r);
};
ct.createRoot = function (e, t) {
  if (!Fd(e)) throw Error(j(299));
  var r = !1,
    n = "",
    s = dy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Md(e, 1, !1, null, null, r, !1, n, s)),
    (e[hr] = t.current),
    Di(e.nodeType === 8 ? e.parentNode : e),
    new Ud(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return ((e = Om(t)), (e = e === null ? null : e.stateNode), e);
};
ct.flushSync = function (e) {
  return $n(e);
};
ct.hydrate = function (e, t, r) {
  if (!fl(t)) throw Error(j(200));
  return pl(null, e, t, !0, r);
};
ct.hydrateRoot = function (e, t, r) {
  if (!Fd(e)) throw Error(j(405));
  var n = (r != null && r.hydratedSources) || null,
    s = !1,
    i = "",
    o = dy;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (s = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = uy(t, null, e, 1, r ?? null, s, !1, i, o)),
    (e[hr] = t.current),
    Di(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      ((r = n[e]),
        (s = r._getVersion),
        (s = s(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, s])
          : t.mutableSourceEagerHydrationData.push(r, s));
  return new hl(t);
};
ct.render = function (e, t, r) {
  if (!fl(t)) throw Error(j(200));
  return pl(null, e, t, !1, r);
};
ct.unmountComponentAtNode = function (e) {
  if (!fl(e)) throw Error(j(40));
  return e._reactRootContainer
    ? ($n(function () {
        pl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[hr] = null));
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = Od;
ct.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!fl(r)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return pl(e, t, r, !1, n);
};
ct.version = "18.3.1-next-f1338f8080-20240426";
function hy() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy);
    } catch (e) {
      console.error(e);
    }
}
(hy(), (hm.exports = ct));
var fo = hm.exports;
const fy = Zp(fo);
var py,
  Ef = fo;
((py = Ef.createRoot), Ef.hydrateRoot);
var ml = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  gl = typeof window > "u" || "Deno" in globalThis;
function Ct() {}
function nb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sb(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ib(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function pu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ob(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tf(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== Bd(o, t.options)) return !1;
    } else if (!Gi(t.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Cf(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (qi(t.options.mutationKey) !== qi(i)) return !1;
    } else if (!Gi(t.options.mutationKey, i)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function Bd(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qi)(e);
}
function qi(e) {
  return JSON.stringify(e, (t, r) =>
    mu(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r,
  );
}
function Gi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((r) => Gi(e[r], t[r]))
        : !1;
}
function my(e, t) {
  if (e === t) return e;
  const r = Pf(e) && Pf(t);
  if (r || (mu(e) && mu(t))) {
    const n = r ? e : Object.keys(e),
      s = n.length,
      i = r ? t : Object.keys(t),
      o = i.length,
      a = r ? [] : {},
      l = new Set(n);
    let c = 0;
    for (let u = 0; u < o; u++) {
      const d = r ? u : i[u];
      ((!r && l.has(d)) || r) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), c++)
        : ((a[d] = my(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function Pf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function mu(e) {
  if (!Rf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !Rf(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Rf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ab(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function lb(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? my(e, t)
      : t;
}
function cb(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function ub(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var zd = Symbol();
function gy(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === zd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Sn,
  $r,
  Cs,
  Vp,
  db =
    ((Vp = class extends ml {
      constructor() {
        super();
        te(this, Sn);
        te(this, $r);
        te(this, Cs);
        V(this, Cs, (t) => {
          if (!gl && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, $r) || this.setEventListener(T(this, Cs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, $r)) == null || t.call(this), V(this, $r, void 0));
      }
      setEventListener(t) {
        var r;
        (V(this, Cs, t),
          (r = T(this, $r)) == null || r.call(this),
          V(
            this,
            $r,
            t((n) => {
              typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        T(this, Sn) !== t && (V(this, Sn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, Sn) == "boolean"
          ? T(this, Sn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Sn = new WeakMap()),
    ($r = new WeakMap()),
    (Cs = new WeakMap()),
    Vp),
  yy = new db(),
  Ps,
  Mr,
  Rs,
  Kp,
  hb =
    ((Kp = class extends ml {
      constructor() {
        super();
        te(this, Ps, !0);
        te(this, Mr);
        te(this, Rs);
        V(this, Rs, (t) => {
          if (!gl && window.addEventListener) {
            const r = () => t(!0),
              n = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", n, !1),
              () => {
                (window.removeEventListener("online", r),
                  window.removeEventListener("offline", n));
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Mr) || this.setEventListener(T(this, Rs));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Mr)) == null || t.call(this), V(this, Mr, void 0));
      }
      setEventListener(t) {
        var r;
        (V(this, Rs, t),
          (r = T(this, Mr)) == null || r.call(this),
          V(this, Mr, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        T(this, Ps) !== t &&
          (V(this, Ps, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return T(this, Ps);
      }
    }),
    (Ps = new WeakMap()),
    (Mr = new WeakMap()),
    (Rs = new WeakMap()),
    Kp),
  Da = new hb();
function fb() {
  let e, t;
  const r = new Promise((s, i) => {
    ((e = s), (t = i));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function n(s) {
    (Object.assign(r, s), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (s) => {
      (n({ status: "fulfilled", value: s }), e(s));
    }),
    (r.reject = (s) => {
      (n({ status: "rejected", reason: s }), t(s));
    }),
    r
  );
}
function pb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function vy(e) {
  return (e ?? "online") === "online" ? Da.isOnline() : !0;
}
var wy = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function uc(e) {
  return e instanceof wy;
}
function xy(e) {
  let t = !1,
    r = 0,
    n = !1,
    s;
  const i = fb(),
    o = (v) => {
      var x;
      n || (f(new wy(v)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      yy.isFocused() &&
      (e.networkMode === "always" || Da.isOnline()) &&
      e.canRun(),
    u = () => vy(e.networkMode) && e.canRun(),
    d = (v) => {
      var x;
      n ||
        ((n = !0),
        (x = e.onSuccess) == null || x.call(e, v),
        s == null || s(),
        i.resolve(v));
    },
    f = (v) => {
      var x;
      n ||
        ((n = !0),
        (x = e.onError) == null || x.call(e, v),
        s == null || s(),
        i.reject(v));
    },
    h = () =>
      new Promise((v) => {
        var x;
        ((s = (g) => {
          (n || c()) && v(g);
        }),
          (x = e.onPause) == null || x.call(e));
      }).then(() => {
        var v;
        ((s = void 0), n || (v = e.onContinue) == null || v.call(e));
      }),
    w = () => {
      if (n) return;
      let v;
      const x = r === 0 ? e.initialPromise : void 0;
      try {
        v = x ?? e.fn();
      } catch (g) {
        v = Promise.reject(g);
      }
      Promise.resolve(v)
        .then(d)
        .catch((g) => {
          var S;
          if (n) return;
          const m = e.retry ?? (gl ? 0 : 3),
            y = e.retryDelay ?? pb,
            _ = typeof y == "function" ? y(r, g) : y,
            k =
              m === !0 ||
              (typeof m == "number" && r < m) ||
              (typeof m == "function" && m(r, g));
          if (t || !k) {
            f(g);
            return;
          }
          (r++,
            (S = e.onFail) == null || S.call(e, r, g),
            ab(_)
              .then(() => (c() ? void 0 : h()))
              .then(() => {
                t ? f(g) : w();
              }));
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: u,
    start: () => (u() ? w() : h().then(w), i),
  };
}
var mb = (e) => setTimeout(e, 0);
function gb() {
  let e = [],
    t = 0,
    r = (a) => {
      a();
    },
    n = (a) => {
      a();
    },
    s = mb;
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            r(a);
          });
    },
    o = () => {
      const a = e;
      ((e = []),
        a.length &&
          s(() => {
            n(() => {
              a.forEach((l) => {
                r(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || o());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      n = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var He = gb(),
  En,
  qp,
  by =
    ((qp = class {
      constructor() {
        te(this, En);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          sb(this.gcTime) &&
            V(
              this,
              En,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (gl ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        T(this, En) && (clearTimeout(T(this, En)), V(this, En, void 0));
      }
    }),
    (En = new WeakMap()),
    qp),
  js,
  Tn,
  ft,
  Cn,
  De,
  io,
  Pn,
  Rt,
  rr,
  Gp,
  yb =
    ((Gp = class extends by {
      constructor(t) {
        super();
        te(this, Rt);
        te(this, js);
        te(this, Tn);
        te(this, ft);
        te(this, Cn);
        te(this, De);
        te(this, io);
        te(this, Pn);
        (V(this, Pn, !1),
          V(this, io, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          V(this, Cn, t.client),
          V(this, ft, T(this, Cn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          V(this, js, wb(this.options)),
          (this.state = t.state ?? T(this, js)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, De)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...T(this, io), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, ft).remove(this);
      }
      setData(t, r) {
        const n = lb(this.state.data, t, this.options);
        return (
          Le(this, Rt, rr).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        Le(this, Rt, rr).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var n, s;
        const r = (n = T(this, De)) == null ? void 0 : n.promise;
        return (
          (s = T(this, De)) == null || s.cancel(t),
          r ? r.then(Ct).catch(Ct) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(T(this, js)));
      }
      isActive() {
        return this.observers.some((t) => ob(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === zd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => pu(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !ib(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (r = T(this, De)) == null || r.continue());
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (r = T(this, De)) == null || r.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (T(this, De) &&
              (T(this, Pn)
                ? T(this, De).cancel({ revert: !0 })
                : T(this, De).cancelRetry()),
            this.scheduleGc()),
          T(this, ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, Rt, rr).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var c, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, De))
            return (T(this, De).continueRetry(), T(this, De).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const n = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (V(this, Pn, !0), n.signal),
            });
          },
          i = () => {
            const f = gy(this.options, r),
              w = (() => {
                const v = {
                  client: T(this, Cn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (s(v), v);
              })();
            return (
              V(this, Pn, !1),
              this.options.persister ? this.options.persister(f, w, this) : f(w)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: T(this, Cn),
              state: this.state,
              fetchFn: i,
            };
            return (s(f), f);
          })();
        ((c = this.options.behavior) == null || c.onFetch(a, this),
          V(this, Tn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
            Le(this, Rt, rr).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            }));
        const l = (f) => {
          var h, w, v, x;
          ((uc(f) && f.silent) ||
            Le(this, Rt, rr).call(this, { type: "error", error: f }),
            uc(f) ||
              ((w = (h = T(this, ft).config).onError) == null ||
                w.call(h, f, this),
              (x = (v = T(this, ft).config).onSettled) == null ||
                x.call(v, this.state.data, f, this)),
            this.scheduleGc());
        };
        return (
          V(
            this,
            De,
            xy({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (f) => {
                var h, w, v, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (g) {
                  l(g);
                  return;
                }
                ((w = (h = T(this, ft).config).onSuccess) == null ||
                  w.call(h, f, this),
                  (x = (v = T(this, ft).config).onSettled) == null ||
                    x.call(v, f, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (f, h) => {
                Le(this, Rt, rr).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Le(this, Rt, rr).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, Rt, rr).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          T(this, De).start()
        );
      }
    }),
    (js = new WeakMap()),
    (Tn = new WeakMap()),
    (ft = new WeakMap()),
    (Cn = new WeakMap()),
    (De = new WeakMap()),
    (io = new WeakMap()),
    (Pn = new WeakMap()),
    (Rt = new WeakSet()),
    (rr = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...n, fetchStatus: "paused" };
          case "continue":
            return { ...n, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...n,
              ...vb(n.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              V(this, Tn, void 0),
              {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = t.error;
            return uc(s) && s.revert && T(this, Tn)
              ? { ...T(this, Tn), fetchStatus: "idle" }
              : {
                  ...n,
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...n, isInvalidated: !0 };
          case "setState":
            return { ...n, ...t.state };
        }
      };
      ((this.state = r(this.state)),
        He.batch(() => {
          (this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            T(this, ft).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    Gp);
function vb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: vy(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function wb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (n ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  Jp,
  xb =
    ((Jp = class extends ml {
      constructor(t = {}) {
        super();
        te(this, Wt);
        ((this.config = t), V(this, Wt, new Map()));
      }
      build(t, r, n) {
        const s = r.queryKey,
          i = r.queryHash ?? Bd(s, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new yb({
              client: t,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        T(this, Wt).has(t.queryHash) ||
          (T(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = T(this, Wt).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && T(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, Wt).get(t);
      }
      getAll() {
        return [...T(this, Wt).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Tf(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => Tf(t, n)) : r;
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        He.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    Jp),
  Vt,
  Be,
  Rn,
  Kt,
  Rr,
  Qp,
  bb =
    ((Qp = class extends by {
      constructor(t) {
        super();
        te(this, Kt);
        te(this, Vt);
        te(this, Be);
        te(this, Rn);
        ((this.mutationId = t.mutationId),
          V(this, Be, t.mutationCache),
          V(this, Vt, []),
          (this.state = t.state || _b()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, Vt).includes(t) ||
          (T(this, Vt).push(t),
          this.clearGcTimeout(),
          T(this, Be).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (V(
          this,
          Vt,
          T(this, Vt).filter((r) => r !== t),
        ),
          this.scheduleGc(),
          T(this, Be).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        T(this, Vt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, Be).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, Rn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, a, l, c, u, d, f, h, w, v, x, g, m, y, _, k, S, E, R;
        const r = () => {
          Le(this, Kt, Rr).call(this, { type: "continue" });
        };
        V(
          this,
          Rn,
          xy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, O) => {
              Le(this, Kt, Rr).call(this, {
                type: "failed",
                failureCount: A,
                error: O,
              });
            },
            onPause: () => {
              Le(this, Kt, Rr).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, Be).canRun(this),
          }),
        );
        const n = this.state.status === "pending",
          s = !T(this, Rn).canStart();
        try {
          if (n) r();
          else {
            (Le(this, Kt, Rr).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((o = (i = T(this, Be).config).onMutate) == null
                ? void 0
                : o.call(i, t, this)));
            const O = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            O !== this.state.context &&
              Le(this, Kt, Rr).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: s,
              });
          }
          const A = await T(this, Rn).start();
          return (
            await ((u = (c = T(this, Be).config).onSuccess) == null
              ? void 0
              : u.call(c, A, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, A, t, this.state.context)),
            await ((w = (h = T(this, Be).config).onSettled) == null
              ? void 0
              : w.call(
                  h,
                  A,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((x = (v = this.options).onSettled) == null
              ? void 0
              : x.call(v, A, null, t, this.state.context)),
            Le(this, Kt, Rr).call(this, { type: "success", data: A }),
            A
          );
        } catch (A) {
          try {
            throw (
              await ((m = (g = T(this, Be).config).onError) == null
                ? void 0
                : m.call(g, A, t, this.state.context, this)),
              await ((_ = (y = this.options).onError) == null
                ? void 0
                : _.call(y, A, t, this.state.context)),
              await ((S = (k = T(this, Be).config).onSettled) == null
                ? void 0
                : S.call(
                    k,
                    void 0,
                    A,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((R = (E = this.options).onSettled) == null
                ? void 0
                : R.call(E, void 0, A, t, this.state.context)),
              A
            );
          } finally {
            Le(this, Kt, Rr).call(this, { type: "error", error: A });
          }
        } finally {
          T(this, Be).runNext(this);
        }
      }
    }),
    (Vt = new WeakMap()),
    (Be = new WeakMap()),
    (Rn = new WeakMap()),
    (Kt = new WeakSet()),
    (Rr = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...n, isPaused: !0 };
          case "continue":
            return { ...n, isPaused: !1 };
          case "pending":
            return {
              ...n,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...n,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...n,
              data: void 0,
              error: t.error,
              failureCount: n.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = r(this.state)),
        He.batch(() => {
          (T(this, Vt).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            T(this, Be).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    Qp);
function _b() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var ar,
  jt,
  oo,
  Yp,
  kb =
    ((Yp = class extends ml {
      constructor(t = {}) {
        super();
        te(this, ar);
        te(this, jt);
        te(this, oo);
        ((this.config = t),
          V(this, ar, new Set()),
          V(this, jt, new Map()),
          V(this, oo, 0));
      }
      build(t, r, n) {
        const s = new bb({
          mutationCache: this,
          mutationId: ++bo(this, oo)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return (this.add(s), s);
      }
      add(t) {
        T(this, ar).add(t);
        const r = Uo(t);
        if (typeof r == "string") {
          const n = T(this, jt).get(r);
          n ? n.push(t) : T(this, jt).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (T(this, ar).delete(t)) {
          const r = Uo(t);
          if (typeof r == "string") {
            const n = T(this, jt).get(r);
            if (n)
              if (n.length > 1) {
                const s = n.indexOf(t);
                s !== -1 && n.splice(s, 1);
              } else n[0] === t && T(this, jt).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = Uo(t);
        if (typeof r == "string") {
          const n = T(this, jt).get(r),
            s =
              n == null ? void 0 : n.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var n;
        const r = Uo(t);
        if (typeof r == "string") {
          const s =
            (n = T(this, jt).get(r)) == null
              ? void 0
              : n.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        He.batch(() => {
          (T(this, ar).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            T(this, ar).clear(),
            T(this, jt).clear());
        });
      }
      getAll() {
        return Array.from(T(this, ar));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Cf(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Cf(t, r));
      }
      notify(t) {
        He.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return He.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(Ct))),
        );
      }
    }),
    (ar = new WeakMap()),
    (jt = new WeakMap()),
    (oo = new WeakMap()),
    Yp);
function Uo(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function jf(e) {
  return {
    onFetch: (t, r) => {
      var u, d, f, h, w;
      const n = t.options,
        s =
          (f =
            (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        o = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let v = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          g = gy(t.options, t.fetchOptions),
          m = async (y, _, k) => {
            if (v) return Promise.reject();
            if (_ == null && y.pages.length) return Promise.resolve(y);
            const E = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: _,
                  direction: k ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (x(z), z);
              })(),
              R = await g(E),
              { maxPages: A } = t.options,
              O = k ? ub : cb;
            return {
              pages: O(y.pages, R, A),
              pageParams: O(y.pageParams, _, A),
            };
          };
        if (s && i.length) {
          const y = s === "backward",
            _ = y ? Sb : Af,
            k = { pages: i, pageParams: o },
            S = _(n, k);
          a = await m(k, S, y);
        } else {
          const y = e ?? i.length;
          do {
            const _ = l === 0 ? (o[0] ?? n.initialPageParam) : Af(n, a);
            if (l > 0 && _ == null) break;
            ((a = await m(a, _)), l++);
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, x;
            return (x = (v = t.options).persister) == null
              ? void 0
              : x.call(
                  v,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function Af(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function Sb(e, { pages: t, pageParams: r }) {
  var n;
  return t.length > 0
    ? (n = e.getPreviousPageParam) == null
      ? void 0
      : n.call(e, t[0], t, r[0], r)
    : void 0;
}
var ge,
  Dr,
  Ur,
  As,
  Ns,
  Fr,
  Os,
  Is,
  Xp,
  Eb =
    ((Xp = class {
      constructor(e = {}) {
        te(this, ge);
        te(this, Dr);
        te(this, Ur);
        te(this, As);
        te(this, Ns);
        te(this, Fr);
        te(this, Os);
        te(this, Is);
        (V(this, ge, e.queryCache || new xb()),
          V(this, Dr, e.mutationCache || new kb()),
          V(this, Ur, e.defaultOptions || {}),
          V(this, As, new Map()),
          V(this, Ns, new Map()),
          V(this, Fr, 0));
      }
      mount() {
        (bo(this, Fr)._++,
          T(this, Fr) === 1 &&
            (V(
              this,
              Os,
              yy.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ge).onFocus());
              }),
            ),
            V(
              this,
              Is,
              Da.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, ge).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (bo(this, Fr)._--,
          T(this, Fr) === 0 &&
            ((e = T(this, Os)) == null || e.call(this),
            V(this, Os, void 0),
            (t = T(this, Is)) == null || t.call(this),
            V(this, Is, void 0)));
      }
      isFetching(e) {
        return T(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, Dr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = T(this, ge).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          r = T(this, ge).build(this, t),
          n = r.state.data;
        return n === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              r.isStaleByTime(pu(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(n));
      }
      getQueriesData(e) {
        return T(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          s = T(this, ge).get(n.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = nb(t, i);
        if (o !== void 0)
          return T(this, ge)
            .build(this, n)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return He.batch(() =>
          T(this, ge)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)]),
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = T(this, ge).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = T(this, ge);
        He.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = T(this, ge);
        return He.batch(
          () => (
            r.findAll(e).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const r = { revert: !0, ...t },
          n = He.batch(() =>
            T(this, ge)
              .findAll(e)
              .map((s) => s.cancel(r)),
          );
        return Promise.all(n).then(Ct).catch(Ct);
      }
      invalidateQueries(e, t = {}) {
        return He.batch(
          () => (
            T(this, ge)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          n = He.batch(() =>
            T(this, ge)
              .findAll(e)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(Ct)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              }),
          );
        return Promise.all(n).then(Ct);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = T(this, ge).build(this, t);
        return r.isStaleByTime(pu(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Ct).catch(Ct);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = jf(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ct).catch(Ct);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = jf(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Da.isOnline()
          ? T(this, Dr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, ge);
      }
      getMutationCache() {
        return T(this, Dr);
      }
      getDefaultOptions() {
        return T(this, Ur);
      }
      setDefaultOptions(e) {
        V(this, Ur, e);
      }
      setQueryDefaults(e, t) {
        T(this, As).set(qi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, As).values()],
          r = {};
        return (
          t.forEach((n) => {
            Gi(e, n.queryKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        T(this, Ns).set(qi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, Ns).values()],
          r = {};
        return (
          t.forEach((n) => {
            Gi(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, Ur).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Bd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === zd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, Ur).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (T(this, ge).clear(), T(this, Dr).clear());
      }
    }),
    (ge = new WeakMap()),
    (Dr = new WeakMap()),
    (Ur = new WeakMap()),
    (As = new WeakMap()),
    (Ns = new WeakMap()),
    (Fr = new WeakMap()),
    (Os = new WeakMap()),
    (Is = new WeakMap()),
    Xp),
  Tb = b.createContext(void 0),
  Cb = ({ client: e, children: t }) => (
    b.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    p.jsx(Tb.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ua() {
  return (
    (Ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ua.apply(this, arguments)
  );
}
var Hr;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Hr || (Hr = {}));
const Nf = "popstate";
function Pb(e) {
  e === void 0 && (e = {});
  function t(n, s) {
    let { pathname: i, search: o, hash: a } = n.location;
    return gu(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function r(n, s) {
    return typeof s == "string" ? s : ky(s);
  }
  return jb(t, r, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _y(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rb() {
  return Math.random().toString(36).substr(2, 8);
}
function Of(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gu(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Ua(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yl(t) : t,
      { state: r, key: (t && t.key) || n || Rb() },
    )
  );
}
function ky(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function yl(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    (n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e));
  }
  return t;
}
function jb(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = n,
    o = s.history,
    a = Hr.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), o.replaceState(Ua({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = Hr.Pop;
    let x = u(),
      g = x == null ? null : x - c;
    ((c = x), l && l({ action: a, location: v.location, delta: g }));
  }
  function f(x, g) {
    a = Hr.Push;
    let m = gu(v.location, x, g);
    c = u() + 1;
    let y = Of(m, c),
      _ = v.createHref(m);
    try {
      o.pushState(y, "", _);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      s.location.assign(_);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function h(x, g) {
    a = Hr.Replace;
    let m = gu(v.location, x, g);
    c = u();
    let y = Of(m, c),
      _ = v.createHref(m);
    (o.replaceState(y, "", _),
      i && l && l({ action: a, location: v.location, delta: 0 }));
  }
  function w(x) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof x == "string" ? x : ky(x);
    return (
      (m = m.replace(/ $/, "%20")),
      et(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, g)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Nf, d),
        (l = x),
        () => {
          (s.removeEventListener(Nf, d), (l = null));
        }
      );
    },
    createHref(x) {
      return t(s, x);
    },
    createURL: w,
    encodeLocation(x) {
      let g = w(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return o.go(x);
    },
  };
  return v;
}
var If;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(If || (If = {}));
function Ab(e, t, r) {
  return (r === void 0 && (r = "/"), Nb(e, t, r, !1));
}
function Nb(e, t, r, n) {
  let s = typeof t == "string" ? yl(t) : t,
    i = Ty(s.pathname || "/", r);
  if (i == null) return null;
  let o = Sy(e);
  Ob(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = Wb(i);
    a = zb(o[l], c, n);
  }
  return a;
}
function Sy(e, t, r, n) {
  (t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ""));
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let c = ks([n, l.relativePath]),
      u = r.concat(l);
    (i.children &&
      i.children.length > 0 &&
      (et(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Sy(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Fb(c, i.index), routesMeta: u }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of Ey(i.path)) s(i, o, l);
    }),
    t
  );
}
function Ey(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    s = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return s ? [i, ""] : [i];
  let o = Ey(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Ob(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Bb(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Ib = /^:[\w-]+$/,
  Lb = 3,
  $b = 2,
  Mb = 1,
  Db = 10,
  Ub = -2,
  Lf = (e) => e === "*";
function Fb(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Lf) && (n += Ub),
    t && (n += $b),
    r
      .filter((s) => !Lf(s))
      .reduce((s, i) => s + (Ib.test(i) ? Lb : i === "" ? Mb : Db), n)
  );
}
function Bb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, s) => n === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function zb(e, t, r) {
  let { routesMeta: n } = e,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = $f(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u,
      ),
      f = l.route;
    if (
      (!d &&
        c &&
        r &&
        !n[n.length - 1].route.index &&
        (d = $f(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          u,
        )),
      !d)
    )
      return null;
    (Object.assign(s, d.params),
      o.push({
        params: s,
        pathname: ks([i, d.pathname]),
        pathnameBase: Vb(ks([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = ks([i, d.pathnameBase])));
  }
  return o;
}
function $f(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Hb(e.path, e.caseSensitive, e.end),
    s = t.match(r);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: n.reduce((c, u, d) => {
      let { paramName: f, isOptional: h } = u;
      if (f === "*") {
        let v = a[d] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[d];
      return (
        h && !w ? (c[f] = void 0) : (c[f] = (w || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Hb(e, t, r) {
  (t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    _y(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let n = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), n]
  );
}
function Wb(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      _y(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Ty(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const ks = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Kb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Cy = ["post", "put", "patch", "delete"];
new Set(Cy);
const qb = ["get", ...Cy];
new Set(qb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fa.apply(this, arguments)
  );
}
const Gb = b.createContext(null),
  Jb = b.createContext(null),
  Py = b.createContext(null),
  vl = b.createContext(null),
  wl = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ry = b.createContext(null);
function Hd() {
  return b.useContext(vl) != null;
}
function jy() {
  return (Hd() || et(!1), b.useContext(vl).location);
}
function Qb(e, t) {
  return Yb(e, t);
}
function Yb(e, t, r, n) {
  Hd() || et(!1);
  let { navigator: s } = b.useContext(Py),
    { matches: i } = b.useContext(wl),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = jy(),
    u;
  if (t) {
    var d;
    let x = typeof t == "string" ? yl(t) : t;
    (l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || et(!1),
      (u = x));
  } else u = c;
  let f = u.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let w = Ab(e, { pathname: h }),
    v = r1(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: ks([
              l,
              s.encodeLocation
                ? s.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : ks([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      r,
      n,
    );
  return t && v
    ? b.createElement(
        vl.Provider,
        {
          value: {
            location: Fa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: Hr.Pop,
          },
        },
        v,
      )
    : v;
}
function Xb() {
  let e = o1(),
    t = Kb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? b.createElement("pre", { style: s }, r) : null,
    null,
  );
}
const Zb = b.createElement(Xb, null);
class e1 extends b.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          wl.Provider,
          { value: this.props.routeContext },
          b.createElement(Ry.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function t1(e) {
  let { routeContext: t, match: r, children: n } = e,
    s = b.useContext(Gb);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(wl.Provider, { value: t }, n)
  );
}
function r1(e, t, r, n) {
  var s;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let o = e,
    a = (s = r) == null ? void 0 : s.errors;
  if (a != null) {
    let u = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (u >= 0 || et(!1), (o = o.slice(0, Math.min(o.length, u + 1))));
  }
  let l = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let d = o[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = r,
          w =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || w) {
          ((l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((u, d, f) => {
    let h,
      w = !1,
      v = null,
      x = null;
    r &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || Zb),
      l &&
        (c < 0 && f === 0
          ? ((w = !0), (x = null))
          : c === f &&
            ((w = !0), (x = d.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          h
            ? (y = v)
            : w
              ? (y = x)
              : d.route.Component
                ? (y = b.createElement(d.route.Component, null))
                : d.route.element
                  ? (y = d.route.element)
                  : (y = u),
          b.createElement(t1, {
            match: d,
            routeContext: { outlet: u, matches: g, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? b.createElement(e1, {
          location: r.location,
          revalidation: r.revalidation,
          component: v,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var yu = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(yu || {});
function n1(e) {
  let t = b.useContext(Jb);
  return (t || et(!1), t);
}
function s1(e) {
  let t = b.useContext(wl);
  return (t || et(!1), t);
}
function i1(e) {
  let t = s1(),
    r = t.matches[t.matches.length - 1];
  return (r.route.id || et(!1), r.route.id);
}
function o1() {
  var e;
  let t = b.useContext(Ry),
    r = n1(yu.UseRouteError),
    n = i1(yu.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function a1(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function vu(e) {
  et(!1);
}
function l1(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: s = Hr.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Hd() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    c = b.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Fa({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o],
    );
  typeof n == "string" && (n = yl(n));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: w = "default",
    } = n,
    v = b.useMemo(() => {
      let x = Ty(u, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: h, key: w },
            navigationType: s,
          };
    }, [l, u, d, f, h, w, s]);
  return v == null
    ? null
    : b.createElement(
        Py.Provider,
        { value: c },
        b.createElement(vl.Provider, { children: r, value: v }),
      );
}
function c1(e) {
  let { children: t, location: r } = e;
  return Qb(wu(t), r);
}
new Promise(() => {});
function wu(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    b.Children.forEach(e, (n, s) => {
      if (!b.isValidElement(n)) return;
      let i = [...t, s];
      if (n.type === b.Fragment) {
        r.push.apply(r, wu(n.props.children, i));
        return;
      }
      (n.type !== vu && et(!1), !n.props.index || !n.props.children || et(!1));
      let o = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      (n.props.children && (o.children = wu(n.props.children, i)), r.push(o));
    }),
    r
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const u1 = "6";
try {
  window.__reactRouterVersion = u1;
} catch {}
const d1 = "startTransition",
  Mf = um[d1];
function h1(e) {
  let { basename: t, children: r, future: n, window: s } = e,
    i = b.useRef();
  i.current == null && (i.current = Pb({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = n || {},
    u = b.useCallback(
      (d) => {
        c && Mf ? Mf(() => l(d)) : l(d);
      },
      [l, c],
    );
  return (
    b.useLayoutEffect(() => o.listen(u), [o, u]),
    b.useEffect(() => a1(n), [n]),
    b.createElement(l1, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: n,
    })
  );
}
var Df;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Df || (Df = {}));
var Uf;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Uf || (Uf = {}));
var Ff = ["light", "dark"],
  f1 = "(prefers-color-scheme: dark)",
  p1 = b.createContext(void 0),
  m1 = { setTheme: (e) => {}, themes: [] },
  g1 = () => {
    var e;
    return (e = b.useContext(p1)) != null ? e : m1;
  };
b.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: r,
    enableSystem: n,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let c = i === "system",
      u =
        r === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${r}',s='setAttribute';`,
      d = s
        ? Ff.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (w, v = !1, x = !0) => {
        let g = o ? o[w] : w,
          m = v ? w + "|| ''" : `'${g}'`,
          y = "";
        return (
          s &&
            x &&
            !v &&
            Ff.includes(w) &&
            (y += `d.style.colorScheme = '${w}';`),
          r === "class"
            ? v || g
              ? (y += `c.add(${m})`)
              : (y += "null")
            : g && (y += `d[s](n,${m})`),
          y
        );
      },
      h = e
        ? `!function(){${u}${f(e)}}()`
        : n
          ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${f1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${c ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()`
          : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return b.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  },
);
var y1 = (e) => {
    switch (e) {
      case "success":
        return x1;
      case "info":
        return _1;
      case "warning":
        return b1;
      case "error":
        return k1;
      default:
        return null;
    }
  },
  v1 = Array(12).fill(0),
  w1 = ({ visible: e, className: t }) =>
    N.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      N.createElement(
        "div",
        { className: "sonner-spinner" },
        v1.map((r, n) =>
          N.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          }),
        ),
      ),
    ),
  x1 = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  b1 = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  _1 = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  k1 = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    N.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  S1 = N.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    N.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    N.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  E1 = () => {
    let [e, t] = N.useState(document.hidden);
    return (
      N.useEffect(() => {
        let r = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      e
    );
  },
  xu = 1,
  T1 = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: r, ...n } = e,
            s =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : xu++,
            i = this.toasts.find((a) => a.id === s),
            o = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...e, id: s, title: r }),
                      { ...a, ...e, id: s, dismissible: o, title: r })
                    : a,
                ))
              : this.addToast({ title: r, ...n, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let r;
          t.loading !== void 0 &&
            (r = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let n = e instanceof Promise ? e : e(),
            s = r !== void 0,
            i,
            o = n
              .then(async (l) => {
                if (((i = ["resolve", l]), N.isValidElement(l)))
                  ((s = !1),
                    this.create({ id: r, type: "default", message: l }));
                else if (P1(l) && !l.ok) {
                  s = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    u =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: c,
                    description: u,
                  });
                } else if (t.success !== void 0) {
                  s = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    u =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "success",
                    message: c,
                    description: u,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), t.error !== void 0)) {
                  s = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    u =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: c,
                    description: u,
                  });
                }
              })
              .finally(() => {
                var l;
                (s && (this.dismiss(r), (r = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, c) =>
                o.then(() => (i[0] === "reject" ? c(i[1]) : l(i[1]))).catch(c),
              );
          return typeof r != "string" && typeof r != "number"
            ? { unwrap: a }
            : Object.assign(r, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let r = (t == null ? void 0 : t.id) || xu++;
          return (this.create({ jsx: e(r), id: r, ...t }), r);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  Ge = new T1(),
  C1 = (e, t) => {
    let r = (t == null ? void 0 : t.id) || xu++;
    return (Ge.addToast({ title: e, ...t, id: r }), r);
  },
  P1 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  R1 = C1,
  j1 = () => Ge.toasts,
  A1 = () => Ge.getActiveToasts(),
  ms = Object.assign(
    R1,
    {
      success: Ge.success,
      info: Ge.info,
      warning: Ge.warning,
      error: Ge.error,
      custom: Ge.custom,
      message: Ge.message,
      promise: Ge.promise,
      dismiss: Ge.dismiss,
      loading: Ge.loading,
    },
    { getHistory: j1, getToasts: A1 },
  );
function N1(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  ((n.type = "text/css"),
    t === "top" && r.firstChild
      ? r.insertBefore(n, r.firstChild)
      : r.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
N1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fo(e) {
  return e.label !== void 0;
}
var O1 = 3,
  I1 = "32px",
  L1 = "16px",
  Bf = 4e3,
  $1 = 356,
  M1 = 14,
  D1 = 20,
  U1 = 200;
function St(...e) {
  return e.filter(Boolean).join(" ");
}
function F1(e) {
  let [t, r] = e.split("-"),
    n = [];
  return (t && n.push(t), r && n.push(r), n);
}
var B1 = (e) => {
  var t, r, n, s, i, o, a, l, c, u, d;
  let {
      invert: f,
      toast: h,
      unstyled: w,
      interacting: v,
      setHeights: x,
      visibleToasts: g,
      heights: m,
      index: y,
      toasts: _,
      expanded: k,
      removeToast: S,
      defaultRichColors: E,
      closeButton: R,
      style: A,
      cancelButtonStyle: O,
      actionButtonStyle: z,
      className: D = "",
      descriptionClassName: J = "",
      duration: L,
      position: Z,
      gap: H,
      loadingIcon: q,
      expandByDefault: C,
      classNames: P,
      icons: $,
      closeButtonAriaLabel: K = "Close toast",
      pauseWhenPageIsHidden: F,
    } = e,
    [Q, X] = N.useState(null),
    [xe, Ie] = N.useState(null),
    [re, Bn] = N.useState(!1),
    [wr, dn] = N.useState(!1),
    [xr, zn] = N.useState(!1),
    [br, vo] = N.useState(!1),
    [Ol, wo] = N.useState(!1),
    [Il, Ys] = N.useState(0),
    [Hn, ch] = N.useState(0),
    Xs = N.useRef(h.duration || L || Bf),
    uh = N.useRef(null),
    hn = N.useRef(null),
    _0 = y === 0,
    k0 = y + 1 <= g,
    dt = h.type,
    Wn = h.dismissible !== !1,
    S0 = h.className || "",
    E0 = h.descriptionClassName || "",
    xo = N.useMemo(
      () => m.findIndex((W) => W.toastId === h.id) || 0,
      [m, h.id],
    ),
    T0 = N.useMemo(() => {
      var W;
      return (W = h.closeButton) != null ? W : R;
    }, [h.closeButton, R]),
    dh = N.useMemo(() => h.duration || L || Bf, [h.duration, L]),
    Ll = N.useRef(0),
    Vn = N.useRef(0),
    hh = N.useRef(0),
    Kn = N.useRef(null),
    [C0, P0] = Z.split("-"),
    fh = N.useMemo(
      () => m.reduce((W, se, de) => (de >= xo ? W : W + se.height), 0),
      [m, xo],
    ),
    ph = E1(),
    R0 = h.invert || f,
    $l = dt === "loading";
  ((Vn.current = N.useMemo(() => xo * H + fh, [xo, fh])),
    N.useEffect(() => {
      Xs.current = dh;
    }, [dh]),
    N.useEffect(() => {
      Bn(!0);
    }, []),
    N.useEffect(() => {
      let W = hn.current;
      if (W) {
        let se = W.getBoundingClientRect().height;
        return (
          ch(se),
          x((de) => [
            { toastId: h.id, height: se, position: h.position },
            ...de,
          ]),
          () => x((de) => de.filter((xt) => xt.toastId !== h.id))
        );
      }
    }, [x, h.id]),
    N.useLayoutEffect(() => {
      if (!re) return;
      let W = hn.current,
        se = W.style.height;
      W.style.height = "auto";
      let de = W.getBoundingClientRect().height;
      ((W.style.height = se),
        ch(de),
        x((xt) =>
          xt.find((bt) => bt.toastId === h.id)
            ? xt.map((bt) => (bt.toastId === h.id ? { ...bt, height: de } : bt))
            : [{ toastId: h.id, height: de, position: h.position }, ...xt],
        ));
    }, [re, h.title, h.description, x, h.id]));
  let _r = N.useCallback(() => {
    (dn(!0),
      Ys(Vn.current),
      x((W) => W.filter((se) => se.toastId !== h.id)),
      setTimeout(() => {
        S(h);
      }, U1));
  }, [h, S, x, Vn]);
  (N.useEffect(() => {
    if (
      (h.promise && dt === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let W;
    return (
      k || v || (F && ph)
        ? (() => {
            if (hh.current < Ll.current) {
              let se = new Date().getTime() - Ll.current;
              Xs.current = Xs.current - se;
            }
            hh.current = new Date().getTime();
          })()
        : Xs.current !== 1 / 0 &&
          ((Ll.current = new Date().getTime()),
          (W = setTimeout(() => {
            var se;
            ((se = h.onAutoClose) == null || se.call(h, h), _r());
          }, Xs.current))),
      () => clearTimeout(W)
    );
  }, [k, v, h, dt, F, ph, _r]),
    N.useEffect(() => {
      h.delete && _r();
    }, [_r, h.delete]));
  function j0() {
    var W, se, de;
    return $ != null && $.loading
      ? N.createElement(
          "div",
          {
            className: St(
              P == null ? void 0 : P.loader,
              (W = h == null ? void 0 : h.classNames) == null
                ? void 0
                : W.loader,
              "sonner-loader",
            ),
            "data-visible": dt === "loading",
          },
          $.loading,
        )
      : q
        ? N.createElement(
            "div",
            {
              className: St(
                P == null ? void 0 : P.loader,
                (se = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : se.loader,
                "sonner-loader",
              ),
              "data-visible": dt === "loading",
            },
            q,
          )
        : N.createElement(w1, {
            className: St(
              P == null ? void 0 : P.loader,
              (de = h == null ? void 0 : h.classNames) == null
                ? void 0
                : de.loader,
            ),
            visible: dt === "loading",
          });
  }
  return N.createElement(
    "li",
    {
      tabIndex: 0,
      ref: hn,
      className: St(
        D,
        S0,
        P == null ? void 0 : P.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        P == null ? void 0 : P.default,
        P == null ? void 0 : P[dt],
        (r = h == null ? void 0 : h.classNames) == null ? void 0 : r[dt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (n = h.richColors) != null ? n : E,
      "data-styled": !(h.jsx || h.unstyled || w),
      "data-mounted": re,
      "data-promise": !!h.promise,
      "data-swiped": Ol,
      "data-removed": wr,
      "data-visible": k0,
      "data-y-position": C0,
      "data-x-position": P0,
      "data-index": y,
      "data-front": _0,
      "data-swiping": xr,
      "data-dismissible": Wn,
      "data-type": dt,
      "data-invert": R0,
      "data-swipe-out": br,
      "data-swipe-direction": xe,
      "data-expanded": !!(k || (C && re)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": _.length - y,
        "--offset": `${wr ? Il : Vn.current}px`,
        "--initial-height": C ? "auto" : `${Hn}px`,
        ...A,
        ...h.style,
      },
      onDragEnd: () => {
        (zn(!1), X(null), (Kn.current = null));
      },
      onPointerDown: (W) => {
        $l ||
          !Wn ||
          ((uh.current = new Date()),
          Ys(Vn.current),
          W.target.setPointerCapture(W.pointerId),
          W.target.tagName !== "BUTTON" &&
            (zn(!0), (Kn.current = { x: W.clientX, y: W.clientY })));
      },
      onPointerUp: () => {
        var W, se, de, xt;
        if (br || !Wn) return;
        Kn.current = null;
        let bt = Number(
            ((W = hn.current) == null
              ? void 0
              : W.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          kr = Number(
            ((se = hn.current) == null
              ? void 0
              : se.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          fn =
            new Date().getTime() -
            ((de = uh.current) == null ? void 0 : de.getTime()),
          _t = Q === "x" ? bt : kr,
          Sr = Math.abs(_t) / fn;
        if (Math.abs(_t) >= D1 || Sr > 0.11) {
          (Ys(Vn.current),
            (xt = h.onDismiss) == null || xt.call(h, h),
            Ie(
              Q === "x" ? (bt > 0 ? "right" : "left") : kr > 0 ? "down" : "up",
            ),
            _r(),
            vo(!0),
            wo(!1));
          return;
        }
        (zn(!1), X(null));
      },
      onPointerMove: (W) => {
        var se, de, xt, bt;
        if (
          !Kn.current ||
          !Wn ||
          ((se = window.getSelection()) == null
            ? void 0
            : se.toString().length) > 0
        )
          return;
        let kr = W.clientY - Kn.current.y,
          fn = W.clientX - Kn.current.x,
          _t = (de = e.swipeDirections) != null ? de : F1(Z);
        !Q &&
          (Math.abs(fn) > 1 || Math.abs(kr) > 1) &&
          X(Math.abs(fn) > Math.abs(kr) ? "x" : "y");
        let Sr = { x: 0, y: 0 };
        (Q === "y"
          ? (_t.includes("top") || _t.includes("bottom")) &&
            ((_t.includes("top") && kr < 0) ||
              (_t.includes("bottom") && kr > 0)) &&
            (Sr.y = kr)
          : Q === "x" &&
            (_t.includes("left") || _t.includes("right")) &&
            ((_t.includes("left") && fn < 0) ||
              (_t.includes("right") && fn > 0)) &&
            (Sr.x = fn),
          (Math.abs(Sr.x) > 0 || Math.abs(Sr.y) > 0) && wo(!0),
          (xt = hn.current) == null ||
            xt.style.setProperty("--swipe-amount-x", `${Sr.x}px`),
          (bt = hn.current) == null ||
            bt.style.setProperty("--swipe-amount-y", `${Sr.y}px`));
      },
    },
    T0 && !h.jsx
      ? N.createElement(
          "button",
          {
            "aria-label": K,
            "data-disabled": $l,
            "data-close-button": !0,
            onClick:
              $l || !Wn
                ? () => {}
                : () => {
                    var W;
                    (_r(), (W = h.onDismiss) == null || W.call(h, h));
                  },
            className: St(
              P == null ? void 0 : P.closeButton,
              (s = h == null ? void 0 : h.classNames) == null
                ? void 0
                : s.closeButton,
            ),
          },
          (i = $ == null ? void 0 : $.close) != null ? i : S1,
        )
      : null,
    h.jsx || b.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
          ? h.title()
          : h.title
      : N.createElement(
          N.Fragment,
          null,
          dt || h.icon || h.promise
            ? N.createElement(
                "div",
                {
                  "data-icon": "",
                  className: St(
                    P == null ? void 0 : P.icon,
                    (o = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : o.icon,
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || j0()
                  : null,
                h.type !== "loading"
                  ? h.icon || ($ == null ? void 0 : $[dt]) || y1(dt)
                  : null,
              )
            : null,
          N.createElement(
            "div",
            {
              "data-content": "",
              className: St(
                P == null ? void 0 : P.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            N.createElement(
              "div",
              {
                "data-title": "",
                className: St(
                  P == null ? void 0 : P.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof h.title == "function" ? h.title() : h.title,
            ),
            h.description
              ? N.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: St(
                      J,
                      E0,
                      P == null ? void 0 : P.description,
                      (c = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : c.description,
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description,
                )
              : null,
          ),
          b.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Fo(h.cancel)
              ? N.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: h.cancelButtonStyle || O,
                    onClick: (W) => {
                      var se, de;
                      Fo(h.cancel) &&
                        Wn &&
                        ((de = (se = h.cancel).onClick) == null ||
                          de.call(se, W),
                        _r());
                    },
                    className: St(
                      P == null ? void 0 : P.cancelButton,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.cancelButton,
                    ),
                  },
                  h.cancel.label,
                )
              : null,
          b.isValidElement(h.action)
            ? h.action
            : h.action && Fo(h.action)
              ? N.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: h.actionButtonStyle || z,
                    onClick: (W) => {
                      var se, de;
                      Fo(h.action) &&
                        ((de = (se = h.action).onClick) == null ||
                          de.call(se, W),
                        !W.defaultPrevented && _r());
                    },
                    className: St(
                      P == null ? void 0 : P.actionButton,
                      (d = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  h.action.label,
                )
              : null,
        ),
  );
};
function zf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function z1(e, t) {
  let r = {};
  return (
    [e, t].forEach((n, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? L1 : I1;
      function l(c) {
        ["top", "right", "bottom", "left"].forEach((u) => {
          r[`${o}-${u}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof n == "number" || typeof n == "string"
        ? l(n)
        : typeof n == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
              n[c] === void 0
                ? (r[`${o}-${c}`] = a)
                : (r[`${o}-${c}`] =
                    typeof n[c] == "number" ? `${n[c]}px` : n[c]);
            })
          : l(a);
    }),
    r
  );
}
var H1 = b.forwardRef(function (e, t) {
  let {
      invert: r,
      position: n = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: c,
      theme: u = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: w = O1,
      toastOptions: v,
      dir: x = zf(),
      gap: g = M1,
      loadingIcon: m,
      icons: y,
      containerAriaLabel: _ = "Notifications",
      pauseWhenPageIsHidden: k,
    } = e,
    [S, E] = N.useState([]),
    R = N.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(S.filter((F) => F.position).map((F) => F.position)),
          ),
        ),
      [S, n],
    ),
    [A, O] = N.useState([]),
    [z, D] = N.useState(!1),
    [J, L] = N.useState(!1),
    [Z, H] = N.useState(
      u !== "system"
        ? u
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    q = N.useRef(null),
    C = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    P = N.useRef(null),
    $ = N.useRef(!1),
    K = N.useCallback((F) => {
      E((Q) => {
        var X;
        return (
          ((X = Q.find((xe) => xe.id === F.id)) != null && X.delete) ||
            Ge.dismiss(F.id),
          Q.filter(({ id: xe }) => xe !== F.id)
        );
      });
    }, []);
  return (
    N.useEffect(
      () =>
        Ge.subscribe((F) => {
          if (F.dismiss) {
            E((Q) => Q.map((X) => (X.id === F.id ? { ...X, delete: !0 } : X)));
            return;
          }
          setTimeout(() => {
            fy.flushSync(() => {
              E((Q) => {
                let X = Q.findIndex((xe) => xe.id === F.id);
                return X !== -1
                  ? [...Q.slice(0, X), { ...Q[X], ...F }, ...Q.slice(X + 1)]
                  : [F, ...Q];
              });
            });
          });
        }),
      [],
    ),
    N.useEffect(() => {
      if (u !== "system") {
        H(u);
        return;
      }
      if (
        (u === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? H("dark")
            : H("light")),
        typeof window > "u")
      )
        return;
      let F = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        F.addEventListener("change", ({ matches: Q }) => {
          H(Q ? "dark" : "light");
        });
      } catch {
        F.addListener(({ matches: X }) => {
          try {
            H(X ? "dark" : "light");
          } catch (xe) {
            console.error(xe);
          }
        });
      }
    }, [u]),
    N.useEffect(() => {
      S.length <= 1 && D(!1);
    }, [S]),
    N.useEffect(() => {
      let F = (Q) => {
        var X, xe;
        (s.every((Ie) => Q[Ie] || Q.code === Ie) &&
          (D(!0), (X = q.current) == null || X.focus()),
          Q.code === "Escape" &&
            (document.activeElement === q.current ||
              ((xe = q.current) != null &&
                xe.contains(document.activeElement))) &&
            D(!1));
      };
      return (
        document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
      );
    }, [s]),
    N.useEffect(() => {
      if (q.current)
        return () => {
          P.current &&
            (P.current.focus({ preventScroll: !0 }),
            (P.current = null),
            ($.current = !1));
        };
    }, [q.current]),
    N.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${_} ${C}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((F, Q) => {
        var X;
        let [xe, Ie] = F.split("-");
        return S.length
          ? N.createElement(
              "ol",
              {
                key: F,
                dir: x === "auto" ? zf() : x,
                tabIndex: -1,
                ref: q,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Z,
                "data-y-position": xe,
                "data-lifted": z && S.length > 1 && !i,
                "data-x-position": Ie,
                style: {
                  "--front-toast-height": `${((X = A[0]) == null ? void 0 : X.height) || 0}px`,
                  "--width": `${$1}px`,
                  "--gap": `${g}px`,
                  ...h,
                  ...z1(l, c),
                },
                onBlur: (re) => {
                  $.current &&
                    !re.currentTarget.contains(re.relatedTarget) &&
                    (($.current = !1),
                    P.current &&
                      (P.current.focus({ preventScroll: !0 }),
                      (P.current = null)));
                },
                onFocus: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    $.current ||
                    (($.current = !0), (P.current = re.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  J || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (re) => {
                  (re.target instanceof HTMLElement &&
                    re.target.dataset.dismissible === "false") ||
                    L(!0);
                },
                onPointerUp: () => L(!1),
              },
              S.filter(
                (re) => (!re.position && Q === 0) || re.position === F,
              ).map((re, Bn) => {
                var wr, dn;
                return N.createElement(B1, {
                  key: re.id,
                  icons: y,
                  index: Bn,
                  toast: re,
                  defaultRichColors: d,
                  duration:
                    (wr = v == null ? void 0 : v.duration) != null ? wr : f,
                  className: v == null ? void 0 : v.className,
                  descriptionClassName:
                    v == null ? void 0 : v.descriptionClassName,
                  invert: r,
                  visibleToasts: w,
                  closeButton:
                    (dn = v == null ? void 0 : v.closeButton) != null ? dn : o,
                  interacting: J,
                  position: F,
                  style: v == null ? void 0 : v.style,
                  unstyled: v == null ? void 0 : v.unstyled,
                  classNames: v == null ? void 0 : v.classNames,
                  cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                  actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                  removeToast: K,
                  toasts: S.filter((xr) => xr.position == re.position),
                  heights: A.filter((xr) => xr.position == re.position),
                  setHeights: O,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: m,
                  expanded: z,
                  pauseWhenPageIsHidden: k,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const W1 = ({ ...e }) => {
    const { theme: t = "system" } = g1();
    return p.jsx(H1, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  V1 = 1,
  K1 = 1e6;
let dc = 0;
function q1() {
  return ((dc = (dc + 1) % Number.MAX_SAFE_INTEGER), dc.toString());
}
const hc = new Map(),
  Hf = (e) => {
    if (hc.has(e)) return;
    const t = setTimeout(() => {
      (hc.delete(e), Ei({ type: "REMOVE_TOAST", toastId: e }));
    }, K1);
    hc.set(e, t);
  },
  G1 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, V1) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((r) =>
            r.id === t.toast.id ? { ...r, ...t.toast } : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = t;
        return (
          r
            ? Hf(r)
            : e.toasts.forEach((n) => {
                Hf(n.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((n) =>
              n.id === r || r === void 0 ? { ...n, open: !1 } : n,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((r) => r.id !== t.toastId) };
    }
  },
  ua = [];
let da = { toasts: [] };
function Ei(e) {
  ((da = G1(da, e)),
    ua.forEach((t) => {
      t(da);
    }));
}
function J1({ ...e }) {
  const t = q1(),
    r = (s) => Ei({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
    n = () => Ei({ type: "DISMISS_TOAST", toastId: t });
  return (
    Ei({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (s) => {
          s || n();
        },
      },
    }),
    { id: t, dismiss: n, update: r }
  );
}
function Q1() {
  const [e, t] = b.useState(da);
  return (
    b.useEffect(
      () => (
        ua.push(t),
        () => {
          const r = ua.indexOf(t);
          r > -1 && ua.splice(r, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: J1,
      dismiss: (r) => Ei({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
function Se(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), r === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function Wf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ay(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const i = Wf(s, t);
      return (!r && typeof i == "function" && (r = !0), i);
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : Wf(e[s], null);
        }
      };
  };
}
function Mt(...e) {
  return b.useCallback(Ay(...e), e);
}
function xl(e, t = []) {
  let r = [];
  function n(i, o) {
    const a = b.createContext(o),
      l = r.length;
    r = [...r, o];
    const c = (d) => {
      var g;
      const { scope: f, children: h, ...w } = d,
        v = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        x = b.useMemo(() => w, Object.values(w));
      return p.jsx(v.Provider, { value: x, children: h });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var v;
      const h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a,
        w = b.useContext(h);
      if (w) return w;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const s = () => {
    const i = r.map((o) => b.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return b.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((s.scopeName = e), [n, Y1(s, ...t)]);
}
function Y1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = n.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return ((r.scopeName = t.scopeName), r);
}
function Ba(e) {
  const t = Z1(e),
    r = b.forwardRef((n, s) => {
      const { children: i, ...o } = n,
        a = b.Children.toArray(i),
        l = a.find(t_);
      if (l) {
        const c = l.props.children,
          u = a.map((d) =>
            d === l
              ? b.Children.count(c) > 1
                ? b.Children.only(null)
                : b.isValidElement(c)
                  ? c.props.children
                  : null
              : d,
          );
        return p.jsx(t, {
          ...o,
          ref: s,
          children: b.isValidElement(c) ? b.cloneElement(c, void 0, u) : null,
        });
      }
      return p.jsx(t, { ...o, ref: s, children: i });
    });
  return ((r.displayName = `${e}.Slot`), r);
}
var X1 = Ba("Slot");
function Z1(e) {
  const t = b.forwardRef((r, n) => {
    const { children: s, ...i } = r;
    if (b.isValidElement(s)) {
      const o = n_(s),
        a = r_(i, s.props);
      return (
        s.type !== b.Fragment && (a.ref = n ? Ay(n, o) : o),
        b.cloneElement(s, a)
      );
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Ny = Symbol("radix.slottable");
function e_(e) {
  const t = ({ children: r }) => p.jsx(p.Fragment, { children: r });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Ny), t);
}
function t_(e) {
  return (
    b.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Ny
  );
}
function r_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n],
      i = t[n];
    /^on[A-Z]/.test(n)
      ? s && i
        ? (r[n] = (...a) => {
            const l = i(...a);
            return (s(...a), l);
          })
        : s && (r[n] = s)
      : n === "style"
        ? (r[n] = { ...s, ...i })
        : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function n_(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function s_(e) {
  const t = e + "CollectionProvider",
    [r, n] = xl(t),
    [s, i] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (v) => {
      const { scope: x, children: g } = v,
        m = N.useRef(null),
        y = N.useRef(new Map()).current;
      return p.jsx(s, { scope: x, itemMap: y, collectionRef: m, children: g });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = Ba(a),
    c = N.forwardRef((v, x) => {
      const { scope: g, children: m } = v,
        y = i(a, g),
        _ = Mt(x, y.collectionRef);
      return p.jsx(l, { ref: _, children: m });
    });
  c.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Ba(u),
    h = N.forwardRef((v, x) => {
      const { scope: g, children: m, ...y } = v,
        _ = N.useRef(null),
        k = Mt(x, _),
        S = i(u, g);
      return (
        N.useEffect(
          () => (
            S.itemMap.set(_, { ref: _, ...y }),
            () => void S.itemMap.delete(_)
          ),
        ),
        p.jsx(f, { [d]: "", ref: k, children: m })
      );
    });
  h.displayName = u;
  function w(v) {
    const x = i(e + "CollectionConsumer", v);
    return N.useCallback(() => {
      const m = x.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (S, E) => y.indexOf(S.ref.current) - y.indexOf(E.ref.current),
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: o, Slot: c, ItemSlot: h }, w, n];
}
var i_ = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  tt = i_.reduce((e, t) => {
    const r = Ba(`Primitive.${t}`),
      n = b.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(l, { ...a, ref: i })
        );
      });
    return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
  }, {});
function Oy(e, t) {
  e && fo.flushSync(() => e.dispatchEvent(t));
}
function en(e) {
  const t = b.useRef(e);
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    b.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      [],
    )
  );
}
function o_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = en(e);
  b.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var a_ = "DismissableLayer",
  bu = "dismissableLayer.update",
  l_ = "dismissableLayer.pointerDownOutside",
  c_ = "dismissableLayer.focusOutside",
  Vf,
  Iy = b.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Wd = b.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = b.useContext(Iy),
      [u, d] = b.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = b.useState({}),
      w = Mt(t, (E) => d(E)),
      v = Array.from(c.layers),
      [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = v.indexOf(x),
      m = u ? v.indexOf(u) : -1,
      y = c.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = m >= g,
      k = d_((E) => {
        const R = E.target,
          A = [...c.branches].some((O) => O.contains(R));
        !_ ||
          A ||
          (s == null || s(E),
          o == null || o(E),
          E.defaultPrevented || a == null || a());
      }, f),
      S = h_((E) => {
        const R = E.target;
        [...c.branches].some((O) => O.contains(R)) ||
          (i == null || i(E),
          o == null || o(E),
          E.defaultPrevented || a == null || a());
      }, f);
    return (
      o_((E) => {
        m === c.layers.size - 1 &&
          (n == null || n(E),
          !E.defaultPrevented && a && (E.preventDefault(), a()));
      }, f),
      b.useEffect(() => {
        if (u)
          return (
            r &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Vf = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            Kf(),
            () => {
              r &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = Vf);
            }
          );
      }, [u, f, r, c]),
      b.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            Kf());
        },
        [u, c],
      ),
      b.useEffect(() => {
        const E = () => h({});
        return (
          document.addEventListener(bu, E),
          () => document.removeEventListener(bu, E)
        );
      }, []),
      p.jsx(tt.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? (_ ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Se(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Se(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Se(
          e.onPointerDownCapture,
          k.onPointerDownCapture,
        ),
      })
    );
  });
Wd.displayName = a_;
var u_ = "DismissableLayerBranch",
  Ly = b.forwardRef((e, t) => {
    const r = b.useContext(Iy),
      n = b.useRef(null),
      s = Mt(t, n);
    return (
      b.useEffect(() => {
        const i = n.current;
        if (i)
          return (
            r.branches.add(i),
            () => {
              r.branches.delete(i);
            }
          );
      }, [r.branches]),
      p.jsx(tt.div, { ...e, ref: s })
    );
  });
Ly.displayName = u_;
function d_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = en(e),
    n = b.useRef(!1),
    s = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const i = (a) => {
          if (a.target && !n.current) {
            let l = function () {
              $y(l_, r, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          n.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        (window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current));
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function h_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = en(e),
    n = b.useRef(!1);
  return (
    b.useEffect(() => {
      const s = (i) => {
        i.target &&
          !n.current &&
          $y(c_, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function Kf() {
  const e = new CustomEvent(bu);
  document.dispatchEvent(e);
}
function $y(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  (t && s.addEventListener(e, t, { once: !0 }),
    n ? Oy(s, i) : s.dispatchEvent(i));
}
var f_ = Wd,
  p_ = Ly,
  tn = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {},
  m_ = "Portal",
  My = b.forwardRef((e, t) => {
    var a;
    const { container: r, ...n } = e,
      [s, i] = b.useState(!1);
    tn(() => i(!0), []);
    const o =
      r ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? fy.createPortal(p.jsx(tt.div, { ...n, ref: t }), o) : null;
  });
My.displayName = m_;
function g_(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var Vd = (e) => {
  const { present: t, children: r } = e,
    n = y_(t),
    s =
      typeof r == "function" ? r({ present: n.isPresent }) : b.Children.only(r),
    i = Mt(n.ref, v_(s));
  return typeof r == "function" || n.isPresent
    ? b.cloneElement(s, { ref: i })
    : null;
};
Vd.displayName = "Presence";
function y_(e) {
  const [t, r] = b.useState(),
    n = b.useRef(null),
    s = b.useRef(e),
    i = b.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = g_(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    b.useEffect(() => {
      const c = Bo(n.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    tn(() => {
      const c = n.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          h = Bo(c);
        (e
          ? l("MOUNT")
          : h === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(u && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e));
      }
    }, [e, l]),
    tn(() => {
      if (t) {
        let c;
        const u = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const v = Bo(n.current).includes(h.animationName);
            if (h.target === t && v && (l("ANIMATION_END"), !s.current)) {
              const x = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                })));
            }
          },
          f = (h) => {
            h.target === t && (i.current = Bo(n.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (u.clearTimeout(c),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: b.useCallback((c) => {
        ((n.current = c ? getComputedStyle(c) : null), r(c));
      }, []),
    }
  );
}
function Bo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function v_(e) {
  var n, s;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var w_ = um[" useInsertionEffect ".trim().toString()] || tn;
function x_({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [s, i, o] = b_({ defaultProp: t, onChange: r }),
    a = e !== void 0,
    l = a ? e : s;
  {
    const u = b.useRef(e !== void 0);
    b.useEffect(() => {
      const d = u.current;
      (d !== a &&
        console.warn(
          `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (u.current = a));
    }, [a, n]);
  }
  const c = b.useCallback(
    (u) => {
      var d;
      if (a) {
        const f = __(u) ? u(e) : u;
        f !== e && ((d = o.current) == null || d.call(o, f));
      } else i(u);
    },
    [a, e, i, o],
  );
  return [l, c];
}
function b_({ defaultProp: e, onChange: t }) {
  const [r, n] = b.useState(e),
    s = b.useRef(r),
    i = b.useRef(t);
  return (
    w_(() => {
      i.current = t;
    }, [t]),
    b.useEffect(() => {
      var o;
      s.current !== r &&
        ((o = i.current) == null || o.call(i, r), (s.current = r));
    }, [r, s]),
    [r, n, i]
  );
}
function __(e) {
  return typeof e == "function";
}
var k_ = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  S_ = "VisuallyHidden",
  bl = b.forwardRef((e, t) =>
    p.jsx(tt.span, { ...e, ref: t, style: { ...k_, ...e.style } }),
  );
bl.displayName = S_;
var E_ = bl,
  Kd = "ToastProvider",
  [qd, T_, C_] = s_("Toast"),
  [Dy, ZP] = xl("Toast", [C_]),
  [P_, _l] = Dy(Kd),
  Uy = (e) => {
    const {
        __scopeToast: t,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = e,
      [a, l] = b.useState(null),
      [c, u] = b.useState(0),
      d = b.useRef(!1),
      f = b.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Kd}\`. Expected non-empty \`string\`.`,
        ),
      p.jsx(qd.Provider, {
        scope: t,
        children: p.jsx(P_, {
          scope: t,
          label: r,
          duration: n,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: b.useCallback(() => u((h) => h + 1), []),
          onToastRemove: b.useCallback(() => u((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
Uy.displayName = Kd;
var Fy = "ToastViewport",
  R_ = ["F8"],
  _u = "toast.viewportPause",
  ku = "toast.viewportResume",
  By = b.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        hotkey: n = R_,
        label: s = "Notifications ({hotkey})",
        ...i
      } = e,
      o = _l(Fy, r),
      a = T_(r),
      l = b.useRef(null),
      c = b.useRef(null),
      u = b.useRef(null),
      d = b.useRef(null),
      f = Mt(t, d, o.onViewportChange),
      h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = o.toastCount > 0;
    (b.useEffect(() => {
      const x = (g) => {
        var y;
        n.length !== 0 &&
          n.every((_) => g[_] || g.code === _) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [n]),
      b.useEffect(() => {
        const x = l.current,
          g = d.current;
        if (w && x && g) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const S = new CustomEvent(_u);
                (g.dispatchEvent(S), (o.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (o.isClosePausedRef.current) {
                const S = new CustomEvent(ku);
                (g.dispatchEvent(S), (o.isClosePausedRef.current = !1));
              }
            },
            _ = (S) => {
              !x.contains(S.relatedTarget) && y();
            },
            k = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", m),
            x.addEventListener("focusout", _),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", k),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              (x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", _),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [w, o.isClosePausedRef]));
    const v = b.useCallback(
      ({ tabbingDirection: x }) => {
        const m = a().map((y) => {
          const _ = y.ref.current,
            k = [_, ...z_(_)];
          return x === "forwards" ? k : k.reverse();
        });
        return (x === "forwards" ? m.reverse() : m).flat();
      },
      [a],
    );
    return (
      b.useEffect(() => {
        const x = d.current;
        if (x) {
          const g = (m) => {
            var k, S, E;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const R = document.activeElement,
                A = m.shiftKey;
              if (m.target === x && A) {
                (k = c.current) == null || k.focus();
                return;
              }
              const D = v({ tabbingDirection: A ? "backwards" : "forwards" }),
                J = D.findIndex((L) => L === R);
              fc(D.slice(J + 1))
                ? m.preventDefault()
                : A
                  ? (S = c.current) == null || S.focus()
                  : (E = u.current) == null || E.focus();
            }
          };
          return (
            x.addEventListener("keydown", g),
            () => x.removeEventListener("keydown", g)
          );
        }
      }, [a, v]),
      p.jsxs(p_, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            p.jsx(Su, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = v({ tabbingDirection: "forwards" });
                fc(x);
              },
            }),
          p.jsx(qd.Slot, {
            scope: r,
            children: p.jsx(tt.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          w &&
            p.jsx(Su, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = v({ tabbingDirection: "backwards" });
                fc(x);
              },
            }),
        ],
      })
    );
  });
By.displayName = Fy;
var zy = "ToastFocusProxy",
  Su = b.forwardRef((e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...s } = e,
      i = _l(zy, r);
    return p.jsx(bl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: t,
      style: { position: "fixed" },
      onFocus: (o) => {
        var c;
        const a = o.relatedTarget;
        !((c = i.viewport) != null && c.contains(a)) && n();
      },
    });
  });
Su.displayName = zy;
var po = "Toast",
  j_ = "toast.swipeStart",
  A_ = "toast.swipeMove",
  N_ = "toast.swipeCancel",
  O_ = "toast.swipeEnd",
  Hy = b.forwardRef((e, t) => {
    const { forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o } = e,
      [a, l] = x_({ prop: n, defaultProp: s ?? !0, onChange: i, caller: po });
    return p.jsx(Vd, {
      present: r || a,
      children: p.jsx($_, {
        open: a,
        ...o,
        ref: t,
        onClose: () => l(!1),
        onPause: en(e.onPause),
        onResume: en(e.onResume),
        onSwipeStart: Se(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Se(e.onSwipeMove, (c) => {
          const { x: u, y: d } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`,
            ));
        }),
        onSwipeCancel: Se(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Se(e.onSwipeEnd, (c) => {
          const { x: u, y: d } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${u}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
Hy.displayName = po;
var [I_, L_] = Dy(po, { onClose() {} }),
  $_ = b.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        type: n = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...w
      } = e,
      v = _l(po, r),
      [x, g] = b.useState(null),
      m = Mt(t, (L) => g(L)),
      y = b.useRef(null),
      _ = b.useRef(null),
      k = s || v.duration,
      S = b.useRef(0),
      E = b.useRef(k),
      R = b.useRef(0),
      { onToastAdd: A, onToastRemove: O } = v,
      z = en(() => {
        var Z;
        ((x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Z = v.viewport) == null || Z.focus()),
          o());
      }),
      D = b.useCallback(
        (L) => {
          !L ||
            L === 1 / 0 ||
            (window.clearTimeout(R.current),
            (S.current = new Date().getTime()),
            (R.current = window.setTimeout(z, L)));
        },
        [z],
      );
    (b.useEffect(() => {
      const L = v.viewport;
      if (L) {
        const Z = () => {
            (D(E.current), c == null || c());
          },
          H = () => {
            const q = new Date().getTime() - S.current;
            ((E.current = E.current - q),
              window.clearTimeout(R.current),
              l == null || l());
          };
        return (
          L.addEventListener(_u, H),
          L.addEventListener(ku, Z),
          () => {
            (L.removeEventListener(_u, H), L.removeEventListener(ku, Z));
          }
        );
      }
    }, [v.viewport, k, l, c, D]),
      b.useEffect(() => {
        i && !v.isClosePausedRef.current && D(k);
      }, [i, k, v.isClosePausedRef, D]),
      b.useEffect(() => (A(), () => O()), [A, O]));
    const J = b.useMemo(() => (x ? Qy(x) : null), [x]);
    return v.viewport
      ? p.jsxs(p.Fragment, {
          children: [
            J &&
              p.jsx(M_, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: J,
              }),
            p.jsx(I_, {
              scope: r,
              onClose: z,
              children: fo.createPortal(
                p.jsx(qd.ItemSlot, {
                  scope: r,
                  children: p.jsx(f_, {
                    asChild: !0,
                    onEscapeKeyDown: Se(a, () => {
                      (v.isFocusedToastEscapeKeyDownRef.current || z(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: p.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...w,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Se(e.onKeyDown, (L) => {
                        L.key === "Escape" &&
                          (a == null || a(L.nativeEvent),
                          L.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: Se(e.onPointerDown, (L) => {
                        L.button === 0 &&
                          (y.current = { x: L.clientX, y: L.clientY });
                      }),
                      onPointerMove: Se(e.onPointerMove, (L) => {
                        if (!y.current) return;
                        const Z = L.clientX - y.current.x,
                          H = L.clientY - y.current.y,
                          q = !!_.current,
                          C = ["left", "right"].includes(v.swipeDirection),
                          P = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          $ = C ? P(0, Z) : 0,
                          K = C ? 0 : P(0, H),
                          F = L.pointerType === "touch" ? 10 : 2,
                          Q = { x: $, y: K },
                          X = { originalEvent: L, delta: Q };
                        q
                          ? ((_.current = Q), zo(A_, d, X, { discrete: !1 }))
                          : qf(Q, v.swipeDirection, F)
                            ? ((_.current = Q),
                              zo(j_, u, X, { discrete: !1 }),
                              L.target.setPointerCapture(L.pointerId))
                            : (Math.abs(Z) > F || Math.abs(H) > F) &&
                              (y.current = null);
                      }),
                      onPointerUp: Se(e.onPointerUp, (L) => {
                        const Z = _.current,
                          H = L.target;
                        if (
                          (H.hasPointerCapture(L.pointerId) &&
                            H.releasePointerCapture(L.pointerId),
                          (_.current = null),
                          (y.current = null),
                          Z)
                        ) {
                          const q = L.currentTarget,
                            C = { originalEvent: L, delta: Z };
                          (qf(Z, v.swipeDirection, v.swipeThreshold)
                            ? zo(O_, h, C, { discrete: !0 })
                            : zo(N_, f, C, { discrete: !0 }),
                            q.addEventListener(
                              "click",
                              (P) => P.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  M_ = (e) => {
    const { __scopeToast: t, children: r, ...n } = e,
      s = _l(po, t),
      [i, o] = b.useState(!1),
      [a, l] = b.useState(!1);
    return (
      F_(() => o(!0)),
      b.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : p.jsx(My, {
            asChild: !0,
            children: p.jsx(bl, {
              ...n,
              children:
                i && p.jsxs(p.Fragment, { children: [s.label, " ", r] }),
            }),
          })
    );
  },
  D_ = "ToastTitle",
  Wy = b.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return p.jsx(tt.div, { ...n, ref: t });
  });
Wy.displayName = D_;
var U_ = "ToastDescription",
  Vy = b.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return p.jsx(tt.div, { ...n, ref: t });
  });
Vy.displayName = U_;
var Ky = "ToastAction",
  qy = b.forwardRef((e, t) => {
    const { altText: r, ...n } = e;
    return r.trim()
      ? p.jsx(Jy, {
          altText: r,
          asChild: !0,
          children: p.jsx(Gd, { ...n, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Ky}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
qy.displayName = Ky;
var Gy = "ToastClose",
  Gd = b.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e,
      s = L_(Gy, r);
    return p.jsx(Jy, {
      asChild: !0,
      children: p.jsx(tt.button, {
        type: "button",
        ...n,
        ref: t,
        onClick: Se(e.onClick, s.onClose),
      }),
    });
  });
Gd.displayName = Gy;
var Jy = b.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...s } = e;
  return p.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0,
    ...s,
    ref: t,
  });
});
function Qy(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        B_(n))
      ) {
        const s = n.ariaHidden || n.hidden || n.style.display === "none",
          i = n.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = n.dataset.radixToastAnnounceAlt;
            o && t.push(o);
          } else t.push(...Qy(n));
      }
    }),
    t
  );
}
function zo(e, t, r, { discrete: n }) {
  const s = r.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  (t && s.addEventListener(e, t, { once: !0 }),
    n ? Oy(s, i) : s.dispatchEvent(i));
}
var qf = (e, t, r = 0) => {
  const n = Math.abs(e.x),
    s = Math.abs(e.y),
    i = n > s;
  return t === "left" || t === "right" ? i && n > r : !i && s > r;
};
function F_(e = () => {}) {
  const t = en(e);
  tn(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function B_(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function z_(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const s = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode();) t.push(r.currentNode);
  return t;
}
function fc(e) {
  const t = document.activeElement;
  return e.some((r) =>
    r === t ? !0 : (r.focus(), document.activeElement !== t),
  );
}
var H_ = Uy,
  Yy = By,
  Xy = Hy,
  Zy = Wy,
  ev = Vy,
  tv = qy,
  rv = Gd;
function nv(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = nv(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function sv() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = nv(e)) && (n && (n += " "), (n += t));
  return n;
}
const Gf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Jf = sv,
  iv = (e, t) => (r) => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
      return Jf(
        e,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((c) => {
        const u = r == null ? void 0 : r[c],
          d = i == null ? void 0 : i[c];
        if (u === null) return null;
        const f = Gf(u) || Gf(d);
        return s[c][f];
      }),
      a =
        r &&
        Object.entries(r).reduce((c, u) => {
          let [d, f] = u;
          return (f === void 0 || (c[d] = f), c);
        }, {}),
      l =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((c, u) => {
              let { class: d, className: f, ...h } = u;
              return Object.entries(h).every((w) => {
                let [v, x] = w;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === x;
              })
                ? [...c, d, f]
                : c;
            }, []);
    return Jf(
      e,
      o,
      l,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ov = (...e) =>
    e
      .filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var V_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K_ = b.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l,
  ) =>
    b.createElement(
      "svg",
      {
        ref: l,
        ...V_,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
        className: ov("lucide", s),
        ...a,
      },
      [
        ...o.map(([c, u]) => b.createElement(c, u)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ae = (e, t) => {
  const r = b.forwardRef(({ className: n, ...s }, i) =>
    b.createElement(K_, {
      ref: i,
      iconNode: t,
      className: ov(`lucide-${W_(e)}`, n),
      ...s,
    }),
  );
  return ((r.displayName = `${e}`), r);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = ae("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = ae("BadgeDollarSign", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q_ = ae("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cv = ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kl = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G_ = ae("ClipboardList", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = ae("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J_ = ae("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q_ = ae("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = ae("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y_ = ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X_ = ae("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = ae("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z_ = ae("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = ae("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ek = ae("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tk = ae("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rk = ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nk = ae("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sk = ae("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ik = ae("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ok = ae("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ak = ae("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lk = ae("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ck = ae("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uk = ae("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Jd = "-",
  dk = (e) => {
    const t = fk(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(Jd);
        return (a[0] === "" && a.length !== 1 && a.shift(), hv(a, t) || hk(o));
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = r[o] || [];
        return a && n[o] ? [...l, ...n[o]] : l;
      },
    };
  },
  hv = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      s = n ? hv(e.slice(1), n) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(Jd);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Xf = /^\[(.+)\]$/,
  hk = (e) => {
    if (Xf.test(e)) {
      const t = Xf.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  fk = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      mk(Object.entries(e.classGroups), r).forEach(([i, o]) => {
        Eu(o, n, i, t);
      }),
      n
    );
  },
  Eu = (e, t, r, n) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Zf(t, s);
        i.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (pk(s)) {
          Eu(s(n), t, r, n);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Eu(o, Zf(t, i), r, n);
      });
    });
  },
  Zf = (e, t) => {
    let r = e;
    return (
      t.split(Jd).forEach((n) => {
        (r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n)));
      }),
      r
    );
  },
  pk = (e) => e.isThemeGetter,
  mk = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const s = n.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([o, a]) => [t + o, a]),
                  )
                : i,
          );
          return [r, s];
        })
      : e,
  gk = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const s = (i, o) => {
      (r.set(i, o), t++, t > e && ((t = 0), (n = r), (r = new Map())));
    };
    return {
      get(i) {
        let o = r.get(i);
        if (o !== void 0) return o;
        if ((o = n.get(i)) !== void 0) return (s(i, o), o);
      },
      set(i, o) {
        r.has(i) ? r.set(i, o) : s(i, o);
      },
    };
  },
  fv = "!",
  yk = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let c = 0,
          u = 0,
          d;
        for (let x = 0; x < a.length; x++) {
          let g = a[x];
          if (c === 0) {
            if (g === s && (n || a.slice(x, x + i) === t)) {
              (l.push(a.slice(u, x)), (u = x + i));
              continue;
            }
            if (g === "/") {
              d = x;
              continue;
            }
          }
          g === "[" ? c++ : g === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(u),
          h = f.startsWith(fv),
          w = h ? f.substring(1) : f,
          v = d && d > u ? d - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: o }) : o;
  },
  vk = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  wk = (e) => ({ cache: gk(e.cacheSize), parseClassName: yk(e), ...dk(e) }),
  xk = /\s+/,
  bk = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(xk);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const c = o[l],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = r(c);
      let w = !!h,
        v = n(w ? f.substring(0, h) : f);
      if (!v) {
        if (!w) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((v = n(f)), !v)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const x = vk(u).join(":"),
        g = d ? x + fv : x,
        m = g + v;
      if (i.includes(m)) continue;
      i.push(m);
      const y = s(v, w);
      for (let _ = 0; _ < y.length; ++_) {
        const k = y[_];
        i.push(g + k);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function _k() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (r = pv(t)) && (n && (n += " "), (n += r));
  return n;
}
const pv = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = pv(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function kk(e, ...t) {
  let r,
    n,
    s,
    i = o;
  function o(l) {
    const c = t.reduce((u, d) => d(u), e());
    return ((r = wk(c)), (n = r.cache.get), (s = r.cache.set), (i = a), a(l));
  }
  function a(l) {
    const c = n(l);
    if (c) return c;
    const u = bk(l, r);
    return (s(l, u), u);
  }
  return function () {
    return i(_k.apply(null, arguments));
  };
}
const le = (e) => {
    const t = (r) => r[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  mv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sk = /^\d+\/\d+$/,
  Ek = new Set(["px", "full", "screen"]),
  Tk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ck =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Pk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Rk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  jk =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  er = (e) => Ss(e) || Ek.has(e) || Sk.test(e),
  Tr = (e) => qs(e, "length", Dk),
  Ss = (e) => !!e && !Number.isNaN(Number(e)),
  pc = (e) => qs(e, "number", Ss),
  ai = (e) => !!e && Number.isInteger(Number(e)),
  Ak = (e) => e.endsWith("%") && Ss(e.slice(0, -1)),
  G = (e) => mv.test(e),
  Cr = (e) => Tk.test(e),
  Nk = new Set(["length", "size", "percentage"]),
  Ok = (e) => qs(e, Nk, gv),
  Ik = (e) => qs(e, "position", gv),
  Lk = new Set(["image", "url"]),
  $k = (e) => qs(e, Lk, Fk),
  Mk = (e) => qs(e, "", Uk),
  li = () => !0,
  qs = (e, t, r) => {
    const n = mv.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  Dk = (e) => Ck.test(e) && !Pk.test(e),
  gv = () => !1,
  Uk = (e) => Rk.test(e),
  Fk = (e) => jk.test(e),
  Bk = () => {
    const e = le("colors"),
      t = le("spacing"),
      r = le("blur"),
      n = le("brightness"),
      s = le("borderColor"),
      i = le("borderRadius"),
      o = le("borderSpacing"),
      a = le("borderWidth"),
      l = le("contrast"),
      c = le("grayscale"),
      u = le("hueRotate"),
      d = le("invert"),
      f = le("gap"),
      h = le("gradientColorStops"),
      w = le("gradientColorStopPositions"),
      v = le("inset"),
      x = le("margin"),
      g = le("opacity"),
      m = le("padding"),
      y = le("saturate"),
      _ = le("scale"),
      k = le("sepia"),
      S = le("skew"),
      E = le("space"),
      R = le("translate"),
      A = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", G, t],
      D = () => [G, t],
      J = () => ["", er, Tr],
      L = () => ["auto", Ss, G],
      Z = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      H = () => ["solid", "dashed", "dotted", "double", "none"],
      q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", G],
      $ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      K = () => [Ss, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [li],
        spacing: [er, Tr],
        blur: ["none", "", Cr, G],
        brightness: K(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Cr, G],
        borderSpacing: D(),
        borderWidth: J(),
        contrast: K(),
        grayscale: P(),
        hueRotate: K(),
        invert: P(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ak, Tr],
        inset: z(),
        margin: z(),
        opacity: K(),
        padding: D(),
        saturate: K(),
        scale: K(),
        sepia: P(),
        skew: K(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [Cr] }],
        "break-after": [{ "break-after": $() }],
        "break-before": [{ "break-before": $() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Z(), G] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ai, G] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", ai, G] }],
        "grid-cols": [{ "grid-cols": [li] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ai, G] }, G] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [li] }],
        "row-start-end": [{ row: ["auto", { span: [ai, G] }, G] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Cr] },
              Cr,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Cr, Tr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              pc,
            ],
          },
        ],
        "font-family": [{ font: [li] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ss, pc] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              er,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", er, Tr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", er, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Z(), Ik] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ok] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              $k,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...H(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: H() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...H()] }],
        "outline-offset": [{ "outline-offset": [er, G] }],
        "outline-w": [{ outline: [er, Tr] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: J() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [er, Tr] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Cr, Mk] }],
        "shadow-color": [{ shadow: [li] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...q(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": q() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Cr, G] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: K() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: K() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [_] }],
        "scale-x": [{ "scale-x": [_] }],
        "scale-y": [{ "scale-y": [_] }],
        rotate: [{ rotate: [ai, G] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [S] }],
        "skew-y": [{ "skew-y": [S] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [er, Tr, pc] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  zk = kk(Bk);
function un(...e) {
  return zk(sv(e));
}
const Hk = H_,
  yv = b.forwardRef(({ className: e, ...t }, r) =>
    p.jsx(Yy, {
      ref: r,
      className: un(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
yv.displayName = Yy.displayName;
const Wk = iv(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  vv = b.forwardRef(({ className: e, variant: t, ...r }, n) =>
    p.jsx(Xy, { ref: n, className: un(Wk({ variant: t }), e), ...r }),
  );
vv.displayName = Xy.displayName;
const Vk = b.forwardRef(({ className: e, ...t }, r) =>
  p.jsx(tv, {
    ref: r,
    className: un(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
Vk.displayName = tv.displayName;
const wv = b.forwardRef(({ className: e, ...t }, r) =>
  p.jsx(rv, {
    ref: r,
    className: un(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: p.jsx(uk, { className: "h-4 w-4" }),
  }),
);
wv.displayName = rv.displayName;
const xv = b.forwardRef(({ className: e, ...t }, r) =>
  p.jsx(Zy, { ref: r, className: un("text-sm font-semibold", e), ...t }),
);
xv.displayName = Zy.displayName;
const bv = b.forwardRef(({ className: e, ...t }, r) =>
  p.jsx(ev, { ref: r, className: un("text-sm opacity-90", e), ...t }),
);
bv.displayName = ev.displayName;
function Kk() {
  const { toasts: e } = Q1();
  return p.jsxs(Hk, {
    children: [
      e.map(function ({ id: t, title: r, description: n, action: s, ...i }) {
        return p.jsxs(
          vv,
          {
            ...i,
            children: [
              p.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && p.jsx(xv, { children: r }),
                  n && p.jsx(bv, { children: n }),
                ],
              }),
              s,
              p.jsx(wv, {}),
            ],
          },
          t,
        );
      }),
      p.jsx(yv, {}),
    ],
  });
}
const qk = ["top", "right", "bottom", "left"],
  rn = Math.min,
  nt = Math.max,
  za = Math.round,
  Ho = Math.floor,
  nn = (e) => ({ x: e, y: e }),
  Gk = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Jk = { start: "end", end: "start" };
function Tu(e, t, r) {
  return nt(e, rn(t, r));
}
function mr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gr(e) {
  return e.split("-")[0];
}
function Gs(e) {
  return e.split("-")[1];
}
function Qd(e) {
  return e === "x" ? "y" : "x";
}
function Yd(e) {
  return e === "y" ? "height" : "width";
}
function sn(e) {
  return ["top", "bottom"].includes(gr(e)) ? "y" : "x";
}
function Xd(e) {
  return Qd(sn(e));
}
function Qk(e, t, r) {
  r === void 0 && (r = !1);
  const n = Gs(e),
    s = Xd(e),
    i = Yd(s);
  let o =
    s === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return (t.reference[i] > t.floating[i] && (o = Ha(o)), [o, Ha(o)]);
}
function Yk(e) {
  const t = Ha(e);
  return [Cu(e), t, Cu(t)];
}
function Cu(e) {
  return e.replace(/start|end/g, (t) => Jk[t]);
}
function Xk(e, t, r) {
  const n = ["left", "right"],
    s = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? s : n) : t ? n : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function Zk(e, t, r, n) {
  const s = Gs(e);
  let i = Xk(gr(e), r === "start", n);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(Cu)))),
    i
  );
}
function Ha(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gk[t]);
}
function eS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function _v(e) {
  return typeof e != "number"
    ? eS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Wa(e) {
  const { x: t, y: r, width: n, height: s } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r,
  };
}
function ep(e, t, r) {
  let { reference: n, floating: s } = e;
  const i = sn(t),
    o = Xd(t),
    a = Yd(o),
    l = gr(t),
    c = i === "y",
    u = n.x + n.width / 2 - s.width / 2,
    d = n.y + n.height / 2 - s.height / 2,
    f = n[a] / 2 - s[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: u, y: n.y - s.height };
      break;
    case "bottom":
      h = { x: u, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: d };
      break;
    case "left":
      h = { x: n.x - s.width, y: d };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (Gs(t)) {
    case "start":
      h[o] -= f * (r && c ? -1 : 1);
      break;
    case "end":
      h[o] += f * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const tS = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = r,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = ep(c, n, l),
    f = n,
    h = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: x, fn: g } = a[v],
      {
        x: m,
        y,
        data: _,
        reset: k,
      } = await g({
        x: u,
        y: d,
        initialPlacement: n,
        placement: f,
        strategy: s,
        middlewareData: h,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    ((u = m ?? u),
      (d = y ?? d),
      (h = { ...h, [x]: { ...h[x], ..._ } }),
      k &&
        w <= 50 &&
        (w++,
        typeof k == "object" &&
          (k.placement && (f = k.placement),
          k.rects &&
            (c =
              k.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : k.rects),
          ({ x: u, y: d } = ep(c, f, l))),
        (v = -1)));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: h };
};
async function Ji(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = mr(t, e),
    w = _v(h),
    x = a[f ? (d === "floating" ? "reference" : "floating") : d],
    g = Wa(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          r
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    m =
      d === "floating"
        ? { x: n, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    _ = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = Wa(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m,
    );
  return {
    top: (g.top - k.top + w.top) / _.y,
    bottom: (k.bottom - g.bottom + w.bottom) / _.y,
    left: (g.left - k.left + w.left) / _.x,
    right: (k.right - g.right + w.right) / _.x,
  };
}
const rS = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: u = 0 } = mr(e, t) || {};
      if (c == null) return {};
      const d = _v(u),
        f = { x: r, y: n },
        h = Xd(s),
        w = Yd(h),
        v = await o.getDimensions(c),
        x = h === "y",
        g = x ? "top" : "left",
        m = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        _ = i.reference[w] + i.reference[h] - f[h] - i.floating[w],
        k = f[h] - i.reference[h],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let E = S ? S[y] : 0;
      (!E || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (E = a.floating[y] || i.floating[w]);
      const R = _ / 2 - k / 2,
        A = E / 2 - v[w] / 2 - 1,
        O = rn(d[g], A),
        z = rn(d[m], A),
        D = O,
        J = E - v[w] - z,
        L = E / 2 - v[w] / 2 + R,
        Z = Tu(D, L, J),
        H =
          !l.arrow &&
          Gs(s) != null &&
          L !== Z &&
          i.reference[w] / 2 - (L < D ? O : z) - v[w] / 2 < 0,
        q = H ? (L < D ? L - D : L - J) : 0;
      return {
        [h]: f[h] + q,
        data: {
          [h]: Z,
          centerOffset: L - Z - q,
          ...(H && { alignmentOffset: q }),
        },
        reset: H,
      };
    },
  }),
  nS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...x
            } = mr(e, t);
          if ((r = i.arrow) != null && r.alignmentOffset) return {};
          const g = gr(s),
            m = sn(a),
            y = gr(a) === a,
            _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            k = f || (y || !v ? [Ha(a)] : Yk(a)),
            S = w !== "none";
          !f && S && k.push(...Zk(a, v, w, _));
          const E = [a, ...k],
            R = await Ji(t, x),
            A = [];
          let O = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((u && A.push(R[g]), d)) {
            const L = Qk(s, o, _);
            A.push(R[L[0]], R[L[1]]);
          }
          if (
            ((O = [...O, { placement: s, overflows: A }]),
            !A.every((L) => L <= 0))
          ) {
            var z, D;
            const L = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Z = E[L];
            if (Z)
              return {
                data: { index: L, overflows: O },
                reset: { placement: Z },
              };
            let H =
              (D = O.filter((q) => q.overflows[0] <= 0).sort(
                (q, C) => q.overflows[1] - C.overflows[1],
              )[0]) == null
                ? void 0
                : D.placement;
            if (!H)
              switch (h) {
                case "bestFit": {
                  var J;
                  const q =
                    (J = O.filter((C) => {
                      if (S) {
                        const P = sn(C.placement);
                        return P === m || P === "y";
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((P) => P > 0)
                          .reduce((P, $) => P + $, 0),
                      ])
                      .sort((C, P) => C[1] - P[1])[0]) == null
                      ? void 0
                      : J[0];
                  q && (H = q);
                  break;
                }
                case "initialPlacement":
                  H = a;
                  break;
              }
            if (s !== H) return { reset: { placement: H } };
          }
          return {};
        },
      }
    );
  };
function tp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function rp(e) {
  return qk.some((t) => e[t] >= 0);
}
const sS = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: r } = t,
          { strategy: n = "referenceHidden", ...s } = mr(e, t);
        switch (n) {
          case "referenceHidden": {
            const i = await Ji(t, { ...s, elementContext: "reference" }),
              o = tp(i, r.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: rp(o) },
            };
          }
          case "escaped": {
            const i = await Ji(t, { ...s, altBoundary: !0 }),
              o = tp(i, r.floating);
            return { data: { escapedOffsets: o, escaped: rp(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function iS(e, t) {
  const { placement: r, platform: n, elements: s } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)),
    o = gr(r),
    a = Gs(r),
    l = sn(r) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = mr(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: w,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (h = a === "end" ? w * -1 : w),
    l ? { x: h * u, y: f * c } : { x: f * c, y: h * u }
  );
}
const oS = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await iS(t, e);
          return o === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  aS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: g, y: m } = x;
                  return { x: g, y: m };
                },
              },
              ...l
            } = mr(e, t),
            c = { x: r, y: n },
            u = await Ji(t, l),
            d = sn(gr(s)),
            f = Qd(d);
          let h = c[f],
            w = c[d];
          if (i) {
            const x = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = h + u[x],
              y = h - u[g];
            h = Tu(m, h, y);
          }
          if (o) {
            const x = d === "y" ? "top" : "left",
              g = d === "y" ? "bottom" : "right",
              m = w + u[x],
              y = w - u[g];
            w = Tu(m, w, y);
          }
          const v = a.fn({ ...t, [f]: h, [d]: w });
          return {
            ...v,
            data: { x: v.x - r, y: v.y - n, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  lS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = mr(e, t),
            u = { x: r, y: n },
            d = sn(s),
            f = Qd(d);
          let h = u[f],
            w = u[d];
          const v = mr(a, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const y = f === "y" ? "height" : "width",
              _ = i.reference[f] - i.floating[y] + x.mainAxis,
              k = i.reference[f] + i.reference[y] - x.mainAxis;
            h < _ ? (h = _) : h > k && (h = k);
          }
          if (c) {
            var g, m;
            const y = f === "y" ? "width" : "height",
              _ = ["top", "left"].includes(gr(s)),
              k =
                i.reference[d] -
                i.floating[y] +
                ((_ && ((g = o.offset) == null ? void 0 : g[d])) || 0) +
                (_ ? 0 : x.crossAxis),
              S =
                i.reference[d] +
                i.reference[y] +
                (_ ? 0 : ((m = o.offset) == null ? void 0 : m[d]) || 0) -
                (_ ? x.crossAxis : 0);
            w < k ? (w = k) : w > S && (w = S);
          }
          return { [f]: h, [d]: w };
        },
      }
    );
  },
  cS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...c } = mr(e, t),
            u = await Ji(t, c),
            d = gr(s),
            f = Gs(s),
            h = sn(s) === "y",
            { width: w, height: v } = i.floating;
          let x, g;
          d === "top" || d === "bottom"
            ? ((x = d),
              (g =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = d), (x = f === "end" ? "top" : "bottom"));
          const m = v - u.top - u.bottom,
            y = w - u.left - u.right,
            _ = rn(v - u[x], m),
            k = rn(w - u[g], y),
            S = !t.middlewareData.shift;
          let E = _,
            R = k;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (R = y),
            (n = t.middlewareData.shift) != null && n.enabled.y && (E = m),
            S && !f)
          ) {
            const O = nt(u.left, 0),
              z = nt(u.right, 0),
              D = nt(u.top, 0),
              J = nt(u.bottom, 0);
            h
              ? (R = w - 2 * (O !== 0 || z !== 0 ? O + z : nt(u.left, u.right)))
              : (E =
                  v - 2 * (D !== 0 || J !== 0 ? D + J : nt(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: R, availableHeight: E });
          const A = await o.getDimensions(a.floating);
          return w !== A.width || v !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Sl() {
  return typeof window < "u";
}
function Js(e) {
  return kv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Zt(e) {
  var t;
  return (t = (kv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function kv(e) {
  return Sl() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function Dt(e) {
  return Sl() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Xt(e) {
  return Sl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function np(e) {
  return !Sl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function mo(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: s } = Ut(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(s)
  );
}
function uS(e) {
  return ["table", "td", "th"].includes(Js(e));
}
function El(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Zd(e) {
  const t = eh(),
    r = Dt(e) ? Ut(e) : e;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n),
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n),
    )
  );
}
function dS(e) {
  let t = on(e);
  for (; Xt(t) && !zs(t);) {
    if (Zd(t)) return t;
    if (El(t)) return null;
    t = on(t);
  }
  return null;
}
function eh() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function zs(e) {
  return ["html", "body", "#document"].includes(Js(e));
}
function Ut(e) {
  return at(e).getComputedStyle(e);
}
function Tl(e) {
  return Dt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function on(e) {
  if (Js(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (np(e) && e.host) || Zt(e);
  return np(t) ? t.host : t;
}
function Sv(e) {
  const t = on(e);
  return zs(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Xt(t) && mo(t)
      ? t
      : Sv(t);
}
function Qi(e, t, r) {
  var n;
  (t === void 0 && (t = []), r === void 0 && (r = !0));
  const s = Sv(e),
    i = s === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = at(s);
  if (i) {
    const a = Pu(o);
    return t.concat(
      o,
      o.visualViewport || [],
      mo(s) ? s : [],
      a && r ? Qi(a) : [],
    );
  }
  return t.concat(s, Qi(s, [], r));
}
function Pu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ev(e) {
  const t = Ut(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const s = Xt(e),
    i = s ? e.offsetWidth : r,
    o = s ? e.offsetHeight : n,
    a = za(r) !== i || za(n) !== o;
  return (a && ((r = i), (n = o)), { width: r, height: n, $: a });
}
function th(e) {
  return Dt(e) ? e : e.contextElement;
}
function Es(e) {
  const t = th(e);
  if (!Xt(t)) return nn(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: s, $: i } = Ev(t);
  let o = (i ? za(r.width) : r.width) / n,
    a = (i ? za(r.height) : r.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const hS = nn(0);
function Tv(e) {
  const t = at(e);
  return !eh() || !t.visualViewport
    ? hS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function fS(e, t, r) {
  return (t === void 0 && (t = !1), !r || (t && r !== at(e)) ? !1 : t);
}
function Mn(e, t, r, n) {
  (t === void 0 && (t = !1), r === void 0 && (r = !1));
  const s = e.getBoundingClientRect(),
    i = th(e);
  let o = nn(1);
  t && (n ? Dt(n) && (o = Es(n)) : (o = Es(e)));
  const a = fS(i, r, n) ? Tv(i) : nn(0);
  let l = (s.left + a.x) / o.x,
    c = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = at(i),
      h = n && Dt(n) ? at(n) : n;
    let w = f,
      v = Pu(w);
    for (; v && n && h !== w;) {
      const x = Es(v),
        g = v.getBoundingClientRect(),
        m = Ut(v),
        y = g.left + (v.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        _ = g.top + (v.clientTop + parseFloat(m.paddingTop)) * x.y;
      ((l *= x.x),
        (c *= x.y),
        (u *= x.x),
        (d *= x.y),
        (l += y),
        (c += _),
        (w = at(v)),
        (v = Pu(w)));
    }
  }
  return Wa({ width: u, height: d, x: l, y: c });
}
function pS(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: s } = e;
  const i = s === "fixed",
    o = Zt(n),
    a = t ? El(t.floating) : !1;
  if (n === o || (a && i)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = nn(1);
  const u = nn(0),
    d = Xt(n);
  if (
    (d || (!d && !i)) &&
    ((Js(n) !== "body" || mo(o)) && (l = Tl(n)), Xt(n))
  ) {
    const f = Mn(n);
    ((c = Es(n)), (u.x = f.x + n.clientLeft), (u.y = f.y + n.clientTop));
  }
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + u.x,
    y: r.y * c.y - l.scrollTop * c.y + u.y,
  };
}
function mS(e) {
  return Array.from(e.getClientRects());
}
function Ru(e, t) {
  const r = Tl(e).scrollLeft;
  return t ? t.left + r : Mn(Zt(e)).left + r;
}
function gS(e) {
  const t = Zt(e),
    r = Tl(e),
    n = e.ownerDocument.body,
    s = nt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = nt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Ru(e);
  const a = -r.scrollTop;
  return (
    Ut(n).direction === "rtl" && (o += nt(t.clientWidth, n.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function yS(e, t) {
  const r = at(e),
    n = Zt(e),
    s = r.visualViewport;
  let i = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    ((i = s.width), (o = s.height));
    const c = eh();
    (!c || (c && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
function vS(e, t) {
  const r = Mn(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    s = r.left + e.clientLeft,
    i = Xt(e) ? Es(e) : nn(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    c = n * i.y;
  return { width: o, height: a, x: l, y: c };
}
function sp(e, t, r) {
  let n;
  if (t === "viewport") n = yS(e, r);
  else if (t === "document") n = gS(Zt(e));
  else if (Dt(t)) n = vS(t, r);
  else {
    const s = Tv(e);
    n = { ...t, x: t.x - s.x, y: t.y - s.y };
  }
  return Wa(n);
}
function Cv(e, t) {
  const r = on(e);
  return r === t || !Dt(r) || zs(r)
    ? !1
    : Ut(r).position === "fixed" || Cv(r, t);
}
function wS(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Qi(e, [], !1).filter((a) => Dt(a) && Js(a) !== "body"),
    s = null;
  const i = Ut(e).position === "fixed";
  let o = i ? on(e) : e;
  for (; Dt(o) && !zs(o);) {
    const a = Ut(o),
      l = Zd(o);
    (!l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (mo(o) && !l && Cv(e, o))
      )
        ? (n = n.filter((u) => u !== o))
        : (s = a),
      (o = on(o)));
  }
  return (t.set(e, n), n);
}
function xS(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: s } = e;
  const o = [
      ...(r === "clippingAncestors"
        ? El(t)
          ? []
          : wS(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = o[0],
    l = o.reduce(
      (c, u) => {
        const d = sp(t, u, s);
        return (
          (c.top = nt(d.top, c.top)),
          (c.right = rn(d.right, c.right)),
          (c.bottom = rn(d.bottom, c.bottom)),
          (c.left = nt(d.left, c.left)),
          c
        );
      },
      sp(t, a, s),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function bS(e) {
  const { width: t, height: r } = Ev(e);
  return { width: t, height: r };
}
function _S(e, t, r) {
  const n = Xt(t),
    s = Zt(t),
    i = r === "fixed",
    o = Mn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = nn(0);
  if (n || (!n && !i))
    if (((Js(t) !== "body" || mo(s)) && (a = Tl(t)), n)) {
      const h = Mn(t, !0, i, t);
      ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
    } else s && (l.x = Ru(s));
  let c = 0,
    u = 0;
  if (s && !n && !i) {
    const h = s.getBoundingClientRect();
    ((u = h.top + a.scrollTop), (c = h.left + a.scrollLeft - Ru(s, h)));
  }
  const d = o.left + a.scrollLeft - l.x - c,
    f = o.top + a.scrollTop - l.y - u;
  return { x: d, y: f, width: o.width, height: o.height };
}
function mc(e) {
  return Ut(e).position === "static";
}
function ip(e, t) {
  if (!Xt(e) || Ut(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return (Zt(e) === r && (r = r.ownerDocument.body), r);
}
function Pv(e, t) {
  const r = at(e);
  if (El(e)) return r;
  if (!Xt(e)) {
    let s = on(e);
    for (; s && !zs(s);) {
      if (Dt(s) && !mc(s)) return s;
      s = on(s);
    }
    return r;
  }
  let n = ip(e, t);
  for (; n && uS(n) && mc(n);) n = ip(n, t);
  return n && zs(n) && mc(n) && !Zd(n) ? r : n || dS(e) || r;
}
const kS = async function (e) {
  const t = this.getOffsetParent || Pv,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: _S(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function SS(e) {
  return Ut(e).direction === "rtl";
}
const ES = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pS,
  getDocumentElement: Zt,
  getClippingRect: xS,
  getOffsetParent: Pv,
  getElementRects: kS,
  getClientRects: mS,
  getDimensions: bS,
  getScale: Es,
  isElement: Dt,
  isRTL: SS,
};
function TS(e, t) {
  let r = null,
    n;
  const s = Zt(e);
  function i() {
    var a;
    (clearTimeout(n), (a = r) == null || a.disconnect(), (r = null));
  }
  function o(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
    const { left: c, top: u, width: d, height: f } = e.getBoundingClientRect();
    if ((a || t(), !d || !f)) return;
    const h = Ho(u),
      w = Ho(s.clientWidth - (c + d)),
      v = Ho(s.clientHeight - (u + f)),
      x = Ho(c),
      m = {
        rootMargin: -h + "px " + -w + "px " + -v + "px " + -x + "px",
        threshold: nt(0, rn(1, l)) || 1,
      };
    let y = !0;
    function _(k) {
      const S = k[0].intersectionRatio;
      if (S !== l) {
        if (!y) return o();
        S
          ? o(!1, S)
          : (n = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(_, { ...m, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(_, m);
    }
    r.observe(e);
  }
  return (o(!0), i);
}
function CS(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    c = th(e),
    u = s || i ? [...(c ? Qi(c) : []), ...Qi(t)] : [];
  u.forEach((g) => {
    (s && g.addEventListener("scroll", r, { passive: !0 }),
      i && g.addEventListener("resize", r));
  });
  const d = c && a ? TS(c, r) : null;
  let f = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((g) => {
      let [m] = g;
      (m &&
        m.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        r());
    })),
    c && !l && h.observe(c),
    h.observe(t));
  let w,
    v = l ? Mn(e) : null;
  l && x();
  function x() {
    const g = Mn(e);
    (v &&
      (g.x !== v.x ||
        g.y !== v.y ||
        g.width !== v.width ||
        g.height !== v.height) &&
      r(),
      (v = g),
      (w = requestAnimationFrame(x)));
  }
  return (
    r(),
    () => {
      var g;
      (u.forEach((m) => {
        (s && m.removeEventListener("scroll", r),
          i && m.removeEventListener("resize", r));
      }),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        (h = null),
        l && cancelAnimationFrame(w));
    }
  );
}
const PS = oS,
  RS = aS,
  jS = nS,
  AS = cS,
  NS = sS,
  op = rS,
  OS = lS,
  IS = (e, t, r) => {
    const n = new Map(),
      s = { platform: ES, ...r },
      i = { ...s.platform, _c: n };
    return tS(e, t, { ...s, platform: i });
  };
var ha = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
function Va(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0;) if (!Va(e[n], t[n])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (r = s.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0;) if (!{}.hasOwnProperty.call(t, s[n])) return !1;
    for (n = r; n-- !== 0;) {
      const i = s[n];
      if (!(i === "_owner" && e.$$typeof) && !Va(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ap(e, t) {
  const r = Rv(e);
  return Math.round(t * r) / r;
}
function gc(e) {
  const t = b.useRef(e);
  return (
    ha(() => {
      t.current = e;
    }),
    t
  );
}
function LS(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, d] = b.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = b.useState(n);
  Va(f, n) || h(n);
  const [w, v] = b.useState(null),
    [x, g] = b.useState(null),
    m = b.useCallback((C) => {
      C !== S.current && ((S.current = C), v(C));
    }, []),
    y = b.useCallback((C) => {
      C !== E.current && ((E.current = C), g(C));
    }, []),
    _ = i || w,
    k = o || x,
    S = b.useRef(null),
    E = b.useRef(null),
    R = b.useRef(u),
    A = l != null,
    O = gc(l),
    z = gc(s),
    D = gc(c),
    J = b.useCallback(() => {
      if (!S.current || !E.current) return;
      const C = { placement: t, strategy: r, middleware: f };
      (z.current && (C.platform = z.current),
        IS(S.current, E.current, C).then((P) => {
          const $ = { ...P, isPositioned: D.current !== !1 };
          L.current &&
            !Va(R.current, $) &&
            ((R.current = $),
            fo.flushSync(() => {
              d($);
            }));
        }));
    }, [f, t, r, z, D]);
  ha(() => {
    c === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), d((C) => ({ ...C, isPositioned: !1 })));
  }, [c]);
  const L = b.useRef(!1);
  (ha(
    () => (
      (L.current = !0),
      () => {
        L.current = !1;
      }
    ),
    [],
  ),
    ha(() => {
      if ((_ && (S.current = _), k && (E.current = k), _ && k)) {
        if (O.current) return O.current(_, k, J);
        J();
      }
    }, [_, k, J, O, A]));
  const Z = b.useMemo(
      () => ({ reference: S, floating: E, setReference: m, setFloating: y }),
      [m, y],
    ),
    H = b.useMemo(() => ({ reference: _, floating: k }), [_, k]),
    q = b.useMemo(() => {
      const C = { position: r, left: 0, top: 0 };
      if (!H.floating) return C;
      const P = ap(H.floating, u.x),
        $ = ap(H.floating, u.y);
      return a
        ? {
            ...C,
            transform: "translate(" + P + "px, " + $ + "px)",
            ...(Rv(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: P, top: $ };
    }, [r, a, H.floating, u.x, u.y]);
  return b.useMemo(
    () => ({ ...u, update: J, refs: Z, elements: H, floatingStyles: q }),
    [u, J, Z, H, q],
  );
}
const $S = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: s } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? op({ element: n.current, padding: s }).fn(r)
            : {}
          : n
            ? op({ element: n, padding: s }).fn(r)
            : {};
      },
    };
  },
  MS = (e, t) => ({ ...PS(e), options: [e, t] }),
  DS = (e, t) => ({ ...RS(e), options: [e, t] }),
  US = (e, t) => ({ ...OS(e), options: [e, t] }),
  FS = (e, t) => ({ ...jS(e), options: [e, t] }),
  BS = (e, t) => ({ ...AS(e), options: [e, t] }),
  zS = (e, t) => ({ ...NS(e), options: [e, t] }),
  HS = (e, t) => ({ ...$S(e), options: [e, t] });
var WS = "Arrow",
  jv = b.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: s = 5, ...i } = e;
    return p.jsx(tt.svg, {
      ...i,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
jv.displayName = WS;
var VS = jv;
function KS(e) {
  const [t, r] = b.useState(void 0);
  return (
    tn(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            ((o = c.inlineSize), (a = c.blockSize));
          } else ((o = e.offsetWidth), (a = e.offsetHeight));
          r({ width: o, height: a });
        });
        return (n.observe(e, { box: "border-box" }), () => n.unobserve(e));
      } else r(void 0);
    }, [e]),
    t
  );
}
var Av = "Popper",
  [Nv, Ov] = xl(Av),
  [eR, Iv] = Nv(Av),
  Lv = "PopperAnchor",
  $v = b.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e,
      i = Iv(Lv, r),
      o = b.useRef(null),
      a = Mt(t, o);
    return (
      b.useEffect(() => {
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current);
      }),
      n ? null : p.jsx(tt.div, { ...s, ref: a })
    );
  });
$v.displayName = Lv;
var rh = "PopperContent",
  [qS, GS] = Nv(rh),
  Mv = b.forwardRef((e, t) => {
    var re, Bn, wr, dn, xr, zn;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: w,
        ...v
      } = e,
      x = Iv(rh, r),
      [g, m] = b.useState(null),
      y = Mt(t, (br) => m(br)),
      [_, k] = b.useState(null),
      S = KS(_),
      E = (S == null ? void 0 : S.width) ?? 0,
      R = (S == null ? void 0 : S.height) ?? 0,
      A = n + (i !== "center" ? "-" + i : ""),
      O =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      z = Array.isArray(c) ? c : [c],
      D = z.length > 0,
      J = { padding: O, boundary: z.filter(QS), altBoundary: D },
      {
        refs: L,
        floatingStyles: Z,
        placement: H,
        isPositioned: q,
        middlewareData: C,
      } = LS({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...br) =>
          CS(...br, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          MS({ mainAxis: s + R, alignmentAxis: o }),
          l &&
            DS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? US() : void 0,
              ...J,
            }),
          l && FS({ ...J }),
          BS({
            ...J,
            apply: ({
              elements: br,
              rects: vo,
              availableWidth: Ol,
              availableHeight: wo,
            }) => {
              const { width: Il, height: Ys } = vo.reference,
                Hn = br.floating.style;
              (Hn.setProperty("--radix-popper-available-width", `${Ol}px`),
                Hn.setProperty("--radix-popper-available-height", `${wo}px`),
                Hn.setProperty("--radix-popper-anchor-width", `${Il}px`),
                Hn.setProperty("--radix-popper-anchor-height", `${Ys}px`));
            },
          }),
          _ && HS({ element: _, padding: a }),
          YS({ arrowWidth: E, arrowHeight: R }),
          f && zS({ strategy: "referenceHidden", ...J }),
        ],
      }),
      [P, $] = Fv(H),
      K = en(w);
    tn(() => {
      q && (K == null || K());
    }, [q, K]);
    const F = (re = C.arrow) == null ? void 0 : re.x,
      Q = (Bn = C.arrow) == null ? void 0 : Bn.y,
      X = ((wr = C.arrow) == null ? void 0 : wr.centerOffset) !== 0,
      [xe, Ie] = b.useState();
    return (
      tn(() => {
        g && Ie(window.getComputedStyle(g).zIndex);
      }, [g]),
      p.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: q ? Z.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (dn = C.transformOrigin) == null ? void 0 : dn.x,
            (xr = C.transformOrigin) == null ? void 0 : xr.y,
          ].join(" "),
          ...(((zn = C.hide) == null ? void 0 : zn.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(qS, {
          scope: r,
          placedSide: P,
          onArrowChange: k,
          arrowX: F,
          arrowY: Q,
          shouldHideArrow: X,
          children: p.jsx(tt.div, {
            "data-side": P,
            "data-align": $,
            ...v,
            ref: y,
            style: { ...v.style, animation: q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Mv.displayName = rh;
var Dv = "PopperArrow",
  JS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Uv = b.forwardRef(function (t, r) {
    const { __scopePopper: n, ...s } = t,
      i = GS(Dv, n),
      o = JS[i.placedSide];
    return p.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(VS, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
Uv.displayName = Dv;
function QS(e) {
  return e !== null;
}
var YS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, g, m;
    const { placement: r, rects: n, middlewareData: s } = t,
      o = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [c, u] = Fv(r),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      h = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let w = "",
      v = "";
    return (
      c === "bottom"
        ? ((w = o ? d : `${f}px`), (v = `${-l}px`))
        : c === "top"
          ? ((w = o ? d : `${f}px`), (v = `${n.floating.height + l}px`))
          : c === "right"
            ? ((w = `${-l}px`), (v = o ? d : `${h}px`))
            : c === "left" &&
              ((w = `${n.floating.width + l}px`), (v = o ? d : `${h}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function Fv(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var XS = $v,
  ZS = Mv,
  eE = Uv,
  [Cl, tR] = xl("Tooltip", [Ov]),
  nh = Ov(),
  Bv = "TooltipProvider",
  tE = 700,
  lp = "tooltip.open",
  [rE, zv] = Cl(Bv),
  Hv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: r = tE,
        skipDelayDuration: n = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = e,
      o = b.useRef(!0),
      a = b.useRef(!1),
      l = b.useRef(0);
    return (
      b.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      p.jsx(rE, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: b.useCallback(() => {
          (window.clearTimeout(l.current), (o.current = !1));
        }, []),
        onClose: b.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), n)));
        }, [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
Hv.displayName = Bv;
var Wv = "Tooltip",
  [rR, Pl] = Cl(Wv),
  ju = "TooltipTrigger",
  nE = b.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = Pl(ju, r),
      i = zv(ju, r),
      o = nh(r),
      a = b.useRef(null),
      l = Mt(t, a, s.onTriggerChange),
      c = b.useRef(!1),
      u = b.useRef(!1),
      d = b.useCallback(() => (c.current = !1), []);
    return (
      b.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      p.jsx(XS, {
        asChild: !0,
        ...o,
        children: p.jsx(tt.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...n,
          ref: l,
          onPointerMove: Se(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !u.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (u.current = !0));
          }),
          onPointerLeave: Se(e.onPointerLeave, () => {
            (s.onTriggerLeave(), (u.current = !1));
          }),
          onPointerDown: Se(e.onPointerDown, () => {
            (s.open && s.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", d, { once: !0 }));
          }),
          onFocus: Se(e.onFocus, () => {
            c.current || s.onOpen();
          }),
          onBlur: Se(e.onBlur, s.onClose),
          onClick: Se(e.onClick, s.onClose),
        }),
      })
    );
  });
nE.displayName = ju;
var sE = "TooltipPortal",
  [nR, iE] = Cl(sE, { forceMount: void 0 }),
  Hs = "TooltipContent",
  Vv = b.forwardRef((e, t) => {
    const r = iE(Hs, e.__scopeTooltip),
      { forceMount: n = r.forceMount, side: s = "top", ...i } = e,
      o = Pl(Hs, e.__scopeTooltip);
    return p.jsx(Vd, {
      present: n || o.open,
      children: o.disableHoverableContent
        ? p.jsx(Kv, { side: s, ...i, ref: t })
        : p.jsx(oE, { side: s, ...i, ref: t }),
    });
  }),
  oE = b.forwardRef((e, t) => {
    const r = Pl(Hs, e.__scopeTooltip),
      n = zv(Hs, e.__scopeTooltip),
      s = b.useRef(null),
      i = Mt(t, s),
      [o, a] = b.useState(null),
      { trigger: l, onClose: c } = r,
      u = s.current,
      { onPointerInTransitChange: d } = n,
      f = b.useCallback(() => {
        (a(null), d(!1));
      }, [d]),
      h = b.useCallback(
        (w, v) => {
          const x = w.currentTarget,
            g = { x: w.clientX, y: w.clientY },
            m = dE(g, x.getBoundingClientRect()),
            y = hE(g, m),
            _ = fE(v.getBoundingClientRect()),
            k = mE([...y, ..._]);
          (a(k), d(!0));
        },
        [d],
      );
    return (
      b.useEffect(() => () => f(), [f]),
      b.useEffect(() => {
        if (l && u) {
          const w = (x) => h(x, u),
            v = (x) => h(x, l);
          return (
            l.addEventListener("pointerleave", w),
            u.addEventListener("pointerleave", v),
            () => {
              (l.removeEventListener("pointerleave", w),
                u.removeEventListener("pointerleave", v));
            }
          );
        }
      }, [l, u, h, f]),
      b.useEffect(() => {
        if (o) {
          const w = (v) => {
            const x = v.target,
              g = { x: v.clientX, y: v.clientY },
              m =
                (l == null ? void 0 : l.contains(x)) ||
                (u == null ? void 0 : u.contains(x)),
              y = !pE(g, o);
            m ? f() : y && (f(), c());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, u, o, c, f]),
      p.jsx(Kv, { ...e, ref: i })
    );
  }),
  [aE, lE] = Cl(Wv, { isInside: !1 }),
  cE = e_("TooltipContent"),
  Kv = b.forwardRef((e, t) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = e,
      l = Pl(Hs, r),
      c = nh(r),
      { onClose: u } = l;
    return (
      b.useEffect(
        () => (
          document.addEventListener(lp, u),
          () => document.removeEventListener(lp, u)
        ),
        [u],
      ),
      b.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && u();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, u]),
      p.jsx(Wd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: u,
        children: p.jsxs(ZS, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            p.jsx(cE, { children: n }),
            p.jsx(aE, {
              scope: r,
              isInside: !0,
              children: p.jsx(E_, {
                id: l.contentId,
                role: "tooltip",
                children: s || n,
              }),
            }),
          ],
        }),
      })
    );
  });
Vv.displayName = Hs;
var qv = "TooltipArrow",
  uE = b.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      s = nh(r);
    return lE(qv, r).isInside ? null : p.jsx(eE, { ...s, ...n, ref: t });
  });
uE.displayName = qv;
function dE(e, t) {
  const r = Math.abs(t.top - e.y),
    n = Math.abs(t.bottom - e.y),
    s = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(r, n, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function hE(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
      break;
    case "bottom":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
      break;
    case "left":
      n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
      break;
    case "right":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
      break;
  }
  return n;
}
function fE(e) {
  const { top: t, right: r, bottom: n, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: s, y: n },
  ];
}
function pE(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i],
      l = t[o],
      c = a.x,
      u = a.y,
      d = l.x,
      f = l.y;
    u > n != f > n && r < ((d - c) * (n - u)) / (f - u) + c && (s = !s);
  }
  return s;
}
function mE(e) {
  const t = e.slice();
  return (
    t.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0,
    ),
    gE(t)
  );
}
function gE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (; t.length >= 2;) {
      const i = t[t.length - 1],
        o = t[t.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    for (; r.length >= 2;) {
      const i = r[r.length - 1],
        o = r[r.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return (
    r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y
      ? t
      : t.concat(r)
  );
}
var yE = Hv,
  Gv = Vv;
const vE = yE,
  wE = b.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) =>
    p.jsx(Gv, {
      ref: n,
      sideOffset: t,
      className: un(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...r,
    }),
  );
wE.displayName = Gv.displayName;
const xE = iv(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          driver:
            "rounded-2xl bg-primary text-primary-foreground shadow-card hover:bg-primary/90 active:scale-[0.98]",
          success:
            "rounded-2xl bg-success text-success-foreground shadow-card hover:bg-success/90 active:scale-[0.98]",
          dangerOutline:
            "rounded-2xl border-2 border-destructive bg-background text-destructive hover:bg-destructive/10 active:scale-[0.98]",
          ink: "rounded-2xl bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          driver: "h-16 px-6 text-base font-bold",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Yt = b.forwardRef(
    ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => {
      const o = n ? X1 : "button";
      return p.jsx(o, {
        className: un(xE({ variant: t, size: r, className: e })),
        ref: i,
        ...s,
      });
    },
  );
Yt.displayName = "Button";
function bE(e, t, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : s(u.value).then(a, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
const _E = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t));
class sh extends Error {
  constructor(t, r = "FunctionsError", n) {
    (super(t), (this.name = r), (this.context = n));
  }
  toJSON() {
    return { name: this.name, message: this.message, context: this.context };
  }
}
class kE extends sh {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t,
    );
  }
}
class cp extends sh {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class up extends sh {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t,
    );
  }
}
var Au;
(function (e) {
  ((e.Any = "any"),
    (e.ApNortheast1 = "ap-northeast-1"),
    (e.ApNortheast2 = "ap-northeast-2"),
    (e.ApSouth1 = "ap-south-1"),
    (e.ApSoutheast1 = "ap-southeast-1"),
    (e.ApSoutheast2 = "ap-southeast-2"),
    (e.CaCentral1 = "ca-central-1"),
    (e.EuCentral1 = "eu-central-1"),
    (e.EuWest1 = "eu-west-1"),
    (e.EuWest2 = "eu-west-2"),
    (e.EuWest3 = "eu-west-3"),
    (e.SaEast1 = "sa-east-1"),
    (e.UsEast1 = "us-east-1"),
    (e.UsWest1 = "us-west-1"),
    (e.UsWest2 = "us-west-2"));
})(Au || (Au = {}));
class SE {
  constructor(t, { headers: r = {}, customFetch: n, region: s = Au.Any } = {}) {
    ((this.url = t),
      (this.headers = r),
      (this.region = s),
      (this.fetch = _E(n)));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t) {
    return bE(this, arguments, void 0, function* (r, n = {}) {
      var s;
      let i, o;
      try {
        const { headers: a, method: l, body: c, signal: u, timeout: d } = n;
        let f = {},
          { region: h } = n;
        h || (h = this.region);
        const w = new URL(`${this.url}/${r}`);
        h &&
          h !== "any" &&
          ((f["x-region"] = h), w.searchParams.set("forceFunctionRegion", h));
        let v;
        c &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && c instanceof Blob) || c instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (v = c))
            : typeof c == "string"
              ? ((f["Content-Type"] = "text/plain"), (v = c))
              : typeof FormData < "u" && c instanceof FormData
                ? (v = c)
                : ((f["Content-Type"] = "application/json"),
                  (v = JSON.stringify(c)))
          : c &&
              typeof c != "string" &&
              !(typeof Blob < "u" && c instanceof Blob) &&
              !(c instanceof ArrayBuffer) &&
              !(typeof FormData < "u" && c instanceof FormData)
            ? (v = JSON.stringify(c))
            : (v = c);
        let x = u;
        d &&
          ((o = new AbortController()),
          (i = setTimeout(() => o.abort(), d)),
          u
            ? ((x = o.signal), u.addEventListener("abort", () => o.abort()))
            : (x = o.signal));
        const g = yield this.fetch(w.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              a,
            ),
            body: v,
            signal: x,
          }).catch((k) => {
            throw new kE(k);
          }),
          m = g.headers.get("x-relay-error");
        if (m && m === "true") throw new cp(g);
        if (!g.ok) throw new up(g);
        let y = (
            (s = g.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          _;
        return (
          y === "application/json"
            ? (_ = yield g.json())
            : y === "application/octet-stream" || y === "application/pdf"
              ? (_ = yield g.blob())
              : y === "text/event-stream"
                ? (_ = g)
                : y === "multipart/form-data"
                  ? (_ = yield g.formData())
                  : (_ = yield g.text()),
          { data: _, error: null, response: g }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof up || a instanceof cp ? a.context : void 0,
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const Jv = 3,
  dp = (e) => Math.min(1e3 * 2 ** e, 3e4),
  EE = [520, 503],
  Qv = ["GET", "HEAD", "OPTIONS"];
var TE = class extends Error {
  constructor(e) {
    (super(e.message),
      (this.name = "PostgrestError"),
      (this.details = e.details),
      (this.hint = e.hint),
      (this.code = e.code));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code,
    };
  }
};
function hp(e, t) {
  return new Promise((r) => {
    if (t != null && t.aborted) {
      r();
      return;
    }
    const n = setTimeout(() => {
      (t == null || t.removeEventListener("abort", s), r());
    }, e);
    function s() {
      (clearTimeout(n), r());
    }
    t == null || t.addEventListener("abort", s);
  });
}
function CE(e, t, r, n) {
  return !(!n || r >= Jv || !Qv.includes(e) || !EE.includes(t));
}
var PE = class {
    constructor(e) {
      var t, r, n, s, i;
      ((this.shouldThrowOnError = !1),
        (this.retryEnabled = !0),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = new Headers(e.headers)),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError =
          (t = e.shouldThrowOnError) !== null && t !== void 0 ? t : !1),
        (this.signal = e.signal),
        (this.isMaybeSingle =
          (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1),
        (this.shouldStripNulls =
          (n = e.shouldStripNulls) !== null && n !== void 0 ? n : !1),
        (this.urlLengthLimit =
          (s = e.urlLengthLimit) !== null && s !== void 0 ? s : 8e3),
        (this.retryEnabled = (i = e.retry) !== null && i !== void 0 ? i : !0),
        e.fetch ? (this.fetch = e.fetch) : (this.fetch = fetch));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    stripNulls() {
      if (this.headers.get("Accept") === "text/csv")
        throw new Error("stripNulls() cannot be used with csv()");
      return ((this.shouldStripNulls = !0), this);
    }
    setHeader(e, t) {
      return (
        (this.headers = new Headers(this.headers)),
        this.headers.set(e, t),
        this
      );
    }
    retry(e) {
      return ((this.retryEnabled = e), this);
    }
    then(e, t) {
      var r = this;
      if (
        (this.schema === void 0 ||
          (["GET", "HEAD"].includes(this.method)
            ? this.headers.set("Accept-Profile", this.schema)
            : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json"),
        this.shouldStripNulls)
      ) {
        const o = this.headers.get("Accept");
        o === "application/vnd.pgrst.object+json"
          ? this.headers.set(
              "Accept",
              "application/vnd.pgrst.object+json;nulls=stripped",
            )
          : (!o || o === "application/json") &&
            this.headers.set(
              "Accept",
              "application/vnd.pgrst.array+json;nulls=stripped",
            );
      }
      const n = this.fetch;
      let i = (async () => {
        let o = 0;
        for (;;) {
          const c = new Headers(r.headers);
          o > 0 && c.set("X-Retry-Count", String(o));
          let u;
          try {
            u = await n(r.url.toString(), {
              method: r.method,
              headers: c,
              body: JSON.stringify(r.body, (d, f) =>
                typeof f == "bigint" ? f.toString() : f,
              ),
              signal: r.signal,
            });
          } catch (d) {
            if (
              (d == null ? void 0 : d.name) === "AbortError" ||
              (d == null ? void 0 : d.code) === "ABORT_ERR" ||
              !Qv.includes(r.method)
            )
              throw d;
            if (r.retryEnabled && o < Jv) {
              const f = dp(o);
              (o++, await hp(f, r.signal));
              continue;
            }
            throw d;
          }
          if (CE(r.method, u.status, o, r.retryEnabled)) {
            var a, l;
            const d =
                (a =
                  (l = u.headers) === null || l === void 0
                    ? void 0
                    : l.get("Retry-After")) !== null && a !== void 0
                  ? a
                  : null,
              f = d !== null ? Math.max(0, parseInt(d, 10) || 0) * 1e3 : dp(o);
            (await u.text(), o++, await hp(f, r.signal));
            continue;
          }
          return await r.processResponse(u);
        }
      })();
      return (
        this.shouldThrowOnError ||
          (i = i.catch((o) => {
            var a;
            let l = "",
              c = "",
              u = "";
            const d = o == null ? void 0 : o.cause;
            if (d) {
              var f, h, w, v;
              const m =
                  (f = d == null ? void 0 : d.message) !== null && f !== void 0
                    ? f
                    : "",
                y =
                  (h = d == null ? void 0 : d.code) !== null && h !== void 0
                    ? h
                    : "";
              ((l = `${(w = o == null ? void 0 : o.name) !== null && w !== void 0 ? w : "FetchError"}: ${o == null ? void 0 : o.message}`),
                (l += `

Caused by: ${(v = d == null ? void 0 : d.name) !== null && v !== void 0 ? v : "Error"}: ${m}`),
                y && (l += ` (${y})`),
                d != null &&
                  d.stack &&
                  (l += `
${d.stack}`));
            } else {
              var x;
              l =
                (x = o == null ? void 0 : o.stack) !== null && x !== void 0
                  ? x
                  : "";
            }
            const g = this.url.toString().length;
            return (
              (o == null ? void 0 : o.name) === "AbortError" ||
              (o == null ? void 0 : o.code) === "ABORT_ERR"
                ? ((u = ""),
                  (c = "Request was aborted (timeout or manual cancellation)"),
                  g > this.urlLengthLimit &&
                    (c += `. Note: Your request URL is ${g} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((d == null ? void 0 : d.name) === "HeadersOverflowError" ||
                    (d == null ? void 0 : d.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((u = ""),
                  (c = "HTTP headers exceeded server limits (typically 16KB)"),
                  g > this.urlLengthLimit &&
                    (c += `. Your request URL is ${g} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                success: !1,
                error: {
                  message: `${(a = o == null ? void 0 : o.name) !== null && a !== void 0 ? a : "FetchError"}: ${o == null ? void 0 : o.message}`,
                  details: l,
                  hint: c,
                  code: u,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        i.then(e, t)
      );
    }
    async processResponse(e) {
      var t = this;
      let r = null,
        n = null,
        s = null,
        i = e.status,
        o = e.statusText;
      if (e.ok) {
        var a, l;
        if (t.method !== "HEAD") {
          var c;
          const f = await e.text();
          f === "" ||
            (t.headers.get("Accept") === "text/csv" ||
            (t.headers.get("Accept") &&
              !((c = t.headers.get("Accept")) === null || c === void 0) &&
              c.includes("application/vnd.pgrst.plan+text"))
              ? (n = f)
              : (n = JSON.parse(f)));
        }
        const u =
            (a = t.headers.get("Prefer")) === null || a === void 0
              ? void 0
              : a.match(/count=(exact|planned|estimated)/),
          d =
            (l = e.headers.get("content-range")) === null || l === void 0
              ? void 0
              : l.split("/");
        (u && d && d.length > 1 && (s = parseInt(d[1])),
          t.isMaybeSingle &&
            Array.isArray(n) &&
            (n.length > 1
              ? ((r = {
                  code: "PGRST116",
                  details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (n = null),
                (s = null),
                (i = 406),
                (o = "Not Acceptable"))
              : n.length === 1
                ? (n = n[0])
                : (n = null)));
      } else {
        const u = await e.text();
        try {
          ((r = JSON.parse(u)),
            Array.isArray(r) &&
              e.status === 404 &&
              ((n = []), (r = null), (i = 200), (o = "OK")));
        } catch {
          e.status === 404 && u === ""
            ? ((i = 204), (o = "No Content"))
            : (r = { message: u });
        }
        if (r && t.shouldThrowOnError) throw new TE(r);
      }
      return {
        success: r === null,
        error: r,
        data: n,
        count: s,
        status: i,
        statusText: o,
      };
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  RE = class extends PE {
    select(e) {
      let t = !1;
      const r = (e ?? "*")
        .split("")
        .map((n) => (/\s/.test(n) && !t ? "" : (n === '"' && (t = !t), n)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: t = !0,
        nullsFirst: r,
        foreignTable: n,
        referencedTable: s = n,
      } = {},
    ) {
      const i = s ? `${s}.order` : "order",
        o = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return (this.url.searchParams.set(n, `${e}`), this);
    }
    range(e, t, { foreignTable: r, referencedTable: n = r } = {}) {
      const s = typeof n > "u" ? "offset" : `${n}.offset`,
        i = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
        this.url.searchParams.set(s, `${e}`),
        this.url.searchParams.set(i, `${t - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return ((this.signal = e), this);
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        this
      );
    }
    maybeSingle() {
      return ((this.isMaybeSingle = !0), this);
    }
    csv() {
      return (this.headers.set("Accept", "text/csv"), this);
    }
    geojson() {
      return (this.headers.set("Accept", "application/geo+json"), this);
    }
    explain({
      analyze: e = !1,
      verbose: t = !1,
      settings: r = !1,
      buffers: n = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var o;
      const a = [
          e ? "analyze" : null,
          t ? "verbose" : null,
          r ? "settings" : null,
          n ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (o = this.headers.get("Accept")) !== null && o !== void 0
            ? o
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`,
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return (this.headers.append("Prefer", "tx=rollback"), this);
    }
    returns() {
      return this;
    }
    maxAffected(e) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${e}`),
        this
      );
    }
  };
const fp = new RegExp("[,()]");
var Zn = class extends RE {
    eq(e, t) {
      return (this.url.searchParams.append(e, `eq.${t}`), this);
    }
    neq(e, t) {
      return (this.url.searchParams.append(e, `neq.${t}`), this);
    }
    gt(e, t) {
      return (this.url.searchParams.append(e, `gt.${t}`), this);
    }
    gte(e, t) {
      return (this.url.searchParams.append(e, `gte.${t}`), this);
    }
    lt(e, t) {
      return (this.url.searchParams.append(e, `lt.${t}`), this);
    }
    lte(e, t) {
      return (this.url.searchParams.append(e, `lte.${t}`), this);
    }
    like(e, t) {
      return (this.url.searchParams.append(e, `like.${t}`), this);
    }
    likeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
        this
      );
    }
    likeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
        this
      );
    }
    ilike(e, t) {
      return (this.url.searchParams.append(e, `ilike.${t}`), this);
    }
    ilikeAllOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
        this
      );
    }
    ilikeAnyOf(e, t) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
        this
      );
    }
    regexMatch(e, t) {
      return (this.url.searchParams.append(e, `match.${t}`), this);
    }
    regexIMatch(e, t) {
      return (this.url.searchParams.append(e, `imatch.${t}`), this);
    }
    is(e, t) {
      return (this.url.searchParams.append(e, `is.${t}`), this);
    }
    isDistinct(e, t) {
      return (this.url.searchParams.append(e, `isdistinct.${t}`), this);
    }
    in(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && fp.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return (this.url.searchParams.append(e, `in.(${r})`), this);
    }
    notIn(e, t) {
      const r = Array.from(new Set(t))
        .map((n) => (typeof n == "string" && fp.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return (this.url.searchParams.append(e, `not.in.(${r})`), this);
    }
    contains(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cs.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
        this
      );
    }
    containedBy(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `cd.${t}`)
          : Array.isArray(t)
            ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
        this
      );
    }
    rangeGt(e, t) {
      return (this.url.searchParams.append(e, `sr.${t}`), this);
    }
    rangeGte(e, t) {
      return (this.url.searchParams.append(e, `nxl.${t}`), this);
    }
    rangeLt(e, t) {
      return (this.url.searchParams.append(e, `sl.${t}`), this);
    }
    rangeLte(e, t) {
      return (this.url.searchParams.append(e, `nxr.${t}`), this);
    }
    rangeAdjacent(e, t) {
      return (this.url.searchParams.append(e, `adj.${t}`), this);
    }
    overlaps(e, t) {
      return (
        typeof t == "string"
          ? this.url.searchParams.append(e, `ov.${t}`)
          : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
        this
      );
    }
    textSearch(e, t, { config: r, type: n } = {}) {
      let s = "";
      n === "plain"
        ? (s = "pl")
        : n === "phrase"
          ? (s = "ph")
          : n === "websearch" && (s = "w");
      const i = r === void 0 ? "" : `(${r})`;
      return (this.url.searchParams.append(e, `${s}fts${i}.${t}`), this);
    }
    match(e) {
      return (
        Object.entries(e)
          .filter(([t, r]) => r !== void 0)
          .forEach(([t, r]) => {
            this.url.searchParams.append(t, `eq.${r}`);
          }),
        this
      );
    }
    not(e, t, r) {
      return (this.url.searchParams.append(e, `not.${t}.${r}`), this);
    }
    or(e, { foreignTable: t, referencedTable: r = t } = {}) {
      const n = r ? `${r}.or` : "or";
      return (this.url.searchParams.append(n, `(${e})`), this);
    }
    filter(e, t, r) {
      return (this.url.searchParams.append(e, `${t}.${r}`), this);
    }
  },
  jE = class {
    constructor(
      e,
      {
        headers: t = {},
        schema: r,
        fetch: n,
        urlLengthLimit: s = 8e3,
        retry: i,
      },
    ) {
      ((this.url = e),
        (this.headers = new Headers(t)),
        (this.schema = r),
        (this.fetch = n),
        (this.urlLengthLimit = s),
        (this.retry = i));
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(e, t) {
      const { head: r = !1, count: n } = t ?? {},
        s = r ? "HEAD" : "GET";
      let i = !1;
      const o = (e ?? "*")
          .split("")
          .map((c) => (/\s/.test(c) && !i ? "" : (c === '"' && (i = !i), c)))
          .join(""),
        { url: a, headers: l } = this.cloneRequestState();
      return (
        a.searchParams.set("select", o),
        n && l.append("Prefer", `count=${n}`),
        new Zn({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    insert(e, { count: t, defaultToNull: r = !0 } = {}) {
      var n;
      const s = "POST",
        { url: i, headers: o } = this.cloneRequestState();
      if (
        (t && o.append("Prefer", `count=${t}`),
        r || o.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const a = e.reduce((l, c) => l.concat(Object.keys(c)), []);
        if (a.length > 0) {
          const l = [...new Set(a)].map((c) => `"${c}"`);
          i.searchParams.set("columns", l.join(","));
        }
      }
      return new Zn({
        method: s,
        url: i,
        headers: o,
        schema: this.schema,
        body: e,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    upsert(
      e,
      {
        onConflict: t,
        ignoreDuplicates: r = !1,
        count: n,
        defaultToNull: s = !0,
      } = {},
    ) {
      var i;
      const o = "POST",
        { url: a, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        t !== void 0 && a.searchParams.set("on_conflict", t),
        n && l.append("Prefer", `count=${n}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(e))
      ) {
        const c = e.reduce((u, d) => u.concat(Object.keys(d)), []);
        if (c.length > 0) {
          const u = [...new Set(c)].map((d) => `"${d}"`);
          a.searchParams.set("columns", u.join(","));
        }
      }
      return new Zn({
        method: o,
        url: a,
        headers: l,
        schema: this.schema,
        body: e,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      });
    }
    update(e, { count: t } = {}) {
      var r;
      const n = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        t && i.append("Prefer", `count=${t}`),
        new Zn({
          method: n,
          url: s,
          headers: i,
          schema: this.schema,
          body: e,
          fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
    delete({ count: e } = {}) {
      var t;
      const r = "DELETE",
        { url: n, headers: s } = this.cloneRequestState();
      return (
        e && s.append("Prefer", `count=${e}`),
        new Zn({
          method: r,
          url: n,
          headers: s,
          schema: this.schema,
          fetch: (t = this.fetch) !== null && t !== void 0 ? t : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        })
      );
    }
  };
function Yi(e) {
  "@babel/helpers - typeof";
  return (
    (Yi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yi(e)
  );
}
function AE(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NE(e) {
  var t = AE(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function OE(e, t, r) {
  return (
    (t = NE(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pp(Object(r), !0).forEach(function (n) {
          OE(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var IE = class Yv {
  constructor(
    t,
    {
      headers: r = {},
      schema: n,
      fetch: s,
      timeout: i,
      urlLengthLimit: o = 8e3,
      retry: a,
    } = {},
  ) {
    ((this.url = t),
      (this.headers = new Headers(r)),
      (this.schemaName = n),
      (this.urlLengthLimit = o));
    const l = s ?? globalThis.fetch;
    (i !== void 0 && i > 0
      ? (this.fetch = (c, u) => {
          const d = new AbortController(),
            f = setTimeout(() => d.abort(), i),
            h = u == null ? void 0 : u.signal;
          if (h) {
            if (h.aborted) return (clearTimeout(f), l(c, u));
            const w = () => {
              (clearTimeout(f), d.abort());
            };
            return (
              h.addEventListener("abort", w, { once: !0 }),
              l(c, Wo(Wo({}, u), {}, { signal: d.signal })).finally(() => {
                (clearTimeout(f), h.removeEventListener("abort", w));
              })
            );
          }
          return l(c, Wo(Wo({}, u), {}, { signal: d.signal })).finally(() =>
            clearTimeout(f),
          );
        })
      : (this.fetch = l),
      (this.retry = a));
  }
  from(t) {
    if (!t || typeof t != "string" || t.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string.",
      );
    return new jE(new URL(`${this.url}/${t}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  schema(t) {
    return new Yv(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry,
    });
  }
  rpc(t, r = {}, { head: n = !1, get: s = !1, count: i } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${t}`);
    let c;
    const u = (h) =>
        h !== null && typeof h == "object" && (!Array.isArray(h) || h.some(u)),
      d = n && Object.values(r).some(u);
    d
      ? ((a = "POST"), (c = r))
      : n || s
        ? ((a = n ? "HEAD" : "GET"),
          Object.entries(r)
            .filter(([h, w]) => w !== void 0)
            .map(([h, w]) => [
              h,
              Array.isArray(w) ? `{${w.join(",")}}` : `${w}`,
            ])
            .forEach(([h, w]) => {
              l.searchParams.append(h, w);
            }))
        : ((a = "POST"), (c = r));
    const f = new Headers(this.headers);
    return (
      d
        ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
        : i && f.set("Prefer", `count=${i}`),
      new Zn({
        method: a,
        url: l,
        headers: f,
        schema: this.schemaName,
        body: c,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry,
      })
    );
  }
};
class LE {
  constructor() {}
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const r = globalThis;
    if (typeof globalThis < "u" && typeof r.WebSocket < "u")
      return { type: "native", wsConstructor: r.WebSocket };
    const n = typeof global < "u" ? global : void 0;
    if (n && typeof n.WebSocket < "u")
      return { type: "native", wsConstructor: n.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof r.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && r.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((t = navigator.userAgent) === null || t === void 0) &&
        t.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const s = globalThis.process;
    if (s) {
      const i = s.versions;
      if (i && i.node) {
        const o = i.node,
          a = parseInt(o.replace(/^v/, "").split(".")[0]);
        return a >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", wsConstructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${a} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${a} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.wsConstructor) return t.wsConstructor;
    let r = t.error || "WebSocket not supported in this environment.";
    throw (
      t.workaround &&
        (r += `

Suggested solution: ${t.workaround}`),
      new Error(r)
    );
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const $E = "2.105.4",
  ME = `realtime-js/${$E}`,
  DE = "1.0.0",
  Xv = "2.0.0",
  UE = Xv,
  FE = 1e4,
  BE = 100,
  Ir = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  Zv = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
    access_token: "access_token",
  },
  Nu = {
    connecting: "connecting",
    open: "open",
    closing: "closing",
    closed: "closed",
  };
class zE {
  constructor(t) {
    ((this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = t ?? []));
  }
  encode(t, r) {
    if (
      t.event === this.BROADCAST_EVENT &&
      !(t.payload instanceof ArrayBuffer) &&
      typeof t.payload.event == "string"
    )
      return r(this._binaryEncodeUserBroadcastPush(t));
    let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(t) {
    var r;
    return this._isArrayBuffer(
      (r = t.payload) === null || r === void 0 ? void 0 : r.payload,
    )
      ? this._encodeBinaryUserBroadcastPush(t)
      : this._encodeJsonUserBroadcastPush(t);
  }
  _encodeBinaryUserBroadcastPush(t) {
    var r, n;
    const s =
      (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
        null && n !== void 0
        ? n
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(t, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(t) {
    var r, n;
    const s =
        (n = (r = t.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && n !== void 0
          ? n
          : {},
      o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(t, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(t, r, n) {
    var s, i;
    const o = t.topic,
      a = (s = t.ref) !== null && s !== void 0 ? s : "",
      l = (i = t.join_ref) !== null && i !== void 0 ? i : "",
      c = t.payload.event,
      u = this.allowedMetadataKeys
        ? this._pick(t.payload, this.allowedMetadataKeys)
        : {},
      d = Object.keys(u).length === 0 ? "" : JSON.stringify(u);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (c.length > 255)
      throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        a.length +
        o.length +
        c.length +
        d.length,
      h = new ArrayBuffer(this.HEADER_LENGTH + f);
    let w = new DataView(h),
      v = 0;
    (w.setUint8(v++, this.KINDS.userBroadcastPush),
      w.setUint8(v++, l.length),
      w.setUint8(v++, a.length),
      w.setUint8(v++, o.length),
      w.setUint8(v++, c.length),
      w.setUint8(v++, d.length),
      w.setUint8(v++, r),
      Array.from(l, (g) => w.setUint8(v++, g.charCodeAt(0))),
      Array.from(a, (g) => w.setUint8(v++, g.charCodeAt(0))),
      Array.from(o, (g) => w.setUint8(v++, g.charCodeAt(0))),
      Array.from(c, (g) => w.setUint8(v++, g.charCodeAt(0))),
      Array.from(d, (g) => w.setUint8(v++, g.charCodeAt(0))));
    var x = new Uint8Array(h.byteLength + n.byteLength);
    return (
      x.set(new Uint8Array(h), 0),
      x.set(new Uint8Array(n), h.byteLength),
      x.buffer
    );
  }
  decode(t, r) {
    if (this._isArrayBuffer(t)) {
      let n = this._binaryDecode(t);
      return r(n);
    }
    if (typeof t == "string") {
      const n = JSON.parse(t),
        [s, i, o, a, l] = n;
      return r({ join_ref: s, ref: i, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(t) {
    const r = new DataView(t),
      n = r.getUint8(0),
      s = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(t, r, s);
    }
  }
  _decodeUserBroadcast(t, r, n) {
    const s = r.getUint8(1),
      i = r.getUint8(2),
      o = r.getUint8(3),
      a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const c = n.decode(t.slice(l, l + s));
    l = l + s;
    const u = n.decode(t.slice(l, l + i));
    l = l + i;
    const d = n.decode(t.slice(l, l + o));
    l = l + o;
    const f = t.slice(l, t.byteLength),
      h = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
      w = { type: this.BROADCAST_EVENT, event: u, payload: h };
    return (
      o > 0 && (w.meta = JSON.parse(d)),
      {
        join_ref: null,
        ref: null,
        topic: c,
        event: this.BROADCAST_EVENT,
        payload: w,
      }
    );
  }
  _isArrayBuffer(t) {
    var r;
    return (
      t instanceof ArrayBuffer ||
      ((r = t == null ? void 0 : t.constructor) === null || r === void 0
        ? void 0
        : r.name) === "ArrayBuffer"
    );
  }
  _pick(t, r) {
    return !t || typeof t != "object"
      ? {}
      : Object.fromEntries(Object.entries(t).filter(([n]) => r.includes(n)));
  }
}
var ie;
(function (e) {
  ((e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange"));
})(ie || (ie = {}));
const mp = (e, t, r = {}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return t
      ? Object.keys(t).reduce((i, o) => ((i[o] = HE(o, e, t, s)), i), {})
      : {};
  },
  HE = (e, t, r, n) => {
    const s = t.find((a) => a.name === e),
      i = s == null ? void 0 : s.type,
      o = r[e];
    return i && !n.includes(i) ? e0(i, o) : Ou(o);
  },
  e0 = (e, t) => {
    if (e.charAt(0) === "_") {
      const r = e.slice(1, e.length);
      return qE(t, r);
    }
    switch (e) {
      case ie.bool:
        return WE(t);
      case ie.float4:
      case ie.float8:
      case ie.int2:
      case ie.int4:
      case ie.int8:
      case ie.numeric:
      case ie.oid:
        return VE(t);
      case ie.json:
      case ie.jsonb:
        return KE(t);
      case ie.timestamp:
        return GE(t);
      case ie.abstime:
      case ie.date:
      case ie.daterange:
      case ie.int4range:
      case ie.int8range:
      case ie.money:
      case ie.reltime:
      case ie.text:
      case ie.time:
      case ie.timestamptz:
      case ie.timetz:
      case ie.tsrange:
      case ie.tstzrange:
        return Ou(t);
      default:
        return Ou(t);
    }
  },
  Ou = (e) => e,
  WE = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  VE = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  KE = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  },
  qE = (e, t) => {
    if (typeof e != "string") return e;
    const r = e.length - 1,
      n = e[r];
    if (e[0] === "{" && n === "}") {
      let i;
      const o = e.slice(1, r);
      try {
        i = JSON.parse("[" + o + "]");
      } catch {
        i = o ? o.split(",") : [];
      }
      return i.map((a) => e0(t, a));
    }
    return e;
  },
  GE = (e) => (typeof e == "string" ? e.replace(" ", "T") : e),
  t0 = (e) => {
    const t = new URL(e);
    return (
      (t.protocol = t.protocol.replace(/^ws/i, "http")),
      (t.pathname = t.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      t.pathname === "" || t.pathname === "/"
        ? (t.pathname = "/api/broadcast")
        : (t.pathname = t.pathname + "/api/broadcast"),
      t.href
    );
  };
var Ti = (e) =>
    typeof e == "function"
      ? e
      : function () {
          return e;
        },
  JE = typeof self < "u" ? self : null,
  es = typeof window < "u" ? window : null,
  Ht = JE || es || globalThis,
  QE = "2.0.0",
  YE = 1e4,
  XE = 1e3,
  qt = { connecting: 0, open: 1, closing: 2, closed: 3 },
  qe = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  sr = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
  },
  Iu = { longpoll: "longpoll", websocket: "websocket" },
  ZE = { complete: 4 },
  Lu = "base64url.bearer.phx.",
  Vo = class {
    constructor(e, t, r, n) {
      ((this.channel = e),
        (this.event = t),
        (this.payload =
          r ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = n),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0));
    }
    resend(e) {
      ((this.timeout = e), this.reset(), this.send());
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      (this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1));
    }
    destroy() {
      (this.cancelRefEvent(), this.cancelTimeout());
    }
    matchReceive({ status: e, response: t, _ref: r }) {
      this.recHooks.filter((n) => n.status === e).forEach((n) => n.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
    }
    startTimeout() {
      (this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          (this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e));
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout)));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  r0 = class {
    constructor(e, t) {
      ((this.callback = e),
        (this.timerCalc = t),
        (this.timer = void 0),
        (this.tries = 0));
    }
    reset() {
      ((this.tries = 0), clearTimeout(this.timer));
    }
    scheduleTimeout() {
      (clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            ((this.tries = this.tries + 1), this.callback());
          },
          this.timerCalc(this.tries + 1),
        )));
    }
  },
  eT = class {
    constructor(e, t, r) {
      ((this.state = qe.closed),
        (this.topic = e),
        (this.params = Ti(t || {})),
        (this.socket = r),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new Vo(this, sr.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new r0(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset()),
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
          }),
        ),
        this.joinPush.receive("ok", () => {
          ((this.state = qe.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((n) => n.send()),
            (this.pushBuffer = []));
        }),
        this.joinPush.receive("error", (n) => {
          ((this.state = qe.errored),
            this.socket.hasLogger() &&
              this.socket.log("channel", `error ${this.topic}`, n),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.onClose(() => {
          (this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log("channel", `close ${this.topic}`),
            (this.state = qe.closed),
            this.socket.remove(this));
        }),
        this.onError((n) => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `error ${this.topic}`, n),
            this.isJoining() && this.joinPush.reset(),
            (this.state = qe.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          (this.socket.hasLogger() &&
            this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            new Vo(this, sr.leave, Ti({}), this.timeout).send(),
            (this.state = qe.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
        }),
        this.on(sr.reply, (n, s) => {
          this.trigger(this.replyEventName(s), n);
        }));
    }
    join(e = this.timeout) {
      if (this.joinedOnce)
        throw new Error(
          "tried to join multiple times. 'join' can only be called a single time per channel instance",
        );
      return (
        (this.timeout = e),
        (this.joinedOnce = !0),
        this.rejoin(),
        this.joinPush
      );
    }
    teardown() {
      (this.pushBuffer.forEach((e) => e.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = qe.closed),
        (this.bindings = []));
    }
    onClose(e) {
      this.on(sr.close, e);
    }
    onError(e) {
      return this.on(sr.error, (t) => e(t));
    }
    on(e, t) {
      let r = this.bindingRef++;
      return (this.bindings.push({ event: e, ref: r, callback: t }), r);
    }
    off(e, t) {
      this.bindings = this.bindings.filter(
        (r) => !(r.event === e && (typeof t > "u" || t === r.ref)),
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(e, t, r = this.timeout) {
      if (((t = t || {}), !this.joinedOnce))
        throw new Error(
          `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
        );
      let n = new Vo(
        this,
        e,
        function () {
          return t;
        },
        r,
      );
      return (
        this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)),
        n
      );
    }
    leave(e = this.timeout) {
      (this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = qe.leaving));
      let t = () => {
          (this.socket.hasLogger() &&
            this.socket.log("channel", `leave ${this.topic}`),
            this.trigger(sr.close, "leave"));
        },
        r = new Vo(this, sr.leave, Ti({}), e);
      return (
        r.receive("ok", () => t()).receive("timeout", () => t()),
        r.send(),
        this.canPush() || r.trigger("ok", {}),
        r
      );
    }
    onMessage(e, t, r) {
      return t;
    }
    filterBindings(e, t, r) {
      return !0;
    }
    isMember(e, t, r, n) {
      return this.topic !== e
        ? !1
        : n && n !== this.joinRef()
          ? (this.socket.hasLogger() &&
              this.socket.log("channel", "dropping outdated message", {
                topic: e,
                event: t,
                payload: r,
                joinRef: n,
              }),
            !1)
          : !0;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(e = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = qe.joining),
        this.joinPush.resend(e));
    }
    trigger(e, t, r, n) {
      let s = this.onMessage(e, t, r, n);
      if (t && !s)
        throw new Error(
          "channel onMessage callbacks must return the payload, modified or unmodified",
        );
      let i = this.bindings.filter(
        (o) => o.event === e && this.filterBindings(o, t, r),
      );
      for (let o = 0; o < i.length; o++)
        i[o].callback(s, r, n || this.joinRef());
    }
    replyEventName(e) {
      return `chan_reply_${e}`;
    }
    isClosed() {
      return this.state === qe.closed;
    }
    isErrored() {
      return this.state === qe.errored;
    }
    isJoined() {
      return this.state === qe.joined;
    }
    isJoining() {
      return this.state === qe.joining;
    }
    isLeaving() {
      return this.state === qe.leaving;
    }
  },
  Ka = class {
    static request(e, t, r, n, s, i, o) {
      if (Ht.XDomainRequest) {
        let a = new Ht.XDomainRequest();
        return this.xdomainRequest(a, e, t, n, s, i, o);
      } else if (Ht.XMLHttpRequest) {
        let a = new Ht.XMLHttpRequest();
        return this.xhrRequest(a, e, t, r, n, s, i, o);
      } else {
        if (Ht.fetch && Ht.AbortController)
          return this.fetchRequest(e, t, r, n, s, i, o);
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(e, t, r, n, s, i, o) {
      let a = { method: e, headers: r, body: n },
        l = null;
      return (
        s &&
          ((l = new AbortController()),
          setTimeout(() => l.abort(), s),
          (a.signal = l.signal)),
        Ht.fetch(t, a)
          .then((c) => c.text())
          .then((c) => this.parseJSON(c))
          .then((c) => o && o(c))
          .catch((c) => {
            c.name === "AbortError" && i ? i() : o && o(null);
          }),
        l
      );
    }
    static xdomainRequest(e, t, r, n, s, i, o) {
      return (
        (e.timeout = s),
        e.open(t, r),
        (e.onload = () => {
          let a = this.parseJSON(e.responseText);
          o && o(a);
        }),
        i && (e.ontimeout = i),
        (e.onprogress = () => {}),
        e.send(n),
        e
      );
    }
    static xhrRequest(e, t, r, n, s, i, o, a) {
      (e.open(t, r, !0), (e.timeout = i));
      for (let [l, c] of Object.entries(n)) e.setRequestHeader(l, c);
      return (
        (e.onerror = () => a && a(null)),
        (e.onreadystatechange = () => {
          if (e.readyState === ZE.complete && a) {
            let l = this.parseJSON(e.responseText);
            a(l);
          }
        }),
        o && (e.ontimeout = o),
        e.send(s),
        e
      );
    }
    static parseJSON(e) {
      if (!e || e === "") return null;
      try {
        return JSON.parse(e);
      } catch {
        return (
          console && console.log("failed to parse JSON response", e),
          null
        );
      }
    }
    static serialize(e, t) {
      let r = [];
      for (var n in e) {
        if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
        let s = t ? `${t}[${n}]` : n,
          i = e[n];
        typeof i == "object"
          ? r.push(this.serialize(i, s))
          : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(i));
      }
      return r.join("&");
    }
    static appendParams(e, t) {
      if (Object.keys(t).length === 0) return e;
      let r = e.match(/\?/) ? "&" : "?";
      return `${e}${r}${this.serialize(t)}`;
    }
  },
  tT = (e) => {
    let t = "",
      r = new Uint8Array(e),
      n = r.byteLength;
    for (let s = 0; s < n; s++) t += String.fromCharCode(r[s]);
    return btoa(t);
  },
  Gn = class {
    constructor(e, t) {
      (t &&
        t.length === 2 &&
        t[1].startsWith(Lu) &&
        (this.authToken = atob(t[1].slice(Lu.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = qt.connecting),
        setTimeout(() => this.poll(), 0));
    }
    normalizeEndpoint(e) {
      return e
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + Iu.websocket), "$1/" + Iu.longpoll);
    }
    endpointURL() {
      return Ka.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, r) {
      (this.close(e, t, r), (this.readyState = qt.connecting));
    }
    ontimeout() {
      (this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1));
    }
    isActive() {
      return this.readyState === qt.open || this.readyState === qt.connecting;
    }
    poll() {
      const e = { Accept: "application/json" };
      (this.authToken && (e["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax(
          "GET",
          e,
          null,
          () => this.ontimeout(),
          (t) => {
            if (t) {
              var { status: r, token: n, messages: s } = t;
              if (r === 410 && this.token !== null) {
                (this.onerror(410),
                  this.closeAndRetry(3410, "session_gone", !1));
                return;
              }
              this.token = n;
            } else r = 0;
            switch (r) {
              case 200:
                (s.forEach((i) => {
                  setTimeout(() => this.onmessage({ data: i }), 0);
                }),
                  this.poll());
                break;
              case 204:
                this.poll();
                break;
              case 410:
                ((this.readyState = qt.open), this.onopen({}), this.poll());
                break;
              case 403:
                (this.onerror(403), this.close(1008, "forbidden", !1));
                break;
              case 0:
              case 500:
                (this.onerror(500),
                  this.closeAndRetry(1011, "internal server error", 500));
                break;
              default:
                throw new Error(`unhandled poll status ${r}`);
            }
          },
        ));
    }
    send(e) {
      (typeof e != "string" && (e = tT(e)),
        this.currentBatch
          ? this.currentBatch.push(e)
          : this.awaitingBatchAck
            ? this.batchBuffer.push(e)
            : ((this.currentBatch = [e]),
              (this.currentBatchTimer = setTimeout(() => {
                (this.batchSend(this.currentBatch), (this.currentBatch = null));
              }, 0))));
    }
    batchSend(e) {
      ((this.awaitingBatchAck = !0),
        this.ajax(
          "POST",
          { "Content-Type": "application/x-ndjson" },
          e.join(`
`),
          () => this.onerror("timeout"),
          (t) => {
            ((this.awaitingBatchAck = !1),
              !t || t.status !== 200
                ? (this.onerror(t && t.status),
                  this.closeAndRetry(1011, "internal server error", !1))
                : this.batchBuffer.length > 0 &&
                  (this.batchSend(this.batchBuffer), (this.batchBuffer = [])));
          },
        ));
    }
    close(e, t, r) {
      for (let s of this.reqs) s.abort();
      this.readyState = qt.closed;
      let n = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: r },
      );
      ((this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < "u"
          ? this.onclose(new CloseEvent("close", n))
          : this.onclose(n));
    }
    ajax(e, t, r, n, s) {
      let i,
        o = () => {
          (this.reqs.delete(i), n());
        };
      ((i = Ka.request(e, this.endpointURL(), t, r, this.timeout, o, (a) => {
        (this.reqs.delete(i), this.isActive() && s(a));
      })),
        this.reqs.add(i));
    }
  },
  rT = class pi {
    constructor(t, r = {}) {
      let n = r.events || { state: "presence_state", diff: "presence_diff" };
      ((this.state = {}),
        (this.pendingDiffs = []),
        (this.channel = t),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(n.state, (s) => {
          let { onJoin: i, onLeave: o, onSync: a } = this.caller;
          ((this.joinRef = this.channel.joinRef()),
            (this.state = pi.syncState(this.state, s, i, o)),
            this.pendingDiffs.forEach((l) => {
              this.state = pi.syncDiff(this.state, l, i, o);
            }),
            (this.pendingDiffs = []),
            a());
        }),
        this.channel.on(n.diff, (s) => {
          let { onJoin: i, onLeave: o, onSync: a } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(s)
            : ((this.state = pi.syncDiff(this.state, s, i, o)), a());
        }));
    }
    onJoin(t) {
      this.caller.onJoin = t;
    }
    onLeave(t) {
      this.caller.onLeave = t;
    }
    onSync(t) {
      this.caller.onSync = t;
    }
    list(t) {
      return pi.list(this.state, t);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(t, r, n, s) {
      let i = this.clone(t),
        o = {},
        a = {};
      return (
        this.map(i, (l, c) => {
          r[l] || (a[l] = c);
        }),
        this.map(r, (l, c) => {
          let u = i[l];
          if (u) {
            let d = c.metas.map((v) => v.phx_ref),
              f = u.metas.map((v) => v.phx_ref),
              h = c.metas.filter((v) => f.indexOf(v.phx_ref) < 0),
              w = u.metas.filter((v) => d.indexOf(v.phx_ref) < 0);
            (h.length > 0 && ((o[l] = c), (o[l].metas = h)),
              w.length > 0 && ((a[l] = this.clone(u)), (a[l].metas = w)));
          } else o[l] = c;
        }),
        this.syncDiff(i, { joins: o, leaves: a }, n, s)
      );
    }
    static syncDiff(t, r, n, s) {
      let { joins: i, leaves: o } = this.clone(r);
      return (
        n || (n = function () {}),
        s || (s = function () {}),
        this.map(i, (a, l) => {
          let c = t[a];
          if (((t[a] = this.clone(l)), c)) {
            let u = t[a].metas.map((f) => f.phx_ref),
              d = c.metas.filter((f) => u.indexOf(f.phx_ref) < 0);
            t[a].metas.unshift(...d);
          }
          n(a, c, l);
        }),
        this.map(o, (a, l) => {
          let c = t[a];
          if (!c) return;
          let u = l.metas.map((d) => d.phx_ref);
          ((c.metas = c.metas.filter((d) => u.indexOf(d.phx_ref) < 0)),
            s(a, c, l),
            c.metas.length === 0 && delete t[a]);
        }),
        t
      );
    }
    static list(t, r) {
      return (
        r ||
          (r = function (n, s) {
            return s;
          }),
        this.map(t, (n, s) => r(n, s))
      );
    }
    static map(t, r) {
      return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
    }
    static clone(t) {
      return JSON.parse(JSON.stringify(t));
    }
  },
  Ko = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(r));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [r, n, s, i, o] = JSON.parse(e);
        return t({ join_ref: r, ref: n, topic: s, event: i, payload: o });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: r, event: n, topic: s, payload: i } = e,
        o = this.META_LENGTH + t.length + r.length + s.length + n.length,
        a = new ArrayBuffer(this.HEADER_LENGTH + o),
        l = new DataView(a),
        c = 0;
      (l.setUint8(c++, this.KINDS.push),
        l.setUint8(c++, t.length),
        l.setUint8(c++, r.length),
        l.setUint8(c++, s.length),
        l.setUint8(c++, n.length),
        Array.from(t, (d) => l.setUint8(c++, d.charCodeAt(0))),
        Array.from(r, (d) => l.setUint8(c++, d.charCodeAt(0))),
        Array.from(s, (d) => l.setUint8(c++, d.charCodeAt(0))),
        Array.from(n, (d) => l.setUint8(c++, d.charCodeAt(0))));
      var u = new Uint8Array(a.byteLength + i.byteLength);
      return (
        u.set(new Uint8Array(a), 0),
        u.set(new Uint8Array(i), a.byteLength),
        u.buffer
      );
    },
    binaryDecode(e) {
      let t = new DataView(e),
        r = t.getUint8(0),
        n = new TextDecoder();
      switch (r) {
        case this.KINDS.push:
          return this.decodePush(e, t, n);
        case this.KINDS.reply:
          return this.decodeReply(e, t, n);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, n);
      }
    },
    decodePush(e, t, r) {
      let n = t.getUint8(1),
        s = t.getUint8(2),
        i = t.getUint8(3),
        o = this.HEADER_LENGTH + this.META_LENGTH - 1,
        a = r.decode(e.slice(o, o + n));
      o = o + n;
      let l = r.decode(e.slice(o, o + s));
      o = o + s;
      let c = r.decode(e.slice(o, o + i));
      o = o + i;
      let u = e.slice(o, e.byteLength);
      return { join_ref: a, ref: null, topic: l, event: c, payload: u };
    },
    decodeReply(e, t, r) {
      let n = t.getUint8(1),
        s = t.getUint8(2),
        i = t.getUint8(3),
        o = t.getUint8(4),
        a = this.HEADER_LENGTH + this.META_LENGTH,
        l = r.decode(e.slice(a, a + n));
      a = a + n;
      let c = r.decode(e.slice(a, a + s));
      a = a + s;
      let u = r.decode(e.slice(a, a + i));
      a = a + i;
      let d = r.decode(e.slice(a, a + o));
      a = a + o;
      let f = e.slice(a, e.byteLength),
        h = { status: d, response: f };
      return { join_ref: l, ref: c, topic: u, event: sr.reply, payload: h };
    },
    decodeBroadcast(e, t, r) {
      let n = t.getUint8(1),
        s = t.getUint8(2),
        i = this.HEADER_LENGTH + 2,
        o = r.decode(e.slice(i, i + n));
      i = i + n;
      let a = r.decode(e.slice(i, i + s));
      i = i + s;
      let l = e.slice(i, e.byteLength);
      return { join_ref: null, ref: null, topic: o, event: a, payload: l };
    },
  },
  nT = class {
    constructor(e, t = {}) {
      ((this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = t.timeout || YE),
        (this.transport = t.transport || Ht.WebSocket || Gn),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = t.longPollFallbackMs),
        (this.fallbackTimer = null));
      let r = null;
      try {
        r = Ht && Ht.sessionStorage;
      } catch {}
      ((this.sessionStore = t.sessionStorage || r),
        (this.establishedConnections = 0),
        (this.defaultEncoder = Ko.encode.bind(Ko)),
        (this.defaultDecoder = Ko.decode.bind(Ko)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = t.binaryType || "arraybuffer"),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport !== Gn
          ? ((this.encode = t.encode || this.defaultEncoder),
            (this.decode = t.decode || this.defaultDecoder))
          : ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder)));
      let n = null;
      (es &&
        es.addEventListener &&
        (es.addEventListener("pagehide", (s) => {
          this.conn && (this.disconnect(), (n = this.connectClock));
        }),
        es.addEventListener("pageshow", (s) => {
          n === this.connectClock && ((n = null), this.connect());
        }),
        es.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden"
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = t.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = t.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (s) =>
          t.rejoinAfterMs ? t.rejoinAfterMs(s) : [1e3, 2e3, 5e3][s - 1] || 1e4),
        (this.reconnectAfterMs = (s) =>
          t.reconnectAfterMs
            ? t.reconnectAfterMs(s)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][s - 1] || 5e3),
        (this.logger = t.logger || null),
        !this.logger &&
          t.debug &&
          (this.logger = (s, i, o) => {
            console.log(`${s}: ${i}`, o);
          }),
        (this.longpollerTimeout = t.longpollerTimeout || 2e4),
        (this.params = Ti(t.params || {})),
        (this.endPoint = `${e}/${Iu.websocket}`),
        (this.vsn = t.vsn || QE),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new r0(() => {
          if (this.pageHidden) {
            (this.log("Not reconnecting as page is hidden!"), this.teardown());
            return;
          }
          this.teardown(async () => {
            (t.beforeReconnect && (await t.beforeReconnect()), this.connect());
          });
        }, this.reconnectAfterMs)),
        (this.authToken = t.authToken));
    }
    getLongPollTransport() {
      return Gn;
    }
    replaceTransport(e) {
      (this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(), (this.conn = null)),
        (this.transport = e));
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let e = Ka.appendParams(Ka.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return e.charAt(0) !== "/"
        ? e
        : e.charAt(1) === "/"
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`;
    }
    disconnect(e, t, r) {
      (this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            ((this.disconnecting = !1), e && e());
          },
          t,
          r,
        ));
    }
    connect(e) {
      (e &&
        (console &&
          console.log(
            "passing params to connect is deprecated. Instead pass :params to the Socket constructor",
          ),
        (this.params = Ti(e))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== Gn
            ? this.connectWithFallback(Gn, this.longPollFallbackMs)
            : this.transportConnect()));
    }
    log(e, t, r) {
      this.logger && this.logger(e, t, r);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.open.push([t, e]), t);
    }
    onClose(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.close.push([t, e]), t);
    }
    onError(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.error.push([t, e]), t);
    }
    onMessage(e) {
      let t = this.makeRef();
      return (this.stateChangeCallbacks.message.push([t, e]), t);
    }
    onHeartbeat(e) {
      this.heartbeatCallback = e;
    }
    ping(e) {
      if (!this.isConnected()) return !1;
      let t = this.makeRef(),
        r = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: t });
      let n = this.onMessage((s) => {
        s.ref === t && (this.off([n]), e(Date.now() - r));
      });
      return !0;
    }
    transportName(e) {
      switch (e) {
        case Gn:
          return "LongPoll";
        default:
          return e.name;
      }
    }
    transportConnect() {
      (this.connectClock++, (this.closeWasClean = !1));
      let e;
      (this.authToken &&
        (e = ["phoenix", `${Lu}${btoa(this.authToken).replace(/=/g, "")}`]),
        (this.conn = new this.transport(this.endPointURL(), e)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (t) => this.onConnError(t)),
        (this.conn.onmessage = (t) => this.onConnMessage(t)),
        (this.conn.onclose = (t) => this.onConnClose(t)));
    }
    getSession(e) {
      return this.sessionStore && this.sessionStore.getItem(e);
    }
    storeSession(e, t) {
      this.sessionStore && this.sessionStore.setItem(e, t);
    }
    connectWithFallback(e, t = 2500) {
      clearTimeout(this.fallbackTimer);
      let r = !1,
        n = !0,
        s,
        i,
        o = this.transportName(e),
        a = (l) => {
          (this.log("transport", `falling back to ${o}...`, l),
            this.off([s, i]),
            (n = !1),
            this.replaceTransport(e),
            this.transportConnect());
        };
      if (this.getSession(`phx:fallback:${o}`)) return a("memorized");
      ((this.fallbackTimer = setTimeout(a, t)),
        (i = this.onError((l) => {
          (this.log("transport", "error", l),
            n && !r && (clearTimeout(this.fallbackTimer), a(l)));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((r = !0), !n)) {
            let l = this.transportName(e);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${l}`, "true"),
              this.log("transport", `established ${l} fallback`)
            );
          }
          (clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(a, t)),
            this.ping((l) => {
              (this.log("transport", "connected to primary after", l),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer));
            }));
        })),
        this.transportConnect());
    }
    clearHeartbeats() {
      (clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer));
    }
    onConnOpen() {
      (this.hasLogger() &&
        this.log("transport", `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open"));
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        ((this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ));
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        (this.triggerChanError(new Error("heartbeat timeout")),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            XE,
            "heartbeat timeout",
          ));
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs,
        )));
    }
    teardown(e, t, r) {
      if (!this.conn) return e && e();
      const n = this.conn;
      this.waitForBufferDone(n, () => {
        (t ? n.close(t, r || "") : n.close(),
          this.waitForSocketClosed(n, () => {
            (this.conn === n &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              e && e());
          }));
      });
    }
    waitForBufferDone(e, t, r = 1) {
      if (r === 5 || !e.bufferedAmount) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(e, t, r + 1);
      }, 150 * r);
    }
    waitForSocketClosed(e, t, r = 1) {
      if (r === 5 || e.readyState === qt.closed) {
        t();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(e, t, r + 1);
      }, 150 * r);
    }
    onConnClose(e) {
      (this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log("transport", "close", e),
        this.triggerChanError(e),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", e));
    }
    onConnError(e) {
      this.hasLogger() && this.log("transport", "error", e);
      let t = this.transport,
        r = this.establishedConnections;
      (this.triggerStateCallbacks("error", e, t, r),
        (t === this.transport || r > 0) && this.triggerChanError(e));
    }
    triggerChanError(e) {
      this.channels.forEach((t) => {
        t.isErrored() ||
          t.isLeaving() ||
          t.isClosed() ||
          t.trigger(sr.error, e);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case qt.connecting:
          return "connecting";
        case qt.open:
          return "open";
        case qt.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(e) {
      (this.off(e.stateChangeRefs),
        (this.channels = this.channels.filter((t) => t !== e)));
    }
    off(e) {
      for (let t in this.stateChangeCallbacks)
        this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
          ([r]) => e.indexOf(r) === -1,
        );
    }
    channel(e, t = {}) {
      let r = new eT(e, t, this);
      return (this.channels.push(r), r);
    }
    push(e) {
      if (this.hasLogger()) {
        let { topic: t, event: r, payload: n, ref: s, join_ref: i } = e;
        this.log("push", `${t} ${r} (${i}, ${s})`, n);
      }
      this.isConnected()
        ? this.encode(e, (t) => this.conn.send(t))
        : this.sendBuffer.push(() => this.encode(e, (t) => this.conn.send(t)));
    }
    makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e),
        this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      ((this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }));
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs,
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    onConnMessage(e) {
      this.decode(e.data, (t) => {
        let { topic: r, event: n, payload: s, ref: i, join_ref: o } = t;
        if (i && i === this.pendingHeartbeatRef) {
          const a = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(s.status === "ok" ? "ok" : "error", a);
          } catch (l) {
            this.log("error", "error in heartbeat callback", l);
          }
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs,
              )));
        }
        this.hasLogger() &&
          this.log(
            "receive",
            `${s.status || ""} ${r} ${n} ${(i && "(" + i + ")") || ""}`.trim(),
            s,
          );
        for (let a = 0; a < this.channels.length; a++) {
          const l = this.channels[a];
          l.isMember(r, n, s, o) && l.trigger(n, s, i, o);
        }
        this.triggerStateCallbacks("message", t);
      });
    }
    triggerStateCallbacks(e, ...t) {
      try {
        this.stateChangeCallbacks[e].forEach(([r, n]) => {
          try {
            n(...t);
          } catch (s) {
            this.log("error", `error in ${e} callback`, s);
          }
        });
      } catch (r) {
        this.log("error", `error triggering ${e} callbacks`, r);
      }
    }
    leaveOpenTopic(e) {
      let t = this.channels.find(
        (r) => r.topic === e && (r.isJoined() || r.isJoining()),
      );
      t &&
        (this.hasLogger() &&
          this.log("transport", `leaving duplicate topic "${e}"`),
        t.leave());
    }
  };
class Ci {
  constructor(t, r) {
    const n = iT(r);
    ((this.presence = new rT(t.getChannel(), n)),
      this.presence.onJoin((s, i, o) => {
        const a = Ci.onJoinPayload(s, i, o);
        t.getChannel().trigger("presence", a);
      }),
      this.presence.onLeave((s, i, o) => {
        const a = Ci.onLeavePayload(s, i, o);
        t.getChannel().trigger("presence", a);
      }),
      this.presence.onSync(() => {
        t.getChannel().trigger("presence", { event: "sync" });
      }));
  }
  get state() {
    return Ci.transformState(this.presence.state);
  }
  static transformState(t) {
    return (
      (t = sT(t)),
      Object.getOwnPropertyNames(t).reduce((r, n) => {
        const s = t[n];
        return ((r[n] = fa(s)), r);
      }, {})
    );
  }
  static onJoinPayload(t, r, n) {
    const s = gp(r),
      i = fa(n);
    return { event: "join", key: t, currentPresences: s, newPresences: i };
  }
  static onLeavePayload(t, r, n) {
    const s = gp(r),
      i = fa(n);
    return { event: "leave", key: t, currentPresences: s, leftPresences: i };
  }
}
function fa(e) {
  return e.metas.map(
    (t) => (
      (t.presence_ref = t.phx_ref),
      delete t.phx_ref,
      delete t.phx_ref_prev,
      t
    ),
  );
}
function sT(e) {
  return JSON.parse(JSON.stringify(e));
}
function iT(e) {
  return (e == null ? void 0 : e.events) && { events: e.events };
}
function gp(e) {
  return e != null && e.metas ? fa(e) : [];
}
var yp;
(function (e) {
  ((e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave"));
})(yp || (yp = {}));
class oT {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(t, r) {
    ((this.channel = t),
      (this.presenceAdapter = new Ci(this.channel.channelAdapter, r)));
  }
}
function aT(e) {
  if (e instanceof Error) return e;
  if (typeof e == "string") return new Error(e);
  if (e && typeof e == "object") {
    const t = e;
    if (typeof t.code == "number") {
      const r = typeof t.reason == "string" && t.reason ? ` (${t.reason})` : "";
      return new Error(`socket closed: ${t.code}${r}`, { cause: e });
    }
    return new Error("channel error: transport failure", { cause: e });
  }
  return new Error("channel error: connection lost");
}
class lT {
  constructor(t, r, n) {
    const s = cT(n);
    ((this.channel = t.getSocket().channel(r, s)), (this.socket = t));
  }
  get state() {
    return this.channel.state;
  }
  set state(t) {
    this.channel.state = t;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(t, r) {
    return this.channel.on(t, r);
  }
  off(t, r) {
    this.channel.off(t, r);
  }
  subscribe(t) {
    return this.channel.join(t);
  }
  unsubscribe(t) {
    return this.channel.leave(t);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(t) {
    this.channel.onClose(t);
  }
  onError(t) {
    return this.channel.onError(t);
  }
  push(t, r, n) {
    let s;
    try {
      s = this.channel.push(t, r, n);
    } catch {
      throw new Error(
        `tried to push '${t}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
      );
    }
    if (this.channel.pushBuffer.length > BE) {
      const i = this.channel.pushBuffer.shift();
      (i.cancelTimeout(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${i.event}`,
          i.payload(),
        ));
    }
    return s;
  }
  updateJoinPayload(t) {
    const r = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, r), t);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Ir.joined;
  }
  isJoined() {
    return this.state === Ir.joined;
  }
  isJoining() {
    return this.state === Ir.joining;
  }
  isClosed() {
    return this.state === Ir.closed;
  }
  isLeaving() {
    return this.state === Ir.leaving;
  }
  updateFilterBindings(t) {
    this.channel.filterBindings = t;
  }
  updatePayloadTransform(t) {
    this.channel.onMessage = t;
  }
  getChannel() {
    return this.channel;
  }
}
function cT(e) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: "", enabled: !1 },
        private: !1,
      },
      e.config,
    ),
  };
}
var vp;
(function (e) {
  ((e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE"));
})(vp || (vp = {}));
var gs;
(function (e) {
  ((e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes"),
    (e.SYSTEM = "system"));
})(gs || (gs = {}));
var ir;
(function (e) {
  ((e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR"));
})(ir || (ir = {}));
class Pi {
  get state() {
    return this.channelAdapter.state;
  }
  set state(t) {
    this.channelAdapter.state = t;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(t, r = { config: {} }, n) {
    var s, i;
    if (
      ((this.topic = t),
      (this.params = r),
      (this.socket = n),
      (this.bindings = {}),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        r.config,
      )),
      (this.channelAdapter = new lT(this.socket.socketAdapter, t, this.params)),
      (this.presence = new oT(this)),
      this._onClose(() => {
        this.socket._remove(this);
      }),
      this._updateFilterTransform(),
      (this.broadcastEndpointURL = t0(this.socket.socketAdapter.endPointURL())),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw new Error(
        `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
      );
  }
  subscribe(t, r = this.timeout) {
    var n, s, i;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.channelAdapter.isClosed())
    ) {
      const {
          config: { broadcast: o, presence: a, private: l },
        } = this.params,
        c =
          (s =
            (n = this.bindings.postgres_changes) === null || n === void 0
              ? void 0
              : n.map((h) => h.filter)) !== null && s !== void 0
            ? s
            : [],
        u =
          (!!this.bindings[gs.PRESENCE] &&
            this.bindings[gs.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        d = {},
        f = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, a), { enabled: u }),
          postgres_changes: c,
          private: l,
        };
      (this.socket.accessTokenValue &&
        (d.access_token = this.socket.accessTokenValue),
        this._onError((h) => {
          t == null || t(ir.CHANNEL_ERROR, aT(h));
        }),
        this._onClose(() => (t == null ? void 0 : t(ir.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, d)),
        this._updateFilterMessage(),
        this.channelAdapter
          .subscribe(r)
          .receive("ok", async ({ postgres_changes: h }) => {
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              h === void 0)
            ) {
              t == null || t(ir.SUBSCRIBED);
              return;
            }
            this._updatePostgresBindings(h, t);
          })
          .receive("error", (h) => {
            this.state = Ir.errored;
            const w = Object.values(h).join(", ") || "error";
            t == null || t(ir.CHANNEL_ERROR, new Error(w, { cause: h }));
          })
          .receive("timeout", () => {
            t == null || t(ir.TIMED_OUT);
          }));
    }
    return this;
  }
  _updatePostgresBindings(t, r) {
    var n;
    const s = this.bindings.postgres_changes,
      i = (n = s == null ? void 0 : s.length) !== null && n !== void 0 ? n : 0,
      o = [];
    for (let a = 0; a < i; a++) {
      const l = s[a],
        {
          filter: { event: c, schema: u, table: d, filter: f },
        } = l,
        h = t && t[a];
      if (
        h &&
        h.event === c &&
        Pi.isFilterValueEqual(h.schema, u) &&
        Pi.isFilterValueEqual(h.table, d) &&
        Pi.isFilterValueEqual(h.filter, f)
      )
        o.push(Object.assign(Object.assign({}, l), { id: h.id }));
      else {
        (this.unsubscribe(),
          (this.state = Ir.errored),
          r == null ||
            r(
              ir.CHANNEL_ERROR,
              new Error(
                "mismatch between server and client bindings for postgres changes",
              ),
            ));
        return;
      }
    }
    ((this.bindings.postgres_changes = o),
      this.state != Ir.errored && r && r(ir.SUBSCRIBED));
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      r.timeout || this.timeout,
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, r, n) {
    const s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
      i = t === gs.PRESENCE || t === gs.POSTGRES_CHANGES;
    if (s && i)
      throw (
        this.socket.log(
          "channel",
          `cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        ),
        new Error(
          `cannot add \`${t}\` callbacks for ${this.topic} after \`subscribe()\`.`,
        )
      );
    return this._on(t, r, n);
  }
  async httpSend(t, r, n = {}) {
    var s;
    if (r == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: t,
              payload: r,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (s = n.timeout) !== null && s !== void 0 ? s : this.timeout,
      );
    if (a.status === 202) return { success: !0 };
    let l = a.statusText;
    try {
      const c = await a.json();
      l = c.error || c.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(t, r = {}) {
    var n, s;
    if (!this.channelAdapter.canPush() && t.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
      );
      const { event: i, payload: o } = t,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const c = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (n = r.timeout) !== null && n !== void 0 ? n : this.timeout,
        );
        return (
          await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()),
          c.ok ? "ok" : "error"
        );
      } catch (c) {
        return c instanceof Error && c.name === "AbortError"
          ? "timed out"
          : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const c = this.channelAdapter.push(
          t.type,
          t,
          r.timeout || this.timeout,
        );
        (t.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          i("ok"),
          c.receive("ok", () => i("ok")),
          c.receive("error", () => i("error")),
          c.receive("timeout", () => i("timed out")));
      });
  }
  updateJoinPayload(t) {
    this.channelAdapter.updateJoinPayload(t);
  }
  async unsubscribe(t = this.timeout) {
    return new Promise((r) => {
      this.channelAdapter
        .unsubscribe(t)
        .receive("ok", () => r("ok"))
        .receive("timeout", () => r("timed out"))
        .receive("error", () => r("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(t, r, n) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), n),
      o = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, r), { signal: s.signal }),
      );
    return (clearTimeout(i), o);
  }
  _on(t, r, n) {
    const s = t.toLocaleLowerCase(),
      i = this.channelAdapter.on(t, n),
      o = { type: s, filter: r, callback: n, ref: i };
    return (
      this.bindings[s] ? this.bindings[s].push(o) : (this.bindings[s] = [o]),
      this._updateFilterMessage(),
      this
    );
  }
  _onClose(t) {
    this.channelAdapter.onClose(t);
  }
  _onError(t) {
    this.channelAdapter.onError(t);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((t, r, n) => {
      var s, i, o, a, l, c, u;
      const d = t.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(d, n)) return !1;
      const f =
        (s = this.bindings[d]) === null || s === void 0
          ? void 0
          : s.find((h) => h.ref === t.ref);
      if (!f) return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(d))
        if ("id" in f) {
          const h = f.id,
            w = (i = f.filter) === null || i === void 0 ? void 0 : i.event;
          return (
            h &&
            ((o = r.ids) === null || o === void 0 ? void 0 : o.includes(h)) &&
            (w === "*" ||
              (w == null ? void 0 : w.toLocaleLowerCase()) ===
                ((a = r.data) === null || a === void 0
                  ? void 0
                  : a.type.toLocaleLowerCase()))
          );
        } else {
          const h =
            (c =
              (l = f == null ? void 0 : f.filter) === null || l === void 0
                ? void 0
                : l.event) === null || c === void 0
              ? void 0
              : c.toLocaleLowerCase();
          return (
            h === "*" ||
            h ===
              ((u = r == null ? void 0 : r.event) === null || u === void 0
                ? void 0
                : u.toLocaleLowerCase())
          );
        }
      else return f.type.toLocaleLowerCase() === d;
    });
  }
  _notThisChannelEvent(t, r) {
    const { close: n, error: s, leave: i, join: o } = Zv;
    return r && [n, s, i, o].includes(t) && r !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((t, r, n) => {
      if (typeof r == "object" && "ids" in r) {
        const s = r.data,
          { schema: i, table: o, commit_timestamp: a, type: l, errors: c } = s;
        return Object.assign(
          Object.assign(
            {},
            {
              schema: i,
              table: o,
              commit_timestamp: a,
              eventType: l,
              new: {},
              old: {},
              errors: c,
            },
          ),
          this._getPayloadRecords(s),
        );
      }
      return r;
    });
  }
  copyBindings(t) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const r in t.bindings)
      for (const n of t.bindings[r]) this._on(n.type, n.filter, n.callback);
  }
  static isFilterValueEqual(t, r) {
    return (t ?? void 0) === (r ?? void 0);
  }
  _getPayloadRecords(t) {
    const r = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (r.new = mp(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (r.old = mp(t.columns, t.old_record)),
      r
    );
  }
}
class uT {
  constructor(t, r) {
    this.socket = new nT(t, r);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(t) {
    this.socket.heartbeatCallback = t;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(t, r, n, s = 1e4) {
    return new Promise((i) => {
      (setTimeout(() => i("timeout"), s),
        this.socket.disconnect(
          () => {
            (t(), i("ok"));
          },
          r,
          n,
        ));
    });
  }
  push(t) {
    this.socket.push(t);
  }
  log(t, r, n) {
    this.socket.log(t, r, n);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(t) {
    this.socket.onOpen(t);
  }
  onClose(t) {
    this.socket.onClose(t);
  }
  onError(t) {
    this.socket.onError(t);
  }
  onMessage(t) {
    this.socket.onMessage(t);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Nu.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Nu.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const wp = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  dT = [1e3, 2e3, 5e3, 1e4],
  hT = 1e4;
function fT() {
  const e = new Map();
  return {
    get length() {
      return e.size;
    },
    clear() {
      e.clear();
    },
    getItem(t) {
      return e.has(t) ? e.get(t) : null;
    },
    key(t) {
      var r;
      return (r = Array.from(e.keys())[t]) !== null && r !== void 0 ? r : null;
    },
    removeItem(t) {
      e.delete(t);
    },
    setItem(t, r) {
      e.set(t, String(r));
    },
  };
}
function pT() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {}
  return fT();
}
const mT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class gT {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker
      ? this._workerHeartbeatTimer
      : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker
      ? this._pendingWorkerHeartbeatRef
      : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(t, r) {
    var n;
    if (
      ((this.channels = new Array()),
      (this.accessTokenValue = null),
      (this.accessToken = null),
      (this.apiKey = null),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.ref = 0),
      (this.serializer = new zE()),
      (this._manuallySetToken = !1),
      (this._authPromise = null),
      (this._workerHeartbeatTimer = void 0),
      (this._pendingWorkerHeartbeatRef = null),
      (this._pendingDisconnectTimer = null),
      (this._disconnectOnEmptyChannelsAfterMs = 0),
      (this._resolveFetch = (i) =>
        i ? (...o) => i(...o) : (...o) => fetch(...o)),
      !(
        !((n = r == null ? void 0 : r.params) === null || n === void 0) &&
        n.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = r.params.apikey;
    const s = this._initializeOptions(r);
    ((this.socketAdapter = new uT(t, s)),
      (this.httpEndpoint = t0(t)),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)));
  }
  connect() {
    if (!(
      this.isConnecting() ||
      this.isDisconnecting() ||
      this.isConnected()
    )) {
      (this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
        this._setupConnectionHandlers());
      try {
        this.socketAdapter.connect();
      } catch (t) {
        const r = t.message;
        throw r.includes("Node.js")
          ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
          : new Error(`WebSocket not available: ${r}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(t, r) {
    return (
      this._cancelPendingDisconnect(),
      this.isDisconnecting()
        ? "ok"
        : await this.socketAdapter.disconnect(
            () => {
              (clearInterval(this._workerHeartbeatTimer),
                this._terminateWorker());
            },
            t,
            r,
          )
    );
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const r = await t.unsubscribe();
    return (r === "ok" && t.teardown(), r);
  }
  async removeAllChannels() {
    const t = this.channels.map(async (n) => {
        const s = await n.unsubscribe();
        return (n.teardown(), s);
      }),
      r = await Promise.all(t);
    return (await this.disconnect(), r);
  }
  log(t, r, n) {
    this.socketAdapter.log(t, r, n);
  }
  connectionState() {
    return this.socketAdapter.connectionState() || Nu.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(t, r = { config: {} }) {
    const n = `realtime:${t}`,
      s = this.getChannels().find((i) => i.topic === n);
    if (s) return s;
    {
      const i = new Pi(`realtime:${t}`, r, this);
      return (this._cancelPendingDisconnect(), this.channels.push(i), i);
    }
  }
  push(t) {
    this.socketAdapter.push(t);
  }
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(t) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(t);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(t) {
    ((this.channels = this.channels.filter((r) => r.topic !== t.topic)),
      this.channels.length === 0 &&
        (this.log("transport", "no channels remaining, scheduling disconnect"),
        this._schedulePendingDisconnect()));
  }
  _schedulePendingDisconnect() {
    if (
      (this._cancelPendingDisconnect(),
      this._disconnectOnEmptyChannelsAfterMs === 0)
    ) {
      (this.log("transport", "disconnecting immediately - no channels"),
        this.disconnect());
      return;
    }
    ((this._pendingDisconnectTimer = setTimeout(() => {
      ((this._pendingDisconnectTimer = null),
        this.channels.length === 0 &&
          (this.log(
            "transport",
            "deferred disconnect fired - no channels, disconnecting",
          ),
          this.disconnect()));
    }, this._disconnectOnEmptyChannelsAfterMs)),
      this.log(
        "transport",
        `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
      ));
  }
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null &&
      (this.log(
        "transport",
        "pending disconnect cancelled - channel activity detected",
      ),
      clearTimeout(this._pendingDisconnectTimer),
      (this._pendingDisconnectTimer = null));
  }
  async _performAuth(t = null) {
    let r,
      n = !1;
    if (t) ((r = t), (n = !0));
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        (this.log("error", "Error fetching access token from callback", s),
          (r = this.accessTokenValue));
      }
    else r = this.accessTokenValue;
    (n
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((s) => {
          const i = { access_token: r, version: ME };
          (r && s.updateJoinPayload(i),
            s.joinedOnce &&
              s.channelAdapter.isJoined() &&
              s.channelAdapter.push(Zv.access_token, { access_token: r }));
        })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(t = "general") {
    this._isManualToken() ||
      this.setAuth().catch((r) => {
        this.log("error", `Error setting auth in ${t}`, r);
      });
  }
  _setupConnectionHandlers() {
    (this.socketAdapter.onOpen(() => {
      ((
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      ).catch((r) => {
        this.log("error", "error waiting for auth on connect", r);
      }),
        this.worker && !this.workerRef && this._startWorkerHeartbeat());
    }),
      this.socketAdapter.onClose(() => {
        this.worker && this.workerRef && this._terminateWorker();
      }),
      this.socketAdapter.onMessage((t) => {
        t.ref &&
          t.ref === this._pendingWorkerHeartbeatRef &&
          (this._pendingWorkerHeartbeatRef = null);
      }));
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() &&
      this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(t) {
    return (r, n) => {
      (r == "sent" && this._setAuthSafely(), t && t(r, n));
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    ((this.workerRef = new Worker(t)),
      (this.workerRef.onerror = (r) => {
        (this.log("worker", "worker error", r.message),
          this._terminateWorker(),
          this.disconnect());
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      }));
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _workerObjectUrl(t) {
    let r;
    if (t) r = t;
    else {
      const n = new Blob([mT], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  _initializeOptions(t) {
    var r, n, s, i, o, a, l, c, u, d, f, h;
    ((this.worker =
      (r = t == null ? void 0 : t.worker) !== null && r !== void 0 ? r : !1),
      (this.accessToken =
        (n = t == null ? void 0 : t.accessToken) !== null && n !== void 0
          ? n
          : null));
    const w = {};
    ((w.timeout =
      (s = t == null ? void 0 : t.timeout) !== null && s !== void 0 ? s : FE),
      (w.heartbeatIntervalMs =
        (i = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
        i !== void 0
          ? i
          : wp.HEARTBEAT_INTERVAL),
      (this._disconnectOnEmptyChannelsAfterMs =
        (o = t == null ? void 0 : t.disconnectOnEmptyChannelsAfterMs) !==
          null && o !== void 0
          ? o
          : 2 *
            ((a = t == null ? void 0 : t.heartbeatIntervalMs) !== null &&
            a !== void 0
              ? a
              : wp.HEARTBEAT_INTERVAL)),
      (w.transport =
        (l = t == null ? void 0 : t.transport) !== null && l !== void 0
          ? l
          : LE.getWebSocketConstructor()),
      (w.params = t == null ? void 0 : t.params),
      (w.logger = t == null ? void 0 : t.logger),
      (w.heartbeatCallback = this._wrapHeartbeatCallback(
        t == null ? void 0 : t.heartbeatCallback,
      )),
      (w.sessionStorage =
        (c = t == null ? void 0 : t.sessionStorage) !== null && c !== void 0
          ? c
          : pT()),
      (w.reconnectAfterMs =
        (u = t == null ? void 0 : t.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (m) => dT[m - 1] || hT));
    let v, x;
    const g =
      (d = t == null ? void 0 : t.vsn) !== null && d !== void 0 ? d : UE;
    switch (g) {
      case DE:
        ((v = (m, y) => y(JSON.stringify(m))),
          (x = (m, y) => y(JSON.parse(m))));
        break;
      case Xv:
        ((v = this.serializer.encode.bind(this.serializer)),
          (x = this.serializer.decode.bind(this.serializer)));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${w.vsn}`);
    }
    if (
      ((w.vsn = g),
      (w.encode =
        (f = t == null ? void 0 : t.encode) !== null && f !== void 0 ? f : v),
      (w.decode =
        (h = t == null ? void 0 : t.decode) !== null && h !== void 0 ? h : x),
      (w.beforeReconnect = this._reconnectAuth.bind(this)),
      ((t != null && t.logLevel) || (t != null && t.log_level)) &&
        ((this.logLevel = t.logLevel || t.log_level),
        (w.params = Object.assign(Object.assign({}, w.params), {
          log_level: this.logLevel,
        }))),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      ((this.workerUrl = t == null ? void 0 : t.workerUrl),
        (w.autoSendHeartbeat = !this.worker));
    }
    return w;
  }
  async _reconnectAuth() {
    (await this._waitForAuthIfNeeded(), this.isConnected() || this.connect());
  }
}
var Xi = class extends Error {
  constructor(e, t) {
    var r;
    (super(e),
      (this.name = "IcebergError"),
      (this.status = t.status),
      (this.icebergType = t.icebergType),
      (this.icebergCode = t.icebergCode),
      (this.details = t.details),
      (this.isCommitStateUnknown =
        t.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(t.status) &&
          ((r = t.icebergType) == null ? void 0 : r.includes("CommitState")) ===
            !0)));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function yT(e, t, r) {
  const n = new URL(t, e);
  if (r)
    for (const [s, i] of Object.entries(r))
      i !== void 0 && n.searchParams.set(s, i);
  return n.toString();
}
async function vT(e) {
  return !e || e.type === "none"
    ? {}
    : e.type === "bearer"
      ? { Authorization: `Bearer ${e.token}` }
      : e.type === "header"
        ? { [e.name]: e.value }
        : e.type === "custom"
          ? await e.getHeaders()
          : {};
}
function wT(e) {
  const t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: r, path: n, query: s, body: i, headers: o }) {
      const a = yT(e.baseUrl, n, s),
        l = await vT(e.auth),
        c = await t(a, {
          method: r,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...o,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        u = await c.text(),
        d = (c.headers.get("content-type") || "").includes("application/json"),
        f = d && u ? JSON.parse(u) : u;
      if (!c.ok) {
        const h = d ? f : void 0,
          w = h == null ? void 0 : h.error;
        throw new Xi(
          (w == null ? void 0 : w.message) ??
            `Request failed with status ${c.status}`,
          {
            status: c.status,
            icebergType: w == null ? void 0 : w.type,
            icebergCode: w == null ? void 0 : w.code,
            details: h,
          },
        );
      }
      return { status: c.status, headers: c.headers, data: f };
    },
  };
}
function qo(e) {
  return e.join("");
}
var xT = class {
  constructor(e, t = "") {
    ((this.client = e), (this.prefix = t));
  }
  async listNamespaces(e) {
    const t = e ? { parent: qo(e.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: t,
      })
    ).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t == null ? void 0 : t.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: r,
      })
    ).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${qo(e.namespace)}`,
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${qo(e.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(e) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${qo(e.namespace)}`,
        }),
        !0
      );
    } catch (t) {
      if (t instanceof Xi && t.status === 404) return !1;
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof Xi && r.status === 409) return;
      throw r;
    }
  }
};
function Jn(e) {
  return e.join("");
}
var bT = class {
    constructor(e, t = "", r) {
      ((this.client = e), (this.prefix = t), (this.accessDelegation = r));
    }
    async listTables(e) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(e, t) {
      const r = {};
      return (
        this.accessDelegation &&
          (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables`,
            body: t,
            headers: r,
          })
        ).data.metadata
      );
    }
    async updateTable(e, t) {
      const r = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
        body: t,
      });
      return {
        "metadata-location": r.data["metadata-location"],
        metadata: r.data.metadata,
      };
    }
    async dropTable(e, t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
        query: { purgeRequested: String((t == null ? void 0 : t.purge) ?? !1) },
      });
    }
    async loadTable(e) {
      const t = {};
      return (
        this.accessDelegation &&
          (t["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          })
        ).data.metadata
      );
    }
    async tableExists(e) {
      const t = {};
      this.accessDelegation &&
        (t["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${Jn(e.namespace)}/tables/${e.name}`,
            headers: t,
          }),
          !0
        );
      } catch (r) {
        if (r instanceof Xi && r.status === 404) return !1;
        throw r;
      }
    }
    async createTableIfNotExists(e, t) {
      try {
        return await this.createTable(e, t);
      } catch (r) {
        if (r instanceof Xi && r.status === 409)
          return await this.loadTable({ namespace: e.namespace, name: t.name });
        throw r;
      }
    }
  },
  _T = class {
    constructor(e) {
      var n;
      let t = "v1";
      e.catalogName && (t += `/${e.catalogName}`);
      const r = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
      ((this.client = wT({ baseUrl: r, auth: e.auth, fetchImpl: e.fetch })),
        (this.accessDelegation =
          (n = e.accessDelegation) == null ? void 0 : n.join(",")),
        (this.namespaceOps = new xT(this.client, t)),
        (this.tableOps = new bT(this.client, t, this.accessDelegation)));
    }
    async listNamespaces(e) {
      return this.namespaceOps.listNamespaces(e);
    }
    async createNamespace(e, t) {
      return this.namespaceOps.createNamespace(e, t);
    }
    async dropNamespace(e) {
      await this.namespaceOps.dropNamespace(e);
    }
    async loadNamespaceMetadata(e) {
      return this.namespaceOps.loadNamespaceMetadata(e);
    }
    async listTables(e) {
      return this.tableOps.listTables(e);
    }
    async createTable(e, t) {
      return this.tableOps.createTable(e, t);
    }
    async updateTable(e, t) {
      return this.tableOps.updateTable(e, t);
    }
    async dropTable(e, t) {
      await this.tableOps.dropTable(e, t);
    }
    async loadTable(e) {
      return this.tableOps.loadTable(e);
    }
    async namespaceExists(e) {
      return this.namespaceOps.namespaceExists(e);
    }
    async tableExists(e) {
      return this.tableOps.tableExists(e);
    }
    async createNamespaceIfNotExists(e, t) {
      return this.namespaceOps.createNamespaceIfNotExists(e, t);
    }
    async createTableIfNotExists(e, t) {
      return this.tableOps.createTableIfNotExists(e, t);
    }
  };
function Zi(e) {
  "@babel/helpers - typeof";
  return (
    (Zi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zi(e)
  );
}
function kT(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ST(e) {
  var t = kT(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function ET(e, t, r) {
  return (
    (t = ST(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xp(Object(r), !0).forEach(function (n) {
          ET(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var Rl = class extends Error {
  constructor(e, t = "storage", r, n) {
    (super(e),
      (this.__isStorageError = !0),
      (this.namespace = t),
      (this.name = t === "vectors" ? "StorageVectorsError" : "StorageError"),
      (this.status = r),
      (this.statusCode = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
};
function jl(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var $u = class extends Rl {
    constructor(e, t, r, n = "storage") {
      (super(e, n, t, r),
        (this.name =
          n === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = t),
        (this.statusCode = r));
    }
    toJSON() {
      return B({}, super.toJSON());
    }
  },
  n0 = class extends Rl {
    constructor(e, t, r = "storage") {
      (super(e, r),
        (this.name =
          r === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = t));
    }
  };
function qa(e, t, r) {
  const n = B({}, e),
    s = t.toLowerCase();
  for (const i of Object.keys(n)) i.toLowerCase() === s && delete n[i];
  return ((n[s] = r), n);
}
function TT(e) {
  const t = {};
  for (const [r, n] of Object.entries(e)) t[r.toLowerCase()] = n;
  return t;
}
const CT = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  PT = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Mu = (e) => {
    if (Array.isArray(e)) return e.map((r) => Mu(r));
    if (typeof e == "function" || e !== Object(e)) return e;
    const t = {};
    return (
      Object.entries(e).forEach(([r, n]) => {
        const s = r.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, ""),
        );
        t[s] = Mu(n);
      }),
      t
    );
  },
  RT = (e) =>
    !e ||
    typeof e != "string" ||
    e.length === 0 ||
    e.length > 100 ||
    e.trim() !== e ||
    e.includes("/") ||
    e.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e),
  bp = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = e;
      if (typeof t.msg == "string") return t.msg;
      if (typeof t.message == "string") return t.message;
      if (typeof t.error_description == "string") return t.error_description;
      if (typeof t.error == "string") return t.error;
      if (typeof t.error == "object" && t.error !== null) {
        const r = t.error;
        if (typeof r.message == "string") return r.message;
      }
    }
    return JSON.stringify(e);
  },
  jT = async (e, t, r, n) => {
    if (
      e !== null &&
      typeof e == "object" &&
      "json" in e &&
      typeof e.json == "function"
    ) {
      const s = e;
      let i = parseInt(String(s.status), 10);
      (Number.isFinite(i) || (i = 500),
        s
          .json()
          .then((o) => {
            const a =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              i + "";
            t(new $u(bp(o), i, a, n));
          })
          .catch(() => {
            const o = i + "";
            t(new $u(s.statusText || `HTTP ${i} error`, i, o, n));
          }));
    } else t(new n0(bp(e), e, n));
  },
  AT = (e, t, r, n) => {
    const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    if (e === "GET" || e === "HEAD" || !n) return B(B({}, s), r);
    if (PT(n)) {
      var i;
      const o = (t == null ? void 0 : t.headers) || {};
      let a;
      for (const [l, c] of Object.entries(o))
        l.toLowerCase() === "content-type" && (a = c);
      ((s.headers = qa(
        o,
        "Content-Type",
        (i = a) !== null && i !== void 0 ? i : "application/json",
      )),
        (s.body = JSON.stringify(n)));
    } else s.body = n;
    return (t != null && t.duplex && (s.duplex = t.duplex), B(B({}, s), r));
  };
async function ci(e, t, r, n, s, i, o) {
  return new Promise((a, l) => {
    e(r, AT(t, n, s, i))
      .then((c) => {
        if (!c.ok) throw c;
        if (n != null && n.noResolveJson) return c;
        if (o === "vectors") {
          const u = c.headers.get("content-type");
          if (c.headers.get("content-length") === "0" || c.status === 204)
            return {};
          if (!u || !u.includes("application/json")) return {};
        }
        return c.json();
      })
      .then((c) => a(c))
      .catch((c) => jT(c, l, n, o));
  });
}
function s0(e = "storage") {
  return {
    get: async (t, r, n, s) => ci(t, "GET", r, n, s, void 0, e),
    post: async (t, r, n, s, i) => ci(t, "POST", r, s, i, n, e),
    put: async (t, r, n, s, i) => ci(t, "PUT", r, s, i, n, e),
    head: async (t, r, n, s) =>
      ci(t, "HEAD", r, B(B({}, n), {}, { noResolveJson: !0 }), s, void 0, e),
    remove: async (t, r, n, s, i) => ci(t, "DELETE", r, s, i, n, e),
  };
}
const NT = s0("storage"),
  { get: eo, post: Pt, put: Du, head: OT, remove: ih } = NT,
  st = s0("vectors");
var Qs = class {
    constructor(e, t = {}, r, n = "storage") {
      ((this.shouldThrowOnError = !1),
        (this.url = e),
        (this.headers = TT(t)),
        (this.fetch = CT(r)),
        (this.namespace = n));
    }
    throwOnError() {
      return ((this.shouldThrowOnError = !0), this);
    }
    setHeader(e, t) {
      return ((this.headers = qa(this.headers, e, t)), this);
    }
    async handleOperation(e) {
      var t = this;
      try {
        return { data: await e(), error: null };
      } catch (r) {
        if (t.shouldThrowOnError) throw r;
        if (jl(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  IT = class {
    constructor(e, t) {
      ((this.downloadFn = e), (this.shouldThrowOnError = t));
    }
    then(e, t) {
      return this.execute().then(e, t);
    }
    async execute() {
      var e = this;
      try {
        return { data: (await e.downloadFn()).body, error: null };
      } catch (t) {
        if (e.shouldThrowOnError) throw t;
        if (jl(t)) return { data: null, error: t };
        throw t;
      }
    }
  };
let i0;
i0 = Symbol.toStringTag;
var LT = class {
  constructor(e, t) {
    ((this.downloadFn = e),
      (this.shouldThrowOnError = t),
      (this[i0] = "BlobDownloadBuilder"),
      (this.promise = null));
  }
  asStream() {
    return new IT(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return (this.promise || (this.promise = this.execute()), this.promise);
  }
  async execute() {
    var e = this;
    try {
      return { data: await (await e.downloadFn()).blob(), error: null };
    } catch (t) {
      if (e.shouldThrowOnError) throw t;
      if (jl(t)) return { data: null, error: t };
      throw t;
    }
  }
};
const $T = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  _p = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var MT = class extends Qs {
  constructor(e, t = {}, r, n) {
    (super(e, t, n, "storage"), (this.bucketId = r));
  }
  async uploadOrUpdate(e, t, r, n) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const o = B(B({}, _p), n);
      let a = B(
        B({}, s.headers),
        e === "POST" && { "x-upsert": String(o.upsert) },
      );
      const l = o.metadata;
      if (
        (typeof Blob < "u" && r instanceof Blob
          ? ((i = new FormData()),
            i.append("cacheControl", o.cacheControl),
            l && i.append("metadata", s.encodeMetadata(l)),
            i.append("", r))
          : typeof FormData < "u" && r instanceof FormData
            ? ((i = r),
              i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
              l &&
                !i.has("metadata") &&
                i.append("metadata", s.encodeMetadata(l)))
            : ((i = r),
              (a["cache-control"] = `max-age=${o.cacheControl}`),
              (a["content-type"] = o.contentType),
              l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
              ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
                (i &&
                  typeof i == "object" &&
                  "pipe" in i &&
                  typeof i.pipe == "function")) &&
                !o.duplex &&
                (o.duplex = "half")),
        n != null && n.headers)
      )
        for (const [f, h] of Object.entries(n.headers)) a = qa(a, f, h);
      const c = s._removeEmptyFolders(t),
        u = s._getFinalPath(c),
        d = await (e == "PUT" ? Du : Pt)(
          s.fetch,
          `${s.url}/object/${u}`,
          i,
          B({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {}),
        );
      return { path: c, id: d.Id, fullPath: d.Key };
    });
  }
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  async uploadToSignedUrl(e, t, r, n) {
    var s = this;
    const i = s._removeEmptyFolders(e),
      o = s._getFinalPath(i),
      a = new URL(s.url + `/object/upload/sign/${o}`);
    return (
      a.searchParams.set("token", t),
      s.handleOperation(async () => {
        let l;
        const c = B(B({}, _p), n);
        let u = B(B({}, s.headers), { "x-upsert": String(c.upsert) });
        const d = c.metadata;
        if (
          (typeof Blob < "u" && r instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", c.cacheControl),
              d && l.append("metadata", s.encodeMetadata(d)),
              l.append("", r))
            : typeof FormData < "u" && r instanceof FormData
              ? ((l = r),
                l.has("cacheControl") ||
                  l.append("cacheControl", c.cacheControl),
                d &&
                  !l.has("metadata") &&
                  l.append("metadata", s.encodeMetadata(d)))
              : ((l = r),
                (u["cache-control"] = `max-age=${c.cacheControl}`),
                (u["content-type"] = c.contentType),
                d && (u["x-metadata"] = s.toBase64(s.encodeMetadata(d))),
                ((typeof ReadableStream < "u" && l instanceof ReadableStream) ||
                  (l &&
                    typeof l == "object" &&
                    "pipe" in l &&
                    typeof l.pipe == "function")) &&
                  !c.duplex &&
                  (c.duplex = "half")),
          n != null && n.headers)
        )
          for (const [f, h] of Object.entries(n.headers)) u = qa(u, f, h);
        return {
          path: i,
          fullPath: (
            await Du(
              s.fetch,
              a.toString(),
              l,
              B(
                { headers: u },
                c != null && c.duplex ? { duplex: c.duplex } : {},
              ),
            )
          ).Key,
        };
      })
    );
  }
  async createSignedUploadUrl(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(e);
      const s = B({}, r.headers);
      t != null && t.upsert && (s["x-upsert"] = "true");
      const i = await Pt(
          r.fetch,
          `${r.url}/object/upload/sign/${n}`,
          {},
          { headers: s },
        ),
        o = new URL(r.url + i.url),
        a = o.searchParams.get("token");
      if (!a) throw new Rl("No token returned by API");
      return { signedUrl: o.toString(), path: e, token: a };
    });
  }
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  async move(e, t, r) {
    var n = this;
    return n.handleOperation(
      async () =>
        await Pt(
          n.fetch,
          `${n.url}/object/move`,
          {
            bucketId: n.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers },
        ),
    );
  }
  async copy(e, t, r) {
    var n = this;
    return n.handleOperation(async () => ({
      path: (
        await Pt(
          n.fetch,
          `${n.url}/object/copy`,
          {
            bucketId: n.bucketId,
            sourceKey: e,
            destinationKey: t,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers },
        )
      ).Key,
    }));
  }
  async createSignedUrl(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      let s = n._getFinalPath(e);
      const i =
        typeof (r == null ? void 0 : r.transform) == "object" &&
        r.transform !== null &&
        Object.keys(r.transform).length > 0;
      let o = await Pt(
        n.fetch,
        `${n.url}/object/sign/${s}`,
        B({ expiresIn: t }, i ? { transform: r.transform } : {}),
        { headers: n.headers },
      );
      const a = new URLSearchParams();
      (r != null &&
        r.download &&
        a.set("download", r.download === !0 ? "" : r.download),
        (r == null ? void 0 : r.cacheNonce) != null &&
          a.set("cacheNonce", String(r.cacheNonce)));
      const l = a.toString();
      return {
        signedUrl: encodeURI(`${n.url}${o.signedURL}${l ? `&${l}` : ""}`),
      };
    });
  }
  async createSignedUrls(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = await Pt(
          n.fetch,
          `${n.url}/object/sign/${n.bucketId}`,
          { expiresIn: t, paths: e },
          { headers: n.headers },
        ),
        i = new URLSearchParams();
      (r != null &&
        r.download &&
        i.set("download", r.download === !0 ? "" : r.download),
        (r == null ? void 0 : r.cacheNonce) != null &&
          i.set("cacheNonce", String(r.cacheNonce)));
      const o = i.toString();
      return s.map((a) =>
        B(
          B({}, a),
          {},
          {
            signedUrl: a.signedURL
              ? encodeURI(`${n.url}${a.signedURL}${o ? `&${o}` : ""}`)
              : null,
          },
        ),
      );
    });
  }
  download(e, t, r) {
    const n =
        typeof (t == null ? void 0 : t.transform) == "object" &&
        t.transform !== null &&
        Object.keys(t.transform).length > 0
          ? "render/image/authenticated"
          : "object",
      s = new URLSearchParams();
    (t != null && t.transform && this.applyTransformOptsToQuery(s, t.transform),
      (t == null ? void 0 : t.cacheNonce) != null &&
        s.set("cacheNonce", String(t.cacheNonce)));
    const i = s.toString(),
      o = this._getFinalPath(e),
      a = () =>
        eo(
          this.fetch,
          `${this.url}/${n}/${o}${i ? `?${i}` : ""}`,
          { headers: this.headers, noResolveJson: !0 },
          r,
        );
    return new LT(a, this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    return t.handleOperation(async () =>
      Mu(
        await eo(t.fetch, `${t.url}/object/info/${r}`, { headers: t.headers }),
      ),
    );
  }
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      return (
        await OT(t.fetch, `${t.url}/object/${r}`, { headers: t.headers }),
        { data: !0, error: null }
      );
    } catch (s) {
      if (t.shouldThrowOnError) throw s;
      if (jl(s)) {
        var n;
        const i =
          s instanceof $u
            ? s.status
            : s instanceof n0
              ? (n = s.originalError) === null || n === void 0
                ? void 0
                : n.status
              : void 0;
        if (i !== void 0 && [400, 404].includes(i))
          return { data: !1, error: s };
      }
      throw s;
    }
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e),
      n = new URLSearchParams();
    (t != null &&
      t.download &&
      n.set("download", t.download === !0 ? "" : t.download),
      t != null &&
        t.transform &&
        this.applyTransformOptsToQuery(n, t.transform),
      (t == null ? void 0 : t.cacheNonce) != null &&
        n.set("cacheNonce", String(t.cacheNonce)));
    const s = n.toString(),
      i =
        typeof (t == null ? void 0 : t.transform) == "object" &&
        t.transform !== null &&
        Object.keys(t.transform).length > 0
          ? "render/image"
          : "object";
    return {
      data: {
        publicUrl:
          encodeURI(`${this.url}/${i}/public/${r}`) + (s ? `?${s}` : ""),
      },
    };
  }
  async remove(e) {
    var t = this;
    return t.handleOperation(
      async () =>
        await ih(
          t.fetch,
          `${t.url}/object/${t.bucketId}`,
          { prefixes: e },
          { headers: t.headers },
        ),
    );
  }
  async list(e, t, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = B(B(B({}, $T), t), {}, { prefix: e || "" });
      return await Pt(
        n.fetch,
        `${n.url}/object/list/${n.bucketId}`,
        s,
        { headers: n.headers },
        r,
      );
    });
  }
  async listV2(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const n = B({}, e);
      return await Pt(
        r.fetch,
        `${r.url}/object/list-v2/${r.bucketId}`,
        n,
        { headers: r.headers },
        t,
      );
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  applyTransformOptsToQuery(e, t) {
    return (
      t.width && e.set("width", t.width.toString()),
      t.height && e.set("height", t.height.toString()),
      t.resize && e.set("resize", t.resize),
      t.format && e.set("format", t.format),
      t.quality && e.set("quality", t.quality.toString()),
      e
    );
  }
};
const DT = "2.105.4",
  go = { "X-Client-Info": `storage-js/${DT}` };
var UT = class extends Qs {
    constructor(e, t = {}, r, n) {
      const s = new URL(e);
      n != null &&
        n.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const i = s.href.replace(/\/$/, ""),
        o = B(B({}, go), t);
      super(i, o, r, "storage");
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const r = t.listBucketOptionsToQueryString(e);
        return await eo(t.fetch, `${t.url}/bucket${r}`, { headers: t.headers });
      });
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await eo(t.fetch, `${t.url}/bucket/${e}`, { headers: t.headers }),
      );
    }
    async createBucket(e, t = { public: !1 }) {
      var r = this;
      return r.handleOperation(
        async () =>
          await Pt(
            r.fetch,
            `${r.url}/bucket`,
            {
              id: e,
              name: e,
              type: t.type,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
      );
    }
    async updateBucket(e, t) {
      var r = this;
      return r.handleOperation(
        async () =>
          await Du(
            r.fetch,
            `${r.url}/bucket/${e}`,
            {
              id: e,
              name: e,
              public: t.public,
              file_size_limit: t.fileSizeLimit,
              allowed_mime_types: t.allowedMimeTypes,
            },
            { headers: r.headers },
          ),
      );
    }
    async emptyBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Pt(
            t.fetch,
            `${t.url}/bucket/${e}/empty`,
            {},
            { headers: t.headers },
          ),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await ih(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    listBucketOptionsToQueryString(e) {
      const t = {};
      return (
        e &&
          ("limit" in e && (t.limit = String(e.limit)),
          "offset" in e && (t.offset = String(e.offset)),
          e.search && (t.search = e.search),
          e.sortColumn && (t.sortColumn = e.sortColumn),
          e.sortOrder && (t.sortOrder = e.sortOrder)),
        Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : ""
      );
    }
  },
  FT = class extends Qs {
    constructor(e, t = {}, r) {
      const n = e.replace(/\/$/, ""),
        s = B(B({}, go), t);
      super(n, s, r, "storage");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await Pt(
            t.fetch,
            `${t.url}/bucket`,
            { name: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e) {
      var t = this;
      return t.handleOperation(async () => {
        const r = new URLSearchParams();
        ((e == null ? void 0 : e.limit) !== void 0 &&
          r.set("limit", e.limit.toString()),
          (e == null ? void 0 : e.offset) !== void 0 &&
            r.set("offset", e.offset.toString()),
          e != null && e.sortColumn && r.set("sortColumn", e.sortColumn),
          e != null && e.sortOrder && r.set("sortOrder", e.sortOrder),
          e != null && e.search && r.set("search", e.search));
        const n = r.toString(),
          s = n ? `${t.url}/bucket?${n}` : `${t.url}/bucket`;
        return await eo(t.fetch, s, { headers: t.headers });
      });
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await ih(t.fetch, `${t.url}/bucket/${e}`, {}, { headers: t.headers }),
      );
    }
    from(e) {
      var t = this;
      if (!RT(e))
        throw new Rl(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
        );
      const r = new _T({
          baseUrl: this.url,
          catalogName: e,
          auth: { type: "custom", getHeaders: async () => t.headers },
          fetch: this.fetch,
        }),
        n = this.shouldThrowOnError;
      return new Proxy(r, {
        get(s, i) {
          const o = s[i];
          return typeof o != "function"
            ? o
            : async (...a) => {
                try {
                  return { data: await o.apply(s, a), error: null };
                } catch (l) {
                  if (n) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  },
  BT = class extends Qs {
    constructor(e, t = {}, r) {
      const n = e.replace(/\/$/, ""),
        s = B(B({}, go), {}, { "Content-Type": "application/json" }, t);
      super(n, s, r, "vectors");
    }
    async createIndex(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await st.post(t.fetch, `${t.url}/CreateIndex`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getIndex(e, t) {
      var r = this;
      return r.handleOperation(
        async () =>
          await st.post(
            r.fetch,
            `${r.url}/GetIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: r.headers },
          ),
      );
    }
    async listIndexes(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await st.post(t.fetch, `${t.url}/ListIndexes`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteIndex(e, t) {
      var r = this;
      return r.handleOperation(
        async () =>
          (await st.post(
            r.fetch,
            `${r.url}/DeleteIndex`,
            { vectorBucketName: e, indexName: t },
            { headers: r.headers },
          )) || {},
      );
    }
  },
  zT = class extends Qs {
    constructor(e, t = {}, r) {
      const n = e.replace(/\/$/, ""),
        s = B(B({}, go), {}, { "Content-Type": "application/json" }, t);
      super(n, s, r, "vectors");
    }
    async putVectors(e) {
      var t = this;
      if (e.vectors.length < 1 || e.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await st.post(t.fetch, `${t.url}/PutVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
    async getVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await st.post(t.fetch, `${t.url}/GetVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async listVectors(e) {
      var t = this;
      if (e.segmentCount !== void 0) {
        if (e.segmentCount < 1 || e.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          e.segmentIndex !== void 0 &&
          (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${e.segmentCount - 1}`,
          );
      }
      return t.handleOperation(
        async () =>
          await st.post(t.fetch, `${t.url}/ListVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async queryVectors(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await st.post(t.fetch, `${t.url}/QueryVectors`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteVectors(e) {
      var t = this;
      if (e.keys.length < 1 || e.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return t.handleOperation(
        async () =>
          (await st.post(t.fetch, `${t.url}/DeleteVectors`, e, {
            headers: t.headers,
          })) || {},
      );
    }
  },
  HT = class extends Qs {
    constructor(e, t = {}, r) {
      const n = e.replace(/\/$/, ""),
        s = B(B({}, go), {}, { "Content-Type": "application/json" }, t);
      super(n, s, r, "vectors");
    }
    async createBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await st.post(
            t.fetch,
            `${t.url}/CreateVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
    async getBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          await st.post(
            t.fetch,
            `${t.url}/GetVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          ),
      );
    }
    async listBuckets(e = {}) {
      var t = this;
      return t.handleOperation(
        async () =>
          await st.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
            headers: t.headers,
          }),
      );
    }
    async deleteBucket(e) {
      var t = this;
      return t.handleOperation(
        async () =>
          (await st.post(
            t.fetch,
            `${t.url}/DeleteVectorBucket`,
            { vectorBucketName: e },
            { headers: t.headers },
          )) || {},
      );
    }
  },
  WT = class extends HT {
    constructor(e, t = {}) {
      super(e, t.headers || {}, t.fetch);
    }
    from(e) {
      return new VT(this.url, this.headers, e, this.fetch);
    }
    async createBucket(e) {
      var t = () => super.createBucket,
        r = this;
      return t().call(r, e);
    }
    async getBucket(e) {
      var t = () => super.getBucket,
        r = this;
      return t().call(r, e);
    }
    async listBuckets(e = {}) {
      var t = () => super.listBuckets,
        r = this;
      return t().call(r, e);
    }
    async deleteBucket(e) {
      var t = () => super.deleteBucket,
        r = this;
      return t().call(r, e);
    }
  },
  VT = class extends BT {
    constructor(e, t, r, n) {
      (super(e, t, n), (this.vectorBucketName = r));
    }
    async createIndex(e) {
      var t = () => super.createIndex,
        r = this;
      return t().call(
        r,
        B(B({}, e), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async listIndexes(e = {}) {
      var t = () => super.listIndexes,
        r = this;
      return t().call(
        r,
        B(B({}, e), {}, { vectorBucketName: r.vectorBucketName }),
      );
    }
    async getIndex(e) {
      var t = () => super.getIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    async deleteIndex(e) {
      var t = () => super.deleteIndex,
        r = this;
      return t().call(r, r.vectorBucketName, e);
    }
    index(e) {
      return new KT(
        this.url,
        this.headers,
        this.vectorBucketName,
        e,
        this.fetch,
      );
    }
  },
  KT = class extends zT {
    constructor(e, t, r, n, s) {
      (super(e, t, s), (this.vectorBucketName = r), (this.indexName = n));
    }
    async putVectors(e) {
      var t = () => super.putVectors,
        r = this;
      return t().call(
        r,
        B(
          B({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async getVectors(e) {
      var t = () => super.getVectors,
        r = this;
      return t().call(
        r,
        B(
          B({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async listVectors(e = {}) {
      var t = () => super.listVectors,
        r = this;
      return t().call(
        r,
        B(
          B({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async queryVectors(e) {
      var t = () => super.queryVectors,
        r = this;
      return t().call(
        r,
        B(
          B({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
    async deleteVectors(e) {
      var t = () => super.deleteVectors,
        r = this;
      return t().call(
        r,
        B(
          B({}, e),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
        ),
      );
    }
  },
  qT = class extends UT {
    constructor(e, t = {}, r, n) {
      super(e, t, r, n);
    }
    from(e) {
      return new MT(this.url, this.headers, e, this.fetch);
    }
    get vectors() {
      return new WT(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new FT(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
function Al(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
        (r[n[s]] = e[n[s]]);
  return r;
}
const o0 = "2.105.4",
  ts = 30 * 1e3,
  Uu = 3,
  yc = Uu * ts,
  GT = "http://localhost:9999",
  JT = "supabase.auth.token",
  QT = { "X-Client-Info": `gotrue-js/${o0}` },
  Fu = "X-Supabase-Api-Version",
  a0 = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  YT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  XT = 10 * 60 * 1e3;
class to extends Error {
  constructor(t, r, n) {
    (super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = n));
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code,
    };
  }
}
function I(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class ZT extends to {
  constructor(t, r, n) {
    (super(t, r, n),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = n));
  }
}
function eC(e) {
  return I(e) && e.name === "AuthApiError";
}
class Ot extends to {
  constructor(t, r) {
    (super(t), (this.name = "AuthUnknownError"), (this.originalError = r));
  }
}
class vr extends to {
  constructor(t, r, n, s) {
    (super(t, n, s), (this.name = r), (this.status = n));
  }
}
class Te extends vr {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Go(e) {
  return I(e) && e.name === "AuthSessionMissingError";
}
class Qn extends vr {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0,
    );
  }
}
class Jo extends vr {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Qo extends vr {
  constructor(t, r = null) {
    (super(t, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details,
    });
  }
}
function tC(e) {
  return I(e) && e.name === "AuthImplicitGrantRedirectError";
}
class kp extends vr {
  constructor(t, r = null) {
    (super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      details: this.details,
    });
  }
}
class rC extends vr {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found",
    );
  }
}
class Bu extends vr {
  constructor(t, r) {
    super(t, "AuthRetryableFetchError", r, void 0);
  }
}
function vc(e) {
  return I(e) && e.name === "AuthRetryableFetchError";
}
class Sp extends vr {
  constructor(t, r, n) {
    (super(t, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = n));
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), {
      reasons: this.reasons,
    });
  }
}
class zu extends vr {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ga =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      "",
    ),
  Ep = ` 	
\r=`.split(""),
  nC = (() => {
    const e = new Array(128);
    for (let t = 0; t < e.length; t += 1) e[t] = -1;
    for (let t = 0; t < Ep.length; t += 1) e[Ep[t].charCodeAt(0)] = -2;
    for (let t = 0; t < Ga.length; t += 1) e[Ga[t].charCodeAt(0)] = t;
    return e;
  })();
function Tp(e, t, r) {
  if (e !== null)
    for (t.queue = (t.queue << 8) | e, t.queuedBits += 8; t.queuedBits >= 6;) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      (r(Ga[n]), (t.queuedBits -= 6));
    }
  else if (t.queuedBits > 0)
    for (
      t.queue = t.queue << (6 - t.queuedBits), t.queuedBits = 6;
      t.queuedBits >= 6;
    ) {
      const n = (t.queue >> (t.queuedBits - 6)) & 63;
      (r(Ga[n]), (t.queuedBits -= 6));
    }
}
function l0(e, t, r) {
  const n = nC[e];
  if (n > -1)
    for (t.queue = (t.queue << 6) | n, t.queuedBits += 6; t.queuedBits >= 8;)
      (r((t.queue >> (t.queuedBits - 8)) & 255), (t.queuedBits -= 8));
  else {
    if (n === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function Cp(e) {
  const t = [],
    r = (o) => {
      t.push(String.fromCodePoint(o));
    },
    n = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      oC(o, n, r);
    };
  for (let o = 0; o < e.length; o += 1) l0(e.charCodeAt(o), s, i);
  return t.join("");
}
function sC(e, t) {
  if (e <= 127) {
    t(e);
    return;
  } else if (e <= 2047) {
    (t(192 | (e >> 6)), t(128 | (e & 63)));
    return;
  } else if (e <= 65535) {
    (t(224 | (e >> 12)), t(128 | ((e >> 6) & 63)), t(128 | (e & 63)));
    return;
  } else if (e <= 1114111) {
    (t(240 | (e >> 18)),
      t(128 | ((e >> 12) & 63)),
      t(128 | ((e >> 6) & 63)),
      t(128 | (e & 63)));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function iC(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    let n = e.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const s = ((n - 55296) * 1024) & 65535;
      ((n = (((e.charCodeAt(r + 1) - 56320) & 65535) | s) + 65536), (r += 1));
    }
    sC(n, t);
  }
}
function oC(e, t, r) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      r(e);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((e >> (7 - n)) & 1)) {
        t.utf8seq = n;
        break;
      }
    if (t.utf8seq === 2) t.codepoint = e & 31;
    else if (t.utf8seq === 3) t.codepoint = e & 15;
    else if (t.utf8seq === 4) t.codepoint = e & 7;
    else throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (e <= 127) throw new Error("Invalid UTF-8 sequence");
    ((t.codepoint = (t.codepoint << 6) | (e & 63)),
      (t.utf8seq -= 1),
      t.utf8seq === 0 && r(t.codepoint));
  }
}
function Ts(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  for (let s = 0; s < e.length; s += 1) l0(e.charCodeAt(s), r, n);
  return new Uint8Array(t);
}
function aC(e) {
  const t = [];
  return (iC(e, (r) => t.push(r)), new Uint8Array(t));
}
function _n(e) {
  const t = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      t.push(s);
    };
  return (e.forEach((s) => Tp(s, r, n)), Tp(null, r, n), t.join(""));
}
function lC(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function cC() {
  return Symbol("auth-callback");
}
const je = () => typeof window < "u" && typeof document < "u",
  pn = { tested: !1, writable: !1 },
  c0 = () => {
    if (!je()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (pn.tested) return pn.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      (globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (pn.tested = !0),
        (pn.writable = !0));
    } catch {
      ((pn.tested = !0), (pn.writable = !1));
    }
    return pn.writable;
  };
function uC(e) {
  const t = {},
    r = new URL(e);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((s, i) => {
        t[i] = s;
      });
    } catch {}
  return (
    r.searchParams.forEach((n, s) => {
      t[s] = n;
    }),
    t
  );
}
const u0 = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  dC = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  rs = async (e, t, r) => {
    await e.setItem(t, JSON.stringify(r));
  },
  mn = async (e, t) => {
    const r = await e.getItem(t);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return null;
    }
  },
  Re = async (e, t) => {
    await e.removeItem(t);
  };
class Nl {
  constructor() {
    this.promise = new Nl.promiseConstructor((t, r) => {
      ((this.resolve = t), (this.reject = r));
    });
  }
}
Nl.promiseConstructor = Promise;
function Yo(e) {
  const t = e.split(".");
  if (t.length !== 3) throw new zu("Invalid JWT structure");
  for (let n = 0; n < t.length; n++)
    if (!YT.test(t[n])) throw new zu("JWT not in base64url format");
  return {
    header: JSON.parse(Cp(t[0])),
    payload: JSON.parse(Cp(t[1])),
    signature: Ts(t[2]),
    raw: { header: t[0], payload: t[1] },
  };
}
async function hC(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function fC(e, t) {
  return new Promise((n, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await e(i);
          if (!t(i, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!t(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function pC(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function mC() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      n = r.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += r.charAt(Math.floor(Math.random() * n));
    return s;
  }
  return (crypto.getRandomValues(t), Array.from(t, pC).join(""));
}
async function gC(e) {
  const r = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-256", r),
    s = new Uint8Array(n);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function yC(e) {
  if (!(
    typeof crypto < "u" &&
    typeof crypto.subtle < "u" &&
    typeof TextEncoder < "u"
  ))
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
      ),
      e
    );
  const r = await gC(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Yn(e, t, r = !1) {
  const n = mC();
  let s = n;
  (r && (s += "/recovery"), await rs(e, `${t}-code-verifier`, s));
  const i = await yC(n);
  return [i, n === i ? "plain" : "s256"];
}
const vC = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function wC(e) {
  const t = e.headers.get(Fu);
  if (!t || !t.match(vC)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function xC(e) {
  if (!e) throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (e <= t) throw new Error("JWT has expired");
}
function bC(e) {
  switch (e) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const _C = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function tr(e) {
  if (!_C.test(e))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not",
    );
}
function Et(e) {
  if (!e.passkey)
    throw new Error(
      "@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).",
    );
}
function wc() {
  const e = {};
  return new Proxy(e, {
    get: (t, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`,
      );
    },
    set: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
    deleteProperty: (t, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
      );
    },
  });
}
function kC(e, t) {
  return new Proxy(e, {
    get: (r, n, s) => {
      if (n === "__isInsecureUserWarningProxy") return !0;
      if (typeof n == "symbol") {
        const i = n.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(r, n, s);
      }
      return (
        !t.value &&
          typeof n == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
          ),
          (t.value = !0)),
        Reflect.get(r, n, s)
      );
    },
  });
}
function Pp(e) {
  return JSON.parse(JSON.stringify(e));
}
const vn = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = e;
      if (typeof t.msg == "string") return t.msg;
      if (typeof t.message == "string") return t.message;
      if (typeof t.error_description == "string") return t.error_description;
      if (typeof t.error == "string") return t.error;
    }
    return JSON.stringify(e);
  },
  SC = [502, 503, 504, 520, 521, 522, 523, 524, 530];
async function Rp(e) {
  var t;
  if (!dC(e)) throw new Bu(vn(e), 0);
  if (SC.includes(e.status)) throw new Bu(vn(e), e.status);
  let r;
  try {
    r = await e.json();
  } catch (i) {
    throw new Ot(vn(i), i);
  }
  let n;
  const s = wC(e);
  if (
    (s &&
    s.getTime() >= a0["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (n = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (n = r.error_code),
    n)
  ) {
    if (n === "weak_password")
      throw new Sp(
        vn(r),
        e.status,
        ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          [],
      );
    if (n === "session_not_found") throw new Te();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
  )
    throw new Sp(vn(r), e.status, r.weak_password.reasons);
  throw new ZT(vn(r), e.status || 500, n);
}
const EC = (e, t, r, n) => {
  const s = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers,
      )),
      (s.body = JSON.stringify(n)),
      Object.assign(Object.assign({}, s), r));
};
async function U(e, t, r, n) {
  var s;
  const i = Object.assign({}, n == null ? void 0 : n.headers);
  (i[Fu] || (i[Fu] = a0["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`));
  const o =
    (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
  n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    l = await TC(
      e,
      t,
      r + a,
      { headers: i, noResolveJson: n == null ? void 0 : n.noResolveJson },
      {},
      n == null ? void 0 : n.body,
    );
  return n != null && n.xform
    ? n == null
      ? void 0
      : n.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function TC(e, t, r, n, s, i) {
  const o = EC(t, n, s, i);
  let a;
  try {
    a = await e(r, Object.assign({}, o));
  } catch (l) {
    throw (console.error(l), new Bu(vn(l), 0));
  }
  if ((a.ok || (await Rp(a)), n != null && n.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await Rp(l);
  }
}
function ht(e) {
  var t;
  let r = null;
  RC(e) &&
    ((r = Object.assign({}, e)),
    e.expires_at || (r.expires_at = lC(e.expires_in)));
  const n = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: r, user: n }, error: null };
}
function jp(e) {
  const t = ht(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == "object" &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == "string" &&
      e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Lr(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function CC(e) {
  return { data: e, error: null };
}
function PC(e) {
  const {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    } = e,
    o = Al(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: t,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function Ap(e) {
  return e;
}
function RC(e) {
  return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
const xc = ["global", "local", "others"];
class jC {
  constructor({ url: t = "", headers: r = {}, fetch: n, experimental: s }) {
    ((this.url = t),
      (this.headers = r),
      (this.fetch = u0(n)),
      (this.experimental = s ?? {}),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      }),
      (this.passkey = {
        listPasskeys: this._adminListPasskeys.bind(this),
        deletePasskey: this._adminDeletePasskey.bind(this),
      }));
  }
  async signOut(t, r = xc[0]) {
    if (xc.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${xc.join(", ")}`,
      );
    try {
      return (
        await U(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async inviteUserByEmail(t, r = {}) {
    try {
      return await U(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: Lr,
      });
    } catch (n) {
      if (I(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async generateLink(t) {
    try {
      const { options: r } = t,
        n = Al(t, ["options"]),
        s = Object.assign(Object.assign({}, n), r);
      return (
        "newEmail" in n &&
          ((s.new_email = n == null ? void 0 : n.newEmail), delete s.newEmail),
        await U(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: PC,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (I(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Lr,
      });
    } catch (r) {
      if (I(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(t) {
    var r, n, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 },
        u = await U(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Ap,
        });
      if (u.error) throw u.error;
      const d = await u.json(),
        f =
          (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (l =
            (a = u.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        h.length > 0 &&
          (h.forEach((w) => {
            const v = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(w.split(";")[1].split("=")[1]);
            c[`${x}Page`] = v;
          }),
          (c.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, d), c), error: null }
      );
    } catch (c) {
      if (I(c)) return { data: { users: [] }, error: c };
      throw c;
    }
  }
  async getUserById(t) {
    tr(t);
    try {
      return await U(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Lr,
      });
    } catch (r) {
      if (I(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(t, r) {
    tr(t);
    try {
      return await U(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: r,
        headers: this.headers,
        xform: Lr,
      });
    } catch (n) {
      if (I(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async deleteUser(t, r = !1) {
    tr(t);
    try {
      return await U(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: Lr,
      });
    } catch (n) {
      if (I(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(t) {
    tr(t.userId);
    try {
      const { data: r, error: n } = await U(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        },
      );
      return { data: r, error: n };
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(t) {
    (tr(t.userId), tr(t.id));
    try {
      return {
        data: await U(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers },
        ),
        error: null,
      };
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listOAuthClients(t) {
    var r, n, s, i, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 },
        u = await U(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = t == null ? void 0 : t.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = t == null ? void 0 : t.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: Ap,
        });
      if (u.error) throw u.error;
      const d = await u.json(),
        f =
          (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        h =
          (l =
            (a = u.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        h.length > 0 &&
          (h.forEach((w) => {
            const v = parseInt(w.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(w.split(";")[1].split("=")[1]);
            c[`${x}Page`] = v;
          }),
          (c.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, d), c), error: null }
      );
    } catch (c) {
      if (I(c)) return { data: { clients: [] }, error: c };
      throw c;
    }
  }
  async _createOAuthClient(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getOAuthClient(t) {
    try {
      return await U(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${t}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateOAuthClient(t, r) {
    try {
      return await U(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${t}`,
        {
          body: r,
          headers: this.headers,
          xform: (n) => ({ data: n, error: null }),
        },
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteOAuthClient(t) {
    try {
      return (
        await U(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(t) {
    try {
      return await U(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${t}/regenerate_secret`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listCustomProviders(t) {
    try {
      const r = {};
      return (
        t != null && t.type && (r.type = t.type),
        await U(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: r,
          xform: (n) => {
            var s;
            return {
              data: {
                providers:
                  (s = n == null ? void 0 : n.providers) !== null &&
                  s !== void 0
                    ? s
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (r) {
      if (I(r)) return { data: { providers: [] }, error: r };
      throw r;
    }
  }
  async _createCustomProvider(t) {
    try {
      return await U(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getCustomProvider(t) {
    try {
      return await U(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${t}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateCustomProvider(t, r) {
    try {
      return await U(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${t}`,
        {
          body: r,
          headers: this.headers,
          xform: (n) => ({ data: n, error: null }),
        },
      );
    } catch (n) {
      if (I(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteCustomProvider(t) {
    try {
      return (
        await U(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${t}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _adminListPasskeys(t) {
    (Et(this.experimental), tr(t.userId));
    try {
      return await U(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/passkeys`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _adminDeletePasskey(t) {
    (Et(this.experimental), tr(t.userId), tr(t.passkeyId));
    try {
      return (
        await U(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/passkeys/${t.passkeyId}`,
          { headers: this.headers, noResolveJson: !0 },
        ),
        { data: null, error: null }
      );
    } catch (r) {
      if (I(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function Np(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
const Bt = {
  debug: !!(
    globalThis &&
    c0() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class d0 extends Error {
  constructor(t) {
    (super(t), (this.isAcquireTimeout = !0));
  }
}
class Op extends d0 {}
async function AC(e, t, r) {
  Bt.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  const n = new globalThis.AbortController();
  let s;
  (t > 0 &&
    (s = setTimeout(() => {
      (n.abort(),
        Bt.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            e,
          ));
    }, t)),
    await Promise.resolve());
  try {
    return await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: n.signal },
      async (i) => {
        if (i) {
          (clearTimeout(s),
            Bt.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                e,
                i.name,
              ));
          try {
            return await r();
          } finally {
            Bt.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                e,
                i.name,
              );
          }
        } else {
          if (t === 0)
            throw (
              Bt.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  e,
                ),
              new Op(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`,
              )
            );
          if (Bt.debug)
            try {
              const o = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(o, null, "  "),
              );
            } catch (o) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                o,
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
            ),
            clearTimeout(s),
            await r()
          );
        }
      },
    );
  } catch (i) {
    if (
      (t > 0 && clearTimeout(s),
      i !== null &&
        typeof i == "object" &&
        "name" in i &&
        i.name === "AbortError" &&
        t > 0)
    ) {
      if (n.signal.aborted)
        return (
          Bt.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
              e,
            ),
          console.warn(
            `@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`,
          ),
          await Promise.resolve().then(() =>
            globalThis.navigator.locks.request(
              e,
              { mode: "exclusive", steal: !0 },
              async (o) => {
                if (o) {
                  Bt.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                      e,
                      o.name,
                    );
                  try {
                    return await r();
                  } finally {
                    Bt.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: released (stolen)",
                        e,
                        o.name,
                      );
                  }
                } else
                  return (
                    console.warn(
                      "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                    ),
                    await r()
                  );
              },
            ),
          )
        );
      throw (
        Bt.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock: lock was stolen by another request",
            e,
          ),
        new Op(`Lock "${e}" was released because another request stole it`)
      );
    }
    throw i;
  }
}
function NC() {
  if (typeof globalThis != "object")
    try {
      (Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__);
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function h0(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e))
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  return e.toLowerCase();
}
function OC(e) {
  return parseInt(e, 16);
}
function IC(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, (n) => n.toString(16).padStart(2, "0")).join("");
}
function LC(e) {
  var t;
  const {
    chainId: r,
    domain: n,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: o,
    notBefore: a,
    requestId: l,
    resources: c,
    scheme: u,
    uri: d,
    version: f,
  } = e;
  {
    if (!Number.isInteger(r))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`,
      );
    if (!n)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`,
      );
    if (!d)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`,
      );
    if (
      !((t = e.statement) === null || t === void 0) &&
      t.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`,
      );
  }
  const h = h0(e.address),
    w = u ? `${u}://${n}` : n,
    v = e.statement
      ? `${e.statement}
`
      : "",
    x = `${w} wants you to sign in with your Ethereum account:
${h}

${v}`;
  let g = `URI: ${d}
Version: ${f}
Chain ID: ${r}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (g += `
Expiration Time: ${s.toISOString()}`),
    a &&
      (g += `
Not Before: ${a.toISOString()}`),
    l &&
      (g += `
Request ID: ${l}`),
    c)
  ) {
    let m = `
Resources:`;
    for (const y of c) {
      if (!y || typeof y != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`,
        );
      m += `
- ${y}`;
    }
    g += m;
  }
  return `${x}
${g}`;
}
class be extends Error {
  constructor({ message: t, code: r, cause: n, name: s }) {
    var i;
    (super(t, { cause: n }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (n instanceof Error ? n.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = r));
  }
  toJSON() {
    return { name: this.name, message: this.message, code: this.code };
  }
}
class Ja extends be {
  constructor(t, r) {
    (super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: t,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = r));
  }
}
function $C({ error: e, options: t }) {
  var r, n, s;
  const { publicKey: i } = t;
  if (!i) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new be({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else if (e.name === "ConstraintError") {
    if (
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.requireResidentKey) === !0
    )
      return new be({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e,
      });
    if (
      t.mediation === "conditional" &&
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.userVerification) === "required"
    )
      return new be({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new be({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e,
      });
  } else {
    if (e.name === "InvalidStateError")
      return new be({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e,
      });
    if (e.name === "NotAllowedError")
      return new be({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key")
        .length === 0
        ? new be({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: e,
          })
        : new be({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: e,
          });
    if (e.name === "SecurityError") {
      const o = window.location.hostname;
      if (f0(o)) {
        if (i.rp.id !== o)
          return new be({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new be({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new be({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new be({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new be({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
function MC({ error: e, options: t }) {
  const { publicKey: r } = t;
  if (!r) throw Error("options was missing required publicKey property");
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new be({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e,
      });
  } else {
    if (e.name === "NotAllowedError")
      return new be({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e,
      });
    if (e.name === "SecurityError") {
      const n = window.location.hostname;
      if (f0(n)) {
        if (r.rpId !== n)
          return new be({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: e,
          });
      } else
        return new be({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e,
        });
    } else if (e.name === "UnknownError")
      return new be({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e,
      });
  }
  return new be({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e,
  });
}
class DC {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      ((r.name = "AbortError"), this.controller.abort(r));
    }
    const t = new AbortController();
    return ((this.controller = t), t.signal);
  }
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      ((t.name = "AbortError"),
        this.controller.abort(t),
        (this.controller = void 0));
    }
  }
}
const Hu = new DC();
function Ip(e) {
  if (!e) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  const { challenge: t, user: r, excludeCredentials: n } = e,
    s = Al(e, ["challenge", "user", "excludeCredentials"]),
    i = Ts(t).buffer,
    o = Object.assign(Object.assign({}, r), { id: Ts(r.id).buffer }),
    a = Object.assign(Object.assign({}, s), { challenge: i, user: o });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const c = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, c), {
        id: Ts(c.id).buffer,
        type: c.type || "public-key",
        transports: c.transports,
      });
    }
  }
  return a;
}
function Lp(e) {
  if (!e) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  const { challenge: t, allowCredentials: r } = e,
    n = Al(e, ["challenge", "allowCredentials"]),
    s = Ts(t).buffer,
    i = Object.assign(Object.assign({}, n), { challenge: s });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: Ts(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return i;
}
function $p(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: _n(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: _n(new Uint8Array(e.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function Mp(e) {
  var t;
  if ("toJSON" in e && typeof e.toJSON == "function") return e.toJSON();
  const r = e,
    n = e.getClientExtensionResults(),
    s = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: _n(new Uint8Array(s.authenticatorData)),
      clientDataJSON: _n(new Uint8Array(s.clientDataJSON)),
      signature: _n(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? _n(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: n,
    authenticatorAttachment:
      (t = r.authenticatorAttachment) !== null && t !== void 0 ? t : void 0,
  };
}
function f0(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function Qa() {
  var e, t;
  return !!(
    je() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.create) == "function" &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.get) == "function"
  );
}
async function p0(e) {
  try {
    const t = await navigator.credentials.create(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ja("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ja("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: $C({ error: t, options: e }) };
  }
}
async function m0(e) {
  try {
    const t = await navigator.credentials.get(e);
    return t
      ? t instanceof PublicKeyCredential
        ? { data: t, error: null }
        : {
            data: null,
            error: new Ja("Browser returned unexpected credential type", t),
          }
      : { data: null, error: new Ja("Empty credential response", t) };
  } catch (t) {
    return { data: null, error: MC({ error: t, options: e }) };
  }
}
const UC = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  FC = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Ya(...e) {
  const t = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    n = {};
  for (const s of e)
    if (s)
      for (const i in s) {
        const o = s[i];
        if (o !== void 0)
          if (Array.isArray(o)) n[i] = o;
          else if (r(o)) n[i] = o;
          else if (t(o)) {
            const a = n[i];
            t(a) ? (n[i] = Ya(a, o)) : (n[i] = Ya(o));
          } else n[i] = o;
      }
  return n;
}
function BC(e, t) {
  return Ya(UC, e, t || {});
}
function zC(e, t) {
  return Ya(FC, e, t || {});
}
class HC {
  constructor(t) {
    ((this.client = t),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this)));
  }
  async _enroll(t) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, t), { factorType: "webauthn" }),
    );
  }
  async _challenge(
    { factorId: t, webauthn: r, friendlyName: n, signal: s },
    i,
  ) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: r,
      });
      if (!a) return { data: null, error: l };
      const c = s ?? Hu.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: u } = a.webauthn.credential_options.publicKey;
        if (!u.name) {
          const d = n;
          if (d) u.name = `${u.id}:${d}`;
          else {
            const h = (await this.client.getUser()).data.user,
              w =
                ((o = h == null ? void 0 : h.user_metadata) === null ||
                o === void 0
                  ? void 0
                  : o.name) ||
                (h == null ? void 0 : h.email) ||
                (h == null ? void 0 : h.id) ||
                "User";
            u.name = `${u.id}:${w}`;
          }
        }
        u.displayName || (u.displayName = u.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const u = BC(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create,
            ),
            { data: d, error: f } = await p0({ publicKey: u, signal: c });
          return d
            ? {
                data: {
                  factorId: t,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: d },
                },
                error: null,
              }
            : { data: null, error: f };
        }
        case "request": {
          const u = zC(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request,
            ),
            { data: d, error: f } = await m0(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: u,
                signal: c,
              }),
            );
          return d
            ? {
                data: {
                  factorId: t,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: d },
                },
                error: null,
              }
            : { data: null, error: f };
        }
      }
    } catch (a) {
      return I(a)
        ? { data: null, error: a }
        : { data: null, error: new Ot("Unexpected error in challenge", a) };
    }
  }
  async _verify({ challengeId: t, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({ factorId: r, challengeId: t, webauthn: n });
  }
  async _authenticate(
    {
      factorId: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!r)
      return {
        data: null,
        error: new to("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Qa())
        return {
          data: null,
          error: new Ot("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this.challenge(
        { factorId: t, webauthn: { rpId: r, rpOrigins: n }, signal: s },
        { request: i },
      );
      if (!o) return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: t,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response,
        },
      });
    } catch (o) {
      return I(o)
        ? { data: null, error: o }
        : { data: null, error: new Ot("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: t,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i,
  ) {
    if (!r)
      return {
        data: null,
        error: new to("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Qa())
        return {
          data: null,
          error: new Ot("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this._enroll({ friendlyName: t });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((u) => {
              var d;
              return (d = u.data) === null || d === void 0
                ? void 0
                : d.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === t &&
                      f.status !== "unverified",
                  );
            })
            .then((u) =>
              u
                ? this.client.mfa.unenroll({
                    factorId: u == null ? void 0 : u.id,
                  })
                : void 0,
            ),
          { data: null, error: a }
        );
      const { data: l, error: c } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: r, rpOrigins: n },
          signal: s,
        },
        { create: i },
      );
      return l
        ? this._verify({
            factorId: o.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: r,
              rpOrigins: n,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: c };
    } catch (o) {
      return I(o)
        ? { data: null, error: o }
        : { data: null, error: new Ot("Unexpected error in register", o) };
    }
  }
}
NC();
const WC = {
  url: GT,
  storageKey: JT,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: QT,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
  experimental: {},
};
async function Dp(e, t, r) {
  return await r();
}
const Xn = {};
class ro {
  get jwks() {
    var t, r;
    return (r =
      (t = Xn[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(t) {
    Xn[this.storageKey] = Object.assign(
      Object.assign({}, Xn[this.storageKey]),
      { jwks: t },
    );
  }
  get jwks_cached_at() {
    var t, r;
    return (r =
      (t = Xn[this.storageKey]) === null || t === void 0
        ? void 0
        : t.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    Xn[this.storageKey] = Object.assign(
      Object.assign({}, Xn[this.storageKey]),
      { cachedAt: t },
    );
  }
  constructor(t) {
    var r, n, s, i;
    ((this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log));
    const o = Object.assign(Object.assign({}, WC), t);
    if (
      ((this.storageKey = o.storageKey),
      (this.instanceID =
        (r = ro.nextInstanceID[this.storageKey]) !== null && r !== void 0
          ? r
          : 0),
      (ro.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!o.debug),
      typeof o.debug == "function" && (this.logger = o.debug),
      this.instanceID > 0 && je())
    ) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      (console.warn(a), this.logDebugMessages && console.trace(a));
    }
    if (
      ((this.persistSession = o.persistSession),
      (this.autoRefreshToken = o.autoRefreshToken),
      (this.experimental =
        (n = o.experimental) !== null && n !== void 0 ? n : {}),
      (this.admin = new jC({
        url: o.url,
        headers: o.headers,
        fetch: o.fetch,
        experimental: this.experimental,
      })),
      (this.url = o.url),
      (this.headers = o.headers),
      (this.fetch = u0(o.fetch)),
      (this.lock = o.lock || Dp),
      (this.detectSessionInUrl = o.detectSessionInUrl),
      (this.flowType = o.flowType),
      (this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader),
      (this.throwOnError = o.throwOnError),
      (this.lockAcquireTimeout = o.lockAcquireTimeout),
      o.lock
        ? (this.lock = o.lock)
        : this.persistSession &&
            je() &&
            !(
              (s = globalThis == null ? void 0 : globalThis.navigator) ===
                null || s === void 0
            ) &&
            s.locks
          ? (this.lock = AC)
          : (this.lock = Dp),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new HC(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      (this.passkey = {
        startRegistration: this._startPasskeyRegistration.bind(this),
        verifyRegistration: this._verifyPasskeyRegistration.bind(this),
        startAuthentication: this._startPasskeyAuthentication.bind(this),
        verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
        list: this._listPasskeys.bind(this),
        update: this._updatePasskey.bind(this),
        delete: this._deletePasskey.bind(this),
      }),
      this.persistSession
        ? (o.storage
            ? (this.storage = o.storage)
            : c0()
              ? (this.storage = globalThis.localStorage)
              : ((this.memoryStorage = {}),
                (this.storage = Np(this.memoryStorage))),
          o.userStorage && (this.userStorage = o.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Np(this.memoryStorage))),
      je() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey,
        );
      } catch (a) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          a,
        );
      }
      (i = this.broadcastChannel) === null ||
        i === void 0 ||
        i.addEventListener("message", async (a) => {
          this._debug(
            "received broadcast notification from other tab or client",
            a,
          );
          try {
            await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
          } catch (l) {
            this._debug("#broadcastChannel", "error", l);
          }
        });
    }
    o.skipAutoInitialize ||
      this.initialize().catch((a) => {
        this._debug("#initialize()", "error", a);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(t) {
    if (this.throwOnError && t && t.error) throw t.error;
    return t;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${o0}) ${new Date().toISOString()}`;
  }
  _debug(...t) {
    return (
      this.logDebugMessages && this.logger(this._logPrefix(), ...t),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize(),
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var t;
    try {
      let r = {},
        n = "none";
      if (
        (je() &&
          ((r = uC(window.location.href)),
          this._isImplicitGrantCallback(r)
            ? (n = "implicit")
            : (await this._isPKCECallback(r)) && (n = "pkce")),
        je() && this.detectSessionInUrl && n !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(r, n);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i,
            ),
            tC(i))
          ) {
            const l =
              (t = i.details) === null || t === void 0 ? void 0 : t.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            a,
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return (await this._recoverAndRefresh(), { error: null });
    } catch (r) {
      return I(r)
        ? this._returnResult({ error: r })
        : this._returnResult({
            error: new Ot("Unexpected error during initialization", r),
          });
    } finally {
      (await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end"));
    }
  }
  async signInAnonymously(t) {
    var r, n, s;
    try {
      const i = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (n =
                (r = t == null ? void 0 : t.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = t == null ? void 0 : t.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: ht,
        }),
        { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const l = o.session,
        c = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (i) {
      if (I(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(t) {
    var r, n, s;
    try {
      let i;
      if ("email" in t) {
        const { email: u, password: d, options: f } = t;
        let h = null,
          w = null;
        (this.flowType === "pkce" &&
          ([h, w] = await Yn(this.storage, this.storageKey)),
          (i = await U(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: u,
              password: d,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: h,
              code_challenge_method: w,
            },
            xform: ht,
          })));
      } else if ("phone" in t) {
        const { phone: u, password: d, options: f } = t;
        i = await U(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data:
              (n = f == null ? void 0 : f.data) !== null && n !== void 0
                ? n
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: ht,
        });
      } else
        throw new Jo(
          "You must provide either an email or phone number and a password",
        );
      const { data: o, error: a } = i;
      if (a || !o)
        return (
          await Re(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const l = o.session,
        c = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (i) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithPassword(t) {
    try {
      let r;
      if ("email" in t) {
        const { email: i, password: o, options: a } = t;
        r = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: jp,
          },
        );
      } else if ("phone" in t) {
        const { phone: i, password: o, options: a } = t;
        r = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: jp,
          },
        );
      } else
        throw new Jo(
          "You must provide either an email or phone number and a password",
        );
      const { data: n, error: s } = r;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!n || !n.session || !n.user) {
        const i = new Qn();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        n.session &&
          (await this._saveSession(n.session),
          await this._notifyAllSubscribers("SIGNED_IN", n.session)),
        this._returnResult({
          data: Object.assign(
            { user: n.user, session: n.session },
            n.weak_password ? { weakPassword: n.weak_password } : null,
          ),
          error: s,
        })
      );
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOAuth(t) {
    var r, n, s, i;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo:
        (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams:
        (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = t.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(t),
      )
    );
  }
  async signInWithWeb3(t) {
    const { chain: r } = t;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(t) {
    var r, n, s, i, o, a, l, c, u, d, f;
    let h, w;
    if ("message" in t) ((h = t.message), (w = t.signature));
    else {
      const { chain: v, wallet: x, statement: g, options: m } = t;
      let y;
      if (je())
        if (typeof x == "object") y = x;
        else {
          const A = window;
          if (
            "ethereum" in A &&
            typeof A.ethereum == "object" &&
            "request" in A.ethereum &&
            typeof A.ethereum.request == "function"
          )
            y = A.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof x != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        y = x;
      }
      const _ = new URL(
          (r = m == null ? void 0 : m.url) !== null && r !== void 0
            ? r
            : window.location.href,
        ),
        k = await y
          .request({ method: "eth_requestAccounts" })
          .then((A) => A)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
            );
          });
      if (!k || k.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
        );
      const S = h0(k[0]);
      let E =
        (n = m == null ? void 0 : m.signInWithEthereum) === null || n === void 0
          ? void 0
          : n.chainId;
      if (!E) {
        const A = await y.request({ method: "eth_chainId" });
        E = OC(A);
      }
      const R = {
        domain: _.host,
        address: S,
        statement: g,
        uri: _.href,
        version: "1",
        chainId: E,
        nonce:
          (s = m == null ? void 0 : m.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (o =
            (i = m == null ? void 0 : m.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (a = m == null ? void 0 : m.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (l = m == null ? void 0 : m.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (c = m == null ? void 0 : m.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.requestId,
        resources:
          (u = m == null ? void 0 : m.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.resources,
      };
      ((h = LC(R)),
        (w = await y.request({ method: "personal_sign", params: [IC(h), S] })));
    }
    try {
      const { data: v, error: x } = await U(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: h, signature: w },
            !((d = t.options) === null || d === void 0) && d.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = t.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null,
          ),
          xform: ht,
        },
      );
      if (x) throw x;
      if (!v || !v.session || !v.user) {
        const g = new Qn();
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      return (
        v.session &&
          (await this._saveSession(v.session),
          await this._notifyAllSubscribers("SIGNED_IN", v.session)),
        this._returnResult({ data: Object.assign({}, v), error: x })
      );
    } catch (v) {
      if (I(v))
        return this._returnResult({
          data: { user: null, session: null },
          error: v,
        });
      throw v;
    }
  }
  async signInWithSolana(t) {
    var r, n, s, i, o, a, l, c, u, d, f, h;
    let w, v;
    if ("message" in t) ((w = t.message), (v = t.signature));
    else {
      const { chain: x, wallet: g, statement: m, options: y } = t;
      let _;
      if (je())
        if (typeof g == "object") _ = g;
        else {
          const S = window;
          if (
            "solana" in S &&
            typeof S.solana == "object" &&
            (("signIn" in S.solana && typeof S.solana.signIn == "function") ||
              ("signMessage" in S.solana &&
                typeof S.solana.signMessage == "function"))
          )
            _ = S.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
            );
        }
      else {
        if (typeof g != "object" || !(y != null && y.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
          );
        _ = g;
      }
      const k = new URL(
        (r = y == null ? void 0 : y.url) !== null && r !== void 0
          ? r
          : window.location.href,
      );
      if ("signIn" in _ && _.signIn) {
        const S = await _.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                y == null ? void 0 : y.signInWithSolana,
              ),
              { version: "1", domain: k.host, uri: k.href },
            ),
            m ? { statement: m } : null,
          ),
        );
        let E;
        if (Array.isArray(S) && S[0] && typeof S[0] == "object") E = S[0];
        else if (
          S &&
          typeof S == "object" &&
          "signedMessage" in S &&
          "signature" in S
        )
          E = S;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
          );
        if (
          "signedMessage" in E &&
          "signature" in E &&
          (typeof E.signedMessage == "string" ||
            E.signedMessage instanceof Uint8Array) &&
          E.signature instanceof Uint8Array
        )
          ((w =
            typeof E.signedMessage == "string"
              ? E.signedMessage
              : new TextDecoder().decode(E.signedMessage)),
            (v = E.signature));
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
          );
      } else {
        if (
          !("signMessage" in _) ||
          typeof _.signMessage != "function" ||
          !("publicKey" in _) ||
          typeof _ != "object" ||
          !_.publicKey ||
          !("toBase58" in _.publicKey) ||
          typeof _.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
          );
        w = [
          `${k.host} wants you to sign in with your Solana account:`,
          _.publicKey.toBase58(),
          ...(m ? ["", m, ""] : [""]),
          "Version: 1",
          `URI: ${k.href}`,
          `Issued At: ${(s = (n = y == null ? void 0 : y.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
          ...(!(
            (i = y == null ? void 0 : y.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${y.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = y == null ? void 0 : y.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = y == null ? void 0 : y.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
            ? [`Chain ID: ${y.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = y == null ? void 0 : y.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${y.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (c = y == null ? void 0 : y.signInWithSolana) === null ||
            c === void 0
          ) && c.requestId
            ? [`Request ID: ${y.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (d =
              (u = y == null ? void 0 : y.signInWithSolana) === null ||
              u === void 0
                ? void 0
                : u.resources) === null || d === void 0
          ) && d.length
            ? [
                "Resources",
                ...y.signInWithSolana.resources.map((E) => `- ${E}`),
              ]
            : []),
        ].join(`
`);
        const S = await _.signMessage(new TextEncoder().encode(w), "utf8");
        if (!S || !(S instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
          );
        v = S;
      }
    }
    try {
      const { data: x, error: g } = await U(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: w, signature: _n(v) },
            !((f = t.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (h = t.options) === null || h === void 0
                        ? void 0
                        : h.captchaToken,
                  },
                }
              : null,
          ),
          xform: ht,
        },
      );
      if (g) throw g;
      if (!x || !x.session || !x.user) {
        const m = new Qn();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        x.session &&
          (await this._saveSession(x.session),
          await this._notifyAllSubscribers("SIGNED_IN", x.session)),
        this._returnResult({ data: Object.assign({}, x), error: g })
      );
    } catch (x) {
      if (I(x))
        return this._returnResult({
          data: { user: null, session: null },
          error: x,
        });
      throw x;
    }
  }
  async _exchangeCodeForSession(t) {
    const r = await mn(this.storage, `${this.storageKey}-code-verifier`),
      [n, s] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce") throw new rC();
      const { data: i, error: o } = await U(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: n },
          xform: ht,
        },
      );
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new Qn();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers(
            s === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            i.session,
          )),
        this._returnResult({
          data: Object.assign(Object.assign({}, i), {
            redirectType: s ?? null,
          }),
          error: o,
        })
      );
    } catch (i) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(i)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithIdToken(t) {
    try {
      const {
          options: r,
          provider: n,
          token: s,
          access_token: i,
          nonce: o,
        } = t,
        a = await U(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: n,
              id_token: s,
              access_token: i,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: ht,
          },
        ),
        { data: l, error: c } = a;
      if (c)
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      if (!l || !l.session || !l.user) {
        const u = new Qn();
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: c })
      );
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOtp(t) {
    var r, n, s, i, o;
    try {
      if ("email" in t) {
        const { email: a, options: l } = t;
        let c = null,
          u = null;
        this.flowType === "pkce" &&
          ([c, u] = await Yn(this.storage, this.storageKey));
        const { error: d } = await U(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (r = l == null ? void 0 : l.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
              n !== void 0
                ? n
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: c,
            code_challenge_method: u,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: d,
        });
      }
      if ("phone" in t) {
        const { phone: a, options: l } = t,
          { data: c, error: u } = await U(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (o = l == null ? void 0 : l.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            },
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: c == null ? void 0 : c.message_id,
          },
          error: u,
        });
      }
      throw new Jo("You must provide either an email or phone number.");
    } catch (a) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(t) {
    var r, n;
    try {
      let s, i;
      "options" in t &&
        ((s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (i =
          (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken));
      const { data: o, error: a } = await U(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: ht,
        },
      );
      if (a) throw a;
      if (!o) throw new Error("An error occurred on token verification.");
      const l = o.session,
        c = o.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l,
          )),
        this._returnResult({ data: { user: c, session: l }, error: null })
      );
    } catch (s) {
      if (I(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(t) {
    var r, n, s, i, o;
    try {
      let a = null,
        l = null;
      this.flowType === "pkce" &&
        ([a, l] = await Yn(this.storage, this.storageKey));
      const c = await U(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null,
                ),
                "domain" in t ? { domain: t.domain } : null,
              ),
              {
                redirect_to:
                  (n =
                    (r = t.options) === null || r === void 0
                      ? void 0
                      : r.redirectTo) !== null && n !== void 0
                    ? n
                    : void 0,
              },
            ),
            !((s = t == null ? void 0 : t.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null,
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: l,
          },
        ),
        headers: this.headers,
        xform: CC,
      });
      return (
        !((i = c.data) === null || i === void 0) &&
          i.url &&
          je() &&
          !(
            !((o = t.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(c.data.url),
        this._returnResult(c)
      );
    } catch (a) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate(),
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) throw n;
        if (!r) throw new Te();
        const { error: s } = await U(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token },
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (t) {
      if (I(t))
        return this._returnResult({
          data: { user: null, session: null },
          error: t,
        });
      throw t;
    }
  }
  async resend(t) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in t) {
        const { email: n, type: s, options: i } = t,
          { error: o } = await U(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in t) {
        const { phone: n, type: s, options: i } = t,
          { data: o, error: a } = await U(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        });
      }
      throw new Jo(
        "You must provide either an email or phone number and a type",
      );
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (r) => r),
      )
    );
  }
  async _acquireLock(t, r) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await n, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })(),
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey,
        );
        try {
          this.lockAcquired = !0;
          const n = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })(),
            ),
              await n;
            this.pendingInLock.length;
          ) {
            const s = [...this.pendingInLock];
            (await Promise.all(s), this.pendingInLock.splice(0, s.length));
          }
          return await n;
        } finally {
          (this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey,
          ),
            (this.lockAcquired = !1));
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await t(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    (this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack,
        ));
    try {
      let t = null;
      const r = await mn(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (t = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid",
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < yc : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${n ? "" : " not"} expired`,
          "expires_at",
          t.expires_at,
        ),
        !n)
      ) {
        if (this.userStorage) {
          const o = await mn(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (t.user = o.user) : (t.user = wc());
        }
        if (
          this.storage.isServer &&
          t.user &&
          !t.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          ((t.user = kC(t.user, o)),
            o.value && (this.suppressGetSessionWarning = !0));
        }
        return { data: { session: t }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(
        t.refresh_token,
      );
      return i
        ? this._returnResult({ data: { session: null }, error: i })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    if (t) return await this._getUser(t);
    await this.initializePromise;
    const r = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser(),
    );
    return (r.data.user && (this.suppressGetSessionWarning = !0), r);
  }
  async _getUser(t) {
    try {
      return t
        ? await U(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Lr,
          })
        : await this._useSession(async (r) => {
            var n, s, i;
            const { data: o, error: a } = r;
            if (a) throw a;
            return !(
              !((n = o.session) === null || n === void 0) && n.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Te() }
              : await U(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = o.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: Lr,
                });
          });
    } catch (r) {
      if (I(r))
        return (
          Go(r) &&
            (await this._removeSession(),
            await Re(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: r })
        );
      throw r;
    }
  }
  async updateUser(t, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(t, r),
      )
    );
  }
  async _updateUser(t, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: s, error: i } = n;
        if (i) throw i;
        if (!s.session) throw new Te();
        const o = s.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          t.email != null &&
          ([a, l] = await Yn(this.storage, this.storageKey));
        const { data: c, error: u } = await U(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: o.access_token,
            xform: Lr,
          },
        );
        if (u) throw u;
        return (
          (o.user = c.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (n) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(n)))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(t),
      )
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Te();
      const r = Date.now() / 1e3;
      let n = r,
        s = !0,
        i = null;
      const { payload: o } = Yo(t.access_token);
      if ((o.exp && ((n = o.exp), (s = n <= r)), s)) {
        const { data: a, error: l } = await this._callRefreshToken(
          t.refresh_token,
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(t.access_token);
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        ((i = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i));
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(t),
      )
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!t) {
          const { data: o, error: a } = r;
          if (a) throw a;
          t = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Te();
        const { data: s, error: i } = await this._callRefreshToken(
          t.refresh_token,
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
            ? this._returnResult({
                data: { user: s.user, session: s },
                error: null,
              })
            : this._returnResult({
                data: { user: null, session: null },
                error: null,
              });
      });
    } catch (r) {
      if (I(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async _getSessionFromURL(t, r) {
    var n;
    try {
      if (!je()) throw new Qo("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new Qo(
          t.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: t.error || "unspecified_error",
            code: t.error_code || "unspecified_code",
          },
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new kp("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Qo("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
        )
          throw new kp("No code detected.");
        const { data: y, error: _ } = await this._exchangeCodeForSession(
          t.code,
        );
        if (_) throw _;
        const k = new URL(window.location.href);
        return (
          k.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", k.toString()),
          {
            data: {
              session: y.session,
              redirectType:
                (n = y.redirectType) !== null && n !== void 0 ? n : null,
            },
            error: null,
          }
        );
      }
      const {
        provider_token: s,
        provider_refresh_token: i,
        access_token: o,
        refresh_token: a,
        expires_in: l,
        expires_at: c,
        token_type: u,
      } = t;
      if (!o || !l || !a || !u) throw new Qo("No session defined in URL");
      const d = Math.round(Date.now() / 1e3),
        f = parseInt(l);
      let h = d + f;
      c && (h = parseInt(c));
      const w = h - d;
      w * 1e3 <= ts &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${f}s`,
        );
      const v = h - f;
      d - v >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            v,
            h,
            d,
          )
        : d - v < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            v,
            h,
            d,
          );
      const { data: x, error: g } = await this._getUser(o);
      if (g) throw g;
      const m = {
        provider_token: s,
        provider_refresh_token: i,
        access_token: o,
        expires_in: f,
        expires_at: h,
        refresh_token: a,
        token_type: u,
        user: x.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: m, redirectType: t.type },
          error: null,
        })
      );
    } catch (s) {
      if (I(s))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: s,
        });
      throw s;
    }
  }
  _isImplicitGrantCallback(t) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), t)
      : !!(t.access_token || t.error_description);
  }
  async _isPKCECallback(t) {
    const r = await mn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && r);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(t),
      )
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: s, error: i } = r;
      if (i && !Go(i)) return this._returnResult({ error: i });
      const o =
        (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, t);
        if (
          a &&
          !(
            (eC(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)) ||
            Go(a)
          )
        )
          return this._returnResult({ error: a });
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await Re(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(t) {
    const r = cC(),
      n = {
        id: r,
        callback: t,
        unsubscribe: () => {
          (this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r,
          ),
            this.stateChangeEmitters.delete(r));
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, n),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: n } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (r) => {
      var n, s;
      try {
        const {
          data: { session: i },
          error: o,
        } = r;
        if (o) throw o;
        (await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0
          ? void 0
          : n.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", i));
      } catch (i) {
        (await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", i),
          Go(i) ? console.warn(i) : console.error(i));
      }
    });
  }
  async resetPasswordForEmail(t, r = {}) {
    let n = null,
      s = null;
    this.flowType === "pkce" &&
      ([n, s] = await Yn(this.storage, this.storageKey, !0));
    try {
      return await U(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: n,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (i) {
      if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n) throw n;
      return this._returnResult({
        data: {
          identities: (t = r.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(t) {
    return "token" in t
      ? this.linkIdentityIdToken(t)
      : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var r;
    try {
      const { data: n, error: s } = await this._useSession(async (i) => {
        var o, a, l, c, u;
        const { data: d, error: f } = i;
        if (f) throw f;
        const h = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (o = t.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          },
        );
        return await U(this.fetch, "GET", h, {
          headers: this.headers,
          jwt:
            (u =
              (c = d.session) === null || c === void 0
                ? void 0
                : c.access_token) !== null && u !== void 0
              ? u
              : void 0,
        });
      });
      if (s) throw s;
      return (
        je() &&
          !(
            !((r = t.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(n == null ? void 0 : n.url),
        this._returnResult({
          data: { provider: t.provider, url: n == null ? void 0 : n.url },
          error: null,
        })
      );
    } catch (n) {
      if (I(n))
        return this._returnResult({
          data: { provider: t.provider, url: null },
          error: n,
        });
      throw n;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const {
          error: s,
          data: { session: i },
        } = r;
        if (s) throw s;
        const {
            options: o,
            provider: a,
            token: l,
            access_token: c,
            nonce: u,
          } = t,
          d = await U(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.access_token) !== null &&
                n !== void 0
                  ? n
                  : void 0,
              body: {
                provider: a,
                id_token: l,
                access_token: c,
                nonce: u,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: ht,
            },
          ),
          { data: f, error: h } = d;
        return h
          ? this._returnResult({
              data: { user: null, session: null },
              error: h,
            })
          : !f || !f.session || !f.user
            ? this._returnResult({
                data: { user: null, session: null },
                error: new Qn(),
              })
            : (f.session &&
                (await this._saveSession(f.session),
                await this._notifyAllSubscribers("USER_UPDATED", f.session)),
              this._returnResult({ data: f, error: h }));
      } catch (s) {
        if ((await Re(this.storage, `${this.storageKey}-code-verifier`), I(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) throw o;
        return await U(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (n = i.session) === null || n === void 0
                  ? void 0
                  : n.access_token) !== null && s !== void 0
                ? s
                : void 0,
          },
        );
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _refreshAccessToken(t) {
    const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await fC(
        async (s) => (
          s > 0 && (await hC(200 * Math.pow(2, s - 1))),
          this._debug(r, "refreshing attempt", s),
          await U(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: ht },
          )
        ),
        (s, i) => {
          const o = 200 * Math.pow(2, s);
          return i && vc(i) && Date.now() + o - n < ts;
        },
      );
    } catch (n) {
      if ((this._debug(r, "error", n), I(n)))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        r,
        "url",
        n,
      ),
      je() && !r.skipBrowserRedirect && window.location.assign(n),
      { data: { provider: t, url: n }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const s = await mn(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await mn(this.userStorage, this.storageKey + "-user");
        (!this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: s.user }),
          await rs(this.userStorage, this.storageKey + "-user", o)),
          (s.user =
            (t = o == null ? void 0 : o.user) !== null && t !== void 0
              ? t
              : wc()));
      } else if (s && !s.user && !s.user) {
        const o = await mn(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((s.user = o.user),
            await Re(this.storage, this.storageKey + "-user"),
            await rs(this.storage, this.storageKey, s))
          : (s.user = wc());
      }
      if (
        (this._debug(n, "session from storage", s), !this._isValidSession(s))
      ) {
        (this._debug(n, "session is not valid"),
          s !== null && (await this._removeSession()));
        return;
      }
      const i =
        ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        yc;
      if (
        (this._debug(
          n,
          `session has${i ? "" : " not"} expired with margin of ${yc}s`,
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o &&
            (console.error(o),
            vc(o) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                o,
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(s.access_token);
          !a && o != null && o.user
            ? ((s.user = o.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                n,
                "could not get user data, skipping SIGNED_IN notification",
              );
        } catch (o) {
          (console.error("Error getting user data:", o),
            this._debug(
              n,
              "error getting user data, skipping SIGNED_IN notification",
              o,
            ));
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      (this._debug(n, "error", s), console.error(s));
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var r, n;
    if (!t) throw new Te();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new Nl();
      const { data: i, error: o } = await this._refreshAccessToken(t);
      if (o) throw o;
      if (!i.session) throw new Te();
      (await this._saveSession(i.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session));
      const a = { data: i.session, error: null };
      return (this.refreshingDeferred.resolve(a), a);
    } catch (i) {
      if ((this._debug(s, "error", i), I(i))) {
        const o = { data: null, error: i };
        return (
          vc(i) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(o),
          o
        );
      }
      throw (
        (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
        i
      );
    } finally {
      ((this.refreshingDeferred = null), this._debug(s, "end"));
    }
  }
  async _notifyAllSubscribers(t, r, n = !0) {
    const s = `#_notifyAllSubscribers(${t})`;
    this._debug(s, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel &&
        n &&
        this.broadcastChannel.postMessage({ event: t, session: r });
      const i = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(t, r);
          } catch (l) {
            i.push(l);
          }
        });
      if ((await Promise.all(o), i.length > 0)) {
        for (let a = 0; a < i.length; a += 1) console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(t) {
    (this._debug("#_saveSession()", t),
      (this.suppressGetSessionWarning = !0),
      await Re(this.storage, `${this.storageKey}-code-verifier`));
    const r = Object.assign({}, t),
      n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n &&
        r.user &&
        (await rs(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const s = Object.assign({}, r);
      delete s.user;
      const i = Pp(s);
      await rs(this.storage, this.storageKey, i);
    } else {
      const s = Pp(r);
      await rs(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    (this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await Re(this.storage, this.storageKey),
      await Re(this.storage, this.storageKey + "-code-verifier"),
      await Re(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Re(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null));
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        je() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
    const t = setInterval(() => this._autoRefreshTokenTick(), ts);
    ((this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t));
    const r = setTimeout(async () => {
      (await this.initializePromise, await this._autoRefreshTokenTick());
    }, 0);
    ((this.autoRefreshTickTimeout = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r));
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    ((this.autoRefreshTicker = null), t && clearInterval(t));
    const r = this.autoRefreshTickTimeout;
    ((this.autoRefreshTickTimeout = null), r && clearTimeout(r));
  }
  async startAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._startAutoRefresh());
  }
  async stopAutoRefresh() {
    (this._removeVisibilityChangedCallback(), await this._stopAutoRefresh());
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((n.expires_at * 1e3 - t) / ts);
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${ts}ms, refresh threshold is ${Uu} ticks`,
              ),
                s <= Uu && (await this._callRefreshToken(n.refresh_token)));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t instanceof d0)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !je() || !(window != null && window.addEventListener))
    )
      return (this.autoRefreshToken && this.startAutoRefresh(), !1);
    try {
      ((this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (t) {
          this._debug("#visibilityChangedCallback", "error", t);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback,
          ),
        await this._onVisibilityChanged(!0));
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const r = `#_onVisibilityChanged(${t})`;
    (this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh());
  }
  async _getUrlForProvider(t, r, n) {
    const s = [`provider=${encodeURIComponent(r)}`];
    if (
      (n != null &&
        n.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
      n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [i, o] = await Yn(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(a.toString());
    }
    if (n != null && n.queryParams) {
      const i = new URLSearchParams(n.queryParams);
      s.push(i.toString());
    }
    return (
      n != null &&
        n.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
      `${t}?${s.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: s, error: i } = r;
        return i
          ? this._returnResult({ data: null, error: i })
          : await U(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) return this._returnResult({ data: null, error: o });
        const a = Object.assign(
            { friendly_name: t.friendlyName, factor_type: t.factorType },
            t.factorType === "phone"
              ? { phone: t.phone }
              : t.factorType === "totp"
                ? { issuer: t.issuer }
                : {},
          ),
          { data: l, error: c } = await U(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            },
          );
        return c
          ? this._returnResult({ data: null, error: c })
          : (t.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = Object.assign(
              { challenge_id: t.challengeId },
              "webauthn" in t
                ? {
                    webauthn: Object.assign(Object.assign({}, t.webauthn), {
                      credential_response:
                        t.webauthn.type === "create"
                          ? $p(t.webauthn.credential_response)
                          : Mp(t.webauthn.credential_response),
                    }),
                  }
                : { code: t.code },
            ),
            { data: a, error: l } = await U(
              this.fetch,
              "POST",
              `${this.url}/factors/${t.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (n = s == null ? void 0 : s.session) === null || n === void 0
                    ? void 0
                    : n.access_token,
              },
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a,
                ),
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (I(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = await U(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/challenge`,
            {
              body: t,
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            },
          );
          if (o.error) return o;
          const { data: a } = o;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: Ip(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      {
                        publicKey: Lp(a.webauthn.credential_options.publicKey),
                      },
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (I(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: r, error: n } = await this._challenge({
      factorId: t.factorId,
    });
    return n
      ? this._returnResult({ data: null, error: n })
      : await this._verify({
          factorId: t.factorId,
          challengeId: r.id,
          code: t.code,
        });
  }
  async _listFactors() {
    var t;
    const {
      data: { user: r },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const i of (t = r == null ? void 0 : r.factors) !== null &&
    t !== void 0
      ? t
      : [])
      (s.all.push(i), i.status === "verified" && s[i.factor_type].push(i));
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(t) {
    var r, n, s, i;
    if (t)
      try {
        const { payload: h } = Yo(t);
        let w = null;
        h.aal && (w = h.aal);
        let v = w;
        const {
          data: { user: x },
          error: g,
        } = await this.getUser(t);
        if (g) return this._returnResult({ data: null, error: g });
        ((n =
          (r = x == null ? void 0 : x.factors) === null || r === void 0
            ? void 0
            : r.filter((_) => _.status === "verified")) !== null && n !== void 0
          ? n
          : []
        ).length > 0 && (v = "aal2");
        const y = h.amr || [];
        return {
          data: {
            currentLevel: w,
            nextLevel: v,
            currentAuthenticationMethods: y,
          },
          error: null,
        };
      } catch (h) {
        if (I(h)) return this._returnResult({ data: null, error: h });
        throw h;
      }
    const {
      data: { session: o },
      error: a,
    } = await this.getSession();
    if (a) return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: l } = Yo(o.access_token);
    let c = null;
    l.aal && (c = l.aal);
    let u = c;
    ((i =
      (s = o.user.factors) === null || s === void 0
        ? void 0
        : s.filter((h) => h.status === "verified")) !== null && i !== void 0
      ? i
      : []
    ).length > 0 && (u = "aal2");
    const f = l.amr || [];
    return {
      data: { currentLevel: c, nextLevel: u, currentAuthenticationMethods: f },
      error: null,
    };
  }
  async _getAuthorizationDetails(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
            ? await U(
                this.fetch,
                "GET",
                `${this.url}/oauth/authorizations/${t}`,
                {
                  headers: this.headers,
                  jwt: n.access_token,
                  xform: (i) => ({ data: i, error: null }),
                },
              )
            : this._returnResult({ data: null, error: new Te() });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _approveAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new Te() });
        const o = await U(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            je() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _denyAuthorization(t, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new Te() });
        const o = await U(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${t}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          },
        );
        return (
          o.data &&
            o.data.redirect_url &&
            je() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        return n
          ? this._returnResult({ data: null, error: n })
          : r
            ? await U(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: r.access_token,
                xform: (s) => ({ data: s, error: null }),
              })
            : this._returnResult({ data: null, error: new Te() });
      });
    } catch (t) {
      if (I(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _revokeOAuthGrant(t) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
            ? (await U(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                headers: this.headers,
                jwt: n.access_token,
                query: { client_id: t.clientId },
                noResolveJson: !0,
              }),
              { data: {}, error: null })
            : this._returnResult({ data: null, error: new Te() });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(t, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === t);
    if (n) return n;
    const s = Date.now();
    if (
      ((n = this.jwks.keys.find((a) => a.kid === t)),
      n && this.jwks_cached_at + XT > s)
    )
      return n;
    const { data: i, error: o } = await U(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers },
    );
    if (o) throw o;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (n = i.keys.find((a) => a.kid === t)),
      !n)
      ? null
      : n;
  }
  async getClaims(t, r = {}) {
    try {
      let n = t;
      if (!n) {
        const { data: h, error: w } = await this.getSession();
        if (w || !h.session)
          return this._returnResult({ data: null, error: w });
        n = h.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: o,
        raw: { header: a, payload: l },
      } = Yo(n);
      (r != null && r.allowExpired) || xC(i.exp);
      const c =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                  ? void 0
                  : r.jwks,
            );
      if (!c) {
        const { error: h } = await this.getUser(n);
        if (h) throw h;
        return { data: { claims: i, header: s, signature: o }, error: null };
      }
      const u = bC(s.alg),
        d = await crypto.subtle.importKey("jwk", c, u, !0, ["verify"]);
      if (!(await crypto.subtle.verify(u, d, o, aC(`${a}.${l}`))))
        throw new zu("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: o }, error: null };
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async signInWithPasskey(t) {
    var r, n, s;
    Et(this.experimental);
    try {
      if (!Qa())
        return this._returnResult({
          data: null,
          error: new Ot("Browser does not support WebAuthn", null),
        });
      const { data: i, error: o } = await this._startPasskeyAuthentication({
        options: {
          captchaToken:
            (r = t == null ? void 0 : t.options) === null || r === void 0
              ? void 0
              : r.captchaToken,
        },
      });
      if (o || !i) return this._returnResult({ data: null, error: o });
      const a = Lp(i.options),
        l =
          (s =
            (n = t == null ? void 0 : t.options) === null || n === void 0
              ? void 0
              : n.signal) !== null && s !== void 0
            ? s
            : Hu.createNewAbortSignal(),
        { data: c, error: u } = await m0({ publicKey: a, signal: l });
      if (u || !c)
        return this._returnResult({
          data: null,
          error: u ?? new Ot("WebAuthn ceremony failed", null),
        });
      const d = Mp(c);
      return this._verifyPasskeyAuthentication({
        challengeId: i.challenge_id,
        credential: d,
      });
    } catch (i) {
      if (I(i)) return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async registerPasskey(t) {
    var r, n;
    Et(this.experimental);
    try {
      if (!Qa())
        return this._returnResult({
          data: null,
          error: new Ot("Browser does not support WebAuthn", null),
        });
      const { data: s, error: i } = await this._startPasskeyRegistration();
      if (i || !s) return this._returnResult({ data: null, error: i });
      const o = Ip(s.options),
        a =
          (n =
            (r = t == null ? void 0 : t.options) === null || r === void 0
              ? void 0
              : r.signal) !== null && n !== void 0
            ? n
            : Hu.createNewAbortSignal(),
        { data: l, error: c } = await p0({ publicKey: o, signal: a });
      if (c || !l)
        return this._returnResult({
          data: null,
          error: c ?? new Ot("WebAuthn ceremony failed", null),
        });
      const u = $p(l);
      return this._verifyPasskeyRegistration({
        challengeId: s.challenge_id,
        credential: u,
      });
    } catch (s) {
      if (I(s)) return this._returnResult({ data: null, error: s });
      throw s;
    }
  }
  async _startPasskeyRegistration() {
    Et(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) return this._returnResult({ data: null, error: n });
        if (!r) return this._returnResult({ data: null, error: new Te() });
        const { data: s, error: i } = await U(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/options`,
          { headers: this.headers, jwt: r.access_token, body: {} },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: s, error: null });
      });
    } catch (t) {
      if (I(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verifyPasskeyRegistration(t) {
    Et(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        if (s) return this._returnResult({ data: null, error: s });
        if (!n) return this._returnResult({ data: null, error: new Te() });
        const { data: i, error: o } = await U(
          this.fetch,
          "POST",
          `${this.url}/passkeys/registration/verify`,
          {
            headers: this.headers,
            jwt: n.access_token,
            body: { challenge_id: t.challengeId, credential: t.credential },
          },
        );
        return o
          ? this._returnResult({ data: null, error: o })
          : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _startPasskeyAuthentication(t) {
    var r;
    Et(this.experimental);
    try {
      const { data: n, error: s } = await U(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/options`,
        {
          headers: this.headers,
          body: {
            gotrue_meta_security: {
              captcha_token:
                (r = t == null ? void 0 : t.options) === null || r === void 0
                  ? void 0
                  : r.captchaToken,
            },
          },
        },
      );
      return s
        ? this._returnResult({ data: null, error: s })
        : this._returnResult({ data: n, error: null });
    } catch (n) {
      if (I(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verifyPasskeyAuthentication(t) {
    Et(this.experimental);
    try {
      const { data: r, error: n } = await U(
        this.fetch,
        "POST",
        `${this.url}/passkeys/authentication/verify`,
        {
          headers: this.headers,
          body: { challenge_id: t.challengeId, credential: t.credential },
          xform: ht,
        },
      );
      return n
        ? this._returnResult({ data: null, error: n })
        : (r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
          this._returnResult({ data: r, error: null }));
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listPasskeys() {
    Et(this.experimental);
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: r },
          error: n,
        } = t;
        if (n) return this._returnResult({ data: null, error: n });
        if (!r) return this._returnResult({ data: null, error: new Te() });
        const { data: s, error: i } = await U(
          this.fetch,
          "GET",
          `${this.url}/passkeys`,
          {
            headers: this.headers,
            jwt: r.access_token,
            xform: (o) => ({ data: o, error: null }),
          },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: s, error: null });
      });
    } catch (t) {
      if (I(t)) return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _updatePasskey(t) {
    Et(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        if (s) return this._returnResult({ data: null, error: s });
        if (!n) return this._returnResult({ data: null, error: new Te() });
        const { data: i, error: o } = await U(
          this.fetch,
          "PATCH",
          `${this.url}/passkeys/${t.passkeyId}`,
          {
            headers: this.headers,
            jwt: n.access_token,
            body: { friendly_name: t.friendlyName },
          },
        );
        return o
          ? this._returnResult({ data: null, error: o })
          : this._returnResult({ data: i, error: null });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _deletePasskey(t) {
    Et(this.experimental);
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        if (s) return this._returnResult({ data: null, error: s });
        if (!n) return this._returnResult({ data: null, error: new Te() });
        const { error: i } = await U(
          this.fetch,
          "DELETE",
          `${this.url}/passkeys/${t.passkeyId}`,
          { headers: this.headers, jwt: n.access_token, noResolveJson: !0 },
        );
        return i
          ? this._returnResult({ data: null, error: i })
          : this._returnResult({ data: null, error: null });
      });
    } catch (r) {
      if (I(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
ro.nextInstanceID = {};
const VC = ro,
  KC = "2.105.4";
let mi = "";
typeof Deno < "u"
  ? (mi = "deno")
  : typeof document < "u"
    ? (mi = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
      ? (mi = "react-native")
      : (mi = "node");
const qC = { "X-Client-Info": `supabase-js-${mi}/${KC}` },
  GC = { headers: qC },
  JC = { schema: "public" },
  QC = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  YC = {};
function no(e) {
  "@babel/helpers - typeof";
  return (
    (no =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    no(e)
  );
}
function XC(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZC(e) {
  var t = XC(e, "string");
  return no(t) == "symbol" ? t : t + "";
}
function eP(e, t, r) {
  return (
    (t = ZC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Up(Object(r), !0).forEach(function (n) {
          eP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Up(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
const tP = (e) => (e ? (...t) => e(...t) : (...t) => fetch(...t)),
  rP = () => Headers,
  nP = (e, t, r) => {
    const n = tP(r),
      s = rP();
    return async (i, o) => {
      var a;
      const l = (a = await t()) !== null && a !== void 0 ? a : e;
      let c = new s(o == null ? void 0 : o.headers);
      return (
        c.has("apikey") || c.set("apikey", e),
        c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
        n(i, ye(ye({}, o), {}, { headers: c }))
      );
    };
  };
function sP(e) {
  return e.endsWith("/") ? e : e + "/";
}
function iP(e, t) {
  var r, n;
  const { db: s, auth: i, realtime: o, global: a } = e,
    { db: l, auth: c, realtime: u, global: d } = t,
    f = {
      db: ye(ye({}, l), s),
      auth: ye(ye({}, c), i),
      realtime: ye(ye({}, u), o),
      storage: {},
      global: ye(
        ye(ye({}, d), a),
        {},
        {
          headers: ye(
            ye(
              {},
              (r = d == null ? void 0 : d.headers) !== null && r !== void 0
                ? r
                : {},
            ),
            (n = a == null ? void 0 : a.headers) !== null && n !== void 0
              ? n
              : {},
          ),
        },
      ),
      accessToken: async () => "",
    };
  return (
    e.accessToken ? (f.accessToken = e.accessToken) : delete f.accessToken,
    f
  );
}
function oP(e) {
  const t = e == null ? void 0 : e.trim();
  if (!t) throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(sP(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var aP = class extends VC {
    constructor(e) {
      super(e);
    }
  },
  lP = class {
    constructor(e, t, r) {
      var n, s;
      ((this.supabaseUrl = e), (this.supabaseKey = t));
      const i = oP(e);
      if (!t) throw new Error("supabaseKey is required.");
      ((this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws",
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i)));
      const o = `sb-${i.hostname.split(".")[0]}-auth-token`,
        a = {
          db: JC,
          realtime: YC,
          auth: ye(ye({}, QC), {}, { storageKey: o }),
          global: GC,
        },
        l = iP(r ?? {}, a);
      if (
        ((this.storageKey =
          (n = l.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        ((this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (u, d) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`,
                );
              },
            },
          )));
      else {
        var c;
        this.auth = this._initSupabaseAuthClient(
          (c = l.auth) !== null && c !== void 0 ? c : {},
          this.headers,
          l.global.fetch,
        );
      }
      ((this.fetch = nP(t, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          ye(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
              fetch: this.fetch,
            },
            l.realtime,
          ),
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((u) => this.realtime.setAuth(u))
            .catch((u) =>
              console.warn("Failed to set initial Realtime auth token:", u),
            ),
        (this.rest = new IE(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
          timeout: l.db.timeout,
          urlLengthLimit: l.db.urlLengthLimit,
        })),
        (this.storage = new qT(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          r == null ? void 0 : r.storage,
        )),
        l.accessToken || this._listenForAuthEvents());
    }
    get functions() {
      return new SE(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, t = {}, r = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(e, t, r);
    }
    channel(e, t = { config: {} }) {
      return this.realtime.channel(e, t);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var e = this,
        t,
        r;
      if (e.accessToken) return await e.accessToken();
      const { data: n } = await e.auth.getSession();
      return (t =
        (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && t !== void 0
        ? t
        : e.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: c,
        experimental: u,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
      },
      h,
      w,
    ) {
      const v = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new aP({
        url: this.authUrl.href,
        headers: ye(ye({}, v), h),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: t,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: c,
        experimental: u,
        fetch: w,
        lockAcquireTimeout: d,
        skipAutoInitialize: f,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (x) => x.toLowerCase() === "authorization",
        ),
      });
    }
    _initRealtimeClient(e) {
      return new gT(
        this.realtimeUrl.href,
        ye(
          ye({}, e),
          {},
          {
            params: ye(
              ye({}, { apikey: this.supabaseKey }),
              e == null ? void 0 : e.params,
            ),
          },
        ),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((e, t) => {
        this._handleTokenChanged(
          e,
          "CLIENT",
          t == null ? void 0 : t.access_token,
        );
      });
    }
    _handleTokenChanged(e, t, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          t == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const cP = (e, t, r) => new lP(e, t, r);
function uP() {
  if (typeof window < "u") return !1;
  const e = globalThis.process;
  if (!e) return !1;
  const t = e.version;
  if (t == null) return !1;
  const r = t.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
uP() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
  );

export { Cb as QueryClientProvider, Eb as QueryClient, G_ as ClipboardListIcon, J_ as HouseIcon, Kk as ToastViewport, Q_ as LocateFixedIcon, Qf as LockIcon, W1 as SonnerToaster, X_ as MailIcon, Y_ as LogOutIcon, Yf as NavigationIcon, Yt as Button, Z_ as MinusIcon, ak as ThumbsUpIcon, av as ArrowLeftIcon, b as React, c1 as Routes, cP as createSupabaseClient, ck as UserRoundIcon, cv as CheckIcon, dv as MapPinIcon, ek as PackageIcon, h1 as BrowserRouter, ik as ShieldCheckIcon, jy as useLocation, kl as ChevronRightIcon, lk as TrendingUpIcon, lv as BadgeDollarSignIcon, ms as toast, nk as RadioIcon, ok as ShoppingCartIcon, p as jsxRuntime, py as createRoot, q_ as CalendarDaysIcon, rk as PlusIcon, sk as ScanLineIcon, tk as PhoneIcon, uv as Clock3Icon, vE as TooltipProvider, vu as Route };
