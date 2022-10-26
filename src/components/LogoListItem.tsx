import { LogoListItem as LogoListItemProps } from '../types/LogoListItem/logoListItemTypes';
import '../styles/LogoListItem.sass';
import { Counter } from './Counter';

export const LogoListItem = ({
    logo,
    technology,
    startedAt,
}: LogoListItemProps) => {
    return (
        <div className="logoListItemContainer">
            <div className="logoListItem">
                <div className="logo">
                    <img src={logo} width={50} height={50} />
                </div>
                <p className="techText">{technology}</p>
            </div>
            <Counter startTime={new Date(startedAt)} />
        </div>
    );
};
