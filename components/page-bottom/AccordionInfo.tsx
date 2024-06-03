import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionInfo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[90%] mx-auto  p-2 rounded-md"
    >
      <AccordionItem value="item-1 ">
        <div className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
          <p className="">
            Games data are provided by{" "}
            <a
              target="_blank"
              href="https://www.igdb.com/"
              className="underline font-medium"
            >
              IGDB
            </a>
            .
          </p>
        </div>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How works "Find Best Price" ?</AccordionTrigger>
        <AccordionContent>
          On click you will be redirected to G2A.com where you can Buy Cheap
          Games. It is the largest global marketplace for digital entertainment
          products and services with deals on video games at the most attractive
          prices on the market.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
