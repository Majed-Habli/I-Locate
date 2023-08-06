<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    function insertContact(Request $request){
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->longitude = $request->longitude;
        $contact->latitude = $request->latitude;
        $contact->save();

        return response()->json([
            "status" => "success",
            "data" => $contact
        ]);
    }

    function getContacts($id=null){
        if ($id){
            $contact = Contact::find($id);
        }else{
            $contact = Contact::all();
        }

        return response()->json([
            "status" => "successfully got the contact",
            "data" => $contact
        ]);
    }
}
