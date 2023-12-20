"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { vanFormSchema } from "@/lib/validator";
import * as z from "zod";

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
        <div className="flex gap-5 sm:flex-row md:flex-row lg:flex-col">
          <FormField
            control={form.control}
            name="vanType"
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
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default VanForm;
