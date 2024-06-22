import moment from 'moment-timezone';

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


export const isDateInFutureTZ = (date: string): boolean => {
  // Parse the release date in the Phoenix time zone
  const releaseDateInPhoenix = moment.tz(date, 'America/Phoenix');
  // Get the current date in the Phoenix time zone
  const nowInPhoenix = moment.tz('America/Phoenix');

  // Check if the release date is after the current date
  return releaseDateInPhoenix.isAfter(nowInPhoenix);
};
