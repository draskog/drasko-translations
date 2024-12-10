<?php

namespace Outhebox\TranslationsUI\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Outhebox\TranslationsUI\Enums\RoleEnum;
use Outhebox\TranslationsUI\Traits\HasDatabaseConnection;

class Contributor extends Authenticatable
{

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'role' => RoleEnum::class,
    ];

    public function isOwner(): bool
    {
        return true;
    }

    public function isTranslator(): bool
    {
        return false;
    }

    public function isAdministrator(): bool
    {
        return true;
    }
}
