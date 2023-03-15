import styled from "styled-components"
import { Telegram, PhoneInTalk, WhatsApp } from "@material-ui/icons";
import { mobile } from "../responsive";
const Container = styled.div`
`;
const PurpleLight = styled.div`
  position: absolute;
  width: 259px;
  height: 259px;
  left: 602px;
  top: -154px;
  background: #833AB4;
  opacity: 0.5;
  filter: blur(196px);
  ${mobile({ display: "none" })};
`;
const PurpleBall = styled.div`
  position: absolute;
width: 60px;
height: 60px;
left: 846px;
top: -2px;
border-radius: 50px;
background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
filter: blur(5px);
backdrop-filter: blur(2px);
${mobile({ display: "none" })};
`;
const RedBall = styled.div`
  position: absolute;
width: 83px;
height: 83px;
left: 519px;
top: 83px;
border-radius: 50px;
background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
backdrop-filter: blur(2px);
${mobile({
  display: "none"
})}
`;
const Wrapper = styled.div`
height: 11vh;
padding: 46px 0;
display: flex;
position: relative;
font-weight: 500;
${mobile({
  height: '2vh',
  padding: '32px 0',
  backgroundColor: '#0e1014',
})}
`;
const DisplayMobile = styled.div`
  ${mobile({
  display: 'none',
})}
`;

const Left = styled.div`
  flex: 1;
  ${mobile({
  display: 'none',
})}
`;
const Logo = styled.img`
display: flex;
`;
const Bottom = styled.div`
width: 145px;

/* background-color:red; */
`;
const Text = styled.p`
font-size: 10px;
font-weight: 300;
font-family: montserrat;
line-height	: 12px; 
`;
const Center = styled.div`
flex: 1;
/* text-align: center; */
`;
const List = styled.ul`
  margin:0;
  /* padding:0; */
  display: flex;
  list-style: none;
  gap:30px;
  ${mobile({
  fontSize: '12px',
  textTransform: 'uppercase',
  padding: 0,
  textAlign: 'center',

})}
`;

const ListItem = styled.li`
cursor: pointer;
`;
const Right = styled.div`
flex: 1;
display: flex;
gap: 40px;
padding-left: 70px;
${mobile({
  display: 'none',
})
  }
`;
const Mobile = styled.div`
cursor: pointer;
width: 143px;
`;
const SocialContainer = styled.div`
display: flex;
gap: 20px;
`;
const SocialIcon = styled.div`
cursor: pointer;
`;



const Navbar = () => {
  return (
    <Container>
      <PurpleLight></PurpleLight>
      <RedBall></RedBall>
      <Wrapper>
        <Left>
          <Logo src="https://i.ibb.co/YP3Z3XS/logo.png" />
          <Bottom >
            <Text>
              крупный интегратор CRM в Росcии и ещё 8 странах
            </Text>
          </Bottom>
        </Left>
        <Center>
          <List>
            <ListItem>Услуги</ListItem>
            <ListItem>Виджеты</ListItem>
            <ListItem>Интеграции</ListItem>
            <ListItem>Кейсы</ListItem>
            <DisplayMobile>
              <ListItem>Сертификаты</ListItem>
            </DisplayMobile>
          </List>
        </Center>
        <Right>
          <Mobile>+7 555 555-55-55</Mobile>
          <SocialContainer>
            <SocialIcon><Telegram /></SocialIcon>
            <SocialIcon><PhoneInTalk /></SocialIcon>
            <SocialIcon><WhatsApp /></SocialIcon>
          </SocialContainer>
        </Right>
      </Wrapper>
      <PurpleBall></PurpleBall>
    </Container>
  )
}

export default Navbar