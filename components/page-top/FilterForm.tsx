"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import ErrorCard from "@/components/page-top/ErrorCard";
import { FilterFormProps } from "@/types";
import { AdvanceFilter } from "@/components/page-top/AdvanceFilter";
import React from "react";

export function FilterForm({
  onSubmit,
  error,
  form,
  isPending,
  genres,
}: FilterFormProps) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 items-center flex flex-col px-6 2xl:absolute 2xl:w-full 2xl:left-0 2xl:flex-row 2xl:space-y-0 2xl:items-start 2xl:gap-8 2xl:justify-center"
      >
        <div className="gap-4 items-center flex max-md:flex-col w-full md:items-start max-w-[800px] md:justify-between ">
          <div className="flex flex-col max-md:items-center gap-3 xl:gap-5 max-md:w-[80%] md:w-1/2 ">
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full ">
                  {genres && (
                    <>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              disabled={isPending}
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "form-field w-full max-w-[400px] mx-auto justify-between placeholder:text-black g-transparent focus-visible:ring-offset-0 focus-visible:ring-0 hover:bg-white/40",
                              )}
                            >
                              {field.value
                                ? genres.find(
                                    (genre) => genre.id === field.value,
                                  )?.name
                                : "Select Genre"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-black " />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 ">
                          <Command>
                            <CommandList className="">
                              <CommandInput
                                className=""
                                placeholder="Search Genre..."
                              />
                              <CommandEmpty>No language found.</CommandEmpty>
                              <CommandGroup className="">
                                {genres.map((genre) => (
                                  <CommandItem
                                    className=""
                                    value={genre.name}
                                    key={genre.id}
                                    onSelect={() => {
                                      form.setValue("genre", genre.id);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        genre.id === field.value
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                    {genre.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goodRated"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-2 md:pl-2">
                      <Checkbox
                        disabled={isPending}
                        onCheckedChange={() => field.onChange(!field.value)}
                        id="terms"
                        className="md:h-6 md:w-6 md:border-2"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Only Good Rated Games{" "}
                        <span className="text-xs pl-1">(rating over 80)</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex max-sm:flex-col gap-2 sm:gap-8 md:w-1/2 md:justify-end">
            <FormField
              control={form.control}
              name="releaseFrom"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Release From*"
                      type="number"
                      className="form-field w-[150px] placeholder:text-black g-transparent focus-visible:ring-offset-0 focus-visible:ring-0"
                      onChange={(event) => field.onChange(+event.target.value)}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseTo"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Release To*"
                      type="number"
                      className="form-field w-[150px] placeholder:text-black g-transparent focus-visible:ring-offset-0 focus-visible:ring-0"
                      onChange={(event) => field.onChange(+event.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <ErrorCard message={error} />
        <div className="flex flex-col gap-[1px] 2xl:gap-2 items-center relative">
          <Button
            type="submit"
            className="bg-main-green text-lg rounded-xl hover:bg-main-green/90 transition "
            size="lg"
            disabled={isPending}
          >
            Find Games
          </Button>
          <p className="md:hidden font-medium">Or</p>
          <AdvanceFilter onSubmit={onSubmit} isPending={isPending} />
        </div>
      </form>
    </Form>
  );
}
