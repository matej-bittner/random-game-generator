"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { advancedFilterData } from "@/constants";
import { useState } from "react";

export const AdvanceFilter = ({
  onSubmit,
  isPending,
}: {
  onSubmit: any;
  isPending: boolean;
}) => {
  const defaultValues = {
    mood: 0,
    platform: 6,
    release: 2,
    rating: 65,
    game_mode: 1,
    sequels: 0,
    action: "advance",
  };
  const [advanceFilter, setAdvanceFilter] = useState(defaultValues);

  const handleSubmit = () => {
    onSubmit(advanceFilter);
    setAdvanceFilter(defaultValues);
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="md:max-2xl:absolute md:max-2xl:translate-x-[160px] transition"
      >
        <Button
          className="rounded-xl border-2 bg-transparent text-black hover:bg-black/5"
          disabled={isPending}
        >
          Advance Filter
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:w-[80%] lg:w-[90%] max-w-[950px] overflow-auto max-h-screen">
        <DialogHeader className="text-center items-center">
          <DialogTitle>Advance Filtering</DialogTitle>
          <DialogDescription>
            Please select below what suit you best and click on next
          </DialogDescription>
        </DialogHeader>
        <div
          id="dialog-content"
          className="flex max-lg:flex-col gap-4 py-4 items-center justify-around"
        >
          {/*left*/}
          <div className=" flex flex-col gap-2 items-center text-center">
            {/*current mood*/}
            {advancedFilterData.map((item, i) => {
              if (i > 2) return null;
              return (
                <div key={i} className="space-y-2">
                  <h2>{item.title}</h2>
                  <div
                    className={`button-div ${item.slug === "rating" ? "max-lg:grid-cols-4 lg:grid-cols-3" : "grid-cols-3"}`}
                  >
                    {item.allTypes.map((data, i) => (
                      <button
                        name={item.slug}
                        key={i}
                        onClick={(e: any) =>
                          setAdvanceFilter({
                            ...advanceFilter,
                            [e.target.name]: data.id,
                          })
                        }
                        className={`${data.id === (advanceFilter as { [key: string]: any })[item.slug] ? "border-slate-500 bg-main-green/5" : ""} ${item.slug === "platform" && "last:col-span-2"}`}
                      >
                        {data.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          {/*right*/}
          <div className="flex flex-col gap-2 items-center   h-full text-center">
            {advancedFilterData.map((item, i) => {
              if (i < 3) return null;
              return (
                <div key={i} className="space-y-2">
                  <h2>{item.title}</h2>
                  <div
                    className={`${i > 3 ? "grid-cols-2" : "grid-cols-3"} button-div   mx-auto`}
                  >
                    {item.allTypes.map((data, i) => (
                      <button
                        name={item.slug}
                        key={i}
                        onClick={(e: any) =>
                          setAdvanceFilter({
                            ...advanceFilter,
                            [e.target.name]: data.id,
                          })
                        }
                        className={`${data.id === (advanceFilter as { [key: string]: any })[item.slug] ? "border-slate-500 bg-main-green/5" : ""} ${item.slug === "platform" && "last:col-span-2"}`}
                      >
                        {data.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <DialogFooter className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setAdvanceFilter(defaultValues)}
          >
            Reset
          </Button>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Find Game
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
