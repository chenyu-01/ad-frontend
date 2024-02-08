"use client";
import { config } from "@/config";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const serverUrl = config.serverUrl;
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of appointment is required.",
  }),
});

export default function DatePickerForm(props) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  function onSubmit(data) {
    const requestBody = {
      ownerId: props.owner,
      buyerId: "1", //tmp
      propertyId: props.id,
      appointmentDate: data.dob.toISOString(), // 转换日期为 ISO 字符串
    };

    fetch(serverUrl + "/api/appointment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setIsSubmitted(true);
        setFormData(requestBody); // 或其他表示成功的状态
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function closeDialog() {
    setShowDialog(false);
    setFormData(null);
  }

  if (isSubmitted) {
    return (
      <div className="p-4 rounded-md">
        <h2 className="text-lg text-black"> Submitted Successfully!</h2>
        <pre className="mt-2 text-black">
          {/* <code>{JSON.stringify(formData, null, 2)}</code> */}
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Appointment</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Please pick a date that you are available for a meeting.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
