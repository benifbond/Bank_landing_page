import React from 'react'
import styles from "./style"
import {FeedbackCard,Footer,Clients, Billing,Button,Bussiness,Hero,CardDeal,Navbar,Stats,Testimonials,GetStarted,CTA} from "./components"
const App = () => {
  return (
    <div className={"bg-primary w-full overflow-hidden"}>
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
   < Navbar />
  </div>
  </div>      
<div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

 <Hero />
    </div>
</div>
<div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
<div className={`${styles.boxWidth}`}>

      <Stats />
      <Bussiness />
       <Footer />
      <Clients />
      <Billing />
      <Button />
      <CardDeal />
      <Testimonials />
     
      <CTA />
     <FeedbackCard /> 

</div>
</div>
    </div>
  )
}

export default App