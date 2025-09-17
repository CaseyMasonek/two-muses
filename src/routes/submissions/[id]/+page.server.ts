import { supabase } from '$lib/supabaseClient.js'

export async function load({params}) {
    const submission = await supabase.from('submission').select().eq('id',params.id)

    return {submission: submission.data![0]}
}