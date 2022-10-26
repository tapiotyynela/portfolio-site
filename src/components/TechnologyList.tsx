import { content } from '../content/content';
import { LogoListItem } from './LogoListItem';
import '../styles/TechnologyList.sass';

export const TechnologyList = () => {
    return (
        <div className="technologyList">
            {content.techList.map(tech => (
                <LogoListItem logo={tech.logo} technology={tech.technology} />
            ))}
        </div>
    );
};
