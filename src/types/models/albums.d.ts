interface IAlbum {
    userId: number,
    id: number,
    title: string,
}

type TAlbumsState = {
    albums: IAlbum[],
    error:string,
    loading:boolean
}

type TAlbumsAction = {
    type:string,
    payload?:IAlbum[],
    error?:string
}
type TAlbumsDispatch = (args: TAlbumsAction) => TAlbumsAction;
