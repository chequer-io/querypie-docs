import { Vercel } from '@vercel/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

const branch = process.env.BRANCH;

async function deleteDeployments() {
  try {
    const listResponse = await vercel.deployments.getDeployments({
      branch,
    });

    const targetDeployments = listResponse.deployments.filter(
      ({ name, target }) => name === 'querypie-docs' && target === null,
    );

    for (const target of targetDeployments) {
      const deletedDeployment = await vercel.deployments.deleteDeployment({
        id: target.uid,
      });

      console.log(`Deployment deleted: ID ${deletedDeployment.uid} and status ${deletedDeployment.state}`);
    }
  } catch (error) {
    throw new Error(error instanceof Error ? `Error: ${error.message}` : String(error));
  }
}

(async () => {
  await deleteDeployments();
})();
