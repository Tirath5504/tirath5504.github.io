import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientInteractivity from "@/components/ClientInteractivity";
import "../public/assets/css/main.css"; // Ensure CSS matches 100%

export const metadata: Metadata = {
  title: "Tirath Bhathawala | AI Researcher & Developer",
  description:
    "AI/MLE Intern Candidate, Incoming NYU MSCS, Agentic AI Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TB21XZ78MT"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TB21XZ78MT');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ClientInteractivity />
      </body>
    </html>
  );
}
