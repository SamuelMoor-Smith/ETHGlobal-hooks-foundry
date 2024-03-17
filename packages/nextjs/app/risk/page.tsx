import type { NextPage } from "next";
import Risk from "~~/components/extra/Risk";

const RiskPage: NextPage = () => {
  return (
    <div className="flex justify-center items-center border-t-8 border-gray-200 pt-5">
      <Risk />
    </div>
  );
};

export default RiskPage;
