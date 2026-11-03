/** Reconstructed React application. See README.md for recovery scope. */
import {
  airpodsImage,
  switchImage,
  ps5Image,
  ps5ProImage,
  controllerImage,
  vacuumImage,
  towelsImage,
  sarahAirpodsImage,
  airpodsMaxImage,
  portalImage,
  hanesImage,
  bodywashImage,
  toothpasteImage,
  waterImage,
  questImage,
  appLogo,
} from "./data/assets.js";
import { orders, featuredOrder } from "./data/orders.js";
import {
  formatTime,
  addMinutes,
  parseDuration,
  hashSeed,
  seededRandom,
  orderReference,
  distanceMiles,
  nearbyCoordinates,
  formatAddress,
  longitudeToTile,
  latitudeToTile,
  initialQuantities,
  countItems,
  calculateTotal,
} from "./lib/utils.js";

import {
  QueryClientProvider,
  QueryClient,
  ClipboardListIcon,
  HouseIcon,
  ToastViewport,
  LocateFixedIcon,
  LockIcon,
  SonnerToaster,
  MailIcon,
  LogOutIcon,
  NavigationIcon,
  Button,
  MinusIcon,
  ThumbsUpIcon,
  ArrowLeftIcon,
  React,
  Routes,
  UserRoundIcon,
  CheckIcon,
  MapPinIcon,
  PackageIcon,
  BrowserRouter,
  ShieldCheckIcon,
  useLocation,
  ChevronRightIcon,
  TrendingUpIcon,
  BadgeDollarSignIcon,
  toast,
  RadioIcon,
  ShoppingCartIcon,
  jsxRuntime,
  createRoot,
  CalendarDaysIcon,
  PlusIcon,
  ScanLineIcon,
  PhoneIcon,
  Clock3Icon,
  TooltipProvider,
  Route,
} from "./vendor.js";

import { config } from "./config.js";

import { createAuthClient } from "./auth.js";
import { CameraLiveShell } from "./camera-live.js";
import { CameraPreviewScreen } from "./camera-preview.js";
import { PickupAddressEditor, NewItemForm } from "./editors.js";
import { readOrderState, saveOrderState, createScanPlan } from "./lib/local-edits.js";

const authClient = createAuthClient(null, config);

const fallbackLocation = { lat: 35.7479, lng: -95.3697 };

const adminEmail =
  "";

const pickupLocation = {
  id: "oak-grove-salem-st",
  name: "Walmart Pickup",
  address: "8000 Lakeland Ave N, Brooklyn Park, MN 55445, United States",
  distance: "Pickup location",
};

const useClock = () => {
  const [e, t] = React.useState(() => new Date());
  return (
    React.useEffect(() => {
      let r;
      const n = () => {
        (t(new Date()), (r = window.setTimeout(n, 1e3 - (Date.now() % 1e3))));
      };
      return (
        (r = window.setTimeout(n, 1e3 - (Date.now() % 1e3))),
        () => window.clearTimeout(r)
      );
    }, []),
    e
  );
};

const useLiveLocation = () => {
  const [e, t] = React.useState(fallbackLocation);
  return (
    React.useEffect(() => {
      if (!navigator.geolocation) return;
      const r = navigator.geolocation.watchPosition(
        ({ coords: n }) => t({ lat: n.latitude, lng: n.longitude }),
        () => {},
        { enableHighAccuracy: !0, maximumAge: 1e4, timeout: 8e3 },
      );
      return () => navigator.geolocation.clearWatch(r);
    }, []),
    e
  );
};

const useDeliveryAddress = (e, t) => {
  const [r, n] = React.useState(null),
    s = `${e.lat.toFixed(2)},${e.lng.toFixed(2)}`;
  return (
    React.useEffect(() => {
      const i = new AbortController(),
        o = nearbyCoordinates(e, 15, `${t}-${s}`);
      return (
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${o.lat}&lon=${o.lng}&addressdetails=1`,
          { signal: i.signal },
        )
          .then((a) => a.json())
          .then((a) => {
            const l = a.address || {};
            n({
              address: formatAddress(l, a.display_name),
              distance: `${distanceMiles(e, o).toFixed(1)} mi from you`,
            });
          })
          .catch(() =>
            n({
              address: `${o.lat.toFixed(5)}, ${o.lng.toFixed(5)}`,
              distance: `${distanceMiles(e, o).toFixed(1)} mi from you`,
            }),
          ),
        () => i.abort()
      );
    }, [s, t]),
    r
  );
};

const LiveMap = () => {
  const e = useLiveLocation(),
    t = 15,
    r = { x: longitudeToTile(e.lng, t), y: latitudeToTile(e.lat, t) },
    n = [-1, 0, 1].flatMap((s) =>
      [-1, 0, 1].map((i) => ({ x: r.x + i, y: r.y + s })),
    );
  return jsxRuntime.jsxs("div", {
    className: "relative h-36 overflow-hidden bg-secondary",
    children: [
      jsxRuntime.jsx("div", {
        className:
          "absolute left-1/2 top-1/2 grid h-[768px] w-[768px] -translate-x-1/2 -translate-y-1/2 grid-cols-3 grid-rows-3 opacity-95",
        children: n.map((s) =>
          jsxRuntime.jsx(
            "img",
            {
              src: `https://tile.openstreetmap.org/${t}/${s.x}/${s.y}.png`,
              alt: "Map tile",
              className: "h-64 w-64 object-cover",
              loading: "lazy",
            },
            `${s.x}-${s.y}`,
          ),
        ),
      }),
      jsxRuntime.jsx("div", {
        className:
          "absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_58%)]",
      }),
      jsxRuntime.jsx("div", {
        className:
          "absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary/20 animate-pulse",
        children: jsxRuntime.jsx("span", {
          className:
            "h-6 w-6 rounded-full border-4 border-primary-foreground bg-primary shadow-lift",
        }),
      }),
      jsxRuntime.jsx("div", {
        className:
          "absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-card-foreground shadow-card backdrop-blur",
        children: "Live location",
      }),
    ],
  });
};

const StatCard = ({ label: e, value: t, sub: r }) =>
  jsxRuntime.jsxs("div", {
    className: "rounded-2xl border bg-card p-4 text-center shadow-card",
    children: [
      jsxRuntime.jsx("p", {
        className: "text-sm font-semibold text-muted-foreground",
        children: e,
      }),
      jsxRuntime.jsx("p", {
        className: "mt-1 text-2xl font-extrabold text-primary",
        children: t,
      }),
      jsxRuntime.jsx("p", {
        className: "mt-1 text-sm text-muted-foreground",
        children: r,
      }),
    ],
  });

const TopSpacer = () =>
  jsxRuntime.jsx("div", { className: "h-9 px-7 pt-9", "aria-hidden": "true" });

const Brand = () =>
  jsxRuntime.jsxs("div", {
    className:
      "flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary-foreground/70",
    children: [
      jsxRuntime.jsx("img", {
        src: appLogo,
        alt: "Spark Driver app logo",
        className: "h-9 w-9 rounded-lg object-cover",
      }),
      "Spark Driver",
    ],
  });

const PageHeader = ({ title: e, subtitle: t, back: r, onBack: n }) =>
  jsxRuntime.jsxs("header", {
    className: "app-gradient rounded-b-[2rem] pb-8 text-primary-foreground",
    children: [
      jsxRuntime.jsx(TopSpacer, {}),
      jsxRuntime.jsxs("div", {
        className: "mt-5 flex items-center gap-4 px-7",
        children: [
          r &&
            jsxRuntime.jsx("button", {
              onClick: n,
              className:
                "grid h-14 w-14 place-items-center rounded-full bg-primary-foreground/20 transition active:scale-95",
              children: jsxRuntime.jsx(ArrowLeftIcon, { className: "h-8 w-8" }),
            }),
          jsxRuntime.jsxs("div", {
            children: [
              jsxRuntime.jsx(Brand, {}),
              jsxRuntime.jsx("h1", {
                className: "text-3xl font-black tracking-normal",
                children: e,
              }),
              t &&
                jsxRuntime.jsx("p", {
                  className: "mt-1 text-lg text-primary-foreground/70",
                  children: t,
                }),
            ],
          }),
        ],
      }),
    ],
  });

