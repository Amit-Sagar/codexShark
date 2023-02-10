import React from "react";
import Box from "../UI/Box";
import Card from "../UI/Card";
import ShowData from "./ShowData";

const StaticRenderData = ({ staticData }) => {
  return (
    <Box className=" grid grid-cols-2">
      {staticData.map((item) => {
        return (
          <Card key={item.id} className="mx-auto p-6">
            <ShowData
              userInfo="Name"
              userDetails={`${item.name.firstname} ${item.name.lastname}`}
            />
            <ShowData userInfo="Email" userDetails={item.email} />
            <ShowData userInfo="Username" userDetails={item.username} />
            <ShowData userInfo="Address" userDetails={item.address.city} />
            <ShowData userInfo="Phone" userDetails={item.phone} />
          </Card>
        );
      })}
    </Box>
  );
};

export default StaticRenderData;
