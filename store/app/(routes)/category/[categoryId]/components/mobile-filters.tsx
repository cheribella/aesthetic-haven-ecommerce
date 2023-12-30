"use client";

import { Color, Size } from "@/types";

import { useState } from "react";

import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div>
      <>
        <Button
          onClick={onOpen}
          className="flex items-center lg:hidden gap-x-2 rounded-full"
        >
          Filters
          <Plus size={20} />
        </Button>

        <Dialog
          as="div"
          open={open}
          onClose={onClose}
          className="relative lg:hidden z-40"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed flex inset-0 z-40">
            <Dialog.Panel className="bg-white flex flex-col h-full w-full relative max-w-xs ml-auto py-4 pb-6 shadow-xl overflow-y-auto">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X onClick={onClose} size={14} />} />
              </div>

              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </>
    </div>
  );
};

export default MobileFilters;
