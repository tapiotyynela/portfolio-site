import { LogoListItem as LogoListItemProps } from '../types/LogoListItem/logoListItemTypes';
import '../styles/LogoListItem.sass';

export const LogoListItem = ({ logo, technology }: LogoListItemProps) => {
    return (
        <div className="logoListItem">
            <div className="logo">
                <img src={logo} width={50} height={50} />
            </div>
            <p className="techText">{technology}</p>
        </div>
    );
};
