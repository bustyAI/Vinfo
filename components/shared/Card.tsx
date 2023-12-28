import { IVan } from "@/lib/database/models/van.model";
import Link from "next/link";
import React from "react";
import { FaSearch, FaEdit } from "react-icons/fa";
import { auth } from "@clerk/nextjs";
import { DeleteConfirmation } from "./DeleteConfirmation";

type VanProps = {
  van: IVan;
  hasOrderLink?: boolean;
};

const Card = ({ van, hasOrderLink }: VanProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isVanCreator = userId === van.creator._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/vans/${van._id}`}
        style={{ backgroundImage: `url("/rivian.png")` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      ></Link>

      {isVanCreator && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/vans/${van._id}/update`}>
            <FaEdit className="w-[20px] h-[20px]" />
          </Link>

          <DeleteConfirmation vanId={van._id} />
        </div>
      )}

      <Link
        href={`/vans/${van._id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        <div className="flex gap-2 ">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 ">
            asdfshldj
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
            {van.name.toUpperCase()}
          </p>
        </div>
        <p className="p-medium-16 p-medium-18 text-grey-500">asdfasdfasdfa</p>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          asdfasdfhja;sldjfasdfaafsdfasd
        </p>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {van.creator.firstName} {van.creator.lastName}
          </p>
          {hasOrderLink && (
            <Link href={`/vans?vanId=${van._id}`} className="flex gap-2">
              <p className="text-primary-500">Van Details</p>
              <FaSearch className="h-[10px] w-[10px]" />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
