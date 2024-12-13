import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";

export function Releases() {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <Button>LANÇAMENTO</Button>
        <div className="flex flex-row items-center gap-2">
          <Button type="button" color="primary" asChild>
            <Link href="#">2024</Link>
          </Button>
          <Button type="button" color="secondary" asChild>
            <Link href="#">Selecionar Data</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-1 md:p-5"></CardContent>
    </Card>
  );
}
