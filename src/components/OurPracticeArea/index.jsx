import CardBusinessLaw from '../CardBusinessLaw';
import CardFamilyLaw from '../CardFamilyLaw';
import Maintitle from '../Maintitle';
import BusinessLaw from '../../assets/businesslaw.png'

const OurPracticeArea = () =>(
    <div className="pb-5">
        <Maintitle
        align="center"
        title="Our Practice Areas"
        text1="Problems trying to resolve the conflict between the two major
        realms of Classical physics: Newtonian mechanics"
        />
        <div className="row">
          <div className="col">
            <CardBusinessLaw title="Business Law" icon="fa-solid fa-file" />
          </div>
          <div className="col">
        <CardFamilyLaw />
          </div>
        </div>
    </div>
)

export default OurPracticeArea
