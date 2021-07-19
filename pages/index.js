// import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


function ProfileSideBar({props}) {
  console.log(props)
  return (
    <Box style={{height: '560px'}}>
      <img style={{borderRadius:"8px"}} src={`https://github.com/${props}.png`} alt="img-perfil"></img>
    </Box>  
  )
}

// aqui no home vamos a carregar nossos components
export default function Home() {

  const userAleatorio = 'Michael-saeek'

  const pessoasFavoritas = [
  'juunegreiros', 
  'omariosouto', 
  'peas', 
  'rafaballerini', 
  'marcobrunodev', 
  'felipefialho']


  return (
    <>
      <AlurakutMenu />

      <MainGrid>

        <div className="profileArea" style={{gridArea: "profile-area"}}>
          <ProfileSideBar props={userAleatorio}/>
        </div>
      
        <div style={{gridArea: "welcome-area"}}>
          <Box style={{height: '178px', marginBottom: '10px'}}>
              <h1>Bem-vindo (a) </h1>

              <OrkutNostalgicIconSet />
          </Box>

          <Box style={{height: '178px'}}>
              O que deseja fazer?
          </Box>
        </div>

        <div className="ProfileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Meus Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
                {pessoasFavoritas.map((item) => {
                  return (
                    <li key={item}>
                      <a href={`./users/${item}`} >
                        <img src={`https://github.com/${item}.png`} alt={item}></img>
                        <span>{item}</span>
                    </a>
                    </li>
                  )
                })}
            </ul>
            
          </ProfileRelationsBoxWrapper>

          <Box>

             <h1 className="smallTitle">Comunidade </h1>

          </Box>
        </div>
    
      </MainGrid>
    </>
  )
}
