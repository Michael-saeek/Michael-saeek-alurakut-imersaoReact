import styled from 'styled-components'

const MainGrid = styled.main`
width: 100%;
margin-left: auto;
margin-right: auto;
max-width: 500px;
grid-gap: 10px;
padding: 16px;
min-height: 100vh;

.profileArea {
  display: none;
  @media (min-width: 860px) {
    display: block;
  }
}


@media (min-width: 860px) {
  max-width: 1110px;
  display: grid;
  grid-template-areas: 
    "profile-area welcome-area profileRelationsArea";
  grid-template-columns: 160px 1fr 312px;
}
`

export default MainGrid;