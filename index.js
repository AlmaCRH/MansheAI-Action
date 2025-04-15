import * as core from "@actions/core";
import runMansheAI from "mansheai";
const [githubUser, githubRepo] = process.env.GITHUB_REPOSITORY.split("/");
const githubToken = process.env.GITHUB_TOKEN
(async () => {
  try {
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
