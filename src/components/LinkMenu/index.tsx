import "./styles.css"


interface LinkProps {
    texto: string;
    redirect: string;
}
export default function LinkMenu(props: LinkProps){
    return (<>
        <a className="linkmenu" href={props.redirect} target="_blank">
            {props.texto}
        </a>
    </>
    );

}