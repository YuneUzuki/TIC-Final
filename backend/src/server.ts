import Fastify from "fastify";
import { AppRoutes } from "./routes";
import cors from '@fastify/cors'
const app = Fastify();

app.listen({port: 776}).then(() => {console.log("Server Running")});
app.register(AppRoutes); app.register(cors);