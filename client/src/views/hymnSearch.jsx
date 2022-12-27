import React, { useEffect, useState } from "react";

import Search from "../components/search";

const HymnSearch = (props) => {
  const { hymn, setHymn } = props;

  return (
    <div className="Main">
      <Search hymn={hymn} setHymn={setHymn} />
    </div>
  );
};

export default HymnSearch;
