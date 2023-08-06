<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get("/contacts/{id?}",[ContactController::class, "getContacts"]);
Route::post("/insert_contact",[ContactController::class, "insertContact"]);