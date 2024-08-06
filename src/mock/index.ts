import {setupWorker} from "msw/browser";
import user from "@/mock/handlers/user.ts";

const worker = setupWorker(...user)
export default worker