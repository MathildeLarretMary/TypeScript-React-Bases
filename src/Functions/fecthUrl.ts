export default async function fetchURL (url : string) : Promise<any> {
    try {
      // Use the fetch function to make a network request to the specified URL
      const response = await fetch(url);
  
      // Parse the response body as JSON and wait for the result
      const data = await response.json();
  
      // Return the parsed JSON data
      return data;
    } catch (err : any) {
      // If any error occurs during the fetch or JSON parsing, log the error message
      console.log('Error:', err.message);
  
      // Re-throw the error to propagate it further if needed
      throw err;
    }
};