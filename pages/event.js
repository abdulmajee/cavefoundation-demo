import React from 'react'
import Layout1 from '../Components/Layout/Layout1'
import EventBreadCrumb from '../Components/Elements/Event/EventBreadCrumb'
import EventDonationArea from '../Components/Elements/Event/EventDonationArea'
import EventRecentCause from '../Components/Elements/Event/EventRecentCause'

export default function Event() {
    return (
        <Layout1>
            <EventBreadCrumb/>
            <EventRecentCause/>
            <EventDonationArea/>
        </Layout1>
    )
}
