import AWS from './aws-config';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

// Initialize S3 service
const s3 = new AWS.S3();

// Function to upload a file to S3
export const uploadFileToS3 = async (bucketName: string, key: string, fileContent: Buffer | string) => {
  const params: PutObjectRequest = {
    Bucket: bucketName,
    Key: key,
    Body: fileContent,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully:', data.Location);
    return data.Location; // Return the URL of the uploaded file
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Function to list all files in a bucket
export const listFilesInS3Bucket = async (bucketName: string) => {
  const params = {
    Bucket: bucketName,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    console.log('Files in bucket:', data.Contents);
    return data.Contents;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};
