import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100%;
`;
const RedLight = styled.div`
  position: absolute;
  width: 311px;
  height: 311px;
  left: -102px;
  top: 251px;
  border-radius: 50px;
  background: #961A1A;
  opacity: 0.5;
  filter: blur(196px);
  ${mobile({
  width: '211px',
  height: '210px',
  left: '-55px',
  top: '241px',
})}
`;
const PurpleBall = styled.div`
display: none;
${mobile({


  background: 'radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)',
  position: 'absolute',
  width: '40px',
  height: '40px',
  left: '296px',
  top: '236px',
  boxShadow: '3px 6px 27px -10px rgba(177, 118, 217, 0.25)',
  filter: ' blur(5px)',
  backdropFilter: 'blur(2px)',
})}
  
  `;
const RedBall = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 776px;
  top: 547px;
  border-radius: 50px;
  background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
  filter: blur(2.5px);
  backdrop-filter: blur(2px);
  ${mobile({
  width: '43px',
  height: '43px',
  left: '24px',
  top: '507px',
  zIndex: '1'
})}
`;
const PurpleLight = styled.div`
  background: rgba(131, 58, 180, 1);
  position: absolute;
  width: 259px;
  height: 259px;
  left: 258px;
  top: 107px;
  background: #833AB4;
  opacity: 0.5;
  filter: blur(196px);
  display: none;
  ${mobile({
  display: 'block',
  width: '100px',
})}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70vh;
  align-items: end;
  position: relative;
${mobile({
  flexDirection: 'column',
  alignItems: 'start',
  height: '445px',
  paddingLeft: '15px',
  justifyContent: 'space-around',
})}
`;
const Left = styled.div`
  width: 362px;
  height: 100%;
  ${mobile({
  width: '348px',
  height: '56%',
})}
`;
const Top = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
const TopText = styled.h1`
  font-size:48px;
  font-weight: 400;
  line-height: 58px;
  margin: 0;
  padding-top: 26px;
  ${mobile({
  fontSize: '36px'
})}
`;
const ColorfulText = styled.h1`
  margin: 0;
  font-size:48px;
  font-weight: 900;
  background: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%), #E4E5EA;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${mobile({
  fontSize: '36px'
})}
`;
const BottomText = styled.p`
  font-size: 18px; 
  font-family: montserrat;
  width: 270px;
`;
const Right = styled.div`
  width: 324px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: end;
  ${mobile({
  alignItems: 'start',
  gap: 0,
  textAlign: 'start',
  width: '48%',
})}
`;
const Title = styled.div`
  font-size: 18px;
  font-size: 18px;
`;

const Text = styled.div`
  font-size: 16px;
`;
const Box = styled.div`
  display: flex;
  justify-content: end;
  ${mobile({
  justifyContent: 'start'
})}
  `;
const BoxRight = styled.div`
  display: flex;
  flex-direction:column;
  white-space: pre;
  ${mobile({
  alignItems: 'start',
})}
`
const ColorfulTextRight = styled.div`
  background: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%), #E4E5EA;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 18px;
  font-weight: 500;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  height: 180px;
  place-content: end;
  align-content: end;
  gap: 30px;
  flex-flow: wrap;
  width: 330px;
  align-content: space-between;
  ${mobile({
  display: 'none',
})}
`;
const ListItem = styled.li`
  font-size:18px;
`;
const TextItem = styled.div`
  font-size: 16px;
  width: 150px;
  font-family: Montserrat;
`;
const ListMobile = styled.ul`
display: none;
${mobile({
  listStyle: 'none',
  fontSize: '13px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '112px',
  height: '6vh',
  flexWrap: 'wrap',
  listStyle: 'url(https://i.ibb.co/Jsm57Kq/marker-for-line-list-Mobile.png)',

  /* list-style-position: outside; */
  alignItems: 'start',
  paddingLeft: '16px',
})}
  
`;
const ListItemMobile = styled.li`
  text-transform: uppercase;
  list-style-type: none;
  
`;

const Button = styled.button`
  padding: 21px 50px;
  font-size: 16px;
  background-color: #4077F3;
  border: none;
  color: #E4E5EA;
  font-weight: 500;
  ${mobile({
  display: 'none',
})}
`;

const Services = () => {
  return (

    <Container>
      <RedLight />
      <Wrapper>
        <Left>
          <PurpleLight />
          <Top>
            <TopText>Зарабатывайте больше</TopText>
            <ColorfulText>с WELBEX</ColorfulText>
          </Top>
          <BottomText>
            Развиваем и контролируем продажи за вас
          </BottomText>
        </Left>

        <Right>
          <BoxRight>
            <Box>
              <Title>Вместе с </Title>    <ColorfulTextRight >
                БЕСПЛАТНОЙ </ColorfulTextRight> </Box>

            <Box>
              <ColorfulTextRight >
                КОНСУЛЬТАЦИЕЙ</ColorfulTextRight>
              <Text> мы дарим:
              </Text>
            </Box>
          </BoxRight>
          <List>
            <ListItem>
              ВИДЖЕТЫ
              <TextItem>30 готовых решений</TextItem>
            </ListItem>
            <ListItem>
              DASHBOARD
              <TextItem>
                с показателями
                вашего бизнеса
              </TextItem>
            </ListItem>
            <ListItem>
              SKYPE АУДИТ
              <TextItem>
                отдела продаж и CRM системы
              </TextItem>
            </ListItem>
            <ListItem>
              35 ДНЕЙ
              <TextItem>
                использования CRM
              </TextItem>
            </ListItem>
          </List>
          <PurpleBall />

          {/* mobile */}
          <ListMobile>
            <ListItemMobile>Skype аудит</ListItemMobile>
            <ListItemMobile>Dashboard</ListItemMobile>
            <ListItemMobile>30 виджетов</ListItemMobile>
            <ListItemMobile>Месяц аmoCRM</ListItemMobile>


          </ListMobile>

          <Button>Получить консультацию</Button>
        </Right>
      </Wrapper>
      <RedBall />
    </Container>

  )
}

export default Services