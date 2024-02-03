import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: [
    '/',
    '/games/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
  ],
  ignoredRoutes: ['/games/:id', '/api/webhook/clerk', '/api/webhook/stripe'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
