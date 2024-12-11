<?php

namespace Outhebox\TranslationsUI\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;

class Authenticate
{
    protected Auth $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @throws AuthenticationException
     */
    public function handle(Request $request, Closure $next)
    {
        if ($this->auth->guard('web')->check()) {
            $this->auth->shouldUse('web');
        } else {
            throw new AuthenticationException(
                'Unauthenticated.', ['web'], route('ltu.login')
            );
        }

        return $next($request);
    }
}
