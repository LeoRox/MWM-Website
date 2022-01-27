import donate_now from '../images/donatenow.jpg';
import donate_need from '../images/donate_goods.JPG';

export const DonateDataOne = {
    lightBg: true,
    lightText: true,
    lightTextDesc: false,
    heading: 'Help Us',
    body: 'We are a Non-for-profit organization and as such, we rely heavily on the generous support of our volunteers. The upcoming events are always posted in our newsletter. Please consider joining our team and serving the Migrant Workers.',
    image: donate_now,
    delay: 200,
    start: false,
    imgShadow: false,
    imgStart: true
};

export const DonateDataTwo = {
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    heading: 'What We Need',
    body1: 'Volunteer responsibilities include:',
    list: ['hoodies', 'toques', 'baseball hats', 'rain boots', 'raincoats'],
    body2: 'Please contact us if you are interested in volunteering',
    image: donate_need,
    delay: 200,
    start: true,
    imgShadow: true,
    
};