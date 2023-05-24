import { FunctionComponent } from 'react';

import './Home.scss';

const Home: FunctionComponent<any> = () => {

    const home = 'home';

    return (
        <div className={home}>
            <h1 className={`${home}__title poke-font`}>Welcome to Pokemon App React</h1>
            <p className={`${home}__subtitle`}>Here you can access a list of Pokemon,
             search for your favorite Pokemon and even learn more about their skills.</p>
        </div>
    )
}

export default Home;