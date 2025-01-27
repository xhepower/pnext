"use server";
import { cookies } from "next/headers";
export async function guardarToken(token: string) {
  const cookiesP = cookies();
  if (token) {
    cookiesP.set("accessToken", token, {
      path: "/",

      httpOnly: true,
    });
  }
}
export async function leerToken() {
  const cookiesP = cookies();

  return cookiesP.get("accessToken") || null;
}
export async function borrarToken() {
  const cookiesP = cookies();
  cookiesP.delete("accessToken");
}
export async function Token() {
  const cookiesP = cookies();

  return cookiesP.get("accessToken") || null;
}
