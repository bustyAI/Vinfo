import VanCollection from "@/components/shared/VanCollection";
import { Button } from "@/components/ui/button";
import { getVansByUser } from "@/lib/actions/van.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const vans = await getVansByUser({ userId, page: 1 });
  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Vans</h3>
        </div>
        <section className=" bg-primary-50 bg-dotted-pattern bg-cover bg-center md:py-10">
          <VanCollection
            data={vans?.data}
            emptyTitle="No Vans Created Yet"
            emptyStateSubtext="Create Your Fleet Today"
            collectionType="Vans_Organized"
            limit={10}
            page={1}
            urlParamName="vansPage"
            totalPages={4}
          ></VanCollection>
        </section>
      </section>
    </>
  );
};

export default page;
