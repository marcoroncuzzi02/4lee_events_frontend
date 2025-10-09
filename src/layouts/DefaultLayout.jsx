import Header from "../components/Header"
import {Outlet} from 'react-router-dom'

export default function DeaultLayout(){
    return(
        <>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>
        </>
    )
}