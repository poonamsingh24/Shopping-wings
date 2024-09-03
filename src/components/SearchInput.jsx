import React from "react";
import Container from "./Container";

export default function () {
  return (
    <Container>
      <div className="mt-2 max-w-full md:max-w-2xl mx-auto">
        <form action="search-products">
          <input
            type="action"
            placeholder="Search..."
            className="shadow w-full  border-orange-200"
          />
        </form>
      </div>
    </Container>
  );
}
