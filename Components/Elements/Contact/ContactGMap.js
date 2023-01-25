import React from "react";

export default function ContactGMap() {
  return (
    //google map area start

    <div className="contact_map_area">
      <div className="container-fluid g-0">
        <div className="contact_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1968.0579065850573!2d-0.8257161!3d9.4112365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd43b81fa221961%3A0xebd7f5715811be81!2sNorthern%20Regional%20Coordinating%20Council%20(NRCC)!5e0!3m2!1sen!2str!4v1671644173863!5m2!1sen!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    //google map area end
  );
}
