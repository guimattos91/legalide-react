import Maintitle from '../../Maintitle';
import CardPracticeAdvice from './CardPracticeAdvice';
import BailWarrants from '../../../assets/BaileseWarrants.png';
import FraudsOrMisleads from '../../../assets/FraudsOrMisleads.png';
import FederalDrug from '../../../assets/FederalDrug.png';
import TrafficRelated from '../../../assets/TrafficRelated.png';


const PracticeAdvice = () =>(
    <div id="PracticeAdvice" className="pb-5">
            <Maintitle
            title="Practice Advice"
            align="center"
            text1="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics"
            />
            <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pt-5">
                <div className="col d-flex flex-column py-3 py-lg-0">
                  <CardPracticeAdvice
                    title="Frauds or Mislead"
                    description="Newton thought that light was made up of
                    particles, but then it was discovered "
                    image={ FraudsOrMisleads } />
                </div>
                <div className="col d-flex flex-column py-3 py-lg-0">
                  <CardPracticeAdvice
                    title="Bailes & Warrants"
                    description="“Quantum mechanics” is the description of the behaviour of matter"
                    image={ BailWarrants } />
                </div>
                <div className="col d-flex flex-column py-3 py-lg-0">
                  <CardPracticeAdvice
                    title="Federal Drug Crimes"
                    description="They describe a universe
                    consisting of bodies moving"
                    image={ FederalDrug } />
                </div>
                <div className="col d-flex flex-column py-3 py-lg-0">
                  <CardPracticeAdvice
                    title="Traffic Related Crimes"
                    description="They finally obtained a consistent description
                    of the behaviour "
                    image={ TrafficRelated } />
                </div>
            </div>
    </div>
)

export default PracticeAdvice
