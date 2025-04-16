import * as core from "@actions/core";
import runMansheAI from "mansheai";
const [githubUser, githubRepo] = process.env.GITHUB_REPOSITORY.split("/");
(async () => {
  try {
    const aikey = core.getInput("ai_key");
    const githubToken = core.getInput("github_token");
    if (!aikey || typeof aikey !== "string" || aikey.length < 10) {
      throw new Error("AI key not received or malformed");
    }
    console.log("✅ AI key length:", aikey.length);
    await runMansheAI({
      githubToken,
      aikey,
      githubUser,
      githubRepo,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
