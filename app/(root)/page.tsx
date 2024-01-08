import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import VanCollection from "@/components/shared/VanCollection";
import { getAllVans } from "@/lib/actions/van.actions";

export default async function Home() {
  const vans = await getAllVans({
    query: "",
    vanType: "",
    page: 1,
    limit: 6,
  });

  console.log(vans);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Manage Your Fleet On Out Platform</h1>
            <p className="p-regular-20 md:p-regular-24">
              Keep up to date with your entire fleet!
            </p>
          </div>

          <Image
            src="/assets/images/amazon.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="vans" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Trusted by <br />
          your local DSP
        </h2>
        <VanCollection
          data={vans?.data}
          emptyTitle="No Vans Found"
          emptyStateSubtext="Register your fleet now"
          collectionType="All_Vans"
          limit={1000}
          totalPages={1}
          page={""}
        />
      </section>
    </>
  );
}
