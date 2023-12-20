"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { vanFormSchema } from "@/lib/validator";
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

type VanFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const VanForm = ({ userId, type }: VanFormProps) => {
  const initialVals = vanDefaultValues;
  const form = useForm<z.infer<typeof vanFormSchema>>({
    resolver: zodResolver(vanFormSchema),
    defaultValues: initialVals,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof vanFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  <Input
                    placeholder="Van name"
                    {...field}
                    className="input-field"
                  />
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
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
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
                  <Input
                    placeholder="Van Brand"
                    {...field}
                    className="input-field"
                  />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default VanForm;
