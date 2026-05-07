import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Skip middleware for localhost or if host is missing
  if (!host || host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next();
  }

  // If the host is locksmithbedstuy.com (no www), redirect to www version
  if (host === 'locksmithbedstuy.com') {
    url.hostname = 'www.locksmithbedstuy.com';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Only run on document requests, not assets/api
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
