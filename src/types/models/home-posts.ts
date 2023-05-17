type HomePayload = BasicPayload<1001, string>;
// type HomeResponse = BasicResponse<{ search_result: IAlbum[] }>;
type HomeResponse = Promise<IAlbum[]>;

export type { HomePayload, HomeResponse };
