import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
    it("Should return the sum of two numbers", async () => {
        const response = await request(app).post("/sum").send({
            a: 1,
            b: 2,
        });
        // console.log(response);
        expect(response.statusCode).toBe(200);
        expect(response.body.answer).toBe(3);
    });
});
