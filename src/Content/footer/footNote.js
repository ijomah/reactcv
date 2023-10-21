import React from "react";
import './foot.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class FooterPart extends React.Component {
    navItems = [
        {social: 'linkedin', url: 'linkedin.com/in/ijomah-jacob-351a49178'},
        {social: 'twitter', url: 'https://twitter.com/ijomah2'},
        {social: 'github', url: 'https://github.com/ijomah'}
    ]



    render() {
        // const pikSooc = (social) => {
        //     if (social === 'twitter') {
        //         window.location.href='https://twitter.com/ijomah2'
        //     }
        // }
        return(
                    <div className="foot"> 
                        <div>
                            {/* <button onClick={()=>{window.location.href='https://twitter.com/ijomah2'}}>
                                <FontAwesomeIcon icon="fa-brands fa-facebook" size="lg" />
                            </button> */}
                        </div>
                        <div>
                            <button onClick={()=>{window.location.href='https://twitter.com/ijomah2'}} >
                            <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" />
                            </button>
                        </div>
                        

                        
                        <div>
                            <button onClick={()=>window.location.href='linkedin.com/in/ijomah-jacob-351a49178'} >
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" />
                            </button>
                        </div>
                        
                        <div>
                            <button onClick={()=>window.location.href='https://github.com/ijomah'} >
                                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
                            </button>
                        </div>
                        
                        <div>&copy; Copy Right 2023</div>
                        <div>Me Inc</div>
                    </div>
                )
           
        }
}

export default FooterPart