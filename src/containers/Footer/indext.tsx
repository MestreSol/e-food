import { FooterArea, FooterLinks, FooterLogo } from './styled'

const Footer = () => {
  return (
    <FooterArea>
      <FooterLogo>Le-food</FooterLogo>
      <FooterLinks>
        <ul>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
        </ul>
      </FooterLinks>
    </FooterArea>
  )
}

export default Footer
