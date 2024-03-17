import type { NextPage } from "next";
import AddLiquidity from "~~/components/extra/AddLiquidity";
import RemoveLiquidity from "~~/components/extra/RemoveLiquidity";

const AddLiquidityPage: NextPage = () => {
  return (
    <div className="flex justify-center items-center border-t-8 border-gray-200 pt-20">
      <AddLiquidity />
      <RemoveLiquidity />
    </div>
  );
};

export default AddLiquidityPage;
