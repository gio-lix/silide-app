import React, {FC} from 'react';
import MenuItems from "./MenuItems";
import s from "./Drop.module.scss"

interface Props {
    submenus: any
    dropdown: boolean
}

const DropDown:FC<Props> = ({submenus, dropdown}) => {
    console.log("doo")

    return (
        <div  className={`${s.dropdown} ${dropdown ? s.show : ""}`}>
            {submenus.map((submenu: any, index: number) => (
                <MenuItems items={submenu} key={index}  />
            ))}
        </div>
    );
};

export default DropDown;