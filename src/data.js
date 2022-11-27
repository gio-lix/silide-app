export const initialState = [
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

export const menu = [
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