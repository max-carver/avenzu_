import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { jobTypeData, licensesData } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { useState, useTransition } from "react";
import clsx from "clsx";
import { PilotSchema } from "@/schemas";

export const PilotForm = () => {
  const form = useForm<z.infer<typeof PilotSchema>>({
    resolver: zodResolver(PilotSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      age: undefined,
      gender: undefined,
      nationality: "",
      country: "",
      licenses: [],
      aircrafts: [],
      totalTime: undefined,
      pic: undefined,
      timeInSecond: undefined,
      singleEngineLand: undefined,
      multiEngineLand: undefined,
      jetTime: undefined,
      turbineTime: undefined,
      helicopterTime: undefined,
      instructorTime: undefined,
      jobTypes: [],
      visas: "",
      cvUpload: undefined,
      photoUpload: undefined,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="p-5 rounded-lg shadow-lg border border-zinc-300 space-y-5 w-1/2 mx-auto absolute top-28 z-20 bg-zinc-50"
      >
        <h3 className={clsx("text-center font-medium text-2xl mb-5", {})}>
          Pilots
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Joe" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Matthews" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="joematthews@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="0833894457" type="tel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="33" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Male">Male</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="South African" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Country of residence</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="United Kingdom"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="licenses"
            render={() => (
              <FormItem>
                <FormLabel className="mb-1">Licenses</FormLabel>
                {licensesData.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="licenses"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col">
            <p className="font-semibold text-xs">Experience (in hours)</p>
            <div className="flex items-center justify-between gap-x-6">
              <FormField
                control={form.control}
                name="totalTime"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel className="font-regular italic">
                      Total time
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="100" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pic"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel className="font-regular italic">
                      Pilot in command
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="75" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeInSecond"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel className="font-regular italic">
                      Second in command
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="70" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="singleEngineLand"
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormLabel className="font-regular italic">
                      Single engine land
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="65" type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="multiEngineLand"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel className="italic">Multi engine land</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="60" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jetTime"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel className="italic">Jet time</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="55" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="turbineTime"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel className="italic">Turbine time</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="50" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="helicopterTime"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel className="italic">Helicopter time</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="45" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="instructorTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="italic">Instructor time</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="40" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobTypes"
            render={() => (
              <FormItem>
                <FormLabel className="mb-1">Job type</FormLabel>
                {jobTypeData.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="jobTypes"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visas</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your current valid visas separated by a comma"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between gap-x-6">
            <FormField
              control={form.control}
              name="cvUpload"
              render={({ field }) => (
                <FormItem className="flex flex-col w-1/2">
                  <FormLabel className="mb-1">CV upload</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                        }
                      }}
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 cursor-pointer "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photoUpload"
              render={({ field }) => (
                <FormItem className="flex flex-col w-1/2">
                  <FormLabel className="mb-1">Photo upload</FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                        }
                      }}
                      className="block w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 cursor-pointer "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormError message="" />
        <FormSuccess message="" />
        <button
          type="submit"
          className={clsx(
            "mt-5 w-full text-center bg-red-500 hover:bg-red-500/60 transition duration-200 py-2 rounded-lg text-zinc-50",
            {}
          )}
        >
          Submit
        </button>
      </form>
    </Form>
  );
};
