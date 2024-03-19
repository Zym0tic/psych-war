import Logo from '../src/svg/PSYCH_WAR WHITE (1).svg';
//import about photos
import img1 from '../src/img/about/pw_live.jpg'
import img2 from '../src/img/about/fuck_genocide.png';
//import discography photos
import demo23 from '../src/img/discography/demo23.jpg';
//import icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

export const headerData = {
  logo: Logo,
};

export const heroData = {
  logo: Logo,
  subtitle:
    'FUCK IMPERIALISM, FUCK GENOCIDE, ANTI WAR!',
  btnText: 'ENTER SITE',
};

export const navData = {
  items: [
    { href: '/main', name: 'Home' },
    { href: 'discography', name: 'Discography' },
    { href: 'images', name: 'Images' },
    { href: 'videos', name: 'Videos' },
  ],
};

export const socialData = [
  {
    href: 'https://www.instagram.com/psychwar_official/',
    icon: <AiFillInstagram />,
  },
  {
    href: 'https://open.spotify.com/artist/3GXwI499LdLZlvbi5k6XnR',
    icon: <FaSpotify />,
  },
  {
    href: 'https://www.youtube.com/watch?v=q41LrX4CoaU',
    icon: <FaYoutube />,
  },
];

export const aboutData = {
  items: [
    {
      subtitle:
        'Psych-War Was formed in January 2023 in Philadelphia, PA. Playing uncompromising Hardcore-Punk in the vein of the swedish classics ANTI-CIMEX, DISFEAR, SHITLICKERS, ETC. We are strictly against war, genocide, imperialism, fascism, racism, antisemetism, sexism, and homophobia! FREE PALESTINE!',
      img: img1,
      img2: img2,
    },
  ],
};

export const slides = [

];

export const discographyData = {
  items: [
    {
      title: 'DEMO \'23',
      img: demo23,
      tracks: [
        {
          songtitle: 'Intro / No Escape',
          writer: 'Psych-War',
          recordingEng: 'Trish Quigley',
          masteringEng: 'Janne Juttila',
          vocals: 'Ryan',
          guitar: 'Luke, Frank',
          percussion: 'Chris',
          bass: 'Devin',
          label: 'Sore Mind',
          href: 'https://open.spotify.com/track/3Gf9jdPARTaW6V8j1guRZn?si=0a19ea91e23f41c6',
        },
        {
          songtitle: 'Screams at the Sky',
          writer: 'Psych-War',
          recordingEng: 'Trish Quigley',
          masteringEng: 'Janne Juttila',
          vocals: 'Ryan',
          guitar: 'Luke, Frank',
          percussion: 'Chris',
          bass: 'Devin',
          label: 'Sore Mind',
          href: 'https://open.spotify.com/track/1layN3lRihFKGHKsIPDVqk?si=a8e6edcf06e64cab',
        },
        {
          songtitle: 'The Blood',
          writer: 'Psych-War',
          recordingEng: 'Trish Quigley',
          masteringEng: 'Janne Juttila',
          vocals: 'Ryan',
          guitar: 'Luke, Frank',
          percussion: 'Chris',
          bass: 'Devin',
          label: 'Sore Mind',
          href: 'https://open.spotify.com/track/1FCRgCJYawYQoL36tBCnAB?si=3f65b8236c5c4ef4',
        },
        {
          songtitle: 'Take Me to Hell',
          writer: 'Psych-War',
          recordingEng: 'Trish Quigley',
          masteringEng: 'Janne Juttila',
          vocals: 'Ryan',
          guitar: 'Luke, Frank',
          percussion: 'Chris',
          bass: 'Devin',
          label: 'Sore Mind',
          href: 'https://open.spotify.com/track/5wqOuH4XvbWBqGHUiFERpN?si=42205528b6654267',
        },
        {
          songtitle: 'Gnossienne no.1 / All Night Long',
          writer: 'Psych-War',
          recordingEng: 'Trish Quigley',
          masteringEng: 'Janne Juttila',
          vocals: 'Ryan',
          guitar: 'Luke, Frank',
          percussion: 'Chris',
          keys: 'A.B',
          bass: 'Devin',
          label: 'Sore Mind',
          href: 'https://open.spotify.com/track/4Y7j0UzuDeytLqjZkEP9UG?si=76a93a9170dc46cb',
        },
      ],
    },
  ],
};


export const footerData = {
  about: {
    title: 'PSYCH-WAR',
    subtitle: 'For getting in touch you can send and email to:',
    email: {
      address: 'veteransofthepsychicwar@gmail.com',
    },
  },
  links: {
    title: 'links:',
    items: [
      { href: '#/main/termsofservice', name: 'Terms of Service' },
      {
        href: '#/main/contact',
        name: 'Contact',
      },
      { href: '#/main/webstore', name: 'Webstore' },
      { href: 'https://www.instagram.com/psychwar_official/', name: <AiFillInstagram /> },
      { href: 'https://www.youtube.com/watch?v=q41LrX4CoaU', name: <FaYoutube /> },
      { href: 'https://open.spotify.com/artist/3GXwI499LdLZlvbi5k6XnR', name: <FaSpotify /> },
    ],
  },
};

export const contactData = {
  title: 'Get in contact:',
  info: [
    {
      title: 'Email:',
      subtitle:
        'Send us an email if you would like to get in contact',
      email: {
        icon: 'email:',
        address: 'hvmane@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};
