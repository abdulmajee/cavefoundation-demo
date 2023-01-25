import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import VolunteerAbout from "../Components/Elements/Volunteer/VolunteerAbout";
import VolunteerBreadCrumb from "../Components/Elements/Volunteer/VolunteerBreadCrumb";
import VolunteerNewsfeed from "../Components/Elements/Volunteer/VolunteerNewsfeed";
import VolunteerNewsletter from "../Components/Elements/Volunteer/VolunteerNewsletter";
import VolunteerTeamArea from "../Components/Elements/Volunteer/VolunteerTeamArea";

export default function volunteer() {
  return (
    <Layout1>
      <VolunteerBreadCrumb />
      <VolunteerAbout />
      <VolunteerTeamArea />
      <VolunteerNewsletter />
      <VolunteerNewsfeed />
    </Layout1>
  );
}
