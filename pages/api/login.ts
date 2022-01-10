import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie';

import { setCookie } from '../../utils/cookies'

interface RequestBody {
    idToken: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    var cookies = cookie.parse(req.headers.cookie || '');
    setCookie(res, 'idToken', req.body.idToken, {
        path: '/',
    });
    
    // @ts-ignore
    return res.status(204).send();
}