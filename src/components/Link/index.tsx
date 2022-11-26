import "./styles.css"


interface LinkProps {
    texto: string;
    redirect?: string;
    onClick?: any
}
export default function NavLink(props: LinkProps){
    return (
        <a onClick={props.onClick} className="link">
            {props.texto}
        </a>
    );

}