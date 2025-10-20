'use server'

import { createClient } from "@/utils/supabase/server";

export type CreateGroupState = {
    success: null | boolean;
    message?: string;
};

export async function createGroup(
    _previousState: CreateGroupState,
    formData: FormData
) {
    const supabase = await createClient();
    // console.log("Supabase inicializado."); // TESTE 1: aparece?

    const { data: authUser, error: authError } = await supabase.auth.getUser();

    if (authError) {
        return {
            success: false,
            message: "Ocorreu um erro ao criar o grupo"
        }
    } 
    const names = formData.getAll("name");
    const email = formData.getAll("email");
    const groupName = formData.get("groupName")

    console.log(names, email, groupName)
}