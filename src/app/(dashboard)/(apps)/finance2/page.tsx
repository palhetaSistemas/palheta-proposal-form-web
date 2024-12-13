import { ExpenseDonutGraph } from "./expenseDonutGraph";
import { IncomeDonutGraph } from "./incomeDonutGraph";
import ReportsSnapshot from "./reports-snapshot";

export default async function FinancesPage({ params }: { params: string }) {
  return (
    <div>
      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="col-span-12 lg:col-span-4">
            <ExpenseDonutGraph />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <IncomeDonutGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
