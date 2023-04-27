/**
 * AWS λ lambda user service
 * This lambda contents all the handlers to interact with users table.
 *
 * @module lambda-user-service
 */

import createUserHttpEventHandler from "./src/user-lambda";
import createAddUserHttpEventHandler from "./src/add-user-lambda";
import config from "./src/config/config";

const handleHttpUsers = createUserHttpEventHandler(config);
const handleHttpAddUsers = createAddUserHttpEventHandler(config);

export { handleHttpUsers, handleHttpAddUsers };
