import steamworks from "steamworks.js";

export async function getSessionTicket(appId: number) {
	const client = steamworks.init(appId);
	const ticket = await client.auth.getSessionTicket(60);
	const ticketHex = ticket.getBytes().toString("hex");
	return ticketHex;
}
