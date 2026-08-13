export type Project = {
  slug: string;
  title: string;
  teaser: string;
  problem: string;
  decision: string;
  howItWorks: string;
  tradeoff: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "auth-corez",
    title: "AUTH COREZ",
    teaser:
      "An auth service where a stolen token gets caught the moment it's reused.",
    problem:
      "Two of my earlier projects had real, exploitable holes: a JWT that couldn't be revoked once issued, and a session token sitting in localStorage where any XSS could just take it. Neither was a deliberate choice — I just hadn't thought about what happens after a token leaks.",
    decision:
      "Split sessions into two tokens with different jobs: a short-lived JWT for speed, and a database-backed refresh token that rotates on every use and treats reuse as proof of theft.",
    howItWorks:
      "Login issues a 15-minute JWT access token, kept in memory client-side only, plus a 7-day refresh token sent as an HttpOnly cookie no script can read. Every /refresh call burns the token it was given and hands back a fresh one — so if a stolen token and the real device ever both try to use it, whichever loses the race hits a token that's already dead, which should never happen in normal use. That collision is treated as a confirmed breach: every session on the account gets killed and a breach_suspected event gets logged, no exceptions. Google sign-in doesn't get its own separate system — it funnels into the same issueSession() call password login uses, so there's one session model, not two to maintain. Admin routes re-check the caller's role against the database on every request instead of trusting whatever the token says, so a demoted admin loses access immediately, not whenever their token happens to expire.",
    tradeoff:
      "No MFA, no OAuth providers beyond Google, no breached-password checking against HIBP. This was a fix for two specific vulnerabilities, not an attempt to build a full identity platform.",
    stack: [
      "Node.js",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Google OAuth",
    ],
  },
  {
    slug: "ledgerz",
    title: "LedgerZ",
    teaser:
      "A ledger where the person who submits an entry can never approve it.",
    problem:
      "A small finance team needs one shared, trustworthy record of money in and out. A normal CRUD app lets whoever submits an entry also approve it, and open sign-up means anyone could get write access to the books.",
    decision:
      "Enforce maker-checker at the role level — the person who submits an entry is never the person who can approve it — and replace open registration with a reviewed access request.",
    howItWorks:
      "An entry moves submitted → approved or submitted → rejected, and only the maker who owns a rejected entry can resubmit it, which puts it back at submitted. Try to decide an entry that's already been decided and the API returns a 409 — there's no code path that lets that slide. requireRole blocks the wrong role at the router itself, not somewhere buried in a controller, so a maker's token physically can't reach an approval endpoint. There's no public /register — anyone can file an access request with a name, email, and requested role, but the account (and its password) only gets created the moment a manager approves it. Admins can flag any entry with an objection without needing edit rights of their own, and every meaningful action — approvals, objections, access-request decisions — writes to an append-only audit log inside the same transaction as the change, so a failed audit write undoes the change too.",
    tradeoff:
      "No refresh-token rotation — a single 1-day JWT is the whole session model here — plus no OAuth, no multi-currency, no file attachments on entries. The point of this build was the approval workflow, not a full accounting suite, so I stopped there on purpose.",
    stack: ["Node.js", "Express 5", "Prisma", "PostgreSQL", "JWT", "Zod"],
  },
  {
    slug: "blogz",
    title: "BLOGZ",
    teaser:
      "A public blog admin you can click through — safely — without being me.",
    problem:
      "I wanted to show a real admin dashboard publicly — rich text editing, post management, a message inbox — without either exposing my actual database to strangers or hiding it behind a login nobody outside me could ever get past.",
    decision:
      "Gate by identity, not by feature: one hardcoded email gets full write access, and every other signed-in Google account lands in a Demo Mode that can look at everything but change nothing.",
    howItWorks:
      "Firebase Auth handles the Google sign-in, and on login the email gets checked against NEXT_PUBLIC_ADMIN_EMAIL. A match unlocks real writes to posts and messages. Anyone else authenticated still gets the full admin experience visually — the TipTap editor opens, forms fill in, buttons respond — but save, edit, and delete are disabled, and message contents stay hidden. Try to actually commit a change in Demo Mode and a modal explains why it's locked instead of the request just silently failing. Posts and contact messages both live in Firestore, slugs generate themselves from the title, and the public /posts grid filters by category.",
    tradeoff:
      "No real roles, no multi-author accounts — it's a binary admin-or-demo split. That's deliberate: this is a one-author blog, not a CMS built for a team, so a full permissions system would just be overhead for a problem I don't have.",
    stack: ["Next.js", "Firebase Auth", "Firestore", "TipTap"],
  },
];

export const stackGroups = [
  { label: "Languages", items: ["TypeScript"] },
  {
    label: "Frontend",
    items: [
      "Next.js 16",
      "Tailwind CSS",
      "shadcn/ui",
      "React Context",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Recharts",
      "lucide-react",
      "TipTap",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express 5",
      "Prisma",
      "Zod",
      "Nodemailer",
      "jsonwebtoken",
      "bcrypt",
      "google-auth-library",
      "helmet",
      "morgan",
    ],
  },
  { label: "Database", items: ["PostgreSQL (Neon)", "Firebase Firestore"] },
  {
    label: "Auth",
    items: ["JWT (access/refresh rotation)", "Google OAuth", "Firebase Auth"],
  },
  { label: "Hosting / DevOps", items: ["Vercel", "Netlify", "Docker"] },
];
