import React from "react";
import { useGlobalHook } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalHook();
  return (
    <>
      <div>
        <h1>Tech News </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
