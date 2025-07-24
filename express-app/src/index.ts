import express from "express";
import z from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number(),
});

app.post("/sum", (req, res) => {
    const paredResponse = sumInput.safeParse(req.body);

    if (!paredResponse.success) {
        return res.status(411).json({
            message: "Invalid Inputs",
        });
    }

    const answer = paredResponse.data.a + paredResponse.data.b;
    res.json({ answer });
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"]),
    });

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect Inputs",
        });
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;
    return res.json({
        answer,
    });
});
