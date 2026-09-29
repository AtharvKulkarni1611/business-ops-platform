import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCustomers(organizationId: string) {
  return prisma.customer.findMany({
    where: {
      organizationId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
export async function createCustomer(data: {
  organizationId: string;
  name: string;
  email?: string;
  company?: string;
}) {
  return prisma.customer.create({
    data: {
      organizationId: data.organizationId,
      name: data.name,
      email: data.email,
      company: data.company,
    },
  });
}