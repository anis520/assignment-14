import { SignJWT, jwtVerify } from "jose";

export async function createToken(email) {
  let secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setAudience()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
  let secret = new TextEncoder().encode(process.env.JWT_SECRET);

  let decoded = await jwtVerify(token, secret);
  return decoded;
}
