import * as core from "@actions/core";
import { runMansheAI } from "mansheai/src/main.js";
const [githubUser, githubRepo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  try {
    const githubToken = core.getInput("github_token");
    const aikey = core.getInput("ai_key");

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
