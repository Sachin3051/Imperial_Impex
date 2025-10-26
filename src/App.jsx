import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials
} from './components'
import About from './components/About'
import Contact from './components/Contact'
import License from './components/License'
import QuickConnect from './components/QuickConnect'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <QuickConnect/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About/>
          <Stats/>
          {/* <Business/> */}
          <Billing/>
          {/* <CardDeal/> */}
          <Testimonials/>
          {/* <Clients/> */}
          <Contact/>
          {/* <CTA/> */}
          <License/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App