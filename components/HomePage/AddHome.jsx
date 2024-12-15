import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const AddHome = () => {
  return (
    <div className="add-home-container container-fluid">
      <div className="container">
        <div className="col-12">
          <div className="content">
            <div className="head">
              <FontAwesomeIcon className="plus-icon" icon={faCirclePlus} />
              <h3>Add your own</h3>
            </div>
            <p>
              Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know
              someone who should be on hobbycue? Go ahead and Add your Own page
            </p>

            <Link href="##">
              <button>Add New</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHome;
