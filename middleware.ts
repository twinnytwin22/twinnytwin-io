import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // let cookie = req.cookies.getAll();
  //console.log(cookie)
  const { pathname } = req.nextUrl;
  const res = NextResponse.redirect(new URL("/", req.url));
  // const nonce = uuid();

  // const requestOrigin = req.headers.get("origin");
  // const allowedOrigins = [
  //   "https://twinnytwin.io",
  //   "http://localhost:3000",
  //   "https://twinnytwin-io.vercel.app",
  // ];
  // // Check if the request's origin is in the allowed origins list
  // if (requestOrigin) {
  //   // If the origin is allowed, set the appropriate CORS headers
  //   res.headers.set("Access-Control-Allow-Origin", "*");
  //   res.headers.set(
  //     "Access-Control-Allow-Methods",
  //     "GET, POST, PUT, DELETE, OPTIONS",
  //   );
  //   res.headers.set(
  //     "Access-Control-Allow-Headers",
  //     "X-Requested-With, Content-Type, Authorization",
  //   );
  // }
  //console.log(nonce);
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  //console.log(session);

  // const cspHeaderValue =
  //   `default-src 'self'; ` +
  //   `script-src 'self' 'nonce-${nonce}' cdnjs.cloudflare.com https://checkout.stripe.com; ` +
  //   `style-src 'self' 'nonce-${nonce}' cdnjs.cloudflare.com; ` +
  // //   `img-src 'self' data: https://*.stripe.com; ` +
  //   `font-src 'self' cdnjs.cloudflare.com; ` +
  //   `connect-src 'self' https://checkout.stripe.com; ` +
  //   `frame-src 'self' https://checkout.stripe.com; ` +
  //   `object-src 'none'`;

  // const message = {
  //   country: req.geo?.country,
  //   city: req.geo?.city,
  //   region: req.geo?.region,
  //   url: req.url,
  //   ip: req.headers.get("x-real-ip"),
  //   mobile: req.headers.get("sec-ch-ua-mobile"),
  //   platform: req.headers.get("sec-ch-ua-platform"),
  //   useragent: req.headers.get("user-agent"),
  // };

  //
  // res.cookies.set("Set-Cookie", "SameSite=None; Secure");

  // const topic = "words";

  if (pathname === "/") {
    // await p.produce(topic, JSON.stringify(message));
    return NextResponse.next();
  }

  // if (pathname.startsWith("/login") && session) {
  //   return NextResponse.redirect(new URL("/portal", req.url));
  // }

  // if (pathname.startsWith("/portal") && !session) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // if (session) {
  //   return session;
  // } else {
  //   return res;
  //  }
}

//export const config = {
//  matcher: ["/portal/:path*"],
//};
