import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-40">
        <div className="w-[500px]">
          <Image
            width={300}
            height={300}
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
          />
          <h2 className="text-2xl">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <div>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Facebook Login</CardTitle>
              <CardDescription>
                Make A Friends on Facebook
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="email" placeholder="email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input id="password" placeholder="password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
             
              <Button className="w-full">Login</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
