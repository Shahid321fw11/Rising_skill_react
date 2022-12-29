import React from "react";

const Header = () => {
  return (
    <>
      <div className="container bg-light px-0 py-3 d-flex justify-content-between">
        <button type="button" class="btn btn-danger">
          HOME
        </button>
        <button type="button" class="btn btn-danger">
          PROJECTS
        </button>
        <button type="button" class="btn btn-danger">
          MEDIA
        </button>
        <button type="button" class="btn btn-danger">
          CONTACTS
        </button>
      </div>
    </>
  );
};

export default Header;
