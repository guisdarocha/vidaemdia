
import "./styles.css"


interface LinkProps {
    texto: string;
    redirect: string;
}
export default function Link(props: LinkProps){
    return (
        <a className="link" href={props.redirect} target="_blank">
            {props.texto}
        </a>
    );

}