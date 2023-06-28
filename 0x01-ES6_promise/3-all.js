import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResponse, createUserResponse]) => {
      console.log(
        'body',
        createUserResponse.firstName,
        createUserResponse.lastName
      );
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

