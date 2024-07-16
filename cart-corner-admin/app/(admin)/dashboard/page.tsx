import AnalyticsCard from "@/src/components/ui/AnalaticsCard";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded p-6">
        Welcome to admin Dashboard
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
        <AnalyticsCard totalProducts={232} inHouseProducts={220} sellersProducts={50} />
      </div>
    </>
  );
};

export default Dashboard;
