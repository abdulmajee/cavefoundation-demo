import Layout1 from '../Components/Layout/Layout1'
import EventDetsailBreadCrumb from "../Components/Elements/EventDetails/EventDetsailBreadCrumb"
import EventCauseDetail from '../Components/Elements/EventDetails/EventCauseDetail'

export default function EventDetails() {
    return (
        <Layout1>
            <EventDetsailBreadCrumb/>
            <EventCauseDetail/>   
        </Layout1>
    )
}
