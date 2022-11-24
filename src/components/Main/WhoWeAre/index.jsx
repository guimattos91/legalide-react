import {BsPeople} from 'react-icons/bs'
import {BsSpeedometer2} from 'react-icons/bs'
import Maintitle from '../../Maintitle';
import {  TextStyleLarge,TextStyleSmall } from './style';


const WhoWeAre = () =>(
    <div id="WhoWeAre">
        <Maintitle
            align="center"
            title="Who We Are"
            text1="Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics "
            paddingy="4"
        />
        <div className="row pt-4">
            <div className="col-12 col-lg-8">
                <div class="ratio ratio-16x9">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kuYzs7YMOOI"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                </div>
            </div>
            <div className="col-12 col-lg-4 pt-5 pt-lg-0 d-flex flex-column justify-content-lg-center">
                <Maintitle
                    align="start"
                    title="Most trusted in our field"
                    text1="Most calendars are designed for teams. Slate is designed
                    for freelancers who want a simple way to plan their schedule."
                    paddingy="0"
                />
                <div className="d-flex pt-3 pt-md-3">
                    <div>
                        <BsPeople color="#D0A144" size={30} />
                    </div>
                    <div className="ps-3">
                        <TextStyleLarge> the quick fox jumps over the lazy dog </TextStyleLarge>
                        <TextStyleSmall className='pt-0'> Things on a very small scale ...</TextStyleSmall>
                    </div>
                </div>
                <div className="d-flex pt-3 pt-md-2">
                    <div>
                        <BsSpeedometer2 color="#D0A144" size={30} />
                    </div>
                    <div className="ps-3">
                        <TextStyleLarge> the quick fox jumps over the lazy dog </TextStyleLarge>
                        <TextStyleSmall className='pt-0'> Things on a very small scale ...</TextStyleSmall>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WhoWeAre
