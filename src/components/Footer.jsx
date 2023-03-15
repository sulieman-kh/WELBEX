import styled from "styled-components";
import { Telegram, PhoneInTalk, WhatsApp } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display:flex;
  height:  41vh ;
  flex-direction: column;
  margin-top: 69px;
  ${mobile({
  height: '60vh',
  backgroundColor: '#0e1014',
  alignItems: 'start',
  paddingLeft: '15px',
  height: '575px',
  marginTop: '18px',
  paddingTop: '38px',
  position: 'relative',
  zIndex: 999,
})}
`;
const FooterTop = styled.div`
display: flex;
${mobile({
  flexDirection: 'column',
})}
`;
const Left = styled.div`
  /* background-color: #9b5de5; */
  flex: 1;
`;
const Title = styled.h3`
font-size: 14px;
color: #656566;

${mobile({

  fontSize: '12px'
})}
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: column;
  gap: 10px;
  height: 160px;
  flex-wrap: wrap;
  font-size: 16px;
  column-gap: 52px;
  ${mobile({
  fontSize: '14px',
  height: '52px',
  paddingTop: '12px',
})}
`;
const ListItem = styled.li``;
const Center = styled.div`
  /* background-color: #f15bb5; */
  flex: 1;
  ${mobile({
  paddingTop: '15px'
})}
`;
const ListMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: column;
  gap: 10px;
  height: 160px;
  flex-wrap: wrap;
  font-size: 16px;
  column-gap: 52px;
  ${mobile({
  fontSize: '14px',
  height: '178px',
  width: '112px',
  paddingTop: '12px',
})}
`;

const DisOnListItem = styled.div`
  display: block;
  ${mobile({
  display: 'none',
})}
`;
const DisOFFListItem = styled.div`
  display: none;
  ${mobile({
  display: 'block',
})}
`;



const Right = styled.div`
/* background-color: #fee440; */
  flex: 1;
  text-align: end;
  display:flex;
  flex-direction: column;
  gap: 22px;
  ${mobile({
  textAlign: 'start',
  gap: '12px',
})}
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
  alignItems: 'start',
})}
`;
const Mobile = styled.div`
font-weight: 500;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  ${mobile({
  width: '25%',
  gap: 0,
})}
`;
const SocialIcon = styled.div`

padding: 5px;
${mobile({
  padding: 0,

})}
`;

const Address = styled.div`

  font-size: 14px;

`;
const Legal = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: end;
font-size: 12px;
font-weight: 400;
font-family: montserrat;
/* background-color: dimgray; */
height: 42px;

${mobile({
  position: 'inherit',
  paddingTop: '38px',
})}
`;
const Copyright = styled.p`
  padding-bottom: 5px;  
  position: absolute;
  right:0;
  ${mobile({
  position: 'inherit',
  margin: 0,
})}
`;
const Privacy = styled.a`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  position: absolute;
  right:0;
  ${mobile({
  position: 'inherit',
})}
`;
const Footer = () => {
  return (

    <Container>
      <FooterTop>
        <Left>
          <Title>О компании</Title>
          <List>
            <ListItem>Партнёрская программа</ListItem>
            <ListItem>Вакансии</ListItem>
          </List>
        </Left>
        <Center>
          <Title>Меню</Title>
          <ListMenu>
            <ListItem>Расчёт стоимости</ListItem>
            <ListItem>Услуги</ListItem>
            <ListItem>Виджеты</ListItem>
            <ListItem>Интеграции</ListItem>
            <ListItem>Наши клиенты</ListItem>

            {/* Mobile */}
            <DisOFFListItem>
              <ListItem>Благодарность клиентов</ListItem>
            </DisOFFListItem>

            <ListItem>Кейсы</ListItem>
            <DisOnListItem>
              <ListItem>Благодарственные письма</ListItem>
            </DisOnListItem>

            <ListItem>Сертификаты</ListItem>
            <ListItem>Блог на Youtube</ListItem>
            <ListItem>Вопрос / Ответ</ListItem>
          </ListMenu>
        </Center>
        <Right>
          <Title>Контакты</Title>

          <ContactItem>
            <Mobile>
              +7 555 555-55-55
            </Mobile>

            <SocialContainer>
              <SocialIcon>
                <Telegram />
              </SocialIcon>
              <SocialIcon>
                <PhoneInTalk />
              </SocialIcon>
              <SocialIcon>
                <WhatsApp />
              </SocialIcon>
            </SocialContainer>
            <Address>
              Москва, Путевой проезд 3с1, к 902
            </Address>
          </ContactItem>
        </Right>
      </FooterTop>
      <Legal>
        <Copyright>©WELBEX 2022. Все права защищены.</Copyright>
        <Privacy>Политика конфиденциальности</Privacy>
      </Legal>
    </Container>

  )
}

export default Footer