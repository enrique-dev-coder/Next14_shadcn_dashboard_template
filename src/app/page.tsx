import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <p>
        El proyectoya trae dark mode Solo se usa este componente de modeToggle y
        ya queda
      </p>
      <p>Los componentes de shadcn se encargan de cambiar a dark mode y todo</p>
      <ModeToggle />
      <h1 className="font-bold">Shad ui examples</h1>
      <p>
        {" "}
        a cada boton se le pueden poner las props de className, variant, size,
        asChild
      </p>
      <div className="flex gap-4 mt-2">
        <Button>Shad button</Button>
        <Button variant="default">Shad button</Button>
        <Button variant="ghost">Shad button</Button>
        <Button variant="outline">Shad button</Button>
      </div>
      <p className="mt-6">
        {" "}
        En este caso se usan las buton variants para darle el estilo a un Link ,
        asi tienes tu propio componente
      </p>
      <div className="flex gap-4 mt-2">
        <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>
          Esto es un link
        </Link>
        <p className={cn(buttonVariants({ variant: "destructive" }))}>
          Esto es un {"<p>"}
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "text-lg text-yellow-500"
          )}
        >
          Esto es un link con variantes de boton y clases agregadas de tailwind
        </Link>
      </div>
      <Separator className="my-4 " />
      <Card>
        <CardHeader>
          <CardTitle>Ventaja</CardTitle>
          <CardDescription>
            Otra ventaja de esto es que como tienes el componente en tu codigo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Es mucho mas facil de cambiar o personalizar </p>
        </CardContent>
        <CardFooter>
          <p>
            Asi si haces un cambio en un componete se cambia en todo el proyecto
          </p>
        </CardFooter>
      </Card>
      <Separator className="my-4 " />
      <Alert className="w-1/2">
        <Terminal className="h-4 w-4" />
        <AlertTitle>
          Algo muy util es que se puede cambiar el tema del color a todos los
          componentes, tambien las clases que usas con className tienen
          prioridad sobre las clases que ya tienes
        </AlertTitle>
        <AlertDescription>
          Lo unico que tienes que hacer es copiar y reemplazar en globals.css el
          codigo que te da en el link https://ui.shadcn.com/themes <br />
          En ese link te dan los codigos en los colorcitos
        </AlertDescription>
      </Alert>
    </main>
  );
}
