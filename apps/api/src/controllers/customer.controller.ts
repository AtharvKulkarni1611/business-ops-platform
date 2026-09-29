import { FastifyRequest, FastifyReply } from "fastify";
import {
  getCustomers,
  createCustomer,
} from "../services/customer.service";

interface CustomerQuery {
  organizationId?: string;
}

interface CreateCustomerBody {
  organizationId: string;
  name: string;
  email?: string;
  company?: string;
}

export async function listCustomers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const query = request.query as CustomerQuery;

  if (!query.organizationId) {
    return reply.status(400).send({
      error: "organizationId is required",
    });
  }

  const customers = await getCustomers(query.organizationId);

  return reply.send(customers);
}

export async function addCustomer(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const body = request.body as CreateCustomerBody;

  if (!body.organizationId || !body.name) {
    return reply.status(400).send({
      error: "organizationId and name are required",
    });
  }

  const customer = await createCustomer(body);

  return reply.status(201).send(customer);
}