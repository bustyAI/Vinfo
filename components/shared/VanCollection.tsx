import { IVan } from "@/lib/database/models/van.model";
import React from "react";

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
  return <div>VanCollection</div>;
};

export default VanCollection;
