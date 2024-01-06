import VanForm from "@/components/shared/VanForm";
import { getVanById } from "@/lib/actions/van.actions";
import { auth } from "@clerk/nextjs";
import React from "react";

type UpdateVanProps = {
  params: {
    id: string;
  };
};

const UpdateVan = async ({ params: { id } }: UpdateVanProps) => {
  const { sessionClaims } = auth();

  const van = await getVanById(id);
  const userId = sessionClaims?.userId as string;

  console.log("UserID: " + userId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold  sm:text-left md:text-center">
          Update Van
        </h3>
      </section>

      <div className="wrapper my-8">
        <VanForm userId={userId} type="Update" van={van} vanId={van._id} />
      </div>
    </>
  );
};

export default UpdateVan;
