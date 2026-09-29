import { FastifyInstance } from "fastify";
import {
  listCustomers,
  addCustomer,
} from "../controllers/customer.controller";

export async function customerRoutes(app: FastifyInstance) {
  app.get("/api/customers", listCustomers);
  app.post("/api/customers", addCustomer);
}