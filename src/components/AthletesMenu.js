import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

export default class AthletesMenu extends React.Component {
    render() {
        return (
            <nav className="atheletes-menu">
                {athletes.map(menuAthlete => {
                    return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
                    {menuAthlete.name}
                    </Link>;
                })}
            </nav>
        );
    }
}


/*

The component is very simple, but there are some key points to underline:

We are importing our data module directly into the component to have access to the list of athletes available in the app.
We use the map method to iterate over all the athletes and generate for every one of them a Link.
Link is a special component provided by React Router to create links between views.
Finally, we use the prop activeClassName to use the class active when the current route matches the path of the link.

 */
