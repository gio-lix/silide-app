import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom"
import s from "./Drop.module.scss"
import DropDown from "./DropDown";
import {MenuType} from "../../types";

interface Props {
    items: MenuType
}

const MenuItems: FC<Props> = ({items}) => {
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState<boolean>(false);


    const handleClick = (p: string | undefined) => {
        switch (p) {
            case "refresh":
                window.location.reload()
                navigate('/', {state: {open: false, state: ""}});
                return
            default:
                return navigate('/', {state: {open: false, state: `${p}`}});
        }
    }

    return (
        <div className={s.menu_item} onMouseLeave={() => setDropdown(false)}>
            {items.sub ? (
                <>
                    <p onMouseEnter={() => setDropdown(true)} style={{cursor: "inherit"}}>
                        {items.title} <i className="material-icons">keyboard_double_arrow_right</i>
                    </p>
                    <DropDown
                        dropdown={dropdown}
                        submenus={items.sub}
                    />
                </>

            ) : (
                <p onClick={() => handleClick(items.link)}>{items.title}</p>
            )}
        </div>
    );
};

export default MenuItems;