import React, {FC, memo, useEffect, useRef, useState} from 'react';
import Slide from "./Slide";
import s from "./Slide.module.scss"
import {DataType, DeepDate} from "../../types";

interface Props {
    data: DataType[]
    width: number
    height: number
}

const SlideBox: FC<Props> = ({data, width, height}) => {
    const frameRef = useRef<HTMLIFrameElement | null>(null)
    const [currentData, setCurrentData] = useState<DataType[]>([])
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        setCurrentData(data)
    }, [data])


    const plusNext = (action: string) => {
        switch (action) {
            case "next":
                return currentIndex < currentData.length - 1 &&
                    setCurrentIndex(prev => prev + 1)
            case "prev":
                return currentIndex > 0 &&
                    setCurrentIndex(prev => prev - 1)
        }
    }


    return (
        <section className={s.home} style={{width: `${width}px`, height: `${height}px`}}>
            {currentData.length > 0 && (
                <div className={s.pagination}>
                    <div>
                        {currentIndex > 0 &&
                            <i onClick={() => plusNext("prev")} className="material-icons">arrow_left</i>
                        }
                    </div>
                    <div>
                        {currentIndex < currentData.length - 1 &&
                            <i onClick={() => plusNext("next")} className="material-icons">
                                arrow_right
                            </i>
                        }
                    </div>
                </div>
            )}
            <div style={{marginLeft: `${currentIndex * -100}%`, width: `calc(100 * ${currentData.length}%)`}}>
                {currentData.map((item, index) => {
                    return (
                        <Slide index={index} item={item} key={`${item.id}_${index}`}>
                            {((item as DeepDate).image || (item as DeepDate).video) ?
                                <figure>
                                    {
                                        (item as DeepDate).image &&
                                        <img src={(item as DeepDate)?.image} alt="img"/>
                                    }
                                    {
                                        (item as DeepDate).video &&
                                        <iframe
                                            style={{backgroundColor: "black"}}
                                            src={(item as DeepDate)?.video}
                                            allow="
                                                        autoplay;
                                                        accelerometer;
                                                        clipboard-write;
                                                        encrypted-media;
                                                        gyroscope;
                                                        picture-in-picture
                                                     "
                                            key={currentIndex}
                                            allowFullScreen
                                            title="Embed Youtube Video"
                                            ref={frameRef}
                                        />
                                    }
                                    <p>{(item as DeepDate).name}</p>
                                </figure>
                                : (
                                    <div className={s.no_image}>
                                        <h3>No Images/Videos</h3>
                                    </div>
                                )}
                        </Slide>
                    )
                })}
            </div>
        </section>
    );
};

export default memo(SlideBox);

