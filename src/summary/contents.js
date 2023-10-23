import React from "react"

import MainArticle from "../Content/articlePart/article"
import FooterPart from "../Content/footer/footNote"
//import Navigation from "../Content/header/navigation"
// import logo from '../logo.svg';


class Content extends React.Component {
    render() {
        return (
            <>
                <main style={{width: '90%', margin: '0 auto'}}>
                    <MainArticle />
                </main>?
{/* <img src={logo} alt="smiley emoji" width="250" height="250" /> */}
                <footer>
                    <FooterPart />
                </footer>
            </>
        )
    }
}

export default Content