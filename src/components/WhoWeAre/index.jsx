import {BsPeople} from 'react-icons/bs'
import {BsSpeedometer2} from 'react-icons/bs'
import Maintitle from '../Maintitle';
import { TextStyleLarge,TextStyleSmall } from './style';


const WhoWeAre = () =>(
    <>
        <Maintitle
            align="center"
            title="Who We Are"
            text1="Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics "
        />
        <div className="row pt-5">
            <div className="col-12 col-md-8">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kuYzs7YMOOI"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />
            </div>
            <div className="col-12 col-md-4 pt-5 pt-md-2">
                <Maintitle
                    align="start"
                    title="Most trusted in our field"
                    text1="Most calendars are designed for teams. Slate is designed
                    for freelancers who want a simple way to plan their schedule."
                />
                <div className="d-flex pt-3 pt-md-1">
                    <div>
                        <BsPeople color="#D0A144" size={30} />
                    </div>
                    <div className="ps-3">
                        <TextStyleLarge> the quick fox jumps over the lazy dog </TextStyleLarge>
                        <TextStyleSmall className='pt-0'> Things on a very small scale ...</TextStyleSmall>
                    </div>
                </div>
                <div className="d-flex pt-3 pt-md-1">
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
    </>
)

export default WhoWeAre
