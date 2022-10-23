import { TextContainerProps } from "../types/TextContainer/containerTypes";
import '../styles/TextContainer.sass'

export const TextContainer = ({ text }: TextContainerProps) => {
    return (
        <div className="textContainer">
            <p>{text}</p>
        </div>
    )
}