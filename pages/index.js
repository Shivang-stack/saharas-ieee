import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Animeevent from '../components/Animeevent'
import Ideatank from '../components/Ideatank'
import Codeofduty from '../components/Codeofduty'
import Quoteajob from '../components/Quoteajob'
import Iplevent from '../components/Iplevent'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahasra</title>
        <meta name="description" content="Created by Shivang yadav" />
        <link rel="icon" href="../public/assets/navLogo.png" />
      </Head>
    
    <div className='poster'>
    <Main />
    </div>
    <About />
    <div className='event'>
    <Iplevent/>
    <Ideatank/>
    <Codeofduty/>
    <Quoteajob/>
    <Animeevent />
    </div>
    
    <Contact />
    </div>
  )
}
