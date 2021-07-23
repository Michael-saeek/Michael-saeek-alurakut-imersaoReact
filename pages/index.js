
import MainGrid from '../src/components/MainGrid'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import Box from '../src/components/Box'
import { useState, useEffect } from 'react'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import Input from '../src/components/Inputs/input'



function ProfileSideBar(props) {
  return (
    <Box >
      <img style={{borderRadius:"8px"}} src={`https://github.com/${props.user}.png`} alt="img-perfil"></img>
      <hr/>

      <p>
        <a className="boxLink" href={`https://github.com/${props.user}`}>
          @{props.user}
        </a>
      </p>
      
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>  
  )
}

function ProfileRelationsBox({title, pessoas}) { 

  const [ showCaixa, setshowCaixa ] = useState({
    isClick: 'false'
  });

  const handleSpan = () => {

  showCaixa.isClick === 'true' ? 
  setshowCaixa({...showCaixa, isClick: 'false'}) : setshowCaixa({...showCaixa.isClick, isClick: 'true' }) 

  }

 return (
  <ProfileRelationsBoxWrapper isClick={showCaixa.isClick}>
  <h2 className="smallTitle">{title} ({pessoas.length}) </h2>

  <ul>
    
    {pessoas.map((item) => {
      return (
        <li key={item.id}>
            <a href={`./users/${item.login}`} >
              <img src={`https://github.com/${item.login}.png`} alt={item.id}></img>
              <span>{item.login}</span>
            </a>
        </li>
      )
    })}   
    
  </ul>  

  <span onClick={handleSpan}> 
  Ver mais </span>

</ProfileRelationsBoxWrapper>
 )
      
}

function RelationsBoxCommunities({title, pessoas}) { 

  const [ showCaixa, setshowCaixa ] = useState({
    isClick: 'false'
  });

  const handleSpan = () => {

  showCaixa.isClick === 'true' ? 
  setshowCaixa({...showCaixa, isClick: 'false'}) : setshowCaixa({...showCaixa.isClick, isClick: 'true' }) 

  }

 return (
  <ProfileRelationsBoxWrapper isClick={showCaixa.isClick}>
  <h2 className="smallTitle">{title} ({pessoas.length}) </h2>

  <ul>
    
    {pessoas.map((item) => {
      return (
        <li key={item.id}>
            <a href={`./users/${item.login}`} >
              <img src={item.imageUrl} alt={item.id}></img>
              <span>{item.title}</span>
            </a>
        </li>
      )
    })}   
    
  </ul>  

  <span onClick={handleSpan}> 
  Ver mais </span>

</ProfileRelationsBoxWrapper>
 )
      
}



// aqui no home vamos a carregar nossos components
export default function Home(props) {

  const userAleatorio = props.githubUser

  const pessoasFavoritas = [
    {id: 1, login: 'juunegreiros'},
    {id: 2, login: 'omariosouto'},
    {id: 3, login: 'peas'},
    {id: 4, login: 'rafaballerini'},
    {id: 5, login: 'marcobrunodev'},
    {id: 6, login: 'felipefialho'},
    {id: 7, login: 'Hola'},
]


  const initialState = {
    campo: '',
    isValid: 'null'
  }
  const [ title, setTitle ] = useState([initialState])
  
  const [ imageUrl, setImageUrl ] = useState([initialState])

  const [ comunidades, setComunidades ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dadosDoForm = new FormData(e.target)
    const resultForm = {
      title: dadosDoForm.get('title'), 
      imageUrl: dadosDoForm.get('imageUrl'), 
      creatorSlug: userAleatorio
    }
    
   
    envioDeRegistroComunidade(resultForm)
    setTitle({...initialState})
    setImageUrl({...initialState})
 
  }


  const envioDeRegistroComunidade = async (resultForm) => {
    const enviandoDadosServidor = await fetch('/api/comunidade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resultForm)
    })
    const dados = await enviandoDadosServidor.json()
    const novoRegistro = dados.registroCriado
    const comunidadeAtualizada = [...comunidades, novoRegistro]
    setComunidades(comunidadeAtualizada)
   
    
    }

  // Getting database from CMS, about "Comunidades"

  const gettingdbfromcms = async () => {
      const records = await fetch('/api/comunidade', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
  
      })
      const allrecords = await records.json()
      const itemsfromdb = allrecords.records
      setComunidades(itemsfromdb)
 
  }

  const [ seguidores, setSeguidores ] = useState([]);

  useEffect(() => {
    requestDadosaoServidor()
    gettingdbfromcms()
    console.log('Use Effect funcionando')

  }, [])

  const requestDadosaoServidor = async () => {
      const respostaDoServidor = await fetch(`https://api.github.com/users/${userAleatorio}/followers`)
      const respostaConvertida = await respostaDoServidor.json()
      const grupoSeguidores = respostaConvertida.map((item) => {
        return item
      })
      setSeguidores(grupoSeguidores)

  }



  return (
    <>
      <AlurakutMenu githubUser={userAleatorio}/>

      <MainGrid>
        <div className="profileArea" style={{gridArea: "profile-area"}}>
          <ProfileSideBar user={userAleatorio}/>
        </div>
      
        <div style={{gridArea: "welcome-area"}}>
          <Box>
              <h1>Bem-vindo (a) {userAleatorio}</h1>

              <OrkutNostalgicIconSet />
          </Box>

          <Box >
              <h2> Aqui pode criar a sua comunidade !</h2>
              <form onSubmit={handleSubmit}>

      
                <Input 
                type='text' 
                label='Nome da sua comunidade' 
                name='title' 
                placeholder='Nome da sua comunidade' 
                estado={title}
                setEstado={setTitle}
              
                />

               <Input 
                type='url' 
                label='Insira uma imagem URL para colocarmos na sua Comunidade' 
                name='imageUrl' 
                placeholder='Insira uma imagem URL para colocarmos na sua Comunidade' 
                estado={imageUrl}
                setEstado={setImageUrl}
          
                />

                <button>
                  Criar comunidade
                </button> 
              </form>
          </Box>
        </div>

        <div className="ProfileRelationsArea" style={{gridArea: "profileRelationsArea"}}>

          <ProfileRelationsBox title="Meus amigos" pessoas={pessoasFavoritas}/>

          <RelationsBoxCommunities title="Comunidades" pessoas={comunidades} />

          <ProfileRelationsBox title="Seguidores" pessoas={seguidores}/>

        </div>
      </MainGrid>
    </>
  )
}

// esto va a aparecer en nuestro backend, terminal
/* desde aqui podemos enviar propiedades a nuestro componente home
*/
export async function getServerSideProps(context) {

  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN
  
  console.log(token)

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token,
    }
  })
  .then(ServerRes => ServerRes.json())

  console.log(isAuthenticated)

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
      }
    }
  }

  const { githubUser } = jwt.decode(token)

  console.log(githubUser)

  return {
    props: {
      githubUser
    }
    // will be passed to the page component as props
  }
}

