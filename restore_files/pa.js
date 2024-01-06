/*@ 2023 PayPal (v1.8.11) */ ! function() {
	"use strict";

	function e(e, t) {
		var n, r = Object.keys(e);
		return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		})), r.push.apply(r, n)), r
	}

	function s(r) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2 ? e(Object(i), !0).forEach(function(t) {
				var e, n;
				e = r, n = i[t = t], (t = function(t) {
					t = function(t, e) {
						if ("object" != typeof t || null === t) return t;
						var n = t[Symbol.toPrimitive];
						if (n === undefined) return ("string" === e ? String : Number)(t);
						t = n.call(t, e || "default");
						if ("object" != typeof t) return t;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(t, "string");
					return "symbol" == typeof t ? t : String(t)
				}(t)) in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function(t) {
				Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t))
			})
		}
		return r
	}
	var d = window.location && window.location.hostname || "",
		t = "https://www.paypalobjects.com",
		r = "corp",
		M = "https://t.paypal.com/ts",
		l = "",
		B = ".paypal.com",
		U = "activitiesnodeweb,autopaynodeweb,brcappnodeweb,causefundraisernodeweb,causemisspiggynodeweb,devdashnodeweb,devdiscoverynodeweb,doccenternodeweb,donatenodeweb,dpnodeweb,givingplatformnodeweb,growthnodeweb,homeinfonodeweb,marketingnodeweb,moneynodeweb,mppnodeweb,msgsnodeweb,p2pnodeweb,poolsnodeweb,ppcmsnodeweb,ppme,preferencesnodeweb,privacynodeweb,progressivenodeweb,summarynodeweb",
		z = /\.(paypal(inc|corp))\.com$/i,
		J = (!l && z.test(d) && (l = r), /\.cn$/);

	function V() {
		return !l && J.test(d)
	}
	V() && (t = "https://objects.paypal.cn", M = "https://t.paypal.cn/ts", B = ".paypal.cn");
	var Q = V() ? /www\.paypal\.cn$/i : /\.(paypal(|-here|-businessloan|-borderlesscommerce|inc|corp|-status|-credit|-map)|joinhoney|konfio|paypal-mktg)\.(com|me|co.uk|com.au|mx|de)$/i,
		H = t + (V() ? "/pa/mi/gopay/latmconf.js" : "/pa/mi/paypal/latmconf.js"),
		Y = !1,
		$ = {
			all: /\.paypal(|inc|corp|-status)\.com$/i,
			internal: z
		},
		W = {
			pypl: "ZN_1yNnlIufRcT75CB",
			dev: "ZN_824XgJYopuf0rcx",
			demo: "ZN_5ifKwc3DnZTXMVL",
			ppstatus: "ZN_6X1kz7ll5Vk5V5Q",
			internal: "ZN_5jPIwCvswGiLgu9"
		},
		G = t + "/pa/3pjs/qualtrics/1.64.1/";

	function o() {
		return (new Date).getTime()
	}

	function m(t) {
		return Math.round(parseFloat(t)) || 0
	}

	function Z(t) {
		if (t && void 0 !== t && "object" == typeof t)
			for (var e in t)
				if (t.hasOwnProperty(e)) return;
		return 1
	}

	function K(t) {
		if (!t || t.constructor !== Object && t.constructor !== Array) return t;
		var e, n = t.constructor();
		for (e in t) n[e] = K(t[e]);
		return n
	}

	function c(t, e, n) {
		for (var r in void 0 === n && (n = !0), t = t || {}, e = e || {}) "undefined" != typeof e[r] && (n || !n && "undefined" == typeof t[r]) && (t[r] = e[r]);
		return t
	}

	function X(t, e) {
		e = e || {};
		var n, r = K(t = t || {});
		for (n in e) try {
			e[n].constructor === Object && r[n] && r[n].constructor === Object ? r[n] = X(r[n], e[n]) : r[n] = e[n]
		} catch (i) {
			r[n] = e[n]
		}
		return r
	}

	function tt() {
		var i, a = window.crypto || window.msCrypto;
		return (i = function i() {
			var t, e = 2147483647;
			try {
				var n = new Uint32Array(1);
				a.getRandomValues(n), t = n[0] & e
			} catch (r) {
				t = Math.round(e * Math.random())
			}
			return t.toString(16)
		})() + i()
	}

	function et(t, e) {
		var n;
		return function() {
			return t && (n = t.apply(e || this, arguments), t = null), n
		}
	}
	window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || M;
	var nt, rt = function rt() {},
		it = function it() {
			return {}
		},
		g = ("undefined" == typeof JSON && ((JSON = {}).stringify = rt, JSON.parse = it, window.JSON = JSON), "performance" in window && window.performance || {}),
		at = function at() {
			return !(!g || "function" != typeof g.getEntries)
		};

	function ot(t, e, n) {
		var r, i = (n = n || {}).domain ? "; Domain=" + n.domain : "",
			n = n.expires ? ((r = new Date).setTime(r.getTime() + 24 * n.expires * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : "";
		document.cookie = t + "=" + e + i + n + "; path=/; SameSite=None; Secure"
	}

	function u(t) {
		for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
			for (var r = e[n];
				" " === r.charAt(0);) r = r.substring(1, r.length);
			if (0 === r.indexOf(t + "=")) return r.substring((t + "=").length, r.length)
		}
		return null
	}

	function ct(t) {
		ot(t, "", {
			expires: -1
		})
	}
	g && !g.now && (nt = g.timing, g.now = function() {
		var t = o() - (nt && nt.navigationStart || 0);
		return 0 < t ? t : 0
	}), String.prototype.trim || (String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
		if (null == this) throw new TypeError("Array.indexOf() - can't convert \"" + this + '" to object');
		var n = isFinite(e) ? Math.floor(e) : 0,
			r = this instanceof Object ? this : new Object(this),
			i = isFinite(r.length) ? Math.floor(r.length) : 0;
		if (!(i <= n))
			if (n < 0 && (n = Math.max(i + n, 0)), t === undefined) {
				do {
					if (n in r && r[n] === undefined) return n
				} while (++n < i)
			} else
				do {
					if (r[n] === t) return n
				} while (++n < i);
		return -1
	}), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
		var e;
		if (null == this) throw new TypeError("this is null or not defined");
		var n = Object(this),
			r = n.length >>> 0;
		if ("function" != typeof t) throw new TypeError(t + " is not a function");
		1 < arguments.length && (e = arguments[1]);
		for (var i, a = 0; a < r;) a in n && (i = n[a], t.call(e, i, a, n)), a++
	}), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, i) {
		var a = document,
			o = a.createStyleSheet();
		for (i = a.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
			for (o.addRule(t[n], "k:v"), r = i.length; r--;) i[r].currentStyle.k && e.push(i[r]);
			o.removeRule(0)
		}
		return e
	});
	var ut = {
		s: "sessionStorage",
		l: "localStorage"
	};

	function st(t) {
		var e;
		try {
			e = window[ut[t]]
		} catch (n) {
			e = null
		}
		return e
	}

	function lt(t, e) {
		var n;
		return n = t ? t.getItem(e) : n
	}

	function ft(t, e, n) {
		if (t && n) try {
			t.setItem(e, n)
		} catch (r) {}
	}

	function p(t) {
		return lt(st("s"), t)
	}

	function dt(t, e) {
		ft(st("s"), t, e)
	}

	function pt(t) {
		return lt(st("l"), t)
	}

	function mt(t, e) {
		ft(st("l"), t, e)
	}

	function gt() {
		return st("l")
	}
	var vt = 18e5,
		ht = 94608e6,
		yt = "fpti_3p";
	var wt = "script";

	function bt(t, e) {
		for (var n in e) n && "undefined" != typeof e[n] && "" !== e[n] && (t = function(t, e, n) {
			if (e && (n || 0 === n || !1 === n)) {
				if ("object" == typeof n) try {
					n = JSON.stringify(n)
				} catch (r) {
					n = "_err_"
				} - 1 === t.indexOf("?") && (t += "?"), "?" !== t.charAt(t.length - 1) && (t += "&"), t += e + "=" + encodeURIComponent(n)
			}
			return t
		}(t, n, e[n]));
		return t
	}

	function f(t) {
		var e = {};
		if (t && void 0 !== t) {
			if ("object" == typeof t) return t;
			for (var n = (t = (t = "?" === t.charAt(0) ? t.slice(1) : t).replace(/&/g, "&")).split("&"), r = 0; r < n.length; r++) {
				var i = n[r].split("="),
					a = i.shift(),
					i = i.join("=");
				e[a] = decodeURIComponent(i)
			}
		}
		return e
	}

	function kt() {
		var t = window,
			e = "inner";
		return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
			width: t[e + "Width"],
			height: t[e + "Height"]
		}
	}

	function Tt() {
		var t = document.body || {},
			e = document.documentElement || {};
		return function() {
			for (var t = [], e = 0; e < arguments.length; e++) isNaN(arguments[e]) || t.push(arguments[e]);
			return Math.max.apply(Math, t)
		}(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight, 0)
	}

	function Et(t) {
		var e;
		t && "undefined" != typeof window && window.Image && ((e = new window.Image(0, 0)).src = t, function() {
			var t = window.navigator.userAgent,
				e = /MSIE|Trident/i.test(t),
				t = (/iPad/i.test(t) || /iPhone/i.test(t)) && /WebKit/i.test(t) && /CriOS/i.test(t);
			if (e || t) return;
			return 1
		}()) && (e.referrerPolicy = "no-referrer-when-downgrade")
	}

	function St(t) {
		throw new URIError("fail to load script: " + t.target.src)
	}

	function v(t, e, n, r) {
		var i, a, o;
		t && (i = document.getElementsByTagName(wt)[0], (a = document.createElement(wt)).setAttribute("crossorigin", "anonymous"), a.onerror = St, a.src = t, r && "string" == typeof r && "sha" === r.substring(0, 3) && a.setAttribute("integrity", r), e && (o = !1, a.onreadystatechange = a.onload = function() {
			o || e(), o = !0
		}), n && i ? i.parentNode.insertBefore(a, i) : document.body ? document.body.appendChild(a) : Ct(function() {
			document.body.appendChild(a)
		}))
	}

	function Ct(t) {
		t = et(t), "complete" === document.readyState ? t() : (h(window, "load", t), h(window, "DOMContentLoaded", function() {
			setTimeout(t, 3e3)
		}))
	}

	function h(t, e, n) {
		t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n))
	}

	function y(t, e, n) {
		e && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n))
	}
	var Ot = "1.8.11",
		Pt = "https://t.paypal.com/ts",
		It = "ce",
		xt = "pt",
		_t = "ru",
		At = "cd",
		Lt = "sw",
		Dt = "sh",
		jt = "dw",
		Nt = "dh",
		Rt = "bw",
		qt = "bh";

	function Ft(t) {
		t = t && t.data ? t : {
			data: t || {}
		};
		return t
	}

	function Mt(t, e) {
		var n = t.url || "undefined" != typeof window && window.fptiserverurl || Pt,
			r = n.split("?"),
			r = ((n = r[0]).match(/^\/\//) && (n = ("undefined" != typeof location && location.protocol || "") + n), n += "?", r[1] && (n += r[1] + "&"), n += "v=" + encodeURIComponent(t.version || Ot), {
				t: o(),
				g: (new Date).getTimezoneOffset()
			});
		return e.start && (t = e.end || r.t, e.view = e.view || {}, e.view.t11 = t - e.start, e.start = e.end = undefined), n = bt(n, r), n = bt(n, e)
	}

	function Bt(t, e) {
		var n, r = t.onBeaconCreate,
			i = window.fpti && window.fpti.tenant_name || "paypal.com";
		return "undefined" != typeof window.location && -1 === window.location.hostname.indexOf("." + i) && (i = function() {
			var t = null;
			if (gt()) {
				try {
					var t = pt(yt),
						e = null,
						n = null,
						r = null,
						i = null,
						a = Date.now(),
						i = (t ? (e = (t = JSON.parse(t)).vid && t.vid_exp > a ? t.vid : tt(), r = t.fpti && t.fpti_exp > a ? t.fpti : tt(), n = a + vt) : (e = tt(), n = a + vt, r = tt()), a + ht);
					t = {
						vid: e,
						vid_exp: n,
						fpti: r,
						fpti_exp: i
					}, mt(yt, JSON.stringify(t))
				} catch (o) {}
				return t
			}
		}()) && c(e, {
			"3p_vid": i.vid,
			"3p_fpti": i.fpti
		}), Et(n = r && ("function" != typeof r || !1 === r()) ? n : Mt(t, e)), n
	}

	function Ut(t) {
		var t = Ft(t),
			e = Bt(t, t.data);
		return {
			data: t.data,
			url: e
		}
	}

	function zt(t, e) {
		var n = Ft(t),
			r = n.data,
			t = (r[xt] = document.title, r[_t] = document.referrer, r[At] = window.screen.colorDepth, {
				width: (t = window.screen || {}).width,
				height: t.height
			}),
			i = (r[Lt] = t.width, r[Dt] = t.height, t = window.screen || {}, i = window.devicePixelRatio || 1, a = m(t.width * i), t = m(t.height * i), 90 === Math.abs(window.orientation) && (i = a, a = t, t = i), {
				width: a,
				height: t
			}),
			a = (r[jt] = i.width, r[Nt] = i.height, kt()),
			o = (r[Rt] = a.width, r[qt] = a.height, r[It] = navigator.cookieEnabled ? 1 : 0, {
				data: n.data,
				url: ""
			});
		"function" == typeof e ? e(function() {
			return o.url = Bt(n, r), o
		}) : o.url = Bt(n, r)
	}
	var w = {},
		b = {},
		Jt = -1,
		Vt = "*";

	function Qt(t, e, n) {
		try {
			t(e, n)
		} catch (i) {
			setTimeout((r = i, function() {
				throw r
			}), 0)
		}
		var r
	}

	function Ht(t, e, n) {
		t(e, n)
	}

	function Yt(t, e, n, r) {
		var i, a = b[e],
			o = r ? Ht : Qt;
		if (Object.prototype.hasOwnProperty.call(b, e))
			for (i in a) Object.prototype.hasOwnProperty.call(a, i) && o(a[i], t, n)
	}

	function $t(t) {
		t = String(t);
		return Boolean(Object.prototype.hasOwnProperty.call(b, t) && function(t) {
			for (var e in t)
				if (Object.prototype.hasOwnProperty.call(t, e)) return !0;
			return !1
		}(b[t]))
	}

	function Wt(t, e, n, r) {
		t = "symbol" == typeof t ? t.toString() : t;
		a = e, o = r;
		var i, a, o, e = function() {
			var t = String(i),
				e = t.lastIndexOf(".");
			for (Yt(i, i, a, o); - 1 !== e;) e = (t = t.substr(0, e)).lastIndexOf("."), Yt(i, t, a, o);
			Yt(i, Vt, a, o)
		};
		return !! function(t) {
			for (var e = String(t), n = $t(e) || $t(Vt), r = e.lastIndexOf("."); !n && -1 !== r;) r = (e = e.substr(0, r)).lastIndexOf("."), n = $t(e);
			return n
		}(i = t) && (!0 === n ? e() : setTimeout(e, 0), !0)
	}
	w.publish = function(t, e) {
		return Wt(t, e, !1, w.immediateExceptions)
	}, w.subscribe = function(t, e) {
		if ("function" != typeof e) return !1;
		t = "symbol" == typeof t ? t.toString() : t, Object.prototype.hasOwnProperty.call(b, t) || (b[t] = {});
		var n = "uid_" + String(++Jt);
		return b[t][n] = e, n
	};
	var Gt, Zt, Kt = "pa-marked",
		Xt = "data-pa-click",
		te = "data-pa-exit",
		ee = "data-pa-download",
		ne = "MI_ERROR",
		re = "cookie_prefs",
		ie = "enforce_policy",
		ae = "pa.linkParam",
		oe = "la.leadGenParam",
		k = {
			BEACON: "pa.beacon",
			INIT: "pa.init",
			LATM: "pa.latm",
			REPLAYBEACON: "pa.replay",
			AFTER_CONSENT_BEACON: "pa.afterConsent"
		},
		ce = "tenant_ts",
		ue = "comp",
		se = "paypal.com",
		le = "paypalobjects.com",
		fe = {
			PRE: "_fpti"
		},
		de = {
			TP_ID: "fpti.tp",
			TK_ID: "fpti.tk"
		},
		pe = {
			LEN: 512,
			HTML_RX: /<[^>]*>/g
		},
		me = "T",
		ge = {
			apac: "au|c2|cn|hk|id|in|jp|kr|my|nz|ph|sg|th|tw|vn",
			emea: "ad|ae|af|al|am|ao|aq|at|ax|az|ba|be|bf|bg|bh|bi|bj|bv|bw|by|cd|cf|cg|ch|ci|ck|cm|cs|cv|cy|cz|de|dj|dk|dz|ee|eg|eh|er|es|et|fi|fo|fr|fx|ga|gb|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gw|hm|hr|hu|ie|il|im|iq|ir|is|it|je|jo|ke|kg|km|kw|kz|lb|li|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mk|ml|mq|mr|mt|mu|mw|mz|na|nc|ne|ng|nl|no|om|pf|pl|pm|ps|pt|qa|re|ro|rs|ru|rw|sa|sc|sd|se|sh|si|sj|sk|sl|sm|sn|so|st|sy|sz|td|tf|tg|tj|tm|tn|tr|tz|ua|ug|uz|va|wf|ye|yt|yu|za|zm|zw",
			latam: "ag|ai|an|ar|aw|bb|bm|bo|br|bs|bz|cl|co|cr|dm|do|ec|fk|gd|gt|gy|hn|jm|kn|ky|lc|ms|mx|ni|pa|pe|py|sr|sv|tc|tt|uy|vc|ve|vg",
			na: "^us|ca"
		},
		ve = ["locale.x", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "dclid", "gclid", "param", "fbclid", "gclsrc", "activate", "pid", "kid"],
		he = {
			redactedEmail: /([a-z0-9_\-.+]+)@\w+(\.\w+)*/gi,
			redactedUSSSN: /\b\d{3}[ -.]\d{2}[ -.]\d{4}\b/g,
			redactedIPAddress: /(\d{1,3}(\.\d{1,3}){3}|[0-9A-F]{4}(:[0-9A-F]{4}){5}(::|(:0000)+))/gi,
			redactedZipCode: /((postcode=)|(zipcode=)|(zip=))[^&/?]+/gi,
			redactedUserName: /((username=)|(login=)|(userid))[^&/?]+/gi,
			redactedPassword: /((password=)|(passwd=)|(pass=))[^&/?]+/gi,
			redactedCredentials: /(login( cred(ential)?s| info(rmation)?)?|cred(ential)?s) ?:\s*\S+\s+\/?\s*\S+/gi,
			redactedVisaCreditCard: /\b4[0-9]{12}(?:[0-9]{3})?\b/gi,
			redactedDinersCard: /\b3(?:0[0-5]|[68][0-9])[0-9]{11}\b/gi,
			redactedMasterCard: /\b(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}\b/gi,
			redactedAmexCard: /\b3[47][0-9]{13}\b/gi,
			redactedDiscoverCard: /\b6(?:011|5[0-9]{2})[0-9]{12}\b/gi,
			redactedTelNumber: /((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\d+\s][^&/?]+/gi,
			redactedName: /((firstname=)|(lastname=)|(surname=))[^&/?]+/gi
		},
		ye = "auto_cpl",
		we = "qualtricsTarget";

	function be(e, t) {
		var n, r = Object.keys(e);
		return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable
		})), r.push.apply(r, n)), r
	}

	function ke(r) {
		for (var t = 1; t < arguments.length; t++) {
			var i = null != arguments[t] ? arguments[t] : {};
			t % 2 ? be(Object(i), !0).forEach(function(t) {
				var e, n;
				e = r, n = i[t = t], (t = function(t) {
					t = function(t, e) {
						if ("object" != typeof t || null === t) return t;
						var n = t[Symbol.toPrimitive];
						if (n === undefined) return ("string" === e ? String : Number)(t);
						t = n.call(t, e || "default");
						if ("object" != typeof t) return t;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}(t, "string");
					return "symbol" == typeof t ? t : String(t)
				}(t)) in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : be(Object(i)).forEach(function(t) {
				Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t))
			})
		}
		return r
	}

	function Te(t, e) {
		(null == e || e > t.length) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}

	function Ee(t, e) {
		var n, r, i, a, o, c = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
		if (c) return r = !(n = !0), {
			s: function() {
				c = c.call(t)
			},
			n: function() {
				var t = c.next();
				return n = t.done, t
			},
			e: function(t) {
				r = !0, i = t
			},
			f: function() {
				try {
					n || null == c["return"] || c["return"]()
				} finally {
					if (r) throw i
				}
			}
		};
		if (Array.isArray(t) || (c = function(t, e) {
				var n;
				if (t) return "string" == typeof t ? Te(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Te(t, e) : void 0
			}(t)) || e && t && "number" == typeof t.length) return c && (t = c), a = 0, {
			s: o = function o() {},
			n: function() {
				return a >= t.length ? {
					done: !0
				} : {
					done: !1,
					value: t[a++]
				}
			},
			e: function(t) {
				throw t
			},
			f: o
		};
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function T(t, e) {
		return t && t.data && "string" == typeof t.data && (t.data = f(t.data)), e && e.data && "string" == typeof e.data && (e.data = f(e.data)), X(t, e)
	}

	function Se(t, e) {
		var n = [];
		if ((e = e || document).querySelectorAll) {
			var r = e.querySelectorAll(t);
			if ("object" != typeof r && "function" != typeof r || "number" != typeof r.length) "object" == typeof r && (n = r);
			else
				for (var i = 0; i < r.length; i++) n.push(r[i])
		}
		return n
	}

	function Ce() {
		var t = !1,
			e = function() {
				var t, e = null;
				try {
					gt() && (!(e = +pt(t = "pa_feature_mod")) || e < 0 || 100 < e) && mt(t, e = Math.floor(Math.random() * Math.floor(100)))
				} catch (n) {}
				return e
			}();
		return t = e && e < "0" ? !0 : t
	}

	function a(t, e) {
		return t.getAttribute("data-pa-" + e) || t.getAttribute(e)
	}

	function Oe(t, e) {
		var n = {},
			e = Pe(t, e);
		if (e)
			if (0 === e.indexOf("{")) try {
				e = e.replace(/\\"/gi, '"'), n = e = JSON.parse(e)
			} catch (r) {} else n.link = e;
		e = a(t, "page"), e && (n.page = e), e = a(t, "pgrp"), e && (n.pgrp = e), e = a(t, "link");
		return e && (n.link = e), n
	}

	function Pe(t, e) {
		var n;
		return n = !(n = (n = e ? a(t, e) : n) || a(t, "id") || a(t, "name") || a(t, "data-name") || a(t, "class") || a(t, "href") || a(t, "alt") || function i(t) {
			for (var e = t.childNodes, n = null, r = 0; r < e.length; r++) {
				if (3 === (n = e[r]).nodeType && n.nodeValue && n.nodeValue.match(/\S/)) return n.nodeValue.trim();
				if (1 === n.nodeType && n.childNodes.length) return i(n)
			}
		}(t)) || "string" == typeof n && 0 !== n.indexOf("<") ? n : ""
	}

	function Ie(t, e) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		return e
	}

	function xe(t, e) {
		var n = "";
		if ("string" == typeof t && "string" == typeof e) {
			t = t.split(",");
			for (var r = 0; r < t.length; r++) n += e.trim() + " " + t[r].trim(), r !== t.length - 1 && (n += ", ")
		} else n = t;
		return n
	}
	var _e = {
		pp: /\.paypal\.com$/,
		ql: $.all,
		all: Q
	};

	function Ae(t, e) {
		var n = !1,
			e = e || d;
		return n = _e[t = t || "all"].test(e) ? !0 : n
	}

	function E(t, e, n) {
		try {
			var r = e.replace("[", ".").replace("]", "").split(".").reduce(function(t, e) {
				return t && t[e] ? t[e] : n
			}, t);
			return 0 === e.indexOf("laDataLayer") ? r : Ve(r)
		} catch (i) {
			return Ve(n)
		}
	}

	function Le(t) {
		var e = {},
			t = t || u("ts") || u("ts_c"),
			t = decodeURIComponent(t);
		if (t)
			for (var n = t.split("&"), r = 0; r < n.length; r++) {
				var i = n[r] && n[r].split("=");
				i[0] && i[1] && (e[i[0]] = i[1])
			}
		return e
	}

	function De(t) {
		var e = f(window.location.search || t || ""),
			n = {};
		if (e && void 0 !== e)
			for (var r = 0, i = Object.keys(e); r < i.length; r++) {
				var a = i[r],
					o = a.split("."),
					c = o.shift();
				c && c === fe.PRE && (n[o.join(".")] = function(t) {
					if (!t || "string" != typeof t) return "";
					var e = t.replace(pe.HTML_RX, "");
					if (t.length >= pe.LEN) return e.substring(0, pe.LEN);
					return e
				}(e[a]))
			}
		return n
	}

	function je(t) {
		var e, n = Zt,
			r = Gt;
		return void 0 !== r && n || (n = function() {
			var t, e = p(de.TP_ID);
			if (e) try {
				t = JSON.parse(e)
			} catch (n) {}
			return t
		}() || De() || {}, r = p(de.TK_ID) || n.tk || "", n.tk && delete n.tk, Zt = n, (e = Gt = r) && void 0 !== e && "string" == typeof e && dt(de.TK_ID, e), !(e = n)) || void 0 === e || e.constructor === Object && Z(e) || dt(de.TP_ID, JSON.stringify(e)), t.data.tk = r, t.data = Ie(n, t.data), t
	}

	function Ne() {
		var t = S("location.host") + S("location.pathname");
		return t = t && "string" == typeof t ? (t = -1 !== t.indexOf("&") ? t.substr(0, t.indexOf("&")) : t).replace(/\/$/, "") : t
	}

	function S(t) {
		return E(window, t)
	}

	function Re(t, e) {
		t.url && (PAYPAL.analytics.beaconURL = t.url), e.data || (e = {
			data: e
		}), w.publish(k.BEACON, e)
	}

	function i(t) {
		t = je(t = Ft(t)), l && (t.data.tenant_name = l), Re(Ut(t), t)
	}

	function qe(t) {
		t = t || ve;
		var e = {},
			n = S("location.search");
		if (n && t)
			for (var r, i = /\+/g, a = /([^&=]+)=?([^&]*)/g, o = function o(t) {
					return decodeURIComponent(t.replace(i, " "))
				}, c = n.substring(1); null !== (r = a.exec(c));) 0 <= t.indexOf(r[1]) && (e[o(r[1])] = o(r[2]));
		return e
	}

	function Fe() {
		var t, e = window.location,
			n = S("location.pathname").replace(/\/$/, "") || "",
			r = S("location.hash") || "";
		return e.search ? (t = Me(qe(), "=", "&"), e.protocol + "//" + e.hostname + n + (t ? "?" + t : "") + r) : (n && -1 !== n.indexOf("&") && (n = n.substr(0, n.indexOf("&"))), e.protocol + "//" + e.hostname + n + r)
	}

	function Me(t, e, n) {
		e = e || "=", n = n || ",";
		var r, i = [];
		for (r in t) i.push([r, t[r]].join(e));
		return i.join(n)
	}

	function Be(t, e) {
		var n = E(window, t) || null;
		if (n)
			for (var r in n = n.toLowerCase(), e)
				if (-1 !== n.indexOf(r)) return e ? e[r] : r
	}

	function Ue(t, e) {
		var n, r = l || "paypal";
		if (t = t || "la") {
			switch (t) {
				case "la":
					n = "_la=1." + r + "." + ze(e) + "." + function() {
						var t = Le();
						if (t) return t.vt = t.vt || 0, t.vr = t.vr || 0, t = t.vt + "." + t.vr, encodeURIComponent(t)
					}();
					break;
				case "ga":
				case "gtag":
					(window.ga || window.gtag) && (n = window.ga.getAll()[0].get("linkerParam"));
					break;
				default:
					n = ""
			}
			return n
		}
		return ""
	}

	function ze(t) {
		if (!1 !== t) {
			t = window.navigator.userAgent;
			if (t) {
				var e = t,
					n = 0;
				if (0 === e.length) return n;
				for (var r = 0; r < e.length; r++) {
					var i = e.charCodeAt(r);
					n = (n << 5) - n + i, n &= n
				}
				return Math.abs(n)
			}
		}
		return 0
	}
	var Je = function Je(t) {
			var e = window.latmconf;
			if (t === undefined || null === t || "" === t) return "";
			var n = e && e.loadRedactRegEx ? e.loadRedactRegEx() : he;
			try {
				if ("string" == typeof t)
					for (var r in n) t = decodeURIComponent(t).replace(RegExp(n[r]), r);
				else if ("boolean" == typeof t || "number" == typeof t);
			} catch (i) {
				t = "REDACTED"
			}
			return t
		},
		Ve = function Ve(t) {
			if (t === {} || t === [] || t === undefined || null === t || "" === t) return "";
			try {
				if (t.constructor === Object)
					for (var e in t) "object" == typeof t[e] ? t[e] = Ve(t[e]) : t[e] = Je(t[e]);
				else if (t.constructor === Array)
					for (var n = 0; n < t.length; n++) t[n] = Je(t[n]);
				else t.constructor !== String && t.constructor !== Boolean && t.constructor !== Number || (t = Je(t))
			} catch (r) {
				t = "REDACTED"
			}
			return t
		};

	function C(t, e) {
		t[e] && delete t[e]
	}
	Number.isInteger = Number.isInteger || function(t) {
		return "number" == typeof t && isFinite(t) && Math.floor(t) === t
	};
	var Qe = 1,
		He = 0,
		Ye = window.navigator,
		O = Ye.userAgent;

	function $e() {
		var t, e = u("_ga");
		return t = e ? (t = -1 !== e.indexOf("GA1") && 4 === (e = e.split(".")).length ? [e[2], e[3]].join(".") : t) && encodeURIComponent(t) : t
	}

	function We(t) {
		return Number(t) === t && 0 <= t
	}

	function P(t, e) {
		var n = 0;
		return n = We(e) && We(t) && e <= t ? m(n = 12e4 < (n = t - e) ? 0 : n) : n
	}
	var Ge = function Ge() {
		return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(O) ? "Tablet" : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(O) ? "Mobile" : "Desktop"
	};
	var Ze = 0,
		Ke = !1,
		Xe = 6e4,
		tn = 31e3,
		en = /^xmlhttprequest|fetch/i,
		nn = /^xmlhttprequest|fetch|iframe|script/i,
		rn = 0,
		an = 4,
		on = 50 * an + 25;

	function cn() {
		return g && g.now && g.timing ? Math.round(g.now() + g.timing.navigationStart) : o()
	}

	function un(t) {
		var e = [];
		return e = g && "function" == typeof g.getEntriesByType ? g.getEntriesByType(t) : e
	}

	function sn(t) {
		return t.loadEventEnd || t.loadEventStart || t.domComplete || t.domInteractive
	}

	function ln(t, e) {
		t.protocol = e.nextHopProtocol;
		e = e.serverTiming;
		if (e) {
			var n, r = Ee(e);
			try {
				for (r.s(); !(n = r.n()).done;) {
					var i = n.value,
						a = i.description;
					a && ("content-encoding" === i.name ? t.cenc = a : "x-cdn" === i.name && (t.cdn = a))
				}
			} catch (o) {
				r.e(o)
			} finally {
				r.f()
			}
		}
	}

	function fn(t, e) {
		t = t || {};
		var n, r, i, a, o, c, u, s, l, f, d = {},
			p = (e = e || {}).data || {};
		return g && (n = g.now(), r = un("navigation")[0], i = (i = un("paint"))[i.length - 1], a = 0, o = {}, c = g.timing, e = e.data && "setup" === e.data.imsrc, u = !Ke && "pf" !== t.e && e, e && rn++, c && u && (l = (u = r || c).secureConnectionStart || u.connectEnd, s = u.startTime || u.navigationStart, f = sn(u), d.t1 = P(u.requestStart, u.fetchStart), d.t1c = P(u.connectEnd, u.fetchStart), d.t1d = P(u.domainLookupEnd, u.domainLookupStart), d.t1s = P(u.connectEnd, l), d.t2 = P(u.responseStart, u.requestStart), d.t3 = P(u.responseEnd, u.responseStart), d.t4d = P(u.domComplete, u.domLoading), d.t4 = P(f, u.domLoading), d.t4e = P(f, u.loadEventStart), d.tt = m(u.duration) || P(f, s), a = P(u.requestStart, s), r && (d.rdc = r.redirectCount || 0, o.nt = r.type, ln(d, r)), c.msFirstPaint ? o.tcp = P(c.msFirstPaint, c.navigationStart) : i ? o.tcp = m(i.startTime) : r && (o.tcp = m(r.domInteractive)), navigator.connection) && (o.et = navigator.connection.effectiveType), t.view || (l = {
			t10: a
		}, f = p.view && p.view._t11s, e && 1 === rn || !f ? l.t11 = m(n) : (e && 1 < rn || f) && (l.t11 = m(n - f)), l.t11 = on < l.t11 ? l.t11 - on : l.t11, (l.t11 < 0 || Xe < l.t11) && (l.t11 = d.tt || 0), o.tcp && (l.tcp = o.tcp), o.et && (l.et = o.et), o.nt && (l.nt = o.nt), d.view = l, mn(d, !0))), PAYPAL.analytics.perf = d
	}

	function dn(t, e) {
		var n, r, i, a, o = g.getEntries(),
			c = !0;
		if (-1 !== t.indexOf("://") && (c = !1), o)
			for (var u = o.length - 1; 0 < u; u--) {
				var s = o[u];
				if ((!e || s.initiatorType === e) && (c && -1 !== s.name.indexOf(t) || !c && s.name === t)) {
					a = i = r = void 0, r = {}, i = (s = s).secureConnectionStart || s.connectEnd, a = s.responseStart || s.requestStart || s.fetchStart, r.t1 = P(s.requestStart, s.fetchStart), r.t1c = P(s.connectEnd, s.fetchStart), r.t1d = P(s.domainLookupEnd, s.domainLookupStart), r.t1s = P(s.connectEnd, i), r.t2 = P(s.responseStart, s.requestStart), r.t3 = P(s.responseEnd, a), r.tt = m(s.duration), ln(r, s), n = r;
					break
				}
			}
		return n
	}

	function pn() {
		var t, e = g.getEntries(),
			n = 0 === Ze ? e : e.slice(Ze),
			e = (Ze = e.length, Ce()),
			r = {
				rtt: (r = dn("/ts?", "img")) && r.tt || 0,
				view: {}
			},
			i = {
				scr: {
					startTimes: [],
					responseEnds: [],
					t9: 0,
					t12: 0,
					t13: 0,
					cnt: 0
				},
				xhr: []
			};
		for (t in e && n.forEach(function(t) {
				var e, n = t.initiatorType,
					r = t.name || "";
				"script" === n ? (i.scr.startTimes.push(t.startTime), i.scr.responseEnds.push(t.responseEnd), 0 < t.redirectStart && (i.scr.t13 += t.redirectEnd - t.redirectStart), t.duration > i.scr.t12 && (i.scr.t12 = t.duration), i.scr.cnt++) : "" !== n && !en.test(n) || -1 !== r.indexOf(le) || i.xhr.push({
					nm: (n = t.name, (r = document.createElement("a")).href = n, n = r.pathname.replace(/\/*$/, ""), e = (n = -1 !== (e = n.indexOf("&")) ? n.substr(0, e) : n).split("/"), -1 === (n = r.hostname).indexOf(se) && -1 === n.indexOf(le) ? e.join("").length ? n + "/./" + e.pop() : n : e.join("").length ? e.slice(-2).join("/") : "/"),
					t9: m(t.duration),
					ta: m(t.fetchStart)
				})
			}), i.scr.t9 = Math.max.apply(null, i.scr.responseEnds) - Math.min.apply(null, i.scr.startTimes), i.scr.t9 = i.scr.t9 < 0 || null === i.scr.t9 && "object" == typeof i.scr.t9 ? i.scr.t12 : i.scr.t9, i)
			if (delete i[t].startTimes, delete i[t].responseEnds, "xhr" !== t) {
				for (var a in i[t]) i[t][a] = m(i[t][a]);
				i[t].cnt || delete i[t]
			} else i[t].length || delete i[t];
		return r.res = i, r
	}

	function mn(t, e) {
		var n, r = t.res;
		!at() || !e && r || (n = pn(), r = r ? T(r, n.res) : n.res, t.res = r), e = t, (r = (r = n) || {}).rtt && (e.rtt = r.rtt), 0 <= r.rdc && (e.rdc = r.rdc), (t = e.view = e.view || {}).t10 = t.t10 || e.t1 || 0, t.t11 = t.t11 || 0, t.t11 < t.tcp && (t.t11 = t.tcp), t.t10 > t.t11 && (t.t10 = 0), t.t11 > tn && (t.t11 = tn), (e = r.view) && (e.tcp && (t.tcp = e.tcp), e.nt && (t.nt = e.nt), e.dbs && (t.dbs = e.dbs), e.ebs) && (t.ebs = e.ebs)
	}

	function gn(e) {
		var n, r = cn(),
			i = r,
			a = 0,
			o = 0,
			c = function(t) {
				t = t || an;
				for (var e = [], n = "", r = !1, i = 0; i < t; i++) e.push(0), n += "1";
				return {
					push: function(t) {
						0 !== (t = +t) && 1 !== t && (t = 0), e.shift(), e.push(t)
					},
					skip: function() {
						r = !0
					},
					isTrue: function() {
						var t = e.join("");
						return r = r || t === n
					}
				}
			}(),
			u = !1;

		function s(t) {
			clearInterval(n), u = !1, e(t)
		}

		function t() {
			var t = cn(),
				e = t - i,
				n = t - r;
			if (i = t, PAYPAL.analytics.isUnloading) s(n);
			else {
				for (1e4 < n && (c.skip(), u = !0); 105 < e;) a++, o++, e -= 50;
				a++, 55 < e && o++;
				var t = Math.round(o / a * 100);
				o = a = 0, c.push(t < 25), c.isTrue() && !u && (t = un("resource"), u = function(t) {
					var e = !0,
						n = g && g.timing;
					if (n && (0 === sn(n) && (e = !1), t))
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							if (nn.test(i.initiatorType) && 0 === i.responseEnd) {
								e = !1;
								break
							}
						}
					if (e)
						for (var a = Se("[type=submit][disabled]"), o = 0; o < a.length; o++)
							if (0 < a[o].clientHeight) {
								e = !1;
								break
							} return e || (n = (n = (n = document.activeElement) && n.tagName || "body").toLowerCase(), -1 === ["body", "a"].indexOf(n) && (e = !0)), e
				}(t)), u && c.isTrue() && s(on < n ? n - on : n)
			}
		}
		setTimeout(function() {
			n = setInterval(t, 50)
		}, 25)
	}
	w.subscribe(k.BEACON, function(t, e) {
		var n = e && (e.e || e.data && e.data.e),
			e = e && e.data && e.data.imsrc;
		"im" === n && "setup" === e && (Ke = !0)
	}), PAYPAL.analytics = PAYPAL.analytics || {};
	var I = PAYPAL.analytics,
		x = (I.options = {}, I.settings = "", I.beaconURL = "", {}),
		vn = {},
		hn = !1;

	function yn() {
		var t = {};
		if (window._ifpti && window.fpti)
			for (var e in t = K(window._ifpti), window.fpti) "undefined" != typeof window.fpti[e] && window.fpti[e] !== window._ifpti[e] && (t[e] = window.fpti[e]);
		return t
	}

	function wn(t) {
		C(t, "view"), C(t, "event_name")
	}

	function bn(t) {
		t && (wn(t = K(t)), l && (t.tenant_name = l), window.fpti = t, window._ifpti = K(window.fpti))
	}

	function kn(t) {
		var e = u(re),
			e = (e && (t.data.c_prefs = decodeURIComponent(e)), u(ie)),
			e = (e && (t.data.ef_policy = decodeURIComponent(e)), $e());
		e && (t.data.gacook = e), je(t)
	}
	var Tn = {};

	function En() {
		function t(t) {
			return !(!t || !t.cdn)
		}
		Tn.t || (Tn.t = I.resourceCPL("//t.paypal.", {
			event_name: "t_paypal_cpl"
		}, t)), Tn.c || (Tn.c = I.resourceCPL("//c.paypal.", {
			event_name: "c_paypal_cpl"
		}, t))
	}

	function Sn(t, e, n) {
		var n = 2 < arguments.length && n !== undefined ? n : {},
			r = t.imIdentifier;
		x[r] && (C(x, r), c(t.data, n), I._imInProgress = !1, Re(e(), t), setTimeout(En, 1e3))
	}

	function Cn(e, n, t) {
		var r, i, a, o = 2 < arguments.length && t !== undefined ? t : {};
		e.trackLazyData && e.data.page && e.data.pgrp && !PAYPAL.analytics.isUnloading ? (r = 0, i = e.lazyDataId, a = setInterval(function() {
			var t = vn[i];
			(t || 155 === r || PAYPAL.analytics.isUnloading) && (clearInterval(a), C(vn, i), o = c(o, t), Sn(e, n, o)), ++r
		}, 200)) : Sn(e, n, o)
	}

	function On(t, e, n) {
		var n = 2 < arguments.length && n !== undefined ? n : 0,
			r = I.cpl && I.cpl[ye] && I.cpl[ye].beaconData || {},
			r = r.view && r.view._t11s || 0,
			i = t.data.view._t11s || 0,
			r = (t.data.view._t11s = Math.min.apply(null, [r, i].filter(Boolean)), fn(e, t));
		return r.view && (r.view.bt = n), e = c(e, r)
	}
	I.Analytics = function(t) {
		this._init(t)
	}, I.Analytics.prototype = {
		version: "1.8.11",
		options: {
			request: {
				data: {},
				unloadDelay: !1,
				onBeaconCreate: rt
			}
		},
		_delayUnloadUntil: null,
		_lastForm: null,
		_lastInput: null,
		_init: function(t) {
			this.setOptions(t), this._enableUnloadDelay(), this._setTenantDetails()
		},
		_enableUnloadDelay: function() {
			var t = this,
				e = (I.isUnloading = !1, function e() {
					if (I._imInProgress || I.setup._onLoadImpression(), Object.keys(x).forEach(function(t) {
							var e, n, r, t = x[t];
							t && (e = t.options, n = t.recordCallback, r = t.hasCPL, t = t.eventData || {}, r || (t = On(e, t)), r = e.lazyDataId, vn[r] && (t = c(t, vn[r]), C(vn, r)), Sn(e, n, t))
						}), I.isUnloading = !0, t._delayUnloadUntil)
						for (;
							(new Date).getTime() < t._delayUnloadUntil;);
				});
			y("beforeunload", window, e), h(window, "beforeunload", e)
		},
		_setTenantDetails: function() {
			var t = function(t) {
				if (t = E(qe([t]), t)) {
					t = t.split(".");
					if (5 === t.length) return {
						version: t[0],
						tenant: t[1],
						dfp: t[2],
						vt: t[3],
						vr: t[4]
					}
				}
			}("_la");
			if (t && t.tenant && t.vr && "0" !== t.vr && t.vt && "0" !== t.vt && ("0" === t.dfp || t.dfp === "" + ze())) {
				C(t, "dfp"), C(t, "version");
				for (var e = function() {
						var t = [];
						try {
							var e = u(ce),
								n = decodeURIComponent(e);
							if (e && n)
								for (var r = n.split("|"), i = 0; i < r.length; i++) {
									var a = r[i] && Le(r[i]);
									a && a.tenant && a.vr && a.vt && t.push(a)
								}
						} catch (o) {
							ct(ce)
						}
						return t
					}(), n = -1, r = 0; r < e.length; r++)
					if (e[r] && e[r].tenant === t.tenant) {
						n = r;
						break
					} - 1 === n ? e.push(t) : e[n] = t;
				var i = function(t) {
					return 1 === (t = (0 < arguments.length && t !== undefined ? t : []).map(function(t) {
						return Me(t, "=", "&")
					})).length ? t[0] : 1 < t.length ? t.join("|") : ""
				}(e);
				i && ot(ce, encodeURIComponent(i), {
					domain: B
				})
			}
		},
		_recordEvent: function(t, e) {
			e.data = e.data || {}, e.data = c(e.data, t), this.record(e)
		},
		getTimeNow: cn,
		_getLastFormFocusedValue: function() {
			var t = "";
			return t = this._lastForm ? this._lastForm.getAttribute("name") || this._lastForm.getAttribute("id") || "" : t
		},
		_getLastInputFocusedValue: function() {
			var t = "";
			return t = this._lastInput ? this._lastInput.getAttribute("name") || this._lastInput.getAttribute("id") || "" : t
		},
		_getElements: function(t) {
			var e = [];
			if (t)
				if ("string" == typeof t) e = Se(t);
				else if ("object" == typeof t)
				for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
			else 1 === t.nodeType && e.push(t);
			return e
		},
		_click: function(t) {
			t = t && t.getAttribute("href");
			t && (window.location.href = t)
		},
		setOptions: function(t) {
			var e = (t = t || {}).request && t.request.data;
			e && (delete t.request.data, "string" == typeof e && (e = f(e)), bn(e = T(window.fpti, e))), this.options = T(this.options, t)
		},
		setRequestData: function(t, e) {
			if ("object" == typeof t)
				for (var n in t) this.options.request.data[n] = t[n];
			else "string" == typeof t && e === undefined ? this.setRequestData(f(t)) : "string" == typeof t && e !== undefined && (this.options.request.data[t] = e)
		},
		getRequestData: function(t) {
			var e = this.options.request.data;
			return e = t ? e[t] || window.fpti[t] : e
		},
		removeRequestData: function(t) {
			void 0 !== t ? this.options.request.data[t] && delete this.options.request.data[t] : this.options.request.data = {}
		},
		setUnloadDelay: function(t) {
			this._delayUnloadUntil = o() + t
		},
		setLazyData: function(t, e) {
			vn[t] = e
		},
		recordImpression: function(r, t) {
			var e = 2 < arguments.length && arguments[2] !== undefined && arguments[2],
				n = (I._imInProgress = !0, (r = r || {}) && r.trackCPL),
				i = (delete r.trackCPL, r.data ? (r.data = f(r.data), i = yn(), r.data = T(i, r.data), bn(r.data)) : r.data = T(window.fpti, {}), r.data.e = "im", t && (r.data = T(r.data, t)), I._imId = r.data.page, this.getRequestData("pglk") || u("tcs")),
				a = (ct("tcs"), i && (r.data.pglk = decodeURIComponent(i)), kn(r), r = T(this.options.request, r), e && (r.data.imsrc = e ? "setup" : "recordim"), r.trackLazyData && (r.lazyDataId = r.lazyDataId || "ldi_" + o()), e ? r.imIdentifier : "im_" + o());
			if (r.imIdentifier = a, x[a] = {
					options: r
				}, r.data.view || !n ? zt(r, function(t) {
					x[a] && (c(x[a], {
						hasCPL: !0,
						recordCallback: t
					}), Cn(r, t))
				}) : (g && (r.data.view = r.data.view || {}, r.data.view._t11s = g.now()), zt(r, function(n) {
					x[a] && (x[a].recordCallback = n), gn(function(t) {
						var e;
						x[a] && (e = On(r, e = {}, t), c(x[a], {
							hasCPL: !0,
							eventData: e
						}), Cn(r, n, e))
					})
				})), r.trackLazyData) return {
				lazyDataId: r.lazyDataId
			}
		},
		recordClick: function(t) {
			(t = t || {}).data = f(t.data), wn(window.fpti), t.data = T(window.fpti, t.data), t.data.e = "cl", kn(t), this._recordEvent({}, t)
		},
		recordFormAbandonment: function(t) {
			var e = {};
			(t = t || {}).data = f(t.data), wn(window.fpti), t.data = T(window.fpti, t.data), t.data.e = "fa", e.lf = this._getLastFormFocusedValue(), e.li = this._getLastInputFocusedValue(), this._recordEvent(e, t)
		},
		trackFormFocus: function(t) {
			t = this._getElements(t);
			for (var r = function r(t) {
					var e = t.currentTarget || t.srcElement,
						n = Pe(e, "focus"),
						t = t.target.value || Pe(e);
					I.logActivity({
						uicomp: n,
						uitype: "form",
						action: "focus",
						value: t
					})
				}, e = 0; e < t.length; e++) {
				var n = t[e];
				y("focus", n, r), h(n, "focus", r)
			}
		},
		_recordClick: function(r) {
			var i = this;
			return r = T(this.options.click, r), r = T({
					request: this.options.request
				}, r),
				function(t, e) {
					var n, e = function(t, e) {
						for (var n = [e, t.target, t.currentTarget, t.srcElement], r = 0; r < n.length; r++) {
							var i = n[r],
								a = a || i;
							if (i && i.getAttribute(Kt)) {
								a = i;
								break
							}
						}
						return a
					}(t, e);
					!1 !== (n = "function" == typeof r.onClick ? r.onClick(t, e) : n) && ("object" == typeof n && (r.request = T(r.request, n)), r.request.data.lu = e.getAttribute("href") || "", i.recordClick(r.request))
				}
		},
		trackClicks: function(t) {
			for (var e = this._getElements(t.elements), n = this._recordClick(t), r = 0; r < e.length; r++) {
				var i = e[r];
				i.setAttribute(Kt, 1), y("click", i, n), h(i, "click", n)
			}
		},
		trackFormAbandonment: function(n) {
			for (var r = this, t = ((n = n || {}).data = f(n.data), (n = T(this.options.formAbandonment, n)).elements = n.elements || "form", this._getElements(n.elements) || []), e = 0; e < t.length; e++)
				for (var i = t[e], a = "form" === i.tagName.toLowerCase() ? [i] : Se("form", i), o = 0; o < a.length; o++)
					for (var c = a[o], u = Se("input", c), s = u.length, l = 0; l < s; l++) ! function(t, e) {
						h(e, "focus", function() {
							r._lastForm = t, r._lastInput = e, r._trackingFA || (r._trackingFA = !0, "beforeunload,hashchange".split(",").forEach(function(t) {
								h(window, t, function() {
									null !== r._lastForm && null !== r._lastInput && (r.recordFormAbandonment(n.request), r._lastForm = null, r._lastInput = null)
								})
							}), h(t, "submit", function() {
								r._lastForm = null, r._lastInput = null
							}))
						})
					}(c, u[l])
		},
		recordAjaxStartTime: function() {
			this.activityStartTime = o()
		},
		logActivity: function(t) {
			t.page = t.page || window.fpti.page, t.pgrp = t.pgrp || window.fpti.pgrp, t.e = "ac", i(t)
		},
		logPerf: function(t, e) {
			t.e = "pf";
			(t = T(yn(), t)).tt || (t = c(t, fn(t), !1));
			var n = !0;
			(n = !e || t.page ? n : !1) && i(t)
		},
		recordAjaxPerformanceData: function(t) {
			var e, n, r = this.activityStartTime;
			r && (n = P(e = o(), r), t = t.sys && t.sys.tracking && t.sys.tracking.fpti.dataString) && 0 < n && ((t = f(t)).tajst = r, t.tajnd = e, t.tt = n, this.logPerf(t))
		},
		recordError: function(t) {
			(t = t || {}).e = "err", i(t)
		},
		recordEvent: function(t, e) {
			var n = !(2 < arguments.length && arguments[2] !== undefined) || arguments[2];
			e = e || {}, t && "string" == typeof t && (e.event_name = t, e.e = e.e || "ac", i(e = n ? T(yn(), e) : e))
		},
		record: function Ut(t) {
			i(t = T(this.options.request, t))
		}
	}, I.Analytics.prototype.utils = {
		queryStringToObject: f,
		getCookie: u,
		setCookie: ot,
		removeCookie: ct,
		wrapSelectors: xe
	}, I.onEvent = function(t) {
		w.subscribe(k.BEACON, t)
	}, I.logPerformance = function(t) {
		I.Analytics.prototype.logPerf(t)
	}, I.logActivity = function(t) {
		I.Analytics.prototype.logActivity(t)
	}, I.setup = function(t) {
		I.setupComplete = I.setupComplete || rt, I.settings = I.settings || "pp";
		t = I.setup.init(t);
		return I.setup.onLoad(), w.publish(k.INIT), setTimeout(function() {
			I.setupComplete(I.setup.bindEvents())
		}, 500), t
	}, I.setup3p = function(t) {
		return t = Ie(t || {}, {
			trackPPLegacyClicks: !1,
			trackPPLegacyExitClicks: !1
		}), I.settings = "3p", I.setup(t)
	}, I.setupMobile = function(t) {
		return t = Ie(t || {}, {
			trackPPLegacyClicks: !1,
			trackPPLegacyExitClicks: !1,
			trackPPDownloadClicks: !1,
			trackPPClickThrough: !1,
			trackFormAbandonment: !1
		}), I.settings = "mo", I.setup(t)
	}, I.reSetup = function(t) {
		delete I.instance, t = Ie(t || {}, I.options), I.setup(t)
	}, I.setup.init = function(t) {
		var e = t && t.lazyDataId,
			e = ((t = Ie(t || {}, {
				trackImpression: !0,
				trackCWV: !1,
				trackPPClicks: !0,
				trackPPExitClicks: !0,
				trackPPDownloadClicks: !0,
				trackPPLegacyClicks: !0,
				trackPPLegacyExitClicks: !0,
				trackPPClickThrough: !0,
				trackFormAbandonment: !0,
				trackFormFocus: !1,
				trackLazyData: !1,
				stitchEvents: !0,
				trackScroll: !0,
				enableLinker: !0
			})).trackLazyData && (t.lazyDataId = e || "ldi_" + o()), t.imIdentifier = "im_" + o(), window.fptiserverurl = t.url || window.fptiserverurl, I.options = t, new I.Analytics({
				request: {
					data: t.data || {}
				}
			}));
		return t.data && (t.data = f(t.data), bn(t.data)), I.instance = e, t.trackLazyData && (e.lazyDataId = t.lazyDataId), e
	}, I.setup._onLoadImpression = function() {
		var t = I.instance,
			e = I.options;
		e.trackImpression && hn && (e.trackCPL = !0, t.recordImpression(e, null, !0), hn = !1)
	}, I.setup.onLoad = function() {
		var t = I.options,
			e = I.setup._onLoadImpression;
		t.trackImpression && (hn = !0, Ct(function() {
			I.isUnloading || e()
		}))
	};
	var Pn = !(I.setup.bindEvents = function() {
			var s = I.instance,
				n = I.options;

			function i(t, e) {
				e = e || t.target || t.currentTarget || t.srcElement;
				return e = e && (t = e.tagName.toLowerCase(), -1 !== ["svg"].indexOf(t)) ? e.parentElement : e
			}

			function r(t, e, n) {
				var t = Oe(i(t, n), e),
					n = t.link || "",
					e = t.pgrp || s.getRequestData("pgrp") || "",
					r = t.page || s.getRequestData("page") || "";
				return t.pglk = e + "|" + n, t.pgln = r + "|" + n, t
			}
			var l = {
				unloadDelay: 500
			};

			function a(t, e) {
				var n;
				if ("string" == typeof t.className)
					for (var r = t.className.split(" "), i = 0; i < r.length; i++) {
						var a = r[i].split(":"); - 1 !== e.indexOf(a[0]) && 1 < a.length && (a.shift(), n = a.join(":"))
					}
				return n
			}
			var f = {
				customClicks: function(t) {
					var t = r(t),
						e = n.customClicks;
					return t.link = e.linkName || t.link, t.exit = e.exitClick ? Qe : He, {
						data: t
					}
				},
				click: function(t, e) {
					return {
						data: r(t, Xt, e)
					}
				},
				exit: function(t) {
					t = r(t, te);
					return t.exit = Qe, {
						data: t
					}
				},
				download: function(t) {
					t = r(t, ee);
					return t.dwnl = Qe, {
						data: t
					}
				},
				scTrack: function(t) {
					var e = r(t),
						t = a(i(t), ["scTrack"]) || e.link;
					return e.link = t, {
						data: e
					}
				},
				scExit: function(t) {
					var e = r(t),
						t = a(i(t), ["scExit"]) || e.link;
					return e.link = t, e.exit = Qe, {
						data: e
					}
				},
				clickThrough: function(t, e) {
					var n = "",
						t = ((!(n = (n = (n = (n = (n = Oe(e = e || i(t), Xt).link) || Oe(e, te).link) || Oe(e, ee).link) || a(e, ["scTrack", "scExit"])) || Pe(e)) || -1 < n.indexOf("javascript")) && (n = ""), s.getRequestData("pgrp") || "");
					return ot("tcs", encodeURIComponent(t + "|" + n)), !1
				}
			};
			return "object" == typeof n.customClicks && s.trackClicks({
				elements: n.customClicks.elements,
				onClick: f.customClicks,
				request: l
			}), n.trackPPClicks && s.trackClicks({
				elements: "*[data-pa-click]",
				onClick: f.click,
				request: l
			}), n.trackPPExitClicks && s.trackClicks({
				elements: "*[data-pa-exit]",
				onClick: f.exit,
				request: l
			}), n.trackFormFocus && s.trackFormFocus("*[data-pa-focus], " + xe("textarea, input[type=text]", n.wrappingElement)), n.trackPPDownloadClicks && s.trackClicks({
				elements: "*[data-pa-download], " + xe('*[href*=".zip"], *[href*=".wav"], *[href*=".mov"], *[href*=".mpg"], *[href*=".avi"], *[href*=".wmv"], *[href*=".doc"], *[href*=".docx"], *[href*=".pdf"], *[href*=".xls"], *[href*=".xlsx"], *[href*=".ppt"], *[href*=".pptx"], *[href*=".txt"], *[href*=".csv"], *[href*=".psd"], *[href*=".tar"]', n.wrappingElement),
				onClick: f.download,
				request: l
			}), n.trackPPLegacyClicks && s.trackClicks({
				elements: '*[class*="scTrack"]',
				onClick: f.scTrack,
				request: l
			}), n.trackPPLegacyExitClicks && s.trackClicks({
				elements: '*[class*="scExit"]',
				onClick: f.scExit,
				request: l
			}), n.trackPPClickThrough && s.trackClicks({
				elements: xe("a, button, input[type=submit], input[type=button], input[type=image]", n.wrappingElement),
				onClick: f.clickThrough
			}), n.trackFormAbandonment && s.trackFormAbandonment({
				elements: xe("form", n.wrappingElement),
				request: l
			}), h(document.body, "click", function(t) {
				var e, n, r, i = 0,
					a = !1,
					o = t.target,
					c = {
						onClick: f.click,
						request: l
					};
				if (o) {
					for (; !a && o;) n = o.tagName.toLowerCase(), (-1 !== ["a", "button"].indexOf(n) || "input" === n && -1 !== ["submit", "button", "image"].indexOf(o.type)) && (r = o), e = o.getAttribute(Xt), 10 <= i++ || o === document.body || e ? a = !0 : o = o.parentElement;
					r && f.clickThrough(t, r);
					var u = o && o.getAttribute(Kt);
					e && !u && (o.setAttribute(Kt, 1), (u = s._recordClick(c))(t, o), h(o, "click", u))
				}
			}), I.instance = s
		}),
		In = {
			"paypal-borderlesscommerce.com": {
				domains: [se],
				link: {
					queryParam: ve
				}
			},
			"xoom.com": {
				domains: [se],
				link: {
					client: ["ga", "la"]
				}
			}
		};

	function xn(t, e) {
		for (var t = 'a[href*="'.concat(t, '"]'), a = window.document.querySelectorAll(t), o = p(ae), c = e.client, n = function n(r) {
				var i = function i(t) {
					var e = [],
						n = (c && c.forEach(function(t) {
							e.push(Ue(t))
						}), o && e.push(decodeURIComponent(o)), e.join("&")),
						t = (t.preventDefault(), a[r].href);
					window.location.href = t + (-1 < t.indexOf("?") ? "&" : "?") + n, y("click", a[r], i)
				};
				h(a[r], "click", i)
			}, r = 0; r < a.length; r++) n(r)
	}

	function _n(t) {
		var e, n = t.link.queryParam || "",
			n = (n && (n = n) && (n = Me(qe(n), "=", "&"), p(ae) || dt(ae, encodeURIComponent(n))), t.domains || "");
		n && (e = t.link, n.forEach(function(t) {
			xn(t, e)
		}))
	}
	w.subscribe(k.INIT, function() {
		var t = I.options;
		t && t.enableLinker && !Pn && (t = t.hasOwnProperty("linkerConfig") ? t.linkerConfig : function(t) {
			if (t) {
				t = t.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
				if (t && t[1]) {
					t = In[t[1]];
					if (t) return t
				}
			}
			return ""
		}(window.location.href || "")) && t.domains && t.link && (Pn = !0, _n(t))
	}), I.getLinkerParam = function(t, e) {
		return "urlQueryParam" === t ? p(ae) || "" : Ue(t, e) || ""
	};
	var An = "cpl_identifier";

	function Ln(t, e, n) {
		g && (e = e || {}, (n = (t = t.cpl = t.cpl || {})[n] = t[n] || {}).started = !0, t = n.beaconData = n.beaconData || {}, e.flid && (t.flid = t.flid || e.flid), t.page = t.page || e.page, t.pgrp = t.pgrp || e.pgrp, t.action = t.action || e.action, t.view = {
			t10: e.t10 ? m(e.t10) : 0
		})
	}

	function Dn(t, e) {
		C(t.cpl, e)
	}

	function jn(t, e, n, r) {
		var i;
		t.cpl = t.cpl || {}, t.cpl[r] = t.cpl[r] || {}, t.cpl[r].beaconData = t.cpl[r].beaconData || {}, e && "object" == typeof e && (i = {}, Ie(i = e.pageData ? X(i, e.pageData) : e, t.cpl[r].beaconData)), g && !t.cpl[r].started && n && (Ln(t, null, r), t.cpl[r].beaconData.view._t11s = g.now())
	}
	I.resumeCPLTracking = function() {}, I.beaconTrackingData = {}, I.addCPLData = function() {}, I.setCPLData = function() {}, I.startCPLTracking = function(t) {
		var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : An;
		g && (Ln(I, t, e), I.cpl[e].beaconData.view = {
			t10: 0,
			_t11s: g.now()
		})
	}, I.endCPLTracking = function(t) {
		var e, n, r, i, a = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : An;
		jn(I, t, !1, a), n = !1, t = a, i = (e = I).cpl[t].beaconData || {}, g && i.view && (n && e._imInProgress || (i.view._t11s && (i.view.t11 = m(g.now() - i.view._t11s), delete i.view._t11s), i.view.nt = n ? "url" : "manual", mn(i), a = i.view.t11, r = !1, n && e._imId === i.page ? r = !1 : (!n && a < 61e3 || n && 50 < a && a < 31e3) && (r = !0), r && setTimeout(function() {
			e.Analytics.prototype.logPerf(i, n)
		}, 100))), Dn(e, t)
	}, I.resourceCPL = function(t, e, n) {
		var r, i = !1,
			a = !0;
		return t && (r = dn(t)) && ((e = c(e, r)).tmpl = e.tmpl || t, e.view = {
			t10: r.t1,
			t11: r.tt,
			nt: "res"
		}, (a = "function" == typeof n ? n(e) : a) && I.Analytics.prototype.logPerf(e), i = !0), i
	}, I.autoCPLTracking = function(t) {
		Dn(I, ye), jn(I, t, !0, ye)
	};
	var Nn = {
			minHeight: 0,
			trackBy: "percent",
			readTime: 0,
			scrollDepth: [25, 50, 75, 100]
		},
		Rn = null,
		_ = null,
		qn = null;

	function Fn(e) {
		y("scroll", window, Gn), Rn = [], _ = X({}, Nn), "object" == typeof e && Object.keys(e).forEach(function(t) {
			e[t] && _.hasOwnProperty(t) && typeof e[t] == typeof _[t] && (_[t] = e[t])
		});
		var t = Tt();
		isNaN(t) || t <= _.minHeight || h(window, "scroll", Gn)
	}

	function Mn(n) {
		qn = setTimeout(function() {
			var t = window.fpti || {},
				e = _.trackBy;
			i({
				e: "sd",
				page: t.page,
				pgrp: t.pgrp,
				comp: t.comp,
				event_name: "page scroll",
				st: e,
				sd: n
			}), Rn.push(n), qn = null
		}, _.readTime)
	}
	Bn = function() {
		var t, n, r, e, i, a, o, c, u;
		qn && clearTimeout(qn), Rn.length === _.scrollDepth.length ? y("scroll", window, Gn) : (t = Tt(), i = "object" == typeof(i = kt()) && i.hasOwnProperty("height") ? i.height : 0, n = t, r = [], _.scrollDepth.forEach(function(t) {
			var e = 0,
				e = 100 === t ? n - 10 : Math.round(n * t / 100);
			r.push([t, e])
		}), t = r, i = (e = window.scrollY || window.pageYOffset || (document.body && document.body.scrollTop) + (document.documentElement && document.documentElement.scrollTop || 0)) + i, "percent" === _.trackBy ? (c = e, u = i, t.forEach(function(t) {
			-1 === Rn.indexOf(t[0]) && u >= t[1] && t[1] > c && Mn(t[0])
		})) : (a = e, o = i, _.scrollDepth.forEach(function(t) {
			-1 === Rn.indexOf(t) && t <= o && a < t && Mn(t)
		})))
	}, Un = 500, Yn = 0, zn = zn || {}, $n = function $n() {
		Yn = !1 === zn.leading ? 0 : o(), n = null, Qn = Bn.apply(Jn, Vn), n || (Jn = Vn = null)
	}, (Hn = function Hn() {
		var t = o(),
			e = (Yn || !1 !== zn.leading || (Yn = t), Un - (t - Yn));
		return Jn = this, Vn = arguments, e <= 0 || Un < e ? (n && (clearTimeout(n), n = null), Yn = t, Qn = Bn.apply(Jn, Vn), n || (Jn = Vn = null)) : n || !1 === zn.trailing || (n = setTimeout($n, e)), Qn
	}).cancel = function() {
		clearTimeout(n), Yn = 0, n = Jn = Vn = null
	};
	var Bn, Un, zn, n, Jn, Vn, Qn, Hn, Yn, $n, Wn, Gn = Hn,
		Zn = (w.subscribe(k.INIT, function() {
			var t = I.options;
			t && t.trackScroll && Fn(t.scroll)
		}), I.Analytics.prototype.resetScroll = function(t) {
			Fn(t)
		}, 5),
		Kn = {},
		Xn = 0,
		tr = window.onerror;

	function er(t, e, n, r, i, a) {
		Wn && Wn === i || (Wn = i, Zn < ++Xn) || (I.logJSError(i, (e = e || "-") + " " + (n = n || 0) + ":" + (r = r || 0), a), "function" == typeof Kn.onError && Kn.onError({
			message: t,
			file: e,
			line: n,
			column: r,
			error: i
		}))
	}

	function nr() {
		return !!decodeURIComponent(u(ie) || S("fpti.ef_policy"))
	}

	function rr(t) {
		var e, n, r = !1;
		return (n = decodeURIComponent(u(re) || S("fpti.c_prefs"))) && (e = {}, n.split(",").map(function(t) {
			t = t.split("=");
			return e[t[0]] = t[1], t
		})), t = t || me, !(r = e && 1 == +e[t] ? !0 : r)
	}

	function ir() {
		return $e() || ""
	}

	function ar() {
		var t = A("cust");
		return t && 0 < t.length ? "1" : "0"
	}

	function or() {
		return Le().vr || ""
	}

	function A(t) {
		var e, n = window.fpti || {};
		switch (t) {
			case "rsta":
			case "locale":
				e = n.rsta || n.locale;
				break;
			case "ccpg":
				e = (e = S("dataLayer.contentCountry") || n.ccpg || "").toLowerCase();
				break;
			case "pageType":
				e = S("dataLayer.pageType");
				break;
			case "comp":
				e = (e = n.comp || n.component || "").toLowerCase();
				break;
			case "cust":
				e = n.cust || n.encr_cust_id || n.cust_id || "";
				break;
			default:
				e = n[t]
		}
		return Ve(e) || ""
	}

	function cr() {
		var t, e, n = Le(),
			r = Fe(),
			i = qe(),
			a = {
				acnt: A("acnt"),
				amt: A("amt"),
				browser: (t = "unknown", -1 < O.indexOf("Firefox") ? t = "Firefox" : -1 < O.indexOf("SamsungBrowser") ? t = "Samsung Internet" : -1 < O.indexOf("Opera") || -1 < O.indexOf("OPR") ? t = "Opera" : -1 < O.indexOf("Trident") ? t = "Internet Explorer" : -1 < O.indexOf("Edge") ? t = "Edge" : -1 < O.indexOf("Chrome") ? t = "Chrome" : -1 < O.indexOf("YaBrowser") ? t = "Yandex" : -1 < O.indexOf("UCBrowser") ? t = "UC Browser" : -1 < O.indexOf("Safari") && (t = "Safari"), t),
				ccpg: A("ccpg"),
				comp: A(ue),
				consentOptOut: rr(),
				curr: A("curr"),
				cust: A("cust"),
				dclid: E(i, "dclid"),
				device: Ge(),
				domain: d,
				enforcePolicy: nr(),
				fbclid: E(i, "fbclid"),
				flnm: A("flnm"),
				gacook: ir(),
				gclid: E(i, "gclid"),
				gclsrc: E(i, "gclsrc"),
				isLoggedIn: ar(),
				keywords: (t = "keywords", c = "", t = document.querySelector("meta[name='" + t + "']"), c = t ? t.getAttribute("content") : c),
				kid: E(i, "kid"),
				lang: Ye.userLanguage || Ye.language,
				leadGenParam: p(oe),
				mrid: A("mrid"),
				os: (t = "unknown", -1 !== O.indexOf("Win") && (t = "Windows"), -1 !== O.indexOf("Mac") && (t = "Macintosh"), -1 !== O.indexOf("Linux") && (t = "Linux"), -1 !== O.indexOf("Android") && (t = "Android"), t = -1 !== O.indexOf("like Mac") ? "iOS" : t),
				page: A("page"),
				pid: E(i, "pid"),
				pgrp: A("pgrp"),
				queryParams: Me(i, "=", "&"),
				region: function() {
					var t = A("ccpg");
					if (t)
						for (var e in ge)
							if (null != ge[e].match(t)) return e.toLowerCase();
					return null
				}(),
				rsta: A("rsta"),
				sessionId: n.vt || "",
				title: S("document.title"),
				trid: A("trid"),
				tsrc: S("document.referrer"),
				txn_amt: A("txn_amt"),
				url: r,
				utm_campaign: E(i, "utm_campaign"),
				utm_content: E(i, "utm_content"),
				utm_medium: E(i, "utm_medium"),
				utm_source: E(i, "utm_source"),
				utm_term: E(i, "utm_term"),
				visitorId: n.vr || "",
				xe: A("xe"),
				xt: A("xt")
			},
			o = [undefined, null, ""];
		for (e in a) a.hasOwnProperty(e) && -1 < o.indexOf(a[e]) && delete a[e];
		window.laDataLayer = a;
		for (var c, u = !1, s = {}, l = 0; l < ve.length; l++) {
			var f = ve[l];
			a.hasOwnProperty(f) && (u = !0, s[f] = a[f])
		}!p(oe) && u && (c = Me(s, "=", "&"), dt(oe, c), window.laDataLayer.leadGenParam = c)
	}

	function ur(t, e) {
		void 0 !== t && (window.laDataLayer || cr(), void 0 !== e ? window.laDataLayer[t] = e : window.laDataLayer[t] && delete window.laDataLayer[t])
	}
	h(window, "unhandledrejection", function(t) {
		t.preventDefault(), t.reason && t.reason.stack && er(t.reason.message, "", 0, 0, t.reason, "PROMISE_ONERROR")
	}), h(window, "error", function(t) {
		t && t.error && er(t.message, t.filename, t.lineno, t.colno, t.error)
	}), window.onerror = function(t, e, n, r, i) {
		er(t, e, n, r, i), "function" == typeof tr && tr.apply(window, arguments)
	}, I.startClientErrorTracking = function(t) {
		Zn = (Kn = t || {}).maxErrors || 5, Xn = 0
	}, I.logJSError = function(t, e, n) {
		var r = window.fpti || {};
		i({
			e: "err",
			page: r.page,
			pgrp: r.pgrp,
			comp: r.comp,
			erpg: t && t.message || t || "Script error",
			error_type: n || "WINDOW_ONERROR",
			error_description: ((r = t) && r.stack || "").replace(/http.*\/(\w+.)/gm, "_/$1").substring(0, 500),
			error_source: e
		})
	}, PAYPAL.trackJSError = function(t) {
		I && I.logJSError(t, "", "JSError")
	};
	var sr = 1e4,
		L = {},
		lr = !1,
		fr = !1,
		dr = !1,
		pr = [],
		mr = !1,
		gr = [],
		vr = {};

	function hr() {
		var t, e, n, r, i, a, o, c = A(ue) || l;

		function u() {
			0 === (o -= 1) && i()
		}
		c || (t = 10, e = setInterval(function() {
			(c = A(ue)) ? (clearInterval(e), hr()) : 0 === --t && clearInterval(e)
		}, 1e3)), c && !lr && (lr = !0, cr(), w.publish(k.LATM), c = c.toLowerCase(), (n = L.loadTags(c)) && -1 === d.indexOf("localhost") || n && Y) && (r = c, i = function() {
			L.fireState = L.fireState || {}, fr = !0, dr && Sr(), window.laDataLayer && !window.laDataLayer.gacook && ur("gacook", ir()), wr(n)
		}, r = L.loadJs && L.loadJs(r) || {}, a = r.vendors, o = r.vCount, a.forEach(function(t) {
			var e, n, t = L.loadVendorDefault && L.loadVendorDefault(t) || {};
			t.enforcePolicy = nr(), t.mktConsentOptOut = rr(me), br(t) ? (n = et(n = function() {
				u()
			}), (e = t) && e.setup ? (L.vendorScriptsTracker = L.vendorScriptsTracker || {}, t = e.setup.preLoadScript || "", (e.setup.scriptSrc || "") && t ? t(e, function(t) {
				yr(t || e, n)
			}) : yr(e, n)) : n(), setTimeout(n, sr)) : u()
		}))
	}

	function yr(e, n) {
		var r, t, i = e.setup.postLoadScript || "",
			a = e.setup.scriptSrc || "",
			o = e.setup.shouldInjectInHead || !1,
			c = e.setup.shouldLoadScriptInSequence || !1;
		a ? a.constructor === Array ? c ? function u(t, e, n) {
			1 < t.length ? v(t.shift(), function() {
				u(t)
			}, n) : v(t.shift(), e)
		}(a, function() {
			i ? i(e, n) : n()
		}, o) : (r = a.length, a.forEach(function(t) {
			v(t, function() {}, o), 0 === (r -= 1) && (i ? i(e, n) : n())
		})) : L.vendorScriptsTracker[a] ? "loading" === L.vendorScriptsTracker[a] ? t = setInterval(function() {
			"loaded" === L.vendorScriptsTracker[a] && (clearInterval(t), i ? i(e, n) : n())
		}, 1e3) : i ? i(e, n) : n() : (L.vendorScriptsTracker[a] = "loading", v(a, function() {
			L.vendorScriptsTracker[a] = "loaded", i ? i(e, n) : n()
		}, o)) : i ? i(e, n) : n()
	}

	function wr(t) {
		var u = E(window, "latmconf.fireState", {});
		t.forEach(function(e) {
			u[e] = e in u && u[e];
			var n, i, t, a, r, o = L.loadTagConfig && L.loadTagConfig(e) || {};

			function c(t, e) {
				if (e && e.data) {
					var n, r = e.data;
					for (n in i.options = e, a)
						if (a[n])
							if (!new RegExp(a[n], "i").test(r[n])) return;
					D(i)
				}
			}
			kr(o) && (n = [], (o.vendors || []).forEach(function(t) {
				t = X(L.loadVendorDefault && L.loadVendorDefault(t.name) || {}, t);
				br(t) && (mr && vr[e] && -1 !== vr[e].indexOf(t.name) ? u[e] = !1 : n.push(t))
			}), n.length) && (i = {
				id: e,
				trigger: o.trigger,
				capture: o.capture,
				vendors: n
			}, o = PAYPAL.analytics.logJSError, t = i.trigger.type, a = i.trigger.condition, i.trigger.hasOwnProperty("once") || (i.trigger.once = !0), "fn" === t ? Ur(r = i.trigger.name) ? Ur(r)(i) : o("Invalid trigger function", i.trigger, ne) : t === k.BEACON ? (w.subscribe(k.BEACON, c), w.subscribe(k.REPLAYBEACON, c), mr && w.subscribe(k.AFTER_CONSENT_BEACON, c)) : "generic" === t ? D(i) : o("Invalid trigger type", i.trigger, ne))
		}), mr && gr.forEach(function(t) {
			w.publish(k.AFTER_CONSENT_BEACON, t)
		}), pr.forEach(function(t) {
			w.publish(k.REPLAYBEACON, t)
		})
	}

	function D(t) {
		var e, n, a, r, i;
		(function(t) {
			t = E(t, "trigger.session");
			{
				var e;
				return !t || !gt() || (e = t.key, t = t.type, e && "start" === t && !p("mi." + e) ? (dt("mi." + e, !0), 1) : e && "end" === t ? p("mi." + e) : !(!e || "unset" !== t || p("mi." + e)))
			}
		})(t) && (e = t.id, n = E(window, "latmconf.fireState")) && !n[e] && ((i = K((r = t).vendors)).forEach(function(t) {
			var e, n = t.vars;
			for (e in n) n.hasOwnProperty(e) && (n[e] = function(t, e) {
				var n, r, i;
				if (t && kr(t)) return "string" == typeof t ? t : "fn" === (n = t.type) ? (i = t.name, r = t.args, r = void 0 === r ? [] : r, Ur(i) ? Ur(i).apply(null, r) : "") : (i = function(t, e) {
					var e = {
							data: e ? e.data : {}
						},
						n = t.obj || window,
						r = t.path,
						i = t.defaultVal || "",
						t = t.concat,
						a = i;
					"data" === n && (n = e[n]);
					if (r && r.constructor === Array)
						for (var o = 0; o < r.length; o++) {
							var c = E(n, r[o]);
							if (c) {
								a = c;
								break
							}
						} else a = E(n, r, i);
					return function(t, e) {
						var n;
						return t && "object" == typeof t ? (n = t.append || "", (t.prepend || "").concat(e, n)) : e
					}(t, a)
				}(t, e), "var" === n ? i : "int" === n ? m(i) : void 0)
			}(n[e], r.options))
		}), i = i, vr[e] = vr[e] || [], a = [], i.forEach(function(t) {
			var e, n, r, i;
			t.triggerEvent ? t.triggerEvent(t) : (n = (e = t).seperator || "&", r = e.endpoint, r = "".concat(r.scheme, "://").concat(r.host).concat(r.path), i = e.vars || {}, e = Object.keys(i).map(function(t) {
				var e;
				return e = i[t] ? t + "=" + i[t] : e
			}).filter(Boolean).join(n), Et(r + e)), -1 === a.indexOf(t.name) && a.push(t.name)
		}), vr[e] = a, n[e] = t.trigger.once, /_pgv\b/.test(e)) && dt("mi.pageViewSent." + e, window.location.href)
	}

	function br(t) {
		var e, n = !0;
		if ((n = t && t.hasOwnProperty("enableCookieConsent") ? t.enableCookieConsent : n) && rr(e = t && t.consentCategory ? t.consentCategory : e)) return;
		return kr(t)
	}

	function kr(t) {
		if (t && !t.hasOwnProperty("enable")) return !0;
		if (t && t.hasOwnProperty("enable")) {
			if ("boolean" == typeof t.enable) return t.enable;
			var e = t.enable;
			if (e.constructor === Array) {
				for (var n = 0; n < e.length; n++)
					if (!Tr(e[n])) return !1
			} else if (!Tr(e)) return !1;
			return !0
		}
		return !1
	}

	function Tr(t) {
		var e, n, r = t.type;
		if ("fn" === r) return e = t.name, n = t.args || [], e && Ur(e) && Ur(e).apply(null, n);
		if ("var" === r)
			for (var i = t.match || [], a = 0; a < i.length; a++) {
				var o = i[a],
					c = S(t.key);
				if (new RegExp(o, "i").test(c)) return 1
			}
	}

	function Er(t, e) {
		e && e.data && "im" === e.data.e && (fr ? Sr() : dr = !0)
	}

	function Sr() {
		var t = L.loadPageViews ? L.loadPageViews() : [];
		l !== r && t.forEach(function(t) {
			p("mi.pageViewSent." + t) !== window.location.href && wr([t])
		})
	}

	function Cr(t, e, n) {
		var r, e = Ur(e),
			i = e && e();
		if (i && t) {
			if (t.constructor !== Object || t.constructor === Array) return t.constructor === String && (e = i.match(t)) ? e[0] : null;
			for (r in t) {
				var a = i.match(t[r]);
				if (a && a[0]) return n ? n[r] : a[0]
			}
		}
	}

	function Or(t, e) {
		if (t && e && e.constructor === Object) {
			if (t.constructor !== Array) return t.constructor === String && Be(t, e) || null;
			for (var n = 0; n < t.length; n++) {
				var r = Be(t[n], e);
				if (r) return r
			}
		}
	}

	function Pr(t) {
		t.trigger = {
			sel: "button[type=submit], input[type=submit]"
		}, xr(t)
	}

	function Ir(t) {
		t = window.document.querySelectorAll(t);
		return t && t[0]
	}

	function xr(t) {
		var e, n = Ir(E(t, "trigger.sel")),
			r = E(t, "trigger.suppl.sel"),
			i = null;
		if (r)
			for (var a = 0; a < r.length; a++) i = i || Ir(r[a]);
		n && (r && i || !r) ? h(n, "click", e = function e() {
			_r(t), y("click", n, e)
		}) : setTimeout(function() {
			xr(t)
		}, 500)
	}

	function _r(t) {
		var e = E(t, "trigger.suppl.sel");
		if (e) {
			if (e.constructor === Array)
				for (var n = 0; n < e.length; n++) {
					var r = Ir(e[n]);
					if (r && r.checked) {
						D(t);
						break
					}
				}
		} else D(t)
	}

	function Ar(u) {
		var t = E(u, "trigger.sel"),
			s = window.document.querySelectorAll(t);
		if (s)
			for (var e = function e(o) {
					var c = function c(t) {
						var t = t.currentTarget,
							e = (L.evntData = L.evntData || {}, u),
							n = t,
							r = E(e, "capture");
						if (n) {
							var i = window.latmconf.evntData;
							if (i.hostname = n.hostname || "", i.pathname = n.pathname || "", i.href = n.href || "", i.className = n.className || "", i.id = n.id || "", i.textContent = n.textContent || "", r && r.constructor === Array)
								for (var a = 0; a < r.length; a++) i[r[a]] = n.getAttribute(r[a]) || n.innerHTML;
							else i[r] = n.getAttribute(r) || n.innerHTML;
							t = i.href;
							t.match("^mailto:") && (t = t.split(":")[1].match("([^@]+)")[0]) && (i.href = t), D(e)
						}
						y("click", s[o], c)
					};
					h(s[o], "click", c)
				}, n = 0; n < s.length; n++) e(n);
		else setTimeout(function() {
			Ar(u)
		}, 500)
	}

	function Lr(t) {
		var e = E(t, "trigger.sel"),
			n = E(t, "trigger.text");
		e && n && (e = (e = Ir(e)) && e.textContent, n = new RegExp(n, "i"), e && n.test(e) ? D(t) : setTimeout(function() {
			Lr(t)
		}, 500))
	}

	function Dr(t) {
		var e = E(t, "trigger.condition");
		if (e) {
			for (var n in e)
				if (e[n])
					if (!new RegExp(e[n], "i").test(S(n))) return;
			D(t)
		}
	}

	function jr() {
		return A("ccpg") || null
	}

	function Nr() {
		return d
	}

	function Rr() {
		return l || "paypal"
	}

	function qr() {
		return rr() ? "1" : "0"
	}

	function Fr() {
		var t = function() {
			var t = qe("redirect_uri").redirect_uri;
			t = t || S("fpti.redirect_uri");
			return t
		}();
		return (!!t && -1 < t.indexOf("https://www.paypal.cn")).toString()
	}

	function Mr() {
		return ("c2" === jr()).toString()
	}

	function Br() {
		return Fe()
	}

	function Ur(t) {
		return {
			constructUrl: Ne,
			fetchGuid: or,
			fireImmediate: D,
			encodeURIComponent: encodeURIComponent,
			fetchCountry: jr,
			fetchHostname: Nr,
			fetchTenantname: Rr,
			conditionalValue: Cr,
			mapValue: Or,
			mrktConsentOptOut: qr,
			isLoggedIn: ar,
			gaClientId: ir,
			fireButtonClick: Pr,
			matchPgTxt: Lr,
			matchUrl: Dr,
			matchSuppl: _r,
			handleClick: xr,
			eventClick: Ar,
			isC2ToC3: Fr,
			isC2: Mr,
			fetchSanatizedURL: Br
		} [t]
	}
	Ae() && (v(H, function() {
		(L = window.latmconf) && (hr(), w.subscribe(k.BEACON, Er), lr || (w.subscribe(k.INIT, hr), w.subscribe(k.BEACON, hr)))
	}, !0), w.subscribe(k.BEACON, function(t, e) {
		fr || pr.push(e)
	}), (z = u(re)) && /explicit/i.test(z) || w.subscribe(k.BEACON, function(t, e) {
		e && e.data && ("cl" === e.data.e && "acceptcookies" === e.data.link && setTimeout(function() {
			mr = dr = !(fr = lr = !1), ur("consentOptOut", rr()), hr()
		}, 500), gr.push(e))
	}));
	var zr, Jr = G + "OrchestratorMain.js",
		Vr = !1,
		Qr = !1;

	function Hr(t) {
		var e = A(ue),
			n = A("pgrp"),
			r = window.latmconf;
		return r && r.isQSIEnabled && r.isQSIEnabled(e, n) || !0 === t
	}

	function Yr(t) {
		var e, n, r;
		window.QSI || (n = W.pypl, e = e || d, r = $.internal, 0 === (e = e.toLowerCase()).indexOf("developer.") ? n = W.dev : 0 === e.indexOf("demo.") ? n = W.demo : -1 !== e.indexOf("paypal-status.") ? n = W.ppstatus : r.test(e) && (n = W.internal, Qr = !0), e = n, Hr(t) && ("undefined" == typeof window.QSI && (window.QSI = {}, window.QSI.config = {
			hostedJSLocation: G,
			zoneId: e,
			brandId: "paypalxm",
			enableSecureVariables: !0,
			sampleType: "visitor",
			sampleRate: 100
		}, $r()), v(Jr)))
	}

	function $r() {
		window.QSI && window.QSI.config && !window.QSI.config.externalReference && (window.QSI.config = ke(ke({}, window.QSI.config), {}, {
			externalReference: S(Qr ? "fpti.internal_user" : "fpti.cust")
		}))
	}

	function Wr() {
		Vr = !1
	}

	function Gr() {
		!Vr && window.QSI && window.QSI.API && (Vr = !0, window.QSI.API.unload(), window.QSI.API.load().then(function() {
			window.QSI.API.run(), Wr()
		}, Wr), setTimeout(Wr, 1e4))
	}
	I.reloadQualtrics = function(t) {
		"string" == typeof t && ur(we, t), window.QSI ? ($r(), Gr()) : Yr(!0)
	}, I.qualtricsInterceptInterrupt = function(t, e, n) {
		var r = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : 2;
		I.reloadQualtrics(e);
		var i = et(function() {
				n && ("function" == typeof n ? n() : window.location = n)
			}),
			a = setTimeout(i, 1e3 * r);
		window.QSI && window.QSI.API ? window.QSI.API.getIntercept(t).then(function(t) {
			clearTimeout(a);
			var e = t.getEvaluationResult();
			e && e.passed ? t.onClose(function() {
				i()
			}) : i()
		}) : i()
	}, Ae("ql") && (w.subscribe(k.LATM, function() {
		!0 === Hr() && (ur(we, undefined), (window.QSI ? ($r(), Gr) : Yr)())
	}), w.subscribe(k.BEACON, $r));
	var Zr = !1;

	function Kr(t) {
		var t = (t || "").replace("main:", "").replace(/:+/g, "_").toUpperCase(),
			e = (t = t.substr(0, 32)).length - 1;
		return t = "_" === t.charAt(e) ? t.substr(0, e) : t
	}

	function Xr() {
		var t, e = window.fpti;
		!Zr && e && (t = window.latmconf) && t.isFNEnabled && t.isFNEnabled(e.page) && (Zr = !0, t = Le(), function(t) {
			var e = document.getElementById("fconfig");
			if (e) {
				if (!e.parentNode || zr === t.s) return !1;
				e.parentNode.removeChild(e)
			}
			return zr = t.s, (e = document.createElement("script")).id = "fconfig", e.type = "application/json", e.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), e.text = JSON.stringify(t), !!document.body && (document.body.appendChild(e), !0)
		}({
			ts: {
				type: Kr(e.page),
				delegate: !0,
				fields: [{
					id: "cardNumber",
					min: 15
				}, {
					id: "expDate",
					min: 4
				}, {
					id: "verificationCode",
					min: 3
				}, {
					id: "accountNumberInput",
					min: 9
				}, {
					id: "routingNumberGroup",
					min: 9
				}, {
					id: "bankName",
					min: 5
				}, {
					id: "branchLocation",
					min: 3
				}, {
					id: "branchCode",
					min: 3
				}, {
					id: "nativeName",
					min: 7
				}, {
					id: "accountNamePanel",
					min: 7
				}, {
					id: "idNumber",
					min: 6
				}, {
					id: "bankCode",
					min: 2
				}, {
					id: "biCode",
					min: 8
				}, {
					id: "taxIdPanel",
					min: 10
				}, {
					id: "swiftCode",
					min: 8
				}, {
					id: "institution",
					min: 3
				}, {
					id: "bankTransit",
					min: 5
				}, {
					id: "fullName",
					min: 7
				}]
			},
			s: Kr(e.page),
			f: t.vt || ""
		})) && v("https://c.paypal.com/da/r/fb.js")
	}
	Ae("pp") && (w.subscribe(k.BEACON, Xr), w.subscribe(k.LATM, Xr));
	var j, ti, ei, ni, ri, ii = {
			exports: {}
		},
		t = ii.exports,
		ai = function ai() {
			return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
		},
		oi = function oi(t) {
			if ("loading" === document.readyState) return "loading";
			var e = ai();
			if (e) {
				if (t < e.domInteractive) return "loading";
				if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
				if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
			}
			return "complete"
		},
		ci = function ci(t) {
			var e = t.nodeName;
			return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
		},
		ui = function ui(t, e) {
			var n = "";
			try {
				for (; t && 9 !== t.nodeType;) {
					var r = t,
						i = r.id ? "#" + r.id : ci(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
					if (n.length + i.length > (e || 100) - 1) return n || i;
					if (n = n ? i + ">" + n : i, r.id) break;
					t = r.parentNode
				}
			} catch (a) {}
			return n
		},
		si = -1,
		li = function li() {
			return si
		},
		N = function N(e) {
			addEventListener("pageshow", function(t) {
				t.persisted && (si = t.timeStamp, e(t))
			}, !0)
		},
		fi = function fi() {
			var t = ai();
			return t && t.activationStart || 0
		},
		R = function R(t, e) {
			var n = ai(),
				r = "navigate";
			return 0 <= li() ? r = "back-forward-cache" : n && (document.prerendering || 0 < fi() ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
				name: t,
				value: void 0 === e ? -1 : e,
				rating: "good",
				delta: 0,
				entries: [],
				id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
				navigationType: r
			}
		},
		di = function di(t, e, n) {
			try {
				var r;
				if (PerformanceObserver.supportedEntryTypes.includes(t)) return (r = new PerformanceObserver(function(t) {
					Promise.resolve().then(function() {
						e(t.getEntries())
					})
				})).observe(Object.assign({
					type: t,
					buffered: !0
				}, n || {})), r
			} catch (i) {}
		},
		q = function q(e, n, r, i) {
			var a, o;
			return function(t) {
				0 <= n.value && (t || i) && ((o = n.value - (a || 0)) || void 0 === a) && (a = n.value, n.delta = o, n.rating = (t = n.value) > r[1] ? "poor" : t > r[0] ? "needs-improvement" : "good", e(n))
			}
		},
		pi = function pi(t) {
			requestAnimationFrame(function() {
				return requestAnimationFrame(function() {
					return t()
				})
			})
		},
		mi = function mi(e) {
			var n = function n(t) {
				"pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
			};
			addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
		},
		gi = function gi(e) {
			var n = !1;
			return function(t) {
				n || (e(t), n = !0)
			}
		},
		vi = -1,
		hi = function hi() {
			return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
		},
		yi = function yi(t) {
			"hidden" === document.visibilityState && -1 < vi && (vi = "visibilitychange" === t.type ? t.timeStamp : 0, bi())
		},
		wi = function wi() {
			addEventListener("visibilitychange", yi, !0), addEventListener("prerenderingchange", yi, !0)
		},
		bi = function bi() {
			removeEventListener("visibilitychange", yi, !0), removeEventListener("prerenderingchange", yi, !0)
		},
		ki = function ki() {
			return vi < 0 && (vi = hi(), wi(), N(function() {
				setTimeout(function() {
					vi = hi(), wi()
				}, 0)
			})), {
				get firstHiddenTime() {
					return vi
				}
			}
		},
		Ti = function Ti(t) {
			document.prerendering ? addEventListener("prerenderingchange", function() {
				return t()
			}, !0) : t()
		},
		Ei = [1800, 3e3],
		Si = function Si(a, o) {
			o = o || {}, Ti(function() {
				var e, n = ki(),
					r = R("FCP"),
					i = di("paint", function(t) {
						t.forEach(function(t) {
							"first-contentful-paint" === t.name && (i.disconnect(), t.startTime < n.firstHiddenTime) && (r.value = Math.max(t.startTime - fi(), 0), r.entries.push(t), e(!0))
						})
					});
				i && (e = q(a, r, Ei, o.reportAllChanges), N(function(t) {
					r = R("FCP"), e = q(a, r, Ei, o.reportAllChanges), pi(function() {
						r.value = performance.now() - t.timeStamp, e(!0)
					})
				}))
			})
		},
		Ci = [.1, .25],
		Oi = function Oi(e, t) {
			var o, c;
			o = function(t) {
				! function(t) {
					if (t.entries.length) {
						var e = t.entries.reduce(function(t, e) {
							return t && t.value > e.value ? t : e
						});
						if (e && e.sources && e.sources.length) {
							n = (n = e.sources).find(function(t) {
								return t.node && 1 === t.node.nodeType
							}) || n[0];
							if (n) return t.attribution = {
								largestShiftTarget: ui(n.node),
								largestShiftTime: e.startTime,
								largestShiftValue: e.value,
								largestShiftSource: n,
								largestShiftEntry: e,
								loadState: oi(e.startTime)
							}
						}
					}
					var n;
					t.attribution = {}
				}(t), e(t)
			}, c = t || {}, Si(gi(function() {
				var e, n, r = R("CLS", 0),
					i = 0,
					a = [],
					t = di("layout-shift", n = function n(t) {
						t.forEach(function(t) {
							var e, n;
							t.hadRecentInput || (e = a[0], n = a[a.length - 1], i && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value, a.push(t)) : (i = t.value, a = [t]))
						}), i > r.value && (r.value = i, r.entries = a, e())
					});
				t && (e = q(o, r, Ci, c.reportAllChanges), mi(function() {
					n(t.takeRecords()), e(!0)
				}), N(function() {
					r = R("CLS", i = 0), e = q(o, r, Ci, c.reportAllChanges), pi(function() {
						return e()
					})
				}), setTimeout(e, 0))
			}))
		},
		Pi = function Pi(e, t) {
			Si(function(t) {
				! function(t) {
					if (t.entries.length) {
						var e, n = ai(),
							r = t.entries[t.entries.length - 1];
						if (n) return e = n.activationStart || 0, e = Math.max(0, n.responseStart - e), t.attribution = {
							timeToFirstByte: e,
							firstByteToFCP: t.value - e,
							loadState: oi(t.entries[0].startTime),
							navigationEntry: n,
							fcpEntry: r
						}
					}
					t.attribution = {
						timeToFirstByte: 0,
						firstByteToFCP: t.value,
						loadState: oi(li())
					}
				}(t), e(t)
			}, t)
		},
		Ii = {
			passive: !0,
			capture: !0
		},
		xi = new Date,
		_i = function _i(t, e) {
			j || (j = e, ti = t, ei = new Date, Di(removeEventListener), Ai())
		},
		Ai = function Ai() {
			var e;
			0 <= ti && ti < ei - xi && (e = {
				entryType: "first-input",
				name: j.type,
				target: j.target,
				cancelable: j.cancelable,
				startTime: j.timeStamp,
				processingStart: j.timeStamp + ti
			}, ni.forEach(function(t) {
				t(e)
			}), ni = [])
		},
		Li = function Li(t) {
			var e, n, r, i, a, o;
			t.cancelable && (e = (1e12 < t.timeStamp ? new Date : performance.now()) - t.timeStamp, "pointerdown" == t.type ? (n = e, r = t, i = function i() {
				_i(n, r), o()
			}, a = function a() {
				o()
			}, o = function o() {
				removeEventListener("pointerup", i, Ii), removeEventListener("pointercancel", a, Ii)
			}, addEventListener("pointerup", i, Ii), addEventListener("pointercancel", a, Ii)) : _i(e, t))
		},
		Di = function Di(e) {
			["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
				return e(t, Li, Ii)
			})
		},
		ji = [100, 300],
		Ni = function Ni(o, c) {
			c = c || {}, Ti(function() {
				var e, n = ki(),
					r = R("FID"),
					i = function i(t) {
						t.startTime < n.firstHiddenTime && (r.value = t.processingStart - t.startTime, r.entries.push(t), a(!0))
					},
					t = di("first-input", e = function e(t) {
						t.forEach(i)
					}),
					a = q(o, r, ji, c.reportAllChanges);
				t && mi(gi(function() {
					e(t.takeRecords()), t.disconnect()
				})), t && N(function() {
					r = R("FID"), a = q(o, r, ji, c.reportAllChanges), ni = [], ti = -1, j = null, Di(addEventListener), ni.push(i), Ai()
				})
			})
		},
		Ri = function Ri(n, t) {
			Ni(function(t) {
				var e;
				e = t.entries[0], t.attribution = {
					eventTarget: ui(e.target),
					eventType: e.name,
					eventTime: e.startTime,
					eventEntry: e,
					loadState: oi(e.startTime)
				}, n(t)
			}, t)
		},
		qi = 0,
		Fi = 1 / 0,
		Mi = 0,
		Bi = function Bi(t) {
			t.forEach(function(t) {
				t.interactionId && (Fi = Math.min(Fi, t.interactionId), Mi = Math.max(Mi, t.interactionId), qi = Mi ? (Mi - Fi) / 7 + 1 : 0)
			})
		},
		Ui = function Ui() {
			return ri ? qi : performance.interactionCount || 0
		},
		zi = function zi() {
			"interactionCount" in performance || (ri = ri || di("event", Bi, {
				type: "event",
				buffered: !0,
				durationThreshold: 0
			}))
		},
		Ji = [200, 500],
		Vi = 0,
		Qi = function Qi() {
			return Ui() - Vi
		},
		F = [],
		Hi = {},
		Yi = function Yi(t) {
			var e = F[F.length - 1],
				n = Hi[t.interactionId];
			(n || F.length < 10 || t.duration > e.latency) && (n ? (n.entries.push(t), n.latency = Math.max(n.latency, t.duration)) : (e = {
				id: t.interactionId,
				latency: t.duration,
				entries: [t]
			}, Hi[e.id] = e, F.push(e)), F.sort(function(t, e) {
				return e.latency - t.latency
			}), F.splice(10).forEach(function(t) {
				delete Hi[t.id]
			}))
		},
		$i = function $i(i, a) {
			a = a || {}, Ti(function() {
				zi();
				var e, n = R("INP"),
					t = di("event", e = function e(t) {
						t.forEach(function(e) {
							e.interactionId && Yi(e), "first-input" !== e.entryType || F.some(function(t) {
								return t.entries.some(function(t) {
									return e.duration === t.duration && e.startTime === t.startTime
								})
							}) || Yi(e)
						});
						t = Math.min(F.length - 1, Math.floor(Qi() / 50));
						t = F[t];
						t && t.latency !== n.value && (n.value = t.latency, n.entries = t.entries, r())
					}, {
						durationThreshold: a.durationThreshold || 40
					}),
					r = q(i, n, Ji, a.reportAllChanges);
				t && (t.observe({
					type: "first-input",
					buffered: !0
				}), mi(function() {
					e(t.takeRecords()), n.value < 0 && 0 < Qi() && (n.value = 0, n.entries = []), r(!0)
				}), N(function() {
					F = [], Vi = Ui(), n = R("INP"), r = q(i, n, Ji, a.reportAllChanges)
				}))
			})
		},
		Wi = function Wi(r, t) {
			$i(function(t) {
				var e, n;
				(e = t).entries.length ? (n = e.entries.sort(function(t, e) {
					return e.duration - t.duration || e.processingEnd - e.processingStart - (t.processingEnd - t.processingStart)
				})[0], e.attribution = {
					eventTarget: ui(n.target),
					eventType: n.name,
					eventTime: n.startTime,
					eventEntry: n,
					loadState: oi(n.startTime)
				}) : e.attribution = {}, r(t)
			}, t)
		},
		Gi = [2500, 4e3],
		Zi = {},
		Ki = function Ki(e, t) {
			var o, c;
			o = function(t) {
				! function(t) {
					if (t.entries.length) {
						var e, n, r, i, a, o, c = ai();
						if (c) return a = c.activationStart || 0, n = (e = t.entries[t.entries.length - 1]).url && performance.getEntriesByType("resource").filter(function(t) {
							return t.name === e.url
						})[0], o = Math.max(0, c.responseStart - a), r = Math.max(o, n ? (n.requestStart || n.startTime) - a : 0), i = Math.max(r, n ? n.responseEnd - a : 0), a = Math.max(i, e ? e.startTime - a : 0), o = {
							element: ui(e.element),
							timeToFirstByte: o,
							resourceLoadDelay: r - o,
							resourceLoadTime: i - r,
							elementRenderDelay: a - i,
							navigationEntry: c,
							lcpEntry: e
						}, e.url && (o.url = e.url), n && (o.lcpResourceEntry = n), t.attribution = o
					}
					t.attribution = {
						timeToFirstByte: 0,
						resourceLoadDelay: 0,
						resourceLoadTime: 0,
						elementRenderDelay: t.value
					}
				}(t), e(t)
			}, c = t || {}, Ti(function() {
				var e, n, r, i = ki(),
					a = R("LCP"),
					t = di("largest-contentful-paint", e = function e(t) {
						t = t[t.length - 1];
						t && t.startTime < i.firstHiddenTime && (a.value = Math.max(t.startTime - fi(), 0), a.entries = [t], n())
					});
				t && (n = q(o, a, Gi, c.reportAllChanges), r = gi(function() {
					Zi[a.id] || (e(t.takeRecords()), t.disconnect(), Zi[a.id] = !0, n(!0))
				}), ["keydown", "click"].forEach(function(t) {
					addEventListener(t, r, !0)
				}), mi(r), N(function(t) {
					a = R("LCP"), n = q(o, a, Gi, c.reportAllChanges), pi(function() {
						a.value = performance.now() - t.timeStamp, Zi[a.id] = !0, n(!0)
					})
				}))
			})
		},
		Xi = [800, 1800],
		ta = function ua(t) {
			document.prerendering ? Ti(function() {
				return ua(t)
			}) : "complete" !== document.readyState ? addEventListener("load", function() {
				return ua(t)
			}, !0) : setTimeout(t, 0)
		},
		ea = function ea(n, r) {
			r = r || {};
			var i = R("TTFB"),
				a = q(n, i, Xi, r.reportAllChanges);
			ta(function() {
				var t, e = ai();
				!e || (t = e.responseStart) <= 0 || t > performance.now() || (i.value = Math.max(t - fi(), 0), i.entries = [e], a(!0), N(function() {
					i = R("TTFB", 0), (a = q(n, i, Xi, r.reportAllChanges))(!0)
				}))
			})
		},
		na = function na(o, t) {
			ea(function(t) {
				var e, n, r, i, a;
				(e = t).entries.length ? (a = (n = e.entries[0]).activationStart || 0, r = Math.max(n.domainLookupStart - a, 0), i = Math.max(n.connectStart - a, 0), a = Math.max(n.requestStart - a, 0), e.attribution = {
					waitingTime: r,
					dnsTime: i - r,
					connectionTime: a - i,
					requestTime: e.value - a,
					navigationEntry: n
				}) : e.attribution = {
					waitingTime: 0,
					dnsTime: 0,
					connectionTime: 0,
					requestTime: 0
				}, o(t)
			}, t)
		},
		ra = (t.attribution = function(e) {
			var c = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : console.warn,
				n = new Set,
				r = new Set,
				i = {
					e: "cwv"
				},
				a = function a(t) {
					var e = t.name;
					r.has(e) || (n.add(t), r.add(e)), 6 <= r.size && o()
				},
				u = function u(t) {
					var e = t.name,
						n = t.attribution,
						r = t.rating,
						i = t.value,
						a = {
							rating: r
						};
					switch (e) {
						case "CLS":
							var o = s({
								lsTrgt: n.largestShiftTarget,
								lsTime: n.largestShiftTime,
								lsv: n.largestShiftValue
							}, a);
							return {
								cls: "".concat(i), cls_attr: JSON.stringify(o)
							};
						case "FCP":
							o = s({
								timeToFirstByte: n.timeToFirstByte,
								firstByteToFCP: n.firstByteToFCP,
								fcpEntry: n.fcpEntry
							}, a);
							return {
								fcp: "".concat(i), fcp_attr: JSON.stringify(o)
							};
						case "FID":
							o = s({
								evtTrgt: n.eventTarget,
								evtType: n.eventType,
								evtTime: n.eventTime
							}, a);
							return {
								fid: "".concat(i), fid_attr: JSON.stringify(o)
							};
						case "INP":
							o = s({
								eventTarget: n.eventTarget,
								eventTime: n.eventTime,
								eventType: n.eventType,
								loadState: n.loadState
							}, a);
							return {
								inp: "".concat(i), inp_attr: JSON.stringify(o)
							};
						case "LCP":
							o = s({
								el: n.element,
								ttfb: n.timeToFirstByte,
								rld: n.resourceLoadDelay,
								rlt: n.resourceLoadTime,
								erd: n.elementRenderDelay,
								url: n.url
							}, a);
							return {
								lcp: "".concat(i), lcp_attr: JSON.stringify(o)
							};
						case "TTFB":
							o = s({
								connectionTime: n.connectionTime,
								dnsTime: n.dnsTime,
								requestTime: n.requestTime,
								waitingTime: n.waitingTime
							}, a);
							return {
								ttfb: "".concat(i), ttfb_attr: JSON.stringify(o)
							};
						default:
							c("Did not match any web-vital/attribution metrics: ".concat(e, "."))
					}
				};

			function o() {
				var t;
				0 < n.size && (t = Array.from(n).reduce(function(t, e) {
					e = u(e);
					return s(s({}, t), e)
				}, {}), e(s(s({}, t), i)), n.clear())
			}
			addEventListener("visibilitychange", function() {
				"hidden" === document.visibilityState && o()
			}), addEventListener("pagehide", o), setTimeout(function() {
				o()
			}, 100), Oi(a), Pi(a), Ri(a), Wi(a), Ki(a), na(a)
		}, Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), !1),
		ia = {};

	function aa(t) {
		I.logJSError && I.logJSError(t)
	}

	function oa(t) {
		t = X(Z(ia) ? window.fpti || {} : ia, t);
		Ut(t)
	}

	function ca(t) {
		var e = "";
		ra || (e = A(ue) || ia.comp, !0 === t ? (ii.exports.attribution(oa, aa), ra = !0) : Z(ia) && "" === e || (t = I.options, e = A(ue), -1 !== U.indexOf(e) && (t.trackCWV = !0), t.trackCWV && ii.exports.attribution(oa, aa), ra = !0))
	}
	I.setCWVData = function(t) {
		var e = (null == (e = window) ? void 0 : e.fpti) || {};
		if (!Z(t) && Z(ia)) return ia = ke(ke({}, e), t), ca(!0), ia;
		throw new Error("cwv payload already set")
	}, w.subscribe(k.INIT, ca), w.subscribe(k.BEACON, ca)
}();