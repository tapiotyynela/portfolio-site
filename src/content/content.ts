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
        },
        {
            technology: 'NodeJs',
            logo: nodeLogo,
        },
        {
            technology: 'React Native',
            logo: reactLogo,
        },
        {
            technology: 'PostgreSQL',
            logo: psqlLogo,
        },
        {
            technology: 'MySQL',
            logo: mysqlLogo,
        },
        {
            technology: 'Google Cloud Platform',
            logo: gcpLogo,
        },
    ],
};
