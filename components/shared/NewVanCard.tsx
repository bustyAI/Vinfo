import Link from "next/link";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const NewVanCard = () => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px] justify-center items-center">
      <Link href="/vans/create">
        <CiSquarePlus className="w-[200px] h-[200px] text-gray-500" />
      </Link>
    </div>
  );
};

export default NewVanCard;
