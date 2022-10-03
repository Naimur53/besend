import Head from 'next/head'
import Image from 'next/image'
import BlackCardWrap from '../components/BlackCardWrap/BlackCardWrap'
import Faq from '../components/Faq/Faq'
import FlagSection from '../components/FlagSection/FlagSection'
import Footer from '../components/Footer/Footer'
import GreenStarSection from '../components/GreenStarSection/GreenStarSection'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import MainHead from '../components/MainHead/MainHead'
import NumberCardSection from '../components/NumberCardSection/NumberCardSection'
import SafeStarSection from '../components/SafeStarSection/SafeStarSection'
import Topbar from '../components/Topbar/Topbar'
const Home = () => {
  return (
    <div>
      <MainHead></MainHead>
      <Topbar></Topbar>
      <div className='container pb-[120px] md:pb-[100px] '>

        <HomeBanner></HomeBanner>
        <BlackCardWrap></BlackCardWrap>
        <NumberCardSection></NumberCardSection>
        <SafeStarSection></SafeStarSection>
      </div>
      <FlagSection></FlagSection>
      <div className="container">
        <GreenStarSection></GreenStarSection>
        <Faq></Faq>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Home;   
