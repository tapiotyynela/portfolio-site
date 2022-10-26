import { Content } from '../types/Content/content';
import reactLogo from './assets/reactLogo.png';
import nodeLogo from './assets/nodeJsLogo.png';
import psqlLogo from './assets/psqlLogo.png';
import mysqlLogo from './assets/mysqlLogo.png';
import gcpLogo from './assets/gcpLogo.png';

export const content: Content = {
    introduction: `Hello! \n I'm happy to see that you found my portfolio. 
                    My name is Tapio Tyynelä and I'm full stack developer.
                    Below you can see different technologies and how long 
                    I have worked with them professionally (in real time btw 😉)`,
    techList: [
        {
            technology: 'ReactJs',
            logo: reactLogo,
            startedAt: '01.11.2019',
        },
        {
            technology: 'NodeJs',
            logo: nodeLogo,
            startedAt: '01.11.2019',
        },
        {
            technology: 'React Native',
            logo: reactLogo,
            startedAt: '01.04.2021',
        },
        {
            technology: 'PostgreSQL',
            logo: psqlLogo,
            startedAt: '01.04.2021',
        },
        {
            technology: 'MySQL',
            logo: mysqlLogo,
            startedAt: '01.11.2019',
        },
        {
            technology: 'Google Cloud Platform',
            logo: gcpLogo,
            startedAt: '01.04.2021',
        },
    ],
};
