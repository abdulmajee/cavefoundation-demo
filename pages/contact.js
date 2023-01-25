import React from 'react'
import ContactBreadCrumb from '../Components/Elements/Contact/ContactBreadCrumb'
import ContactGetInTouch from '../Components/Elements/Contact/ContactGetInTouch'
import ContactGMap from '../Components/Elements/Contact/ContactGMap'
import Layout1 from '../Components/Layout/Layout1'

export default function contact() {
    return (
        <Layout1>
            <ContactBreadCrumb/>
            <ContactGetInTouch/>
            <ContactGMap/>
        </Layout1>
    )
}
