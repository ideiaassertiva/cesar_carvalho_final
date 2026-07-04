import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, cnpj, momento, revenue } = body;

    // Formatting values for the sheet
    const momentMap: Record<string, string> = {
      mei: "Sou MEI ou autônomo",
      eupresa: "Sou dono e centralizo quase tudo",
      equipe_sem_processo: "Tenho empresa com equipe, falta processo",
      equipe_escalar: "Já tenho equipe, quero escalar"
    };

    const revenueMap: Record<string, string> = {
      under_10k: "Até R$ 10k",
      "10k_to_80k": "R$ 10k – R$ 80k",
      "80k_to_300k": "R$ 80k – R$ 300k",
      "300k_to_1m": "R$ 300k – R$ 1M",
      over_1m: "Acima de R$ 1M"
    };

    const formattedMoment = momentMap[momento] || momento;
    const formattedRevenue = revenueMap[revenue] || revenue;
    const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // Format private key correctly (replace \n string literals with actual newlines)
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Página1!A1:G1", // Mude para o nome da sua aba se não for 'Página1' (geralmente Sheet1 em inglês)
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [date, name, phone, email, cnpj, formattedMoment, formattedRevenue]
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Error saving to Google Sheets:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
