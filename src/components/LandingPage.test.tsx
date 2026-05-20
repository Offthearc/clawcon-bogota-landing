import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  it('renders the ClawCon Bogotá title', () => {
    render(<LandingPage />)
    expect(screen.getByText('ClawCon Bogotá')).toBeInTheDocument()
  })

  it('renders a QR code section', () => {
    render(<LandingPage />)
    expect(screen.getByLabelText('LinkedIn QR Code')).toBeInTheDocument()
  })

  it('renders the LinkedIn URL link', () => {
    render(<LandingPage />)
    const links = screen.getAllByRole('link')
    const linkedinLinks = links.filter((l) =>
      l.getAttribute('href')?.includes('linkedin.com/in/davidc-parrar'),
    )
    expect(linkedinLinks.length).toBeGreaterThan(0)
  })

  it('LinkedIn links open in a new tab with safe rel', () => {
    render(<LandingPage />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders the scan label', () => {
    render(<LandingPage />)
    expect(screen.getByText('Scan to connect on LinkedIn')).toBeInTheDocument()
  })
})
