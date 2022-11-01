import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '#header',
    text: 'home',
  },
  {
    id: 3,
    url: '#works',
    text: 'works',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/richiesmuse',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/richardsewornu?s=21&t=nRO8PVFOSWxEKHCmmuEDsw',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/richardsewornu-10b503128',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.behance.net/richardsewornu',
    icon: <FaBehance />,
  },
];
