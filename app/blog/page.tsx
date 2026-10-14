import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Ashley Sawicke",
  description: "Ashley Sawicke's notes on software, ethics, global priorities, film, and the curious world."
};

export default function BlogPage() {
  return <>
    <header className="site-nav">
      <div className="nav-shell wrap">
        <Link href="/" className="wordmark" aria-label="Ashley Sawicke homepage">ashley<span className="brand-dot">.me</span><span className="tiny-bug" aria-hidden="true">✳</span></Link>
        <nav className="nav-links" aria-label="Blog navigation">
          <Link href="/#about">ABOUT</Link>
          <Link href="/#projects">PROJECTS</Link>
          <Link href="/#contact">CONTACT</Link>
        </nav>
        <Link className="inline-link" href="/" style={{marginLeft:"auto",whiteSpace:"nowrap"}}>← BACK HOME</Link>
      </div>
    </header>
    <main className="wrap" style={{minHeight:"75vh",paddingTop:100,paddingBottom:120}}>
      <p className="date-accent">// WRITING / ISSUE 00</p>
      <h1 style={{fontSize:"clamp(48px,7vw,91px)",lineHeight:1.08,letterSpacing:"-.07em",fontWeight:800,margin:"18px 0 24px"}}>Notes from<br/><span style={{color:"var(--accent)"}}>the margins.</span></h1>
      <p style={{maxWidth:610,fontSize:18,color:"var(--muted)",lineHeight:1.8}}>A home for my questions about software, philosophy, applied ethics, global priorities, astronomy, film, and the rest of the wonderfully complicated world.</p>
      <div className="outline-card" style={{maxWidth:690,padding:30,marginTop:50}}>
        <p className="date-accent">✳ &nbsp; THE FIRST POST IS ON ITS WAY</p>
        <h2 style={{fontSize:25,fontWeight:750,margin:"8px 0 13px"}}>A blank page. Lots of ideas.</h2>
        <p style={{color:"var(--muted)",fontSize:15}}>This is a placeholder for future writing. I haven't published an article yet, but there's plenty I want to explore.</p>
        <Link href="/#projects" className="inline-link" style={{marginTop:20}}>In the meantime, see what I've built ↗</Link>
      </div>
    </main>
    <footer className="footer" style={{marginTop:0}}><div className="wrap footer-bottom" style={{marginTop:0}}><span>© Ashley Sawicke</span><Link href="/">Back to portfolio ↑</Link></div></footer>
  </>;
}
