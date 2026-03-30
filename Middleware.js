import { NextResponse } from "next/server"

export function middleware(req) {
  const isLoggedIn = true // replace with real check

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url))
  }
}