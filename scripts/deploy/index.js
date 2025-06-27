import { Vercel } from '@vercel/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

const targetEnv = process.env.TARGET_ENV;
const branch = process.env.BRANCH;

async function createAndCheckDeployment() {
  if (targetEnv === 'production' && branch !== 'main') {
    throw new Error('배포 타겟이 Production일 때는 브랜치를 반드시 main으로 설정해주세요.');
  }

  try {
    const createResponse = await vercel.deployments.createDeployment({
      requestBody: {
        name: 'querypie-docs', //The project name used in the deployment URL
        target: targetEnv === 'production' ? 'production' : undefined,
        gitSource: {
          type: 'github',
          repo: 'querypie-docs',
          ref: branch,
          org: 'chequer-io', //For a personal account, the org-name is your GH username
        },
      },
    });

    const deploymentId = createResponse.id;

    console.log(`Deployment created: ID ${deploymentId} and status ${createResponse.status}`);

    // Check deployment status
    let deploymentStatus;
    let deploymentURL;
    do {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds between checks

      const statusResponse = await vercel.deployments.getDeployment({
        idOrUrl: deploymentId,
        withGitRepoInfo: 'true',
      });

      deploymentStatus = statusResponse.status;
      deploymentURL = statusResponse.url;
      console.log(`Deployment status: ${deploymentStatus}`);
    } while (deploymentStatus === 'BUILDING' || deploymentStatus === 'INITIALIZING' || deploymentStatus === 'QUEUED');

    if (deploymentStatus === 'READY') {
      console.log(`Deployment successful. URL: ${deploymentURL}`);
    } else {
      throw new Error('Deployment failed or was canceled');
    }
  } catch (error) {
    throw new Error(error instanceof Error ? `Error: ${error.message}` : String(error));
  }
}

(async () => {
  await createAndCheckDeployment();
})();
