import { QRCodeSVG } from 'qrcode.react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/davidc-parrar'

export default function LandingPage() {
  return (
    <main className="landing">
      <header className="landing-header">
        <h1 className="landing-title">ClawCon Bogotá</h1>
        <p className="landing-subtitle">Connect with me on LinkedIn</p>
      </header>

      <section className="qr-section" aria-label="LinkedIn QR Code">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="qr-link"
          aria-label="Open LinkedIn profile"
        >
          <QRCodeSVG
            value={LINKEDIN_URL}
            size={240}
            bgColor="#ffffff"
            fgColor="#0a66c2"
            level="H"
            className="qr-code"
          />
        </a>
        <p className="qr-label">Scan to connect on LinkedIn</p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-url"
        >
          linkedin.com/in/davidc-parrar
        </a>
      </section>
    </main>
  )
}
