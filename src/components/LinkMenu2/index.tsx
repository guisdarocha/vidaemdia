import "./styles.css"


interface LinkProps {
    texto: string;
    redirect: string;
}
export default function LinkMenu2(props: LinkProps){
    return (
        <a className="linkmenu2" href={props.redirect} target="_blank">
            {props.texto}
        </a>
    );

}