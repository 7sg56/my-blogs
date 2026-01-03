---
title: 'React Server Components: A Security Perspective'
description: 'Analyzing the attack surface of RSC and how to secure your Next.js apps.'
pubDate: '2024-03-20'
heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
category: 'Engineering'
tags: ['react', 'nextjs', 'security']
---

# Server-Side Rendering & Security

React Server Components (RSC) shift the paradigm by running components exclusively on the server. While this offers performance benefits, it introduces new security considerations.

## The Serialization Boundary

Data passed from Server Components to Client Components must be serializable. This boundary is critical. Sensitive data meant for the server (like API keys or database connection strings) must never accidentally leak into props passed to client components.

```tsx
// BAD: Leaking secrets
<ClientButton apiKey={process.env.SECRET_API_KEY} />
```

## "Use Server" Directives

Understanding when and where to use the `'use server'` directive is crucial for preventing RCE (Remote Code Execution) vulnerabilities when exposing server actions.
