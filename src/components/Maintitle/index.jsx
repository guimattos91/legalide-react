import { TitleH2Martel,Paragraph } from '../Maintitle/style.js';


const Maintitle = ({title, align, text1, paddingy}) =>(
    <div className={`text-${align} py-${paddingy}`}>
        <TitleH2Martel>{title}</TitleH2Martel>
        <Paragraph className="d-inline-flex">{text1} </Paragraph>
    </div>
);

export default Maintitle;
