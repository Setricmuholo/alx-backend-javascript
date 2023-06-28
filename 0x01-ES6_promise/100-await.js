// Importing uploadPhoto and createUser from utils.js
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Calling uploadPhoto and createUser functions concurrently
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Returning the responses in the specified format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Returning an empty object if any of the async functions fail
    return {
      photo: null,
      user: null,
    };
  }
}

