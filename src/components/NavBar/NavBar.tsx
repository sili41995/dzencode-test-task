import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Container,
  ImgWrap,
  List,
  ListItem,
  SettingsBtn,
} from './NavBar.styled';
import { PagePaths } from '@/constants';
import { IoMdSettings } from 'react-icons/io';

const NavBar: FC = () => {
  return (
    <Container>
      <ImgWrap>
        <Avatar
          src='https://res.cloudinary.com/dcwbkakpl/image/upload/v1701845113/avatars/default_user_avatar_sr0dpz.jpg'
          alt='avatar'
          width='100'
          height='100'
        />
        <SettingsBtn type='button' className='btn btn-light'>
          <IoMdSettings size={24} />
        </SettingsBtn>
      </ImgWrap>
      <List className='nav nav-underline'>
        <ListItem className='nav-item'>
          <NavLink
            className='nav-link'
            aria-current='page'
            to={PagePaths.orders}
          >
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
    </Container>
  );
};

export default NavBar;
