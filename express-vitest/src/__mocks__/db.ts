import { PrismaClient } from "../generated/prisma/client";
import { mockDeep, mockReset } from "vitest-mock-extended";

export const client = mockDeep<PrismaClient>();
