import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashley Sawicke | Software Engineer & Curious Mind",
  description: "Ashley Sawicke is a University of Michigan computer science student interested in systems, creative software, and the human impact of technology.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ashley Sawicke | Software Engineer & Curious Mind",
    description: "Software, philosophy, projects & the occasional rabbit hole.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('ashley-portfolio-theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}` }} /></head>
    <body>{children}</body>
  </html>;
}
