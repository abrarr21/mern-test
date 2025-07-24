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

    it("should return 411 if the inputs are invalid", async () => {
        const response = await request(app)
            .post("/sum")
            .send({
                a: [122],
            });

        expect(response.statusCode).toBe(411);
        expect(response.body.message).toBe("Invalid Inputs");
    });
});

describe("GET /sum", () => {
    it("Should return the sum of two numbers", async () => {
        const res = await request(app)
            .get("/sum")
            .set({
                a: "1",
                b: "2",
            })
            .send();

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("Should the return 411 if no inputs are provided in the headers", async () => {
        const res = await request(app).get("/sum").send();
        expect(res.statusCode).toBe(411);
    });
});
