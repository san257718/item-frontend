// import { NextRequest, NextResponse } from "next/server";

// // 你可以自訂要保護的路徑
// const protectedRoutes = ["/"];

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;

//   const { pathname } = request.nextUrl;

//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   if (isProtected && !token) {
//     const loginUrl = new URL("/Login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// // 限定 middleware 運行的路徑
// export const config = {
//   matcher: ["/dashboard/:path*", "/products/:path*", "/admin/:path*"],
// };
