// if the user goes to a bogus route, send them to the root homepage
export default (): null => {
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }

  return null;
};
