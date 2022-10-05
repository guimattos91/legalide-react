import { TitleH2Martel,Paragraph } from '../Maintitle/style.js';


const Maintitle = ({title, align, text1}) =>(
    <div className={`text-${align}`}>
        <TitleH2Martel>{title}</TitleH2Martel>
        <Paragraph className="d-inline-flex">{text1} </Paragraph>
    </div>
);

export default Maintitle;
