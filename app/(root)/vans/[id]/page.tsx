import { getVanById } from "@/lib/actions/van.actions";
import { SearchParamProps } from "@/types";
import React from "react";
import Image from "next/image";
import Van from "@/lib/database/models/van.model";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = async ({ params: { id } }: SearchParamProps) => {
  const van = await getVanById(id);
  const creator = await Van.findById(id).populate("creator");

  console.log(van);
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain ">
      <div className=" grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src="/rivian.png"
          alt="Vehicle Image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-contain object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold px-1">{van.name.toUpperCase()} </h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-blue-500/10 px-5 py-2 text-black">
                  {van.vanType}
                </p>
              </div>
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{" "}
                <span className="text-primary-500">
                  {creator.creator.firstName} {creator.creator.lastName}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 md:gap-3">
              <FaUser className=" mt-[2px]" />
              <p>{creator.creator.username}</p>
              <MdEmail className="mt-1" />
              <p className="">{creator.creator.email}</p>
            </div>
          </div>
          <div className="p-regular-20 flex-center gap-3"></div>
        </div>
        <div className="flex flex-col gap-2 ml-4">
          <p className="p-bold-20 text-gray-600">Maintenance</p>
          <p className="p-medium-16  lg:p-regualr-18">{van.maintenance}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
