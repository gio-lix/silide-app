export interface DeepDate {
    id: number
    name: string
    image?: string
    info: string
    video?: string
}

export interface DataType {
    id: number
    title?: string
    data?: DataType[]
}




export interface MenuSubType {
   id: number
   title: string
   link?: string
}

export interface MenuType extends MenuSubType{
    sub?: MenuSubType[]
}



