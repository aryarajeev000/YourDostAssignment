import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center border rounded px-2 py-1 w-full md:w-80">
      <FiSearch className="text-gray-500 mr-2" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name or email"
        className="w-full outline-none"
      />
    </div>
  );
}
