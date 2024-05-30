import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
  audience: "mern_food-ordering-app-api",
  issuerBaseURL: "https://dev-ma3asayg2035qlnb.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
