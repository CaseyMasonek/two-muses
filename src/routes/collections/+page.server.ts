import { supabase } from "$lib/supabaseClient";

export async function load() {

    let { data: collection, error } = await supabase
        .from('collection')
        .select('*')

    console.log(collection)

    return {
        collections: collection ?? [],
    };
}