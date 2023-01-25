import React from 'react'
import DonationBreadCrumb from '../Components/Elements/Donation/DonationBreadCrumb'
import DonationDonationArea from '../Components/Elements/Donation/DonationDonationArea'
import Layout1 from '../Components/Layout/Layout1'

export default function donation() {
    return (
        <Layout1>
            <DonationBreadCrumb/>
            <DonationDonationArea/>
        </Layout1>
    )
}
