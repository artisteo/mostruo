import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import fakeTimeout from "./utils/fake-timeout";

export const config = {
  matcher: ["/", "/stores/:path*"],
};

export default async function middleware(
  req: NextRequest
): Promise<NextResponse> {
  const url = req.nextUrl;

  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  //   const hostname = req.headers.get("host");
  //   console.log("🔥 ~ middleware headers hostname:", hostname);

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  //   const currentHost =
  //     process.env.NODE_ENV === "production" &&
  //     hostname.replace(`.${process.env.ROOT_DOMAIN}`, "");
  //   const currentHost = "camisetas";
  //   console.log("🔥 ~ currentHost:", currentHost);
  //   const data = await getHostnameDataOrDefault(currentHost);
  await fakeTimeout(1000);
  const data = {
    subdomain: "cosmetica",
  };
  //   console.log("🔥 ~ url.pathname:", url.pathname)

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents.
  if (url.pathname.startsWith(`/stores`)) {
    url.pathname = `/404`;
  } else {
    // console.log("URL 2", req.nextUrl.href);
    // rewrite to the current subdomain under the pages/sites folder
    url.pathname = `/stores/${data.subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
