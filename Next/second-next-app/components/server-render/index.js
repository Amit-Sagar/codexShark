"use client";
import React, { useEffect, useState } from "react";
import Box from "../UI/Box";
import Card from "../UI/Card";

const ServerRenderingData = ({ data }) => {
  const [end, setEnd] = useState(4);
  const [page, setPage] = useState({ startPoint: 0, endPoint: end });

  const handleInfiniteScroll = () => {
    if (
      window.scrollY + window.innerHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      setEnd(end + 4);
      setPage({
        startPoint: 0,
        endPoint: end,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  return (
    <Box className="grid grid-cols-2 bg-black">
      {data.slice(page.startPoint, page.endPoint).map((item) => {
        return (
          <Card className="mx-auto p-6" key={item.id}>
            <div className="flex flex-col">
              <img src={item.image} className="object-cover h-[350px]" />
            </div>
            <div className="flex flex-col h-[150px]">
              <p className="font-semibold text-xl mt-1">{item.title}</p>
              <p className="text-sm mt-4">{item.description}</p>
            </div>
          </Card>
        );
      })}
    </Box>
  );
};

export default ServerRenderingData;