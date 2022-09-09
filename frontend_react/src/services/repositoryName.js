const getRepositoryName = (url) => {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

  const match = url.match(regex);

  if (match[2]) {
    const values = match[2].split("/");
    return `${values[1]}/${values[2]}`;
  }
};

export default getRepositoryName;