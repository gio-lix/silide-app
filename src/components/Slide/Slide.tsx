import React, {FC, memo} from 'react';
import s from "./Slide.module.scss"
import SlideBox from "./SlideBox";
import {DeepDate} from "../../types";


interface Props {
    children?: React.ReactNode
    item: any
    index: number
}

const Slide: FC<Props> = ({children, index, item}) => {
    const findVal = Object.values(item).find(el => Array.isArray(el))

    return (
        <div className={s.slide}>
            <div className={s.box}>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
            </div>
            <small >page: {index + 1}</small>
           <div>
               {findVal ? (
                   <SlideBox
                       data={(findVal as DeepDate[])}
                       width={350}
                       height={250}
                   />
               ) : (
                   <>
                       {children}
                   </>
               )}
           </div>
        </div>
    );
};

export default memo(Slide);