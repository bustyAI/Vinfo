"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { vanFormSchema } from "@/lib/validator";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  FormLabel,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { vanDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";

import { FaShuttleVan, FaPercent } from "react-icons/fa";
import { BsFuelPumpFill } from "react-icons/bs";
import { SiMercedes } from "react-icons/si";
import { handleError } from "@/lib/utils";
import { createVan, updateVan } from "@/lib/actions/van.actions";
import { GiCharging } from "react-icons/gi";
import DropDownCharge from "./DropDownCharge";
import { IVan } from "@/lib/database/models/van.model";

type VanFormProps = {
  userId: string;
  type: "Create" | "Update";
  van?: IVan;
  vanId?: string;
};

const VanForm = ({ userId, type, van, vanId }: VanFormProps) => {
  const initialVals = van && type === "Update" ? van : vanDefaultValues;
  const router = useRouter();
  const form = useForm<z.infer<typeof vanFormSchema>>({
    resolver: zodResolver(vanFormSchema),
    defaultValues: initialVals,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof vanFormSchema>) {
    if (type === "Create") {
      try {
        const newVan = await createVan({
          van: { ...values },
          userId,
          path: "/profile",
        });

        if (newVan) {
          form.reset();
          router.push(`/vans/${newVan._id}`);
        }
      } catch (error) {
        handleError(error);
      }
    }
    if (type === "Update") {
      if (!vanId) {
        router.back();
        return;
      }

      try {
        const updatedVan = await updateVan({
          userId,
          van: { ...values, _id: vanId },
          path: `/vans/${vanId}`,
        });

        if (updatedVan) {
          form.reset();
          router.push(`/vans/${updatedVan._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-5 flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <FaShuttleVan />
                    <Input
                      placeholder="Van name"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <BsFuelPumpFill />
                    <Dropdown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isCharging"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <GiCharging />
                    <DropDownCharge
                      onChangeHandler={(selectedOption) => {
                        // Assuming value is a value that can be mapped to a boolean
                        field.onChange(selectedOption === "true");
                      }}
                      value={field.value}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vanType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <SiMercedes />
                    <Input
                      placeholder="Van Brand"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chargePercent"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <FaPercent />
                    <Input
                      placeholder="Charge Percent"
                      {...field}
                      className="input-field"
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? value : Number(value));
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-5 ">
            <FormField
              control={form.control}
              name="maintenance"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className=" h-64">
                    <Textarea
                      placeholder="Maintenance Description"
                      {...field}
                      className="text-area rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Van`}
        </Button>
      </form>
    </Form>
  );
};

export default VanForm;
