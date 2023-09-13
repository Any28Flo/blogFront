
export interface User {
    name: string,
    email: string,
}
export interface Post{
    id: number,
    title: string,
    content: string,
    createdAt: string,
}
  
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
};
