import './common.css';
import {Link} from 'react-router-dom';

function Home()
{
    return(

        <body>
            <section id='Home'>
                <h1>Welcome to the Unit Converter App!</h1>
                <h3>
                    Click here to visit the <Link to="/converters">Converters</Link> page
                </h3>
            </section>
        </body>
        
    )
} 

export default Home;