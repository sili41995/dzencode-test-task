import { FC } from 'react';
import { List, ListItem } from './NavigationMenu.styled';
import { NavLink } from 'react-router-dom';
import { PagePaths } from '@/constants';

const NavigationMenu: FC = () => (
  <List className='nav nav-underline'>
    <ListItem className='nav-item'>
      <NavLink className='nav-link' aria-current='page' to={PagePaths.orders}>
        Приход
      </NavLink>
    </ListItem>
    <ListItem className='nav-item'>
      <NavLink className='nav-link' to={PagePaths.groups}>
        Группы
      </NavLink>
    </ListItem>
    <ListItem className='nav-item'>
      <NavLink className='nav-link' to={PagePaths.products}>
        Продукты
      </NavLink>
    </ListItem>
    <ListItem className='nav-item'>
      <NavLink className='nav-link' to={PagePaths.users}>
        Пользователи
      </NavLink>
    </ListItem>
    <ListItem className='nav-item'>
      <NavLink className='nav-link' to={PagePaths.settings}>
        Настройки
      </NavLink>
    </ListItem>
  </List>
);

export default NavigationMenu;
