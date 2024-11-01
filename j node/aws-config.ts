import dotenv from 'dotenv';
import AWS from 'aws-sdk';

// Load environment variables from .env file
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-east-1', // No need to specify region; AWS will auto-detect if running on AWS infrastructure
});

// Export the AWS object so it can be used in other files
export default AWS;
