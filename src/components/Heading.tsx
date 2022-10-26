import { HeadingProps } from '../types/Heading/headingTypes';
import '../styles/Heading.sass';

export const Heading = ({ text }: HeadingProps) => {
    return (
        <div className="headingContainer">
            <h1 className="headingText">{text}</h1>
        </div>
    );
};
