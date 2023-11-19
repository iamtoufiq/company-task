const apiUrl = 'https://shlok-mittal-lawyer-backend.vercel.app/';
const createBannerEndpoint = 'api/v1/admin/CreateBanner';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGZlMTc4MjMyMzIwNmVmMjViOWJiOSIsImlhdCI6MTY4NzI0NDkzNywiZXhwIjoxNjg3NTA0MTM3fQ.Da6PdS-gas3q-1NAZQqfNE6-u9pBByQalpa6F6lHDjM'; // Replace with your actual token

export const createBanner = async (bannerData) => {
  const url = `${apiUrl}${createBannerEndpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bannerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response Data:', responseData);
    return responseData;
    // Handle the response data as needed

  } catch (error) {
    console.error('Error:', error.message);
    // Handle errors
  }
};


