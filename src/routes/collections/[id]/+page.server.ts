import { supabase } from '$lib/supabaseClient.js'

export async function load({ params }) {
    const id = params.id

    const {data} = await supabase.from('collection').select('*').eq('id', id)

    const submissions = await supabase.from('submission').select('*').eq('collection_id',id)

    console.log(data![0], submissions)

    return {
        collection: data![0],
        submissions: submissions.data!
    }
}