declare module "*.css" {
  const content: {
    [key in string]: string;
  };
  export default content;
}
