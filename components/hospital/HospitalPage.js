import React from "react";

const HospitalPage = () => {
  return (
    <div className="hospital-page">
      <div className="hospital-filter" id="hospital-filter-id">
        <form className="hospital-search-form" id="hospital-search-form-id">
          <p>Filters</p>
          <div className="hospital-form-inputs">
            <label for="">
              <small>Name:</small>
              <input
                type="text"
                name="name"
                class="search-hospital"
                id="id_name"
              />
            </label>
            <label>
              <small>Country:</small>
              <input
                type="text"
                name="country"
                className="search-hospital"
                id="id_country"
              />
            </label>
            <label>
              <small>City:</small>
              <input
                type="text"
                name="city"
                className="search-hospital"
                id="id_city"
              />
            </label>
            <label>
              <small>Address:</small>
              <input
                type="text"
                name="address"
                className="search-hospital"
                id="id_address"
              />
            </label>
          </div>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalPage;
