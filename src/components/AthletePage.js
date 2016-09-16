// src/componetns/AthletePage.js

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';
import athletes from '../data/athletes';

export default class AthletePage extends React.Component {
    render() {
        const id = this.props.params.id;
        const athlete = athletes.filter((athlete) => athlete.id === id)[0];
        if(!athlete){
            return <NotFoundPage/>
        }

        const headerStyle = { backgroundImage: `url(/img/${athlete.cover})`};
        return (
            <div className="athlete-full">
                <AthletesMenu/>
                <div className="athlete">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${athlete.image}`}/>
                        <h2 className="name">{athlete.name}</h2>
                    </div>
                    <section className="description">
                        Olympic medalist from <strong><Flag code={athlete.country} showName="true"/></strong>
                        born in {athlete.birth} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>)
                    </section>
                    <section className="medals">
                        <p>Winner of <strong>{athlete.medals.length}</strong> medals: </p>
                        <ul>{
                            athlete.medals.map((medal, i) => <Medal key={i} {...medal} />)
                        } </ul>
                    </section>
                </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
            </div>

        )
    }
}

//By now, you must be able to understand most of the code shown here and how the other components are used to build this view.
//What might be important to underline is that this page component accepts from the outside only the id of the athlete, so we include the data module to be able to retrieve the related information.
//We do this at the beginning of the render method using the function filter on the data set.
//We are also considering the case where the received id does not exist in our data module, in this case we render NotFoundPage, a component that we are going to create in the next section.
//One last important detail is that here we are accessing the id with this.props.params.id (instead of simply this.props.id): params is a special object created by React Router when using a component from a Route and it allows to propagate routing parameters into components.
//It will be easier to understand this concept when we will see how to setup the routing part of the application.
