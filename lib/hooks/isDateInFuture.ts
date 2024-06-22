'use client'
export const isDateInFuture = (date: string): boolean => {
    // Parse the release date and get the current date in the Phoenix time zone
    const releaseDateInPhoenix = new Date(date).toLocaleString('en-US', { timeZone: 'America/Phoenix' });
    const nowInPhoenix = new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' });

    // Convert to Date objects for comparison
    const releaseDateObj = new Date(releaseDateInPhoenix);
    const nowObj = new Date(nowInPhoenix);

    // Check if the release date is after the current date
    return releaseDateObj > nowObj;
  };