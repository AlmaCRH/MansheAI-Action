import * as core from "@actions/core";
import runMansheAI from "mansheai";
const [githubUser, githubRepo] = process.env.GITHUB_REPOSITORY.split("/");

(async () => {
  try {
    const mycode = core.getInput("my_code");
    const aikey = core.getInput("ai_key");

    await runMansheAI({
      mycode,
      aikey,
      githubUser,
      githubRepo,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
