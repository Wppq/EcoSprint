<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\History;
use App\Models\Rank;
use App\Models\Transaction;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        try {
            if ($request['auth_role'] == "user") {
                $transactions = DB::table('transactions')
                    ->join('donations', 'transactions.donation_id', '=', 'donations.id')
                    ->where('transactions.user_id', $request['auth_id'])
                    ->orderBy('transactions.updated_at', 'desc')
                    ->select('transactions.*', 'donations.title')
                    ->get();

                return response()->json($transactions, 200);
            }
            $query = DB::table('transactions')
                ->join('donations', 'transactions.donation_id', '=', 'donations.id')
                ->where('transactions.status', "=", "pending")
                ->select('transactions.status', 'transactions.sender', 'transactions.amount', 'transactions.payment_method', 'transactions.image_path', 'transactions.id as id', 'donations.title as title')
                ->get();
            return response()->json($query, 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'something went wrong'], 500);
        }

    }

    public function create(Request $request)
    {
        try {
            if ($request['auth_role'] != "user") {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
            $validator = Validator::make($request->json()->all(), [
                'amount' => 'required|numeric|min:20000',
                'payment_method' => 'required|string|in:BNI,BRI,BSI,gopay',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $donationFound = Donation::where('id', $request->json('id'))->first();
            if (!$donationFound) {
                return response()->json(['message' => 'Donation not found.'], 404);
            }
            Transaction::create([
                'user_id' => $request['auth_id'],
                'donation_id' => $donationFound->id,
                'amount' => $request->json('amount'),
                'payment_method' => $request->json('payment_method'),
                'status' => 'pending',
            ]);
            return response()->json(['message' => 'Successfully create transaction'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'something make it happen'], 500);
        }
    }

    public function update(Request $request, string $id)
    {
        try {
            if ($request['auth_role'] != "admin") {
                return response()->json(['error' => 'Unauthorized'], 403);
            }
            $validator = Validator::make($request->json()->all(), [
                'status' => 'required|string|in:berhasil,pending,gagal',
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $transaction = Transaction::where('id', $id)->with('donation')->first();
            if (!$transaction) {
                return response()->json(['error' => 'Not found'], 404);
            }

            $transaction->update([
                'status' => $request->json('status')
            ]);

            if ($request->json('status') == 'berhasil') {
                History::create([
                    'user_id' => $transaction->user_id,
                    'type' => 'donation',
                    'title' => $transaction->donation->title,
                    'score' => $transaction->amount / 20000,
                    'status' => 'selesai',
                ]);
                Donation::updateOrCreate(
                    [
                        'id' => $transaction->donation->id
                    ],
                    [
                        'collected_trees' => DB::raw("collected_trees + " . ($transaction->amount / 20000))
                    ]
                );
                Rank::updateOrCreate(
                    [
                        'user_id' => $transaction->user_id
                    ],
                    [
                        'score' => DB::raw("score + " . ($transaction->amount / 20000))
                    ]
                );
            }

            return response()->json(['message' => 'Successfully transaction status updated.'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'something make it happen'], 500);
        }
    }

    public function uploadProof(Request $request, string $id)
    {
        try {
            if ($request['auth_role'] != "user") {
                return response()->json(['message' => 'Unauthorized'], 403);
            }
            $validator = Validator::make($request->all(), [
                'sender' => 'required|string|max:255',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }
            $senderName = $request->input('sender');
            if ($request->hasFile('image')) {
                $image = $request->file('image');

                $imageName = time() . '_' . $senderName . '.' . pathinfo($image->getClientOriginalName(), PATHINFO_EXTENSION);
                $image->move(public_path('images'), $imageName);

                $transaction = Transaction::where('id', $id)->first();
                $transaction->update(
                    [
                        'sender' => $senderName,
                        'image_path' => $imageName
                    ]
                );
                $transaction->save();
                return response()->json([
                    'message' => 'Successfully upload proof transaction.'
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'something make it happen'], 500);
        }
    }

}
