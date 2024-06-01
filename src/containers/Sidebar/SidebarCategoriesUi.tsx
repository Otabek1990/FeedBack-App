import { useState } from "react";
import Button from "../../components/ui/Button";
import { sidebarCategories } from "./sidebarCategories";

function SidebarCategoriesUi() {
  const [activeId, setActiveId] = useState<number | undefined>(1);
  const handleChooseCategory = (id?: number) => {
    setActiveId(id);
  };
  return (
    <div className="h-40 rounded-[10px] p-6 bg-white-900 w-full">
      <div className="w-full flex items-start gap-x-2 gap-y-3 flex-wrap">
        {sidebarCategories.map((ctg) => (
          <Button
            id={ctg.id}
            handleClick={handleChooseCategory}
            key={ctg.id}
            styles={` py-1  px-4 ${
              activeId === ctg.id
                ? "bg-blue-500 text-white-500"
                : "bg-white-500 text-blue-500"
            }  font-semibold text-sm`}
          >
            {ctg.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default SidebarCategoriesUi;
