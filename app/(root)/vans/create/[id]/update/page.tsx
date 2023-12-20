import VanForm from "@/components/shared/VanForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateVan = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold  sm:text-left md:text-center">
          Update Van
        </h3>
      </section>

      <div className="wrapper my-8">
        <VanForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateVan;
