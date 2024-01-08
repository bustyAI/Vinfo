import { IVan } from "@/lib/database/models/van.model";
import React from "react";
import Card from "./Card";
import NewVanCard from "./NewVanCard";

type CollectionProps = {
  data: IVan[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  collectionType?: "Vans_Organized" | "My_Vans" | "All_Vans";
  urlParamName?: string;
};

const VanCollection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-10">
            {data.map((van) => {
              const hasOrderLink = collectionType === "Vans_Organized";
              return (
                <li key={van._id} className="flex justify-center">
                  <Card van={van} hasOrderLink={hasOrderLink} />
                </li>
              );
            })}
            <li className="flex justify-center">
              <NewVanCard />
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h-5-bold ">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default VanCollection;
