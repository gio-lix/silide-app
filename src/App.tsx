import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from "react-router-dom"
import MenuItems from "./components/drop/MenuItems";
import SlideBox from "./components/Slide/SlideBox";
import {menu,initialState} from "./data"



function App() {
    const {state} = useLocation()
    const allImages: string[] = []
    const allVideos: string[] = []

    const openRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)


    useEffect(() => {
        const handleOver = (e: any) =>
            !e.path.includes(openRef.current) && setOpen(false)
        window.addEventListener("click", handleOver)
        return () => {
            window.removeEventListener("click", handleOver)
        }
    }, [])

    useEffect(() => {
        setOpen(state?.open)
    }, [state])

    const getImagesAndVideos = (data: any) => {
        if (data.length === 0) return
        data.forEach((ele: any) => {
            if (Object.keys(ele).includes("image")) {
                return allImages.push(ele.image)
            } else if (Object.keys(ele).includes("video")) {
                return allVideos.push(ele.video)
            } else if (ele.data?.length > 0) {
                return getImagesAndVideos(ele.data)
            }
        })
        return
    }


    getImagesAndVideos(initialState)

    return (
        <main>
            <section className="main">
                <div ref={openRef}>
                    <i
                        style={{color: "#657173"}}
                        onClick={() => setOpen(!open)}
                        className="material-icons"
                    >
                        settings
                    </i>
                    {open && (
                        <div style={{
                            position: "absolute",
                            zIndex: "300",
                            top: "25px",
                            left: "20px"
                        }}
                        >
                            {menu.map((item, index) => {
                                return <MenuItems
                                    items={item}
                                    key={item.id}
                                />
                            })}
                        </div>
                    )}
                </div>

                {state?.state?.toLowerCase() === "all images" ? (
                    <div className="grid">
                        {allImages?.map((item, index) => (
                            <img key={index} src={item} alt=""/>
                        ))}
                    </div>
                ) : (
                    <div style={{boxShadow: "2px 10px 23px -6px rgba(158,158,158,1)"}}>
                        <SlideBox
                            width={400}
                            height={400}
                            data={initialState}
                        />
                    </div>
                )}
            </section>
        </main>
    );
}

export default App;
