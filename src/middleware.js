// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const method = request.method;
  const contentType = request.headers.get('Content-Type');

  // 1. Security headers for ALL responses
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Content-Security-Policy', "default-src 'self'");

  // 2. Only apply to API routes
  if (pathname.startsWith('/api')) {
    // 3. Only check methods that require a body
    const methodsToCheck = ['POST', 'PUT', 'PATCH'];
    
    if (methodsToCheck.includes(method)) {
      // 4. Validate Content-Type
      if (!contentType || !contentType.includes('application/json')) {
        const errorResponse = NextResponse.json(
          { 
            error: 'Invalid Content-Type',
            message: 'Only application/json is accepted for this endpoint'
          },
          { status: 415 }
        );
        
        // Add security headers to error response
        errorResponse.headers.set('X-Content-Type-Options', 'nosniff');
        errorResponse.headers.set('Content-Security-Policy', "default-src 'self'");
        
        return errorResponse;
      }
    }
  }

  return response;
}

export const config = {
  matcher: ['/api/:path*']
};