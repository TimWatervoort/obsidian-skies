import common from 'strings/common';
import links from 'strings/links';

export interface NavLinkType {
  to: string;
  label: string;
}

export const internalLinks = [
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

export const externalLinks = [
  {
    to: 'https://www.facebook.com/Obsidian-Skies-109138908535805',
    label: links.Facebook,
  },
  {
    to: 'https://www.youtube.com/channel/UCZCPA3AZRQ46V-sCXwEw8HQ',
    label: links.YouTube,
  },
  {
    to: 'https://www.instagram.com/obsidianskiesband',
    label: links.Instagram,
  },
  {
    to: 'https://obsidian-skies.bandcamp.com',
    label: links.Bandcamp,
  },
];
