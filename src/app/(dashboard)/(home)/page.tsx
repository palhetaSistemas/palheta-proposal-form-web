import { getDictionary } from "@/src/app/dictionaries";
import DashboardPageView from "../(home2)/dashboard/page-view";

interface DashboardProps {
  params: {
    lang: any;
  };
}
const Dashboard = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang);
  return <DashboardPageView trans={trans} />;
};

export default Dashboard;