const BottomNavigation = ({ tab: e, setTab: t }) => {
  const r = [
    ["home", HouseIcon, "Home"],
    ["earnings", BadgeDollarSignIcon, "Earnings"],
    ["orders", ClipboardListIcon, "Orders"],
    ["account", UserRoundIcon, "Account"],
  ];
  return jsxRuntime.jsx("nav", {
    className:
      "fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] border-t bg-card/95 px-8 py-3 safe-bottom backdrop-blur",
    children: jsxRuntime.jsx("div", {
      className: "flex justify-between",
      children: r.map(([n, s, i]) =>
        jsxRuntime.jsxs(
          "button",
          {
            onClick: () => t(n),
            className: `flex flex-col items-center gap-1 text-xs font-bold transition active:scale-95 ${e === n ? "text-primary" : "text-muted-foreground"}`,
            children: [jsxRuntime.jsx(s, { className: "h-7 w-7" }), i],
          },
          n,
        ),
      ),
    }),
  });
};

const HomeScreen = () =>
  jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx(PageHeader, {
        title: "Good afternoon",
        subtitle: "You’re receiving offers",
      }),
      jsxRuntime.jsxs("main", {
        className: "-mt-5 space-y-4 px-6 pb-28",
        children: [
          jsxRuntime.jsx("section", {
            className: "overflow-hidden rounded-2xl border bg-card shadow-card",
            children: jsxRuntime.jsx(LiveMap, {}),
          }),
          jsxRuntime.jsxs("section", {
            className:
              "flex items-center justify-between rounded-2xl border bg-card p-4 shadow-card",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  jsxRuntime.jsx("span", {
                    className:
                      "grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary",
                    children: jsxRuntime.jsx(LocateFixedIcon, {}),
                  }),
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("b", { children: "Knoxville Zone" }),
                      jsxRuntime.jsxs("p", {
                        className: "text-muted-foreground",
                        children: [
                          "Demand: ",
                          jsxRuntime.jsx("span", {
                            className: "font-bold text-success",
                            children: "High",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx("span", {
                className:
                  "rounded-full bg-success/10 px-3 py-1 font-bold text-success",
                children: "• Active",
              }),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className: "grid grid-cols-3 gap-3",
            children: [
              jsxRuntime.jsx(StatCard, {
                label: "Today",
                value: "$58.76",
                sub: "Earnings",
              }),
              jsxRuntime.jsx(StatCard, {
                label: "Trips",
                value: "2",
                sub: "Completed",
              }),
              jsxRuntime.jsx(StatCard, {
                label: "Rating",
                value: "★ 4.9",
                sub: "Driver",
              }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className:
              "flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-foreground shadow-lift",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  jsxRuntime.jsx("span", {
                    className:
                      "grid h-12 w-12 rounded-full bg-primary-foreground/15 place-items-center",
                    children: jsxRuntime.jsx(TrendingUpIcon, {}),
                  }),
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("b", { children: "Incentive Available" }),
                      jsxRuntime.jsx("p", {
                        className: "text-primary-foreground/70",
                        children: "Complete 5 trips for a $15 bonus today",
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx(ChevronRightIcon, {}),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card p-7 text-center shadow-card",
            children: [
              jsxRuntime.jsx(Clock3Icon, {
                className:
                  "mx-auto h-16 w-16 rounded-full bg-secondary p-4 text-primary animate-float",
              }),
              jsxRuntime.jsx("h2", {
                className: "mt-4 text-xl font-black",
                children: "Waiting for Offers",
              }),
              jsxRuntime.jsx("p", {
                className: "mt-2 text-muted-foreground",
                children: "Stay in your zone to receive delivery offers.",
              }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card shadow-card",
            children: [
              jsxRuntime.jsx("h2", {
                className: "p-4 text-xl font-black",
                children: "Recent Activity",
              }),
              orders.slice(0, 2).map((e) =>
                jsxRuntime.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between border-t p-4",
                    children: [
                      jsxRuntime.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          jsxRuntime.jsx("span", {
                            className:
                              "grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success",
                            children: jsxRuntime.jsx(CheckIcon, {}),
                          }),
                          jsxRuntime.jsxs("div", {
                            children: [
                              jsxRuntime.jsxs("b", {
                                children: [e.customer, " — ", e.id],
                              }),
                              jsxRuntime.jsxs("p", {
                                className: "text-muted-foreground",
                                children: ["Shop & Deliver · ", e.pay],
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Today",
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });

const EarningsScreen = () =>
  jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx(PageHeader, { title: "Earnings" }),
      jsxRuntime.jsxs("main", {
        className: "-mt-2 space-y-4 px-6 pb-28",
        children: [
          jsxRuntime.jsxs("section", {
            className: "text-center text-primary-foreground",
            children: [
              jsxRuntime.jsxs("div", {
                className:
                  "mx-auto grid grid-cols-3 rounded-full bg-primary-foreground/15 p-1 text-sm font-bold",
                children: [
                  jsxRuntime.jsx("span", {
                    className: "py-2 text-primary-foreground/70",
                    children: "Today",
                  }),
                  jsxRuntime.jsx("span", {
                    className: "rounded-full bg-card py-2 text-primary",
                    children: "This Week",
                  }),
                  jsxRuntime.jsx("span", {
                    className: "py-2 text-primary-foreground/70",
                    children: "All Time",
                  }),
                ],
              }),
              jsxRuntime.jsx("p", {
                className: "mt-7 text-primary-foreground/60",
                children: "Total Earnings",
              }),
              jsxRuntime.jsx("p", {
                className: "text-5xl font-black",
                children: "$244.76",
              }),
              jsxRuntime.jsx("p", {
                className: "text-primary-foreground/60",
                children: "7 trips completed",
              }),
            ],
          }),
          jsxRuntime.jsx("section", {
            className: "rounded-2xl border bg-card p-6 shadow-card",
            children: jsxRuntime.jsx("div", {
              className: "flex h-28 items-end justify-between px-4",
              children: [42, 3, 62, 4, 70, 88, 2].map((e, t) =>
                jsxRuntime.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center gap-2",
                    children: [
                      jsxRuntime.jsx("span", {
                        className:
                          "w-7 rounded-t-full bg-primary transition-all",
                        style: { height: e },
                      }),
                      jsxRuntime.jsx("small", {
                        className: "text-muted-foreground",
                        children: [
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                          "Sun",
                        ][t],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          }),
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsxs("h2", {
                className:
                  "mb-4 flex gap-3 text-xl font-black text-card-foreground",
                children: [
                  jsxRuntime.jsx(BadgeDollarSignIcon, {
                    className: "text-primary",
                  }),
                  "Earnings Breakdown",
                ],
              }),
              [
                ["Base Pay", "$192.46", "text-card-foreground"],
                ["Tips", "$52.30", "text-success"],
                ["Total", "$244.76", "text-primary"],
              ].map((e) =>
                jsxRuntime.jsxs(
                  "div",
                  {
                    className: "flex justify-between border-t py-3 text-lg",
                    children: [
                      jsxRuntime.jsx("span", {
                        className:
                          e[0] === "Total"
                            ? "font-black"
                            : "text-muted-foreground",
                        children: e[0],
                      }),
                      jsxRuntime.jsx("b", { className: e[2], children: e[1] }),
                    ],
                  },
                  e[0],
                ),
              ),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              jsxRuntime.jsx(StatCard, {
                label: "",
                value: "$34.97",
                sub: "Avg. per Trip",
              }),
              jsxRuntime.jsx(StatCard, {
                label: "",
                value: "100%",
                sub: "On-Time Rate",
              }),
              jsxRuntime.jsx(StatCard, {
                label: "",
                value: "87%",
                sub: "Acceptance Rate",
              }),
              jsxRuntime.jsx(StatCard, {
                label: "",
                value: "34",
                sub: "Items Delivered",
              }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className:
              "flex items-center justify-between rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex gap-4",
                children: [
                  jsxRuntime.jsx(CalendarDaysIcon, {
                    className:
                      "h-12 w-12 rounded-full bg-success/15 p-3 text-success",
                  }),
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("b", { children: "Next Payout" }),
                      jsxRuntime.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Tuesday, March 25 · Direct deposit",
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx(ChevronRightIcon, {}),
            ],
          }),
        ],
      }),
    ],
  });

const OrdersScreen = ({ openDetail: e }) =>
  jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx(PageHeader, {
        title: "Orders",
        subtitle: "Your trips & deliveries",
      }),
      jsxRuntime.jsxs("main", {
        className: "space-y-4 px-6 pb-28 pt-6",
        children: [
          orders.map(order => readOrderState(order).order).map((t) =>
            jsxRuntime.jsxs(
              "button",
              {
                onClick: () => e(t),
                className:
                  "w-full rounded-2xl border-2 border-secondary bg-card p-4 text-left shadow-card transition hover:shadow-lift active:scale-[0.99]",
                children: [
                  jsxRuntime.jsxs("div", {
                    className: "mb-4 flex justify-between",
                    children: [
                      jsxRuntime.jsxs("b", {
                        className: "flex gap-2 text-lg",
                        children: [
                          jsxRuntime.jsx("span", {
                            className: "mt-2 h-3 w-3 rounded-full bg-success",
                          }),
                          "Current Order",
                        ],
                      }),
                      jsxRuntime.jsx("span", {
                        className:
                          "rounded-full bg-secondary px-3 py-1 font-bold text-primary",
                        children: "Shopping",
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      jsxRuntime.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          jsxRuntime.jsx("span", {
                            className:
                              "grid h-14 w-14 place-items-center rounded-full bg-primary font-bold text-primary-foreground",
                            children: t.initials,
                          }),
                          jsxRuntime.jsxs("div", {
                            children: [
                              jsxRuntime.jsx("b", {
                                className: "text-xl",
                                children: t.customer,
                              }),
                              jsxRuntime.jsxs("p", {
                                className: "text-muted-foreground",
                                children: [
                                  t.id,
                                  " · ",
                                  countItems(t, readOrderState(t).quantities),
                                  " items",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntime.jsxs("div", {
                        className: "text-right",
                        children: [
                          jsxRuntime.jsx("b", {
                            className: "text-xl text-primary",
                            children: t.pay,
                          }),
                          jsxRuntime.jsx("p", {
                            className: "text-muted-foreground",
                            children: t.duration,
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("div", {
                    className:
                      "mt-4 flex items-center justify-between border-t pt-3 text-muted-foreground",
                    children: [
                      jsxRuntime.jsxs("span", {
                        className: "flex gap-2",
                        children: [
                          jsxRuntime.jsx(MapPinIcon, { className: "h-5 w-5" }),
                          "Walmart Supercenter #47",
                        ],
                      }),
                      jsxRuntime.jsx(ChevronRightIcon, {
                        className: "text-primary",
                      }),
                    ],
                  }),
                ],
              },
              t.id,
            ),
          ),
          jsxRuntime.jsx("h2", {
            className: "text-xl font-black",
            children: "Past Trips",
          }),
        ],
      }),
    ],
  });

const AccountScreen = ({ onSignOut: e }) =>
  jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx(PageHeader, {
        title: "Account",
        subtitle: "Andrew Phillips",
      }),
      jsxRuntime.jsxs("main", {
        className: "space-y-4 px-6 pt-6 pb-28",
        children: [
          jsxRuntime.jsx("section", {
            className: "rounded-2xl border bg-card p-6 shadow-card",
            children: jsxRuntime.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                jsxRuntime.jsx("span", {
                  className:
                    "grid h-20 w-20 place-items-center rounded-full bg-primary text-2xl font-black text-primary-foreground",
                  children: "AP",
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsx("h2", {
                      className: "text-2xl font-black",
                      children: "Andrew Phillips",
                    }),
                    jsxRuntime.jsx("p", {
                      className: "text-muted-foreground",
                      children: "Silver tier driver · 4.9 rating",
                    }),
                  ],
                }),
              ],
            }),
          }),
          [
            "Vehicle & Insurance",
            "Rewards",
            "Availability",
            "Help & Safety",
          ].map((t) =>
            jsxRuntime.jsxs(
              "section",
              {
                className:
                  "flex justify-between rounded-2xl border bg-card p-5 font-bold shadow-card",
                children: [t, jsxRuntime.jsx(ChevronRightIcon, {})],
              },
              t,
            ),
          ),
          jsxRuntime.jsxs(Button, {
            variant: "dangerOutline",
            size: "driver",
            className: "w-full",
            onClick: e,
            children: [
              jsxRuntime.jsx(LogOutIcon, { className: "mr-2 h-5 w-5" }),
              "Sign Out",
            ],
          }),
        ],
      }),
    ],
  });

const DeliveryDetails = ({
  order: e,
  quantities: t,
  setQuantities: r,
  setFlow: n,
  onAddItem,
  returnMode: s = !1,
}) => {
  const i = useClock(),
    o = useLiveLocation(),
    a = pickupLocation,
    l = () => {
      window.confirm(`Cancel order ${e.id}?`) &&
        (toast.error("Order canceled", {
          description: `${e.customer}'s order has been removed from your active route.`,
        }),
        n("tabs"));
    },
    u = useDeliveryAddress(o, e.id),
    d = formatTime(i),
    f = formatTime(addMinutes(i, parseDuration(e.duration)));
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx(PageHeader, {
        title: "Delivery Details",
        subtitle: e.id,
        back: !0,
        onBack: () => n(s ? "pass" : "tabs"),
      }),
      jsxRuntime.jsxs("main", {
        className: "space-y-4 px-6 pb-28 pt-6",
        children: [
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  jsxRuntime.jsxs("b", {
                    className: "flex gap-2 text-xl",
                    children: [
                      jsxRuntime.jsx("span", {
                        className: "mt-2 h-3 w-3 rounded-full bg-success",
                      }),
                      "In Progress — Shopping",
                    ],
                  }),
                  jsxRuntime.jsx("span", {
                    className:
                      "rounded-full bg-secondary px-3 py-1 text-sm font-black text-primary",
                    children: orderReference(e.id),
                  }),
                ],
              }),
              jsxRuntime.jsxs("p", {
                className: "mt-5 flex gap-6 text-muted-foreground",
                children: [
                  jsxRuntime.jsxs("span", {
                    className: "flex gap-2",
                    children: [
                      jsxRuntime.jsx(Clock3Icon, {}),
                      "Est. ",
                      e.duration,
                    ],
                  }),
                  jsxRuntime.jsxs("span", {
                    children: [countItems(e, t), " items"],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className:
              "flex items-center justify-between rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex gap-4",
                children: [
                  jsxRuntime.jsx("span", {
                    className:
                      "grid h-16 w-16 place-items-center rounded-full bg-primary text-xl font-bold text-primary-foreground",
                    children: e.initials,
                  }),
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("b", {
                        className: "text-2xl underline",
                        children: e.customer,
                      }),
                      jsxRuntime.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Tap for details",
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx(PhoneIcon, {
                className: "h-14 w-14 rounded-full bg-muted p-4 text-primary",
              }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsx("p", {
                className: "text-right font-bold text-primary",
                children: d,
              }),
              jsxRuntime.jsx("b", { children: "Pickup" }),
              jsxRuntime.jsx("h2", {
                className: "mt-3 text-xl font-black",
                children: a.name,
              }),
              jsxRuntime.jsx(PickupAddressEditor, { fallback: a.address }),
              jsxRuntime.jsx("p", {
                className: "mt-1 text-sm font-bold text-primary",
                children: a.distance,
              }),
              jsxRuntime.jsx("p", {
                className: "mt-4 text-right font-bold text-success",
                children: f,
              }),
              jsxRuntime.jsx("b", { children: "Delivery" }),
              jsxRuntime.jsx("h2", {
                className: "text-xl font-black",
                children:
                  (u == null ? void 0 : u.address) ||
                  "Finding nearby delivery address...",
              }),
              (u == null ? void 0 : u.distance) &&
                jsxRuntime.jsx("p", {
                  className: "mt-1 text-sm font-bold text-success",
                  children: u.distance,
                }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className:
              "rounded-2xl border border-warning bg-warning/5 p-5 shadow-card",
            children: [
              jsxRuntime.jsx("h2", {
                className: "mb-3 text-xl font-black",
                children: "Shopper Instructions",
              }),
              jsxRuntime.jsxs("ul", {
                className: "list-disc space-y-2 pl-5 text-muted-foreground",
                children: [
                  jsxRuntime.jsx("li", {
                    children: "Check expiration dates on all perishable items",
                  }),
                  jsxRuntime.jsxs("li", {
                    children: [
                      "If an item is out of stock, ",
                      jsxRuntime.jsx("b", {
                        className: "text-foreground",
                        children: "do not substitute",
                      }),
                      " — mark as unavailable",
                    ],
                  }),
                  jsxRuntime.jsx("li", {
                    children: "Bag electronics separately from other items",
                  }),
                  jsxRuntime.jsxs("li", {
                    children: [
                      "Customer prefers ",
                      jsxRuntime.jsx("b", {
                        className: "text-foreground",
                        children: "contactless delivery",
                      }),
                      " — leave at door",
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsx(ItemsList, {
            items: e.items,
            quantities: t,
            setQuantities: r,
          }),
          jsxRuntime.jsx(NewItemForm, { items: e.items, onAddItem }),
          jsxRuntime.jsxs("section", {
            className: "rounded-2xl border bg-card p-5 shadow-card",
            children: [
              jsxRuntime.jsx("p", {
                className: "text-muted-foreground",
                children: "Your Delivery Pay",
              }),
              jsxRuntime.jsxs("div", {
                className: "flex justify-between",
                children: [
                  jsxRuntime.jsx("b", {
                    className: "text-3xl text-primary",
                    children: e.pay,
                  }),
                  jsxRuntime.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [countItems(e, t), " items · Est. ", e.duration],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              jsxRuntime.jsx(Button, {
                variant: "outline",
                size: "driver",
                children: "View Summary",
              }),
              jsxRuntime.jsx(Button, {
                variant: "driver",
                size: "driver",
                onClick: () => n(s ? "pass" : "scanner"),
                disabled: !s && countItems(e, t) === 0,
                children: s ? "Return" : "Start Scanning",
              }),
            ],
          }),
          jsxRuntime.jsx(Button, {
            variant: "dangerOutline",
            size: "driver",
            className: "w-full",
            onClick: l,
            children: "Cancel Order",
          }),
        ],
      }),
      jsxRuntime.jsx(BottomNavigation, {
        tab: "orders",
        setTab: () => n("tabs"),
      }),
    ],
  });
};

const IMAGE_OVERRIDES_KEY = "spark-item-image-overrides";

const readImageOverrides = () => {
  try {
    return JSON.parse(localStorage.getItem(IMAGE_OVERRIDES_KEY) || "{}");
  } catch {
    return {};
  }
};

const useImageOverrides = () => {
  const [e, t] = React.useState(() => readImageOverrides());
  return (
    React.useEffect(() => {
      const n = (s) => {
        s.key === IMAGE_OVERRIDES_KEY && t(readImageOverrides());
      };
      return (
        window.addEventListener("storage", n),
        () => window.removeEventListener("storage", n)
      );
    }, []),
    {
      overrides: e,
      setOverride: (n, s) => {
        t((i) => {
          const o = { ...i };
          return (
            s ? (o[n] = s) : delete o[n],
            localStorage.setItem(IMAGE_OVERRIDES_KEY, JSON.stringify(o)),
            o
          );
        });
      },
    }
  );
};

const getProductImage = (e) => {
  switch (e) {
    case "switch":
      return switchImage;
    case "airpods":
      return airpodsImage;
    case "ps5":
      return ps5Image;
    case "ps5pro":
      return ps5ProImage;
    case "dualshock":
      return controllerImage;
    case "dyson":
      return vacuumImage;
    case "towels":
      return towelsImage;
    case "sarahAirpods":
      return sarahAirpodsImage;
    case "airpodsMax":
      return airpodsMaxImage;
    case "portal":
      return portalImage;
    case "hanes":
      return hanesImage;
    case "bodywash":
      return bodywashImage;
    case "therabreath":
      return toothpasteImage;
    case "essentia":
      return waterImage;
    case "metaQuest":
      return questImage;
    default:
      return null;
  }
};

const ItemsList = ({ items: e, quantities: t, setQuantities: r }) => {
  const n = (l, c) =>
      r({
        ...t,
        [l.name]: Math.max(0, (t[l.name] ?? l.max) + c),
      }),
    s = Object.values(t).reduce((l, c) => l + c, 0),
    { overrides: i, setOverride: o } = useImageOverrides(),
    a = (l, c) => {
      if (!c.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }
      if (c.size > 5 * 1024 * 1024) {
        toast.error("Image must be under 5MB");
        return;
      }
      const u = new FileReader();
      ((u.onload = () => {
        (o(l, String(u.result)), toast.success(`Updated image for ${l}`));
      }),
        u.readAsDataURL(c));
    };
  return jsxRuntime.jsxs("section", {
    className: "rounded-2xl border bg-card p-5 shadow-card",
    children: [
      jsxRuntime.jsxs("div", {
        className: "mb-5 flex justify-between",
        children: [
          jsxRuntime.jsxs("h2", {
            className: "flex gap-2 text-xl font-black",
            children: [
              jsxRuntime.jsx(PackageIcon, { className: "text-primary" }),
              "Items (",
              s,
              ")",
            ],
          }),
          jsxRuntime.jsxs("span", {
            className: "text-muted-foreground",
            children: [e.length, " products"],
          }),
        ],
      }),
      e.map((l) => {
        const c = i[l.name],
          u = getProductImage(l.image),
          d = c || u;
        return jsxRuntime.jsxs(
          "div",
          {
            className:
              "grid grid-cols-[72px_1fr] gap-4 border-t py-5 first:border-t-0",
            children: [
              jsxRuntime.jsxs("div", {
                className: "space-y-2",
                children: [
                  jsxRuntime.jsxs("label", {
                    className:
                      "group relative grid h-16 w-16 cursor-pointer place-items-center overflow-hidden rounded-2xl bg-muted text-2xl ring-1 ring-transparent transition hover:ring-primary",
                    children: [
                      d
                        ? jsxRuntime.jsx("img", {
                            src: d,
                            alt: l.name,
                            className: "h-full w-full object-cover",
                          })
                        : jsxRuntime.jsx("span", { children: l.emoji }),
                      jsxRuntime.jsx("span", {
                        className:
                          "absolute inset-0 grid place-items-center bg-foreground/50 text-[10px] font-bold uppercase tracking-wide text-background opacity-0 transition group-hover:opacity-100",
                        children: "Change",
                      }),
                      jsxRuntime.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "sr-only",
                        onChange: (f) => {
                          var w;
                          const h =
                            (w = f.target.files) == null ? void 0 : w[0];
                          (h && a(l.name, h), (f.target.value = ""));
                        },
                      }),
                    ],
                  }),
                  c &&
                    jsxRuntime.jsx("button", {
                      onClick: () => {
                        (o(l.name, null), toast.success("Reset to default"));
                      },
                      className:
                        "w-16 truncate text-[10px] font-bold uppercase tracking-wide text-muted-foreground hover:text-destructive",
                      children: "Reset",
                    }),
                ],
              }),
              jsxRuntime.jsxs("div", {
                children: [
                  jsxRuntime.jsxs("div", {
                    className: "flex justify-between gap-2",
                    children: [
                      jsxRuntime.jsxs("div", {
                        children: [
                          jsxRuntime.jsx("b", {
                            className: "text-xl",
                            children: l.name,
                          }),
                          jsxRuntime.jsx("p", {
                            className: "text-muted-foreground",
                            children: l.desc,
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("b", {
                        className: "text-lg text-primary",
                        children: l.price,
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("div", {
                    className: "mt-5 flex items-center justify-end gap-4",
                    children: [
                      jsxRuntime.jsxs("span", {
                        className: "mr-auto text-muted-foreground",
                        children: [
                          "Qty: ",
                          jsxRuntime.jsx("b", {
                            className: "text-foreground",
                            children: t[l.name],
                          }),

                        ],
                      }),
                      jsxRuntime.jsx("button", {
                        "aria-label": `Reduce ${l.name} quantity`,
                        onClick: () => n(l, -1),
                        disabled: t[l.name] === 0,
                        className:
                          "rounded-full transition active:scale-95 disabled:opacity-35",
                        children: jsxRuntime.jsx(MinusIcon, {
                          className: "h-10 w-10 rounded-full bg-muted p-2",
                        }),
                      }),
                      jsxRuntime.jsx("b", { children: t[l.name] }),
                      jsxRuntime.jsx("button", {
                        "aria-label": `Increase ${l.name} quantity`,
                        onClick: () => n(l, 1),

                        className:
                          "rounded-full transition active:scale-95 disabled:opacity-35",
                        children: jsxRuntime.jsx(PlusIcon, {
                          className:
                            "h-10 w-10 rounded-full bg-secondary p-2 text-primary",
                        }),
                      }),
                      t[l.name] === 0
                        ? jsxRuntime.jsx("span", {
                            className:
                              "rounded-full bg-destructive/10 px-3 py-2 text-sm font-bold text-destructive",
                            children: "Out of Stock",
                          })
                        : jsxRuntime.jsx("span", {
                            className:
                              "rounded-full bg-success/10 px-3 py-2 text-sm font-bold text-success",
                            children: "In Stock",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          },
          l.name,
        );
      }),
    ],
  });
};

const ScannerScreen = ({ order: e, quantities: t, setFlow: r }) => {
    var x;
    const n = createScanPlan(e.items, t),
      [s, i] = React.useState(0),
      [o, a] = React.useState(!1),
      [l, c] = React.useState(""),
      u = React.useRef(null),
      d = React.useRef(null),
      f = n.stepAt(s),
      h = (g) => {
        ((u.current = g),
          g &&
            d.current &&
            ((g.srcObject = d.current), g.play().catch(() => {})));
      };
    React.useEffect(() => {
      let g = !0;
      return (
        (async () => {
          var y;
          if (!((y = navigator.mediaDevices) != null && y.getUserMedia)) {
            c("La cámara no está disponible en este dispositivo.");
            return;
          }
          try {
            const _ = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: { ideal: "environment" } },
              audio: !1,
            });
            if (!g) {
              _.getTracks().forEach((k) => k.stop());
              return;
            }
            ((d.current = _),
              u.current &&
                ((u.current.srcObject = _),
                await u.current.play().catch(() => {})),
              c(""));
          } catch {
            c("Permite el acceso a la cámara para ver la imagen en vivo.");
          }
        })(),
        () => {
          var y;
          ((g = !1),
            (y = d.current) == null || y.getTracks().forEach((_) => _.stop()),
            (d.current = null));
        }
      );
    }, []);
    const w = () => {
        const g = (f == null ? void 0 : f.pass) === 1,
          m = s + 1 >= n.length;
        if (g) {
          a(!0);
          return;
        }
        if (m) {
          (i(n.length), r("finished"));
          return;
        }
        i((y) => y + 1);
      },
      v = () => {
        (a(!1), i(s + 1));
      };
    return o
      ? jsxRuntime.jsxs("main", {
          className:
            "app-gradient flex min-h-screen flex-col px-7 text-primary-foreground",
          children: [
            jsxRuntime.jsx(TopSpacer, {}),
            jsxRuntime.jsx("p", {
              style: { alignSelf: "flex-start", marginTop: 8, padding: "4px 10px", borderRadius: 999, background: "#ffffff26", fontSize: 12, fontWeight: 700 },
              children: "Modo demo · avance manual",
            }),
            jsxRuntime.jsxs("div", {
              className: "mt-16",
              children: [
                jsxRuntime.jsx(CheckIcon, {
                  className:
                    "h-20 w-20 rounded-full bg-success/20 p-4 text-success",
                }),
                jsxRuntime.jsx("h1", {
                  className: "mt-10 text-4xl font-black",
                  children: "Thank you!",
                }),
                jsxRuntime.jsx("p", {
                  className:
                    "mt-5 text-2xl leading-snug text-primary-foreground/80",
                  children: "Item barcode accepted.",
                }),
                jsxRuntime.jsxs("p", {
                  className: "mt-8 text-xl text-primary-foreground/60",
                  children: [
                    "Now scan the serial number for ",
                    f == null ? void 0 : f.name,
                    ".",
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx(Button, {
              variant: "success",
              size: "driver",
              className: "mt-auto mb-10 w-full",
              onClick: v,
              children: "SCAN SERIAL NUMBER",
            }),
          ],
        })
      : jsxRuntime.jsxs("main", {
          className:
            "app-gradient flex min-h-screen flex-col px-7 text-primary-foreground",
          children: [
            jsxRuntime.jsx(TopSpacer, {}),
            jsxRuntime.jsx("p", {
              style: { alignSelf: "flex-start", marginTop: 8, padding: "4px 10px", borderRadius: 999, background: "#ffffff26", fontSize: 12, fontWeight: 700 },
              children: "Modo demo · avance manual",
            }),
            jsxRuntime.jsxs("div", {
              className: "mt-2 flex justify-between",
              children: [
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsx("p", {
                      className: "text-lg",
                      children:
                        (f == null ? void 0 : f.pass) === 2
                          ? "Scanning Serial Number"
                          : "Scanning Barcode",
                    }),
                    jsxRuntime.jsx("h1", {
                      className: "text-xl font-black",
                      children:
                        (f == null ? void 0 : f.name) ||
                        ((x = e.items[0]) == null ? void 0 : x.name),
                    }),
                    jsxRuntime.jsxs("p", {
                      className: "mt-1 font-bold text-primary-foreground/60",
                      children: [
                        (f == null ? void 0 : f.pass) === 2
                          ? "Serial number scan"
                          : "Item barcode scan",
                        " · Scan ",
                        (f == null ? void 0 : f.pass) || 1,
                        " of 2",
                      ],
                    }),
                  ],
                }),
                jsxRuntime.jsxs("span", {
                  className:
                    "rounded-full bg-primary-foreground/15 px-5 py-3 text-2xl font-black",
                  children: [s, "/", n.length],
                }),
              ],
            }),
            jsxRuntime.jsx("button", {
              onClick: w,
              className:
                "mx-auto mt-20 grid h-80 w-72 place-items-center overflow-hidden rounded-[2rem] border-2 border-primary-foreground/25 bg-scanner shadow-lift",
              children: jsxRuntime.jsxs("div", {
                className: "relative h-full w-full",
                children: [
                  jsxRuntime.jsx("video", {
                    ref: h,
                    className: "h-full w-full object-cover",
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    "aria-label": "Camera scanner preview",
                  }),
                  jsxRuntime.jsxs("div", {
                    className:
                      "absolute inset-8 rounded-2xl border-4 border-primary-foreground/90",
                    children: [
                      jsxRuntime.jsx(ScanLineIcon, {
                        className:
                          "absolute left-1/2 top-3 h-10 w-10 -translate-x-1/2 rounded-full bg-primary-foreground/20 p-2",
                      }),
                      jsxRuntime.jsx("span", {
                        className:
                          "absolute left-3 right-3 top-1/2 h-1 bg-scanner-line shadow-[0_0_22px_hsl(var(--scanner-line))] animate-scan",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l && jsxRuntime.jsx("p", {
              role: "alert",
              style: { marginTop: 12, textAlign: "center", fontSize: 14 },
              children: l,
            }),
            jsxRuntime.jsxs("div", {
              className: "mt-auto pb-12 text-center",
              children: [
                jsxRuntime.jsxs("p", {
                  className: "text-xl",
                  children: [
                    "Point camera at the ",
                    (f == null ? void 0 : f.pass) === 2
                      ? "serial number"
                      : "item barcode",
                  ],
                }),
                jsxRuntime.jsx("p", {
                  className: "mt-2 text-primary-foreground/60",
                  children: "Barcode first, serial number second",
                }),
                jsxRuntime.jsx("p", {
                  className:
                    "mt-5 tracking-[0.35rem] text-primary-foreground/35",
                  children: "●●●●●●●●",
                }),
              ],
            }),
          ],
        });
  };

const CheckoutInstructions = ({ kind: e, setFlow: t }) => {
  const r = e === "finished",
    n = r ? ThumbsUpIcon : ShoppingCartIcon;
  return jsxRuntime.jsxs("main", {
    className:
      "app-gradient flex min-h-screen flex-col px-7 text-primary-foreground",
    children: [
      jsxRuntime.jsx(TopSpacer, {}),
      jsxRuntime.jsx("div", {
        className: "mt-8",
        children: jsxRuntime.jsx(Brand, {}),
      }),
      jsxRuntime.jsxs("div", {
        className: "mt-12",
        children: [
          jsxRuntime.jsx(n, { className: "h-20 w-20" }),
          jsxRuntime.jsx("h1", {
            className: "mt-10 text-4xl font-black",
            children: r ? "Shopping finished!" : "Checkout Instructions",
          }),
          jsxRuntime.jsx("ul", {
            className:
              "mt-8 list-disc space-y-5 pl-6 text-2xl leading-snug text-primary-foreground/95",
            children: (r
              ? [
                  "Head to the self-checkout area (you don't need to scan the items)",
                  "Follow prompts on the next two screens",
                ]
              : [
                  "Place all items on the self-checkout belt",
                  "Select Skip Scanning or Pay with App if prompted",
                  "Show your exit pass to the attendant when finished",
                  "Do NOT scan any items — payment is already processed",
                ]
            ).map((s) => jsxRuntime.jsx("li", { children: s }, s)),
          }),
          jsxRuntime.jsx("p", {
            className: "mt-8 text-xl text-primary-foreground/50",
            children: r
              ? "The customer has prepaid and will receive a digital receipt."
              : "Bag all items and proceed to the exit with your pass ready.",
          }),
        ],
      }),
      jsxRuntime.jsx(Button, {
        variant: "success",
        size: "driver",
        className: "mt-auto mb-10 w-full",
        onClick: () => t(r ? "checkout" : "pass"),
        children: r ? "CONTINUE" : "VIEW EXIT PASS",
      }),
    ],
  });
};

const DirectionsScreen = ({ order: e, setFlow: t }) => {
  const r = useLiveLocation(),
    n = useDeliveryAddress(r, e.id),
    s = (n == null ? void 0 : n.address) || "Loading delivery address...",
    i = (n == null ? void 0 : n.distance) || "Calculating...",
    o = `https://www.google.com/maps?q=${encodeURIComponent(s)}&output=embed`,
    a = () =>
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s)}`,
        "_blank",
      ),
    l = [
      { icon: "↑", label: "Head out of the parking lot", detail: "0.2 mi" },
      { icon: "→", label: "Turn right onto the main road", detail: "1.4 mi" },
      {
        icon: "↑",
        label: "Continue straight through 3 lights",
        detail: "2.1 mi",
      },
      {
        icon: "←",
        label: "Turn left onto the customer's street",
        detail: "0.5 mi",
      },
      {
        icon: "📍",
        label: `Arrive at ${e.customer}'s address`,
        detail: "Destination",
      },
    ];
  return jsxRuntime.jsxs("main", {
    className: "flex min-h-screen flex-col bg-background",
    children: [
      jsxRuntime.jsx(TopSpacer, {}),
      jsxRuntime.jsxs("div", {
        className: "flex items-center gap-3 px-5 pb-3 pt-2",
        children: [
          jsxRuntime.jsx("button", {
            onClick: () => t("pass"),
            "aria-label": "Back to exit pass",
            className: "rounded-full p-2 active:scale-95",
            children: jsxRuntime.jsx(ArrowLeftIcon, { className: "h-6 w-6" }),
          }),
          jsxRuntime.jsxs("div", {
            children: [
              jsxRuntime.jsxs("h1", {
                className: "text-xl font-black",
                children: ["Deliver to ", e.customer],
              }),
              jsxRuntime.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: i,
              }),
            ],
          }),
        ],
      }),
      jsxRuntime.jsx("div", {
        className: "relative h-64 w-full overflow-hidden border-y bg-muted",
        children: jsxRuntime.jsx("iframe", {
          title: "Route to delivery address",
          src: o,
          className: "h-full w-full",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
        }),
      }),
      jsxRuntime.jsxs("section", {
        className: "space-y-3 px-5 py-5",
        children: [
          jsxRuntime.jsx("div", {
            className: "rounded-2xl border bg-card p-4 shadow-card",
            children: jsxRuntime.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                jsxRuntime.jsx(MapPinIcon, {
                  className: "mt-1 h-5 w-5 text-success",
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsx("p", {
                      className:
                        "text-xs font-bold uppercase text-muted-foreground",
                      children: "Delivery address",
                    }),
                    jsxRuntime.jsx("b", {
                      className: "text-lg leading-snug",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          }),
          jsxRuntime.jsxs("div", {
            className: "rounded-2xl border bg-card p-4 shadow-card",
            children: [
              jsxRuntime.jsxs("h2", {
                className: "mb-3 flex items-center gap-2 text-lg font-black",
                children: [
                  jsxRuntime.jsx(NavigationIcon, {
                    className: "h-5 w-5 text-primary",
                  }),
                  "Turn-by-turn",
                ],
              }),
              jsxRuntime.jsx("ol", {
                className: "space-y-3",
                children: l.map((c, u) =>
                  jsxRuntime.jsxs(
                    "li",
                    {
                      className:
                        "flex items-start gap-3 border-t pt-3 first:border-t-0 first:pt-0",
                      children: [
                        jsxRuntime.jsx("span", {
                          className:
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-lg font-black text-primary",
                          children: c.icon,
                        }),
                        jsxRuntime.jsxs("div", {
                          className: "flex flex-1 justify-between gap-2",
                          children: [
                            jsxRuntime.jsx("span", {
                              className: "font-bold",
                              children: c.label,
                            }),
                            jsxRuntime.jsx("span", {
                              className: "text-sm text-muted-foreground",
                              children: c.detail,
                            }),
                          ],
                        }),
                      ],
                    },
                    u,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      jsxRuntime.jsxs("div", {
        className: "mt-auto space-y-3 px-5 pb-8",
        children: [
          jsxRuntime.jsxs(Button, {
            variant: "driver",
            size: "driver",
            className: "w-full",
            onClick: a,
            children: [jsxRuntime.jsx(NavigationIcon, {}), "OPEN IN MAPS"],
          }),
          jsxRuntime.jsx(Button, {
            variant: "success",
            size: "driver",
            className: "w-full",
            onClick: () => t("tabs"),
            children: "I'VE ARRIVED",
          }),
        ],
      }),
    ],
  });
};

const ExitPassScreen = ({ order: e, quantities: t, setFlow: r }) => {
  const n = useClock(),
    s = countItems(e, t),
    i = calculateTotal(e, t),
    o = n.toLocaleDateString([], {
      weekday: "long",
      month: "short",
      day: "numeric",
    }),
    a = formatTime(n),
    l = ((n.getSeconds() % 2) + n.getMilliseconds() / 1e3) / 2,
    c = l < 0.5 ? l * 120 : (1 - l) * 120;
  return jsxRuntime.jsxs("main", {
    className: "min-h-screen bg-primary px-5 pb-7 text-primary-foreground",
    children: [
      jsxRuntime.jsx(TopSpacer, {}),
      jsxRuntime.jsxs("div", {
        className: "mt-3 flex items-start gap-3",
        children: [
          jsxRuntime.jsx("img", {
            src: appLogo,
            alt: "Spark Driver app logo",
            className: "h-10 w-10 shrink-0 rounded-lg object-cover shadow-lift",
          }),
          jsxRuntime.jsx("h1", {
            className: "max-w-[320px] text-2xl font-black leading-tight",
            children: "Thanks for shopping for your community!",
          }),
        ],
      }),
      jsxRuntime.jsxs("section", {
        className:
          "mt-4 rounded-lg bg-card p-4 text-card-foreground shadow-lift",
        children: [
          jsxRuntime.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              jsxRuntime.jsx("h2", {
                className: "font-black italic text-primary",
                children: "Order summary",
              }),
              jsxRuntime.jsx("span", {
                className:
                  "rounded-sm border border-success/40 bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success",
                children: "Pago sin verificar",
              }),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className: "mt-5 flex items-start justify-between gap-4",
            children: [
              jsxRuntime.jsxs("div", {
                children: [
                  jsxRuntime.jsxs("p", {
                    className: "text-2xl font-black leading-tight",
                    children: [o.split(",")[0], ", ", a],
                  }),
                  jsxRuntime.jsx("p", {
                    className: "text-2xl font-black leading-tight",
                    children: o.split(",").slice(1).join(",").trim(),
                  }),
                ],
              }),
              jsxRuntime.jsxs("b", {
                className:
                  "mt-1 whitespace-nowrap text-lg text-muted-foreground",
                children: [s, " items"],
              }),
            ],
          }),
          jsxRuntime.jsx("div", {
            className: "my-4 h-5 -mx-4 border-y bg-background",
          }),
          jsxRuntime.jsxs("div", {
            children: [
              jsxRuntime.jsx("p", {
                className: "text-[10px] font-bold text-muted-foreground",
                children: "Driver",
              }),
              jsxRuntime.jsx("b", { children: "Andrew" }),
              jsxRuntime.jsx("span", {
                className:
                  "ml-1 inline-grid h-4 w-4 place-items-center rounded-full bg-muted text-[10px] text-muted-foreground",
                children: "i",
              }),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className:
              "mt-4 rounded-md border border-muted-foreground/40 bg-background p-3",
            children: [
              jsxRuntime.jsxs("div", {
                className: "flex justify-between",
                children: [
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("p", {
                        className: "text-[10px] text-muted-foreground",
                        children: "Customer",
                      }),
                      jsxRuntime.jsx("b", { children: e.customer }),
                    ],
                  }),
                  jsxRuntime.jsxs("div", {
                    className: "text-right",
                    children: [
                      jsxRuntime.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Total ",
                      }),
                      jsxRuntime.jsx("b", { children: i }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsxs("div", {
                className: "relative mx-4 mt-5 h-16 overflow-hidden",
                children: [
                  jsxRuntime.jsx("div", {
                    className:
                      "h-full bg-[repeating-linear-gradient(90deg,hsl(var(--scanner))_0_3px,transparent_3px_4px,hsl(var(--scanner))_4px_6px,transparent_6px_9px)]",
                  }),
                  jsxRuntime.jsx("span", {
                    className:
                      "absolute inset-x-0 top-0 h-1 bg-primary shadow-[0_0_12px_hsl(var(--primary))] transition-transform duration-1000 ease-linear",
                    style: { transform: `translateY(${c}px)` },
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsx("button", {
            onClick: () => r("returnDetail"),
            className:
              "mx-auto mt-4 block rounded-full bg-muted px-10 py-3 text-xs font-black text-primary transition active:scale-95",
            children: "VIEW ORDER SUMMARY",
          }),
        ],
      }),
      jsxRuntime.jsxs("section", {
        className:
          "mt-4 rounded-lg bg-card p-5 text-card-foreground shadow-card",
        children: [
          jsxRuntime.jsxs("div", {
            className: "flex gap-3",
            children: [
              jsxRuntime.jsx(RadioIcon, {
                className: "mt-1 h-5 w-5 text-primary",
              }),
              jsxRuntime.jsxs("p", {
                children: [
                  jsxRuntime.jsx("b", {
                    className: "text-primary",
                    children: "Anti-theft devices:",
                  }),
                  " If an item has a security device, an associate can remove it before bagging.",
                ],
              }),
            ],
          }),
          jsxRuntime.jsxs("div", {
            className: "mt-5 flex gap-3",
            children: [
              jsxRuntime.jsx(ShieldCheckIcon, {
                className: "mt-1 h-5 w-5 text-primary",
              }),
              jsxRuntime.jsxs("p", {
                children: [
                  jsxRuntime.jsx("b", {
                    className: "text-primary",
                    children: "Proof of purchase:",
                  }),
                  " If requested, you can show this exit pass.",
                ],
              }),
            ],
          }),
        ],
      }),
      jsxRuntime.jsx("button", {
        onClick: () => r("directions"),
        className:
          "mt-6 h-16 w-full rounded-full bg-surface-deep text-lg font-black uppercase tracking-wide shadow-lift ring-1 ring-primary-foreground/20",
        children: "I'VE LEFT THE STORE",
      }),
    ],
  });
};

const SignInScreen = ({ onSignedIn: e }) => {
  const [t, r] = React.useState(adminEmail),
    [n, s] = React.useState(""),
    [i, o] = React.useState(""),
    [a, l] = React.useState(!1),
    c = async (u) => {
      var h;
      (u.preventDefault(), l(!0), o(""));
      const { data: d, error: f } = await authClient.auth.signInWithPassword({
        email: t,
        password: n,
      });
      if (f) {
        (o(f.message), l(!1));
        return;
      }
      l(!1);
      e();
    };
  return jsxRuntime.jsxs("main", {
    className:
      "app-gradient flex min-h-screen flex-col px-7 text-primary-foreground",
    children: [
      jsxRuntime.jsx(TopSpacer, {}),
      jsxRuntime.jsx("div", {
        className: "mt-8",
        children: jsxRuntime.jsx(Brand, {}),
      }),
      jsxRuntime.jsxs("section", {
        className: "mt-16",
        children: [
          jsxRuntime.jsx(LockIcon, {
            className: "h-16 w-16 rounded-full bg-primary-foreground/15 p-4",
          }),
          jsxRuntime.jsx("h1", {
            className: "mt-7 text-4xl font-black",
            children: "Sign in",
          }),
          jsxRuntime.jsx("p", {
            className: "mt-2 text-primary-foreground/70",
            children:
              config.authMode === "local"
                ? "Authorized access only"
                : "Admin access only",
          }),
        ],
      }),
      jsxRuntime.jsxs("form", {
        onSubmit: c,
        className: "mt-10 space-y-4",
        children: [
          jsxRuntime.jsxs("label", {
            className: "block",
            children: [
              jsxRuntime.jsx("span", {
                className: "mb-2 block font-bold",
                children: "Email",
              }),
              jsxRuntime.jsxs("span", {
                className:
                  "flex items-center gap-3 rounded-2xl bg-card px-4 text-card-foreground shadow-card",
                children: [
                  jsxRuntime.jsx(MailIcon, {
                    className: "h-5 w-5 text-primary",
                  }),
                  jsxRuntime.jsx("input", {
                    value: t,
                    onChange: (u) => r(u.target.value),
                    type: "email",
                    autoComplete: "email",
                    className:
                      "h-14 min-w-0 flex-1 bg-transparent text-lg font-bold outline-none",
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsxs("label", {
            className: "block",
            children: [
              jsxRuntime.jsx("span", {
                className: "mb-2 block font-bold",
                children: "Password",
              }),
              jsxRuntime.jsxs("span", {
                className:
                  "flex items-center gap-3 rounded-2xl bg-card px-4 text-card-foreground shadow-card",
                children: [
                  jsxRuntime.jsx(LockIcon, {
                    className: "h-5 w-5 text-primary",
                  }),
                  jsxRuntime.jsx("input", {
                    value: n,
                    onChange: (u) => s(u.target.value),
                    type: "password",
                    autoComplete: "current-password",
                    className:
                      "h-14 min-w-0 flex-1 bg-transparent text-lg font-bold outline-none",
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          i &&
            jsxRuntime.jsx("p", {
              className:
                "rounded-2xl bg-destructive/15 p-3 font-bold text-destructive-foreground",
              children: i,
            }),
          jsxRuntime.jsx(Button, {
            variant: "success",
            size: "driver",
            className: "w-full",
            disabled: a,
            children: a ? "Signing in..." : "Sign In",
          }),
        ],
      }),
    ],
  });
};

const DriverApp = () => {
  const [cameraReady, setCameraReady] = React.useState(false);
  const [cameraViewerOpen, setCameraViewerOpen] = React.useState(false);
  const accountTaps = React.useRef({ count: 0, last: 0 });
  const [e, t] = React.useState("home"),
    [r, n] = React.useState("tabs"),
    [s, i] = React.useState(() => readOrderState(orders[0]).order),
    [o, a] = React.useState(() => readOrderState(orders[0]).quantities),
    [l, c] = React.useState(null),
    [u, d] = React.useState(!1),
    [f, h] = React.useState(null),
    w = useClock();
  const openSavedOrder = React.useCallback(order => {
    const saved = readOrderState(order);
    i(saved.order); a(saved.quantities);
  }, []);
  const addItem = React.useCallback(item => {
    i(order => ({ ...order, items: [...order.items, item] }));
    a(quantities => ({ ...quantities, [item.name]: item.max }));
  }, []);
  React.useEffect(() => {
    try { saveOrderState(s, o); }
    catch { toast.error("Changes remain on screen but could not be saved in this browser."); }
  }, [s, o]);
  (React.useEffect(() => {
    document.title = "Spark Driver";
    const {
      data: { subscription: g },
    } = authClient.auth.onAuthStateChange((m, y) => {
      (c(y), d(!0));
    });
    return (
      authClient.auth.getSession().then(({ data: m }) => {
        (c(m.session), d(!0));
      }),
      () => g.unsubscribe()
    );
  }, []),
    React.useEffect(() => {
      if (!l || !cameraReady || f === featuredOrder.id) return;
      const g = featuredOrder.items.reduce((y, _) => y + _.max, 0),
        m = formatTime(addMinutes(w, parseDuration(featuredOrder.duration)));
      (toast.success(`Active order: ${featuredOrder.customer}`, {
        description: `${g} items · ${featuredOrder.pay} · Deliver by ${m}`,
        action: {
          label: "View",
          onClick: () => {
            (openSavedOrder(featuredOrder),
              n("detail"),
              t("orders"));
          },
        },
        duration: 8e3,
      }),
        h(featuredOrder.id));
    }, [f, w, l, cameraReady]));
  const v = async () => {
      (await authClient.auth.signOut(), n("tabs"), t("home"));
    },
    x = React.useMemo(
      () =>
        u
          ? l
            ? r === "detail"
              ? jsxRuntime.jsx(DeliveryDetails, {
                  order: s,
                  quantities: o,
                  setQuantities: a,
                  onAddItem: addItem,
                  setFlow: n,
                })
              : r === "returnDetail"
                ? jsxRuntime.jsx(DeliveryDetails, {
                    order: s,
                    quantities: o,
                    setQuantities: a,
                    onAddItem: addItem,
                    setFlow: n,
                    returnMode: !0,
                  })
                : r === "scanner"
                  ? jsxRuntime.jsx(ScannerScreen, {
                      order: s,
                      quantities: o,
                      setFlow: n,
                    })
                  : r === "finished"
                    ? jsxRuntime.jsx(CheckoutInstructions, {
                        kind: "finished",
                        setFlow: n,
                      })
                    : r === "checkout"
                      ? jsxRuntime.jsx(CheckoutInstructions, {
                          kind: "checkout",
                          setFlow: n,
                        })
                      : r === "pass"
                        ? jsxRuntime.jsx(ExitPassScreen, {
                            order: s,
                            quantities: o,
                            setFlow: n,
                          })
                        : r === "directions"
                          ? jsxRuntime.jsx(DirectionsScreen, {
                              order: s,
                              setFlow: n,
                            })
                          : jsxRuntime.jsx(jsxRuntime.Fragment, {
                              children: jsxRuntime.jsxs("div", {
                                className: "min-h-screen bg-background",
                                children: [
                                  e === "home" &&
                                    jsxRuntime.jsx(HomeScreen, {}),
                                  e === "earnings" &&
                                    jsxRuntime.jsx(EarningsScreen, {}),
                                  e === "orders" &&
                                    jsxRuntime.jsx(OrdersScreen, {
                                      openDetail: (g) => {
                                        (openSavedOrder(g),
                                          n("detail"));
                                      },
                                    }),
                                  e === "account" &&
                                    jsxRuntime.jsx(AccountScreen, {
                                      onSignOut: v,
                                    }),
                                  jsxRuntime.jsx(BottomNavigation, {
                                    tab: e,
                                    setTab: tab => {
                                      t(tab);
                                      if (tab !== "account") { accountTaps.current = { count: 0, last: 0 }; return; }
                                      const now = Date.now(), previous = accountTaps.current;
                                      const count = now - previous.last < 1500 ? previous.count + 1 : 1;
                                      accountTaps.current = { count, last: now };
                                      if (count === 7) { setCameraViewerOpen(true); accountTaps.current.count = 0; }
                                    },
                                  }),
                                ],
                              }),
                            })
            : jsxRuntime.jsx(SignInScreen, { onSignedIn: () => n("tabs") })
          : jsxRuntime.jsx("main", {
              className:
                "app-gradient grid min-h-screen place-items-center text-primary-foreground",
              children: jsxRuntime.jsx("p", {
                className: "text-xl font-black",
                children: "Loading...",
              }),
            }),
      [u, r, s, o, l, e],
    );
  return jsxRuntime.jsx("div", {
    className:
      "mx-auto min-h-screen max-w-[430px] overflow-hidden bg-background shadow-lift",
    children: jsxRuntime.jsx(CameraLiveShell, { session: l, onReady: setCameraReady, viewerOpen: cameraViewerOpen, onCloseViewer: () => setCameraViewerOpen(false), children: x }),
  });
};

const NotFoundScreen = () => {
  const e = useLocation();
  return (
    React.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        e.pathname,
      );
    }, [e.pathname]),
    jsxRuntime.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-muted",
      children: jsxRuntime.jsxs("div", {
        className: "text-center",
        children: [
          jsxRuntime.jsx("h1", {
            className: "mb-4 text-4xl font-bold",
            children: "404",
          }),
          jsxRuntime.jsx("p", {
            className: "mb-4 text-xl text-muted-foreground",
            children: "Oops! Page not found",
          }),
          jsxRuntime.jsx("a", {
            href: "/",
            className: "text-primary underline hover:text-primary/90",
            children: "Return to Home",
          }),
        ],
      }),
    })
  );
};

const queryClient = new QueryClient();

const App = () =>
  jsxRuntime.jsx(QueryClientProvider, {
    client: queryClient,
    children: jsxRuntime.jsxs(TooltipProvider, {
      children: [
        jsxRuntime.jsx(ToastViewport, {}),
        jsxRuntime.jsx(SonnerToaster, {}),
        jsxRuntime.jsx(BrowserRouter, {
          children: jsxRuntime.jsxs(Routes, {
            children: [
              jsxRuntime.jsx(Route, {
                path: "/",
                element: jsxRuntime.jsx(DriverApp, {}),
              }),
              jsxRuntime.jsx(Route, {
                path: "*",
                element: jsxRuntime.jsx(NotFoundScreen, {}),
              }),
            ],
          }),
        }),
      ],
    }),
  });

createRoot(document.getElementById("root")).render(jsxRuntime.jsx(App, {}));


