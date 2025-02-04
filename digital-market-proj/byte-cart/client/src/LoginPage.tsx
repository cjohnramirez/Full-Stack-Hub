import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import LoginPage1 from "./assets/LoginPage1.jpg";
import { ModeToggle } from "./components/mode-toggle";

function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center p-10">
      <Card className="flex h-full max-h-[800px] max-w-[800px] items-center">
        <div className="h-full w-1/2 p-4">
          <img src={LoginPage1} className="h-full rounded-xl object-cover" />
        </div>
        <div className="grid h-full grid-rows-[1fr_80%_1fr] py-4 pr-4">
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="flex h-full flex-col justify-center">
            <CardHeader>
              <CardTitle>Create an Account</CardTitle>
              <CardDescription>Already have an account? Login</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-2">
              <div className="flex gap-2">
                <Input type="text" placeholder="First name" />
                <Input type="text" placeholder="Last name" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Enter your Password" />
              <div className="my-2 flex items-center gap-2">
                <Checkbox id="termsAndServices" />
                <label htmlFor="termsAndServices">
                  <p className="text-sm">I agree to the terms and services</p>
                </label>
              </div>
              <Button>Create Account</Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
