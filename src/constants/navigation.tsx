import common from 'strings/common';

export interface NavLinkType {
  to: string;
  label: string;
}

export const links = [
  {
    to: '/',
    label: common.Home,
  },
  {
    to: '/music',
    label: common.Music,
  },
  {
    to: '/bio',
    label: common.Bio,
  },
  {
    to: '/merch',
    label: common.Merch,
  },
  {
    to: '/links',
    label: common.Links,
  },
  {
    to: '/contact',
    label: common.Contact,
  },
];
