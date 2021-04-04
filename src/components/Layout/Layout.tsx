import {Header} from "@components/Header/Header";
import {Sidebar} from "@components/Sidebar/Sidebar";
import {Container} from "@components/Container/Container";

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