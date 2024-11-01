import AWS from './aws-config'; // Import the configured AWS instance

// Initialize AWS services
const s3 = new AWS.S3();
const dynamoDb = new AWS.DynamoDB();
const lambda = new AWS.Lambda();

// Export the initialized services for use in other parts of the app
export { s3, dynamoDb, lambda };
