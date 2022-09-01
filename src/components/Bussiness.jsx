import { features } from "../constants"
import styles,{layout} from "../style"
import Button from "./Button"



const Bussiness = () => 
   (
    <div>

      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}></div>
        <h2>You do the business, <br className="sm:block hidden" /> we'll handle your money

        </h2>
      </section>
    </div>
  )

export default Bussiness