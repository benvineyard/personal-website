module.exports = {
  siteTitle: 'Ben Vineyard | Principal Fullstack Engineer',
  siteDescription:
    'Ben Vineyard is a Principal Fullstack Engineer based in Las Vegas, NV who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Ben Lynn Vineyard IV, Ben Lynn Vineyard, Ben Vineyard IV, Ben, Vineyard, benvineyard, Ben Vineyard, software engineer, front-end engineer, web developer, javascript, las vegas, typescript, nodejs, c#, asp.net, .net',
  siteUrl: 'https://benvineyard.com',
  siteLanguage: 'en_US',

  name: 'Ben Vineyard',
  location: 'Las Vegas, NV',
  email: 'ben@benvineyard.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/benvineyard/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/benvineyard/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@benvineyard',
  googleAnalyticsID: 'UA-33100610-1',
  googleVerification: 'H_UFo2R5AMrb8PcSG8To7gLAMQd3k89hvGXP5L-U16k',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
