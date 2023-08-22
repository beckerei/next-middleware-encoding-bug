import { NextResponse } from 'next/server';
import type { NextMiddleware } from 'next/server';

export const middleware: NextMiddleware = (request, event) => {
  console.log('requestHeader', request.headers);

  return NextResponse.next({ request }); // ignores accept-encoding header

  return NextResponse.next(); // respects accept-encoding header
};
