/**
 * AWS λ lambda authorization service
 * This lambda contents all the handlers to identify and authorize the user transactions.
 *
 * @module lambda-authorizer
 */

import createSignUpHttpEventHandler from "./src/sign-up-lambda";
import createSignInHttpEventHandler from "./src/sign-in-lambda";
import createVerificationEventHandler from "./src/authorizer-lambda";
import config from "./src/config/config";

const handleHttpSignUp = createSignUpHttpEventHandler(config);
const handleHttpSignIn = createSignInHttpEventHandler(config);
const handleHttpValidation = createVerificationEventHandler(config);

export { handleHttpSignUp, handleHttpSignIn, handleHttpValidation };
