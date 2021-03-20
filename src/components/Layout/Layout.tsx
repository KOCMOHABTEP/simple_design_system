import {Header} from "../Header/Header";
import {Sidebar} from "../Sidebar/Sidebar";
import {Container} from "../Container/Container";

const Layout = props => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Container>{props.children}</Container>
        </div>
    )
}

export default Layout;