import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Setting up your project...
          </CardTitle>
          <CardDescription>
            Paige is currently setting up your project. The changes will be
            reflected here shortly.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
