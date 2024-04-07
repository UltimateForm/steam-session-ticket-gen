import { Command } from "commander";
import { getSessionTicket } from "./lib/steam";
const program = new Command();

program
	.name("Session Key Gen")
	.description(
		"CLI to generate steam session gen, requires ownership of target apps and running Steam instance"
	);

program
	.argument("<appid>")
	.action(async (appid: string) => {
		const appIdParsed = Number.parseInt(appid);
		if (!appIdParsed) throw new Error("AppId must be numeric");
		const session = await getSessionTicket(appIdParsed);
		console.log(`GENERATED SESSION TICKET: ${session}`);
		process.exit();
	})
	.parse();
