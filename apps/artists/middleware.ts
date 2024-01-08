import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/stores/:path*"],
};

export default function middleware(req: NextRequest): NextResponse {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  const defaultStoreDomain = "camisetas";
  let subdomain = defaultStoreDomain;
  if (process.env.NODE_ENV === "production") {
    if (
      hostname === "https://artists-git-main-artisteos-projects.vercel.app/"
    ) {
      subdomain = "cosmetica";
    }
  }

  if (url.pathname.startsWith(`/stores`)) {
    url.pathname = `/404`;
  } else {
    url.pathname = `/stores/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
