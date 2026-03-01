import './common.css';
import {Link} from 'react-router-dom';

function Converters()
{
    return(
        <body>
            <section id='Converters'>
                <h1>Welcome to the Converters page!</h1>
                <p>Here you can find various unit converters to help you with your calculations.</p>

                <fieldset>
                    
                    <ul> Select a converter
                        <li><Link to="/Length"><span>Length</span></Link></li>
                        <li><Link to="/Mass"><span>Mass</span></Link></li>
                        <li><Link to="/Temperature"><span>Temperature</span></Link></li>
                    </ul>

                </fieldset>
            <article>
                <p>Go to <Link to="/">Home</Link></p>
            </article>
            </section>
        </body>
    )
}

export default Converters;