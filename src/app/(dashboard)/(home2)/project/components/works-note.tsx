import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import Link from "next/link";

const WorksNote = () => {
  const data = [
    {
      task: "Atendimento Cliente",
      date: "11 Jan 2024",
      host: "Matheus Reis",
      link: "#",
    },
    {
      task: "Atendimento Cliente",
      date: "11 Jan 2024",
      host: "João Reis",
      link: "#",
    },
    {
      task: "Atendimento Cliente",
      date: "11 Jan 2024",
      host: "André Reis",
      link: "#",
    },
    {
      task: "Atendimento Cliente",
      date: "11 Jan 2024",
      host: "Bruno Reis",
      link: "#",
    },
    {
      task: "Atendimento Cliente",
      date: "11 Jan 2024",
      host: "Thiago Reis",
      link: "#",
    },
  ];
  return (
    <Card>
      <CardHeader className="sm:flex-row border-none gap-4 pt-6">
        <div className="flex-1">
          <div className="text-xl font-medium tex-default-900">Sua Agenda</div>
          {/* <div className="text-sm font-medium text-default-600">
            Total 482 participants
          </div> */}
        </div>
        <Button type="button" color="secondary" asChild>
          <Link href="#">Ver Todos</Link>
        </Button>
      </CardHeader>
      <CardContent className="p-3 md:p-6 pt-0">
        <Calendar className=" dark:bg-background shadow-sm rounded-lg" />
        {/* task list */}
        <div className="space-y-5 mt-6">
          {data.map((item, index) => (
            <div
              className="flex justify-between items-center gap-4 pl-4 relative before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-default-200"
              key={`works-note-${index}`}
            >
              <div>
                <div className="text-xs text-default-500 mb-1.5">
                  {item.date}
                </div>
                <div className="text-sm font-medium text-default-800 mb-[2px]">
                  {item.task}
                </div>
                <div className="text-xs text-default-600">
                  Responsável
                  <span className="font-medium text-primary/90 ml-1">
                    {item.host}
                  </span>
                </div>
              </div>
              <Button
                type="button"
                color="primary"
                size="sm"
                className="h-8"
                asChild
              >
                <Link href={item.link}>Abrir Compromisso</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorksNote;
