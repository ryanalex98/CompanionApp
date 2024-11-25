import EncryptedStorage from 'react-native-encrypted-storage';

// Save the token
async function saveToken(token) {
  try {
    await EncryptedStorage.setItem('session_token', token);
  } catch (error) {
    console.error('Failed to save session token:', error);
  }
}

// Retrieve the token
async function getToken() {
  try {
    const token = await EncryptedStorage.getItem('session_token');
    return token;
  } catch (error) {
    console.error('Failed to fetch session token:', error);
  }
}

// Delete the token
async function clearToken() {
  try {
    await EncryptedStorage.removeItem('session_token');
  } catch (error) {
    console.error('Failed to clear session token:', error);
  }
}

async function logout() {
    await clearToken(); // Clear session token
    // await EncryptedStorage.removeItem('refresh_token'); // Clear refresh token
    // Redirect to login screen or home
  }