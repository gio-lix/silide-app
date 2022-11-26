import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from "react-router-dom"
import MenuItems from "./components/drop/MenuItems";
import SlideBox from "./components/Slide/SlideBox";


const initialState = [
    {
        id: 1,
        title: "Title",
        info: "Neque porro quisquam est qui ",
        data: [
            {id: 1, name: "image-1", image: "https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717__480.jpg"},
            {id: 2, name: "image-2", image: "https://cdn.pixabay.com/photo/2022/11/16/09/26/wind-7595553__480.png"},
            {id: 3, name: "image-3", image: "https://cdn.pixabay.com/photo/2022/11/13/18/09/canyon-7589820__480.jpg"},
            {id: 4, name: "image-4", image: "https://cdn.pixabay.com/photo/2022/11/13/18/09/canyon-7589820__480.jpg"},
        ],
    },
    {
        id: 2,
        title: "Title 2",
        info: "wants to have it, simply because it is pain ",
    },
    {
        id: 3, title: "Title 3",
        data: [
            {id: 1, name: "image-1", image: "https://cdn.pixabay.com/photo/2022/11/11/09/26/cat-7584624__480.jpg"},
            {id: 2, name: "image-2", image: "https://cdn.pixabay.com/photo/2022/09/25/09/54/kimono-7477942__480.jpg"},
            {id: 3, name: "image-3", image: "https://cdn.pixabay.com/photo/2022/11/14/08/37/park-7591049__480.jpg"},
        ],
        info: "It is a long established fact that a reader will be distracted"
    },
    {
        id: 4, title: "Title 4", info: "Neque  asadce est qui ",
        data: [
            {id: 1, name: "video-1", video: "https://www.youtube.com/embed/bfwtym-_ECo"},
            {id: 2, name: "video-2", video: "https://www.youtube.com/embed/O4irXQhgMqg"},
        ]
    },
]

const menu = [
    {id: 1, title: "Refresh", link: "refresh"},
    {
        id: 2,
        title: "Images",
        sub: [
            {
                id: 2,
                title: "Sort Images",
                link: "sort Images",
                sub: [
                    {id: 1, title: "By Date", link: "images by date"},
                ]
            },
            {id: 2, title: "All Images", link: "all images"},
        ]
    },
    {
        id: 3,
        title: "Videos",
        sub: [
            {
                id: 2,
                title: "Sort Videos",
                link: "Sort Videos",
                sub: [
                    {id: 1, title: "By Date", link: "videos by date"},
                    {id: 2, title: "By Alphabet", link: "videos by alphabet"},
                ]
            },
            {id: 3, title: "All Videos", link: "all videos"},
        ]
    }
]


function App() {
    const {state} = useLocation()
    const allImages: string[] = []
    const allVideos: string[] = []

    const openRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)


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

    useEffect(() => {
        const handleOver = (e: any) =>
            !e.path.includes(openRef.current) && setOpen(false)
        window.addEventListener("click", handleOver)
        return () => {
            window.removeEventListener("click", handleOver)
        }
    }, [])

    useEffect(() => {
        setOpen(state.open)
    }, [state])


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
                {state.state.toLowerCase() === "all images" ? (
                    <div className="grid">
                        {allImages.map((item, index) => (
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
