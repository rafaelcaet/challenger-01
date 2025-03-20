import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { routes } from "./routes/routes";

const app = fastify();
app.register(fastifyCors, { origin: "*" });

app.register(routes);

app.listen({ port: 3333 }).then(() => {
  console.log("http server running at port 3333");
});
