import React from 'react';
import Facilities from './Facilities';
import Ig from './InnovationGarage';
import Collabs from './PastCollaborations';
import Role from './RoleOfCII';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Index() {
    return (
        <>
        <Navbar />
           <Facilities />
           <Ig />
           <Collabs />
           <Role />
           <Footer />
        </>
    )
}
