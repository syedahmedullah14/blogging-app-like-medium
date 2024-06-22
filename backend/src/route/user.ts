import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@syedahmedullahjaser/zod-inference-medium-blog";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const { success } = signupInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			msg: "Inputs are incorrect"
		})
	}
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({ jwt });
	
  } catch(e) {
		return c.status(403);
	}
})

userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const { success } = signinInput.safeParse(body);
	if(!success){
		c.status(411);
		return c.json({
			msg: "Inputs are incorrect"
		})
	}
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403); //unauthorised
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})
