import * as core from "@actions/core";
import runMansheAI from "mansheai";
const [githubUser, githubRepo] = process.env.GITHUB_REPOSITORY.split("/");
(async () => {
  try {
    const aikey = core.getInput("ai_key");
    const githubToken = core.getInput("github_token");
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
