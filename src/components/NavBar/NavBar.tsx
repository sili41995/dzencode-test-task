import { FC } from 'react';
import { Avatar, Container, ImgWrap, SettingsBtn } from './NavBar.styled';
import { IoMdSettings } from 'react-icons/io';
import NavigationMenu from '@/components/NavigationMenu';

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
      <NavigationMenu />
    </Container>
  );
};

export default NavBar;
