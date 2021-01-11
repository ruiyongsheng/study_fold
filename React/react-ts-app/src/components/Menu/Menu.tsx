import React, { useState, createContext} from 'react'
import classNames from 'classnames';

type MenuMode = "horizontal" | "vertical";
type selectCallBack = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: selectCallBack
}
interface IMenuContext {
  index: number;
  onSelect?: selectCallBack
}
export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const [current, setCurrent] = useState(defaultIndex);
  const handleClick = (index:number) => {
    setCurrent(index)
    if (onSelect) {
      onSelect(index);
    }
  }

  const passendContext: IMenuContext = {
    index: current ? current : 0,
    onSelect: handleClick,
  }

  return (
    <ul
      className={classes}
      style={style}
    >
      <MenuContext.Provider value={passendContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode:"horizontal"
}
export default Menu;
