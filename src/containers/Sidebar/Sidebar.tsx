import SidebarCategoriesUi from "./SidebarCategoriesUi";

function Sidebar() {
  return (
    <aside className=" w-64 flex flex-col items-start gap-y-6 ">
      <div
        style={{
          background:
            "radial-gradient(195.14% 166.19% at 104% -10%,rgb(232, 77, 112),rgb(163, 55, 246) 53.089%,rgb(40, 167, 237) 100%)",
        }}
        className="rounded-[10px] h-36 text-white-900 w-full p-6 flex flex-col items-start justify-end "
      >
        <h2 className=" tracking-tight text-start text-md font-bold">
          Frontend Mentor
        </h2>
        <p className="font-medium text-sm text-start tracking-normal">
          Feedback Board
        </p>
      </div>
      <SidebarCategoriesUi />
    </aside>
  );
}

export default Sidebar;
