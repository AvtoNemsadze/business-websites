import featuredData from '../content/featuredData'
import styled from 'styled-components';


function Featured() {
  return (
  <Container>
      {featuredData.map((card)=> {
          const {id, img, title, text} = card;
          return(
              <BoxItems key={id}>
                      <ImageBox src={img} alt='img' />
                      <TitleBox>{title}</TitleBox>
                      <TextBox>{text}</TextBox>
              </BoxItems>
          )
      })}
  </Container>
  )
}

export default Featured;

const Container = styled.div`
    margin-top: 90px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;


    @media (max-width: 820px) {
        flex-wrap: wrap;
        margin: 40px 26px;
        gap: 30px;
    }
`

const BoxItems = styled.div``

const ImageBox = styled.img`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
`

const TitleBox = styled.h3`
    color: #026a7c;
    margin-top: 5px;
`

const TextBox = styled.p`
    line-height: 1.5rem;
    letter-spacing: 1.4px;
    color:rgb(204, 204, 207);
    font-size: 16px;
    margin: 40px 16px;
    margin-top: 4px; 
`