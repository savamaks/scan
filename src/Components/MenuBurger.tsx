import styled from 'styled-components';
import Navigation from './Navigation';
import LogIn from './LogIn';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #029491;
    color: white;
    padding-top: 80px;
    z-index: 999;
    animation: position .7s ease;
    @keyframes position {
      0%{
        transform: translate(0,-900px);
      }
      100%{
        transform: translate(0,0);

      }
      
    }
`


const MenuBurger = () => {

 return (
   <Container>
        <Navigation/>
        <LogIn/>
   </Container>
 )
}

export default MenuBurger;