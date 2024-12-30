export const isGreaterThan24Hours = (createdAtString: string): boolean => {
  try {
    const createdAt = new Date(createdAtString);
    const now = new Date();

    // Calculate the difference in milliseconds
    const differenceInMs = now.getTime() - createdAt.getTime();

    // Convert milliseconds to hours
    const differenceInHours = differenceInMs / (1000 * 60 * 60);

    // Return true if the difference is greater than 24 hours, false otherwise
    return differenceInHours > 24;
  } catch (error) {
    console.error('Error parsing date:', error);
    return false; // or throw an error, depending on your error handling strategy
  }
};