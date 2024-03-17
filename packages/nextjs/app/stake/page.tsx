import type { NextPage } from "next";
import AddLiquidity from "~~/components/extra/AddLiquidity";

const StakePage: NextPage = () => {
  return (
    <div className="flex justify-center items-center border-t-8 border-gray-200 pt-5">
      <AddLiquidity />
    </div>
  );
};

export default StakePage;
