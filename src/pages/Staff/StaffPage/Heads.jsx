import React from "react";
import StaffCard from "../../../components/StaffCard/StaffCard";
import { datas } from "../../../datas/datas";

function Heads() {
  return (
    <div className="w-[100%] h-[100vh] bg-slate-500 flex flex-col items-center gap-3 p-5 max-md:h-[auto]">
      <h1 className="text-3xl m-3">Heads</h1>
      {datas.map((item) => (
        <StaffCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Heads;
