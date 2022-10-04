import {BsPeople} from 'react-icons/bs'
import {BsSpeedometer2} from 'react-icons/bs'
import Maintitle from '../Maintitle';
import { TextStyleLarge,TextStyleSmall } from './style';


const WhoWeAre = () =>(
    <div className="container py-5">
        <Maintitle
        align="center"
        title="Who We Are"
        text1="Problems trying to resolve the conflict between the two major realms 
        of Classical physics: Newtonian mechanics "
        />
        <div className="row d-flex align-items-center">
            <div className="col-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kuYzs7YMOOI"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="col-4">
                <Maintitle
                align="start"
                title="Most trusted in our field"
                text1="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                />
                <div className="d-flex justify-content-center">
                    <div className="col-1">
                        <BsPeople color="#fff" size={30}/>
                    </div>
                    <div className="col-11">
                        <TextStyleLarge> the quick fox jumps over the lazy dog </TextStyleLarge>
                        <TextStyleSmall className='pt-0'> Things on a very small scale ...</TextStyleSmall>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-1">
                        <BsSpeedometer2 />
                    </div>
                    <div className="col-11">
                        <TextStyleLarge> the quick fox jumps over the lazy dog </TextStyleLarge>
                        <TextStyleSmall className='pt-0'> Things on a very small scale ...</TextStyleSmall>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default WhoWeAre