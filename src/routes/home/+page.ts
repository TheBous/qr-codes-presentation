import type { PageLoad } from './$types';

export const load = (async ({ url }) => {

    const { searchParams } = url;
    const timer = searchParams.get('timer');
    const qr = searchParams.get('qr');
    const format = searchParams.get('format');
    const preTimer = searchParams.get('pretimer');
    const postTimer = searchParams.get('posttimer');
    const loop = searchParams.get('loop') === 'true';
    const skip = searchParams.get('skip');

    return { timer, qr, format, preTimer, postTimer, loop, skip };
}) satisfies PageLoad;