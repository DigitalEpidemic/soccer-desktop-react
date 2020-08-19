import React from "react";
import { Tag } from "../../ui/misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bg="#0e1731" size="50px" color="#ffffff">
          Matches
        </Tag>
        BLOCK
        <Tag bg="#ffffff" size="22px" color="#0e1731" link={true} linkTo="/the_team">
          See More Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
