import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile, siteUrl } from "@/content/site";
const description =
  "Analista de dados e desenvolvedor na SUEP/SEEC-RN. Power BI, SQL, Python e o Portal EPT RN para a Educação Profissional do Rio Grande do Norte.";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  alternates: { canonical: "./" },
  title: `${profile.name} — ${profile.role}`,
  description,
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title: profile.name,
    description,
    siteName: profile.name,
    images: [{ url: "og.png", width: 1200, height: 630, alt: `${profile.name} — ${profile.role}` }],
  },
  twitter: { card: "summary_large_image", title: profile.name, description, images: ["og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

// Aplica o tema antes da primeira pintura (sem piscar). Padrão: escuro.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "GovernmentOrganization", name: profile.orgLong },
  sameAs: [profile.links.github, profile.links.linkedin],
  email: `mailto:${profile.email}`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
