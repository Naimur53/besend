import Head from 'next/head'
import Image from 'next/image'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import MainHead from '../components/MainHead/MainHead'
const Home = () => {
  return (
    <div>
      <MainHead></MainHead>
      <HomeBanner></HomeBanner>
    </div>     
  )     
}  
export default Home;   
