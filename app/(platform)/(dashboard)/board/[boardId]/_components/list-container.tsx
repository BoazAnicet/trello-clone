"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import ListForm from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export const ListContainer = ({ boardId, data }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState<ListWithCards[]>(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  // const moveList = (fromIndex: number, toIndex: number) => {
  //   const newData = [...orderedData];
  //   const [removed] = newData.splice(fromIndex, 1);
  //   newData.splice(toIndex, 0, removed);
  //   setOrderedData(newData);
  // };

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
