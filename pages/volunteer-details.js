import React from 'react'
import Layout1 from '../Components/Layout/Layout1'
import VolunteerDetailsArea from '../Components/Elements/VolunteerDetails/VolunteerDetailsArea'
import VolunteerDetailsTeam from '../Components/Elements/VolunteerDetails/VolunteerDetailsTeam'

export default function VolunteerDetails() {
    return (
        <Layout1>
            <VolunteerDetailsArea/>
            <VolunteerDetailsTeam/>
        </Layout1>
    )
}
