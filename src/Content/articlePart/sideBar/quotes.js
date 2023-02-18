import React from "react";
import './sidebar.css';

import './sidebar.css'

class AsideQoutes extends React.Component {

    render() {
        return (
            <div className="quotes">
                <h2>Personal Guiding Quotes</h2>
                <figure>
                    <figcaption><b>Stephen Covey :</b></figcaption>
                    <blockquote>
                        <i>There is so much we can do to render service, to make a difference in the world - no matter how large or small our circle of influence.</i>
                    </blockquote>
                </figure> <hr/>
                <figure>
                    <figcaption><b>Brian Tracy :</b></figcaption>
                    <blockquote>
                        <i>Commit yourself to lifelong learning. The most valuable asset you'll ever have is your mind and what you put into it.</i>
                    </blockquote>
                </figure> <hr/>
                <figure>
                    <figcaption><b>Jim Rohn :</b></figcaption>
                    <blockquote>
                        <i>If you really want to do something, you'll find a way. If you don't, you'll find an excuse.</i>
                    </blockquote>
                </figure> <hr/>
                <figure>
                    <figcaption><b>Napoleon Hill :</b></figcaption>
                    <blockquote>
                        <i>Self-disciplined begins with the mastery of your thoughts. If you don't control what you think, you can't control what you do. Simply, self-discipline enables you to think first and act afterward.</i>
                    </blockquote>
                </figure>
            </div>
        )
    }
}

export default AsideQoutes