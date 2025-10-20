import Header from "@/components/header";
import { createClient } from "@/utils/supabase/server";
import { Toast, ToastProvider } from "@radix-ui/react-toast";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";


export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
    }>) {
        const supabase = await createClient(); 

        const { data, error } = await supabase.auth.getUser();
        
        if (error || !data?.user) {
            redirect('/login');
        }
    return( 
        <div>
            <Header />
            {children}
            <Toaster />
        </div>
    )
}