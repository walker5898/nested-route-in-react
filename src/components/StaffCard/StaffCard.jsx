import React from "react";

function StaffCard({ item }) {
  return (
    <div className="flex flex-col items-start gap-2 p-3 border-2 border-red-400 rounded-xl">
      <h2 className="text-2xl">
        <span className="text-red-400">Name </span>: {item.name}
      </h2>
      <h3>
        <span className="text-red-400">Age </span>: {item.age}
      </h3>
      <h4 className="text-xl">
        <span className="text-red-200">Position </span>: {item.grade}
      </h4>
    </div>
  );
}

export default StaffCard;
