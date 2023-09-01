import type { PageLoad } from './$types';

export const load = (async ({ url }) => {

    const { searchParams } = url;
    const timer = searchParams.get('timer');
    const qr = searchParams.get('qr');

    return { timer, qr };
}) satisfies PageLoad;