import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'


export default function SocialIcons() {
  return (
    <SocialIconsBox>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter style={{color:'#4d4dff'}} target='_blank' rel='noreferrer' />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
          <FaLinkedin style={{color:'#3fabcc'}}/>
        </a>
      </li>
      <li>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <FaFacebook style={{color:'#3333ff'}}/>
        </a>
      </li>
      <li>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
          <FaInstagram style={{color:'#ac04bb'}}/>
        </a>
      </li>
    </SocialIconsBox>
  )
}

const SocialIconsBox = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;

    @media (max-width: 850px) {
        justify-content: center;
        padding-bottom: 20px;
    }

    li {
        list-style: none;
    }

 a {
  border: 1px solid #171e36;
  font-size: 23px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 50px;
  width: 50px;
  text-decoration: none;
}
`
