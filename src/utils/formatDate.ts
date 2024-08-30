export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };