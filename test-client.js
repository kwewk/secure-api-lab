const BASE_URL = 'http://localhost:3000';

const userCredentials = {
  'X-Login': 'user1',
  'X-Password': 'password123',
};

const adminCredentials = {
  'X-Login': 'admin1',
  'X-Password': 'password123',
};

const runTests = async () => {
  console.log('--- Running API Tests ---');
  console.log('\n[TEST 1] Getting documents as a user...');

  try {
    const response = await fetch(`${BASE_URL}/documents`, {
      method: 'GET',
      headers: userCredentials,
    });

    const data = await response.json();

    console.log('Status:', response.status);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n[TEST 2] Trying to get employees as a user...');

  try {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: 'GET',
      headers: userCredentials,
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n[TEST 3] Getting employees as an admin...');

  try {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: 'GET',
      headers: adminCredentials,
    });

    const data = await response.json();
    console.log('Status:', response.status);

    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }

  console.log('\n--- Tests finished ---');
};

runTests();