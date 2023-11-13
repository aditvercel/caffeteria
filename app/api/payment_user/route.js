import { NextResponse } from "next/server";
const midtransClient = require("midtrans-client");

export async function POST(request) {
  try {
    const resData = await request.json();
    console.log(resData);

    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: "SB-Mid-server-6vGGkCSCpjh6LaAkIoOvMvI9",
      clientKey: "SB-Mid-client-cum_oWwlUr-0kyM5",
    });

    let parameter = {
      transaction_details: {
        order_id: "YOUR-ORDERID-123456",
        gross_amount: resData,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: "customer",
        email: "customer@example.com",
      },
    };

    // Wait for the transaction to be created
    const transaction = await snap.createTransaction(parameter);

    // Get the transaction token
    const transactionToken = transaction.token;
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour}:${minute}`;

    console.log(time, "transactionToken:", transactionToken);

    // Now you can use the transaction details, including the redirect URL
    const redirectUrl = transaction.redirect_url;
    console.log("Redirect URL:", redirectUrl);

    // Redirect the user to the generated URL
    return NextResponse.json(redirectUrl);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ err: error.message }, { status: 400 });
  }
}
