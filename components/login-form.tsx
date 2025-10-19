"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useActionState } from "react";
import { login, LoginState } from "@/app/(auth)/login/actions";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Loader, MessageCircle } from "lucide-react";

export function LoginForm() {
    const [state, formAction, pending] = useActionState<LoginState, FormData>(login, {
            success:null,
            message: "",
        });

  return (
    <Card mx-auto max-w-sm>
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
                Digite seu email para recevber o link de login.
            </CardDescription>
            <CardContent>
                <form action={formAction} >
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="maria@gmail.com" 
                        required
                        />
                        </div>

                        {state.success === true && (
                            <Alert className="text-muted-foreground">
                                <MessageCircle className="h-4 w-4 !text-green-600" />
                                <AlertTitle className="text-green-50">Email enviado!</AlertTitle>
                                <AlertDescription>
                                    Confir seu inbox para acessar o link de login.
                                </AlertDescription>
                            </Alert>
                        )}

                         {state.success === false && (
                            <Alert className="text-muted-foreground">
                                <MessageCircle className="h-4 w-4 !text-red-600" />
                                <AlertTitle className="text-green-50">Email enviado!</AlertTitle>
                                <AlertDescription>
                                    Ocorreu um erro ao enviar um link de login. Por favor, entre em contato com o suporte!
                                </AlertDescription>
                            </Alert>
                        )}

                        <Button type="submit" className="mt-4">
                            {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                          Login    
                        </Button>
                    </div>
                </form>           
            </CardContent>
        </CardHeader> 
    </Card>
  )
}