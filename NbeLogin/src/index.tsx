import React from 'react';
import FooterLogin from './footer-nbe';
import HeaderLogin from './header-nbe';
import FormLogin from './form-nbe';

const NbeLogin: React.FC = () => {
  return (
    <>
      <HeaderLogin /> <FormLogin /> <FooterLogin />{' '}
    </>
  );
};

export default NbeLogin;
