import React, { useContext} from 'react'
import classNames from 'classnames';
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index?: number,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties,
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { disabled, className, style, children,index } = props;
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index ===  index
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && index) {
      context.onSelect(index);
    }
  }
  return (
    <li
      onClick = { handleClick}
      className={classes}
      style={style}
    >
      {children}
    </li>
  )
}
export default MenuItem;
