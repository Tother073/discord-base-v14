import { env } from "process";
import { Prisma, PrismaClient } from '@prisma/client';








type Client = Omit<PrismaClient, "$connect" | "$disconnect" | Lowercase<Prisma.ModelName>>;
type Database = Pick<PrismaClient, Lowercase<Prisma.ModelName>>;
type ExecuteHandler<R> = (db: Database, client: Client) => Promise<R>;


export async function execute<R>(handler: ExecuteHandler<R>) {
    const prisma = new PrismaClient({
        datasources: { db: { url: env.DATABASE_URL } }
    });

    try {
        await prisma.$connect();
        return await handler(prisma, prisma);
    } finally {
        await prisma.$disconnect();
    }
};