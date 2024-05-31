import { ColorRing } from "react-loader-spinner";

function SuspenseLoading() {
  return (
    <div className="h-screen w-full flex justify-center pt-20">
      <ColorRing
        visible={true}
        height="140"
        width="140"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}

export default SuspenseLoading;
